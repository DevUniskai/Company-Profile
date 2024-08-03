import connectMongoDB from "@/libs/mongodb"
import User from "@/models/user"
import { ToastProvider } from "@chakra-ui/react"
import { NextResponse } from "next/server"

export async function POST(request) {
    const { product_name,
        quantity,       
        first_name,         
        last_name,         
        user_email,         
        user_phoneNumber,          
        add_notes } = await request.json()

    await connectMongoDB()
    await User.create({ product_name,
        quantity,       
        first_name,         
        last_name,         
        user_email,         
        user_phoneNumber,          
        add_notes }) 

    return NextResponse.json({ message: "User Created" }, { status: 201 })
}

export async function GET() {
    await connectMongoDB()
    const users = await User.find()
    return NextResponse.json({users})

}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id")
    await connectMongoDB()
    await User.findByIdAndDelete(id)
    return NextResponse.json({ message: "User Deleted"}, {status: 200})
}
