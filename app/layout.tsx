import { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const ppMori = localFont({
    src: "./fonts/PPMori-Regular.otf",
});

export const metadata: Metadata = {
    title: "Zackry Rosli",
    description: "A self-driven Go enthusiast hailing from Sarawak, Malaysia, bringing 4 years of hardcore experience to the table. Thrives on crafting innovative solutions with absolute precision."
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${ppMori.className} bg-antique-white`}>
                {children}
            </body>
        </html>
    );
}
