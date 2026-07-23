export default function MieszkancyPage() {
  const osoby = [
    {
      nazwisko: "Pierwsi osadnicy",
      opis:
        "Rodziny, które przybyły do Krzekotowa po zakończeniu II wojny światowej i rozpoczęły budowę nowego życia.",
    },
    {
      nazwisko: "Najstarsi mieszkańcy",
      opis:
        "Osoby pamiętające pierwsze powojenne lata oraz rozwój miejscowości.",
    },
    {
      nazwisko: "Rolnicy",
      opis:
        "Ludzie, którzy przez dziesięciolecia tworzyli gospodarczy charakter Krzekotowa.",
    },
    {
      nazwisko: "Społecznicy",
      opis:
        "Mieszkańcy angażujący się w życie wsi, organizacje i wydarzenia lokalne.",
    },
    {
      nazwisko: "Młode pokolenie",
      opis:
        "Ci, którzy dziś kontynuują historię Krzekotowa i dbają o jego przyszłość.",
    },
    {
      nazwisko: "Wspomnienia",
      opis:
        "Relacje, fotografie i rodzinne historie przekazywane z pokolenia na pokolenie.",
    },
  ];

  return (
    <main className="min-h-screen bg-amber-50">

      <section className="bg-green-900 py-20 text-center">

        <h1 className="text-5xl font-bold text-white">
          Mieszkańcy Krzekotowa
        </h1>

        <p className="mt-4 text-xl text-amber-100">
          Ludzie, którzy tworzyli historię miejscowości
        </p>

      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">

        <div className="grid gap-8 md:grid-cols-2">

          {osoby.map((osoba, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-green-800 text-4xl text-white">
                👤
              </div>

              <h2 className="text-2xl font-bold text-green-900">
                {osoba.nazwisko}
              </h2>

              <p className="mt-4 leading-7 text-stone-700">
                {osoba.opis}
              </p>
            </div>
          ))}

        </div>

      </section>

    </main>
  );
}