import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";


export async function POST(
  request: Request
) {

  const dane = await request.json();


  const plik = path.join(
    process.cwd(),
    "content/materialy-robocze/rejestr.json"
  );


  const rejestr = JSON.parse(
    fs.readFileSync(
      plik,
      "utf-8"
    )
  );


  const indeks =
    rejestr.materialy.findIndex(
      (m: any) =>
        m.id === dane.id
    );


  if (indeks === -1) {
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


  rejestr.materialy[indeks] = {
    ...rejestr.materialy[indeks],
    moje_ustalenia:
      dane.moje_ustalenia,

    opracowanie:
      dane.opracowanie,

    projekt_koncowy:
      dane.projekt_koncowy,

    uwagi_korekty:
      dane.uwagi_korekty,

    status:
      dane.status
  };


  fs.writeFileSync(
    plik,
    JSON.stringify(
      rejestr,
      null,
      2
    ),
    "utf-8"
  );


  return NextResponse.json(
    {
      success: true
    }
  );
}