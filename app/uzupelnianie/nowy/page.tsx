"use client";

import { useState } from "react";

export default function NowyMaterialPage() {
  const [tytul, setTytul] = useState("");
  const [rodzaj, setRodzaj] = useState("Zdjęcie");
  const [zrodlo, setZrodlo] = useState("");
  const [przekazal, setPrzekazal] = useState("");
  const [opis, setOpis] = useState("");
  const [plik, setPlik] = useState<File | null>(null);

  const [komunikat, setKomunikat] = useState("");

  async function przyjmijMaterial() {
    if (!tytul || !plik) {
      setKomunikat(
        "Podaj tytuł i wybierz plik."
      );
      return;
    }

    const dane = new FormData();

    dane.append("tytul", tytul);
    dane.append("rodzaj", rodzaj);
    dane.append("zrodlo", zrodlo);
    dane.append("przekazal", przekazal);
    dane.append("opis", opis);
    dane.append("plik", plik);


    const odpowiedz = await fetch(
      "/api/materialy-robocze",
      {
        method: "POST",
        body: dane,
      }
    );


    if (odpowiedz.ok) {
      setKomunikat(
        "Materiał został przyjęty do warsztatu."
      );

      setTytul("");
      setZrodlo("");
      setPrzekazal("");
      setOpis("");
      setPlik(null);
    } else {
      setKomunikat(
        "Wystąpił błąd podczas zapisu."
      );
    }
  }


  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "40px 20px",
        fontFamily: "Georgia, serif",
      }}
    >

      <h1>
        📥 Przyjmij nowy materiał
      </h1>

      <p>
        Tutaj zaczyna się droga każdego zdjęcia,
        dokumentu lub wspomnienia.
      </p>


      <section
        style={{
          background: "rgba(255,255,255,0.85)",
          padding: "30px",
          borderRadius: "15px",
        }}
      >

        <h3>
          Tytuł roboczy
        </h3>

        <input
          value={tytul}
          onChange={(e) =>
            setTytul(e.target.value)
          }
          placeholder="np. Brama dawnego gospodarstwa"
          style={{
            width: "100%",
            padding: "12px",
          }}
        />


        <h3>
          Rodzaj materiału
        </h3>

        <select
          value={rodzaj}
          onChange={(e) =>
            setRodzaj(e.target.value)
          }
        >
          <option>
            Zdjęcie
          </option>

          <option>
            Skan dokumentu
          </option>

          <option>
            Dokument
          </option>
        </select>


        <h3>
          Wybierz plik
        </h3>

        <input
          type="file"
          onChange={(e) =>
            setPlik(
              e.target.files?.[0] || null
            )
          }
        />


        <h3>
          Źródło materiału
        </h3>

        <input
          value={zrodlo}
          onChange={(e) =>
            setZrodlo(e.target.value)
          }
          placeholder="np. zbiory prywatne"
          style={{
            width: "100%",
            padding: "12px",
          }}
        />


        <h3>
          Przekazał
        </h3>

        <input
          value={przekazal}
          onChange={(e) =>
            setPrzekazal(e.target.value)
          }
          placeholder="Imię i nazwisko (jeżeli znane)"
          style={{
            width: "100%",
            padding: "12px",
          }}
        />


        <h3>
          Pierwsze informacje
        </h3>

        <textarea
          value={opis}
          onChange={(e) =>
            setOpis(e.target.value)
          }
          rows={6}
          placeholder="Co wiemy na początku..."
          style={{
            width: "100%",
            padding: "12px",
          }}
        />


        <br /><br />


        <button
          onClick={przyjmijMaterial}
          style={{
            padding: "15px 25px",
            background: "#355834",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          📥 Przyjmij materiał do opracowania
        </button>


        {komunikat && (
          <p>
            {komunikat}
          </p>
        )}

      </section>

    </main>
  );
}