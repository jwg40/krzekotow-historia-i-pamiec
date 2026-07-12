import Footer from "../Footer";

export default function KGWPage() {
  return (
    <>
      <main className="min-h-screen bg-stone-50 py-12">

        <div className="mx-auto max-w-5xl px-6">

          <h1 className="text-center text-5xl font-bold text-stone-800">
            KGW Krzekotów Żurawianki
          </h1>

          <p className="mt-4 text-center text-xl text-stone-600">
            Współczesne dzieje Krzekotowa tworzone przez mieszkańców
          </p>


          <section className="mt-12 rounded-2xl bg-white p-8 shadow">

            <h2 className="text-3xl font-bold text-green-800">
              🌾 O Kole Gospodyń Wiejskich
            </h2>

            <p className="mt-4 leading-8 text-stone-700">
              Koło Gospodyń Wiejskich Krzekotów Żurawianki jest ważną częścią
              współczesnego życia miejscowości. Działalność członkiń KGW
              pokazuje, że tradycja, współpraca i zaangażowanie mieszkańców
              nadal tworzą historię Krzekotowa.
            </p>

            <p className="mt-4 leading-8 text-stone-700">
              Dzięki organizowanym wydarzeniom, spotkaniom oraz pielęgnowaniu
              lokalnych zwyczajów kolejne pokolenia mogą poznawać kulturę
              i dorobek swojej miejscowości.
            </p>

          </section>



          <section className="mt-8 rounded-2xl bg-white p-8 shadow">

            <h2 className="text-3xl font-bold text-green-800">
              📸 Kronika wydarzeń
            </h2>

            <p className="mt-4 leading-8 text-stone-700">
              W tej części powstanie cyfrowa kronika działalności KGW
              Krzekotów Żurawianki. Znajdą się tutaj fotografie, opisy wydarzeń
              oraz wspomnienia mieszkańców.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-3">

              <div className="rounded-xl bg-stone-100 p-6 text-center">
                📷
                <p className="mt-2">
                  Zdjęcia wydarzeń
                </p>
              </div>

              <div className="rounded-xl bg-stone-100 p-6 text-center">
                🎉
                <p className="mt-2">
                  Spotkania i uroczystości
                </p>
              </div>

              <div className="rounded-xl bg-stone-100 p-6 text-center">
                🌿
                <p className="mt-2">
                  Tradycja i kultura
                </p>
              </div>

            </div>

          </section>



          <section className="mt-8 rounded-2xl bg-white p-8 shadow">

            <h2 className="text-3xl font-bold text-green-800">
              🍞 Tradycja i kulinaria
            </h2>

            <p className="mt-4 leading-8 text-stone-700">
              KGW Żurawianki pielęgnuje lokalne tradycje, przepisy kulinarne,
              zwyczaje oraz przekazuje wiedzę kolejnym pokoleniom mieszkańców.
            </p>

          </section>



          <section className="mt-8 rounded-2xl bg-white p-8 shadow">

            <h2 className="text-3xl font-bold text-green-800">
              🤝 Współpraca z Cyfrowym Archiwum Krzekotowa
            </h2>

            <p className="mt-4 leading-8 text-stone-700">
              Materiały udostępnione przez KGW Krzekotów Żurawianki zostaną
              wykorzystane jako zapis współczesnego życia miejscowości.
              Dzięki temu archiwum będzie dokumentować nie tylko dawną historię,
              ale również ludzi i wydarzenia tworzące dzisiejszy Krzekotów.
            </p>

            <p className="mt-4 italic text-stone-600">
              Źródło materiałów: KGW Krzekotów Żurawianki.
            </p>

          </section>



          <div className="mt-12 text-center">

            <a
              href="/"
              className="rounded-xl bg-green-800 px-6 py-3 text-white hover:bg-green-700"
            >
              ← Wróć do strony głównej
            </a>

          </div>


        </div>

      </main>

      <Footer />

    </>
  );
}