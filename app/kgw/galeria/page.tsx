import { zdjeciaKGW } from "./zdjecia";

export default function GaleriaKGW() {
  return (
    <main className="bg-stone-50 min-h-screen">

      <section className="bg-[#4B5D2A] text-white py-12">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h1 className="text-4xl font-bold">
            Galeria KGW Żurawianki
          </h1>

          <p className="mt-4 text-xl text-[#F2C14E]">
            Fotografie współczesnego Krzekotowa
          </p>

        </div>
      </section>


      <section className="max-w-5xl mx-auto px-6 py-12">

        {zdjeciaKGW.map((galeria, index) => (

          <div
            key={index}
            className="bg-white rounded-2xl shadow p-8 mb-8"
          >

            <h2 className="text-3xl font-bold">
              {galeria.kategoria}
            </h2>

            <p className="mt-3 text-stone-700">
              {galeria.opis}
            </p>


            <div className="grid md:grid-cols-3 gap-5 mt-6">

              {galeria.zdjecia.map((zdjecie, i) => (

                <img
                  key={i}
                  src={zdjecie}
                  alt={galeria.kategoria}
                  className="rounded-xl shadow w-full h-56 object-cover"
                />

              ))}

            </div>


          </div>

        ))}


      </section>


    </main>
  );
}