import Header from "../../Header";
import Footer from "../../Footer";

export default function KrzekotowWspolczesny() {
  return (
    <>
      <Header />

      <main className="bg-stone-50 min-h-screen">

        <section className="bg-gradient-to-b from-amber-100 to-white py-20">

          <div className="mx-auto max-w-5xl px-6">

            <h1 className="text-5xl font-bold text-stone-800">
              Krzekotów współczesny
            </h1>

            <p className="mt-6 text-xl text-stone-600">
              Współczesność miejscowości, mieszkańcy i zachowanie lokalnego dziedzictwa.
            </p>

          </div>

        </section>


        <section className="py-16">

          <div className="mx-auto max-w-5xl px-6">

            <article className="rounded-2xl bg-white p-8 shadow">


              <h2 className="text-3xl font-bold text-stone-800">
                Dzisiejszy Krzekotów
              </h2>

              <p className="mt-5 text-lg leading-8 text-stone-700">
                Współczesny Krzekotów jest miejscem, w którym historia
                spotyka się z teraźniejszością. Dawne tradycje, pamięć
                mieszkańców oraz zmieniający się świat tworzą obraz
                miejscowości żyjącej własnym rytmem.
              </p>


              <p className="mt-5 text-lg leading-8 text-stone-700">
                Zachowanie lokalnej historii pozwala lepiej zrozumieć
                miejsce, w którym żyją obecni mieszkańcy, oraz docenić
                dorobek poprzednich pokoleń.
              </p>


              <h2 className="mt-10 text-3xl font-bold text-stone-800">
                Mieszkańcy i życie lokalne
              </h2>

              <p className="mt-5 text-lg leading-8 text-stone-700">
                Najważniejszym elementem każdej miejscowości są ludzie.
                To ich praca, inicjatywy i zaangażowanie wpływają na
                wygląd oraz charakter lokalnej społeczności.
              </p>


              <h2 className="mt-10 text-3xl font-bold text-stone-800">
                Dziedzictwo i pamięć
              </h2>

              <p className="mt-5 text-lg leading-8 text-stone-700">
                Cyfrowe Archiwum Krzekotowa ma za zadanie zachować
                fotografie, dokumenty i wspomnienia, które pokazują
                przemiany miejscowości na przestrzeni lat.
              </p>


              <h2 className="mt-10 text-3xl font-bold text-stone-800">
                Przyszłość archiwum
              </h2>

              <p className="mt-5 text-lg leading-8 text-stone-700">
                Archiwum będzie rozwijane razem z mieszkańcami.
                Każde nowe zdjęcie, dokument lub wspomnienie może stać
                się kolejnym elementem historii Krzekotowa.
              </p>


              <div className="mt-10 rounded-xl bg-amber-50 p-6">

                <h3 className="text-2xl font-bold text-stone-800">
                  Materiały do rozbudowy
                </h3>

                <ul className="mt-4 list-disc pl-6 text-stone-700">

                  <li>współczesne fotografie miejscowości</li>
                  <li>ważne wydarzenia lokalne</li>
                  <li>inicjatywy mieszkańców</li>
                  <li>porównania dawniej i dziś</li>

                </ul>

              </div>


            </article>

          </div>

        </section>


        <section className="bg-white py-10">

          <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 md:flex-row md:justify-between">


            <a
              href="/monografia/mieszkancy-wspomnienia"
              className="rounded-xl border border-amber-600 px-6 py-3 text-center font-semibold text-amber-700 hover:bg-amber-50"
            >
              ← Mieszkańcy i wspomnienia
            </a>


            <a
              href="/monografia"
              className="rounded-xl bg-amber-600 px-6 py-3 text-center font-semibold text-white hover:bg-amber-700"
            >
              📖 Spis monografii
            </a>


          </div>

        </section>


      </main>

      <Footer />
    </>
  );
}