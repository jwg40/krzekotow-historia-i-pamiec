import Image from "next/image";
import ArchiwumMaterialy from "@/components/ArchiwumMaterialy";
import archiwum from "@/content/archiwum/archiwum.json";

export default function ArchiwumPage() {
  return (
    <main
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "40px 20px",
      }}
    >
      <header
        style={{
          textAlign: "center",
          marginBottom: "50px",
        }}
      >
        <h1
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "42px",
          }}
        >
          Cyfrowe Archiwum Krzekotowa
        </h1>

        <p
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "20px",
          }}
        >
          Zbiór dokumentów, fotografii, map i wspomnień mieszkańców.
        </p>
      </header>


      <ArchiwumMaterialy
        materialy={archiwum.materialy}
      />

    </main>
  );
}