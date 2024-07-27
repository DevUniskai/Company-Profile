import { createTransaction } from '../../shared/transaction';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const data = await request.json();
        const invoice = await createTransaction(data);
        return NextResponse.json({ url: invoice.invoice_url });
    } catch (error) {
        console.error('Error creating invoice:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
