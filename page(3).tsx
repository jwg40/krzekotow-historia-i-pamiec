import Link from "next/link";

export default function HistoriaPage() {
  const chapters = [
    { title: "XIII wiek", href: "/historia/xiii-wiek" },
    { title: "Dawne mapy", href: "/historia/dawne-mapy" },
    { title: "1945", href: "/historia/1945" },
    { title: "Nowi mieszkańcy", href: "/historia/nowi-mieszkancy" },
    { title: "Współczesność", href: "/historia/wspolczesnosc" },
  ];

  return (
    <main className="relative overflow-hidden bg-amber-50">
      <div
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/stara-mapa.jpg')" }}
      />
      <section className="relative max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold text-amber-900 text-center">
          Historia Krzekotowa
        </h1>
        <p className="mt-6 text-center text-lg text-stone-700 max-w-3xl mx-auto">
          Otwórz kolejne skrzynie czasu i poznaj historię miejscowości.
        </p>

        <div className="mx-auto mt-12 max-w-md rounded-2xl border-4 border-amber-900 bg-gradient-to-b from-amber-700 to-amber-900 p-10 text-center text-amber-100 shadow-2xl">
          <div className="text-3xl">🧰</div>
          <h2 className="mt-3 text-2xl font-bold">Skrzynia Archiwum</h2>
          <p className="mt-2 text-sm">
            Ta skrzynia buduje klimat i nie jest klikalna.
          </p>
        </div>

        <div className="mt-16 h-1 w-full bg-amber-700 rounded" />

        <div className="mt-8 grid gap-6 md:grid-cols-5">
          {chapters.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="rounded-xl border-2 border-amber-900 bg-amber-200 p-5 text-center transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="text-3xl">📦</div>
              <div className="mt-3 font-bold text-amber-900">{c.title}</div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
