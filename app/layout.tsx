import { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const ppMori = localFont({
    src: "./fonts/PPMori-Regular.otf",
});

export const metadata: Metadata = {
    title: "Zack",
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
