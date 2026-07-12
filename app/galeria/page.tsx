import Header from "../Header";
import Footer from "../Footer";

export default function Galeria() {
  return (
    <>
      <Header />

      <main className="bg-stone-50">

        {/* Nagłówek */}
        <section className="bg-green-900 py-14 text-center text-white">

          <h1 className="text-4xl font-bold">
            Galeria i Archiwum Fotografii
          </h1>

          <p className="mt-4 text-lg text-amber-200">
            Obrazy, które zachowują historię Krzekotowa.
          </p>

        </section>

        {/* Krzekotów dziś */}
        <section className="mx-auto max-w-6xl px-6 py-16">

          <h2 className="mb-8 border-l-4 border-green-800 pl-4 text-3xl font-bold text-green-900">
            📍 Krzekotów dziś
          </h2>

          <div className="grid gap-8 md:grid-cols-2">

            <article className="overflow-hidden rounded-xl bg-white shadow">

              <img
                src="/images/fotografie/krzekotow-wita.jpg"
                alt="Tablica miejscowości Krzekotów"
                className="h-72 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-xl font-bold">
                  Tablica miejscowości
                </h3>

                <p className="mt-3 text-stone-700">
                  Symboliczny początek Krzekotowa i pierwsze miejsce,
                  które wita każdego odwiedzającego.
                </p>

              </div>

            </article>


            <article className="overflow-hidden rounded-xl bg-white shadow">

              <img
                src="/images/fotografie/mapa dzis.jpg"
                alt="Współczesna mapa Krzekotowa"
                className="h-72 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-xl font-bold">
                  Współczesna mapa
                </h3>

                <p className="mt-3 text-stone-700">
                  Aktualny układ miejscowości i jej otoczenia.
                </p>

              </div>

            </article>

          </div>

        </section>


        {/* Ocalałe fotografie */}
        <section className="bg-white py-16">

          <div className="mx-auto max-w-6xl px-6">

            <h2 className="mb-8 border-l-4 border-amber-600 pl-4 text-3xl font-bold text-stone-800">
              🏛 Ocalałe fotografie historyczne
            </h2>

            <p className="mb-10 text-lg text-stone-700">
              Zachowały się jedynie nieliczne fotografie
              przedwojennego Krzekotowa. Każda z nich stanowi
              wyjątkowe świadectwo historii miejscowości.
            </p>

            <div className="grid gap-8 md:grid-cols-2">

              <div className="rounded-xl border bg-stone-50 p-8 text-center">

                <h3 className="text-xl font-bold">
                  Dawna brama gospodarstwa
                </h3>

                <p className="mt-3 text-stone-600">
                  Jedno z nielicznych zachowanych zdjęć
                  przedwojennego Krzekotowa.
                </p>

              </div>

              <div className="rounded-xl border bg-stone-50 p-8 text-center">

                <h3 className="text-xl font-bold">
                  Słupek z inicjałami
                </h3>

                <p className="mt-3 text-stone-600">
                  Historyczny detal przypominający
                  o dawnych mieszkańcach miejscowości.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* Dawniej i dziś */}
        <section className="bg-amber-50 py-16">

          <div className="mx-auto max-w-6xl px-6">

            <h2 className="mb-8 border-l-4 border-green-800 pl-4 text-3xl font-bold text-green-900">
              ⏳ Dawniej i dziś
            </h2>

            <p className="text-lg text-stone-700">
              W tej części archiwum będziemy zestawiać fotografie
              wykonane w tym samym miejscu przed laty i współcześnie,
              pokazując zmiany, jakie zaszły w Krzekotowie.
            </p>

          </div>

        </section>


        {/* Kronika */}
        <section className="bg-white py-16">

          <div className="mx-auto max-w-6xl px-6">

            <h2 className="mb-8 border-l-4 border-green-800 pl-4 text-3xl font-bold text-green-900">
              🎉 Kronika współczesnego Krzekotowa
            </h2>

            <p className="text-lg leading-relaxed text-stone-700">
              W tym miejscu będą publikowane fotografie z dożynek,
              działalności KGW Żurawianki, spotkań mieszkańców,
              uroczystości oraz innych wydarzeń dokumentujących życie
              współczesnego Krzekotowa.
            </p>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}