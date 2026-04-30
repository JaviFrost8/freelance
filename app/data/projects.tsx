import collector from '../../public/thecollector.webp';
import rafaello3d from '../../public/rafaello3d.webp';
import { StaticImageData } from 'next/image';

interface PropsProjects {
  id: number;
  nombre: string;
  descripcion: string;
  imagen: StaticImageData;
  caracteristicas: string[];
  demo?: string;
  codigo?: string;
}

export const projects: PropsProjects[] = [
  {
    id: 1,
    nombre: 'Web para negocio local',
    descripcion:
      'Desarrollo de una página web profesional para un cliente real, diseñada para mostrar sus servicios de forma clara y atractiva, mejorar su presencia online y facilitar el contacto con potenciales clientes.',
    imagen: rafaello3d,
    caracteristicas: [
      'Diseño moderno y responsive',
      'Optimizada para móviles',
      'Carga rápida y buen rendimiento',
      'Estructura pensada para captar clientes',
    ],
    demo: 'https://rafaello3d.vercel.app/',
  },
  {
    id: 2,
    nombre: 'App para coleccionistas de Cine',
    descripcion:
      'Aplicación web para gestionar y organizar colecciones de películas en formato Blu-ray, pensada para usuarios que desean controlar su catálogo de forma sencilla.',
    imagen: collector,
    caracteristicas: [
      'Gestión de colecciones',
      'Interfaz clara y fácil de usar',
      'Búsqueda y organización de contenido',
      'Experiencia optimizada para el usuario',
    ],
    demo: 'https://thecollectorv2.vercel.app/',
  },
];
