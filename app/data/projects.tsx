import citalia from '@/public/citalia.png';
import ecommerce from '@/public/ecommerce.png';
import { StaticImageData } from 'next/image';
import portfolio from '@/public/portfolio.png';
import vicio from '@/public/vicio.png';

interface PropsProjects {
  id: number;
  nombre: string;
  descripcion: string;
  imagen: StaticImageData;
  caracteristicas: string[];
  demo?: string;
  codigo: string;
}

export const projects: PropsProjects[] = [
  {
    id: 1,
    nombre: 'Citalia',
    descripcion:
      'Aplicación web para descubrir y compartir citas célebres, desarrollada con React y Firebase para la gestión de datos',
    imagen: citalia,
    caracteristicas: [
      'Firebase',
      'Autenticación de usuarios',
      'Interacción de usuarios',
    ],
    demo: 'https://citalia-project.vercel.app/',
    codigo: 'https://github.com/JaviFrost8/citalia',
  },
  {
    id: 2,
    nombre: 'Vicio',
    descripcion:
      'Aplicación para concienciar sobre el deterioro y la destrucción que producen las drogas',
    imagen: vicio,
    caracteristicas: ['Diseño Responsive', 'Estado global', 'React Router'],
    demo: 'https://vicioapp-z9b8.vercel.app/',
    codigo: 'https://github.com/JaviFrost8/vicio',
  },
  {
    id: 3,
    nombre: 'Eva Stettic',
    descripcion:
      'E-commerce de estética y bienestar con carrito de compras gestionado mediante estado global usando Context API',
    imagen: ecommerce,
    caracteristicas: [
      'Estado Global',
      'Lógica de carrito',
      'Arquitectura de componentes',
    ],
    demo: 'https://stetticfinish.vercel.app/',
    codigo: 'https://github.com/JaviFrost8/stettic',
  },
  {
    id: 4,
    nombre: 'Portfolio',
    descripcion:
      'Portfolio personal desarrollado con Next.js con diseño responsive, rendimiento y buenas prácticas de desarrollo',
    imagen: portfolio,
    caracteristicas: [
      'NextJS',
      'Typescript',
      'SEO',
      'Optimización',
      'Diseño Responsive',
    ],
    codigo: 'https://github.com/JaviFrost8/portfoliov2',
  },
];
