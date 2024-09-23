import type { Metadata } from "next";
import { poppins, dancingScript } from "./fonts/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Restaurant",
  description: "Cardápio de um restaurante",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${dancingScript.variable}`}> 
      <body>
        {children}
      </body>
    </html>
  );
}
