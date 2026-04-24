'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export const Inicio = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      id="inicio"
      className="flex flex-col min-h-screen items-center justify-center w-full bg-[#F6F7F9] px-6 pt-10 md:px-20"
    >
      <div className="w-48 h-48 overflow-hidden rounded-full border-[6px] border-white">
        <Image
          src="/yo.jpg"
          alt="Foto de perfil de Javier Gonzalez, desarrollador web freelance especializado en React"
          width="160"
          height="160"
          className="object-cover object-[50%_20%] w-full h-full"
        />
      </div>

      <h1 className="py-6 font-montserrat text-3xl md:text-5xl lg:text-7xl text-center">
        Hola, soy{' '}
        <span className="font-dm-sans bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Javier González
        </span>
      </h1>

      <p className="font-montserrat mt-2 text-lg md:text-3xl text-gray-600 text-center">
        Desarrollador web especializado en React y soluciones frontend.
      </p>

      <p className="hidden md:block font-montserrat mt-2 text-lg md:text-2xl text-gray-600 text-center">
        Ayudo a negocios a convertir ideas en aplicaciones web rápidas, modernas
        y escalables.
      </p>

      <p className="md:hidden font-montserrat mt-2 text-lg text-gray-600 text-center">
        Creo aplicaciones web rápidas y escalables para negocios digitales.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 md:gap-10 mt-9 md:mt-10 font-montserrat">
        <a
          href="#proyectos"
          className="px-4 w-48 py-2 md:px-6 md:py-4 bg-[#667EEA] text-white rounded-4xl text-center hover:bg-[#667EEA]/80 hover:shadow-lg transition-all duration-300"
        >
          Ver proyectos
        </a>
        <a
          href="#contacto"
          className="px-4 w-48 py-2 md:px-6 md:py-4 rounded-4xl cursor-pointer text-center border-2 border-[#ccc] hover:border-[#667EEA] hover:text-[#667EEA] transition-all duration-300"
        >
          Contáctame
        </a>
      </div>
    </motion.section>
  );
};
