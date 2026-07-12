import Footer from "../Footer";

export default function KGW() {
  return (
    <>
      <main className="min-h-screen bg-stone-50">

        <section className="bg-gradient-to-b from-green-100 to-white py-16">
          <div className="mx-auto max-w-5xl px-6 text-center">

            <h1 className="text-5xl font-bold text-stone-800">
              KGW Krzekotów Żurawianki
            </h1>

            <p className="mt-4 text-xl text-stone-600">
              Współczesna historia Krzekotowa tworzona przez mieszkańców
            </p>

          </div>
        </section>


        <section className="mx-auto max-w-5xl px-6 py-12">

          <div className="rounded-2xl bg-white p-8 shadow">

            <h2 className="text-3xl font-bold text-stone-800 mb-5">
              O działalności KGW Żurawianki
            </h2>

            <p className="text-lg leading-relaxed text-stone-700">
              Koło Gospodyń Wiejskich Krzekotów Żurawianki jest jednym z ważnych
              elementów współczesnego życia miejscowości. Dzięki zaangażowaniu
              mieszkańców pielęgnuje lokalne tradycje, organizuje wydarzenia,
              integruje społeczność i zachowuje pamięć o zwyczajach przekazywanych
              przez pokolenia.
            </p>

          </div>


          <div className="mt-8 rounded-2xl bg-white p-8 shadow">

            <h2 className="text-3xl font-bold text-stone-800 mb-5">
              Wydarzenia i inicjatywy
            </h2>

            <p className="text-lg leading-relaxed text-stone-700">
              W tej części archiwum będą prezentowane fotografie, opisy wydarzeń
              oraz wspomnienia związane z działalnością KGW Żurawianki.
              Materiały zostały udostępnione za zgodą Koła Gospodyń Wiejskich
              Krzekotów Żurawianki.
            </p>

          </div>


          <div className="mt-8 rounded-2xl bg-amber-50 p-8 shadow">

            <h2 className="text-3xl font-bold text-stone-800 mb-5">
              Źródło materiałów
            </h2>

            <p className="text-lg leading-relaxed text-stone-700">
              Wykorzystane fotografie i informacje pochodzą z materiałów
              publikowanych przez KGW Krzekotów Żurawianki.
              Ich celem jest zachowanie historii lokalnej społeczności
              i dokumentowanie współczesnych dziejów Krzekotowa.
            </p>

          </div>


        </section>

      </main>

      <Footer />
    </>
  );
}