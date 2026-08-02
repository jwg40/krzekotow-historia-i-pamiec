const fs = require("fs");
const path = require("path");
const { createCanvas } = require("canvas");

const folder = path.join(
  __dirname,
  "public",
  "images",
  "historia"
);

if (!fs.existsSync(folder)) {
  fs.mkdirSync(folder, { recursive: true });
}

function createImage(name, title, color) {
  const canvas = createCanvas(1200, 700);
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = color;
  ctx.fillRect(0, 0, 1200, 700);

  // klimat starego pergaminu
  ctx.fillStyle = "rgba(255,255,255,0.15)";
  for (let i = 0; i < 50; i++) {
    ctx.beginPath();
    ctx.arc(
      Math.random()*1200,
      Math.random()*700,
      Math.random()*80,
      0,
      Math.PI*2
    );
    ctx.fill();
  }

  ctx.fillStyle = "#4b2e14";
  ctx.font = "bold 60px serif";
  ctx.textAlign = "center";
  ctx.fillText(title, 600, 350);

  fs.writeFileSync(
    path.join(folder, name),
    canvas.toBuffer("image/png")
  );
}

createImage(
  "mapa-tlo.png",
  "Mapa Krzekotowa",
  "#d8c39a"
);

createImage(
  "skrzynia-glowna.png",
  "SKRZYNIA CZASU",
  "#8b5a2b"
);

createImage(
  "skrzynia-xiii-wiek.png",
  "XIII WIEK",
  "#b08b57"
);

createImage(
  "skrzynia-1945.png",
  "1945",
  "#9b7653"
);

createImage(
  "skrzynia-powojenna.png",
  "PO WOJNIE",
  "#aa8c65"
);

createImage(
  "skrzynia-wspolczesnosc.png",
  "WSPÓŁCZESNOŚĆ",
  "#987654"
);

createImage(
  "skrzynia-przyszlosc.png",
  "PRZYSZŁOŚĆ",
  "#806040"
);

console.log("Grafiki historii utworzone!");