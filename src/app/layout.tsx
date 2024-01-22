import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "@next/font/local";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Danish Raza",
  description:
    "A software developer, aspiring ML engineer and an adventurer based in NY",
};

const leaguespartan = localFont({
  src: [
    {
      path: "../../public/fonts/LeagueSpartan-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/LeagueSpartan-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../../public/fonts/LeagueSpartan-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-leaguespartan",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${leaguespartan.variable} font-sans`}>{children}</body>
    </html>
  );
}
