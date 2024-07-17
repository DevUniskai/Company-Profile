import Midtrans from "midtrans-client";
import { NextResponse } from "next/server";

let snap = new Midtrans.Snap({
    isProduction: false,
    serverKey: process.env.SECRET,
    clientKey: process.env.NEXT_PUBLIC_CLIENT,
})

export async function POST(request) {
    const {id, productName, price, quantity, totalPrice, firstName, lastName, email, phoneNumber, } = await request.json()

    let parameter = {
        item_details: {
            name: productName,
            price: price,
            quantity: quantity
        },
        transaction_details: {
            order_id: id,
            gross_amount: totalPrice
        },
        customer_details: {
            first_name: firstName,
            last_name: lastName,
            email:email,
            phone: phoneNumber

        }
    }

    const token = await snap.createTransactionToken(parameter)
    console.log(token)
    return NextResponse.json({ token })
}