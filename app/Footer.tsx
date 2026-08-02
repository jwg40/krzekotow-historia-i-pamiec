export default function Footer() {
  return (
    <footer className="bg-green-900 text-amber-100">


      <div className="mx-auto max-w-7xl px-6 py-10">


        <div className="grid gap-8 md:grid-cols-3">


          <div>

            <h3 className="text-2xl font-bold text-amber-200">
              ARCHIWUM KRZEKOTOWA
            </h3>

            <p className="mt-4 leading-7 text-green-100">
              Kiedyś i dziś.
              <br />
              Historia miejsca zachowana dla przyszłych pokoleń.
            </p>

          </div>



          <div>

            <h3 className="text-xl font-bold text-amber-200">
              Strona
            </h3>


            <ul className="mt-4 space-y-2 text-green-100">

              <li>Historia</li>
              <li>Monografia</li>
              <li>Fotografie</li>
              <li>Mapy</li>
              <li>KGW Żurawianki</li>

            </ul>


          </div>




          <div>

            <h3 className="text-xl font-bold text-amber-200">
              Współpraca
            </h3>


            <p className="mt-4 leading-7 text-green-100">

              Projekt tworzony dzięki zachowanym dokumentom,
              fotografiom oraz wspomnieniom mieszkańców Krzekotowa.

            </p>


          </div>


        </div>




        <hr className="my-8 border-green-700" />



        <div className="text-center text-sm text-green-200">

          © 2026 Cyfrowe Archiwum Krzekotowa

        </div>


      </div>


    </footer>
  );
}