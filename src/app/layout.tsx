import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/ui/custom/header";
import StoreProvider from "./StoreProvider";
import { Toaster } from "@/components/ui/toaster";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: "Pizza App",
  description: "develope by Ammar Ahmad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StoreProvider>
        <body
          className={cn(
            "min-h-screen bg-background font-manrope antialiased",
            manrope.variable
          )}
        >
          <Header />
          <main>{children}</main>
          <Toaster />
        </body>
      </StoreProvider>
    </html>
  );
}
