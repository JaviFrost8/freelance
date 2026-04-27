import React from 'react';
import { projects } from '../data/projects';
import Image from 'next/image';

export const Proyectos = () => {
  return (
    <section
      id="proyectos"
      className="flex flex-col min-h-screen lg:w-[80%] items-center justify-center"
    >
      <h1 className="font-dm-sans mt-30 mb-2 text-2xl md:text-3xl">
        Proyectos recientes
      </h1>
      <div className="flex flex-col px-2 lg:grid lg:grid-cols-2 lg:gap-8 justify-center items-center">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col my-7 xl:max-w-[600] justify-center items-center px-2"
          >
            <Image
              src={project.imagen}
              alt="foto del proyecto"
              width="600"
              height="600"
              className="rounded-2xl my-6 shadow-2xl max-h-[350px] md:h-[300px] object-cover"
            />
            <div className="flex flex-col justify-center items-center">
              <h2 className="font-montserrat font-bold mb-2 text-xl text-indigo-500">
                {project.nombre}
              </h2>
              <p className="font-public-sans text-md text-center md:text-start">
                {project.descripcion}
              </p>
              <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm md:text-base font-montserrat text-gray-600">
                {project.caracteristicas.map((c) => (
                  <div
                    key={c}
                    className="flex bg-[#F6F7F9] text-center items-center justify-center px-3 py-1 rounded-full text-sm font-montserrat text-gray-700"
                  >
                    {c}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center md:justify-start gap-6 w-full mt-6">
              {project.demo && (
                <>
                  <a
                    className="cursor-pointer"
                    href={project.demo}
                    target="_blank"
                  >
                    <button className="font-montserrat px-4 py-2 rounded-2xl cursor-pointer border-2 border-[#ccc] hover:border-[#667EEA] hover:text-[#667EEA] transition-all duration-300">
                      Visitar
                    </button>
                  </a>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
