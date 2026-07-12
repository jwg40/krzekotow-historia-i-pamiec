import Header from "../Header";
import Footer from "../Footer";

export default function Mapy() {
  return (
    <>
      <Header />

      <main className="bg-[#FAF6ED] min-h-screen">

        <section className="bg-gradient-to-b from-[#EED9A6] to-[#FAF6ED] py-20">
          <div className="mx-auto max-w-5xl px-6 text-center">

            <h1 className="text-5xl font-bold text-[#3F4A24]">
              Mapy Krzekotowa
            </h1>

            <p className="mt-6 text-xl text-stone-700">
              Miejsce, w którym historia miejscowości
              spotyka się z przestrzenią i krajobrazem.
            </p>

          </div>
        </section>


        <section className="py-16">

          <div className="mx-auto max-w-6xl px-6 space-y-8">


            <div className="rounded-2xl bg-white p-8 shadow">

              <h2 className="text-3xl font-bold text-[#B07A16]">
                Krzekotów współczesny
              </h2>

              <p className="mt-4 text-lg text-stone-700">
                Aktualny układ miejscowości, dróg,
                gospodarstw i miejsc ważnych dla mieszkańców.
              </p>

            </div>


            <div className="rounded-2xl bg-white p-8 shadow">

              <h2 className="text-3xl font-bold text-[#B07A16]">
                Dawne mapy
              </h2>

              <p className="mt-4 text-lg text-stone-700">
                W tym miejscu będą prezentowane dawne mapy,
                plany i materiały kartograficzne związane z historią Krzekotowa.
              </p>

            </div>


            <div className="rounded-2xl bg-white p-8 shadow">

              <h2 className="text-3xl font-bold text-[#B07A16]">
                Krzekotów w czasie wojny
              </h2>

              <img
                src="/images/fotografie/vmapa-natarcie-1945.jpg"
                alt="Mapa działań wojennych 1945"
                className="mt-6 w-full rounded-xl"
              />

              <p className="mt-4 text-lg text-stone-700">
                Mapa związana z wydarzeniami wojennymi w okolicy Krzekotowa.
              </p>

            </div>


          </div>

        </section>

      </main>

      <Footer />

    </>
  );
}