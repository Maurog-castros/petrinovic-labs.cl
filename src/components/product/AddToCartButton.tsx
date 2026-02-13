"use client";

import { useCart } from "@/lib/cart-context";
import { Product } from "@/lib/mock-data";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";

export function AddToCartButton({ product }: { product: Product }) {
    const { addItem } = useCart();
    const [isAdded, setIsAdded] = useState(false);

    const handleAdd = () => {
        addItem(product);
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };

    return (
        <button
            onClick={handleAdd}
            className={`w-full py-4 rounded-full font-bold text-lg transition-all mb-4 flex items-center justify-center gap-2 ${isAdded
                    ? "bg-green-600 text-white hover:bg-green-700"
                    : "bg-black text-white dark:bg-white dark:text-black hover:opacity-90"
                }`}
        >
            {isAdded ? (
                <>
                    Agregado <ShoppingCart className="w-5 h-5" />
                </>
            ) : (
                "Agregar al Carrito"
            )}
        </button>
    );
}
