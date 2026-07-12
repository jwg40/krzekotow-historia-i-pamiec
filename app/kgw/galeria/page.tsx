export default function GaleriaKGW() {
  return (
    <main className="bg-stone-50 min-h-screen">

      <section className="bg-[#4B5D2A] text-white py-12">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h1 className="text-4xl font-bold">
            Galeria KGW Żurawianki
          </h1>

          <p className="mt-4 text-xl text-[#F2C14E]">
            Zdjęcia, wspomnienia i wydarzenia mieszkańców
          </p>

        </div>
      </section>


      <section className="max-w-5xl mx-auto px-6 py-12">


        <div className="grid md:grid-cols-3 gap-6">


          <div className="bg-white rounded-xl shadow p-6">

            <h2 className="text-2xl font-bold text-stone-800">
              Wydarzenia
            </h2>

            <p className="mt-3 text-stone-700">
              Festyny, uroczystości, spotkania i wspólne działania.
            </p>

            <p className="mt-4 text-sm text-stone-500">
              Folder:
              <br />
              public/images/kgw/wydarzenia
            </p>

          </div>



          <div className="bg-white rounded-xl shadow p-6">

            <h2 className="text-2xl font-bold text-stone-800">
              Tradycje
            </h2>

            <p className="mt-3 text-stone-700">
              Zwyczaje, rękodzieło, kuchnia i lokalne dziedzictwo.
            </p>

            <p className="mt-4 text-sm text-stone-500">
              Folder:
              <br />
              public/images/kgw/tradycje
            </p>

          </div>



          <div className="bg-white rounded-xl shadow p-6">

            <h2 className="text-2xl font-bold text-stone-800">
              Spotkania
            </h2>

            <p className="mt-3 text-stone-700">
              Ludzie tworzący historię KGW Żurawianki.
            </p>

            <p className="mt-4 text-sm text-stone-500">
              Folder:
              <br />
              public/images/kgw/spotkania
            </p>

          </div>


        </div>



        <div className="mt-10 bg-amber-50 rounded-2xl p-8">

          <h2 className="text-2xl font-bold text-stone-800">
            Galeria w przygotowaniu
          </h2>

          <p className="mt-4 text-stone-700">
            W tym miejscu pojawią się fotografie KGW Żurawianki.
            Zdjęcia zostaną ułożone chronologicznie wraz z opisami
            wydarzeń.
          </p>

        </div>


      </section>

    </main>
  );
}