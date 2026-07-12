export default function KGWPage() {
  return (
    <main className="bg-stone-50 min-h-screen py-12">

      <div className="mx-auto max-w-5xl px-6">

        <section className="bg-white rounded-2xl shadow-lg p-8 text-center">

          <img
            src="/images/fotografie/logo-zurawianki.jpg"
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

          <h2 className="text-2xl font-bold mb-4">
            O nas
          </h2>

          <p>
            Ta część Cyfrowego Archiwum Krzekotowa poświęcona jest
            działalności KGW Żurawianki, wydarzeniom, spotkaniom,
            tradycjom i inicjatywom mieszkańców.
          </p>

        </section>


      </div>

    </main>
  );
}