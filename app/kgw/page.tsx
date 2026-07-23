"use client";

import { useState } from "react";
import { wydarzeniaKGW } from "./wydarzenia/dane";

export default function KGWPage() {
  const [galeria, setGaleria] = useState<{
    zdjecia: string[];
    index: number;
  } | null>(null);

  function nastepne() {
    if (!galeria) return;

    setGaleria({
      zdjecia: galeria.zdjecia,
      index: (galeria.index + 1) % galeria.zdjecia.length,
    });
  }

  function poprzednie() {
    if (!galeria) return;

    setGaleria({
      zdjecia: galeria.zdjecia,
      index:
        galeria.index === 0
          ? galeria.zdjecia.length - 1
          : galeria.index - 1,
    });
  }


  return (
    <main className="min-h-screen bg-[#f8f5ef]">

      <section className="bg-white py-10 text-center">

        <img
          src="/images/kgw/logo/logo-zurawianki.jpg"
          className="mx-auto w-48 rounded-3xl shadow"
        />

        <h1 className="mt-6 text-5xl font-bold text-stone-800">
          KGW Żurawianki
        </h1>

        <p className="text-xl text-stone-600">
          Kronika wydarzeń
        </p>

      </section>


      <section className="mx-auto max-w-6xl px-6 py-12">

        <div className="space-y-10">

          {wydarzeniaKGW.map((w, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl shadow p-6 flex gap-8 items-center"
            >

              <img
                src={w.folder + w.zdjecia[0]}
                className="w-72 h-48 object-cover rounded-2xl cursor-pointer"
                onClick={() =>
                  setGaleria({
                    zdjecia: w.zdjecia.map(z => w.folder + z),
                    index: 0,
                  })
                }
              />


              <div>

                <h2 className="text-3xl font-bold text-stone-800">
                  {w.tytul}
                </h2>

                <div className="text-amber-700 font-bold mt-2">
                  {w.rok}
                </div>

                <p className="mt-4 text-lg text-stone-700 leading-8">
                  {w.opis}
                </p>

                <button
                  className="mt-5 text-amber-700 font-bold"
                  onClick={() =>
                    setGaleria({
                      zdjecia: w.zdjecia.map(z => w.folder + z),
                      index: 0,
                    })
                  }
                >
                  📷 Zobacz galerię ({w.zdjecia.length})
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>


      {galeria && (

        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">

          <button
            className="absolute top-5 right-5 text-white text-5xl"
            onClick={() => setGaleria(null)}
          >
            ×
          </button>


          <button
            className="absolute left-5 text-white text-8xl"
            onClick={poprzednie}
          >
            ‹
          </button>


          <img
            src={galeria.zdjecia[galeria.index]}
            className="max-h-[85vh] max-w-[85vw] rounded-2xl"
          />


          <button
            className="absolute right-5 text-white text-8xl"
            onClick={nastepne}
          >
            ›
          </button>


          <div className="absolute bottom-5 text-white text-xl">
            {galeria.index + 1}/{galeria.zdjecia.length}
          </div>

        </div>

      )}

    </main>
  );
}