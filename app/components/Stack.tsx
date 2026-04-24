export const Stack = () => {
  return (
    <section id="servicios" className="w-full py-20 bg-[#F6F7F9]">
      <h1 className="flex justify-center text-2xl md:text-3xl font-dm-sans mb-6">
        ¿En qué puedo ayudarte?
      </h1>

      <p className="text-center text-gray-600 font-montserrat mb-12 px-6">
        Soluciones digitales enfocadas en rendimiento, diseño y conversión.
      </p>

      <div className="grid md:grid-cols-3 gap-6 md:gap-10 px-6 md:px-20">
        <div className="bg-white rounded-2xl p-6 md:p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300">
          <h2 className="text-xl md:text-2xl font-dm-sans mb-3 text-gray-800">
            Webs profesionales
          </h2>
          <p className="font-montserrat text-gray-600">
            Desarrollo sitios web modernos, rápidos y adaptados a tu negocio.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 md:p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300">
          <h2 className="text-xl md:text-2xl font-dm-sans mb-3 text-gray-800">
            Aplicaciones web
          </h2>
          <p className="font-montserrat text-gray-600">
            Creo aplicaciones interactivas con React y Next.js con alto
            rendimiento.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 md:p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300">
          <h2 className="text-xl md:text-2xl font-dm-sans mb-3 text-gray-800">
            Optimización
          </h2>
          <p className="font-montserrat text-gray-600">
            Mejoro velocidad, SEO y experiencia de usuario en proyectos
            existentes.
          </p>
        </div>
      </div>
    </section>
  );
};
