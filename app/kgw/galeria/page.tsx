export default function GaleriaKGW() {
  return (
    <main className="bg-stone-50 min-h-screen py-12">

      <div className="mx-auto max-w-5xl px-6">

        <div className="text-center mb-10">

          <img
            src="/images/fotografie/logo-zurawianki.jpg"
            alt="Logo KGW Żurawianki"
            className="mx-auto w-40 rounded-xl shadow mb-6"
          />

          <h1 className="text-4xl font-bold text-stone-800">
            KGW Krzekotów Żurawianki
          </h1>

          <p className="text-xl mt-2 text-stone-600">
            Galeria działalności Koła Gospodyń Wiejskich
          </p>

        </div>


        <div className="grid md:grid-cols-3 gap-6">

          <section className="bg-white rounded-xl shadow p-6 text-center">
            <h2 className="text-xl font-bold mb-3">
              Wydarzenia
            </h2>

            <p>
              Zdjęcia z wydarzeń, festynów i uroczystości.
            </p>
          </section>


          <section className="bg-white rounded-xl shadow p-6 text-center">
            <h2 className="text-xl font-bold mb-3">
              Tradycje
            </h2>

            <p>
              Lokalne zwyczaje, rękodzieło i tradycje mieszkańców.
            </p>
          </section>


          <section className="bg-white rounded-xl shadow p-6 text-center">
            <h2 className="text-xl font-bold mb-3">
              Spotkania
            </h2>

            <p>
              Wspólne działania KGW Żurawianki.
            </p>
          </section>

        </div>

      </div>

    </main>
  );
}