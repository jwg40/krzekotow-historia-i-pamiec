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
              Najstarsze dzieje Krzekotowa związane są z historią osadnictwa
              na tych terenach oraz przemianami administracyjnymi i
              gospodarczymi, które zachodziły na przestrzeni wieków.

              <br /><br />

              Obraz dawnej miejscowości możemy dziś odtwarzać przede wszystkim
              na podstawie zachowanych map, dokumentów oraz śladów widocznych
              w terenie.

              <br /><br />

              Najstarsze materiały kartograficzne będą stopniowo prezentowane
              w tej części archiwum.
            </p>

          </section>




          <section className="mb-10 rounded-xl bg-white p-8 shadow">

            <h2 className="mb-4 text-2xl font-bold text-stone-800">
              Krzekotów przed 1945 rokiem
            </h2>

            <p className="text-stone-700 leading-relaxed">
              Przed 1945 rokiem Krzekotów był miejscowością z własną zabudową,
              gospodarstwami oraz społecznością mieszkańców.

              <br /><br />

              Zachowane fotografie z okresu przedwojennego i wojennego
              przedstawiają fragmenty dawnej miejscowości. Szczególną wartość
              mają zdjęcia starej bramy oraz historycznego słupka z
              zachowanymi znakami i inicjałami.

              <br /><br />

              Są to jedne z nielicznych zachowanych materialnych śladów
              dawnego Krzekotowa.
            </p>

          </section>




          <section className="mb-10 rounded-xl bg-white p-8 shadow">

            <h2 className="mb-4 text-2xl font-bold text-stone-800">
              II wojna światowa i rok 1945
            </h2>

            <p className="text-stone-700 leading-relaxed">
              Okres II wojny światowej oraz rok 1945 były czasem wielkich
              zmian dla Krzekotowa i całego regionu.

              <br /><br />

              Zakończenie wojny przyniosło zmiany polityczne,
              administracyjne oraz społeczne. Dawna społeczność miejscowości
              ustąpiła miejsca nowemu etapowi historii.

              <br /><br />

              Zachowane mapy związane z działaniami wojennymi pomagają
              odtworzyć wydarzenia tego okresu.
            </p>

          </section>




          <section className="mb-10 rounded-xl bg-white p-8 shadow">

            <h2 className="mb-4 text-2xl font-bold text-stone-800">
              Krzekotów po wojnie
            </h2>

            <p className="text-stone-700 leading-relaxed">
              Po 1945 roku rozpoczął się nowy rozdział historii miejscowości.

              <br /><br />

              Przybyli nowi mieszkańcy, którzy tworzyli swoją społeczność,
              odbudowywali życie codzienne i rozwijali miejscowość.

              <br /><br />

              Historia powojenna Krzekotowa to przede wszystkim historie ludzi,
              rodzin, pracy oraz wspólnego życia mieszkańców.
            </p>

          </section>




          <section className="mb-10 rounded-xl bg-white p-8 shadow">

            <h2 className="mb-4 text-2xl font-bold text-stone-800">
              Krzekotów współczesny
            </h2>

            <p className="text-stone-700 leading-relaxed">
              Dzisiejszy Krzekotów łączy pamięć o przeszłości
              z codziennym życiem mieszkańców.

              <br /><br />

              Współczesne fotografie, wydarzenia lokalne oraz działania
              mieszkańców pokazują, że historia miejscowości nadal trwa.

              <br /><br />

              Cyfrowe Archiwum Krzekotowa ma zachować tę pamięć dla obecnych
              i przyszłych pokoleń.
            </p>

          </section>


        </div>

      </main>

      <Footer />

    </>
  );
}