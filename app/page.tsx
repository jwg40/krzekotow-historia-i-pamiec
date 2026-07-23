import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-green-100 text-stone-800">

      {/* Tytuł strony */}
      <section className="max-w-5xl mx-auto px-6 pt-10 text-center">

        <h1 className="text-6xl md:text-7xl font-extrabold text-amber-800 tracking-tight">
          Krzekotów
        </h1>

        <h2 className="text-3xl md:text-4xl font-bold text-green-900 mt-2 mb-8">
          Historia miejsca i ludzi
        </h2>

      </section>


      {/* Zdjęcie główne */}
      <section className="max-w-5xl mx-auto px-6">

        <div className="relative overflow-hidden rounded-2xl shadow-xl">
          <Image
            src="/images/fotografie/krzekotow-wita.jpg"
            alt="Krzekotów"
            width={1200}
            height={700}
            className="w-full h-[360px] object-cover"
            priority
          />
        </div>

      </section>


      {/* Główne przesłanie */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center">

        <p className="text-2xl md:text-3xl font-bold text-green-900 leading-relaxed mb-8">
          Historia nie zawsze znajduje się w archiwach.
          <br />
          Czasem kryje się na strychu, w starym albumie albo
          w opowieści przekazywanej z pokolenia na pokolenie.
        </p>


        <p className="text-xl font-semibold text-stone-700 leading-relaxed mb-10">
          Cyfrowe Archiwum Krzekotowa powstaje, aby zachować pamięć
          o miejscu, jego mieszkańcach oraz wydarzeniach, które przez
          wieki tworzyły historię tej niewielkiej miejscowości.
        </p>


        <Link
          href="/kontakt"
          className="inline-block bg-amber-700 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-amber-800 transition shadow-lg"
        >
          Podziel się swoją historią
        </Link>

      </section>


      {/* Zaproszenie */}
      <section className="max-w-4xl mx-auto px-6 pb-12">

        <div className="bg-white/90 rounded-2xl shadow-md p-8 border border-green-200">

          <h2 className="text-3xl font-bold text-amber-800 text-center mb-6">
            Szukamy śladów przeszłości
          </h2>


          <p className="text-lg leading-relaxed text-center">
            Nie tylko zdjęcia i dokumenty tworzą historię miejsca.
          </p>


          <p className="text-lg leading-relaxed text-center mt-4">
            Czasem historię opowiadają przedmioty, które przez lata
            towarzyszyły mieszkańcom Krzekotowa.
          </p>


          <p className="text-lg leading-relaxed text-center mt-4">
            Stary klucz, narzędzie używane w gospodarstwie, książka
            z rodzinną dedykacją, pamiątka przechowywana od pokoleń
            albo zwykły przedmiot codziennego użytku – każdy z nich
            może kryć własną opowieść.
          </p>


          <p className="mt-6 text-center text-lg font-bold text-green-900">
            Masz zdjęcie, dokument, przedmiot lub wspomnienie związane
            z Krzekotowem?
            <br />
            Pomóż zachować je dla przyszłych pokoleń.
          </p>

        </div>

      </section>

    </main>
  );
}