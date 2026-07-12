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
            Archiwum będzie rozwijane na podstawie dokumentów,
            map, fotografii i wspomnień mieszkańców.
          </p>



          <section className="mb-10 rounded-xl bg-white p-8 shadow">

            <h2 className="mb-4 text-2xl font-bold text-stone-800">
              Najdawniejsze dzieje
            </h2>

            <p className="text-stone-700 leading-relaxed">
              Najstarsze dzieje Krzekotowa związane są z historią osadnictwa
              oraz przemianami zachodzącymi na tych terenach przez kolejne
              stulecia.

              <br /><br />

              Obraz dawnej miejscowości odtwarzamy na podstawie map,
              dokumentów oraz zachowanych śladów w terenie.

              <br /><br />

              Ta część archiwum będzie stopniowo uzupełniana
              wraz z odkrywaniem kolejnych źródeł.
            </p>

          </section>




          <section className="mb-10 rounded-xl bg-white p-8 shadow">

            <h2 className="mb-4 text-2xl font-bold text-stone-800">
              Krzekotów przed 1945 rokiem
            </h2>


            <img
              src="/images/fotografie/stara-brama-swietlica.jpg"
              alt="Stara brama dawnego Krzekotowa"
              className="mb-6 w-full rounded-xl"
            />


            <p className="text-stone-700 leading-relaxed">
              Przed 1945 rokiem Krzekotów był miejscowością z własną
              zabudową, gospodarstwami oraz społecznością mieszkańców.

              <br /><br />

              Zachowana fotografia starej bramy przedstawia miejsce,
              które istnieje również współcześnie. Jest to wyjątkowy ślad
              pokazujący ciągłość miejsca pomiędzy dawnym i obecnym Krzekotowem.

              <br /><br />

              Do tego okresu należą również zachowane fotografie
              historycznego słupka z inicjałami.
            </p>

          </section>




          <section className="mb-10 rounded-xl bg-white p-8 shadow">

            <h2 className="mb-4 text-2xl font-bold text-stone-800">
              II wojna światowa i rok 1945
            </h2>


            <img
              src="/images/fotografie/vmapa-natarcie-1945.jpg"
              alt="Mapa działań wojennych w 1945 roku"
              className="mb-6 w-full rounded-xl"
            />


            <p className="text-stone-700 leading-relaxed">
              Okres II wojny światowej oraz rok 1945 były czasem
              przełomowych wydarzeń.

              <br /><br />

              Zakończenie wojny przyniosło zmiany granic, administracji
              oraz całkowitą zmianę sytuacji mieszkańców.

              <br /><br />

              Zachowane mapy pomagają odtworzyć wydarzenia związane
              z tym trudnym okresem.
            </p>

          </section>




          <section className="mb-10 rounded-xl bg-white p-8 shadow">

            <h2 className="mb-4 text-2xl font-bold text-stone-800">
              Krzekotów po wojnie
            </h2>

            <p className="text-stone-700 leading-relaxed">
              Po 1945 roku rozpoczął się nowy etap historii miejscowości.

              <br /><br />

              Nowi mieszkańcy tworzyli społeczność, odbudowywali gospodarstwa
              i kształtowali powojenny obraz Krzekotowa.

              <br /><br />

              Ta część będzie uzupełniana o wspomnienia mieszkańców
              oraz dokumenty rodzinne.
            </p>

          </section>




          <section className="mb-10 rounded-xl bg-white p-8 shadow">

            <h2 className="mb-4 text-2xl font-bold text-stone-800">
              Krzekotów współczesny
            </h2>


            <img
              src="/images/fotografie/krzekotow-wita.jpg"
              alt="Tablica miejscowości Krzekotów"
              className="mb-6 w-full rounded-xl"
            />


            <p className="text-stone-700 leading-relaxed">
              Dzisiejszy Krzekotów zachowuje pamięć o swojej historii,
              jednocześnie tworząc nowy rozdział życia miejscowości.

              <br /><br />

              Fotografie, wydarzenia i wspólne działania mieszkańców
              pokazują, że historia Krzekotowa nadal trwa.
            </p>

          </section>


        </div>

      </main>

      <Footer />

    </>
  );
}