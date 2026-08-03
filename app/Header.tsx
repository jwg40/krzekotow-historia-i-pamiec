import Link from "next/link";

const menu = [
  {
    nazwa: "Start",
    adres: "/",
    widoczne: true,
  },
  {
    nazwa: "Historia",
    adres: "/historia/archiwum",
    widoczne: true,
  },
  {
    nazwa: "Monografia",
    adres: "/monografia",
    widoczne: true,
  },
  {
    nazwa: "Dokumenty",
    adres: "/dokumenty",
    widoczne: true,
  },
  {
    nazwa: "Galeria",
    adres: "/galeria",
    widoczne: true,
  },
  {
    nazwa: "Mapy",
    adres: "/mapy",
    widoczne: true,
  },
  {
    nazwa: "Mieszkańcy",
    adres: "/mieszkancy",
    widoczne: true,
  },
  {
    nazwa: "Wojna",
    adres: "/wojna",
    widoczne: false,
  },
  {
    nazwa: "Życie współczesne",
    adres: "/zycie-wspolczesne",
    widoczne: false,
  },
  {
    nazwa: "KGW Żurawianki",
    adres: "/kgw",
    widoczne: true,
  },
  {
    nazwa: "Kontakt",
    adres: "/kontakt",
    widoczne: true,
  },
];


export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-green-200 bg-green-50/95 backdrop-blur shadow-sm">

      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-5 md:flex-row md:items-center md:justify-between">


        <Link href="/historia/archiwum" className="group">

          <h1 className="text-2xl font-extrabold tracking-wide text-amber-800 transition group-hover:text-amber-600">
            ARCHIWUM KRZEKOTOWA
          </h1>

          <p className="text-sm font-medium text-green-900">
            miejsce pamięci mieszkańców
          </p>

        </Link>



        <nav className="flex flex-wrap items-center gap-5 text-sm font-semibold text-green-900">

          {menu
            .filter((element) => element.widoczne)
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
  );
}