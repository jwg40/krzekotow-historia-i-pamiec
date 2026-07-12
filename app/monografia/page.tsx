import Header from "../Header";
import Footer from "../Footer";

export default function Monografia() {
  return (
    <>
      <Header />

      <main className="bg-stone-50 min-h-screen">

        <section className="bg-gradient-to-b from-amber-100 to-white py-20">

          <div className="mx-auto max-w-5xl px-6 text-center">

            <h1 className="text-5xl font-bold text-stone-800">
              Monografia Krzekotowa
            </h1>

            <p className="mt-6 text-xl text-stone-600">
              Historia miejscowości, mieszkańców i lokalnego dziedzictwa.
            </p>

          </div>

        </section>


        <section className="py-16">

          <div className="mx-auto max-w-6xl px-6">

            <div className="grid gap-8 md:grid-cols-2">


              <a
                href="/monografia/najdawniejsze-dzieje"
                className="rounded-2xl bg-white p-8 shadow hover:shadow-xl transition"
              >
                <div className="text-5xl">🏺</div>

                <h2 className="mt-4 text-3xl font-bold text-stone-800">
                  Najdawniejsze dzieje
                </h2>

                <p className="mt-3 text-stone-600">
                  Początki osadnictwa i pierwsze informacje o historii Krzekotowa.
                </p>

              </a>


              <a
                href="/monografia/nazwa"
                className="rounded-2xl bg-white p-8 shadow hover:shadow-xl transition"
              >
                <div className="text-5xl">📜</div>

                <h2 className="mt-4 text-3xl font-bold text-stone-800">
                  Pochodzenie nazwy
                </h2>

                <p className="mt-3 text-stone-600">
                  Historia nazwy miejscowości i jej dawne zapisy.
                </p>

              </a>


              <a
                href="/monografia/przed-1945"
                className="rounded-2xl bg-white p-8 shadow hover:shadow-xl transition"
              >
                <div className="text-5xl">🏡</div>

                <h2 className="mt-4 text-3xl font-bold text-stone-800">
                  Krzekotów przed 1945
                </h2>

                <p className="mt-3 text-stone-600">
                  Dawna historia miejscowości i życie mieszkańców.
                </p>

              </a>


              <a
                href="/monografia/okres-powojenny"
                className="rounded-2xl bg-white p-8 shadow hover:shadow-xl transition"
              >
                <div className="text-5xl">🌅</div>

                <h2 className="mt-4 text-3xl font-bold text-stone-800">
                  Okres powojenny
                </h2>

                <p className="mt-3 text-stone-600">
                  Odbudowa życia i przemiany po 1945 roku.
                </p>

              </a>


              <a
                href="/monografia/mieszkancy-wspomnienia"
                className="rounded-2xl bg-white p-8 shadow hover:shadow-xl transition"
              >
                <div className="text-5xl">👨‍👩‍👧</div>

                <h2 className="mt-4 text-3xl font-bold text-stone-800">
                  Mieszkańcy i wspomnienia
                </h2>

                <p className="mt-3 text-stone-600">
                  Historie rodzin i wspomnienia mieszkańców Krzekotowa.
                </p>

              </a>


              <a
                href="/monografia/krzekotow-wspolczesny"
                className="rounded-2xl bg-white p-8 shadow hover:shadow-xl transition"
              >
                <div className="text-5xl">🌳</div>

                <h2 className="mt-4 text-3xl font-bold text-stone-800">
                  Krzekotów współczesny
                </h2>

                <p className="mt-3 text-stone-600">
                  Dzisiejsza miejscowość i zachowanie dziedzictwa.
                </p>

              </a>


            </div>

          </div>

        </section>


        <section className="bg-amber-100 py-12">

          <div className="mx-auto max-w-4xl px-6 text-center">

            <h2 className="text-3xl font-bold text-stone-800">
              Cyfrowe Archiwum Krzekotowa
            </h2>

            <p className="mt-4 text-stone-700">
              Monografia będzie rozwijana o fotografie, dokumenty,
              mapy i wspomnienia mieszkańców.
            </p>

          </div>

        </section>


      </main>

      <Footer />

    </>
  );
}