import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Figtree } from "next/font/google";
import { cn } from "@/lib/utils";

const figtree = Figtree({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Portfolio — Đặng Nguyễn Phúc Khang",
  description: "Website portfolio cá nhân — CTK46",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning className={cn("font-sans", figtree.variable)}>
      <body
        className="min-h-screen flex flex-col bg-zinc-50 text-zinc-900 dark:bg-gray-950 dark:text-zinc-100 transition-colors duration-300"
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
