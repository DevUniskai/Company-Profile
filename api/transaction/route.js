import { createTransaction } from '../../shared/transaction';
import { NextResponse } from 'next/server';

export function POST(data) {
    try {
        const invoice = createTransaction(data);
        return NextResponse.json({ url: invoice.invoice_url });
    } catch (error) {
        console.error('Error creating invoice:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
