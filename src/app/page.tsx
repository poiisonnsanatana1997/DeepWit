"use client"; 
import NavBar from "@/components/Navbar/Navbar"
import SectionPrincipal from "@/components/Section/Principal/SectionPrincipal"
import SectionServicios from "@/components/Section/Servicios/SectionServicios"
import SectionInformacion from "@/components/Section/Informacion/SectionInformacion"
import SectionContacto from "@/components/Section/Contacto/SectionContacto"
import SectionPie from "@/components/Section/Pie/SectionPie"
import SectionAyuda from "@/components/Section/Ayuda/SectionAyuda";
import SectionCarrusel from "@/components/Section/Carrusel/SectionCarrusel";
import SectionTrabajos from "@/components/Section/Trabajos/SectionTrabajos";

export default function Home() {
  return (
    <>
      <NavBar />
      <SectionPrincipal />
      <SectionCarrusel />
      <SectionServicios />
      <SectionInformacion />
      <SectionTrabajos />
      <SectionAyuda />
      <SectionContacto />
      <SectionPie />
    </>
  );
}
