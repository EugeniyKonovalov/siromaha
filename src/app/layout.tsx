import Header from "@/components/header";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Social Media App",
  description: "Social media app built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={cn(
            inter.className,
            " bg-slate-900 max-w-[1440px] mx-auto text-white text-sm px-4 md:px-8"
          )}
        >
          <div className="w-full">
            <Header />
          </div>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
