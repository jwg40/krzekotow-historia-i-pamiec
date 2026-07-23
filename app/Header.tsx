import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-green-100 border-b border-green-200 shadow-sm">

      <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row md:items-center md:justify-between">

        {/* Logo / nazwa projektu */}
        <Link href="/" className="mb-4 md:mb-0">
          <div className="text-2xl font-extrabold text-amber-800 tracking-wide">
            ARCHIWUM KRZEKOTOWA
          </div>

          <div className="text-sm text-green-900 font-medium">
            miejsce pamięci mieszkańców
          </div>
        </Link>


        {/* Menu */}
        <nav className="flex flex-wrap gap-5 text-green-900 font-semibold">

          <Link
            href="/"
            className="hover:text-amber-700 transition"
          >
            Start
          </Link>

          <Link
            href="/os-czasu"
            className="hover:text-amber-700 transition"
          >
            Oś czasu
          </Link>

          <Link
            href="/galeria"
            className="hover:text-amber-700 transition"
          >
            Galeria
          </Link>

          <Link
            href="/mapy"
            className="hover:text-amber-700 transition"
          >
            Mapy
          </Link>

          <Link
            href="/kgw"
            className="hover:text-amber-700 transition"
          >
            KGW Żurawianki
          </Link>

          <Link
            href="/kontakt"
            className="hover:text-amber-700 transition"
          >
            Kontakt
          </Link>

        </nav>

      </div>

    </header>
  );
}