import Header from "./Header";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main className="bg-amber-50">

        <section className="relative overflow-hidden">

          <div className="mx-auto max-w-6xl px-6 py-20">

            <div className="text-center">

              <h2 className="text-5xl font-bold text-green-900">
                Krzekotów
              </h2>

              <p className="mt-4 text-3xl font-semibold text-amber-700">
                Historia i Pamięć
              </p>

              <p className="mt-6 text-xl text-stone-700">
                Ocalić przeszłość. Budować pamięć.
              </p>

            </div>


            <div className="mt-16 grid gap-8 md:grid-cols-3">


              <div className="rounded-2xl bg-white p-8 shadow">

                <h3 className="text-2xl font-bold text-green-900">
                  Wieś i tradycja
                </h3>

                <p className="mt-4 text-stone-700">
                  Krzekotów od pokoleń związany jest z rolnictwem,
                  pracą mieszkańców i życiem blisko ziemi.
                </p>

              </div>


              <div className="rounded-2xl bg-white p-8 shadow">

                <h3 className="text-2xl font-bold text-green-900">
                  Historia miejsca
                </h3>

                <p className="mt-4 text-stone-700">
                  Poznaj dzieje miejscowości, dawnych mieszkańców
                  oraz wydarzenia, które tworzyły jej historię.
                </p>

              </div>


              <div className="rounded-2xl bg-white p-8 shadow">

                <h3 className="text-2xl font-bold text-green-900">
                  Żurawianki
                </h3>

                <p className="mt-4 text-stone-700">
                  Współczesne życie wsi, tradycje, wydarzenia
                  i działalność mieszkańców.
                </p>

              </div>


            </div>


            <div className="mt-16 rounded-3xl bg-green-900 p-10 text-center text-white">

              <div className="text-6xl">
                🌾
              </div>

              <h2 className="mt-4 text-3xl font-bold">
                Symbol Krzekotowa
              </h2>

              <p className="mt-4 text-lg text-amber-100">
                Snopek zboża — znak pracy, tradycji i więzi mieszkańców
                z ziemią.
              </p>

            </div>


          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}