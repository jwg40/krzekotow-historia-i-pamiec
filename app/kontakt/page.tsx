import Header from "../Header";
import Footer from "../Footer";

export default function Kontakt() {
  return (
    <>
      <Header />

      <main className="bg-stone-50 min-h-screen">

        <section className="bg-gradient-to-b from-amber-100 to-white py-20">

          <div className="mx-auto max-w-5xl px-6 text-center">

            <h1 className="text-5xl font-bold text-stone-800">
              Kontakt
            </h1>

            <p className="mt-6 text-xl text-stone-600">
              Masz zdjęcia, dokumenty lub wspomnienia związane
              z Krzekotowem? Podziel się nimi z archiwum.
            </p>

          </div>

        </section>


        <section className="py-16">

          <div className="mx-auto max-w-5xl px-6">

            <div className="rounded-2xl bg-white p-8 shadow">

              <h2 className="text-3xl font-bold text-stone-800">
                Współtworzenie archiwum
              </h2>

              <p className="mt-4 text-lg text-stone-600 leading-relaxed">
                Cyfrowe Archiwum Krzekotowa powstaje dzięki
                zachowanym fotografiom, dokumentom oraz
                wspomnieniom mieszkańców i ich rodzin.
              </p>


              <div className="mt-8 rounded-xl bg-stone-100 p-6">

                <h3 className="text-xl font-bold text-stone-800">
                  Kontakt
                </h3>

                <p className="mt-3 text-stone-600">
                  W tym miejscu zostaną dodane dane kontaktowe
                  oraz informacje dla osób chcących przekazać
                  materiały historyczne.
                </p>

              </div>

            </div>

          </div>

        </section>


      </main>

      <Footer />

    </>
  );
}