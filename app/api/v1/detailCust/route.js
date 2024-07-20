import prisma from "@/libs/prisma"

export async function POST (request) {
    const { order_id, product_name, first_name, last_name, user_email, user_phoneNumber, food_halal_non, food_vegan, food_beef, add_notes } = await request.json()
    const data = { order_id, product_name, first_name, last_name, user_email, user_phoneNumber, food_halal_non, food_vegan, food_beef, add_notes }

    const createDetailCust = await prisma.detailcustomer.create({ data })
    
    if (!createDetailCust) return Response.json({ status: 500, isCreated: false})
    else return Response.json({ status: 200, isCreated: true })
}