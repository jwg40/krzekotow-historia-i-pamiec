export default function KalendariumPage() {
  const wydarzenia = [
    {
      rok: "1263",
      tytul: "Pierwsza wzmianka",
      opis: "W dokumencie pojawia się nazwa Crecotowo.",
    },
    {
      rok: "XIV–XV w.",
      tytul: "Rozwój osady",
      opis: "Krzekotów funkcjonuje jako niewielka osada rolnicza.",
    },
    {
      rok: "XVIII–XIX w.",
      tytul: "Groß Vorwerk",
      opis: "Powstaje duży folwark będący częścią okolicznych dóbr ziemskich.",
    },
    {
      rok: "1939",
      tytul: "II wojna światowa",
      opis: "Mieszkańcy zostają objęci wydarzeniami wojennymi.",
    },
    {
      rok: "1945",
      tytul: "Zmiana granic",
      opis: "Wieś przechodzi pod administrację polską i otrzymuje nazwę Krzekotów.",
    },
    {
      rok: "1945–1950",
      tytul: "Nowi mieszkańcy",
      opis: "Do wsi przybywają polscy osadnicy z różnych regionów kraju.",
    },
    {
      rok: "XXI wiek",
      tytul: "Cyfrowe Archiwum",
      opis: "Powstaje projekt dokumentujący historię Krzekotowa.",
    },
  ];

  return (
    <main className="min-h-screen bg-amber-50">

      <section className="bg-green-900 py-20 text-center">
        <h1 className="text-5xl font-bold text-white">
          Kalendarium Krzekotowa
        </h1>

        <p className="mt-5 text-xl text-amber-100">
          Najważniejsze wydarzenia w dziejach miejscowości
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">

        <div className="border-l-4 border-green-800">

          {wydarzenia.map((wpis, index) => (
            <div key={index} className="relative mb-12 ml-8">

              <div className="absolute -left-11 top-2 h-6 w-6 rounded-full border-4 border-green-800 bg-white"></div>

              <div className="rounded-2xl bg-white p-8 shadow">

                <span className="rounded-full bg-green-800 px-4 py-1 text-sm font-bold text-white">
                  {wpis.rok}
                </span>

                <h2 className="mt-4 text-2xl font-bold text-green-900">
                  {wpis.tytul}
                </h2>

                <p className="mt-4 leading-7 text-stone-700">
                  {wpis.opis}
                </p>

              </div>

            </div>
          ))}

        </div>

      </section>

    </main>
  );
}