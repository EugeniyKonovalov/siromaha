import Header from "@/components/header";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import RootProvider from "@/providers/RootProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Social Media App",
  description: "Social media app built with Next.js",
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { id: string };
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={cn(
            inter.className,
            " bg-slate-900 max-w-screen-2xl mx-auto text-white px-4 md:px-8"
          )}
        >
          <div className="w-full">
            <Header />
          </div>
          <RootProvider params={params}>{children}</RootProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
