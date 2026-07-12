export default function Footer() {
  return (
    <footer className="bg-[#3F4A24] text-white">

      <div className="mx-auto max-w-6xl px-6 py-8">

        <div className="text-center">


          <p className="text-lg italic text-amber-200">
            Ocalić przeszłość. Budować pamięć.
          </p>


          <p className="mt-4 text-sm text-stone-300">
            Archiwum historii, fotografii, dokumentów
            i wspomnień mieszkańców.
          </p>


          <p className="mt-6 text-xs text-stone-400">
            © {new Date().getFullYear()}
          </p>


        </div>

      </div>

    </footer>
  );
}