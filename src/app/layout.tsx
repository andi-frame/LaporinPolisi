import "@/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Laporin Polisi",
  description: "Laporin Aja",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} flex min-w-screen items-center justify-center bg-black`}
    >
      <body className="w-md">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
