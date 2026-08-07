"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Material = {
  id: number;
  tytul: string;
  plik: string;
  informacje_od_ciebie: string;
  zalaczniki: string[];
  zrodla: string;
  moje_ustalenia: string;
  projekt_koncowy: string;
  uwagi_korekty: string;
  miejsce_docelowe: string;
  status: string;
};

export default function UzupelnianiePage() {
  const [material, setMaterial] = useState<Material | null>(null);

  const [informacje, setInformacje] = useState("");
  const [zrodla, setZrodla] = useState("");
  const [ustalenia, setUstalenia] = useState("");
  const [projekt, setProjekt] = useState("");
  const [korekty, setKorekty] = useState("");

  const [miejsce, setMiejsce] = useState("");
  const [status, setStatus] = useState("Nowy");

  const [komunikat, setKomunikat] = useState("");

  useEffect(() => {
    async function pobierz() {
      const response = await fetch("/api/uzupelnianie");
      const data = await response.json();

      const pierwszy = data.materialy[0];

      setMaterial(pierwszy);

      setInformacje(
        pierwszy.informacje_od_ciebie || ""
      );

      setZrodla(
        pierwszy.zrodla || ""
      );

      setUstalenia(
        pierwszy.moje_ustalenia || ""
      );

      setProjekt(
        pierwszy.projekt_koncowy || ""
      );

      setKorekty(
        pierwszy.uwagi_korekty || ""
      );

      setMiejsce(
        pierwszy.miejsce_docelowe || ""
      );

      setStatus(
        pierwszy.status || "Nowy"
      );
    }

    pobierz();
  }, []);

  async function zapisz() {
    if (!material) return;

    await fetch("/api/uzupelnianie", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: material.id,
        informacje_od_ciebie: informacje,
        zrodla,
        moje_ustalenia: ustalenia,
        projekt_koncowy: projekt,
        uwagi_korekty: korekty,
        miejsce_docelowe: miejsce,
        status,
      }),
    });

    setKomunikat(
      "Materiał został zapisany."
    );
  }


  if (!material) {
    return (
      <main
        style={{
          padding: "50px",
          fontFamily: "Georgia, serif",
        }}
      >
        Ładowanie materiału...
      </main>
    );
  }


  return (
    <main
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "40px 20px",
        fontFamily: "Georgia, serif",
      }}
    >

      <h1
        style={{
          textAlign: "center",
          fontSize: "42px",
        }}
      >
        Warsztat opracowania materiału
      </h1>


      <section
        style={{
          background: "rgba(255,255,255,0.85)",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 5px 20px rgba(0,0,0,.15)",
        }}
      >

        <h2>
          {material.tytul}
        </h2>


        <Image
          src={material.plik}
          alt={material.tytul}
          width={900}
          height={600}
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "12px",
          }}
        />


        <hr />


        <h3>
          1. Informacje od Ciebie
        </h3>

        <textarea
          value={informacje}
          onChange={(e) =>
            setInformacje(e.target.value)
          }
          rows={8}
          style={{
            width: "100%",
            padding: "15px",
          }}
        />


        <h3>
          2. Załączniki
        </h3>

        <p>
          Aktualne załączniki:
        </p>

        <ul>
          {material.zalaczniki.map((plik) => (
            <li key={plik}>
              {plik}
            </li>
          ))}
        </ul>


        <h3>
          3. Źródła
        </h3>

        <textarea
          value={zrodla}
          onChange={(e) =>
            setZrodla(e.target.value)
          }
          rows={5}
          style={{
            width: "100%",
            padding: "15px",
          }}
        />


        <h3>
          4. Moje uzupełnienia i ustalenia
        </h3>

        <textarea
          value={ustalenia}
          onChange={(e) =>
            setUstalenia(e.target.value)
          }
          rows={8}
          placeholder="Tutaj zostaną wpisane ustalenia i uzupełnienia historyczne..."
          style={{
            width: "100%",
            padding: "15px",
          }}
        />


        <button
          style={{
            marginTop: "15px",
            padding: "14px 25px",
            background: "#5b4636",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
          onClick={() =>
            setUstalenia(
              "Przygotowano miejsce na opracowanie historyczne materiału."
            )
          }
        >
          🛠 Opracuj materiał
        </button>


        <h3>
          5. Projekt końcowy
        </h3>

        <textarea
          value={projekt}
          onChange={(e) =>
            setProjekt(e.target.value)
          }
          rows={12}
          placeholder="Gotowy tekst do publikacji po opracowaniu..."
          style={{
            width: "100%",
            padding: "15px",
          }}
        />


        <h3>
          6. Twoje korekty
        </h3>

        <textarea
          value={korekty}
          onChange={(e) =>
            setKorekty(e.target.value)
          }
          rows={5}
          style={{
            width: "100%",
            padding: "15px",
          }}
        />


        <h3>
          7. Miejsce docelowe
        </h3>

        <select
          value={miejsce}
          onChange={(e) =>
            setMiejsce(e.target.value)
          }
          style={{
            padding: "12px",
            fontSize: "16px",
          }}
        >
          <option>
            Skrzynia I
          </option>
          <option>
            Skrzynia II
          </option>
          <option>
            Skrzynia III
          </option>
          <option>
            Skrzynia IV
          </option>
          <option>
            Skrzynia V
          </option>
          <option>
            Galeria
          </option>
          <option>
            Dokumenty
          </option>
        </select>


        <h3>
          Status
        </h3>

        <select
          value={status}
          onChange={(e) =>
            setStatus(e.target.value)
          }
        >
          <option>
            Nowy
          </option>
          <option>
            W opracowaniu
          </option>
          <option>
            Gotowy do publikacji
          </option>
          <option>
            Opublikowany
          </option>
        </select>


        <br /><br />


        <button
          onClick={zapisz}
          style={{
            padding: "15px 30px",
            background: "#355834",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          💾 Zapisz materiał
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