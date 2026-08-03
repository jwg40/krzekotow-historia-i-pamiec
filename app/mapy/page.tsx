"use client";

import { useState } from "react";


export default function MapyPage() {

  const [otwartaMapa, setOtwartaMapa] = useState<string | null>(null);


  const mapy = [
    {
      src: "/images/mapa-krzekotow.jpg",
      alt: "Dawny Krzekotów",
      tytul: "Dawny Krzekotów",
      opis:
        "Historyczna mapa przedstawiająca dawny układ miejscowości oraz zabudowę z wcześniejszych okresów."
    },
    {
      src: "/images/fotografie/vmapa-natarcie-1945.jpg",
      alt: "Mapa działań 1945",
      tytul: "Rok 1945",
      opis:
        "Mapa związana z wydarzeniami końca II wojny światowej i zmianami, które dotknęły miejscowość."
    },
    {
      src: "/images/fotografie/mapa-dzis.jpg",
      alt: "Współczesny Krzekotów",
      tytul: "Krzekotów współcześnie",
      opis:
        "Współczesny obraz miejscowości i jej obecny układ."
    }
  ];


  return (

    <main
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(rgba(220,232,210,.90), rgba(244,232,204,.90)), url('/images/historia/stara-mapa-tlo.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >


      <section className="py-20 text-center">

        <h1 className="text-5xl font-bold text-stone-800">
          Mapy Krzekotowa
        </h1>

        <p className="mt-5 text-xl text-stone-700">
          Zmiany miejsca na przestrzeni dziejów Krzekotowa.
        </p>

      </section>



      <section className="mx-auto max-w-6xl px-6 py-10 space-y-12">


        {mapy.map((mapa) => (


          <article
            key={mapa.src}
            className="
              overflow-hidden
              rounded-2xl
              bg-[#f5ead2]/95
              border
              border-[#9a7545]/40
              shadow-[0_15px_35px_rgba(90,60,25,0.25)]
            "
          >


            <div
              onClick={() => setOtwartaMapa(mapa.src)}
              className="
                cursor-pointer
                flex
                justify-center
                bg-[#ead9b8]
                p-6
              "
            >

              <img
                src={mapa.src}
                alt={mapa.alt}
                className="
                  max-h-[520px]
                  w-auto
                  max-w-full
                  object-contain
                  rounded-lg
                  border
                  border-[#9a7545]/30
                  shadow-md
                  hover:scale-[1.02]
                  transition
                "
              />

            </div>



            <div className="p-8 border-t border-[#9a7545]/30">


              <h2 className="text-3xl font-bold text-stone-800">
                {mapa.tytul}
              </h2>


              <p className="mt-4 text-lg leading-8 text-stone-700">
                {mapa.opis}
              </p>


              <p className="mt-4 text-sm text-stone-500">
                Kliknij mapę, aby powiększyć.
              </p>


            </div>


          </article>


        ))}


      </section>



      {otwartaMapa && (

        <div
          onClick={() => setOtwartaMapa(null)}
          className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-black/90
            p-4
            cursor-zoom-out
          "
        >

          <img
            src={otwartaMapa}
            alt="Powiększona mapa"
            className="
              max-h-[95vh]
              max-w-[98vw]
              object-contain
              rounded-xl
            "
          />

        </div>

      )}


    </main>

  );
}