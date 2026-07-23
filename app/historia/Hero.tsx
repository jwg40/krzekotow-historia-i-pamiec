import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-stone-800 text-white py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-4">
          Historia Krzekotowa
        </h1>

        <p className="text-xl text-stone-300 leading-relaxed">
          Cyfrowa monografia miejscowości Krzekotów
          od pierwszych wzmianek średniowiecznych
          do czasów współczesnych.
        </p>

        <div className="mt-8 flex gap-4 flex-wrap">
          <Link
            href="/"
            className="bg-amber-600 hover:bg-amber-700 px-6 py-3 rounded-lg font-semibold transition"
          >
            ← Powrót na stronę główną
          </Link>
        </div>
      </div>
    </section>
  );
}