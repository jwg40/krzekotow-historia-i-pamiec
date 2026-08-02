import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cyfrowe Archiwum Krzekotowa",
  description: "Historia i wspomnienia Krzekotowa",
};

const menu = [
  {
    nazwa: "Start",
    adres: "/",
    aktywne: true,
  },
  {
    nazwa: "Historia",
    adres: "/historia/archiwum",
    aktywne: true,
  },
  {
    nazwa: "Galeria",
    adres: "/galeria",
    aktywne: true,
  },
  {
    nazwa: "Mapy",
    adres: "/mapy",
    aktywne: true,
  },
  {
    nazwa: "Mieszkańcy",
    adres: "/mieszkancy",
    aktywne: true,
  },
  {
    nazwa: "Dokumenty",
    adres: "/dokumenty",
    aktywne: true,
  },
  {
    nazwa: "KGW Żurawianki",
    adres: "/kgw",
    aktywne: true,
  },
  {
    nazwa: "Kontakt",
    adres: "/kontakt",
    aktywne: true,
  },

  // Ukryte na razie:
  // {
  //   nazwa: "Monografia",
  //   adres: "/monografia",
  //   aktywne: false,
  // },
];


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="pl">

      <body className="bg-green-50 text-stone-800">


        <header className="sticky top-0 z-50 border-b border-green-200 bg-green-50/95 backdrop-blur shadow-sm">


          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">


            <Link href="/" className="group">

              <h1 className="text-2xl font-extrabold tracking-wide text-amber-800 transition group-hover:text-amber-600">
                ARCHIWUM KRZEKOTOWA
              </h1>

              <p className="text-sm font-medium text-green-900">
                miejsce pamięci mieszkańców
              </p>

            </Link>



            <nav className="flex flex-wrap items-center gap-5 text-sm font-semibold text-green-900">

              {menu
                .filter((element) => element.aktywne)
                .map((element) => (

                  <Link
                    key={element.adres}
                    href={element.adres}
                    className="transition hover:text-amber-700"
                  >
                    {element.nazwa}
                  </Link>

                ))}

            </nav>


          </div>


        </header>


        {children}


      </body>

    </html>
  );
}