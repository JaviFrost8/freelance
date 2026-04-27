import { IoMdMail } from 'react-icons/io';
import { FaPhone } from 'react-icons/fa6';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export const Contacto = () => {
  return (
    <section
      id="contacto"
      className="flex min-h-screen w-full items-center justify-center bg-[#F6F7F9]"
    >
      <div className="flex flex-col max-w-2xl justify-center px-2">
        <h1 className="font-dm-sans text-3xl md:text-5xl tracking-wider text-center mb-6">
          ¿Hablamos?
        </h1>
        <p className="font-montserrat text-center md:text-xl text-gray-600">
          Si tienes una idea, un proyecto o necesitas crear tu web, estaré
          encantado de ayudarte a hacerlo realidad.
        </p>
        <p className="font-montserrat text-center md:text-lg text-gray-500 mt-2">
          Puedes contactarme directamente por email o teléfono.
        </p>
        <p className="font-montserrat text-center md:text-lg text-gray-500 mt-2">
          Actualmente disponible para nuevos proyectos.
        </p>
        <div className="flex flex-col gap-2 md:flex-row md:gap-6 justify-center mt-6">
          <a href="mailto:jjaviergonzalez23@gmail.com">
            <div className="flex gap-2 justify-center mb-3">
              <IoMdMail size={20} className="text-gray-600" />
              <span className="text-gray-600">Jjaviergonzalez23@gmail.com</span>
            </div>
          </a>
          <a href="tel:662628562">
            <div className="flex gap-2 justify-center">
              <FaPhone size={20} className="text-gray-600" />
              <span className="text-gray-600 ">+34 662628562</span>
            </div>
          </a>
        </div>
        <div className="flex justify-center gap-3 mt-8 w-full">
          <a
            href="https://www.linkedin.com/in/javier-g-c-b5abb6207/"
            target="_blank"
          >
            <div className="flex items-center justify-center w-[60] h-[60] bg-white shadow-2xl rounded-full text-gray-600 hover:text-[#0e76a8] cursor-pointer transition-all duration-200">
              <FaLinkedin size={24} />
            </div>
          </a>
          <a href="https://github.com/JaviFrost8" target="_blank">
            <div className="flex items-center justify-center w-[60] h-[60] bg-white shadow-2xl rounded-full text-gray-600 hover:text-[#010409] cursor-pointer transition-all duration-200">
              <FaGithub size={24} />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
