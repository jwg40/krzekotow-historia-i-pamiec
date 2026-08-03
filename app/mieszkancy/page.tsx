"use client";

import styles from "./page.module.css";

export default function MieszkancyPage() {

  return (

    <main className={styles.page}>

      <article className={styles.kronika}>


        <header className={styles.header}>

          <div className={styles.label}>
            CYFROWE ARCHIWUM KRZEKOTOWA
          </div>

          <h1>
            Mieszkańcy
          </h1>

          <div className={styles.date}>
            Ludzie, rodziny i wspomnienia tworzące historię wsi
          </div>

        </header>



        <section className={styles.intro}>

          <h2>
            Ludzie Krzekotowa
          </h2>

          <p>
            Historia miejscowości to nie tylko daty, mapy i budynki.
            Najważniejsi zawsze byli ludzie, którzy tutaj mieszkali,
            pracowali, zakładali rodziny i tworzyli codzienne życie.
          </p>

          <p>
            Ta część archiwum będzie miejscem pamięci o mieszkańcach
            Krzekotowa — dawnych i współczesnych.
          </p>

        </section>



        <section className={styles.boxes}>


          <div className={styles.box}>

            <h2>
              👥 Rodziny Krzekotowa
            </h2>

            <p>
              Historie rodzin, nazwiska mieszkańców oraz wspomnienia
              przekazywane przez kolejne pokolenia.
            </p>

          </div>



          <div className={styles.box}>

            <h2>
              📷 Stare fotografie
            </h2>

            <p>
              Zdjęcia mieszkańców, uroczystości rodzinnych i wydarzeń
              ważnych dla lokalnej społeczności.
            </p>

          </div>



          <div className={styles.box}>

            <h2>
              📝 Wspomnienia
            </h2>

            <p>
              Opowieści mieszkańców o dawnym Krzekotowie,
              pracy, szkole i codziennym życiu.
            </p>

          </div>



        </section>



        <section className={styles.next}>

          <p>
            To miejsce będzie stopniowo uzupełniane.
          </p>

          <p>
            Każde zdjęcie i każda opowieść może stać się częścią
            historii Krzekotowa.
          </p>

        </section>


      </article>


    </main>

  );

}