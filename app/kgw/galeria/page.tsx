export default function GaleriaKGW() {
  return (
    <main className="bg-stone-50 min-h-screen py-12">

      <div className="mx-auto max-w-5xl px-6">

        <h1 className="text-4xl font-bold text-center mb-10">
          Galeria KGW Żurawianki
        </h1>

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