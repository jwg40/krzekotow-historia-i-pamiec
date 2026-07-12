import Footer from "../Footer";

export default function KGWPage() {
  return (
    <>
      <main className="min-h-screen bg-stone-50">

        <section className="bg-gradient-to-b from-green-100 to-white py-12">
          <div className="mx-auto max-w-5xl px-6 text-center">

            <div className="mx-auto mb-6 flex h-40 w-40 items-center justify-center rounded-full bg-white shadow">

              <span className="text-stone-400">
                Logo KGW
              </span>

            </div>


            <h1 className="text-5xl font-bold text-stone-800">
              KGW Żurawianki
            </h1>

            <p className="mt-4 text-xl text-stone-600">
              Koło Gospodyń Wiejskich w Krzekotowie
            </p>

          </div>
        </section>



        <section className="mx-auto max-w-5xl px-6 py-12">


          <div className="rounded-2xl bg-white p-8 shadow">

            <h2 className="text-3xl font-bold text-green-800">
              🌿 O KGW Żurawianki
            </h2>

            <p className="mt-4 leading-8 text-stone-700">
              Koło Gospodyń Wiejskich Żurawianki jest ważną częścią
              współczesnego życia Krzekotowa. Dzięki działalności
              mieszkańców zachowane zostają tradycje, zwyczaje oraz
              wspólna pamięć o wydarzeniach tworzących historię miejscowości.
            </p>

          </div>



          <div className="mt-8 grid gap-8 md:grid-cols-3">


            <div className="rounded-2xl bg-white p-6 shadow">

              <h3 className="text-2xl font-bold text-green-800">
                📸 Galeria
              </h3>

              <p className="mt-3 text-stone-700">
                Zdjęcia wydarzeń, spotkań i działalności KGW.
              </p>

            </div>



            <div className="rounded-2xl bg-white p-6 shadow">

              <h3 className="text-2xl font-bold text-green-800">
                🍞 Tradycja
              </h3>

              <p className="mt-3 text-stone-700">
                Przepisy, rękodzieło i lokalne zwyczaje.
              </p>

            </div>



            <div className="rounded-2xl bg-white p-6 shadow">

              <h3 className="text-2xl font-bold text-green-800">
                📅 Kronika
              </h3>

              <p className="mt-3 text-stone-700">
                Historia wydarzeń i inicjatyw KGW.
              </p>

              <a
                href="/kgw/wydarzenia"
                className="mt-5 inline-block rounded-xl bg-green-800 px-5 py-2 text-white hover:bg-green-700"
              >
                Zobacz wydarzenia
              </a>

            </div>


          </div>



          <section className="mt-10 rounded-2xl bg-amber-50 p-8">

            <h2 className="text-3xl font-bold text-stone-800">
              📚 Źródło współczesnej historii Krzekotowa
            </h2>

            <p className="mt-4 leading-8 text-stone-700">
              Materiały KGW Żurawianki będą częścią Cyfrowego Archiwum
              Krzekotowa i zostaną wykorzystane do zachowania pamięci
              o mieszkańcach, wydarzeniach i lokalnych tradycjach.
            </p>

          </section>


        </section>

      </main>

      <Footer />

    </>
  );
}