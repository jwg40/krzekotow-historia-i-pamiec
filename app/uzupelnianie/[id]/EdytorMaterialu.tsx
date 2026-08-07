"use client";

import { useState } from "react";

type Props = {
  id: number;
  mojeUstalenia: string;
  opracowanie: string;
  projektKoncowy: string;
  uwagiKorekty: string;
  status: string;
};

export default function EdytorMaterialu({
  id,
  mojeUstalenia,
  opracowanie: poczatkoweOpracowanie,
  projektKoncowy: poczatkowyProjektKoncowy,
  uwagiKorekty: poczatkoweUwagiKorekty,
  status: poczatkowyStatus,
}: Props) {
  const [ustalenia, setUstalenia] =
    useState(mojeUstalenia);

  const [tekstOpracowania, setTekstOpracowania] =
    useState(poczatkoweOpracowanie);

  const [tekstProjektu, setTekstProjektu] =
    useState(poczatkowyProjektKoncowy);

  const [tekstUwagi, setTekstUwagi] =
    useState(poczatkoweUwagiKorekty);

  const [status, setStatus] =
    useState(poczatkowyStatus || "Nowy");

  const [komunikat, setKomunikat] =
    useState("");

  const [zapisuje, setZapisuje] =
    useState(false);

  async function zapiszRoboczo() {
    setZapisuje(true);
    setKomunikat("");

    try {
      const odpowiedz = await fetch(
        "/api/materialy-robocze/aktualizuj",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id,
            moje_ustalenia: ustalenia,
            opracowanie: tekstOpracowania,
            projekt_koncowy: tekstProjektu,
            uwagi_korekty: tekstUwagi,
            status,
          }),
        }
      );

      const wynik = await odpowiedz.json();

      if (!odpowiedz.ok) {
        throw new Error(
          wynik.error ||
            "Nie udało się zapisać materiału."
        );
      }

      setKomunikat(
        "✅ Materiał został zapisany."
      );
    } catch {
      setKomunikat(
        "❌ Nie udało się zapisać materiału."
      );
    } finally {
      setZapisuje(false);
    }
  }

  return (
    <section
      style={{
        marginTop: "35px",
      }}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.9)",
          padding: "28px",
          borderRadius: "16px",
          marginBottom: "25px",
        }}
      >
        <h2>
          🔎 Moje ustalenia
        </h2>

        <p>
          Tutaj wpisujemy wyniki poszukiwań,
          informacje z dokumentów, map, źródeł
          i rozmów.
        </p>

        <textarea
          value={ustalenia}
          onChange={(e) =>
            setUstalenia(e.target.value)
          }
          placeholder="Wyniki poszukiwań, dokumenty, mapy, informacje od mieszkańców, porównania..."
          style={{
            width: "100%",
            minHeight: "180px",
            padding: "15px",
            fontSize: "16px",
            fontFamily: "Georgia, serif",
            lineHeight: "1.6",
            borderRadius: "10px",
            border: "1px solid #999",
            boxSizing: "border-box",
          }}
        />
      </div>

      <div
        style={{
          background: "rgba(235,240,230,0.95)",
          padding: "28px",
          borderRadius: "16px",
          marginBottom: "25px",
        }}
      >
        <h2>
          📝 Opracowanie historyczne
        </h2>

        <p>
          Tutaj powstaje przygotowane opracowanie
          na podstawie materiału, informacji od Ciebie
          oraz dokonanych ustaleń.
        </p>

        <textarea
          value={tekstOpracowania}
          onChange={(e) =>
            setTekstOpracowania(e.target.value)
          }
          placeholder="Tutaj przygotujemy opracowanie historyczne..."
          style={{
            width: "100%",
            minHeight: "260px",
            padding: "15px",
            fontSize: "16px",
            fontFamily: "Georgia, serif",
            lineHeight: "1.6",
            borderRadius: "10px",
            border: "1px solid #777",
            boxSizing: "border-box",
          }}
        />
      </div>

      <div
        style={{
          background: "rgba(255,248,225,0.95)",
          padding: "28px",
          borderRadius: "16px",
          marginBottom: "25px",
        }}
      >
        <h2>
          📜 Projekt końcowy
        </h2>

        <p>
          To będzie gotowa wersja materiału
          przeznaczona do umieszczenia
          w odpowiednim module archiwum
          po Twojej akceptacji.
        </p>

        <textarea
          value={tekstProjektu}
          onChange={(e) =>
            setTekstProjektu(e.target.value)
          }
          placeholder="Gotowy projekt materiału do publikacji..."
          style={{
            width: "100%",
            minHeight: "300px",
            padding: "15px",
            fontSize: "16px",
            fontFamily: "Georgia, serif",
            lineHeight: "1.6",
            borderRadius: "10px",
            border: "1px solid #777",
            boxSizing: "border-box",
          }}
        />
      </div>

      <div
        style={{
          background: "rgba(245,245,245,0.95)",
          padding: "28px",
          borderRadius: "16px",
          marginBottom: "25px",
        }}
      >
        <h2>
          ✏️ Uwagi i korekty
        </h2>

        <p>
          Tutaj wpisujesz poprawki, uwagi lub
          informacje, które trzeba jeszcze zmienić
          przed zatwierdzeniem.
        </p>

        <textarea
          value={tekstUwagi}
          onChange={(e) =>
            setTekstUwagi(e.target.value)
          }
          placeholder="Uwagi, poprawki, dodatkowe informacje..."
          style={{
            width: "100%",
            minHeight: "160px",
            padding: "15px",
            fontSize: "16px",
            fontFamily: "Georgia, serif",
            lineHeight: "1.6",
            borderRadius: "10px",
            border: "1px solid #999",
            boxSizing: "border-box",
          }}
        />
      </div>

      <div
        style={{
          background: "rgba(255,255,255,0.95)",
          padding: "28px",
          borderRadius: "16px",
          marginBottom: "30px",
        }}
      >
        <h2>
          Status materiału
        </h2>

        <select
          value={status}
          onChange={(e) =>
            setStatus(e.target.value)
          }
          style={{
            padding: "12px",
            fontSize: "16px",
            borderRadius: "8px",
            minWidth: "260px",
          }}
        >
          <option value="Nowy">
            🟡 Nowy
          </option>

          <option value="W opracowaniu">
            🔵 W opracowaniu
          </option>

          <option value="Gotowy do akceptacji">
            🟠 Gotowy do akceptacji
          </option>

          <option value="Zatwierdzony">
            🟢 Zatwierdzony
          </option>
        </select>
      </div>

      <div
        style={{
          textAlign: "center",
          paddingBottom: "50px",
        }}
      >
        <button
          type="button"
          onClick={zapiszRoboczo}
          disabled={zapisuje}
          style={{
            padding: "16px 35px",
            fontSize: "18px",
            fontFamily: "Georgia, serif",
            borderRadius: "10px",
            border: "none",
            cursor: zapisuje
              ? "wait"
              : "pointer",
          }}
        >
          {zapisuje
            ? "⏳ Zapisywanie..."
            : "💾 Zapisz roboczo"}
        </button>

        {komunikat && (
          <p
            style={{
              marginTop: "18px",
              fontSize: "17px",
              fontWeight: "bold",
            }}
          >
            {komunikat}
          </p>
        )}
      </div>
    </section>
  );
}