"use client";

import { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";

export default function Mapy() {

  const [openImage, setOpenImage] = useState<string | null>(null);

  const mapy = [
    {
      tytul: "Dawny układ Krzekotowa",
      opis:
        "Najstarsza zachowana mapa pokazująca dawny układ miejscowości i jej otoczenia.",
      plik: "mapa-krzekotowa.jpg",
    },

    {
      tytul: "Krzekotów w czasie wojny – 1945 rok",
      opis:
        "Mapa związana z działaniami wojennymi w rejonie Krzekotowa pod koniec II wojny światowej.",
      plik: "vmapa-natarcie-1945.jpg",
    },

    {
      tytul: "Krzekotów współczesny",
      opis:
        "Aktualny układ miejscowości, dróg, gospodarstw i miejsc ważnych dla mieszkańców.",
      plik: "mapa-dzis.jpg",
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
              Historia miejscowości zapisana na mapach.
              Od dawnych śladów po współczesny obraz Krzekotowa.
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


                <p className="mt-4 text-lg text-stone-700 leading-relaxed">
                  {mapa.opis}
                </p>


                <img
                  src={`/images/fotografie/${mapa.plik}`}
                  alt={mapa.tytul}
                  onClick={() =>
                    setOpenImage(`/images/fotografie/${mapa.plik}`)
                  }
                  className="mt-6 w-full rounded-xl cursor-pointer hover:scale-[1.02] transition"
                />


                <p className="mt-4 text-sm text-stone-500 text-center">
                  Kliknij mapę, aby powiększyć
                </p>


              </section>

            ))}


          </div>

        </section>


        {openImage && (

          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6"
            onClick={() => setOpenImage(null)}
          >

            <img
              src={openImage}
              alt="Powiększona mapa"
              onClick={(e) => e.stopPropagation()}
              className="max-h-[90vh] max-w-[95vw] rounded-xl"
            />

          </div>

        )}


      </main>


      <Footer />

    </>
  );
}