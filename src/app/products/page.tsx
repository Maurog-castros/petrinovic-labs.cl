import Link from "next/link";
import { products } from "@/lib/mock-data";
import { ArrowRight, Filter } from "lucide-react";

export default function CatalogPage({
    searchParams,
}: {
    searchParams: { category?: string };
}) {
    const category = searchParams.category;

    const filteredProducts = category
        ? products.filter((p) => p.category === category)
        : products;

    return (
        <main className="container mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b pb-4 dark:border-zinc-800">
                <div>
                    <h1 className="text-3xl font-bold mb-2">Catálogo de Productos</h1>
                    <p className="text-gray-500 dark:text-gray-400">
                        Suplementos diseñados para el alto rendimiento.
                    </p>
                </div>
                <div className="flex gap-2 mt-4 md:mt-0">
                    <Link
                        href="/products"
                        className={`px-4 py-2 text-sm rounded-full transition-colors ${!category
                                ? "bg-black text-white dark:bg-white dark:text-black"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-zinc-800 dark:text-gray-300"
                            }`}
                    >
                        Todos
                    </Link>
                    <Link
                        href="/products?category=focus"
                        className={`px-4 py-2 text-sm rounded-full transition-colors ${category === "focus"
                                ? "bg-black text-white dark:bg-white dark:text-black"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-zinc-800 dark:text-gray-300"
                            }`}
                    >
                        Foco
                    </Link>
                    <Link
                        href="/products?category=energy"
                        className={`px-4 py-2 text-sm rounded-full transition-colors ${category === "energy"
                                ? "bg-black text-white dark:bg-white dark:text-black"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-zinc-800 dark:text-gray-300"
                            }`}
                    >
                        Energía
                    </Link>
                    <Link
                        href="/products?category=sleep"
                        className={`px-4 py-2 text-sm rounded-full transition-colors ${category === "sleep"
                                ? "bg-black text-white dark:bg-white dark:text-black"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-zinc-800 dark:text-gray-300"
                            }`}
                    >
                        Descanso
                    </Link>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                    <Link
                        key={product.id}
                        href={`/products/${product.slug}`}
                        className="group block border border-gray-200 dark:border-zinc-800 rounded-xl overflow-hidden hover:shadow-lg transition-shadow bg-white dark:bg-zinc-900"
                    >
                        <div className="aspect-square bg-gray-100 dark:bg-zinc-800 relative flex items-center justify-center">
                            <span className="text-gray-400 text-sm">[Imagen: {product.name}]</span>
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors">
                                    {product.name}
                                </h3>
                                <span className="font-mono text-sm font-semibold bg-gray-100 dark:bg-zinc-800 px-2 py-1 rounded">
                                    ${product.price.toLocaleString("es-CL")}
                                </span>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                                {product.shortDescription}
                            </p>
                            <div className="flex items-center text-sm font-medium text-blue-600 dark:text-blue-400">
                                Ver detalles <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}
