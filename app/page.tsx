import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main
      className="min-h-screen text-stone-800 font-serif"
      style={{
        backgroundImage:
          "linear-gradient(rgba(220,232,210,0.88), rgba(220,232,210,0.88)), url('/images/historia/stara-mapa-tlo.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >

      {/* Tytuł strony */}
      <section className="max-w-5xl mx-auto px-6 pt-12 text-center">

        <h1 className="text-6xl md:text-7xl font-black text-amber-800 tracking-[0.12em]">
          Krzekotów
        </h1>

        <h2 className="text-3xl md:text-4xl font-serif italic tracking-wide text-green-900 mt-4 mb-10">
          Historia miejsca i ludzi
        </h2>

      </section>



      {/* Zdjęcie główne */}
      <section className="max-w-5xl mx-auto px-6">

        <div className="relative overflow-hidden rounded-xl shadow-xl">

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
      <section className="max-w-4xl mx-auto px-6 py-14 text-center">

        <p className="text-2xl md:text-3xl font-serif font-semibold tracking-wide text-green-900 leading-relaxed">

          Historia nie zawsze znajduje się w archiwach.

          <br />

          Czasem kryje się na strychu,
          w starym albumie albo w opowieści
          przekazywanej z pokolenia na pokolenie.

        </p>



        <p className="mt-8 text-xl font-serif font-semibold text-stone-700 leading-relaxed">

          Cyfrowe Archiwum Krzekotowa powstaje,
          aby zachować pamięć o miejscu,
          jego mieszkańcach oraz wydarzeniach,
          które przez wieki tworzyły historię tej miejscowości.

        </p>

      </section>




      {/* Zaproszenie mieszkańców */}
      <section className="max-w-4xl mx-auto px-6 pb-20 text-center">

        <div className="pt-10">


          <div className="text-4xl text-amber-800 mb-6">
            ✒
          </div>



          <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-wide text-amber-800 mb-8">

            Każdy dom ma swoją historię.

          </h2>



          <div className="mx-auto mb-8 h-px w-32 bg-amber-700/40"></div>



          <p className="text-xl md:text-2xl leading-relaxed text-green-900 font-semibold">

            Za starymi fotografiami, dokumentami
            i rodzinnymi opowieściami kryją się losy ludzi,
            którzy tworzyli Krzekotów.

          </p>



          <p className="mt-8 text-lg md:text-xl leading-relaxed text-stone-700">

            Pomóż zachować te wspomnienia
            dla przyszłych pokoleń.

          </p>



          <Link
            href="/kontakt"
            className="
              inline-block
              mt-10
              text-3xl
              md:text-4xl
              font-bold
              tracking-wide
              text-amber-800
              hover:text-amber-600
              transition
              drop-shadow-sm
            "
          >

            Podziel się swoją historią →

          </Link>


        </div>

      </section>


    </main>
  );
}