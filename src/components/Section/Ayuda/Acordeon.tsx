import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { Bounce, Fade, Flip, Hinge, JackInTheBox, Roll, Rotate, Slide, Zoom } from "react-awesome-reveal";

export default function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <Slide cascade direction='up' duration={400} triggerOnce>
        <AccordionItem value="item-1">
          <AccordionTrigger>¿Cuánto tiempo tarda un proyecto?</AccordionTrigger>
          <AccordionContent>
            El tiempo de desarrollo depende de la complejidad y los requisitos del proyecto. Proyectos simples pueden tardar unas pocas semanas, mientras que los más complejos pueden extenderse varios meses.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>¿Cuánto cuesta desarrollar una aplicación?</AccordionTrigger>
          <AccordionContent>
            El costo varía según la complejidad del proyecto, los requisitos específicos y la duración estimada del desarrollo. Ofrecemos presupuestos personalizados tras una evaluación detallada del proyecto.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>¿Cómo garantizan la calidad del software?</AccordionTrigger>
          <AccordionContent>
            Implementamos rigurosas pruebas de calidad en todas las etapas del desarrollo, incluyendo pruebas unitarias, de integración, funcionales y de aceptación del usuario. También utilizamos herramientas de control de calidad automatizadas.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>¿Pueden integrar el software con sistemas existentes?</AccordionTrigger>
          <AccordionContent>
            Sí, podemos integrar nuestras soluciones con sus sistemas actuales para asegurar una operación fluida y sin interrupciones.
          </AccordionContent>
        </AccordionItem>
      </Slide>
    </Accordion>
  )
}
