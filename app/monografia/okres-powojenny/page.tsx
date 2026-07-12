import Header from "../../Header";
import Footer from "../../Footer";

export default function OkresPowojenny() {
  return (
    <>
      <Header />

      <main className="bg-stone-50 min-h-screen">

        <section className="bg-gradient-to-b from-amber-100 to-white py-20">

          <div className="mx-auto max-w-5xl px-6">

            <h1 className="text-5xl font-bold text-stone-800">
              Okres powojenny
            </h1>

            <p className="mt-6 text-xl text-stone-600">
              Odbudowa życia, nowi mieszkańcy i przemiany Krzekotowa po 1945 roku.
            </p>

          </div>

        </section>


        <section className="py-16">

          <div className="mx-auto max-w-5xl px-6">

            <article className="rounded-2xl bg-white p-8 shadow">


              <h2 className="text-3xl font-bold text-stone-800">
                Nowy rozdział historii
              </h2>

              <p className="mt-5 text-lg leading-8 text-stone-700">
                Zakończenie II wojny światowej rozpoczęło nowy etap
                w dziejach Krzekotowa. Zmieniła się sytuacja polityczna,
                administracyjna oraz skład mieszkańców miejscowości.
              </p>


              <p className="mt-5 text-lg leading-8 text-stone-700">
                Powojenna rzeczywistość oznaczała konieczność odbudowy
                codziennego życia, zagospodarowania gospodarstw oraz
                tworzenia nowych więzi sąsiedzkich.
              </p>


              <h2 className="mt-10 text-3xl font-bold text-stone-800">
                Nowi mieszkańcy
              </h2>

              <p className="mt-5 text-lg leading-8 text-stone-700">
                Po wojnie wiele miejscowości na tych terenach zostało
                zasiedlonych przez ludzi przybyłych z różnych stron.
                Każda rodzina przynosiła własną historię, tradycje
                i doświadczenia.
              </p>


              <h2 className="mt-10 text-3xl font-bold text-stone-800">
                Odbudowa i rozwój miejscowości
              </h2>

              <p className="mt-5 text-lg leading-8 text-stone-700">
                Kolejne lata przyniosły odbudowę gospodarstw, rozwój
                infrastruktury oraz stopniowe przemiany społeczne.
                Krzekotów zmieniał się wraz z całym regionem.
              </p>


              <h2 className="mt-10 text-3xl font-bold text-stone-800">
                Wspomnienia mieszkańców
              </h2>

              <p className="mt-5 text-lg leading-8 text-stone-700">
                Szczególną wartość mają wspomnienia osób, które pamiętają
                pierwsze powojenne lata. Ich relacje pozwalają odtworzyć
                codzienne życie, zwyczaje i wydarzenia ważne dla lokalnej
                społeczności.
              </p>


              <div className="mt-10 rounded-xl bg-amber-50 p-6">

                <h3 className="text-2xl font-bold text-stone-800">
                  Materiały archiwalne
                </h3>

                <ul className="mt-4 list-disc pl-6 text-stone-700">

                  <li>fotografie powojenne</li>
                  <li>wspomnienia pierwszych mieszkańców</li>
                  <li>dokumenty administracyjne</li>
                  <li>historie rodzinne</li>

                </ul>

              </div>


            </article>

          </div>

        </section>


        <section className="bg-white py-10">

          <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 md:flex-row md:justify-between">


            <a
              href="/monografia/przed-1945"
              className="rounded-xl border border-amber-600 px-6 py-3 text-center font-semibold text-amber-700 hover:bg-amber-50"
            >
              ← Krzekotów przed 1945
            </a>


            <a
              href="/monografia/mieszkancy-wspomnienia"
              className="rounded-xl bg-amber-600 px-6 py-3 text-center font-semibold text-white hover:bg-amber-700"
            >
              Mieszkańcy i wspomnienia →
            </a>


          </div>

        </section>


      </main>

      <Footer />
    </>
  );
}