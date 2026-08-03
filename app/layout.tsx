import type { Metadata } from "next";
import "./globals.css";
import Header from "./Header";

export const metadata: Metadata = {
  title: "Cyfrowe Archiwum Krzekotowa",
  description: "Historia i wspomnienia Krzekotowa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className="bg-green-50 text-stone-800">
        <Header />

        {children}
      </body>
    </html>
  );
}