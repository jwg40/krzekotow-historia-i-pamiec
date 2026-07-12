export default function KGWPage() {
  return (
    <main className="bg-stone-50 min-h-screen">

      <section className="bg-[#4B5D2A] text-white py-12">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <img
            src="/images/kgw/logo/logo-zurawianki.jpg"
            alt="KGW Krzekotów Żurawianki"
            className="mx-auto w-48 h-auto rounded-xl shadow-lg bg-white p-3"
          />

          <h1 className="text-4xl font-bold mt-8">
            KGW Krzekotów Żurawianki
          </h1>

          <p className="mt-4 text-xl text-[#F2C14E]">
            Współczesne życie Krzekotowa
          </p>

        </div>
      </section>


      <section className="max-w-5xl mx-auto px-6 py-12">

        <div className="bg-white rounded-2xl shadow p-8">

          <h2 className="text-3xl font-bold text-stone-800 mb-5">
            Koło Gospodyń Wiejskich Żurawianki
          </h2>

          <p className="text-lg leading-relaxed text-stone-700">
            Ta część Cyfrowego Archiwum Krzekotowa poświęcona jest
            współczesnemu życiu mieszkańców, lokalnym inicjatywom,
            wydarzeniom i tradycjom pielęgnowanym przez KGW Żurawianki.
          </p>

          <p className="mt-5 text-lg leading-relaxed text-stone-700">
            Dzięki zgodzie KGW Żurawianki możemy zachować fotografie,
            relacje i wspomnienia z wydarzeń, które tworzą najnowszą
            historię naszej miejscowości.
          </p>

        </div>


        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <a
            href="/kgw/wydarzenia"
            className="bg-[#4B5D2A] text-white rounded-xl p-6 hover:scale-105 transition"
          >
            <h3 className="text-2xl font-bold">
              Wydarzenia
            </h3>
            <p className="mt-3">
              Kronika spotkań, imprez i wspólnych działań.
            </p>
          </a>


          <div className="bg-white rounded-xl shadow p-6">

            <h3 className="text-2xl font-bold text-stone-800">
              Tradycje
            </h3>

            <p className="mt-3 text-stone-700">
              Przepisy, zwyczaje i lokalne dziedzictwo.
            </p>

          </div>


          <div className="bg-white rounded-xl shadow p-6">

            <h3 className="text-2xl font-bold text-stone-800">
              Spotkania
            </h3>

            <p className="mt-3 text-stone-700">
              Ludzie, wspomnienia i wspólna działalność.
            </p>

          </div>

        </div>


        <div className="mt-12 bg-amber-50 rounded-2xl p-8">

          <h2 className="text-2xl font-bold text-stone-800 mb-4">
            Materiały KGW Żurawianki
          </h2>

          <p className="text-stone-700">
            Zdjęcia i informacje zostały udostępnione za zgodą KGW
            Żurawianki. Wszystkie materiały będą opisane i zachowane
            jako część historii Krzekotowa.
          </p>

        </div>

      </section>

    </main>
  );
}