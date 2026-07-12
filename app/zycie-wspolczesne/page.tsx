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
                w którym historia spotyka się z codziennym życiem mieszkańców.
                Tradycja, pamięć o przeszłości oraz nowe inicjatywy tworzą
                obraz miejscowości kolejnych pokoleń.
              </p>

            </div>


            <div className="rounded-2xl bg-white p-8 shadow">

              <h2 className="text-3xl font-bold text-[#B07A16]">
                Wspólne działania mieszkańców
              </h2>

              <p className="mt-4 text-lg text-stone-700 leading-relaxed">
                W tej części będą prezentowane wydarzenia,
                spotkania, inicjatywy społeczne oraz działania mieszkańców
                związane ze współczesnym życiem Krzekotowa.
              </p>

            </div>


            <div className="rounded-2xl bg-white p-8 shadow">

              <h2 className="text-3xl font-bold text-[#B07A16]">
                Tradycja i wydarzenia
              </h2>

              <p className="mt-4 text-lg text-stone-700 leading-relaxed">
                Uroczystości, spotkania, tradycyjne potrawy,
                lokalne zwyczaje i wspólne przedsięwzięcia są ważną częścią
                życia współczesnej społeczności.
              </p>

            </div>


            <div className="rounded-2xl bg-[#4B5D2A] p-8 text-white">

              <h2 className="text-3xl font-bold">
                Pamięć tworzą ludzie
              </h2>

              <p className="mt-4 text-lg leading-relaxed">
                Każde wydarzenie, każda inicjatywa i każde wspólne działanie
                mieszkańców stają się częścią historii Krzekotowa.
              </p>

            </div>


          </div>

        </section>


      </main>

      <Footer />

    </>
  );
}