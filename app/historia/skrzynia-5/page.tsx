import Link from "next/link";
import Image from "next/image";
import { remark } from "remark";
import html from "remark-html";

import styles from "../historia.module.css";
import { getSkrzynia } from "@/lib/historia";

export default async function Skrzynia5() {
  const skrzynia = getSkrzynia("skrzynia-5");

  const processedContent = await remark()
    .use(html)
    .process(skrzynia.content);

  const contentHtml = processedContent.toString();

  return (
    <main className={styles.page}>
      <article className={styles.kronika}>

        <header className={styles.header}>

          <div className={styles.label}>
            SKRZYNIA CZASU V
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
            Pięć skrzyń czasu otworzyło najważniejsze rozdziały historii.
          </p>

          <p className={styles.text}>
            Ale opowieść o Krzekotowie trwa nadal.
          </p>


          <div className={styles.chestNavigation}>

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
                poprzedni rozdział
              </small>

            </Link>


            <Link
              href="/historia"
              className={styles.chestLink}
            >

              <Image
                src="/images/historia/skrzynia-glowna.png"
                alt="Główna Skrzynia Czasu"
                width={250}
                height={150}
              />

              <span>
                Powrót do Skrzyń Czasu
              </span>

              <small>
                początek osi czasu
              </small>

            </Link>

          </div>

        </section>

      </article>
    </main>
  );
}
