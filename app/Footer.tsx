export default function Footer() {
  return (
    <footer className="bg-stone-900 py-8 text-center text-stone-300">

      <div className="mx-auto max-w-5xl px-6">

        <a
          href="/"
          className="mb-4 inline-block text-amber-200 hover:text-white"
        >
          ← Wróć do strony głównej
        </a>

        <p className="mt-4">
          Cyfrowe Archiwum Krzekotowa
        </p>

        <p className="text-sm text-stone-400">
          Archiwum historii, fotografii, dokumentów i wspomnień mieszkańców.
        </p>

        <p className="mt-4 text-sm">
          © 2026
        </p>

      </div>

    </footer>
  );
}