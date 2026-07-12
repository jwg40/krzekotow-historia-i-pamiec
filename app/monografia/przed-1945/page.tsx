import Header from "../../Header";
import Footer from "../../Footer";

export default function Przed1945() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-stone-50">

        <section className="bg-gradient-to-b from-amber-100 to-white py-16">
          <div className="mx-auto max-w-5xl px-6 text-center">

            <h1 className="text-5xl font-bold text-stone-800">
              Krzekotów przed 1945 rokiem
            </h1>

            <p className="mt-6 text-xl text-stone-600">
              Dawna historia miejscowości, mieszkańców i zachowanego dziedzictwa.
            </p>

          </div>
        </section>


        <section className="py-12">

          <div className="mx-auto max-w-5xl px-6">

            <div className="rounded-2xl bg-white p-8 shadow">

              <h2 className="text-3xl font-bold text-stone-800 mb-5">
                Dawny Krzekotów
              </h2>

              <p className="text-lg text-stone-700 leading-relaxed">
                Krzekotów przed 1945 rokiem był miejscowością o charakterze
                rolniczym, której życie skupiało się wokół gospodarstw,
                pracy mieszkańców oraz lokalnej wspólnoty.
              </p>

              <p className="mt-4 text-lg text-stone-700 leading-relaxed">
                W tym rozdziale zostaną opisane dawne dzieje miejscowości,
                zabudowa, życie codzienne mieszkańców oraz wydarzenia,
                które wpłynęły na losy Krzekotowa.
              </p>

            </div>

          </div>

        </section>


        <section className="pb-12">

          <div className="mx-auto max-w-5xl px-6 grid gap-8 md:grid-cols-2">


            <div className="rounded-2xl bg-white p-8 shadow">

              <h2 className="text-2xl font-bold text-stone-800">
                Zabudowa i gospodarstwa
              </h2>

              <p className="mt-4 text-stone-700 leading-relaxed">
                Miejsce na opis dawnych budynków, gospodarstw,
                dróg oraz obiektów, które istniały przed 1945 rokiem.
              </p>

            </div>


            <div className="rounded-2xl bg-white p-8 shadow">

              <h2 className="text-2xl font-bold text-stone-800">
                Życie mieszkańców
              </h2>

              <p className="mt-4 text-stone-700 leading-relaxed">
                Miejsce na wspomnienia, opisy rodzin, pracy,
                zwyczajów i codziennego życia dawnych mieszkańców.
              </p>

            </div>


          </div>

        </section>


        <section className="pb-12">

          <div className="mx-auto max-w-5xl px-6">

            <div className="rounded-2xl bg-amber-100 p-8">

              <h2 className="text-3xl font-bold text-stone-800">
                Lata wojny i rok 1945
              </h2>

              <p className="mt-4 text-lg text-stone-700 leading-relaxed">
                W tej części zostaną opisane wydarzenia związane z II wojną
                światową, przejściem frontu oraz zmianami, jakie nastąpiły
                w Krzekotowie w 1945 roku.
              </p>

            </div>

          </div>

        </section>


        <div className="text-center pb-12">

          <a
            href="/monografia"
            className="text-amber-700 font-semibold"
          >
            ← Powrót do monografii
          </a>

        </div>


      </main>

      <Footer />

    </>
  );
}