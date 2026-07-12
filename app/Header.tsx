export default function Header() {
  return (
    <header className="bg-[#4B5D2A] text-white">

      <div className="mx-auto max-w-6xl px-6 py-6">

        <div className="flex flex-col items-center gap-5">

          <a href="/" className="text-center">

            <div className="text-4xl mb-2">
              🌿
            </div>

            <h1 className="text-4xl font-bold tracking-wide">
              KRZEKOTÓW
            </h1>

            <p className="mt-1 text-xl text-[#F2C14E]">
              Historia i Pamięć
            </p>

            <p className="mt-2 text-sm italic text-stone-100">
              Ocalić przeszłość. Budować pamięć.
            </p>

          </a>


          <nav className="flex flex-wrap justify-center gap-5 text-sm">

            <a href="/" className="hover:text-[#F2C14E]">
              Start
            </a>

            <a href="/historia" className="hover:text-[#F2C14E]">
              Historia
            </a>

            <a href="/galeria" className="hover:text-[#F2C14E]">
              Galeria
            </a>

            <a href="/dokumenty" className="hover:text-[#F2C14E]">
              Dokumenty
            </a>

            <a href="/mapy" className="hover:text-[#F2C14E]">
              Mapy
            </a>

            <a href="/kalendarium" className="hover:text-[#F2C14E]">
              Kalendarium
            </a>

            <a href="/mieszkancy" className="hover:text-[#F2C14E]">
              Mieszkańcy
            </a>

            <a href="/zycie-wspolczesne" className="hover:text-[#F2C14E]">
              Życie współczesne
            </a>

            <a href="/kgw" className="text-[#F2C14E] hover:text-white font-semibold">
              KGW Żurawianki
            </a>

            <a href="/kontakt" className="hover:text-[#F2C14E]">
              Kontakt
            </a>

          </nav>

        </div>

      </div>

    </header>
  );
}