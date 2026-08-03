"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function GaleriaPage() {
  const [otwarte, setOtwarte] = useState<string | null>(null);

  const zdjecia = [
    {
      src: "/images/fotografie/krzekotow-1.jpg",
      tytul: "Tablica miejscowości",
      opis: "Współczesny widok Krzekotowa.",
    },
    {
      src: "/images/fotografie/stara-brama-swietlica.jpg",
      tytul: "Stara brama i świetlica",
      opis: "Ślady dawnej zabudowy miejscowości.",
    },
    {
      src: "/images/fotografie/stodola-dzis.jpg",
      tytul: "Dawna stodoła",
      opis: "Pozostałości dawnej architektury gospodarczej.",
    },
    {
      src: "/images/fotografie/swietlica-nowa.jpg",
      tytul: "Nowa świetlica",
      opis: "Miejsce współczesnego życia mieszkańców.",
    },
    {
      src: "/images/fotografie/inicjaly-slup-1.jpg",
      tytul: "Ślad dawnych mieszkańców",
      opis: "Zachowany znak historii miejsca.",
    },
    {
      src: "/images/fotografie/inicjaly-slup-2.jpg",
      tytul: "Inicjały – szczegół",
      opis: "Mały fragment wielkiej historii.",
    },
    {
      src: "/images/fotografie/lista-1945.jpg",
      tytul: "Dokument z 1945 roku",
      opis: "Pamiątka z pierwszych lat powojennych.",
    },
    {
      src: "/images/fotografie/mapa-dzis.jpg",
      tytul: "Mapa współczesna",
      opis: "Krzekotów widziany na mapie.",
    },
  ];

  return (
    <main className={styles.page}>

      <article className={styles.kronika}>

        <header className={styles.header}>

          <div className={styles.label}>
            CYFROWE ARCHIWUM KRZEKOTOWA
          </div>

          <h1>
            Galeria
          </h1>

          <div className={styles.date}>
            Fotografie miejsc i śladów historii Krzekotowa
          </div>

        </header>


        <section className={styles.gallery}>

          {zdjecia.map((foto) => (

            <article
              key={foto.src}
              className={styles.card}
              onClick={() => setOtwarte(foto.src)}
            >

              <img
                src={foto.src}
                alt={foto.tytul}
              />

              <div className={styles.cardText}>

                <h2>
                  {foto.tytul}
                </h2>

                <p>
                  {foto.opis}
                </p>

              </div>

            </article>

          ))}

        </section>


        {otwarte && (

          <div
            className={styles.modal}
            onClick={() => setOtwarte(null)}
          >

            <img
              src={otwarte}
              alt="Powiększona fotografia"
            />

          </div>

        )}

      </article>

    </main>
  );
}