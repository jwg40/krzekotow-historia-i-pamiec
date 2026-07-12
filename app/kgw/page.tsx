import Footer from "../Footer";

const galerie = [
  {
    tytul: "Wydarzenia",
    opis: "Festyny, uroczystości, spotkania i wydarzenia organizowane przez KGW Żurawianki.",
    folder: "wydarzenia",
  },
  {
    tytul: "Tradycje i kuchnia",
    opis: "Potrawy, przepisy, rękodzieło i zwyczaje przekazywane mieszkańcom Krzekotowa.",
    folder: "tradycje",
  },
  {
    tytul: "Spotkania",
    opis: "Codzienna działalność, wspólna praca i chwile spędzone razem.",
    folder: "spotkania",
  },
];

export default function KGWPage() {
  return (
    <>
      <main className="min-h-screen bg-stone-50">

        <section className="bg-gradient-to-b from-green-100 to-white py-16">
          <div className="mx-auto max-w-5xl px-6 text-center">

            <h1 className="text-5xl font-bold text-stone-800">
              KGW Żurawianki
            </h1>

            <p className="mt-4 text-xl text-stone-600">
              Współczesna historia Krzekotowa tworzona przez mieszkańców
            </p>

          </div>
        </section>


        <section className="mx-auto max-w-6xl px-6 py-12">

          <div className="rounded-2xl bg-white p-8 shadow">

            <h2 className="text-3xl font-bold text-green-800">
              🌿 O KGW Żurawianki
            </h2>

            <p className="mt-4 leading-8 text-stone-700">
              Koło Gospodyń Wiejskich Żurawianki jest ważną częścią
              współczesnego życia Krzekotowa. Działalność koła pokazuje,
              że tradycja, współpraca i zaangażowanie mieszkańców nadal
              tworzą historię miejscowości.
            </p>

          </div>



          <h2 className="mt-12 text-center text-3xl font-bold text-stone-800">
            📷 Kronika zdjęć KGW
          </h2>


          <div className="mt-8 grid gap-8 md:grid-cols-3">

            {galerie.map((item) => (

              <div
                key={item.folder}
                className="rounded-2xl bg-white p-6 shadow"
              >

                <h3 className="text-2xl font-bold text-green-800">
                  {item.tytul}
                </h3>

                <p className="mt-3 text-stone-600">
                  {item.opis}
                </p>


                <div className="mt-6 flex h-40 items-center justify-center rounded-xl bg-stone-100">

                  📷
                  <span className="ml-2 text-stone-500">
                    miejsce na zdjęcia
                  </span>

                </div>

              </div>

            ))}

          </div>



          <section className="mt-12 rounded-2xl bg-amber-50 p-8">

            <h2 className="text-3xl font-bold text-stone-800">
              📅 Kronika działalności
            </h2>

            <p className="mt-4 text-stone-700">
              Tutaj będziemy dodawać wydarzenia chronologicznie:
              rok, data, opis oraz fotografie.
            </p>

          </section>


        </section>

      </main>

      <Footer />

    </>
  );
}