import Link from "next/link";
import { ArrowRight, Brain, Battery, Moon, ShieldCheck, Truck } from "lucide-react";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col">
            {/* Hero Section */}
            <section className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden bg-black text-white px-4 text-center">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent pointer-events-none"></div>

                <h1 className="z-10 text-5xl font-extrabold tracking-tight sm:text-7xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                    Biohacking para el <br className="hidden sm:block" />
                    <span className="text-blue-500">Home Office</span>
                </h1>

                <p className="z-10 max-w-2xl text-lg text-gray-300 mb-8 leading-relaxed">
                    Optimiza tu rendimiento cognitivo, energía y descanso con suplementos basados en ciencia.
                    Diseñados específicamente para las exigencias del trabajo remoto.
                </p>

                <div className="z-10 flex flex-col sm:flex-row gap-4">
                    <Link
                        href="/products"
                        className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-black bg-white rounded-full hover:bg-gray-100 transition-colors"
                    >
                        Explorar Catálogo
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                    <Link
                        href="/science"
                        className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white border border-gray-700 rounded-full hover:bg-gray-900 transition-colors"
                    >
                        Nuestra Ciencia
                    </Link>
                </div>
            </section>

            {/* Benefits / Categories */}
            <section className="py-24 bg-white dark:bg-zinc-950 px-4">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-16">Optimiza tu Biología</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Category 1 */}
                        <div className="group relative p-8 rounded-2xl border border-gray-200 dark:border-zinc-800 hover:border-blue-500 transition-colors bg-gray-50 dark:bg-zinc-900/50">
                            <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                                <Brain className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Foco Mental (Focus)</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-6">
                                Nootrópicos para eliminar la niebla mental y mantener la concentración profunda durante horas.
                            </p>
                            <Link href="/products?category=focus" className="text-blue-600 font-medium hover:underline inline-flex items-center">
                                Ver productos <ArrowRight className="ml-1 w-4 h-4" />
                            </Link>
                        </div>

                        {/* Category 2 */}
                        <div className="group relative p-8 rounded-2xl border border-gray-200 dark:border-zinc-800 hover:border-orange-500 transition-colors bg-gray-50 dark:bg-zinc-900/50">
                            <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400">
                                <Battery className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Energía Sostenida</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-6">
                                Adaptógenos que combaten la fatiga sin los picos y caídas de la cafeína tradicional.
                            </p>
                            <Link href="/products?category=energy" className="text-orange-600 font-medium hover:underline inline-flex items-center">
                                Ver productos <ArrowRight className="ml-1 w-4 h-4" />
                            </Link>
                        </div>

                        {/* Category 3 */}
                        <div className="group relative p-8 rounded-2xl border border-gray-200 dark:border-zinc-800 hover:border-indigo-500 transition-colors bg-gray-50 dark:bg-zinc-900/50">
                            <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                                <Moon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Sueño y Recuperación</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-6">
                                Magnesio y compuestos naturales para optimizar el ciclo circadiano y despertar renovado.
                            </p>
                            <Link href="/products?category=sleep" className="text-indigo-600 font-medium hover:underline inline-flex items-center">
                                Ver productos <ArrowRight className="ml-1 w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust & Features */}
            <section className="py-20 bg-gray-50 dark:bg-zinc-900 px-4 border-t dark:border-zinc-800">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="flex flex-col items-center">
                            <ShieldCheck className="w-10 h-10 mb-4 text-green-600" />
                            <h4 className="font-bold text-lg mb-2">Resolución Sanitaria</h4>
                            <p className="text-sm text-gray-500 max-w-xs">
                                Todos nuestros productos cuentan con registro SEREMI e ISP vigentes.
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Brain className="w-10 h-10 mb-4 text-blue-600" />
                            <h4 className="font-bold text-lg mb-2">Formulación Científica</h4>
                            <p className="text-sm text-gray-500 max-w-xs">
                                Dosis efectivas basadas en estudios clínicos, sin "proprietary blends".
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Truck className="w-10 h-10 mb-4 text-gray-600" />
                            <h4 className="font-bold text-lg mb-2">Envíos Rápidos</h4>
                            <p className="text-sm text-gray-500 max-w-xs">
                                Despacho express a todo Chile. Gratis sobre $50.000.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
