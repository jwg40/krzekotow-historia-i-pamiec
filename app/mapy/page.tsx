import Header from "../Header";
import Footer from "../Footer";

export default function Mapy() {
  const mapy = [
    {
      tytul: "Krzekotów współczesny",
      opis:
        "Aktualny układ miejscowości, dróg, gospodarstw i miejsc ważnych dla mieszkańców.",
      plik: "mapa-dzis.jpg",
    },
    {
      tytul: "Dawny układ Krzekotowa",
      opis:
        "Mapa przedstawiająca historyczny układ miejscowości i jej otoczenia.",
      plik: "mapa-krzekotowa.jpg",
    },
    {
      tytul: "Krzekotów w czasie wojny",
      opis:
        "Mapa związana z wydarzeniami wojennymi w okolicy Krzekotowa w 1945 roku.",
      plik: "vmapa-natarcie-1945.jpg",
    },
  ];

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

          <div className="mx-auto max-w-6xl px-6 space-y-10">

            {mapy.map((mapa) => (
              <section
                key={mapa.plik}
                className="rounded-2xl bg-white p-8 shadow"
              >

                <h2 className="text-3xl font-bold text-[#B07A16]">
                  {mapa.tytul}
                </h2>

                <p className="mt-4 text-lg text-stone-700">
                  {mapa.opis}
                </p>

                <img
                  src={`/images/fotografie/${mapa.plik}`}
                  alt={mapa.tytul}
                  className="mt-6 w-full rounded-xl"
                />

              </section>
            ))}

          </div>

        </section>

      </main>

      <Footer />

    </>
  );
}