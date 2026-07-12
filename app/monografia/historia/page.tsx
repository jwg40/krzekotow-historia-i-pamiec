export default function Historia() {
  return (
    <main className="min-h-screen bg-amber-50 p-10">

      <h1 className="text-4xl font-bold text-stone-800 mb-6">
        Historia Krzekotowa
      </h1>

      <p className="text-lg text-stone-700 mb-8">
        W tym miejscu będzie przedstawiona historia Krzekotowa.
        Od najdawniejszych dziejów, przez kolejne okresy rozwoju,
        aż po czasy współczesne.
      </p>

      <div className="flex gap-4">

        <a
          href="/"
          className="bg-stone-800 text-white px-6 py-3 rounded-lg"
        >
          ← Strona główna
        </a>

        <a
          href="/monografia"
          className="bg-amber-700 text-white px-6 py-3 rounded-lg"
        >
          ← Monografia
        </a>

      </div>

    </main>
  );
}