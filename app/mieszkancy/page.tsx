import Header from "../Header";
import Footer from "../Footer";

export default function Mieszkancy() {
  return (
    <>
      <Header />

      <main className="bg-stone-50 min-h-screen">


        <section className="bg-gradient-to-b from-amber-100 to-white py-20">

          <div className="mx-auto max-w-5xl px-6 text-center">

            <h1 className="text-5xl font-bold text-stone-800">
              Mieszkańcy Krzekotowa
            </h1>

            <p className="mt-6 text-xl text-stone-600">
              Ludzie, rodziny i wspomnienia tworzące historię miejscowości.
            </p>

          </div>

        </section>



        <section className="py-16">

          <div className="mx-auto max-w-6xl px-6 grid gap-8 md:grid-cols-3">


            <div className="rounded-2xl bg-white p-8 shadow">

              <h2 className="text-2xl font-bold text-stone-800">
                Rodziny Krzekotowa
              </h2>

              <p className="mt-4 text-stone-600 leading-relaxed">
                Miejsce na informacje o rodzinach związanych
                z miejscowością, ich historii i losach.
              </p>

            </div>



            <div className="rounded-2xl bg-white p-8 shadow">

              <h2 className="text-2xl font-bold text-stone-800">
                Wspomnienia mieszkańców
              </h2>

              <p className="mt-4 text-stone-600 leading-relaxed">
                Opowieści mieszkańców, wspomnienia rodzinne
                i historie przekazywane przez pokolenia.
              </p>

            </div>



            <div className="rounded-2xl bg-white p-8 shadow">

              <h2 className="text-2xl font-bold text-stone-800">
                Fotografie rodzinne
              </h2>

              <p className="mt-4 text-stone-600 leading-relaxed">
                Archiwalne zdjęcia mieszkańców i ważnych
                wydarzeń lokalnych.
              </p>

            </div>


          </div>

        </section>



        <section className="pb-16">

          <div className="mx-auto max-w-5xl px-6">

            <div className="rounded-2xl bg-white p-8 shadow">


              <h2 className="text-3xl font-bold text-stone-800">
                Zachowanie pamięci
              </h2>


              <p className="mt-5 text-lg text-stone-700 leading-relaxed">
                Największą wartością każdej miejscowości są jej mieszkańcy.
                To ich praca, codzienne życie i historie rodzinne tworzą
                prawdziwe dziedzictwo Krzekotowa.
              </p>


              <p className="mt-5 text-lg text-stone-700 leading-relaxed">
                Ta część archiwum będzie w przyszłości miejscem gromadzenia
                wspomnień, fotografii oraz historii rodzin związanych
                z Krzekotowem.
              </p>


            </div>

          </div>

        </section>


      </main>

      <Footer />

    </>
  );
}