import { Xendit, PaymentRequest as PaymentRequestClient, Invoice as InvoiceClient } from 'xendit-node';
import { NextResponse } from "next/server";
import fx from '@m00nbyte/currency-converter';

function generateUUID() {
    // Generate a random UUID (v4) - RFC4122 compliant
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0,
            v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

export function POST({id, productName, price, quantity, totalPrice, firstName, lastName, email, phoneNumber, 
    descriptionText, cardNumber, cardExp, cardCvv}) {
    try {
        const paymentId = generateUUID();
        const convertedPrice = fx(totalPrice, 'usd', 'idr');
        const convertedFirstPrice = fx(price, 'usd', 'idr');
        const xenditClient = new Xendit({secretKey: process.env.XENDIT_TOKEN});
        const { PaymentRequest, Invoice } = xenditClient;

        console.log(`${totalPrice} ${convertedPrice}`);
    
        const dataInvoice = {
            "amount" : convertedPrice,
            "invoiceDuration" : 172800,
            "externalId" : paymentId,
            "description" : descriptionText + ` || Pembelian ${productName} atas nama ${firstName} ${lastName}`,
            "currency" : "IDR",
            "reminderTime" : 1,
            "customer": {
                "givenNames": firstName,
                "surname": lastName,
                "email": email,
                "mobileNumber": phoneNumber
            },
            "items": [
                {
                  "name": productName,
                  "quantity": quantity,
                  "price": convertedFirstPrice
                }
              ],
            "successRedirectUrl": "https://uniskai.vercel.app/",
            "failureRedirectUrl": "https://uniskai.vercel.app/failed"
        };
        const xenditInvoiceClient = new InvoiceClient({secretKey: process.env.XENDIT_TOKEN});
        const invoice = xenditInvoiceClient.createInvoice({
            data: dataInvoice
        });
        console.log(invoice);
        return NextResponse.json({ "url": invoice["invoiceUrl"] });
    } catch (error) {
        console.error("Error creating invoice:", error);
        return NextResponse.json({ error: "Failed to create invoice", details: error.message });
    }
}