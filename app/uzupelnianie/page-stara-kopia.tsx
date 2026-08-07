"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Material = {
  id: number;
  tytul: string;
  plik: string;
  opis_poczatkowy: string;
  opracowanie: string;
  informacje_dodatkowe: string;
  co_trzeba_ustalic: string;
  zrodla: string;
  proponowane_miejsce: string;
  status: string;
};

const miejsca = [
  "Historia",
  "Skrzynia I",
  "Skrzynia II",
  "Skrzynia III",
  "Skrzynia IV",
  "Skrzynia V",
  "Galeria",
  "Mapy",
  "Dokumenty",
  "Mieszkańcy",
  "Wojna",
];

export default function UzupelnianiePage() {
  const [materialy, setMaterialy] = useState<Material[]>([]);
  const [ladowanie, setLadowanie] = useState(true);

  const [opracowanie, setOpracowanie] = useState("");
  const [informacjeDodatkowe, setInformacjeDodatkowe] = useState("");
  const [zrodla, setZrodla] = useState("");
  const [miejsce, setMiejsce] = useState("");
  const [status, setStatus] = useState("Nowy");

  const [komunikat, setKomunikat] = useState("");

  useEffect(() => {
    async function pobierzMaterialy() {
      try {
        const response = await fetch("/api/uzupelnianie");

        if (!response.ok) {
          throw new Error("Błąd pobierania");
        }

        const data = await response.json();

        setMaterialy(data.materialy);

        if (data.materialy.length > 0) {
          const material = data.materialy[0];

          setOpracowanie(material.opracowanie || "");
          setInformacjeDodatkowe(
            material.informacje_dodatkowe || ""
          );
          setZrodla(material.zrodla || "");
          setMiejsce(material.proponowane_miejsce || "");
          setStatus(material.status || "Nowy");
        }
      } catch {
        setKomunikat(
          "Nie udało się wczytać materiałów roboczych."
        );
      } finally {
        setLadowanie(false);
      }
    }

    pobierzMaterialy();
  }, []);

  async function zapisz(statusDoZapisu = status) {
    if (materialy.length === 0) {
      return;
    }

    const material = materialy[0];

    setKomunikat("Zapisywanie...");

    try {
      const response = await fetch("/api/uzupelnianie", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: material.id,
          opracowanie,
          informacje_dodatkowe: informacjeDodatkowe,
          zrodla,
          proponowane_miejsce: miejsce,
          status: statusDoZapisu,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Błąd zapisu");
      }

      setStatus(statusDoZapisu);
      setKomunikat(
        statusDoZapisu === "Gotowy do publikacji"
          ? "Materiał został zatwierdzony i oznaczony jako gotowy do publikacji."
          : "Opracowanie zostało zapisane."
      );
    } catch {
      setKomunikat(
        "Nie udało się zapisać opracowania."
      );
    }
  }

  if (ladowanie) {
    return (
      <main
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "50px 20px",
          fontFamily: "Georgia, serif",
        }}
      >
        <h1>Warsztat uzupełniania archiwum</h1>
        <p>Wczytywanie materiałów...</p>
      </main>
    );
  }

  if (materialy.length === 0) {
    return (
      <main
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "50px 20px",
          fontFamily: "Georgia, serif",
        }}
      >
        <h1>Warsztat uzupełniania archiwum</h1>
        <p>Brak materiałów oczekujących na opracowanie.</p>
      </main>
    );
  }

  const material = materialy[0];

  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "40px 20px 70px",
        fontFamily: "Georgia, serif",
      }}
    >
      <header
        style={{
          textAlign: "center",
          marginBottom: "45px",
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            marginBottom: "15px",
          }}
        >
          Warsztat uzupełniania archiwum
        </h1>

        <p
          style={{
            fontSize: "19px",
            lineHeight: 1.6,
          }}
        >
          Miejsce roboczego opracowania materiałów przed przekazaniem
          ich do właściwych działów Cyfrowego Archiwum Krzekotowa.
        </p>
      </header>

      <section
        style={{
          background: "rgba(255,255,255,0.88)",
          borderRadius: "16px",
          padding: "30px",
          boxShadow: "0 5px 20px rgba(0,0,0,0.15)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
            flexWrap: "wrap",
            marginBottom: "25px",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "14px",
                textTransform: "uppercase",
                letterSpacing: "1px",
                opacity: 0.7,
              }}
            >
              Materiał roboczy #{material.id}
            </div>

            <h2
              style={{
                fontSize: "32px",
                margin: "8px 0 0",
              }}
            >
              {material.tytul}
            </h2>
          </div>

          <div
            style={{
              padding: "10px 16px",
              borderRadius: "20px",
              background:
                status === "Gotowy do publikacji"
                  ? "#dcebd8"
                  : "#eee4c9",
              fontWeight: "bold",
            }}
          >
            {status === "Nowy" && "🟡 "}
            {status === "W opracowaniu" && "🟠 "}
            {status === "Gotowy do publikacji" && "🟢 "}
            {status}
          </div>
        </div>

        <div
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
            style={{
              width: "100%",
              maxWidth: "1000px",
              height: "auto",
              borderRadius: "12px",
            }}
          />
        </div>

        <section style={{ marginBottom: "30px" }}>
          <h3>Co już wiemy</h3>

          <p
            style={{
              lineHeight: 1.7,
              fontSize: "17px",
            }}
          >
            {material.opis_poczatkowy}
          </p>
        </section>

        <section style={{ marginBottom: "30px" }}>
          <h3>Nasze opracowanie</h3>

          <textarea
            value={opracowanie}
            onChange={(e) => setOpracowanie(e.target.value)}
            onFocus={() => {
              if (status === "Nowy") {
                setStatus("W opracowaniu");
              }
            }}
            placeholder="Wpisz tutaj pełne opracowanie historyczne materiału..."
            rows={8}
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "8px",
              border: "1px solid #aaa",
              fontFamily: "Georgia, serif",
              fontSize: "16px",
              lineHeight: 1.6,
              boxSizing: "border-box",
            }}
          />
        </section>

        <section style={{ marginBottom: "30px" }}>
          <h3>Informacje dodatkowe</h3>

          <textarea
            value={informacjeDodatkowe}
            onChange={(e) =>
              setInformacjeDodatkowe(e.target.value)
            }
            placeholder="Dodatkowe informacje, wspomnienia, hipotezy, informacje od mieszkańców..."
            rows={7}
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "8px",
              border: "1px solid #aaa",
              fontFamily: "Georgia, serif",
              fontSize: "16px",
              lineHeight: 1.6,
              boxSizing: "border-box",
            }}
          />
        </section>

        <section style={{ marginBottom: "30px" }}>
          <h3>Co jeszcze trzeba ustalić</h3>

          <div
            style={{
              padding: "18px",
              background: "rgba(230,220,190,0.45)",
              borderRadius: "10px",
              lineHeight: 1.6,
            }}
          >
            {material.co_trzeba_ustalic}
          </div>
        </section>

        <section style={{ marginBottom: "30px" }}>
          <h3>Źródła</h3>

          <textarea
            value={zrodla}
            onChange={(e) => setZrodla(e.target.value)}
            placeholder="Wpisz źródła: monografia, dokumenty, zbiory prywatne, rozmowy, archiwa..."
            rows={5}
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "8px",
              border: "1px solid #aaa",
              fontFamily: "Georgia, serif",
              fontSize: "16px",
              lineHeight: 1.6,
              boxSizing: "border-box",
            }}
          />
        </section>

        <section style={{ marginBottom: "35px" }}>
          <h3>Gdzie ma trafić gotowy materiał?</h3>

          <p
            style={{
              marginBottom: "15px",
              lineHeight: 1.5,
            }}
          >
            Wybierz konkretny dział. Materiał nie zostanie automatycznie
            opublikowany — wybór określa jego docelowe miejsce.
          </p>

          <select
            value={miejsce}
            onChange={(e) => setMiejsce(e.target.value)}
            style={{
              width: "100%",
              maxWidth: "500px",
              padding: "13px",
              borderRadius: "8px",
              border: "1px solid #888",
              fontFamily: "Georgia, serif",
              fontSize: "16px",
            }}
          >
            <option value="">Wybierz dział docelowy</option>

            {miejsca.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </section>

        <section
          style={{
            paddingTop: "25px",
            borderTop: "1px solid rgba(0,0,0,0.15)",
          }}
        >
          <h3>Status opracowania</h3>

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #888",
              fontFamily: "Georgia, serif",
              fontSize: "16px",
            }}
          >
            <option value="Nowy">Nowy</option>
            <option value="W opracowaniu">W opracowaniu</option>
            <option value="Gotowy do publikacji">
              Gotowy do publikacji
            </option>
          </select>
        </section>

        <div
          style={{
            marginTop: "35px",
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() => zapisz(status)}
            style={{
              padding: "14px 24px",
              border: "none",
              borderRadius: "9px",
              background: "#5b4636",
              color: "white",
              cursor: "pointer",
              fontFamily: "Georgia, serif",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            💾 Zapisz opracowanie
          </button>

          <button
            onClick={() => zapisz("Gotowy do publikacji")}
            disabled={!miejsce}
            style={{
              padding: "14px 24px",
              border: "none",
              borderRadius: "9px",
              background: miejsce ? "#355834" : "#999",
              color: "white",
              cursor: miejsce ? "pointer" : "not-allowed",
              fontFamily: "Georgia, serif",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            ✅ Zatwierdź i przygotuj do publikacji
          </button>
        </div>

        {komunikat && (
          <p
            style={{
              marginTop: "20px",
              padding: "15px",
              borderRadius: "8px",
              background: "rgba(220,235,216,0.8)",
              lineHeight: 1.5,
            }}
          >
            {komunikat}
          </p>
        )}
      </section>
    </main>
  );
}