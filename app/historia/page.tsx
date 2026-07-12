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
            map, fotografii oraz zachowanych wspomnień mieszkańców.
          </p>



          <section className="mb-10 rounded-xl bg-white p-8 shadow">

            <h2 className="mb-4 text-2xl font-bold text-stone-800">
              Najdawniejsze dzieje
            </h2>

            <p className="text-stone-700 leading-relaxed">
              Początki Krzekotowa związane są z historią osadnictwa
              na terenach, które przez wieki zmieniały swoją przynależność
              administracyjną i kulturową.

              <br /><br />

              Dawna miejscowość rozwijała się wokół gospodarstw,
              pól uprawnych oraz codziennego życia jej mieszkańców.
              Ślady dawnej zabudowy, zachowane dokumenty i mapy pozwalają
              stopniowo odtwarzać obraz Krzekotowa z minionych czasów.

              <br /><br />

              Szczegółowe informacje dotyczące początków miejscowości
              zostaną uzupełnione na podstawie dostępnych źródeł historycznych.
            </p>

          </section>



          <section className="mb-10 rounded-xl bg-white p-8 shadow">

            <h2 className="mb-4 text-2xl font-bold text-stone-800">
              Krzekotów przed 1945 rokiem
            </h2>

            <p className="text-stone-700 leading-relaxed">
              Przed 1945 rokiem Krzekotów był miejscowością o własnej
              strukturze zabudowy, gospodarstwach i społeczności mieszkańców.

              <br /><br />

              Zachowane ślady dawnego układu miejscowości, między innymi
              stara brama oraz historyczny słupek, są materialnym świadectwem
              wcześniejszego istnienia tego miejsca.

              <br /><br />

              Fotografie, mapy i dokumenty pozwalają zachować pamięć
              o dawnym wyglądzie miejscowości i jej mieszkańcach.
            </p>

          </section>



          <section className="mb-10 rounded-xl bg-white p-8 shadow">

            <h2 className="mb-4 text-2xl font-bold text-stone-800">
              Rok 1945 – czas przemian
            </h2>

            <p className="text-stone-700 leading-relaxed">
              Rok 1945 był jednym z najważniejszych momentów w historii
              Krzekotowa.

              <br /><br />

              Zakończenie II wojny światowej przyniosło ogromne zmiany:
              polityczne, administracyjne oraz społeczne.
              Dawny świat mieszkańców miejscowości został zastąpiony
              nowym okresem historii.
            </p>

          </section>



          <section className="mb-10 rounded-xl bg-white p-8 shadow">

            <h2 className="mb-4 text-2xl font-bold text-stone-800">
              Krzekotów po wojnie
            </h2>

            <p className="text-stone-700 leading-relaxed">
              Po wojnie rozpoczął się nowy etap życia miejscowości.
              Przybyli nowi mieszkańcy, którzy tworzyli kolejną społeczność
              i budowali swoją historię.

              <br /><br />

              Codzienna praca, rozwój gospodarstw, wydarzenia lokalne
              i życie rodzinne stały się częścią powojennego dziedzictwa
              Krzekotowa.
            </p>

          </section>



          <section className="mb-10 rounded-xl bg-white p-8 shadow">

            <h2 className="mb-4 text-2xl font-bold text-stone-800">
              Krzekotów współczesny
            </h2>

            <p className="text-stone-700 leading-relaxed">
              Dzisiejszy Krzekotów jest miejscem, w którym przeszłość
              spotyka się ze współczesnością.

              <br /><br />

              Zachowane dokumenty, fotografie oraz wspomnienia mieszkańców
              pozwalają chronić lokalną historię i przekazywać ją kolejnym
              pokoleniom.
            </p>

          </section>


        </div>

      </main>

      <Footer />

    </>
  );
}