import Footer from "../Footer";

export default function Historia() {
  return (
    <>
      <main className="min-h-screen bg-stone-100 py-12">
        <div className="mx-auto max-w-5xl px-6">

          <h1 className="mb-8 text-center text-4xl font-bold text-stone-800">
            Historia Krzekotowa
          </h1>

          <p className="mb-10 text-center text-lg text-stone-600">
            Miejsce, ludzie i wydarzenia, które tworzyły historię Krzekotowa.
            Ta część archiwum będzie stopniowo uzupełniana na podstawie dokumentów,
            fotografii i wspomnień mieszkańców.
          </p>


          <section className="mb-10 rounded-xl bg-white p-8 shadow">
            <h2 className="mb-4 text-2xl font-bold text-stone-800">
              Najdawniejsze dzieje
            </h2>

            <p className="text-stone-700">
              Początki Krzekotowa, pochodzenie nazwy miejscowości oraz najstarsze
              wzmianki historyczne.
            </p>
          </section>


          <section className="mb-10 rounded-xl bg-white p-8 shadow">
            <h2 className="mb-4 text-2xl font-bold text-stone-800">
              Krzekotów przed 1945 rokiem
            </h2>

            <p className="text-stone-700">
              Historia dawnej miejscowości, jej mieszkańców, zabudowy oraz życia
              codziennego przed zakończeniem II wojny światowej.
            </p>
          </section>


          <section className="mb-10 rounded-xl bg-white p-8 shadow">
            <h2 className="mb-4 text-2xl font-bold text-stone-800">
              Rok 1945 – czas przemian
            </h2>

            <p className="text-stone-700">
              Okres końca wojny, zmian administracyjnych oraz przybycia nowych
              mieszkańców.
            </p>
          </section>


          <section className="mb-10 rounded-xl bg-white p-8 shadow">
            <h2 className="mb-4 text-2xl font-bold text-stone-800">
              Krzekotów po wojnie
            </h2>

            <p className="text-stone-700">
              Odbudowa życia mieszkańców, rozwój miejscowości i wspomnienia
              kolejnych pokoleń.
            </p>
          </section>


          <section className="mb-10 rounded-xl bg-white p-8 shadow">
            <h2 className="mb-4 text-2xl font-bold text-stone-800">
              Krzekotów współczesny
            </h2>

            <p className="text-stone-700">
              Dzisiejsza miejscowość, jej mieszkańcy, tradycje i działania
              zachowujące lokalną pamięć.
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}