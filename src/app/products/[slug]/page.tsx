import { products } from "@/lib/mock-data";
import { NutritionalTable } from "@/components/product/NutritionalTable";
import { WarningLabel } from "@/components/product/WarningLabel";
import { Check, ShieldCheck, Truck } from "lucide-react";
import { notFound } from "next/navigation";

export function generateStaticParams() {
    return products.map((product) => ({
        slug: product.slug,
    }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
    const product = products.find((p) => p.slug === params.slug);

    if (!product) {
        notFound();
    }

    return (
        <main className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Product Image Placeholder */}
                <div className="bg-gray-100 dark:bg-zinc-800 rounded-2xl aspect-square flex items-center justify-center text-gray-400">
                    [Imagen: {product.name}]
                </div>

                {/* Product Details */}
                <div>
                    <div className="mb-4">
                        <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wide">
                            {product.category === 'focus' ? 'Foco Mental' : product.category === 'sleep' ? 'Sueño y Recuperación' : 'Energía'}
                        </span>
                    </div>
                    <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                        {product.description}
                    </p>

                    <div className="flex items-end gap-4 mb-8">
                        <span className="text-3xl font-bold">
                            ${product.price.toLocaleString("es-CL")}
                        </span>
                        <span className="text-sm text-gray-500 mb-1">
                            (IVA incluido)
                        </span>
                    </div>

                    <div className="mb-8 p-4 bg-blue-50 dark:bg-blue-900/10 rounded-lg border border-blue-100 dark:border-blue-900/30">
                        <h3 className="font-semibold mb-2 flex items-center gap-2">
                            <ShieldCheck className="w-5 h-5 text-blue-600" />
                            Beneficios Clave
                        </h3>
                        <ul className="space-y-2">
                            {product.benefits.map((benefit, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm">
                                    <Check className="w-4 h-4 text-green-500" />
                                    {benefit}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <button className="w-full bg-black text-white dark:bg-white dark:text-black py-4 rounded-full font-bold text-lg hover:opacity-90 transition-opacity mb-4">
                        Agregar al Carrito
                    </button>

                    <div className="flex items-center gap-2 text-sm text-gray-500 justify-center">
                        <Truck className="w-4 h-4" /> Envío calculado al finalizar compra
                    </div>

                    {/* Compliance & Technical Info */}
                    <div className="mt-12 space-y-8">
                        <div>
                            <h3 className="text-lg font-bold mb-4">Información Nutricional</h3>
                            <NutritionalTable data={product.nutritionalInfo} />
                        </div>

                        <div className="text-sm text-gray-500 border-t pt-4 dark:border-zinc-800">
                            <p className="mb-1"><span className="font-semibold">Resolución Sanitaria:</span> {product.resolution || "En trámite"}</p>
                        </div>

                        <WarningLabel warnings={product.warnings} />
                    </div>
                </div>
            </div>
        </main>
    );
}
