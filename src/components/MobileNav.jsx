import { useState } from 'preact/hooks';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  // Lista de enlaces de tu navegación
  const navLinks = [
    { href: "#inicio", text: "Inicio" },
    { href: "#sobre-mi", text: "Sobre mí" },
    { href: "#proyectos", text: "Proyectos" },
    { href: "#servicios", text: "Servicios" },
    {href: "#testimonios", text: "Testimonios" },
    { href: "#contacto", text: "Contacto" },
  ];

  return (
    <>
      {/* 1. Botón de Hamburguesa (visible solo en mobile) */}
      <button 
        onClick={toggleMenu} 
        className="md:hidden text-gray-800 dark:text-gray-100 p-2 focus:outline-none"
        aria-label="Toggle navigation"
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            // Icono de Cerrar (X)
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          ) : (
            // Icono de Menú (Hamburguesa)
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          )}
        </svg>
      </button>

      {/* 2. Menú de Navegación (visible en desktop, condicional en mobile) */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:block`}>
        <ul className="flex flex-col md:flex-row gap-6 text-sm font-medium 
                       absolute md:static top-16 left-0 w-full md:w-auto 
                       bg-white dark:bg-gray-900 md:bg-transparent 
                       shadow-lg md:shadow-none p-4 md:p-0 border-t md:border-t-0">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a 
                href={link.href} 
                className="block hover:text-blue-500 py-2 md:py-0"
                onClick={toggleMenu} // Cierra el menú al hacer clic en un enlace
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}