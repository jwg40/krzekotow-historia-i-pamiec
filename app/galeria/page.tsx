"use client";

import { useState } from "react";

export default function GaleriaPage() {

  const [otwarte, setOtwarte] = useState<string | null>(null);


  const zdjecia = [
    {
      src: "/images/fotografie/krzekotow-1.jpg",
      tytul: "Tablica miejscowości",
    },
    {
      src: "/images/fotografie/stara-brama-swietlica.jpg",
      tytul: "Stara brama i świetlica",
    },
    {
      src: "/images/fotografie/stodola-dzis.jpg",
      tytul: "Stodoła",
    },
    {
      src: "/images/fotografie/swietlica-nowa.jpg",
      tytul: "Nowa świetlica",
    },
    {
      src: "/images/fotografie/inicjaly-slup-1.jpg",
      tytul: "Ślad dawnych mieszkańców",
    },
    {
      src: "/images/fotografie/inicjaly-slup-2.jpg",
      tytul: "Inicjały – szczegół",
    },
    {
      src: "/images/fotografie/lista-1945.jpg",
      tytul: "Dokument z 1945 roku",
    },
    {
      src: "/images/fotografie/mapa-dzis.jpg",
      tytul: "Mapa współczesna",
    },
  ];


  return (
    <main className="min-h-screen bg-[#F8F5EF]">


      <section className="bg-white py-16 text-center">

        <h1 className="text-5xl font-bold text-stone-800">
          Fotografie
        </h1>

        <p className="mt-5 text-xl text-stone-600">
          Obrazy miejsc i śladów historii.
        </p>

      </section>



      <section className="mx-auto max-w-7xl px-6 py-16">


        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">


          {zdjecia.map((foto) => (

            <div
              key={foto.src}
              onClick={() => setOtwarte(foto.src)}
              className="cursor-pointer overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >

              <img
                src={foto.src}
                alt={foto.tytul}
                className="h-72 w-full object-cover"
              />

              <div className="p-5">

                <h2 className="text-xl font-bold text-stone-800">
                  {foto.tytul}
                </h2>

              </div>


            </div>

          ))}


        </div>


      </section>



      {otwarte && (

        <div
          onClick={() => setOtwarte(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
        >

          <img
            src={otwarte}
            alt="Powiększone zdjęcie"
            className="max-h-[90vh] max-w-[95vw] rounded-2xl"
          />

        </div>

      )}


    </main>
  );
}