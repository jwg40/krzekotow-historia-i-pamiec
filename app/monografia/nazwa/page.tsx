import Header from "../../Header";
import Footer from "../../Footer";

export default function NazwaKrzekotowa() {
  return (
    <>
      <Header />

      <main className="bg-stone-50 min-h-screen">

        <section className="bg-gradient-to-b from-amber-100 to-white py-20">

          <div className="mx-auto max-w-5xl px-6">

            <h1 className="text-5xl font-bold text-stone-800">
              Pochodzenie nazwy Krzekotów
            </h1>

            <p className="mt-6 text-xl text-stone-600">
              Historia nazwy miejscowości i jej znaczenie.
            </p>

          </div>

        </section>


        <section className="py-16">

          <div className="mx-auto max-w-5xl px-6">

            <article className="rounded-2xl bg-white p-8 shadow">


              <h2 className="text-3xl font-bold text-stone-800">
                Znaczenie nazwy miejscowości
              </h2>

              <p className="mt-5 text-lg leading-8 text-stone-700">
                Nazwy miejscowości są ważnym elementem lokalnej historii.
                Często zachowują informacje o pierwszych mieszkańcach,
                warunkach przyrodniczych, dawnych właścicielach ziemskich
                lub wydarzeniach związanych z danym miejscem.
              </p>


              <p className="mt-5 text-lg leading-8 text-stone-700">
                Nazwa Krzekotów wymaga dokładnej analizy źródeł
                historycznych, dawnych zapisów oraz zmian językowych,
                jakie zachodziły na przestrzeni wieków.
              </p>


              <h2 className="mt-10 text-3xl font-bold text-stone-800">
                Dawne zapisy nazwy
              </h2>

              <p className="mt-5 text-lg leading-8 text-stone-700">
                W tym miejscu zostaną przedstawione najstarsze znane
                zapisy nazwy miejscowości, ich pisownia w dawnych
                dokumentach oraz zmiany, którym podlegała.
              </p>


              <h2 className="mt-10 text-3xl font-bold text-stone-800">
                Poszukiwanie źródeł
              </h2>

              <p className="mt-5 text-lg leading-8 text-stone-700">
                Analiza nazwy Krzekotów będzie oparta na dokumentach
                archiwalnych, mapach historycznych oraz opracowaniach
                dotyczących nazewnictwa miejscowości regionu.
              </p>


              <div className="mt-10 rounded-xl bg-amber-50 p-6">

                <h3 className="text-2xl font-bold text-stone-800">
                  Materiały archiwalne
                </h3>

                <ul className="mt-4 list-disc pl-6 text-stone-700">

                  <li>dawne mapy z nazwą miejscowości</li>
                  <li>historyczne dokumenty</li>
                  <li>zmiany administracyjne i nazewnicze</li>
                  <li>opracowania językowe</li>

                </ul>

              </div>


            </article>

          </div>

        </section>


        <section className="bg-white py-10">

          <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 md:flex-row md:justify-between">


            <a
              href="/monografia/najdawniejsze-dzieje"
              className="rounded-xl border border-amber-600 px-6 py-3 text-center font-semibold text-amber-700 hover:bg-amber-50"
            >
              ← Najdawniejsze dzieje
            </a>


            <a
              href="/monografia/przed-1945"
              className="rounded-xl bg-amber-600 px-6 py-3 text-center font-semibold text-white hover:bg-amber-700"
            >
              Krzekotów przed 1945 →
            </a>


          </div>

        </section>


      </main>

      <Footer />
    </>
  );
}