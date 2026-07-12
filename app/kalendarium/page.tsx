import Header from "../Header";
import Footer from "../Footer";

export default function Kalendarium() {
  return (
    <>
      <Header />

      <main className="bg-stone-50 min-h-screen">


        <section className="bg-gradient-to-b from-amber-100 to-white py-20">

          <div className="mx-auto max-w-5xl px-6 text-center">

            <h1 className="text-5xl font-bold text-stone-800">
              Kalendarium Krzekotowa
            </h1>

            <p className="mt-6 text-xl text-stone-600">
              Najważniejsze wydarzenia z historii miejscowości.
            </p>

          </div>

        </section>



        <section className="py-16">

          <div className="mx-auto max-w-5xl px-6 space-y-8">


            <div className="rounded-2xl bg-white p-8 shadow">

              <h2 className="text-3xl font-bold text-amber-700">
                Dawne dzieje
              </h2>

              <p className="mt-4 text-lg text-stone-700 leading-relaxed">
                Początki historii Krzekotowa związane są z rozwojem
                osadnictwa na tych terenach. Szczegółowe informacje
                będą uzupełniane na podstawie dokumentów, map i opracowań
                historycznych.
              </p>

            </div>



            <div className="rounded-2xl bg-white p-8 shadow">

              <h2 className="text-3xl font-bold text-amber-700">
                Krzekotów przed 1945 rokiem
              </h2>

              <p className="mt-4 text-lg text-stone-700 leading-relaxed">
                Okres przedwojenny to czas funkcjonowania dawnej
                społeczności, gospodarstw oraz lokalnej zabudowy.
                Zachowane mapy i fotografie pozwalają odtworzyć wygląd
                miejscowości z tego okresu.
              </p>

            </div>



            <div className="rounded-2xl bg-white p-8 shadow">

              <h2 className="text-3xl font-bold text-amber-700">
                1945 rok – czas przełomu
              </h2>

              <p className="mt-4 text-lg text-stone-700 leading-relaxed">
                Rok 1945 przyniósł przejście frontu, zakończenie wojny
                oraz ogromne zmiany społeczne. Był to jeden z
                najważniejszych momentów w historii Krzekotowa.
              </p>

            </div>



            <div className="rounded-2xl bg-white p-8 shadow">

              <h2 className="text-3xl font-bold text-amber-700">
                Okres powojenny
              </h2>

              <p className="mt-4 text-lg text-stone-700 leading-relaxed">
                Po wojnie rozpoczął się nowy etap życia miejscowości.
                Przybyli nowi mieszkańcy, odbudowywano gospodarstwa
                i tworzono nową społeczność.
              </p>

            </div>



            <div className="rounded-2xl bg-amber-100 p-8">

              <h2 className="text-3xl font-bold text-stone-800">
                Współczesny Krzekotów
              </h2>

              <p className="mt-4 text-lg text-stone-700 leading-relaxed">
                Dzisiejszy Krzekotów zachowuje ślady swojej historii.
                Fotografie, dokumenty i wspomnienia mieszkańców pozwalają
                zachować pamięć o kolejnych pokoleniach.
              </p>

            </div>


          </div>

        </section>


      </main>

      <Footer />

    </>
  );
}