import Image from "next/image";
import Link from "next/link";

export default function KGWPage() {

  return (

    <main className="strona-archiwum">


      <section className="py-20 text-center">


        <h1 className="text-5xl font-bold text-amber-800">
          KGW Żurawianki
        </h1>


        <p className="mt-4 text-2xl font-semibold text-green-900">
          Tradycja, aktywność i mieszkańcy Krzekotowa
        </p>


      </section>




      <section className="mx-auto max-w-5xl px-6 py-12 space-y-10">





        <div className="
          rounded-3xl
          bg-[#F8F1DE]/90
          shadow-lg
          border
          border-amber-200
          p-8
        ">



          <div className="flex justify-center mb-8">


            <Image

              src="/images/kgw/logo/logo-zurawianki.jpg"

              alt="Logo KGW Żurawianki"

              width={280}

              height={280}

              className="
              rounded-2xl
              shadow-lg
              object-cover
              "

              priority

            />


          </div>




          <p className="text-lg leading-relaxed text-stone-700">

            Koło Gospodyń Wiejskich Żurawianki jest ważną częścią
            życia Krzekotowa. Działalność koła łączy mieszkańców,
            pielęgnuje tradycje i dokumentuje wydarzenia,
            które tworzą historię naszej miejscowości.

          </p>




          <p className="text-lg leading-relaxed mt-5 text-stone-700">

            Cyfrowe Archiwum Krzekotowa współpracuje z KGW Żurawianki,
            aby zachować wspomnienia, fotografie i wydarzenia
            związane z lokalną społecznością.

          </p>



        </div>





        <div className="
          rounded-3xl
          bg-[#F8F1DE]/90
          shadow-lg
          border
          border-amber-200
          p-8
        ">


          <h2 className="text-3xl font-bold text-amber-800 text-center">

            Oficjalna strona KGW Żurawianki

          </h2>



          <p className="mt-5 text-lg text-center text-stone-700">

            Pełne archiwum działalności koła znajduje się
            na stronie prowadzonej przez KGW.

          </p>



          <div className="text-center mt-8">


            <Link

              href="https://www.facebook.com/profile.php?id=100064599375387"

              target="_blank"

              rel="noopener noreferrer"

              className="
              inline-block
              bg-amber-700
              text-white
              px-8
              py-4
              rounded-xl
              font-bold
              hover:bg-amber-800
              transition
              "

            >

              Odwiedź stronę KGW Żurawianki

            </Link>


          </div>


        </div>






        <div className="
          rounded-3xl
          bg-green-900
          text-white
          shadow-lg
          p-8
        ">



          <h2 className="text-3xl font-bold text-center">

            Razem dla pamięci Krzekotowa

          </h2>



          <p className="mt-5 text-lg leading-relaxed text-center">

            Cyfrowe Archiwum Krzekotowa pomaga zachować
            historię ludzi, wydarzeń i miejsc naszej społeczności.

          </p>



        </div>




      </section>


    </main>

  );

}