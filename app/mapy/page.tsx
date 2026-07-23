export default function MapyPage() {
  return (
    <main className="min-h-screen bg-[#F8F5EF]">


      <section className="bg-white py-16 text-center">

        <h1 className="text-5xl font-bold text-stone-800">
          Mapy
        </h1>

        <p className="mt-5 text-xl text-stone-600">
          Zmiany miejsca na przestrzeni dziejów
        </p>

      </section>


      <section className="mx-auto max-w-6xl px-6 py-16 space-y-16">


        <div className="overflow-hidden rounded-3xl bg-white shadow-md">

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
              oraz zabudowę z wcześniejszego okresu.
            </p>

          </div>

        </div>



        <div className="overflow-hidden rounded-3xl bg-white shadow-md">

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
              w rejonie miejscowości.
            </p>

          </div>

        </div>



        <div className="overflow-hidden rounded-3xl bg-white shadow-md">

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