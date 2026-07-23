import type { Metadata } from "next";
import Link from "next/link";
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
      <body className="bg-green-50 text-stone-800">

        <header className="sticky top-0 z-50 border-b bg-green-50/95 backdrop-blur shadow-sm">

          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

            {/* Nazwa projektu - powrót na stronę główną */}

            <Link href="/" className="group">

              <h1 className="text-2xl font-extrabold tracking-wide text-amber-800 transition group-hover:text-amber-600">
                ARCHIWUM KRZEKOTOWA
              </h1>

              <p className="text-sm font-medium text-green-900">
                miejsce pamięci mieszkańców
              </p>

            </Link>


            {/* Menu */}

            <nav className="flex flex-wrap items-center gap-6 text-sm font-semibold text-green-900">


              <Link
                href="/historia"
                className="transition hover:text-amber-700"
              >
                Historia
              </Link>


              <Link
                href="/galeria"
                className="transition hover:text-amber-700"
              >
                Galeria
              </Link>


              <Link
                href="/mapy"
                className="transition hover:text-amber-700"
              >
                Mapy
              </Link>


              <Link
                href="/kgw"
                className="transition hover:text-amber-700"
              >
                KGW Żurawianki
              </Link>


              <Link
                href="/kontakt"
                className="transition hover:text-amber-700"
              >
                Kontakt
              </Link>


            </nav>

          </div>

        </header>


        {children}


      </body>
    </html>
  );
}