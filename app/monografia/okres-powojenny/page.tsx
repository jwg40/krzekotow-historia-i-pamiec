export default function OkresPowojennyPage() {
  return (
    <main className="min-h-screen bg-stone-50">

      <section className="bg-gradient-to-b from-amber-100 to-white py-20">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <h1 className="text-5xl font-bold text-stone-800">
            Okres powojenny Krzekotowa
          </h1>

          <p className="mt-6 text-xl text-stone-600">
            Odbudowa życia i przemiany po 1945 roku.
          </p>

        </div>

      </section>



      <section className="mx-auto max-w-5xl px-6 py-16">


        <div className="rounded-3xl bg-white p-8 shadow-lg">


          <h2 className="text-3xl font-bold text-stone-800">
            Nowy rozdział historii
          </h2>


          <p className="mt-6 text-lg leading-8 text-stone-700">
            Rok 1945 przyniósł ogromne zmiany dla Krzekotowa.
            Zakończenie wojny oznaczało początek nowego okresu
            w historii miejscowości i jej mieszkańców.
          </p>


          <p className="mt-6 text-lg leading-8 text-stone-700">
            Powstawała nowa społeczność, zmieniała się struktura
            gospodarstw, administracja oraz codzienne życie mieszkańców.
          </p>


        </div>




        <div className="mt-10 grid gap-8 md:grid-cols-2">


          <div className="rounded-3xl bg-white p-8 shadow">


            <h2 className="text-2xl font-bold text-stone-800">
              Pierwsze lata po wojnie
            </h2>


            <p className="mt-4 leading-7 text-stone-700">
              Był to czas odbudowy, organizowania życia społecznego
              oraz tworzenia nowych więzi między mieszkańcami.
            </p>


          </div>




          <div className="rounded-3xl bg-white p-8 shadow">


            <h2 className="text-2xl font-bold text-stone-800">
              Rozwój miejscowości
            </h2>


            <p className="mt-4 leading-7 text-stone-700">
              Kolejne dekady przyniosły zmiany w wyglądzie wsi,
              infrastrukturze i sposobie życia mieszkańców.
            </p>


          </div>


        </div>




        <div className="mt-10 rounded-3xl bg-amber-100 p-8">


          <h2 className="text-3xl font-bold text-stone-800">
            Wspomnienia mieszkańców
          </h2>


          <p className="mt-5 text-lg leading-8 text-stone-700">
            Ten rozdział będzie rozwijany o relacje mieszkańców,
            fotografie rodzinne oraz dokumenty z okresu powojennego.
          </p>


        </div>


      </section>


    </main>
  );
}