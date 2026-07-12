import Header from "../../Header";
import Footer from "../../Footer";

export default function MieszkancyWspomnienia() {
  return (
    <>
      <Header />

      <main className="bg-stone-50 min-h-screen">

        <section className="bg-gradient-to-b from-amber-100 to-white py-20">

          <div className="mx-auto max-w-5xl px-6">

            <h1 className="text-5xl font-bold text-stone-800">
              Mieszkańcy i wspomnienia
            </h1>

            <p className="mt-6 text-xl text-stone-600">
              Ludzie, rodziny i historie tworzące dzieje Krzekotowa.
            </p>

          </div>

        </section>


        <section className="py-16">

          <div className="mx-auto max-w-5xl px-6">

            <article className="rounded-2xl bg-white p-8 shadow">


              <h2 className="text-3xl font-bold text-stone-800">
                Największa wartość archiwum
              </h2>

              <p className="mt-5 text-lg leading-8 text-stone-700">
                Historia miejscowości to nie tylko daty i dokumenty.
                Tworzą ją przede wszystkim ludzie — ich codzienna praca,
                rodziny, zwyczaje oraz wydarzenia, które zapisały się
                w pamięci kolejnych pokoleń.
              </p>


              <p className="mt-5 text-lg leading-8 text-stone-700">
                Wspomnienia mieszkańców pozwalają zachować szczegóły,
                których często nie znajdziemy w oficjalnych dokumentach.
                Są świadectwem życia zwykłych ludzi i przemian zachodzących
                w miejscowości.
              </p>


              <h2 className="mt-10 text-3xl font-bold text-stone-800">
                Rodziny Krzekotowa
              </h2>

              <p className="mt-5 text-lg leading-8 text-stone-700">
                W tej części archiwum będą gromadzone informacje
                o rodzinach związanych z Krzekotowem, ich losach,
                pracy oraz wkładzie w rozwój miejscowości.
              </p>


              <h2 className="mt-10 text-3xl font-bold text-stone-800">
                Wspomnienia mieszkańców
              </h2>

              <p className="mt-5 text-lg leading-8 text-stone-700">
                Każde wspomnienie jest cennym fragmentem historii.
                Opowieści o dawnym życiu, szkole, pracy, sąsiadach
                i ważnych wydarzeniach pozwalają stworzyć obraz
                Krzekotowa widziany oczami jego mieszkańców.
              </p>


              <h2 className="mt-10 text-3xl font-bold text-stone-800">
                Zachowanie pamięci
              </h2>

              <p className="mt-5 text-lg leading-8 text-stone-700">
                Cyfrowe Archiwum Krzekotowa ma być miejscem,
                gdzie fotografie rodzinne, dokumenty oraz wspomnienia
                będą mogły zostać zachowane i przekazane kolejnym
                pokoleniom.
              </p>


              <div className="mt-10 rounded-xl bg-amber-50 p-6">

                <h3 className="text-2xl font-bold text-stone-800">
                  Materiały do dodania
                </h3>

                <ul className="mt-4 list-disc pl-6 text-stone-700">

                  <li>historie rodzin mieszkańców</li>
                  <li>stare fotografie rodzinne</li>
                  <li>wspomnienia ustne</li>
                  <li>życiorysy zasłużonych osób</li>

                </ul>

              </div>


            </article>

          </div>

        </section>


        <section className="bg-white py-10">

          <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 md:flex-row md:justify-between">


            <a
              href="/monografia/okres-powojenny"
              className="rounded-xl border border-amber-600 px-6 py-3 text-center font-semibold text-amber-700 hover:bg-amber-50"
            >
              ← Okres powojenny
            </a>


            <a
              href="/monografia/krzekotow-wspolczesny"
              className="rounded-xl bg-amber-600 px-6 py-3 text-center font-semibold text-white hover:bg-amber-700"
            >
              Krzekotów współczesny →
            </a>


          </div>

        </section>


      </main>

      <Footer />
    </>
  );
}