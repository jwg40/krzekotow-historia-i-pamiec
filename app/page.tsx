import Header from "./Header";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>

        {/* Zdjęcie główne */}
        <section>
          <div
            className="h-[450px] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('/images/fotografie/krzekotow-wita.jpg')",
            }}
          >
          </div>
        </section>


        {/* Wprowadzenie */}
        <section className="bg-amber-50 py-16">

          <div className="mx-auto max-w-5xl px-6 text-center">

            <div className="text-6xl">
              🌾
            </div>

            <h2 className="mt-6 text-3xl font-bold text-green-900">
              Wieś ludzi, ziemi i tradycji
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-700">
              Krzekotów od pokoleń związany jest z rolnictwem,
              pracą mieszkańców i szacunkiem do ziemi.
              To miejsce tworzone przez ludzi, którzy swoją
              codziennością budowali historię tej wsi.
            </p>

          </div>

        </section>


        {/* Główne działy */}
        <section className="bg-white py-16">

          <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-3">


            <a
              href="/historia"
              className="rounded-2xl bg-amber-50 p-8 shadow hover:shadow-xl"
            >
              <h3 className="text-2xl font-bold text-green-900">
                📜 Historia
              </h3>

              <p className="mt-4 text-stone-700">
                Dzieje Krzekotowa, dokumenty i ślady
                przeszłości zachowane dla kolejnych pokoleń.
              </p>

            </a>


            <a
              href="/mieszkancy"
              className="rounded-2xl bg-amber-50 p-8 shadow hover:shadow-xl"
            >
              <h3 className="text-2xl font-bold text-green-900">
                👥 Mieszkańcy
              </h3>

              <p className="mt-4 text-stone-700">
                Ludzie, rodziny i wspomnienia,
                które tworzą historię miejscowości.
              </p>

            </a>


            <a
              href="/zycie-wspolczesne"
              className="rounded-2xl bg-amber-50 p-8 shadow hover:shadow-xl"
            >
              <h3 className="text-2xl font-bold text-green-900">
                🏡 Życie współczesne
              </h3>

              <p className="mt-4 text-stone-700">
                Wydarzenia, tradycje i życie mieszkańców
                dzisiejszego Krzekotowa.
              </p>

            </a>


          </div>

        </section>


        {/* Hasło końcowe */}
        <section className="bg-green-900 py-12 text-center">

          <p className="text-2xl italic text-amber-100">
            Ocalić przeszłość. Budować pamięć.
          </p>

        </section>

      </main>

      <Footer />

    </>
  );
}