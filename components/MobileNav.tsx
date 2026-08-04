import Link from "next/link";

const menu = [
  {
    nazwa: "Start",
    adres: "/",
  },
  {
    nazwa: "Historia",
    adres: "/historia/archiwum",
  },
  {
    nazwa: "Galeria",
    adres: "/galeria",
  },
  {
    nazwa: "Mapy",
    adres: "/mapy",
  },
  {
    nazwa: "Mieszkańcy",
    adres: "/mieszkancy",
  },
];


export default function MobileNav() {
  return (
    <div className="md:hidden border-b border-green-200 bg-green-50/95">

      <nav className="
        flex
        gap-6
        overflow-x-auto
        px-5
        py-3
        text-sm
        font-semibold
        text-green-900
        whitespace-nowrap
      ">

        {menu.map((element) => (

          <Link
            key={element.adres}
            href={element.adres}
            className="
              rounded-full
              px-3
              py-1
              transition
              hover:bg-green-100
              hover:text-amber-700
            "
          >
            {element.nazwa}
          </Link>

        ))}

      </nav>

    </div>
  );
}