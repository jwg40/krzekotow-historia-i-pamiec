import { zdjecia } from "./zdjecia";

export default function GaleriaKGW() {
  return (
    <main className="bg-stone-50 min-h-screen py-12">

      <div className="mx-auto max-w-6xl px-6">

        <section className="bg-white rounded-2xl shadow-lg p-8 text-center">

          <img
            src="/images/kgw/logo/logo-zurawianki.jpg"
            alt="Logo KGW Żurawianki"
            className="mx-auto w-48 mb-6"
          />

          <h1 className="text-4xl font-bold text-stone-800">
            Galeria KGW Żurawianki
          </h1>

          <p className="mt-4 text-stone-600">
            Zdjęcia, wspomnienia i historia działalności Koła Gospodyń Wiejskich.
          </p>

        </section>


        <section className="mt-10 grid md:grid-cols-4 gap-5">


          <a
            href="/kgw/galeria/archiwalne"
            className="bg-white rounded-2xl shadow p-5 text-center hover:shadow-xl transition"
          >
            <h2 className="text-lg font-bold text-stone-800">
              📷 Archiwalne fotografie
            </h2>

            <p className="mt-2 text-sm text-stone-600">
              Stare zdjęcia i wspomnienia mieszkańców.
            </p>
          </a>



          <a
            href="/kgw/galeria/wydarzenia"
            className="bg-white rounded-2xl shadow p-5 text-center hover:shadow-xl transition"
          >
            <h2 className="text-lg font-bold text-stone-800">
              🎉 Wydarzenia
            </h2>

            <p className="mt-2 text-sm text-stone-600">
              Festyny, uroczystości i imprezy.
            </p>
          </a>



          <a
            href="/kgw/galeria/spotkania"
            className="bg-white rounded-2xl shadow p-5 text-center hover:shadow-xl transition"
          >
            <h2 className="text-lg font-bold text-stone-800">
              🤝 Spotkania
            </h2>

            <p className="mt-2 text-sm text-stone-600">
              Wspólna działalność i życie koła.
            </p>
          </a>



          <a
            href="/kgw/galeria/tradycje"
            className="bg-white rounded-2xl shadow p-5 text-center hover:shadow-xl transition"
          >
            <h2 className="text-lg font-bold text-stone-800">
              🍞 Tradycje
            </h2>

            <p className="mt-2 text-sm text-stone-600">
              Kuchnia, rękodzieło i zwyczaje.
            </p>
          </a>


        </section>



        <section className="mt-10 grid md:grid-cols-3 gap-6">

          {zdjecia.map((zdjecie) => (

            <div
              key={zdjecie.id}
              className="bg-white rounded-2xl shadow overflow-hidden"
            >

              {zdjecie.plik && (
                <img
                  src={zdjecie.plik}
                  alt={zdjecie.tytul}
                  className="w-full h-64 object-cover"
                />
              )}

              <div className="p-5">

                <h2 className="text-xl font-bold text-stone-800">
                  {zdjecie.tytul}
                </h2>


                <p className="mt-2 text-sm text-amber-700">
                  {zdjecie.rok}
                </p>


                <p className="mt-2 text-stone-600">
                  {zdjecie.opis}
                </p>

              </div>

            </div>

          ))}

        </section>


      </div>

    </main>
  );
}