import Link from "next/link";
import Image from "next/image";
import { remark } from "remark";
import html from "remark-html";

import styles from "../historia.module.css";
import { getSkrzynia } from "@/lib/historia";

export default async function Skrzynia3() {
  const skrzynia = getSkrzynia("skrzynia-3");

  const processedContent = await remark()
    .use(html)
    .process(skrzynia.content);

  const contentHtml = processedContent.toString();

  return (
    <main className={styles.page}>
      <article className={styles.kronika}>

        <header className={styles.header}>

          <div className={styles.label}>
            SKRZYNIA CZASU III
          </div>

          <h1>
            {skrzynia.metadata.title}
          </h1>

          <div className={styles.date}>
            {skrzynia.metadata.subtitle}
          </div>

        </header>


        <section
          className={`${styles.section} ${styles.markdown}`}
          dangerouslySetInnerHTML={{
            __html: contentHtml,
          }}
        />


        <section className={styles.next}>

          <p className={styles.text}>
            Kolejny rozdział historii Krzekotowa prowadzi do czasów powojennych
            i przemian, które rozpoczęły nowy etap dziejów miejscowości.
          </p>


          <div className={styles.chestNavigation}>


            <Link
              href="/historia/skrzynia-2"
              className={styles.chestLink}
            >

              <Image
                src="/images/historia/skrzynia-2.png"
                alt="Skrzynia Czasu II"
                width={250}
                height={150}
              />

              <span>
                Skrzynia Czasu II
              </span>

              <small>
                poprzedni rozdział
              </small>

            </Link>



            <Link
              href="/historia/skrzynia-4"
              className={styles.chestLink}
            >

              <Image
                src="/images/historia/skrzynia-4.png"
                alt="Skrzynia Czasu IV"
                width={250}
                height={150}
              />

              <span>
                Skrzynia Czasu IV
              </span>

              <small>
                następny rozdział
              </small>

            </Link>


          </div>


          <Link
            href="/historia"
            className={styles.back}
          >
            ← Powrót do Skrzyń Czasu
          </Link>


        </section>


      </article>
    </main>
  );
}