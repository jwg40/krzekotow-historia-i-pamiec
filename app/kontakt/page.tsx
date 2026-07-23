export default function KontaktPage() {
  return (
    <main className="min-h-screen bg-[#F8F5EF]">


      <section className="bg-white py-16 text-center">

        <h1 className="text-5xl font-bold text-stone-800">
          Kontakt
        </h1>

        <p className="mt-5 text-xl text-stone-600">
          Współtwórz historię Krzekotowa
        </p>

      </section>



      <section className="mx-auto max-w-5xl px-6 py-16">


        <div className="rounded-3xl bg-white p-8 shadow-sm md:p-12">


          <h2 className="text-3xl font-bold text-stone-800">
            Masz zdjęcia lub dokumenty?
          </h2>


          <p className="mt-6 text-lg leading-8 text-stone-700">
            Poszukujemy fotografii, dokumentów, map, pocztówek
            oraz informacji związanych z historią Krzekotowa.
          </p>


          <p className="mt-6 text-lg leading-8 text-stone-700">
            Każdy zachowany materiał może pomóc w odtworzeniu
            historii miejsca i ludzi, którzy byli z nim związani.
          </p>


          <hr className="my-10 border-amber-200" />



          <h2 className="text-3xl font-bold text-stone-800">
            Współpraca z KGW Żurawianki
          </h2>


          <p className="mt-6 text-lg leading-8 text-stone-700">
            Szczególnie ważna jest współpraca z Kołem Gospodyń
            Wiejskich „Żurawianki”, które pomaga zachować
            współczesne wydarzenia i lokalne tradycje.
          </p>



          <div className="mt-10 rounded-2xl bg-[#F8F5EF] p-8">


            <p className="text-xl text-stone-800">
              📧 Kontakt:
            </p>


            <p className="mt-3 text-2xl font-bold text-amber-700">
              kontakt@krzekotow.pl
            </p>


            <p className="mt-6 text-stone-600">
              Adres kontaktowy można w przyszłości zmienić
              na oficjalny adres projektu lub KGW.
            </p>


          </div>


        </div>


      </section>


    </main>
  );
}