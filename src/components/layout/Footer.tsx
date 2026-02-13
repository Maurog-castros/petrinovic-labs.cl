import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t bg-background">
            <div className="container px-4 py-10 mx-auto md:px-6">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold">Petrinovic Health Labs</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Bienestar basado en ciencia para el trabajador moderno.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h4 className="font-semibold text-sm tracking-wider uppercase">
                            Productos
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/products?category=focus" className="hover:underline">
                                    Foco Mental
                                </Link>
                            </li>
                            <li>
                                <Link href="/products?category=sleep" className="hover:underline">
                                    Sueño y Recuperación
                                </Link>
                            </li>
                            <li>
                                <Link href="/products?category=energy" className="hover:underline">
                                    Energía Sostenida
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h4 className="font-semibold text-sm tracking-wider uppercase">
                            Legal
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/privacy" className="hover:underline">
                                    Política de Privacidad
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="hover:underline">
                                    Términos y Condiciones
                                </Link>
                            </li>
                            <li>
                                <Link href="/shipping" className="hover:underline">
                                    Envíos y Devoluciones
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h4 className="font-semibold text-sm tracking-wider uppercase">
                            Contacto
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a
                                    href="mailto:contacto@phl.cl"
                                    className="hover:underline"
                                >
                                    contacto@phl.cl
                                </a>
                            </li>
                            <li>
                                <span className="text-gray-500">Santiago, Chile</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-10 border-t pt-6 text-center text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} Petrinovic Health Labs SpA. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
