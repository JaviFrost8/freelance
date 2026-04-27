import { Acerca } from './components/Acerca';
import { Contacto } from './components/Contacto';
import { Footer } from './components/Footer';
import { Inicio } from './components/Inicio';
import { Navbar } from './components/Navbar';
import { Proyectos } from './components/Proyectos';
import { Services } from './components/Services';
import { WhatsappButton } from './components/WhatsappButton';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen items-center justify-center">
        <Inicio />
        <Acerca />
        <Services />
        <Proyectos />
        <Contacto />
        <WhatsappButton />
      </main>
      <Footer />
    </>
  );
}
