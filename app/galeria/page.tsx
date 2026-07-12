import Header from "../Header";
import Footer from "../Footer";

export default function Galeria() {
  return (
    <>
      <Header />

      <main className="bg-stone-50">

        <section className="bg-green-900 py-14 text-center text-white">
          <h1 className="text-4xl font-bold">
            Galeria i Archiwum Fotografii
          </h1>

          <p className="mt-4 text-lg text-amber-200">
            Fotografie zachowujące historię i życie Krzekotowa.
          </p>
        </section>


        {/* KRZEKOTÓW DZIŚ */}
        <section className="mx-auto max-w-6xl px-6 py-16">

          <h2 className="mb-8 border-l-4 border-green-800 pl-4 text-3xl font-bold text-green-900">
            🏡 Krzekotów dziś
          </h2>


          <div className="grid gap-8 md:grid-cols-2">


            <PhotoCard
              image="/images/fotografie/krzekotow-wita.jpg"
              title="Tablica miejscowości"
              text="Współczesny znak rozpoznawczy Krzekotowa i miejsce powitania odwiedzających."
            />


            <PhotoCard
              image="/images/fotografie/mapa dzis.jpg"
              title="Mapa współczesnego Krzekotowa"
              text="Aktualny obraz miejscowości i jej otoczenia."
            />


            <PhotoCard
              image="/images/fotografie/swietlica-nowa.jpg"
              title="Współczesna świetlica"
              text="Miejsce spotkań mieszkańców i wydarzeń lokalnych."
            />


            <PhotoCard
              image="/images/fotografie/stodola-dzis.jpg"
              title="Stodoła – współczesny widok"
              text="Zachowane miejsce związane z historią dawnego gospodarstwa."
            />


          </div>

        </section>



        {/* HISTORIA */}
        <section className="bg-white py-16">

          <div className="mx-auto max-w-6xl px-6">

            <h2 className="mb-8 border-l-4 border-amber-600 pl-4 text-3xl font-bold text-stone-800">
              🏛 Ocalałe fotografie historyczne
            </h2>


            <p className="mb-10 text-lg text-stone-700">
              Zachowały się nieliczne fotografie dawnego Krzekotowa.
              Są one wyjątkowym świadectwem historii miejscowości
              i dawnych mieszkańców.
            </p>


            <div className="grid gap-8 md:grid-cols-2">


              <PhotoCard
                image="/images/fotografie/stara-brama-swietlica.jpg"
                title="Dawna brama gospodarstwa"
                text="Jedno z nielicznych zachowanych zdjęć starego Krzekotowa."
              />


              <PhotoCard
                image="/images/fotografie/inicjaly-slup-1.jpg.jpeg"
                title="Słupek z inicjałami"
                text="Zachowany ślad dawnych mieszkańców i historii miejsca."
              />


            </div>

          </div>

        </section>



        {/* DAWNIEJ I DZIŚ */}
        <section className="bg-amber-50 py-16">

          <div className="mx-auto max-w-6xl px-6">


            <h2 className="mb-8 border-l-4 border-green-800 pl-4 text-3xl font-bold text-green-900">
              ⏳ Dawniej i dziś
            </h2>


            <p className="mb-10 text-lg text-stone-700">
              Porównanie tego samego miejsca na przestrzeni lat.
              Fotografie pokazują ciągłość historii Krzekotowa
              i zmiany, jakie zachodziły w miejscowości.
            </p>


            <div className="grid gap-8 md:grid-cols-2">


              <PhotoCard
                image="/images/fotografie/stara-brama-swietlica.jpg"
                title="Dawniej – przedwojenny Krzekotów"
                text="Historyczna fotografia miejsca."
              />


              <PhotoCard
                image="/images/fotografie/stodola-dzis.jpg"
                title="Dziś – to samo miejsce"
                text="Współczesny widok zachowanego miejsca."
              />


            </div>


          </div>

        </section>



        {/* KRONIKA */}
        <section className="bg-white py-16">

          <div className="mx-auto max-w-6xl px-6">

            <h2 className="mb-8 border-l-4 border-green-800 pl-4 text-3xl font-bold text-green-900">
              🎉 Kronika współczesnego Krzekotowa
            </h2>


            <p className="text-lg leading-relaxed text-stone-700">
              W przyszłości znajdą się tutaj fotografie z uroczystości,
              wydarzeń wiejskich, działalności KGW Żurawianki,
              spotkań mieszkańców oraz ważnych chwil w życiu miejscowości.
            </p>


          </div>

        </section>


      </main>

      <Footer />
    </>
  );
}



function PhotoCard({
  image,
  title,
  text,
}: {
  image: string;
  title: string;
  text: string;
}) {

  return (

    <article className="overflow-hidden rounded-2xl bg-white shadow">

      <img
        src={image}
        alt={title}
        className="h-72 w-full object-cover"
      />

      <div className="p-6">

        <h3 className="text-xl font-bold text-green-900">
          {title}
        </h3>

        <p className="mt-3 text-stone-700">
          {text}
        </p>

      </div>

    </article>

  );
}