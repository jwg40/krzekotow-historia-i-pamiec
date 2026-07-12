import Footer from "../../Footer";

const wydarzenia = [
  {
    rok: "2026",
    tytul: "Wydarzenia KGW Żurawianki",
    opis:
      "Miejsce na opis najważniejszych wydarzeń, spotkań i inicjatyw mieszkańców Krzekotowa.",
  },
  {
    rok: "2025",
    tytul: "Kronika działalności",
    opis:
      "Tutaj zostaną dodane wcześniejsze wydarzenia oraz fotografie udostępnione przez KGW Żurawianki.",
  },
];

export default function WydarzeniaKGW() {
  return (
    <>
      <main className="min-h-screen bg-stone-50 py-12">

        <div className="mx-auto max-w-5xl px-6">

          <h1 className="text-center text-5xl font-bold text-stone-800">
            📅 Wydarzenia KGW Żurawianki
          </h1>

          <p className="mt-4 text-center text-xl text-stone-600">
            Kronika współczesnego życia Krzekotowa
          </p>


          <div className="mt-12 space-y-8">

            {wydarzenia.map((item) => (

              <section
                key={item.rok}
                className="rounded-2xl bg-white p-8 shadow"
              >

                <div className="text-4xl font-bold text-green-800">
                  {item.rok}
                </div>

                <h2 className="mt-3 text-2xl font-bold text-stone-800">
                  {item.tytul}
                </h2>

                <p className="mt-4 leading-8 text-stone-700">
                  {item.opis}
                </p>


                <div className="mt-6 grid gap-4 md:grid-cols-3">

                  <div className="flex h-40 items-center justify-center rounded-xl bg-stone-100">
                    📷 Zdjęcie
                  </div>

                  <div className="flex h-40 items-center justify-center rounded-xl bg-stone-100">
                    📷 Zdjęcie
                  </div>

                  <div className="flex h-40 items-center justify-center rounded-xl bg-stone-100">
                    📷 Zdjęcie
                  </div>

                </div>

              </section>

            ))}

          </div>


          <div className="mt-12 text-center">

            <a
              href="/kgw"
              className="rounded-xl bg-green-800 px-6 py-3 text-white hover:bg-green-700"
            >
              ← Powrót do KGW Żurawianki
            </a>

          </div>


        </div>

      </main>

      <Footer />

    </>
  );
}