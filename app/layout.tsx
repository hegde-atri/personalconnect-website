import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PersonalConnect",
  description:
    "Your goto mobile application for sharing your social information.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="dark" lang="en">
      <body className={`dark:bg-black dark:text-white ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
