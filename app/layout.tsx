import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./Header/Header";

const poppins = Poppins({
  variable: "--pps",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js",
  description: "Aprendiendo Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${poppins.variable}  antialiased`}>
      <body className={"min-h-dvh font-poppins"}>
        <Header />
        {children}
      </body>
    </html>
  );
}
