import Footer from "../Footer";

export default function KGWPage() {
  return (
    <>
      <main className="min-h-screen bg-amber-50 py-16">

        <div className="mx-auto max-w-5xl px-6">

          <h1 className="text-center text-5xl font-bold text-stone-800">
            KGW Krzekotów Żurawianki
          </h1>

          <p className="mt-6 text-center text-xl text-stone-600">
            Współczesna historia Krzekotowa tworzona przez mieszkańców.
          </p>


          <section className="mt-12 rounded-2xl bg-white p-8 shadow">

            <h2 className="text-3xl font-bold text-stone-800">
              O Kole Gospodyń Wiejskich
            </h2>

            <p className="mt-4 text-lg leading-relaxed text-stone-700">
              KGW Krzekotów Żurawianki jest ważną częścią współczesnego życia
              miejscowości. Dzięki działalności członkiń koła zachowywane są
              lokalne tradycje, zwyczaje oraz pamięć o wydarzeniach
              integrujących mieszkańców.
            </p>

          </section>


          <section className="mt-8 rounded-2xl bg-white p-8 shadow">

            <h2 className="text-3xl font-bold text-stone-800">
              Działalność i wydarzenia
            </h2>

            <p className="mt-4 text-lg leading-relaxed text-stone-700">
              W tym miejscu znajdą się opisy wydarzeń, spotkań, uroczystości
              oraz inicjatyw organizowanych przez KGW Krzekotów Żurawianki.
            </p>

          </section>


          <section className="mt-8 rounded-2xl bg-white p-8 shadow">

            <h2 className="text-3xl font-bold text-stone-800">
              Galeria KGW
            </h2>

            <p className="mt-4 text-lg text-stone-700">
              Fotografie wydarzeń i działalności Koła Gospodyń Wiejskich.
            </p>

          </section>


          <section className="mt-8 rounded-2xl bg-white p-8 shadow">

            <h2 className="text-3xl font-bold text-stone-800">
              Źródło materiałów
            </h2>

            <p className="mt-4 text-stone-700">
              Materiały udostępnione za zgodą KGW Krzekotów Żurawianki.
            </p>

          </section>


        </div>

      </main>

      <Footer />

    </>
  );
}