export default function Footer() {
  return (
    <footer className="bg-stone-900 text-amber-100">

      <div className="mx-auto max-w-6xl px-6 py-10">


        <div className="grid gap-8 md:grid-cols-3">


          <div>

            <h3 className="text-2xl font-bold">
              KRZEKOTÓW
            </h3>

            <p className="mt-4 leading-7 text-stone-300">
              Kiedyś i dziś.
              <br />
              Historia miejsca zachowana dla przyszłych pokoleń.
            </p>

          </div>



          <div>

            <h3 className="text-xl font-bold">
              Strona
            </h3>

            <ul className="mt-4 space-y-2 text-stone-300">

              <li>Historia</li>
              <li>Fotografie</li>
              <li>Mapy</li>
              <li>KGW Żurawianki</li>

            </ul>

          </div>



          <div>

            <h3 className="text-xl font-bold">
              Współpraca
            </h3>

            <p className="mt-4 leading-7 text-stone-300">
              Projekt tworzony dzięki zachowanym dokumentom,
              fotografiom oraz współpracy mieszkańców i KGW Żurawianki.
            </p>

          </div>


        </div>



        <hr className="my-8 border-stone-700" />



        <div className="text-center text-sm text-stone-400">

          © 2026 KRZEKOTÓW – Kiedyś i dziś

        </div>


      </div>

    </footer>
  );
}