"use client";

import Image from "next/image";
import { useState } from "react";

type Material = {
  id: number;
  tytul: string;
  kategoria: string;
  okres: string;
  opis: string;
  plik: string;
};

type Props = {
  materialy: Material[];
};

export default function ArchiwumMaterialy({ materialy }: Props) {
  const [otwarte, setOtwarte] = useState<Material | null>(null);
  const [formularz, setFormularz] = useState<number | null>(null);

  const [imie, setImie] = useState("");
  const [kontakt, setKontakt] = useState("");
  const [tresc, setTresc] = useState("");

  function wyslij(material: Material) {
    console.log("ZGŁOSZENIE ARCHIWUM", {
      material: material.tytul,
      imie,
      kontakt,
      tresc,
    });

    alert(
      "Dziękujemy. Informacja została przygotowana do przekazania do archiwum."
    );

    setImie("");
    setKontakt("");
    setTresc("");
  }

  return (
    <>
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px",
        }}
      >
        {materialy.map((material) => (
          <article
            key={material.id}
            style={{
              background: "rgba(255,255,255,0.75)",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
              fontFamily: "Georgia, serif",
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
                cursor: "pointer",
              }}
              onClick={() => setOtwarte(material)}
            />

            <h2>{material.tytul}</h2>

            <p>
              <strong>Kategoria:</strong> {material.kategoria}
            </p>

            <p>
              <strong>Okres:</strong> {material.okres}
            </p>

            <p>{material.opis}</p>

            <hr />

            <h3>Podziel się swoją wiedzą</h3>

            <p>
              Jeśli posiadasz informacje, wspomnienia, fotografie lub dokumenty
              związane z tym materiałem — pomóż nam uzupełnić historię
              Krzekotowa.
            </p>

            <button
              onClick={() =>
                setFormularz(
                  formularz === material.id ? null : material.id
                )
              }
              style={{
                padding: "10px 15px",
                cursor: "pointer",
                borderRadius: "8px",
                border: "none",
                background: "#5b4636",
                color: "white",
                fontFamily: "Georgia, serif",
              }}
            >
              Przekaż informację do archiwum
            </button>

            {formularz === material.id && (
              <div
                style={{
                  marginTop: "20px",
                  padding: "15px",
                  background: "rgba(240,230,210,0.8)",
                  borderRadius: "10px",
                }}
              >
                <h4>
                  Uzupełnij historię tego materiału
                </h4>

                <p>
                  Materiał:
                  <br />
                  <strong>{material.tytul}</strong>
                </p>

                <input
                  placeholder="Twoje imię (opcjonalnie)"
                  value={imie}
                  onChange={(e) => setImie(e.target.value)}
                  style={{ width: "100%", marginBottom: "10px" }}
                />

                <input
                  placeholder="Kontakt (opcjonalnie)"
                  value={kontakt}
                  onChange={(e) => setKontakt(e.target.value)}
                  style={{ width: "100%", marginBottom: "10px" }}
                />

                <textarea
                  placeholder="Twoja informacja, wspomnienie lub uzupełnienie historii..."
                  value={tresc}
                  onChange={(e) => setTresc(e.target.value)}
                  rows={6}
                  style={{ width: "100%", marginBottom: "10px" }}
                />

                <button
                  onClick={() => wyslij(material)}
                  style={{
                    padding: "10px 15px",
                    cursor: "pointer",
                    borderRadius: "8px",
                    border: "none",
                    background: "#355834",
                    color: "white",
                  }}
                >
                  Wyślij informację
                </button>
              </div>
            )}
          </article>
        ))}
      </section>

      {otwarte && (
        <div
          onClick={() => setOtwarte(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.85)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "30px",
          }}
        >
          <Image
            src={otwarte.plik}
            alt={otwarte.tytul}
            width={1400}
            height={1000}
            style={{
              maxWidth: "95vw",
              maxHeight: "90vh",
              width: "auto",
              height: "auto",
            }}
          />
        </div>
      )}
    </>
  );
}