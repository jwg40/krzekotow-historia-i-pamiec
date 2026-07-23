import Image from "next/image";

const wydarzenia = [
  {
    rok: "1263",
    tytul: "Pierwsza wzmianka o Crecotowo",
    tekst:
      "Najstarszy znany zapis nazwy miejscowości. Krzekotów istniał już w średniowieczu jako niewielka osada związana z rolnictwem i gospodarką leśną.",
    zdjecie: "/images/historia/mapa-krzekotow.jpg",
  },
  {
    rok: "XIII–XVI wiek",
    tytul: "Osada wśród lasów",
    tekst:
      "Przez kolejne stulecia życie mieszkańców wyznaczały pola, lasy i bliskość Głogowa. Lasy dostarczały drewna i innych surowców.",
  },
  {
    rok: "1582",
    tytul: "Powstanie Groß Vorwerk",
    tekst:
      "Na terenach należących do miasta Głogowa powstał Wielki Folwark. Od tego momentu rozwój miejscowości został związany z dużym gospodarstwem rolnym.",
  },
  {
    rok: "XVII–XVIII wiek",
    tytul: "Życie wokół folwarku",
    tekst:
      "Groß Vorwerk stał się ważnym gospodarstwem dostarczającym żywność dla Głogowa. Codzienność mieszkańców wyznaczała praca na roli.",
  },
  {
    rok: "1742",
    tytul: "Śląsk pod panowaniem Prus",
    tekst:
      "Zmiana granic państwowych przyniosła nowe władze i administrację, jednak życie mieszkańców nadal opierało się na pracy w gospodarstwie.",
  },
  {
    rok: "XIX wiek",
    tytul: "Rozwój majątku",
    tekst:
      "Groß Vorwerk stał się nowoczesnym majątkiem ziemskim. Powstawały stajnie, obory, spichlerze i budynki mieszkalne.",
  },
  {
    rok: "1890–1914",
    tytul: "Największy rozwój Groß Vorwerk",
    tekst:
      "Majątek osiągnął najwyższy poziom organizacji. Z historią miejscowości szczególnie związana była rodzina Pfarr.",
  },
  {
    rok: "1914–1918",
    tytul: "I wojna światowa",
    tekst:
      "Powołania do armii i brak pracowników zmieniły życie mieszkańców. Gospodarstwo nadal jednak funkcjonowało.",
  },
  {
    rok: "1939–1945",
    tytul: "II wojna światowa",
    tekst:
      "Wojna zakończyła świat dawnego Groß Vorwerk. Mieszkańcy odczuli skutki mobilizacji i gospodarki wojennej.",
  },
  {
    rok: "1945",
    tytul: "Walki o Głogów",
    tekst:
      "W rejonie Krzekotowa i Wilkowa doszło do starcia z niemiecką grupą zwiadowczą próbującą wydostać się z okrążonego Głogowa.",
  },
  {
    rok: "1945",
    tytul: "Narodziny polskiego Krzekotowa",
    tekst:
      "Miejscowość otrzymała polską nazwę. Przybyli pierwsi polscy mieszkańcy, którzy rozpoczęli tworzenie nowej społeczności.",
  },
  {
    rok: "Po 1989",
    tytul: "Nowoczesny Krzekotów",
    tekst:
      "Rozwój samorządności, inwestycje i działalność mieszkańców stworzyły współczesny obraz miejscowości.",
  },
];

export default function Historia() {
  return (
    <main className="min-h-screen bg-amber-50 px-6 py-12 text-stone-800">

      <section className="mx-auto max-w-4xl">

        <h1 className="mb-4 text-center text-4xl font-bold text-amber-800">
          Historia Krzekotowa
        </h1>

        <p className="mb-12 text-center text-lg">
          Oś czasu miejscowości – od średniowiecznego Crecotowo
          do współczesnego Krzekotowa.
        </p>


        <div className="relative border-l-4 border-amber-700">

          {wydarzenia.map((item, index) => (

            <article
              key={index}
              className="mb-12 ml-8 rounded-xl bg-white p-6 shadow-md"
            >

              <div className="absolute -ml-[46px] mt-2 h-6 w-6 rounded-full bg-amber-700"></div>

              <h2 className="text-2xl font-bold text-amber-800">
                {item.rok}
              </h2>

              <h3 className="mt-2 text-xl font-semibold">
                {item.tytul}
              </h3>

              <p className="mt-3 leading-relaxed">
                {item.tekst}
              </p>

              {item.zdjecie && (
                <div className="mt-5">
                  <Image
                    src={item.zdjecie}
                    width={700}
                    height={400}
                    alt={item.tytul}
                    className="rounded-lg"
                  />
                </div>
              )}

            </article>

          ))}

        </div>

      </section>

    </main>
  );
}