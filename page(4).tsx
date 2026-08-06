import Link from "next/link";
import styles from "./page.module.css";

export default function Skrzynia1() {
  return (
    <main className={styles.page}>
      <article className={styles.kronika}>
        <header className={styles.header}>
          <div className={styles.label}>SKRZYNIA CZASU I</div>
          <h1>Narodziny Krzekotowa</h1>
          <div className={styles.date}>XIII wiek</div>
        </header>
      </article>
    </main>
  );
}
