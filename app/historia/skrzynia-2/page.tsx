import Link from "next/link";
import Image from "next/image";
import { remark } from "remark";
import html from "remark-html";

import styles from "../historia.module.css";
import { getSkrzynia } from "@/lib/historia";

export default async function Skrzynia2() {
  const skrzynia = getSkrzynia("skrzynia-2");

  const processedContent = await remark()
    .use(html)
    .process(skrzynia.content);

  const contentHtml = processedContent.toString();

  return (
    <main className={styles.page}>
      <article className={styles.kronika}>

        <header className={styles.header}>

          <div className={styles.label}>
            SKRZYNIA CZASU II
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
            Średniowieczny Krzekotów był początkiem długiej historii.
          </p>

          <p className={styles.text}>
            Kolejne wieki przyniosły nowych mieszkańców i nowe zmiany.
          </p>


          <div className={styles.chestNavigation}>


            <Link
              href="/historia/skrzynia-1"
              className={styles.chestLink}
            >

              <Image
                src="/images/historia/skrzynia-1.png"
                alt="Skrzynia Czasu I"
                width={250}
                height={150}
              />

              <span>
                Skrzynia Czasu I
              </span>

              <small>
                poprzedni rozdział
              </small>

            </Link>



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
                następny rozdział
              </small>

            </Link>


          </div>

        </section>


      </article>
    </main>
  );
}