"use client";

import { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";

export default function Galeria() {

  const [openImage, setOpenImage] = useState<string | null>(null);


  const sekcje = [

    {
      title: "🌾 Dawny Krzekotów",
      opis:
        "Fotografie miejsc i obiektów związanych z historią miejscowości.",

      zdjecia: [

        {
          image: "/images/fotografie/stara-brama-swietlica.jpg.jpeg",
          title: "Stara brama świetlicy",
          opis:
            "Pozostałość dawnej zabudowy Krzekotowa."
        },

        {
          image: "/images/fotografie/stodola-dzis.jpg.jpeg",
          title: "Stodoła dziś",
          opis:
            "Zachowany ślad dawnej zabudowy gospodarczej."
        },

        {
          image: "/images/fotografie/swietlica-nowa.jpg.jpeg",
          title: "Nowa świetlica",
          opis:
            "Współczesne miejsce spotkań mieszkańców."
        }

      ]
    },



    {
      title: "📜 Mapy i dokumenty",
      opis:
        "Materiały źródłowe pomagające odtworzyć historię Krzekotowa.",

      zdjecia: [

        {
          image: "/images/fotografie/mapa-krzekotowa.jpg.jpeg",
          title: "Mapa Krzekotowa",
          opis:
            "Mapa związana z historią miejscowości."
        },

        {
          image: "/images/fotografie/vmapa-natarcie-1945.jpg.jpeg",
          title: "Mapa wydarzeń 1945 roku",
          opis:
            "Materiały dotyczące okresu wojennego."
        },

        {
          image: "/images/fotografie/lista-1945.jpg.jpeg",
          title: "Dokument z 1945 roku",
          opis:
            "Archiwalny dokument związany z historią miejscowości."
        }

      ]
    },



    {
      title: "👨‍👩‍👧 Mieszkańcy",
      opis:
        "Miejsce na fotografie rodzinne i wspomnienia mieszkańców.",

      zdjecia: []
    },



    {
      title: "🎉 Życie współczesne i Żurawianki",
      opis:
        "Fotografie wydarzeń, spotkań i działalności mieszkańców.",

      zdjecia: []
    }

  ];



  return (
    <>
      <Header />

      <main className="bg-[#FAF6ED] min-h-screen">


        <section className="bg-gradient-to-b from-[#F5E6B8] to-[#FAF6ED] py-20">

          <div className="mx-auto max-w-5xl px-6 text-center">

            <div className="text-5xl mb-4">
              📷
            </div>

            <h1 className="text-5xl font-bold text-[#3F4A24]">
              Galeria Krzekotowa
            </h1>

            <p className="mt-6 text-xl text-stone-700">
              Obrazy miejsc, ludzi i wydarzeń,
              które tworzą historię Krzekotowa.
            </p>

          </div>

        </section>




        <section className="py-16">


          <div className="mx-auto max-w-6xl px-6 space-y-16">


            {sekcje.map((sekcja, index) => (

              <div key={index}>


                <h2 className="text-3xl font-bold text-[#B07A16]">
                  {sekcja.title}
                </h2>


                <p className="mt-3 mb-8 text-stone-700">
                  {sekcja.opis}
                </p>



                <div className="grid gap-8 md:grid-cols-3">


                  {sekcja.zdjecia.map((foto, i) => (

                    <div
                      key={i}
                      className="rounded-2xl bg-white p-5 shadow"
                    >

                      <img
                        src={foto.image}
                        alt={foto.title}
                        onClick={() => setOpenImage(foto.image)}
                        className="w-full rounded-xl cursor-pointer hover:scale-105 transition"
                      />


                      <h3 className="mt-4 text-xl font-bold text-[#3F4A24]">
                        {foto.title}
                      </h3>


                      <p className="mt-2 text-stone-600">
                        {foto.opis}
                      </p>


                    </div>

                  ))}


                  {sekcja.zdjecia.length === 0 && (

                    <div className="rounded-2xl bg-white p-8 shadow">

                      <p className="text-stone-600">
                        Miejsce przygotowane na przyszłe materiały.
                      </p>

                    </div>

                  )}


                </div>


              </div>

            ))}


          </div>


        </section>



        {openImage && (

          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
            onClick={() => setOpenImage(null)}
          >

            <img
              src={openImage}
              alt="Powiększenie"
              className="max-h-[90vh] max-w-[95vw] rounded-xl"
            />

          </div>

        )}


      </main>


      <Footer />

    </>
  );
}