export default function KGW() {
  return (
    <main className="min-h-screen bg-stone-50 py-12">

      <div className="mx-auto max-w-5xl px-6">

        <section className="rounded-2xl bg-white p-8 shadow">

          <div className="text-center">

            <img
              src="/images/kgw/logo/logo-zurawianki.jpg"
              alt="KGW Żurawianki Krzekotów"
              className="mx-auto mb-6 max-h-48 rounded-xl object-contain"
            />

            <h1 className="text-4xl font-bold text-stone-800">
              Koło Gospodyń Wiejskich Żurawianki
            </h1>

            <p className="mt-3 text-xl text-amber-700">
              Krzekotów
            </p>

          </div>


          <div className="mt-10 space-y-6 text-lg text-stone-700">

            <p>
              Ta część Cyfrowego Archiwum Krzekotowa poświęcona jest
              współczesnemu życiu mieszkańców oraz działalności
              Koła Gospodyń Wiejskich Żurawianki.
            </p>

            <p>
              Dzięki zgodzie KGW Żurawianki możemy zachować fotografie,
              opisy wydarzeń i wspomnienia związane z działalnością koła.
            </p>

            <p>
              Jest to zapis ludzi, tradycji i inicjatyw, które tworzą
              historię Krzekotowa również dzisiaj.
            </p>

          </div>


          <div className="mt-10 grid gap-6 md:grid-cols-3">

            <a
              href="/kgw/wydarzenia"
              className="rounded-xl bg-amber-100 p-6 text-center hover:bg-amber-200"
            >
              <h2 className="text-xl font-bold">
                Wydarzenia
              </h2>
              <p className="mt-2">
                Kronika działalności KGW
              </p>
            </a>


            <div className="rounded-xl bg-green-100 p-6 text-center">
              <h2 className="text-xl font-bold">
                Tradycje
              </h2>
              <p className="mt-2">
                Obrzędy, kuchnia i zwyczaje
              </p>
            </div>


            <div className="rounded-xl bg-blue-100 p-6 text-center">
              <h2 className="text-xl font-bold">
                Galeria
              </h2>
              <p className="mt-2">
                Zdjęcia mieszkańców
              </p>
            </div>

          </div>


        </section>

      </div>

    </main>
  );
}