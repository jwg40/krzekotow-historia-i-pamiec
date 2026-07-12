import Header from "./Header";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>

        <section className="bg-gradient-to-b from-amber-50 to-white py-20">

          <div className="mx-auto max-w-6xl px-6 text-center">

            <h2 className="text-5xl font-bold text-green-900">
              Krzekotów
            </h2>

            <p className="mt-4 text-2xl text-stone-700">
              Historia i Pamięć
            </p>

            <p className="mt-6 text-lg italic text-stone-600">
              Ocalić przeszłość. Budować pamięć.
            </p>

          </div>

        </section>


        <section className="bg-white py-16">

          <div className="mx-auto max-w-5xl px-6">

            <h3 className="mb-6 text-3xl font-bold text-green-900">
              Wieś z historią
            </h3>

            <p className="text-lg leading-relaxed text-stone-700">
              Krzekotów to miejscowość związana od pokoleń z rolnictwem,
              pracą na ziemi i tradycją mieszkańców.
              Tworzymy cyfrowe archiwum, które zachowuje wspomnienia,
              fotografie, dokumenty oraz historie ludzi tworzących tę wieś.
            </p>

          </div>

        </section>


        <section className="bg-green-900 py-16 text-white">

          <div className="mx-auto max-w-5xl px-6 text-center">

            <div className="text-6xl">
              🌾
            </div>

            <h3 className="mt-4 text-3xl font-bold">
              Symbol Krzekotowa
            </h3>

            <p className="mt-4 text-lg text-amber-100">
              Snopek zboża — znak pracy, tradycji i związku mieszkańców
              z ziemią.
            </p>

          </div>

        </section>


      </main>

      <Footer />

    </>
  );
}