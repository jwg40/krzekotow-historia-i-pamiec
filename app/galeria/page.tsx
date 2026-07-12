export default function Galeria() {
  const sekcje = [
    {
      tytul: "Najstarszy Krzekotów – zachowane ślady",
      opis:
        "Najstarsze zachowane fotografie i dokumenty związane z dawnym Krzekotowem.",
      zdjecia: [
        {
          plik: "stara-brama-swietlica.jpg",
          opis:
            "Stara brama dawnego Krzekotowa. To samo miejsce widoczne przed wojną i współcześnie – świadek przemian miejscowości.",
        },
        {
          plik: "inicjaly-slup-1.jpg",
          opis:
            "Zachowany historyczny słupek z inicjałami – jeden z nielicznych materialnych śladów dawnego Krzekotowa.",
        },
        {
          plik: "inicjaly-slup-2.jpg",
          opis:
            "Szczegół historycznego słupka z zachowanymi znakami i napisami.",
        },
        {
          plik: "lista-1945.jpg",
          opis:
            "Dokument związany z mieszkańcami Krzekotowa z okresu powojennego.",
        },
      ],
    },

    {
      tytul: "Krzekotów – historia na mapach",
      opis:
        "Mapy pokazujące miejscowość w różnych okresach historycznych.",
      zdjecia: [
        {
          plik: "vmapa-natarcie-1945.jpg",
          opis:
            "Mapa działań wojennych w rejonie Krzekotowa w 1945 roku.",
        },
        {
          plik: "mapa-krzekotowa.jpg",
          opis:
            "Mapa przedstawiająca położenie i układ miejscowości.",
        },
        {
          plik: "mapa-dzis.jpg",
          opis:
            "Współczesna mapa Krzekotowa.",
        },
      ],
    },

    {
      tytul: "Krzekotów współczesny",
      opis:
        "Widoki miejscowości i obiekty zachowane do dziś.",
      zdjecia: [
        {
          plik: "krzekotow-wita.jpg",
          opis:
            "Tablica miejscowości Krzekotów – współczesny znak lokalnej tożsamości.",
        },
        {
          plik: "swietlica-nowa.jpg",
          opis:
            "Nowa świetlica wiejska – miejsce współczesnego życia mieszkańców.",
        },
        {
          plik: "stodola-dzis.jpg",
          opis:
            "Stodoła – współczesny widok miejsca związanego z historią miejscowości.",
        },
        {
          plik: "krzekotow-1.jpg",
          opis:
            "Krzekotów współcześnie.",
        },
      ],
    },

    {
      tytul: "Życie mieszkańców i wydarzenia",
      opis:
        "Miejsce na przyszłe fotografie uroczystości, spotkań i wydarzeń mieszkańców Krzekotowa.",
      zdjecia: [],
    },
  ];

  return (
    <main className="min-h-screen bg-stone-100 py-12">
      <div className="mx-auto max-w-6xl px-6">

        <h1 className="mb-4 text-center text-4xl font-bold text-stone-800">
          Galeria Krzekotowa
        </h1>

        <p className="mb-12 text-center text-stone-600">
          Fotografie dokumentujące historię, miejsca i życie mieszkańców Krzekotowa.
        </p>

        {sekcje.map((sekcja) => (
          <section key={sekcja.tytul} className="mb-14">

            <h2 className="mb-2 text-3xl font-bold text-stone-800">
              {sekcja.tytul}
            </h2>

            <p className="mb-6 text-stone-600">
              {sekcja.opis}
            </p>

            {sekcja.zdjecia.length > 0 ? (
              <div className="grid gap-8 md:grid-cols-3">

                {sekcja.zdjecia.map((zdjecie) => (
                  <div
                    key={zdjecie.plik}
                    className="overflow-hidden rounded-xl bg-white shadow"
                  >

                    <img
                      src={`/images/fotografie/${zdjecie.plik}`}
                      alt={zdjecie.opis}
                      className="h-64 w-full object-cover"
                    />

                    <p className="p-4 text-center text-stone-700">
                      {zdjecie.opis}
                    </p>

                  </div>
                ))}

              </div>
            ) : (
              <div className="rounded-xl bg-white p-8 text-center text-stone-500 shadow">
                Wkrótce pojawią się tutaj kolejne fotografie.
              </div>
            )}

          </section>
        ))}

      </div>
    </main>
  );
}