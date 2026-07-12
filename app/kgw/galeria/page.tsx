import Image from "next/image";

export default function GaleriaKGW() {
  return (
    <main className="min-h-screen bg-stone-50 py-12">

      <div className="mx-auto max-w-5xl px-6">

        <div className="text-center mb-10">

          <Image
            src="/images/fotografie/logo-zurawianki.jpg"
            alt="KGW Żurawianki Krzekotów"
            width={220}
            height={220}
            className="mx-auto rounded-full shadow-lg"
          />

          <h1 className="mt-6 text-4xl font-bold text-stone-800">
            Galeria KGW Żurawianki
          </h1>

          <p className="mt-3 text-lg text-stone-600">
            Zdjęcia, wydarzenia i wspomnienia mieszkańców Krzekotowa
          </p>

        </div>


        <section className="bg-white rounded-xl shadow p-8">

          <h2 className="text-2xl font-bold mb-4 text-[#4B5D2A]">
            Wspólne chwile
          </h2>

          <p className="text-stone-700">
            W tym miejscu będą prezentowane fotografie ze spotkań,
            uroczystości, wydarzeń i inicjatyw Koła Gospodyń Wiejskich
            Żurawianki.
          </p>

        </section>


      </div>

    </main>
  );
}