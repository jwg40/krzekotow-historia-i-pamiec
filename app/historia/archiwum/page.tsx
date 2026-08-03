import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Archiwum() {

  const skrzynie = [
    {
      id: 1,
      rok: "1263",
      tytul: "Narodziny Krzekotowa",
      opis: "Tam zaczyna się nasza opowieść. Pierwsze ślady osady, dawni mieszkańcy i chwile, gdy rodziła się historia tego miejsca.",
      obraz: "skrzynia-xiii.png",
      link: "/historia/skrzynia-1",
    },
    {
      id: 2,
      rok: "Średniowiecze",
      tytul: "Ślady dawnych pokoleń",
      opis: "Wieś, która zmieniała się przez stulecia. Dawne mapy, zapomniane miejsca i historie ludzi, którzy tworzyli Krzekotów.",
      obraz: "skrzynia-2.png",
      link: "/historia/skrzynia-2",
    },
    {
      id: 3,
      rok: "XIX – XX wiek",
      tytul: "Ludzie i codzienność",
      opis: "Domy, rodziny, praca i zwyczaje. Opowieść o mieszkańcach, których życie zostawiło ślad w historii wsi.",
      obraz: "skrzynia-3.png",
      link: "/historia/skrzynia-3",
    },
    {
      id: 4,
      rok: "XX wiek",
      tytul: "Czas próby i przemian",
      opis: "Wojna, trudne wybory i nowe początki. Historia mieszkańców, którzy pośród zmian budowali swoje życie od nowa.",
      obraz: "skrzynia-4.png",
      link: "/historia/skrzynia-4",
    },
    {
      id: 5,
      rok: "Współczesność",
      tytul: "Pamięć, która trwa",
      opis: "Dzisiejszy Krzekotów żyje dalej. Mieszkańcy, wspomnienia i historie, które dopiero czekają na zapisanie.",
      obraz: "skrzynia-5.png",
      link: "/historia/skrzynia-5",
    },
  ];


  return (
    <main className={styles.container}>

      <Link href="/historia" className={styles.back}>
        ← Powrót do głównej skrzyni
      </Link>


      <section className={styles.header}>

        <h1>
          Skrzynie Czasu Krzekotowa
        </h1>

        <p>
          Otwierasz kolejne rozdziały historii naszej miejscowości.
        </p>

        <p>
          Każda skrzynia przechowuje wspomnienia o ludziach,
          miejscach i wydarzeniach, które tworzyły Krzekotów.
        </p>

        <div className={styles.openInfo}>
          📦 Kliknij skrzynię i rozpocznij podróż przez historię Krzekotowa
        </div>

      </section>



      <section className={styles.timeline}>

        <div className={styles.axis}></div>

        <div className={styles.arrow}>
          →
        </div>


        {skrzynie.map((item) => (

          <Link
            key={item.id}
            href={item.link}
            className={styles.chest}
          >

            <div className={styles.year}>
              {item.rok}
            </div>


            <div className={styles.dot}></div>


            <Image
              src={`/images/historia/${item.obraz}`}
              alt={item.tytul}
              width={260}
              height={260}
              className={styles.chestImage}
            />


            <h2>
              {item.tytul}
            </h2>


            <p>
              {item.opis}
            </p>


            <div className={styles.openButton}>
              Otwórz skrzynię →
            </div>


          </Link>

        ))}


      </section>


    </main>
  );
}