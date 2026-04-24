import Image from 'next/image';

export const Acerca = () => {
  return (
    <section
      id="acerca"
      className="flex w-full overflow-hidden py-20 min-h-[80vh] items-center justify-center"
    >
      <div className="flex flex-col xl:flex-row px-4 xl:px-48">
        <div className="flex flex-col justify-center xl:w-1/2 md:p-10">
          <h1 className="font-dm-sans text-2xl md:text-4xl xl:text-7xl lg:mb-8 pb-6">
            Acerca de mí
          </h1>
          <p className="font-montserrat mb-6 text-gray-600 md:text-2xl">
            Soy desarrollador web freelance especializado en React y Next.js.
            Ayudo a negocios y emprendedores a crear aplicaciones web modernas,
            rápidas y adaptadas a sus necesidades.
          </p>
          <p className="font-montserrat text-gray-600 md:text-2xl">
            Me enfoco en construir interfaces limpias, escalables y con buena
            experiencia de usuario, cuidando tanto el diseño como el rendimiento
            del producto final.
          </p>
          <p className="font-montserrat mt-6 text-gray-600 md:text-2xl font-medium">
            Abierto a nuevos proyectos y colaboraciones.
          </p>
          <div className="flex justify-center items-center my-6 gap-4 md:mt-10">
            <div className="flex flex-col justify-center items-center p-4 lg:py-10 bg-[#F6F7F9] rounded-2xl w-1/2">
              <p className="font-montserrat text-2xl md:text-3xl text-indigo-500">
                Proyectos
              </p>
              <p className="font-montserrat md:text-xl">reales</p>
            </div>
            <div className="flex flex-col justify-center items-center p-4 lg:py-10 bg-[#F6F7F9] rounded-2xl w-1/2">
              <p className="font-montserrat md:text-xl">Enfoque en</p>
              <p className="font-montserrat text-2xl md:text-3xl text-indigo-500">
                calidad
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center xl:w-1/2">
          <Image
            src="/escritorio.jpg"
            alt="escritorio"
            width="600"
            height="600"
            className="rounded-2xl w-full max-h-[350px] md:max-h-[450px] lg:max-h-[600px] md:object-top object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};
