import Image from "next/image";
import Link from "next/link";
import fs from "fs";
import path from "path";
import EdytorMaterialu from "./EdytorMaterialu";

type Material = {
  id: number;
  tytul: string;
  rodzaj: string;
  plik: string;
  zrodlo: string;
  przekazal: string;
  opis: string;
  moje_ustalenia?: string;
  opracowanie?: string;
  projekt_koncowy?: string;
  uwagi_korekty?: string;
  status: string;
};

function pobierzMaterial(id: number): Material | undefined {
  const plik = path.join(
    process.cwd(),
    "content/materialy-robocze/rejestr.json"
  );

  const dane = JSON.parse(
    fs.readFileSync(plik, "utf-8")
  );

  return dane.materialy.find(
    (m: Material) => m.id === id
  );
}

export default async function MaterialPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const material = pobierzMaterial(
    Number(id)
  );

  if (!material) {
    return (
      <main
        style={{
          maxWidth: "1100px",
          margin: "auto",
          padding: "50px 20px",
          fontFamily: "Georgia, serif",
        }}
      >
        <h1>
          Nie znaleziono materiału
        </h1>

        <Link href="/uzupelnianie">
          ← Powrót do warsztatu
        </Link>
      </main>
    );
  }

  return (
    <main
      style={{
        maxWidth: "1100px",
        margin: "auto",
        padding: "40px 20px",
        fontFamily: "Georgia, serif",
      }}
    >
      <Link
        href="/uzupelnianie"
        style={{
          display: "inline-block",
          marginBottom: "30px",
        }}
      >
        ← Powrót do warsztatu
      </Link>

      <header
        style={{
          textAlign: "center",
          marginBottom: "35px",
        }}
      >
        <h1
          style={{
            fontSize: "40px",
            marginBottom: "10px",
          }}
        >
          {material.tytul}
        </h1>

        <p
          style={{
            fontSize: "18px",
            opacity: 0.75,
          }}
        >
          Materiał roboczy nr {material.id}
        </p>
      </header>

      <section
        style={{
          marginBottom: "35px",
          textAlign: "center",
        }}
      >
        <Image
          src={material.plik}
          alt={material.tytul}
          width={1200}
          height={800}
          priority
          style={{
            width: "100%",
            height: "auto",
            maxHeight: "700px",
            objectFit: "contain",
            borderRadius: "12px",
          }}
        />
      </section>

      <section
        style={{
          background: "rgba(255,255,255,0.88)",
          padding: "28px",
          borderRadius: "16px",
          marginBottom: "30px",
        }}
      >
        <h2>
          Informacje od Ciebie
        </h2>

        <p
          style={{
            whiteSpace: "pre-wrap",
            lineHeight: "1.7",
            fontSize: "17px",
          }}
        >
          {material.opis ||
            "Brak informacji początkowych."}
        </p>

        <h2>
          Źródło
        </h2>

        <p
          style={{
            whiteSpace: "pre-wrap",
            lineHeight: "1.7",
            fontSize: "17px",
          }}
        >
          {material.zrodlo ||
            "Źródło nie zostało jeszcze podane."}
        </p>

        <h2>
          Przekazał
        </h2>

        <p
          style={{
            whiteSpace: "pre-wrap",
            lineHeight: "1.7",
            fontSize: "17px",
          }}
        >
          {material.przekazal ||
            "Brak informacji."}
        </p>
      </section>

      <section
        style={{
          background: "rgba(235,240,230,0.9)",
          padding: "28px",
          borderRadius: "16px",
          marginBottom: "35px",
        }}
      >
        <h2>
          🔎 Do ustalenia
        </h2>

        <ul
          style={{
            lineHeight: "1.9",
            fontSize: "17px",
          }}
        >
          <li>
            Data powstania materiału
          </li>

          <li>
            Historia miejsca lub obiektu
          </li>

          <li>
            Osoby związane z materiałem
          </li>

          <li>
            Znaczenie historyczne
          </li>
        </ul>
      </section>

      <EdytorMaterialu
        id={material.id}
        mojeUstalenia={
          material.moje_ustalenia || ""
        }
        opracowanie={
          material.opracowanie || ""
        }
        projektKoncowy={
          material.projekt_koncowy || ""
        }
        uwagiKorekty={
          material.uwagi_korekty || ""
        }
        status={
          material.status || "Nowy"
        }
      />
    </main>
  );
}