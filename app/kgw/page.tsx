export default function KGW() {
  return (
    <main className="bg-white min-h-screen">

      <section className="bg-[#4B5D2A] text-white py-12">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <img
            src="/images/fotografie/logo-zurawianki.jpg"
            alt="KGW Krzekotów Żurawianki"
            className="mx-auto w-48 rounded-xl shadow-lg mb-6"
          />

          <h1 className="text-4xl font-bold">
            KGW Krzekotów Żurawianki
          </h1>

          <p className="mt-4 text-xl text-[#F2C14E]">
            Współczesne życie Krzekotowa
          </p>

        </div>
      </section>


      <section className="max-w-5xl mx-auto px-6 py-12">

        <h2 className="text-3xl font-bold text-stone-800 mb-6">
          Koło Gospodyń Wiejskich Żurawianki
        </h2>


        <p className="text-lg leading-relaxed text-stone-700">
          Ta część Cyfrowego Archiwum Krzekotowa poświęcona jest
          działalności KGW Żurawianki.
          Znajdą się tutaj fotografie, wydarzenia, spotkania,
          tradycje oraz wspomnienia mieszkańców.
        </p>


        <div className="mt-10 grid md:grid-cols-3 gap-6">

          <a
            href="/kgw/wydarzenia"
            className="bg-amber-100 p-6 rounded-xl shadow hover:shadow-lg"
          >
            <h3 className="text-xl font-bold">
              Wydarzenia
            </h3>
            <p>
              Kronika działalności KGW.
            </p>
          </a>


          <div className="bg-amber-100 p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold">
              Tradycje
            </h3>
            <p>
              Obrzędy, kuchnia i zwyczaje.
            </p>
          </div>


          <div className="bg-amber-100 p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold">
              Spotkania
            </h3>
            <p>
              Ludzie tworzący historię.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}