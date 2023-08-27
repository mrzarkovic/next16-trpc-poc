import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import TRPCProvider from "@/app/_trpc/Provider";
import NextAuthProvider from "@/app/_context/NextAuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <NextAuthProvider>
                    <TRPCProvider>{children}</TRPCProvider>
                </NextAuthProvider>
            </body>
        </html>
    );
}
