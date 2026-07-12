import type { Metadata } from "next";
import "./globals.css";

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
      <body>
        {children}
      </body>
    </html>
  );
}