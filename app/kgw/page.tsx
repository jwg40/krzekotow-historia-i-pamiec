import Image from "next/image";

export default function KGWPage() {
  return (
    <main className="bg-stone-50 min-h-screen py-12">

      <section className="mx-auto max-w-5xl px-6">

        <div className="bg-white rounded-2xl shadow-lg p-8">

          <div className="flex flex-col items-center text-center">

            <Image
              src="/images/fotografie/logo-zurawianki.jpg"
              alt="KGW Krzekotów Żurawianki"
              width={250}
              height={250}
              className="rounded-xl mb-6"
            />

            <h1 className="text-4xl font-bold text-stone-800">
              KGW Krzekotów Żurawianki
            </h1>

            <p className="mt-4 text-lg text-stone-600">
              Koło Gospodyń Wiejskich tworzące współczesną historię Krzekotowa.
            </p>

          </div>


          <div className="mt-10 space-y-6 text-stone-700">

            <p>
              Ta część Cyfrowego Archiwum Krzekotowa poświęcona jest
              działalności KGW Żurawianki – ludziom, wydarzeniom,
              tradycjom oraz inicjatywom mieszkańców.
            </p>

            <p>
              Dzięki zgodzie KGW Żurawianki możemy zachować fotografie,
              opisy wydarzeń i wspomnienia, które pokazują współczesne życie
              naszej miejscowości.
            </p>

          </div>


          <div className="mt-10 grid md:grid-cols-3 gap-6">

            <a
              href="/kgw/wydarzenia"
              className="bg-[#4B5D2A] text-white rounded-xl p-6 text-center hover:bg-[#607536]"
            >
              <h2 className="text-xl font-bold">
                Wydarzenia
              </h2>
              <p className="mt-2">
                Kronika działalności KGW
              </p>
            </a>


            <div className="bg-amber-100 rounded-xl p-6 text-center">
              <h2 className="text-xl font-bold">
                Tradycje
              </h2>
              <p className="mt-2">
                Obrzędy, kuchnia i zwyczaje
              </p>
            </div>


            <div className="bg-amber-100 rounded-xl p-6 text-center">
              <h2 className="text-xl font-bold">
                Spotkania
              </h2>
              <p className="mt-2">
                Ludzie i wspólne chwile
              </p>
            </div>

          </div>


        </div>

      </section>

    </main>
  );
}