"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { RutInput } from "@/components/checkout/RutInput";
import { ShieldCheck, Truck } from "lucide-react";

export default function CheckoutPage() {
    const [isRutValid, setIsRutValid] = useState(false);
    const [loading, setLoading] = useState(false);
    const { items, total } = useCart();

    const handlePayment = async () => {
        if (!isRutValid) return;
        setLoading(true);

        try {
            const response = await fetch("/api/checkout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    items: items.map((item) => ({
                        id: item.id,
                        quantity: item.quantity,
                    })),
                }),
            });

            const data = await response.json();

            if (data.init_point) {
                window.location.href = data.init_point;
            } else {
                console.error("No init_point returned");
                alert("Error al iniciar el pago. Por favor, intenta nuevamente.");
            }
        } catch (error) {
            console.error("Payment error:", error);
            alert("Hubo un error al procesar tu solicitud.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="container mx-auto px-4 py-12 max-w-3xl">
            <h1 className="text-3xl font-bold mb-8">Finalizar Compra</h1>

            <div className="grid gap-8 md:grid-cols-3">
                {/* Checkout Form */}
                <div className="md:col-span-2 space-y-8">
                    {/* Customer Info */}
                    <section className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-gray-200 dark:border-zinc-800">
                        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                            Identificación
                        </h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Email</label>
                                <input type="email" className="w-full rounded-md border border-gray-300 dark:border-zinc-700 bg-transparent px-3 py-2 text-sm" placeholder="tu@email.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">RUT (Obligatorio para Boleta/Factura)</label>
                                <RutInput onValidChange={setIsRutValid} required />
                                <p className="text-xs text-gray-500 mt-1">Necesario para emisión de DTE ante el SII.</p>
                            </div>
                        </div>
                    </section>

                    {/* Shipping Info - Simplified for MVP */}
                    <section className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-gray-200 dark:border-zinc-800">
                        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                            <Truck className="w-5 h-5" /> Envío
                        </h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2">
                                <label className="block text-sm font-medium mb-1">Dirección</label>
                                <input type="text" className="w-full rounded-md border border-gray-300 dark:border-zinc-700 bg-transparent px-3 py-2 text-sm" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Región</label>
                                <select className="w-full rounded-md border border-gray-300 dark:border-zinc-700 bg-transparent px-3 py-2 text-sm">
                                    <option>Metropolitana</option>
                                    <option>Valparaíso</option>
                                    <option>Bío Bío</option>
                                    {/* More regions */}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Comuna</label>
                                <input type="text" className="w-full rounded-md border border-gray-300 dark:border-zinc-700 bg-transparent px-3 py-2 text-sm" />
                            </div>
                        </div>
                    </section>
                </div>

                {/* Order Summary */}
                <div className="md:col-span-1">
                    <div className="bg-gray-50 dark:bg-zinc-800/50 p-6 rounded-xl border border-gray-200 dark:border-zinc-800 sticky top-24">
                        <h3 className="font-semibold mb-4">Resumen del Pedido</h3>

                        <div className="space-y-2 text-sm mb-4">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>${total.toLocaleString("es-CL")}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Envío</span>
                                <span>Por calcular</span>
                            </div>
                            <div className="flex justify-between font-bold text-lg pt-2 border-t border-gray-200 dark:border-zinc-700">
                                <span>Total</span>
                                <span>${total.toLocaleString("es-CL")}</span>
                            </div>
                            <p className="text-xs text-gray-500 text-right">IVA incluido (19%)</p>
                        </div>

                        <button
                            onClick={handlePayment}
                            disabled={!isRutValid || loading || items.length === 0}
                            className="w-full bg-black text-white dark:bg-white dark:text-black py-3 rounded-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed transition-opacity flex justify-center"
                        >
                            {loading ? "Procesando..." : "Pagar Ahora"}
                        </button>

                        <div className="mt-4 flex items-center justify-center gap-2 text-xs text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/10 py-2 rounded">
                            <ShieldCheck className="w-4 h-4" /> Pago 100% Seguro (SSL)
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
