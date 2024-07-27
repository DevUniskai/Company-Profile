import { Xendit, Invoice as InvoiceClient } from 'xendit-node';
import fx from '@m00nbyte/currency-converter';

function generateUUID() {
    // Generate a random UUID (v4) - RFC4122 compliant
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0,
            v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

export async function createTransaction(data) {
    try {
        const paymentId = generateUUID();
        const convertedPrice = await fx(data.totalPrice, 'usd', 'idr');
        const convertedFirstPrice = await fx(data.price, 'usd', 'idr');

        const xenditClient = new Xendit({ secretKey: process.env.XENDIT_TOKEN });
        const { Invoice } = xenditClient;

        const dataInvoice = {
            amount: convertedPrice,
            invoiceDuration: 172800,
            externalId: paymentId,
            description: `${data.descriptionText} || Pembelian ${data.productName} atas nama ${data.firstName} ${data.lastName}`,
            currency: "IDR",
            reminderTime: 1,
            customer: {
                givenNames: data.firstName,
                surname: data.lastName,
                email: data.email,
                mobileNumber: data.phoneNumber
            },
            items: [
                {
                    name: data.productName,
                    quantity: data.quantity,
                    price: convertedFirstPrice
                }
            ],
            successRedirectUrl: "https://uniskai.vercel.app/",
            failureRedirectUrl: "https://uniskai.vercel.app/failed"
        };

        const xenditInvoiceClient = new InvoiceClient({ secretKey: process.env.XENDIT_TOKEN });
        const invoice = await xenditInvoiceClient.createInvoice(dataInvoice);

        return invoice;
    } catch (error) {
        console.error('Error creating invoice:', error);
        throw error;
    }
}
