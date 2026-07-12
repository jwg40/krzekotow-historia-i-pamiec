import Header from "./Header";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main className="bg-[#FAF6ED] min-h-screen">


        <section className="bg-gradient-to-b from-[#EED9A6] to-[#FAF6ED] py-24">


          <div className="mx-auto max-w-5xl px-6 text-center">


            <h1 className="text-5xl font-bold text-[#3F4A24]">
              Krzekotów
            </h1>


            <p className="mt-4 text-3xl text-[#B07A16]">
              Wieś ludzi, ziemi i pamięci
            </p>


            <p className="mt-8 text-xl text-stone-700 leading-relaxed">

              Historia miejscowości tworzona przez pokolenia
              mieszkańców związanych z ziemią, pracą i wspólnym życiem.

            </p>


          </div>


        </section>





        <section className="py-16">


          <div className="mx-auto max-w-6xl px-6">


            <div className="rounded-2xl bg-white p-10 shadow">


              <h2 className="text-3xl font-bold text-[#3F4A24] text-center">
                Historia zapisana w miejscu i ludziach
              </h2>


              <p className="mt-6 text-lg text-stone-700 text-center leading-relaxed">

                Krzekotów to historia gospodarstw, rodzin,
                codziennej pracy i wydarzeń, które przez lata
                kształtowały charakter miejscowości.

                To pamięć o tym, co było,
                i troska o to, co pozostanie dla przyszłych pokoleń.

              </p>


            </div>


          </div>


        </section>





        <section className="py-10">


          <div className="mx-auto max-w-6xl px-6 grid gap-8 md:grid-cols-3">


            <a
              href="/historia"
              className="rounded-2xl bg-white p-8 shadow hover:shadow-lg transition"
            >

              <h2 className="text-2xl font-bold text-[#B07A16]">
                Historia
              </h2>

              <p className="mt-4 text-stone-600">
                Dzieje Krzekotowa, przemiany i losy mieszkańców.
              </p>

            </a>





            <a
              href="/galeria"
              className="rounded-2xl bg-white p-8 shadow hover:shadow-lg transition"
            >

              <h2 className="text-2xl font-bold text-[#B07A16]">
                Galeria
              </h2>

              <p className="mt-4 text-stone-600">
                Fotografie, mapy i dokumenty związane z miejscowością.
              </p>

            </a>





            <a
              href="/zycie-wspolczesne"
              className="rounded-2xl bg-white p-8 shadow hover:shadow-lg transition"
            >

              <h2 className="text-2xl font-bold text-[#B07A16]">
                Życie współczesne
              </h2>

              <p className="mt-4 text-stone-600">
                Mieszkańcy, tradycja i działalność Krzekotowa dzisiaj.
              </p>

            </a>


          </div>


        </section>





        <section className="py-16">


          <div className="mx-auto max-w-5xl px-6">


            <div className="rounded-2xl bg-[#4B5D2A] p-10 text-center text-white">


              <h2 className="text-3xl font-bold">
                Zapraszamy do współtworzenia historii
              </h2>


              <p className="mt-5 text-lg leading-relaxed">

                Każde zdjęcie, dokument i wspomnienie mieszkańców
                może stać się częścią historii Krzekotowa.

              </p>


            </div>


          </div>


        </section>


      </main>


      <Footer />

    </>
  );
}