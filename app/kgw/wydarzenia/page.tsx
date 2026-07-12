import { wydarzeniaKGW } from "./dane";

export default function WydarzeniaKGW() {
  return (
    <main className="bg-stone-50 min-h-screen">

      <section className="bg-[#4B5D2A] text-white py-12">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h1 className="text-4xl font-bold">
            Kronika KGW Żurawianki
          </h1>

          <p className="mt-4 text-xl text-[#F2C14E]">
            Wydarzenia, ludzie i wspólne chwile
          </p>

        </div>
      </section>


      <section className="max-w-5xl mx-auto px-6 py-12">

        {wydarzeniaKGW.map((wydarzenie, index) => (

          <article
            key={index}
            className="bg-white rounded-2xl shadow p-8 mb-8"
          >

            <h2 className="text-3xl font-bold text-stone-800">
              {wydarzenie.rok}
            </h2>

            <h3 className="text-2xl font-semibold mt-3">
              {wydarzenie.tytul}
            </h3>

            <p className="mt-4 text-stone-700">
              {wydarzenie.opis}
            </p>


            <div className="grid md:grid-cols-3 gap-5 mt-6">

              {wydarzenie.zdjecia.map((zdjecie, i) => (

                <img
                  key={i}
                  src={zdjecie}
                  alt={wydarzenie.tytul}
                  className="rounded-xl shadow"
                />

              ))}

            </div>


          </article>

        ))}


        <div className="bg-amber-50 rounded-2xl p-8">

          <h2 className="text-2xl font-bold">
            Źródło materiałów
          </h2>

          <p className="mt-4">
            Materiały zostały udostępnione za zgodą KGW
            Krzekotów Żurawianki i stanowią część
            Cyfrowego Archiwum Krzekotowa.
          </p>

        </div>


      </section>

    </main>
  );
}