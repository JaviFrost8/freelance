export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 flex items-center justify-between w-full bg-white h-16 px-6 md:px-20 z-10">
      <a
        href="#inicio"
        className="font-dm-sans text-2xl font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
      >
        Javidev
      </a>
      <ul className="hidden md:flex gap-8">
        <li>
          <a href="#inicio" className="font-public-sans hover:text-indigo-600">
            Inicio
          </a>
        </li>
        <li>
          <a href="#acerca" className="font-public-sans hover:text-indigo-600">
            Acerca
          </a>
        </li>
        <li>
          <a
            href="#proyectos"
            className="font-public-sans hover:text-indigo-600"
          >
            Proyectos
          </a>
        </li>
        <li>
          <a
            href="#contacto"
            className="font-public-sans hover:text-indigo-600"
          >
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
};
