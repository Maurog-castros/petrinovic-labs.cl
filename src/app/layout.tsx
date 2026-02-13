import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { clsx } from "clsx";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Petrinovic Health Labs | Biohacking para el Home Office",
    description: "Suplementos científicos para optimizar tu rendimiento, sueño y energía. Diseñados para trabajadores remotos en Chile.",
    keywords: ["biohacking", "suplementos", "chile", "home office", "foco", "sueño"],
};

import { CartProvider } from "@/lib/cart-context";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            <body className={clsx(inter.className, "antialiased min-h-screen flex flex-col")}>
                <CartProvider>
                    <Header />
                    <div className="flex-1">{children}</div>
                    <Footer />
                </CartProvider>
            </body>
        </html>
    );
}
