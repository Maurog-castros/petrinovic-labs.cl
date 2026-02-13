import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        // Verify webhook signature (omitted for MVP)
        const body = await request.json();

        console.log("------------------------------------------------");
        console.log("📦 DTE Webhook Received: Order Created/Paid");
        console.log("------------------------------------------------");
        console.log("Customer:", body.email || "Guest");
        console.log("RUT:", body.note_attributes?.find((a: any) => a.name === "RUT")?.value || "N/A");
        console.log("Total:", body.total_price);

        // Simulate LibreDTE API call
        console.log("🔄 Generating Boleta Electronica in LibreDTE...");
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log("✅ DTE Generated Successfully. Folio: " + Math.floor(Math.random() * 100000));
        console.log("------------------------------------------------");

        return NextResponse.json({ success: true, message: "DTE generation queued" });
    } catch (error) {
        console.error("Error processing DTE webhook:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
