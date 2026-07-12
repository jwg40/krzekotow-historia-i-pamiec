import Header from "./Header";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>

        {/* Zdjęcie główne */}
        <section>
          <div
            className="h-[450px] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('/images/fotografie/krzekotow-wita.jpg')",
            }}
          />
        </section>


        {/* Wprowadzenie */}
        <section className="bg-amber-50 py-16">

          <div className="mx-auto max-w-5xl px-6 text-center">

            <h1 className="text-5xl font-bold text-stone-800">
              Cyfrowe Archiwum Krzekotowa
            </h1>

            <p className="mt-6 text-xl text-stone-700">
              Historia miejscowości, fotografie, dokumenty
              i wspomnienia mieszkańców.
            </p>

            <p className="mt-8 text-lg leading-relaxed text-stone-600">
              To miejsce powstało, aby zachować pamięć o dawnym
              i współczesnym Krzekotowie oraz ludziach,
              którzy przez pokolenia tworzyli jego historię.
            </p>

          </div>

        </section>



        {/* Główne działy */}

        <section className="bg-white py-16">

          <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-3">


            <a
              href="/historia"
              className="rounded-2xl bg-amber-50 p-8 shadow hover:shadow-xl"
            >

              <h2 className="text-2xl font-bold text-green-900">
                📜 Historia
              </h2>

              <p className="mt-4 text-stone-700">
                Dzieje Krzekotowa, najstarsze ślady,
                okres przedwojenny i powojenne przemiany.
              </p>

            </a>



            <a
              href="/galeria"
              className="rounded-2xl bg-amber-50 p-8 shadow hover:shadow-xl"
            >

              <h2 className="text-2xl font-bold text-green-900">
                📷 Galeria
              </h2>

              <p className="mt-4 text-stone-700">
                Fotografie miejsc, dokumenty i obrazy
                dawnego oraz współczesnego Krzekotowa.
              </p>

            </a>



            <a
              href="/monografia"
              className="rounded-2xl bg-amber-50 p-8 shadow hover:shadow-xl"
            >

              <h2 className="text-2xl font-bold text-green-900">
                📖 Monografia
              </h2>

              <p className="mt-4 text-stone-700">
                Rozbudowana historia miejscowości,
                mieszkańców i wydarzeń.
              </p>

            </a>


          </div>

        </section>



        {/* Hasło końcowe */}

        <section className="bg-green-900 py-12 text-center">

          <p className="text-3xl italic text-amber-100">
            Ocalić przeszłość. Budować pamięć.
          </p>

        </section>


      </main>


      <Footer />

    </>
  );
}