import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { planId, customerEmail } = await request.json();

        // Logic to create subscription preapproval
        // ...

        return NextResponse.json({
            success: true,
            init_point: "https://www.mercadopago.cl/subscriptions/checkout?pref_id=..."
        });
    } catch (error) {
        return NextResponse.json({ error: "Failed to create subscription" }, { status: 500 });
    }
}
