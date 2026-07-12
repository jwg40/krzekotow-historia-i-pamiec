import Header from "../Header";
import Footer from "../Footer";

export default function Historia() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-stone-100 py-12">

        <div className="mx-auto max-w-5xl px-6">

          <h1 className="mb-8 text-center text-4xl font-bold text-stone-800">
            Historia Krzekotowa
          </h1>

          <p className="mb-10 text-center text-lg text-stone-600">
            Miejsce, ludzie i wydarzenia, które tworzyły historię Krzekotowa.
            Ta część archiwum będzie rozwijana na podstawie dokumentów,
            map, fotografii oraz zachowanych wspomnień.
          </p>


          <section className="mb-10 rounded-xl bg-white p-8 shadow">

            <h2 className="mb-4 text-2xl font-bold text-stone-800">
              Najdawniejsze dzieje
            </h2>

            <p className="text-stone-700 leading-relaxed">
              Początki Krzekotowa, pochodzenie nazwy miejscowości
              oraz najstarsze wzmianki historyczne.
              Ta część zostanie uzupełniona na podstawie dostępnych źródeł.
            </p>

          </section>



          <section className="mb-10 rounded-xl bg-white p-8 shadow">

            <h2 className="mb-4 text-2xl font-bold text-stone-800">
              Krzekotów przed 1945 rokiem
            </h2>

            <p className="text-stone-700 leading-relaxed">
              Dawny Krzekotów, jego zabudowa, gospodarstwa,
              mieszkańcy oraz życie codzienne przed zakończeniem II wojny światowej.
            </p>

          </section>



          <section className="mb-10 rounded-xl bg-white p-8 shadow">

            <h2 className="mb-4 text-2xl font-bold text-stone-800">
              Rok 1945 – czas przemian
            </h2>

            <p className="text-stone-700 leading-relaxed">
              Koniec wojny, zmiany granic i administracji,
              opuszczenie dawnych mieszkańców oraz początek nowego rozdziału
              historii miejscowości.
            </p>

          </section>



          <section className="mb-10 rounded-xl bg-white p-8 shadow">

            <h2 className="mb-4 text-2xl font-bold text-stone-800">
              Krzekotów po wojnie
            </h2>

            <p className="text-stone-700 leading-relaxed">
              Odbudowa życia miejscowości, nowi mieszkańcy,
              rozwój gospodarstw oraz wydarzenia tworzące powojenną historię.
            </p>

          </section>



          <section className="mb-10 rounded-xl bg-white p-8 shadow">

            <h2 className="mb-4 text-2xl font-bold text-stone-800">
              Krzekotów współczesny
            </h2>

            <p className="text-stone-700 leading-relaxed">
              Dzisiejszy Krzekotów, jego mieszkańcy,
              tradycje i działania zachowujące pamięć o przeszłości.
            </p>

          </section>


        </div>

      </main>

      <Footer />

    </>
  );
}