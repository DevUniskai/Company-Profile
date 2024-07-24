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

export async function POST(request) {
    const {id, productName, price, quantity, totalPrice, firstName, lastName, email, phoneNumber, 
            descriptionText, cardNumber, cardExp, cardCvv } = await request.json()
    const paymentId = generateUUID()
    const convertedPrice = await fx(totalPrice, 'usd', 'idr');
    const convertedFirstPrice = await fx(price, 'usd', 'idr');
    const xenditClient = new Xendit({secretKey: process.env.XENDIT_TOKEN})
    const { PaymentRequest, Invoice } = xenditClient
    console.log(`${totalPrice} ${convertedPrice}`)

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
        "successRedirectUrl": "http://localhost:3000/",
        "failureRedirectUrl": "http://localhost:3000/failed"
    }
    const xenditInvoiceClient = new InvoiceClient({secretKey: process.env.XENDIT_TOKEN})
    const invoice = await xenditInvoiceClient.createInvoice({
        data: dataInvoice
    })
    console.log(invoice)
    return NextResponse.json({ "url": invoice["invoiceUrl"] })


    // const dataPayment = {
    //     "country" : "ID",
    //     "amount" : convertedPrice,
    //     "paymentMethod" : {
    //         "card" : {
    //             "channelProperties" : {
    //                 "successReturnUrl": "http://localhost:3000/",
    //                 "failureReturnUrl": "http://localhost:3000/failed"
    //             },
    //             "cardInformation": {
    //                 "cardNumber": cardNumber,
    //                 "expiryMonth": cardExp.split("/")[0],
    //                 "expiryYear": cardExp.split("/")[1]
    //             }
    //         },
    //         "channelProperties": {
    //             "cvv": cardCvv
    //         },
    //         "reusability" : "ONE_TIME_USE",
    //         "type" : "CARD"
    //     },
    //     "items": [{
    //         "referenceId": generateUUID(),
    //         "name": productName,
    //         "price": price*1000,
    //         "quantity": quantity,
    //         "currency": "IDR",
    //         "category": "Holiday Package",
    //         "type": "Package"
    //     }],
    //     "customerId": generateUUID(),
    //     "customer": {
    //         "givenNames": firstName,
    //         "surname": lastName,
    //         "email": email,
    //         "mobileNumber": phoneNumber
    //     },
    //     "currency": "IDR",
    //     "referenceId": paymentId
    // }
    // const xenditPaymentRequestClient = new PaymentRequestClient({secretKey: process.env.XENDIT_TOKEN})
    // const payment = await xenditPaymentRequestClient.createPaymentRequest({
    //     data: dataPayment
    // })

    // return NextResponse.json({ "url": payment["actions"][0]["url"] })
}