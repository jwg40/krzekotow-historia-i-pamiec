import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

const skrzynie = [
  {
    rok: "XIII wiek",
    tytul: "Narodziny Krzekotowa",
    opis: "Początki miejscowości i pierwsze ślady osadnictwa.",
    obraz: "/images/historia/skrzynia-xiii.png",
    link: "/historia/xiii-wiek",
  },
  {
    rok: "Dawne mapy",
    tytul: "Krzekotów na mapach",
    opis: "Ślady dawnych granic, nazw i układu miejscowości.",
    obraz: "/images/historia/skrzynia-mapy.png",
    link: "/historia/mapy",
  },
  {
    rok: "1945",
    tytul: "Koniec pewnej epoki",
    opis: "Zmiany, które odmieniły historię Krzekotowa.",
    obraz: "/images/historia/skrzynia-1945.png",
    link: "/historia/1945",
  },
  {
    rok: "Po 1945",
    tytul: "Nowi mieszkańcy",
    opis: "Osadnicy, którzy tworzyli powojenny Krzekotów.",
    obraz: "/images/historia/skrzynia-osadnicy.png",
    link: "/historia/osadnicy",
  },
  {
    rok: "Dzisiaj",
    tytul: "Współczesny Krzekotów",
    opis: "Miejsce, które żyje dzięki swoim mieszkańcom.",
    obraz: "/images/historia/skrzynia-dzis.png",
    link: "/historia/dzis",
  },
];

export default function HistoriaPage() {
  return (
    <main className={styles.historia}>
      <div className={styles.overlay}>

        <h1>Historia Krzekotowa</h1>

        <p className={styles.wstep}>
          Otwórz skrzynie czasu i odkrywaj kolejne rozdziały historii naszej
          miejscowości.
        </p>

        <div className={styles.glownaSkrzynia}>
          <Image
            src="/images/historia/skrzynia-glowna.png"
            alt="Główna skrzynia czasu"
            width={350}
            height={250}
          />
        </div>

        <section className={styles.osCzasu}>
          {skrzynie.map((skrzynia) => (
            <Link
              href={skrzynia.link}
              key={skrzynia.rok}
              className={styles.skrzynia}
            >
              <Image
                src={skrzynia.obraz}
                alt={skrzynia.tytul}
                width={220}
                height={160}
              />

              <h2>{skrzynia.rok}</h2>
              <h3>{skrzynia.tytul}</h3>

              <p>{skrzynia.opis}</p>
            </Link>
          ))}
        </section>

      </div>
    </main>
  );
}