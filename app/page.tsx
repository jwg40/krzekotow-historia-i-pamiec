import Header from "./Header";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main className="bg-stone-50">

        <section className="relative overflow-hidden bg-gradient-to-b from-amber-100 via-stone-50 to-white">

          <div className="mx-auto max-w-6xl px-6 py-20">

            <div className="grid md:grid-cols-2 gap-10 items-center">

              <div>

                <h2 className="text-5xl font-bold text-stone-800 leading-tight">
                  Wieś, ludzie
                  <br />
                  i historia miejsca
                </h2>

                <p className="mt-6 text-xl text-stone-600 leading-relaxed">
                  Krzekotów to historia ludzi związanych
                  z ziemią, pracą rolniczą i codziennym życiem.
                  To wspomnienia pokoleń, które tworzyły tę wieś.
                </p>

                <p className="mt-5 text-lg italic text-stone-700">
                  Ocalić przeszłość. Budować pamięć.
                </p>

              </div>


              <div className="rounded-2xl overflow-hidden shadow-lg">

                <img
                  src="/images/mapa-krzekotow.jpg"
                  alt="Mapa Krzekotowa"
                  className="w-full h-auto"
                />

              </div>

            </div>

          </div>

        </section>



        <section className="py-16">

          <div className="mx-auto max-w-6xl px-6">

            <h2 className="text-3xl font-bold text-stone-800 text-center">
              Krzekotów. Historia i Pamięć
            </h2>


            <div className="mt-10 grid md:grid-cols-3 gap-8">


              <div className="bg-white rounded-2xl shadow p-6">

                <h3 className="text-xl font-bold text-stone-800">
                  Historia
                </h3>

                <p className="mt-3 text-stone-600">
                  Dzieje miejscowości, wydarzenia,
                  mieszkańcy i zachowane ślady przeszłości.
                </p>

              </div>



              <div className="bg-white rounded-2xl shadow p-6">

                <h3 className="text-xl font-bold text-stone-800">
                  Mieszkańcy
                </h3>

                <p className="mt-3 text-stone-600">
                  Wspomnienia rodzin, fotografie
                  i historie ludzi związanych z Krzekotowem.
                </p>

              </div>



              <div className="bg-white rounded-2xl shadow p-6">

                <h3 className="text-xl font-bold text-stone-800">
                  Krzekotów dziś
                </h3>

                <p className="mt-3 text-stone-600">
                  Współczesne życie wsi,
                  wydarzenia i działalność mieszkańców.
                </p>

              </div>


            </div>

          </div>

        </section>



      </main>

      <Footer />

    </>
  );
}