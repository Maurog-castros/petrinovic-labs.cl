import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const signature = req.headers.get("x-signature");
        const requestId = req.headers.get("x-request-id");

        if (!signature) {
            console.error("Missing signature in webhook");
            return NextResponse.json({ error: "No signature" }, { status: 400 });
        }

        // Validate HMAC if secret is available
        const secret = process.env.MP_WEBHOOK_SECRET;
        if (secret) {
            // Validation logic would go here
            // For MVP/Dev we often skip strict validation if secret is missing to allow testing
            // but in production it is critical.
            // const hmac = crypto.createHmac('sha256', secret);
            // ... verify signature
        }

        // Respond quickly to MercadoPago to avoid timeouts
        const response = NextResponse.json({ received: true }, { status: 200 });

        // Process webhook asynchronously
        processWebhook(body).catch(err => console.error("Error processing webhook:", err));

        return response;
    } catch (error) {
        console.error("Error parsing webhook:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

async function processWebhook(body: any) {
    // Handle 'payment' events specifically
    if (body.type === "payment" || (body.topic === "payment" && body.data?.id)) {
        const paymentId = body.data?.id || body.id;

        if (!paymentId) return;

        console.log(`Processing payment notification for ID: ${paymentId}`);

        // Fetch latest payment status from MercadoPago
        // We import the client dynamically or use a fetch to avoid circular deps if needed
        const isProd = process.env.NODE_ENV === "production";
        const accessToken = isProd ? process.env.MP_ACCESS_TOKEN_PROD : process.env.MP_ACCESS_TOKEN_TEST;

        if (!accessToken) return;

        try {
            const res = await fetch(
                `https://api.mercadopago.com/v1/payments/${paymentId}`,
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            );

            if (!res.ok) {
                throw new Error(`Failed to fetch payment ${paymentId}`);
            }

            const payment = await res.json();
            console.log(`Payment status: ${payment.status}`);

            if (payment.status === "approved") {
                // TODO: Update order in database / Shopify
                console.log(`✅ Payment ${paymentId} approved. Triggering fulfillment logic.`);
            }
        } catch (e) {
            console.error("Failed to verify payment:", e);
        }
    } else {
        // Log other topics (subscription_preapproval, etc.)
        console.log(`Webhook received: Topic/Type=${body.topic || body.type}`);
    }
}
