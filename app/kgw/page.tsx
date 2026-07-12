export default function KGWPage() {
  return (
    <main className="bg-white min-h-screen">

      <section className="bg-[#4B5D2A] text-white py-12">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <img
            src="/images/fotografie/logo-zurawianki.jpg"
            alt="KGW Żurawianki Krzekotów"
            className="mx-auto mb-6 w-48 rounded-xl shadow-lg"
          />

          <h1 className="text-4xl font-bold">
            KGW Krzekotów Żurawianki
          </h1>

          <p className="mt-4 text-xl text-[#F2C14E]">
            Współczesne życie Krzekotowa
          </p>

        </div>
      </section>


      <section className="max-w-5xl mx-auto px-6 py-10">

        <h2 className="text-3xl font-bold text-stone-800 mb-5">
          Koło Gospodyń Wiejskich Żurawianki
        </h2>

        <p className="text-lg text-stone-700 leading-relaxed">
          KGW Żurawianki jest ważną częścią współczesnej historii
          Krzekotowa. Poprzez swoją działalność, spotkania,
          wydarzenia i kultywowanie tradycji tworzy obraz dzisiejszej
          społeczności naszej miejscowości.
        </p>


        <div className="mt-10 grid md:grid-cols-3 gap-6">

          <div className="bg-stone-100 rounded-xl p-6 text-center">
            <h3 className="font-bold text-xl">
              Wydarzenia
            </h3>
            <p className="mt-2">
              Relacje i kronika działalności KGW.
            </p>
          </div>


          <div className="bg-stone-100 rounded-xl p-6 text-center">
            <h3 className="font-bold text-xl">
              Tradycje
            </h3>
            <p className="mt-2">
              Zwyczaje, przepisy i lokalne dziedzictwo.
            </p>
          </div>


          <div className="bg-stone-100 rounded-xl p-6 text-center">
            <h3 className="font-bold text-xl">
              Spotkania
            </h3>
            <p className="mt-2">
              Ludzie tworzący historię Krzekotowa.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}