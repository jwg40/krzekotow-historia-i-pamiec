export default function MapyPage() {
  return (
    <main
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(rgba(220,232,210,.90), rgba(244,232,204,.90)), url('/images/historia/stara-mapa-tlo.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >

      <section className="py-20 text-center">

        <div className="mx-auto max-w-5xl px-6">

          <h1 className="text-5xl font-bold text-stone-800">
            Mapy Krzekotowa
          </h1>

          <p className="mt-5 text-xl text-stone-700">
            Zmiany miejsca na przestrzeni dziejów Krzekotowa.
          </p>

        </div>

      </section>



      <section className="mx-auto max-w-6xl px-6 py-10 space-y-12">


        <div className="overflow-hidden rounded-3xl bg-white/90 shadow-lg backdrop-blur-sm">

          <img
            src="/images/mapa-krzekotow.jpg"
            alt="Dawny Krzekotów"
            className="w-full"
          />

          <div className="p-8">

            <h2 className="text-3xl font-bold text-stone-800">
              Dawny Krzekotów
            </h2>

            <p className="mt-4 text-lg leading-8 text-stone-700">
              Historyczna mapa przedstawiająca dawny układ miejscowości
              oraz zabudowę z wcześniejszych okresów.
            </p>

          </div>

        </div>




        <div className="overflow-hidden rounded-3xl bg-white/90 shadow-lg backdrop-blur-sm">

          <img
            src="/images/fotografie/vmapa-natarcie-1945.jpg"
            alt="Mapa działań 1945"
            className="w-full"
          />

          <div className="p-8">

            <h2 className="text-3xl font-bold text-stone-800">
              Rok 1945
            </h2>

            <p className="mt-4 text-lg leading-8 text-stone-700">
              Mapa związana z wydarzeniami końca II wojny światowej
              i zmianami, które dotknęły miejscowość.
            </p>

          </div>

        </div>




        <div className="overflow-hidden rounded-3xl bg-white/90 shadow-lg backdrop-blur-sm">

          <img
            src="/images/fotografie/mapa-dzis.jpg"
            alt="Współczesny Krzekotów"
            className="w-full"
          />

          <div className="p-8">

            <h2 className="text-3xl font-bold text-stone-800">
              Krzekotów współcześnie
            </h2>

            <p className="mt-4 text-lg leading-8 text-stone-700">
              Współczesny obraz miejscowości i jej obecny układ.
            </p>

          </div>

        </div>


      </section>


    </main>
  );
}