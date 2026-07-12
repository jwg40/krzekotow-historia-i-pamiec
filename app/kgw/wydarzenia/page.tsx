export default function WydarzeniaKGW() {
  return (
    <main className="bg-stone-50 min-h-screen">

      <section className="bg-[#4B5D2A] text-white py-12">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h1 className="text-4xl font-bold">
            Kronika wydarzeń KGW Żurawianki
          </h1>

          <p className="mt-4 text-xl text-[#F2C14E]">
            Wspólne chwile mieszkańców Krzekotowa
          </p>

        </div>
      </section>


      <section className="max-w-5xl mx-auto px-6 py-12">


        <div className="bg-white rounded-2xl shadow p-8 mb-8">

          <h2 className="text-3xl font-bold text-stone-800">
            2026
          </h2>

          <p className="mt-4 text-stone-700 text-lg">
            Miejsce na najnowsze wydarzenia KGW Żurawianki.
            Tutaj będziemy dodawać zdjęcia, opisy i wspomnienia.
          </p>


          <div className="mt-6 grid md:grid-cols-3 gap-5">

            <div className="bg-stone-100 rounded-xl p-6 text-center">

              <div className="text-4xl">
                📷
              </div>

              <h3 className="font-bold mt-3">
                Wydarzenie
              </h3>

              <p className="text-sm mt-2 text-stone-600">
                Zdjęcie i opis zostaną dodane.
              </p>

            </div>


            <div className="bg-stone-100 rounded-xl p-6 text-center">

              <div className="text-4xl">
                📷
              </div>

              <h3 className="font-bold mt-3">
                Spotkanie
              </h3>

              <p className="text-sm mt-2 text-stone-600">
                Historia wspólnych chwil.
              </p>

            </div>


            <div className="bg-stone-100 rounded-xl p-6 text-center">

              <div className="text-4xl">
                📷
              </div>

              <h3 className="font-bold mt-3">
                Tradycja
              </h3>

              <p className="text-sm mt-2 text-stone-600">
                Zachowanie lokalnych zwyczajów.
              </p>

            </div>

          </div>

        </div>



        <div className="bg-white rounded-2xl shadow p-8 mb-8">

          <h2 className="text-3xl font-bold text-stone-800">
            Archiwum wcześniejszych lat
          </h2>

          <p className="mt-4 text-stone-700">
            W tym miejscu będziemy uzupełniać historię działalności
            KGW Żurawianki na podstawie zdjęć, opisów wydarzeń
            i materiałów udostępnionych przez członkinie koła.
          </p>

        </div>



        <div className="bg-amber-50 rounded-2xl p-8">

          <h2 className="text-2xl font-bold text-stone-800">
            Źródło materiałów
          </h2>

          <p className="mt-4 text-stone-700">
            Materiały KGW Krzekotów Żurawianki publikowane są
            za zgodą Koła Gospodyń Wiejskich.
            Celem jest zachowanie pamięci o mieszkańcach,
            wydarzeniach i tradycjach Krzekotowa.
          </p>

        </div>


      </section>

    </main>
  );
}