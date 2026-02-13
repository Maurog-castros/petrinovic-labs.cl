import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { subscriptionId } = await request.json();

        // Logic to cancel subscription
        // ...

        return NextResponse.json({ success: true, message: "Subscription cancelled" });
    } catch (error) {
        return NextResponse.json({ error: "Failed to cancel subscription" }, { status: 500 });
    }
}
