import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const rejestr = path.join(
  process.cwd(),
  "content/materialy-robocze/rejestr.json"
);

const magazyn = path.join(
  process.cwd(),
  "public/materialy-robocze"
);


export async function POST(
  request: Request
) {
  try {

    const formData = await request.formData();

    const tytul =
      formData.get("tytul") as string;

    const rodzaj =
      formData.get("rodzaj") as string;

    const zrodlo =
      formData.get("zrodlo") as string;

    const przekazal =
      formData.get("przekazal") as string;

    const opis =
      formData.get("opis") as string;

    const plik =
      formData.get("plik") as File;


    if (!plik) {
      return NextResponse.json(
        {
          error: "Brak pliku"
        },
        {
          status: 400
        }
      );
    }


    let folder = "dokumenty";

    if (rodzaj === "Zdjęcie") {
      folder = "zdjecia";
    }

    if (rodzaj === "Skan dokumentu") {
      folder = "skany";
    }


    const folderDocelowy =
      path.join(
        magazyn,
        folder
      );


    if (!fs.existsSync(folderDocelowy)) {
      fs.mkdirSync(
        folderDocelowy,
        {
          recursive: true
        }
      );
    }


    const bytes =
      await plik.arrayBuffer();

    const buffer =
      Buffer.from(bytes);


    const nazwa =
      Date.now() +
      "-" +
      plik.name;


    const sciezka =
      path.join(
        folderDocelowy,
        nazwa
      );


    fs.writeFileSync(
      sciezka,
      buffer
    );


    const dane = JSON.parse(
      fs.readFileSync(
        rejestr,
        "utf-8"
      )
    );


    const nowyId =
      dane.materialy.length > 0
        ? Math.max(
            ...dane.materialy.map(
              (m: any) => m.id
            )
          ) + 1
        : 1;


    dane.materialy.push({

      id: nowyId,

      tytul,

      rodzaj,

      plik:
        `/materialy-robocze/${folder}/${nazwa}`,

      zrodlo,

      przekazal,

      opis,

      status:
        "Nowy",

      data_przyjecia:
        new Date().toISOString()

    });


    fs.writeFileSync(
      rejestr,
      JSON.stringify(
        dane,
        null,
        2
      ),
      "utf-8"
    );


    return NextResponse.json({
      success: true,
      id: nowyId
    });


  } catch (error) {

    return NextResponse.json(
      {
        error:
          "Błąd zapisu materiału"
      },
      {
        status: 500
      }
    );

  }
}