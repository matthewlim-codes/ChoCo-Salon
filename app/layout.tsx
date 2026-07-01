import type { Metadata } from "next";
import { Geist } from "next/font/google";

import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "CHOCO SALON Cupertino | Signature K-Beauty Hair Studio",
  description:
    "Premium Cupertino K-Beauty salon for digital perms, down perms, custom color, precision cuts, and glossy Asian hair trends.",
  openGraph: {
    title: "CHOCO SALON Cupertino",
    description:
      "Signature K-Beauty styling, precision cuts, perms, and custom color in Cupertino.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} bg-white font-sans text-[#111111] antialiased`}>
        {children}
      </body>
    </html>
  );
}
