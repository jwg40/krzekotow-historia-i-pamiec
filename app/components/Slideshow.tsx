"use client";

const image = "/images/fotografie/krzekotow-1.jpg";

export default function Slideshow() {
  return (
    <section className="relative h-[340px] overflow-hidden md:h-[420px]">

      <img
        src={image}
        alt="Tablica miejscowości"
        className="h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/20" />


      <div className="absolute inset-0 flex items-center justify-center">

        <div className="text-center text-white">

          <h1 className="text-5xl font-bold tracking-wide drop-shadow-lg md:text-6xl">
            Kiedyś i dziś
          </h1>

          <div className="mx-auto mt-6 h-px w-32 bg-amber-300" />

          <p className="mt-6 text-xl italic text-amber-100 drop-shadow-md md:text-2xl">
            Ocalić od zapomnienia
          </p>

        </div>

      </div>

    </section>
  );
}