import Header from "../Header";
import Footer from "../Footer";

export default function Galeria() {

  const sekcje = [
    {
      tytul: "Krzekotów przed 1945 rokiem – zachowane ślady",
      opis:
        "Fotografie i materialne ślady dawnej miejscowości zachowane do dziś.",
      zdjecia: [
        {
          plik: "stara-brama-swietlica.jpg",
          opis:
            "Stara brama dawnego Krzekotowa – świadek przedwojennej zabudowy miejscowości.",
        },
        {
          plik: "inicjaly-slup-1.jpg",
          opis:
            "Historyczny słupek z zachowanymi inicjałami – jeden z materialnych śladów dawnego Krzekotowa.",
        },
        {
          plik: "inicjaly-slup-2.jpg",
          opis:
            "Zbliżenie zachowanych znaków i napisów na historycznym słupku.",
        },
      ],
    },


    {
      tytul: "Krzekotów w okresie wojny i zmian 1945 roku",
      opis:
        "Materiały związane z końcem wojny oraz okresem przemian mieszkańców i miejscowości.",
      zdjecia: [
        {
          plik: "lista-1945.jpg",
          opis:
            "Dokument związany z mieszkańcami Krzekotowa z okresu powojennego.",
        },
        {
          plik: "vmapa-natarcie-1945.jpg",
          opis:
            "Mapa działań wojennych w rejonie Krzekotowa w 1945 roku.",
        },
      ],
    },


    {
      tytul: "Krzekotów na mapach",
      opis:
        "Mapy przedstawiające miejscowość w różnych okresach historycznych.",
      zdjecia: [
        {
          plik: "mapa-krzekotowa.jpg",
          opis:
            "Mapa przedstawiająca dawny układ miejscowości.",
        },
        {
          plik: "mapa-dzis.jpg",
          opis:
            "Współczesna mapa Krzekotowa.",
        },
      ],
    },


    {
      tytul: "Krzekotów współczesny",
      opis:
        "Widoki miejscowości oraz obiekty związane z jej obecnym życiem.",
      zdjecia: [
        {
          plik: "krzekotow-wita.jpg",
          opis:
            "Tablica miejscowości Krzekotów – współczesny znak lokalnej tożsamości.",
        },
        {
          plik: "swietlica-nowa.jpg",
          opis:
            "Nowa świetlica wiejska – miejsce współczesnego życia mieszkańców.",
        },
        {
          plik: "stodola-dzis.jpg",
          opis:
            "Stodoła – zachowany element krajobrazu miejscowości.",
        },
        {
          plik: "krzekotow-1.jpg",
          opis:
            "Krzekotów współcześnie.",
        },
      ],
    },


    {
      tytul: "Życie mieszkańców i wydarzenia",
      opis:
        "Miejsce na fotografie spotkań, uroczystości i wydarzeń lokalnych.",
      zdjecia: [],
    },
  ];


  return (
    <>
      <Header />

      <main className="min-h-screen bg-stone-100 py-12">

        <div className="mx-auto max-w-6xl px-6">


          <h1 className="mb-4 text-center text-4xl font-bold text-stone-800">
            Galeria Krzekotowa
          </h1>


          <p className="mb-12 text-center text-stone-600">
            Fotografie dokumentujące historię, miejsca i życie mieszkańców Krzekotowa.
          </p>


          {sekcje.map((sekcja) => (

            <section key={sekcja.tytul} className="mb-14">


              <h2 className="mb-2 text-3xl font-bold text-stone-800">
                {sekcja.tytul}
              </h2>


              <p className="mb-6 text-stone-600">
                {sekcja.opis}
              </p>



              {sekcja.zdjecia.length > 0 ? (

                <div className="grid gap-8 md:grid-cols-3">

                  {sekcja.zdjecia.map((zdjecie) => (

                    <div
                      key={zdjecie.plik}
                      className="overflow-hidden rounded-xl bg-white shadow"
                    >

                      <img
                        src={`/images/fotografie/${zdjecie.plik}`}
                        alt={zdjecie.opis}
                        className="h-64 w-full object-cover"
                      />


                      <p className="p-4 text-center text-stone-700">
                        {zdjecie.opis}
                      </p>

                    </div>

                  ))}

                </div>

              ) : (

                <div className="rounded-xl bg-white p-8 text-center text-stone-500 shadow">
                  Wkrótce pojawią się tutaj kolejne fotografie.
                </div>

              )}


            </section>

          ))}


        </div>

      </main>


      <Footer />

    </>
  );
}