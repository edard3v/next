import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "../components/shared/Header/Header";
import Footer from "@/components/shared/Footer/Footer";

export default function RootLayout({ children }: Props) {
  return (
    <html lang="es" className={`${poppins.variable}  antialiased`}>
      <body className={"font-poppins min-h-dvh grid grid-rows-[auto,1fr,auto]"}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

type Props = Readonly<{
  children: React.ReactNode;
}>;

export const metadata: Metadata = {
  title: "Next.js",
  description: "Next.js",
};

const poppins = Poppins({
  variable: "--pps",
  weight: ["400", "700"],
  subsets: ["latin"],
});
