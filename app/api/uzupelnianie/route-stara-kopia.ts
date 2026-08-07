import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";

const filePath = path.join(
  process.cwd(),
  "content",
  "materialy-robocze",
  "materialy.json"
);

export async function GET() {
  try {
    const file = await fs.readFile(filePath, "utf8");
    const data = JSON.parse(file);

    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Nie udało się odczytać materiałów roboczych." },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const file = await fs.readFile(filePath, "utf8");
    const data = JSON.parse(file);

    const index = data.materialy.findIndex(
      (material: { id: number }) => material.id === body.id
    );

    if (index === -1) {
      return NextResponse.json(
        { error: "Nie znaleziono materiału." },
        { status: 404 }
      );
    }

    data.materialy[index] = {
      ...data.materialy[index],
      opracowanie: body.opracowanie ?? "",
      informacje_dodatkowe: body.informacje_dodatkowe ?? "",
      zrodla: body.zrodla ?? "",
      proponowane_miejsce: body.proponowane_miejsce ?? "",
      status: body.status ?? "Nowy",
    };

    await fs.writeFile(
      filePath,
      JSON.stringify(data, null, 2),
      "utf8"
    );

    return NextResponse.json({
      success: true,
      material: data.materialy[index],
    });
  } catch {
    return NextResponse.json(
      { error: "Nie udało się zapisać opracowania." },
      { status: 500 }
    );
  }
}