import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Historia() {
  return (
    <main className={styles.historia}>

      <div className={styles.overlay}>


        <section className={styles.wstep}>


          <div className={styles.ozdobnik}>
            ✦
          </div>


          <h1>
            Historia Krzekotowa
          </h1>


          <h2>
            Otwórz Skrzynię Czasu
          </h2>



          <p className={styles.motto}>
            Każda skrzynia przechowuje fragment historii naszego miejsca.
          </p>



          <p>
            Ukryte w niej opowieści mieszkańców,
            dawne dokumenty i ślady przeszłości
            prowadzą przez kolejne rozdziały dziejów Krzekotowa.
          </p>



        </section>





        <Link
          href="/historia/archiwum"
          className={styles.glownaSkrzynia}
        >


          <Image
            src="/images/historia/skrzynia-glowna.png"
            alt="Główna Skrzynia Czasu Krzekotowa"
            width={550}
            height={380}
            priority
          />


        </Link>



      </div>


    </main>
  );
}