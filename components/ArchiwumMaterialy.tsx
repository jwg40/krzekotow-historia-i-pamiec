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

            <h2>
              {material.tytul}
            </h2>

            <p>
              <strong>Kategoria:</strong> {material.kategoria}
            </p>

            <p>
              <strong>Okres:</strong> {material.okres}
            </p>

            <p>
              {material.opis}
            </p>

            <hr />

            <h3>
              Podziel się swoją wiedzą
            </h3>

            <p>
              Jeśli posiadasz dodatkowe informacje, wspomnienia,
              fotografie lub dokumenty związane z tym materiałem —
              podziel się nimi z nami. Pomóż uzupełnić historię
              Krzekotowa.
            </p>

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