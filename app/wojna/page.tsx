"use client";

import { useState } from "react";

export default function Wojna() {

  const [openImage, setOpenImage] = useState<string | null>(null);


  return (

    <main
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(rgba(220,232,210,.90), rgba(244,232,204,.90)), url('/images/historia/stara-mapa-tlo.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >


      <section className="py-20">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <h1 className="text-5xl font-bold text-stone-800">
            Krzekotów w czasie II wojny światowej
          </h1>

          <p className="mt-6 text-xl text-stone-700">
            Wydarzenia wojenne, działania frontowe i losy mieszkańców.
          </p>

        </div>

      </section>




      <section className="py-16">

        <div className="mx-auto max-w-6xl px-6 space-y-8">


          <div className="rounded-2xl bg-white/90 p-8 shadow-lg backdrop-blur-sm">

            <h2 className="text-3xl font-bold text-stone-800">
              Lata wojny
            </h2>

            <p className="mt-4 text-lg text-stone-700 leading-relaxed">
              II wojna światowa była jednym z najtrudniejszych okresów
              w historii Krzekotowa. Działania wojenne oraz wydarzenia
              1945 roku wpłynęły na losy miejscowości i jej mieszkańców.
            </p>

          </div>




          <div className="rounded-2xl bg-white/90 p-8 shadow-lg backdrop-blur-sm">

            <h2 className="text-3xl font-bold text-stone-800">
              Rok 1945
            </h2>

            <p className="mt-4 text-lg text-stone-700 leading-relaxed">
              Początek 1945 roku przyniósł przejście frontu,
              działania wojskowe oraz wielkie zmiany społeczne.
              Zachowane mapy pomagają odtworzyć przebieg wydarzeń.
            </p>


            <img
              src="/images/fotografie/vmapa-natarcie-1945.jpg.jpeg"
              alt="Mapa natarcia 1945"
              onClick={() =>
                setOpenImage("/images/fotografie/vmapa-natarcie-1945.jpg.jpeg")
              }
              className="
                mt-8
                w-full
                cursor-pointer
                rounded-xl
                transition
                hover:scale-[1.02]
              "
            />

          </div>




          <div className="rounded-2xl bg-white/90 p-8 shadow-lg backdrop-blur-sm">

            <h2 className="text-3xl font-bold text-stone-800">
              Mieszkańcy i wojna
            </h2>

            <p className="mt-4 text-lg text-stone-700 leading-relaxed">
              Wojna oznaczała dla mieszkańców utratę poczucia bezpieczeństwa,
              zmiany administracyjne oraz konieczność rozpoczęcia nowego etapu
              życia po 1945 roku.
            </p>

          </div>




          <div className="rounded-2xl bg-amber-100/90 p-8 shadow backdrop-blur-sm">

            <h2 className="text-3xl font-bold text-stone-800">
              Materiały archiwalne
            </h2>

            <p className="mt-4 text-lg text-stone-700 leading-relaxed">
              W przyszłości zostaną tutaj dodane wspomnienia mieszkańców,
              fotografie wojenne, dokumenty oraz szczegółowe opracowanie
              wydarzeń związanych z frontem.
            </p>

          </div>


        </div>

      </section>





      {openImage && (

        <div
          className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-black/90
            p-6
          "
          onClick={() => setOpenImage(null)}
        >

          <img
            src={openImage}
            alt="Mapa powiększona"
            onClick={(e) => e.stopPropagation()}
            className="
              max-h-[90vh]
              max-w-[95vw]
              rounded-xl
            "
          />

        </div>

      )}


    </main>

  );
}