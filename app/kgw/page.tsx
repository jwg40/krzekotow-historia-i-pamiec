export default function KGWPage() {
  return (
    <main className="bg-stone-50 min-h-screen py-12">

      <div className="mx-auto max-w-5xl px-6">

        <section className="bg-white rounded-2xl shadow-lg p-8 text-center">

          <img
            src="/images/kgw/logo/logo-zurawianki.jpg"
            alt="Logo KGW Żurawianki"
            className="mx-auto w-64 mb-8"
          />

          <h1 className="text-4xl font-bold text-stone-800">
            KGW Krzekotów Żurawianki
          </h1>

          <p className="mt-4 text-lg text-stone-600">
            Koło Gospodyń Wiejskich Żurawianki
            <br />
            współczesna historia Krzekotowa
          </p>

        </section>


        <section className="mt-10 bg-white rounded-2xl shadow p-8">

          <h2 className="text-2xl font-bold mb-4 text-stone-800">
            O nas
          </h2>

          <p className="text-stone-700 leading-relaxed">
            Ta część Cyfrowego Archiwum Krzekotowa poświęcona jest
            działalności KGW Żurawianki, wydarzeniom, spotkaniom,
            tradycjom i inicjatywom mieszkańców.
          </p>

        </section>


        <section className="mt-10 grid md:grid-cols-3 gap-6">

          <a
            href="/kgw/wydarzenia"
            className="bg-white rounded-2xl shadow p-6 hover:shadow-xl transition"
          >
            <h3 className="text-xl font-bold text-stone-800">
              Wydarzenia
            </h3>
            <p className="mt-3 text-stone-600">
              Kronika wydarzeń, festynów i uroczystości.
            </p>
          </a>


          <a
            href="/kgw/galeria"
            className="bg-white rounded-2xl shadow p-6 hover:shadow-xl transition"
          >
            <h3 className="text-xl font-bold text-stone-800">
              Galeria
            </h3>
            <p className="mt-3 text-stone-600">
              Zdjęcia i wspomnienia KGW Żurawianki.
            </p>
          </a>


          <div className="bg-white rounded-2xl shadow p-6">

            <h3 className="text-xl font-bold text-stone-800">
              Tradycje
            </h3>

            <p className="mt-3 text-stone-600">
              Rękodzieło, kulinaria i lokalne zwyczaje mieszkańców.
            </p>

          </div>

        </section>


      </div>

    </main>
  );
}