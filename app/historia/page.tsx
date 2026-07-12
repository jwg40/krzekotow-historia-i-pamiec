import Header from "../Header";
import Footer from "../Footer";

export default function Historia() {
  return (
    <>
      <Header />

      <main className="bg-[#FAF6ED] min-h-screen">


        <section className="bg-gradient-to-b from-[#EED9A6] to-[#FAF6ED] py-20">

          <div className="mx-auto max-w-5xl px-6 text-center">

            <h1 className="text-5xl font-bold text-[#3F4A24]">
              Historia Krzekotowa
            </h1>

            <p className="mt-6 text-xl text-stone-700">
              Dzieje miejscowości, mieszkańców i przemian,
              które kształtowały Krzekotów przez kolejne pokolenia.
            </p>

          </div>

        </section>




        <section className="py-16">


          <div className="mx-auto max-w-5xl px-6 space-y-8">



            <div className="rounded-2xl bg-white p-8 shadow">

              <h2 className="text-3xl font-bold text-[#B07A16]">
                Początki Krzekotowa
              </h2>

              <p className="mt-4 text-lg text-stone-700 leading-relaxed">

                Historia miejscowości, jej nazwa,
                początki osadnictwa oraz najstarsze informacje
                dotyczące Krzekotowa.

              </p>

            </div>




            <div className="rounded-2xl bg-white p-8 shadow">

              <h2 className="text-3xl font-bold text-[#B07A16]">
                Wieś i rolnictwo
              </h2>

              <p className="mt-4 text-lg text-stone-700 leading-relaxed">

                Rolnictwo przez wiele lat stanowiło podstawę
                życia mieszkańców. Gospodarstwa, pola i codzienna
                praca na ziemi tworzyły charakter miejscowości.

              </p>

            </div>




            <div className="rounded-2xl bg-white p-8 shadow">

              <h2 className="text-3xl font-bold text-[#B07A16]">
                Krzekotów przed 1945 rokiem
              </h2>

              <p className="mt-4 text-lg text-stone-700 leading-relaxed">

                Dawna zabudowa, mieszkańcy oraz życie wsi
                przed zmianami, które przyniósł koniec II wojny światowej.

              </p>

            </div>




            <div className="rounded-2xl bg-white p-8 shadow">

              <h2 className="text-3xl font-bold text-[#B07A16]">
                Wojna i rok 1945
              </h2>

              <p className="mt-4 text-lg text-stone-700 leading-relaxed">

                Czas przełomu, przejścia frontu oraz wydarzeń,
                które zmieniły dalsze losy miejscowości i jej mieszkańców.

              </p>

            </div>




            <div className="rounded-2xl bg-white p-8 shadow">

              <h2 className="text-3xl font-bold text-[#B07A16]">
                Lata powojenne
              </h2>

              <p className="mt-4 text-lg text-stone-700 leading-relaxed">

                Odbudowa życia mieszkańców, nowe rodziny,
                gospodarstwa i tworzenie powojennej społeczności.

              </p>

            </div>




            <div className="rounded-2xl bg-[#4B5D2A] p-8 text-white">

              <h2 className="text-3xl font-bold">
                Krzekotów do lat 90.
              </h2>

              <p className="mt-4 text-lg leading-relaxed">

                Przemiany wsi, rozwój miejscowości
                i życie kolejnych pokoleń mieszkańców.

              </p>

            </div>



          </div>


        </section>


      </main>


      <Footer />

    </>
  );
}