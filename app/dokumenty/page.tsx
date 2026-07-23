export default function DokumentyPage() {
  const dokumenty = [
    {
      tytul: "Pierwsza wzmianka o Crecotowo",
      rok: "1263",
      opis: "Najstarszy znany dokument wspominający miejscowość.",
    },
    {
      tytul: "Mapy katastralne",
      rok: "XIX w.",
      opis: "Historyczne mapy przedstawiające układ folwarku Groß Vorwerk.",
    },
    {
      tytul: "Księgi adresowe",
      rok: "1900–1945",
      opis: "Spisy mieszkańców i właścicieli gospodarstw.",
    },
    {
      tytul: "Dokumenty powojenne",
      rok: "1945–1950",
      opis: "Pierwsze polskie dokumenty dotyczące Krzekotowa.",
    },
    {
      tytul: "Fotografie z opisami",
      rok: "XX wiek",
      opis: "Zdjęcia wraz z informacjami o osobach i miejscach.",
    },
    {
      tytul: "Materiały współczesne",
      rok: "XXI w.",
      opis: "Dokumentacja działalności mieszkańców i organizacji.",
    },
  ];

  return (
    <main className="min-h-screen bg-amber-50">

      <section className="bg-green-900 py-20 text-center">
        <h1 className="text-5xl font-bold text-white">
          Dokumenty
        </h1>

        <p className="mt-5 text-xl text-amber-100">
          Archiwum dokumentów dotyczących Krzekotowa
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-8 md:grid-cols-2">

          {dokumenty.map((dokument, index) => (

            <div
              key={index}
              className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
            >

              <div className="mb-5 text-5xl">
                📄
              </div>

              <div className="inline-block rounded-full bg-green-900 px-4 py-1 text-sm font-bold text-white">
                {dokument.rok}
              </div>

              <h2 className="mt-5 text-2xl font-bold text-green-900">
                {dokument.tytul}
              </h2>

              <p className="mt-4 leading-7 text-stone-700">
                {dokument.opis}
              </p>

              <button className="mt-8 rounded-xl bg-green-900 px-6 py-3 font-semibold text-white transition hover:bg-green-800">
                Otwórz dokument
              </button>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}