import Image from "next/image";

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
  return (
    <section>
      {materialy.map((material) => (
        <article key={material.id}>

          <h2>
            {material.tytul}
          </h2>

          <p>
            {material.okres} • {material.kategoria}
          </p>

          <Image
            src={material.plik}
            alt={material.tytul}
            width={800}
            height={600}
          />

          <p>
            {material.opis}
          </p>

        </article>
      ))}
    </section>
  );
}