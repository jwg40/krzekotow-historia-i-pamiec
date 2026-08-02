export default function KalendariumPage() {

  const wydarzenia = [
    {
      rok: "1263",
      tytul: "Pierwsza wzmianka o Krzekotowie",
      opis:
        "Najstarszy znany zapis dotyczący miejscowości i początek udokumentowanej historii Krzekotowa.",
    },
    {
      rok: "XIX wiek",
      tytul: "Rozwój dawnej miejscowości",
      opis:
        "Okres kształtowania się układu zabudowy, gospodarstw oraz życia mieszkańców.",
    },
    {
      rok: "1900–1945",
      tytul: "Krzekotów przed 1945 rokiem",
      opis:
        "Czas, z którego zachowały się mapy, dokumenty i ślady dawnego życia mieszkańców.",
    },
    {
      rok: "1945",
      tytul: "Koniec wojny i wielkie zmiany",
      opis:
        "Przejście frontu, zmiany administracyjne oraz początek nowego rozdziału historii miejscowości.",
    },
    {
      rok: "Po 1945",
      tytul: "Nowi mieszkańcy i odbudowa życia",
      opis:
        "Budowanie nowej społeczności, gospodarstw oraz powojennego życia Krzekotowa.",
    },
    {
      rok: "XXI wiek",
      tytul: "Cyfrowe Archiwum",
      opis:
        "Powstaje projekt dokumentujący historię Krzekotowa.",
    },
  ];


  return (

    <main
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(rgba(220,232,210,.90), rgba(244,232,204,.90)), url('/images/historia/stara-mapa-tlo.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >


      <section className="py-20 text-center">

        <h1 className="text-5xl font-bold text-stone-800">
          Kalendarium Krzekotowa
        </h1>

        <p className="mt-5 text-xl text-stone-700">
          Najważniejsze wydarzenia w dziejach miejscowości
        </p>

      </section>



      <section className="mx-auto max-w-5xl px-6 py-16">


        <div className="border-l-4 border-green-800">


          {wydarzenia.map((wpis, index) => (

            <div
              key={index}
              className="relative mb-12 ml-8"
            >


              <div
                className="
                  absolute
                  -left-11
                  top-2
                  h-6
                  w-6
                  rounded-full
                  border-4
                  border-green-800
                  bg-white
                "
              />


              <div
                className="
                  rounded-2xl
                  bg-white/90
                  p-8
                  shadow-lg
                  backdrop-blur-sm
                "
              >


                <span
                  className="
                    rounded-full
                    bg-green-800
                    px-4
                    py-1
                    text-sm
                    font-bold
                    text-white
                  "
                >
                  {wpis.rok}
                </span>



                <h2
                  className="
                    mt-4
                    text-2xl
                    font-bold
                    text-green-900
                  "
                >
                  {wpis.tytul}
                </h2>



                <p
                  className="
                    mt-4
                    leading-7
                    text-stone-700
                  "
                >
                  {wpis.opis}
                </p>


              </div>


            </div>

          ))}


        </div>


      </section>


    </main>

  );
}