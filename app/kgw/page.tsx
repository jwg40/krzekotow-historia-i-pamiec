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
            Kronika zdjęć, wydarzeń i wspomnień mieszkańców Krzekotowa.
          </p>

        </section>



        <section className="mt-10 grid md:grid-cols-3 gap-8">


          {zdjecia.map((zdjecie, index) => (

            <article
              key={index}
              className="bg-white rounded-2xl shadow overflow-hidden"
            >

              <img
                src={zdjecie.src}
                alt={zdjecie.tytul}
                className="w-full h-64 object-cover"
              />


              <div className="p-6">

                <div className="text-sm text-amber-600 font-bold">
                  {zdjecie.rok}
                </div>

                <h2 className="text-xl font-bold mt-2">
                  {zdjecie.tytul}
                </h2>

                <p className="mt-3 text-stone-600">
                  {zdjecie.opis}
                </p>

              </div>

            </article>

          ))}


        </section>


      </div>

    </main>

  );
}