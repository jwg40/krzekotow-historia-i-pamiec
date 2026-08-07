import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const plik = path.join(
  process.cwd(),
  "content/materialy-robocze/materialy.json"
);


export async function GET() {
  const dane = fs.readFileSync(
    plik,
    "utf-8"
  );

  return NextResponse.json(
    JSON.parse(dane)
  );
}


export async function POST(
  request: Request
) {
  const aktualizacja = await request.json();

  const dane = JSON.parse(
    fs.readFileSync(
      plik,
      "utf-8"
    )
  );


  const index = dane.materialy.findIndex(
    (material: any) =>
      material.id === aktualizacja.id
  );


  if (index === -1) {
    return NextResponse.json(
      {
        error:
          "Nie znaleziono materiału"
      },
      {
        status: 404
      }
    );
  }


  dane.materialy[index] = {
    ...dane.materialy[index],

    informacje_od_ciebie:
      aktualizacja.informacje_od_ciebie,

    zrodla:
      aktualizacja.zrodla,

    moje_ustalenia:
      aktualizacja.moje_ustalenia,

    projekt_koncowy:
      aktualizacja.projekt_koncowy,

    uwagi_korekty:
      aktualizacja.uwagi_korekty,

    miejsce_docelowe:
      aktualizacja.miejsce_docelowe,

    status:
      aktualizacja.status
  };


  fs.writeFileSync(
    plik,
    JSON.stringify(
      dane,
      null,
      2
    ),
    "utf-8"
  );


  return NextResponse.json({
    success: true
  });
}