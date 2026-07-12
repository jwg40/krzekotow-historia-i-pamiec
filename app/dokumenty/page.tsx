"use client";

import { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";

export default function Dokumenty() {

  const [openImage, setOpenImage] = useState<string | null>(null);


  const dokumenty = [
    {
      tytul: "Lista z 1945 roku",
      opis:
        "Dokument związany z historią mieszkańców Krzekotowa w okresie powojennym.",
      plik: "lista-1945.jpg",
      kategoria: "Rok 1945",
    },
  ];


  return (
    <>
      <Header />


      <main className="bg-stone-50 min-h-screen">


        <section className="bg-gradiento-to-b from-amber-100 to-white py-20">

          <div className="mx-auto max-w-5xl px-6 text-center">

            <h1 className="text-5xl font-bold text-stone-800">
              Dokumenty Krzekotowa
            </h1>


            <p className="mt-6 text-xl text-stone-600">
              Zbiór dokumentów, zapisów i materiałów źródłowych
              związanych z historią miejscowości.
            </p>

          </div>

        </section>



        <section className="py-16">

          <div className="mx-auto max-w-6xl px-6">


            <h2 className="mb-8 text-3xl font-bold text-stone-800">
              Archiwum dokumentów
            </h2>



            <div className="grid gap-8 md:grid-cols-3">


              {dokumenty.map((dokument) => (

                <div
                  key={dokument.plik}
                  className="rounded-2xl bg-white p-6 shadow"
                >


                  <img
                    src={`/images/fotografie/${dokument.plik}`}
                    alt={dokument.tytul}
                    onClick={() =>
                      setOpenImage(`/images/fotografie/${dokument.plik}`)
                    }
                    className="w-full rounded-xl cursor-pointer hover:scale-105 transition"
                  />


                  <p className="mt-4 text-sm text-amber-700 font-semibold">
                    {dokument.kategoria}
                  </p>


                  <h3 className="mt-2 text-2xl font-bold text-stone-800">
                    {dokument.tytul}
                  </h3>


                  <p className="mt-3 text-stone-600 leading-relaxed">
                    {dokument.opis}
                  </p>


                </div>

              ))}



              <div className="rounded-2xl bg-white p-8 shadow">


                <h3 className="text-2xl font-bold text-stone-800">
                  Kolejne dokumenty
                </h3>


                <p className="mt-4 text-stone-600 leading-relaxed">
                  W tym miejscu będą dodawane kolejne skany,
                  wykazy mieszkańców, kroniki oraz materiały archiwalne.
                </p>


              </div>


            </div>


          </div>

        </section>



        {openImage && (

          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6"
            onClick={() => setOpenImage(null)}
          >

            <img
              src={openImage}
              alt="Powiększony dokument"
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