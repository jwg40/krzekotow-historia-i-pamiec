import Header from "../../Header";
import Footer from "../../Footer";

export default function NajdawniejszeDzieje() {
  return (
    <>
      <Header />

      <main className="bg-stone-50 min-h-screen">

        <section className="bg-gradient-to-b from-amber-100 to-white py-20">
          <div className="mx-auto max-w-5xl px-6">

            <h1 className="text-5xl font-bold text-stone-800">
              Najdawniejsze dzieje Krzekotowa
            </h1>

            <p className="mt-6 text-xl text-stone-600">
              Początki osadnictwa i pierwsze ślady historii miejscowości.
            </p>

          </div>
        </section>


        <section className="py-16">

          <div className="mx-auto max-w-5xl px-6">

            <article className="rounded-2xl bg-white p-8 shadow">


              <h2 className="text-3xl font-bold text-stone-800">
                Wprowadzenie
              </h2>

              <p className="mt-5 text-lg leading-8 text-stone-700">
                Historia Krzekotowa jest częścią dziejów ziemi, na której
                przez wiele stuleci przenikały się różne kultury, języki
                i tradycje. Poznanie przeszłości miejscowości wymaga
                wykorzystania zachowanych dokumentów, dawnych map,
                zapisów administracyjnych oraz wspomnień mieszkańców.
              </p>


              <p className="mt-5 text-lg leading-8 text-stone-700">
                Cyfrowe Archiwum Krzekotowa ma za zadanie zebrać
                i uporządkować rozproszone informacje, aby historia
                miejscowości była dostępna także dla przyszłych pokoleń.
              </p>


              <h2 className="mt-10 text-3xl font-bold text-stone-800">
                Początki osadnictwa
              </h2>

              <p className="mt-5 text-lg leading-8 text-stone-700">
                Najdawniejsze dzieje każdej miejscowości związane są
                z warunkami naturalnymi: dostępem do wody, żyznymi
                terenami oraz możliwością prowadzenia gospodarki.
                Krzekotów rozwijał się w środowisku typowym dla
                dawnych osad wiejskich tego regionu.
              </p>


              <h2 className="mt-10 text-3xl font-bold text-stone-800">
                Źródła historyczne
              </h2>

              <p className="mt-5 text-lg leading-8 text-stone-700">
                Odtwarzanie historii miejscowości opiera się na wielu
                rodzajach źródeł. Szczególne znaczenie mają stare mapy,
                dokumenty urzędowe, księgi parafialne, fotografie
                oraz przekazy ustne mieszkańców.
              </p>


              <div className="mt-10 rounded-xl bg-amber-50 p-6">

                <h3 className="text-2xl font-bold text-stone-800">
                  Materiały do uzupełnienia
                </h3>

                <ul className="mt-4 list-disc pl-6 text-stone-700">

                  <li>najstarsze wzmianki dotyczące Krzekotowa</li>
                  <li>dawne mapy miejscowości</li>
                  <li>archiwalne dokumenty</li>
                  <li>fotografie i wspomnienia mieszkańców</li>

                </ul>

              </div>


            </article>

          </div>

        </section>


        <section className="bg-white py-10">

          <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 md:flex-row md:justify-between">

            <a
              href="/monografia"
              className="rounded-xl border border-amber-600 px-6 py-3 text-center font-semibold text-amber-700 hover:bg-amber-50"
            >
              📖 Spis rozdziałów
            </a>


            <a
              href="/monografia/nazwa"
              className="rounded-xl bg-amber-600 px-6 py-3 text-center font-semibold text-white hover:bg-amber-700"
            >
              Pochodzenie nazwy Krzekotowa →
            </a>

          </div>

        </section>


      </main>

      <Footer />
    </>
  );
}