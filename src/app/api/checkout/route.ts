import { NextResponse } from "next/server";
import { preference } from "@/lib/mercadopago";
import { products } from "@/lib/mock-data";

// Using mock-data for now until Shopify is fully connected, 
// to ensure the product details (price) are secure.

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { items } = body;

        // Validate items against source of truth (Shopify or Mock DB)
        // This prevents price manipulation on the client side
        const validatedItems = items.map((item: { id: string; quantity: number }) => {
            const product = products.find((p) => p.id === item.id);
            if (!product) throw new Error(`Product ${item.id} not found`);

            return {
                id: product.id,
                title: product.name,
                quantity: item.quantity,
                unit_price: product.price,
                currency_id: "CLP",
            };
        });

        const result = await preference.create({
            body: {
                items: validatedItems,
                back_urls: {
                    success: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/success`,
                    failure: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/failure`,
                    pending: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/pending`,
                },
                auto_return: "approved",
            },
        });

        return NextResponse.json({ id: result.id, init_point: result.init_point });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "Error creating preference" },
            { status: 500 }
        );
    }
}
