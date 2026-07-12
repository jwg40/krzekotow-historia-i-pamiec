import Header from "../Header";
import Footer from "../Footer";

export default function ZycieWspolczesne() {
  return (
    <>
      <Header />

      <main className="bg-[#FAF6ED] min-h-screen">


        <section className="bg-gradient-to-b from-[#EED9A6] to-[#FAF6ED] py-20">

          <div className="mx-auto max-w-5xl px-6 text-center">

            <h1 className="text-5xl font-bold text-[#3F4A24]">
              Życie współczesne
            </h1>

            <p className="mt-6 text-xl text-stone-700">
              Krzekotów dzisiaj – mieszkańcy, tradycja
              i wspólne działania tworzące życie miejscowości.
            </p>

          </div>

        </section>




        <section className="py-16">

          <div className="mx-auto max-w-6xl px-6 space-y-8">


            <div className="rounded-2xl bg-white p-8 shadow">

              <h2 className="text-3xl font-bold text-[#B07A16]">
                Krzekotów dzisiaj
              </h2>

              <p className="mt-4 text-lg text-stone-700 leading-relaxed">

                Współczesny Krzekotów to miejsce,
                w którym tradycja spotyka się z codziennym życiem mieszkańców.
                To ciągłość historii budowanej przez kolejne pokolenia.

              </p>

            </div>




            <div className="rounded-2xl bg-white p-8 shadow">

              <h2 className="text-3xl font-bold text-[#B07A16]">
                Koło Gospodyń Wiejskich Żurawianki
              </h2>

              <p className="mt-4 text-lg text-stone-700 leading-relaxed">

                Koło Gospodyń Wiejskich Żurawianki jest ważną częścią
                współczesnego życia miejscowości.
                Działalność koła łączy mieszkańców, pielęgnuje tradycje
                oraz tworzy nowe wspomnienia.

              </p>

            </div>




            <div className="rounded-2xl bg-white p-8 shadow">

              <h2 className="text-3xl font-bold text-[#B07A16]">
                Tradycja i wspólne działania
              </h2>

              <p className="mt-4 text-lg text-stone-700 leading-relaxed">

                Spotkania, wydarzenia lokalne, przygotowanie tradycyjnych
                potraw i udział w życiu miejscowości są kontynuacją
                dawnych zwyczajów mieszkańców Krzekotowa.

              </p>

            </div>




            <div className="rounded-2xl bg-[#4B5D2A] p-8 text-white">

              <h2 className="text-3xl font-bold">
                Pamięć tworzą ludzie
              </h2>

              <p className="mt-4 text-lg leading-relaxed">

                Każdy mieszkaniec, każda rodzina i każde wydarzenie
                są częścią historii, która trwa również dzisiaj.

              </p>

            </div>



          </div>

        </section>


      </main>


      <Footer />

    </>
  );
}