import Header from "./Header";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>

        <section className="bg-gradient-to-b from-amber-50 to-white py-20">

          <div className="mx-auto max-w-6xl px-6 text-center">

            <div className="text-6xl">
              🌾
            </div>

            <h2 className="mt-6 text-4xl font-bold text-green-900">
              Wieś z historią zapisaną w ziemi i pamięci ludzi
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-stone-700">
              Krzekotów od pokoleń związany jest z rolnictwem,
              pracą na roli i życiem mieszkańców.
              Ta strona zachowuje historię miejsca,
              wspomnienia ludzi oraz wydarzenia tworzące wspólnotę.
            </p>

          </div>

        </section>


        <section className="bg-white py-16">

          <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-3">

            <a
              href="/historia"
              className="rounded-2xl bg-amber-50 p-8 shadow hover:shadow-lg"
            >
              <h3 className="text-2xl font-bold text-green-900">
                Historia
              </h3>

              <p className="mt-4 text-stone-700">
                Dzieje Krzekotowa, dawne czasy,
                wydarzenia i zachowane ślady przeszłości.
              </p>
            </a>


            <a
              href="/mieszkancy"
              className="rounded-2xl bg-amber-50 p-8 shadow hover:shadow-lg"
            >
              <h3 className="text-2xl font-bold text-green-900">
                Mieszkańcy
              </h3>

              <p className="mt-4 text-stone-700">
                Ludzie, rodziny, wspomnienia
                i historie tworzące wieś.
              </p>
            </a>


            <a
              href="/zycie-wspolczesne"
              className="rounded-2xl bg-amber-50 p-8 shadow hover:shadow-lg"
            >
              <h3 className="text-2xl font-bold text-green-900">
                Życie współczesne
              </h3>

              <p className="mt-4 text-stone-700">
                Aktualne wydarzenia, mieszkańcy
                i działalność KGW Żurawianki.
              </p>
            </a>

          </div>

        </section>


        <section className="bg-green-900 py-12 text-center text-white">

          <p className="text-2xl italic">
            Ocalić przeszłość. Budować pamięć.
          </p>

        </section>


      </main>

      <Footer />

    </>
  );
}