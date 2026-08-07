import Link from "next/link";
import fs from "fs";
import path from "path";
import Image from "next/image";

type Material = {
  id: number;
  tytul: string;
  rodzaj: string;
  plik: string;
  zrodlo: string;
  przekazal: string;
  opis: string;
  status: string;
  data_przyjecia: string;
};


function pobierzMaterialy(): Material[] {
  const plik = path.join(
    process.cwd(),
    "content/materialy-robocze/rejestr.json"
  );

  const dane = fs.readFileSync(
    plik,
    "utf-8"
  );

  return JSON.parse(dane).materialy;
}


export default function UzupelnianiePage() {

  const materialy = pobierzMaterialy();


  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "40px 20px",
        fontFamily: "Georgia, serif",
      }}
    >

      <header
        style={{
          textAlign: "center",
          marginBottom: "40px",
        }}
      >

        <h1>
          🗃 Warsztat opracowania materiałów
        </h1>

        <p>
          Miejsce przyjmowania, badania i przygotowywania
          materiałów do Cyfrowego Archiwum Krzekotowa.
        </p>


        <Link
          href="/uzupelnianie/nowy"
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "12px 20px",
            background: "#355834",
            color: "white",
            borderRadius: "8px",
            textDecoration: "none",
          }}
        >
          ➕ Dodaj nowy materiał
        </Link>

      </header>



      {materialy.length === 0 && (
        <p>
          Brak materiałów oczekujących na opracowanie.
        </p>
      )}



      <section
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(300px,1fr))",
          gap: "30px",
        }}
      >

        {materialy.map((material) => (

          <article
            key={material.id}
            style={{
              background:
                "rgba(255,255,255,0.85)",
              padding: "20px",
              borderRadius: "15px",
              boxShadow:
                "0 5px 20px rgba(0,0,0,0.15)",
            }}
          >


            <Image
              src={material.plik}
              alt={material.tytul}
              width={500}
              height={350}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />


            <h2>
              {material.tytul}
            </h2>


            <p>
              <strong>Rodzaj:</strong>{" "}
              {material.rodzaj}
            </p>


            <p>
              <strong>Źródło:</strong>{" "}
              {material.zrodlo}
            </p>


            <p>
              <strong>Przekazał:</strong>{" "}
              {material.przekazal}
            </p>


            <p>
              {material.opis}
            </p>


            <p>
              Status:
              {" "}
              🟡 {material.status}
            </p>


            <Link
              href={`/uzupelnianie/${material.id}`}
              style={{
                display: "inline-block",
                marginTop: "15px",
                padding: "10px 15px",
                background: "#5b4636",
                color: "white",
                borderRadius: "8px",
                textDecoration: "none",
              }}
            >
              🔎 Otwórz kartę opracowania
            </Link>


          </article>

        ))}

      </section>


    </main>
  );
}