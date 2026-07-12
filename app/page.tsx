import Header from "./Header";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>

        {/* Zdjęcie otwierające - miejsce na tablicę Krzekotów */}
        <section className="relative">

          <div className="h-[420px] bg-[url('/images/fotografie/tablica-krzekotow.jpg')] bg-cover bg-center">

            <div className="flex h-full items-center justify-center bg-black/30">

              <div className="text-center text-white">

                <h1 className="text-5xl font-bold tracking-wide">
                  KRZEKOTÓW
                </h1>

                <p className="mt-4 text-2xl">
                  Historia i Pamięć
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* Wprowadzenie */}
        <section className="bg-amber-50 py-16">

          <div className="mx-auto max-w-5xl px-6 text-center">

            <div className="text-6xl">
              🌾
            </div>

            <h2 className="mt-6 text-3xl font-bold text-green-900">
              Wieś ludzi i ziemi
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-700">
              Krzekotów od pokoleń związany jest z rolnictwem,
              pracą mieszkańców i tradycją przekazywaną kolejnym
              pokoleniom. Tworzymy cyfrowe archiwum, które zachowuje
              historię miejsca, wspomnienia ludzi i wydarzenia
              tworzące wspólnotę.
            </p>

          </div>

        </section>


        {/* Najważniejsze działy */}
        <section className="bg-white py-16">

          <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-3">


            <a
              href="/historia"
              className="rounded-2xl bg-amber-50 p-8 shadow hover:shadow-lg"
            >

              <h3 className="text-2xl font-bold text-green-900">
                📜 Historia
              </h3>

              <p className="mt-4 text-stone-700">
                Dzieje Krzekotowa, dawne czasy,
                dokumenty i zachowane ślady przeszłości.
              </p>

            </a>


            <a
              href="/mieszkancy"
              className="rounded-2xl bg-amber-50 p-8 shadow hover:shadow-lg"
            >

              <h3 className="text-2xl font-bold text-green-900">
                👥 Mieszkańcy
              </h3>

              <p className="mt-4 text-stone-700">
                Rodziny, wspomnienia i historie ludzi,
                którzy tworzyli i tworzą Krzekotów.
              </p>

            </a>


            <a
              href="/zycie-wspolczesne"
              className="rounded-2xl bg-amber-50 p-8 shadow hover:shadow-lg"
            >

              <h3 className="text-2xl font-bold text-green-900">
                🏡 Życie współczesne
              </h3>

              <p className="mt-4 text-stone-700">
                Wydarzenia, tradycje i działalność
                mieszkańców oraz KGW Żurawianki.
              </p>

            </a>


          </div>

        </section>


        {/* Hasło końcowe */}
        <section className="bg-green-900 py-12 text-center text-white">

          <p className="text-2xl italic text-amber-100">
            Ocalić przeszłość. Budować pamięć.
          </p>

        </section>


      </main>

      <Footer />

    </>
  );
}