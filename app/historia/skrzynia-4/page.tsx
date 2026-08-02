import Link from "next/link";
import Image from "next/image";
import { remark } from "remark";
import html from "remark-html";

import styles from "../historia.module.css";
import { getSkrzynia } from "@/lib/historia";

export default async function Skrzynia4() {
  const skrzynia = getSkrzynia("skrzynia-4");

  const processedContent = await remark()
    .use(html)
    .process(skrzynia.content);

  const contentHtml = processedContent.toString();

  return (
    <main className={styles.page}>
      <article className={styles.kronika}>

        <header className={styles.header}>

          <div className={styles.label}>
            SKRZYNIA CZASU IV
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

          <div className={styles.chestNavigation}>

            <Link
              href="/historia/skrzynia-3"
              className={styles.chestLink}
            >

              <Image
                src="/images/historia/skrzynia-3.png"
                alt="Skrzynia Czasu III"
                width={250}
                height={150}
              />

              <span>
                Skrzynia Czasu III
              </span>

              <small>
                poprzedni rozdział
              </small>

            </Link>


            <Link
              href="/historia/skrzynia-5"
              className={styles.chestLink}
            >

              <Image
                src="/images/historia/skrzynia-5.png"
                alt="Skrzynia Czasu V"
                width={250}
                height={150}
              />

              <span>
                Skrzynia Czasu V
              </span>

              <small>
                następny rozdział
              </small>

            </Link>

          </div>

        </section>


      </article>
    </main>
  );
}
