import React from 'react'
import styled from 'styled-components'
import imagen_meto from '@/assets/meto.svg'
import imagen_costo from '@/assets/costos.svg'
import imagen_uso from '@/assets/uso.svg'
import imagen_soport from '@/assets/soporte.svg'
import Image from 'next/image'
import { Bounce, Fade, Flip, Hinge, JackInTheBox, Roll, Rotate, Slide, Zoom } from "react-awesome-reveal";

function SectionInformacion() {
    return (
        <>
            <SectionContainer>
                <div className="container">
                    <div className="section">
                        <Zoom delay={600} triggerOnce>
                            <div className="imagen">
                                <Image src={imagen_meto} alt="imagen de meto" />
                            </div>
                        </Zoom>
                        <Fade delay={200} direction="up" triggerOnce className="informacion">
                            <div >
                                <h6>Metodologias</h6>
                                <h2>Cómo trabajamos</h2>
                                <p>
                                    Comenzamos nuestro proceso entendiendo a fondo tus necesidades específicas y luego procedemos a identificar las historias de usuario clave. Trabajamos en estrecha colaboración contigo durante todo el desarrollo del proyecto, manteniendo una comunicación abierta y constante para asegurar que los resultados alcancen e incluso superen tus expectativas.
                                </p>
                            </div>
                        </Fade>
                    </div>
                    <div className="section">
                        <Fade delay={200} direction="up" triggerOnce className="informacion">
                            <div >
                                <h6>Prototipado</h6>
                                <h2>Reduce tiempos y costos</h2>
                                <p>
                                    Colaboramos contigo para optimizar tanto el tiempo como los costos de desarrollo. La creación de un prototipo no solo te brinda una representación tangible y temprana de tu producto final, sino que también nos permite evaluar y validar tus ideas antes de comprometernos con la construcción completa del producto.
                                </p>
                            </div>
                        </Fade>
                        <Zoom delay={600} triggerOnce>
                            <div className="imagen">
                                <Image src={imagen_costo} alt="imagen de meto" />
                            </div>
                        </Zoom>
                    </div>
                    <div className="section">
                        <Zoom delay={600} triggerOnce>
                            <div className="imagen">
                                <Image src={imagen_uso} alt="imagen de meto" />
                            </div>
                        </Zoom>
                        <Fade delay={200} direction="up" triggerOnce className="informacion">
                            <div >
                                <h6>Desarrollo MVP</h6>
                                <h2>Ponte en marcha</h2>
                                <p>
                                    Este representa el primer paso hacia la transformación digital de tu empresa. Aquí en nuestra compañía, facilitamos tu viaje en el desarrollo de software, asegurándonos de que estés completamente informado sobre el proceso y sepas exactamente qué esperar. Al elegir colaborar con nosotros, no solo estás contratando a un equipo de desarrolladores, sino que también estás seleccionando a un socio estratégico comprometido con el éxito de tu proyecto.
                                </p>
                            </div>
                        </Fade>
                    </div>
                    <div className="section">
                        <Fade delay={200} direction="up" triggerOnce className="informacion">
                            <div >
                                <h6>Soporte</h6>
                                <h2>Te tenemos cubierto</h2>
                                <p>
                                    Enfocamos nuestra atención en la seguridad, confiabilidad y respaldo de tu proyecto. Nuestro equipo se compromete a implementar medidas de seguridad de primer nivel, siguiendo las mejores prácticas de la industria y garantizando la encriptación de tus datos sensibles.
                                </p>
                            </div>
                        </Fade>
                        <Zoom delay={600} triggerOnce>
                            <div className="imagen">
                                <Image src={imagen_soport} alt="imagen de meto" />
                            </div>
                        </Zoom>
                    </div>
                </div>
            </SectionContainer>
        </>
    )
}

export default SectionInformacion

const SectionContainer = styled.section`
    padding-top: 120px;
    .container{
        max-width: 960px;
        margin-left: auto;
        margin-right: auto;
        .section{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 50px;
            margin-bottom: 124px;
            align-items: center;
            .imagen{
                display: flex;
                justify-content: center;
                align-items: center;

                img{
                    width: 100%;
                    max-width: 600px;
                    height: auto;
                }
            }
            .informacion{
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                h6{
                    font-size: 20px;
                    font-weight: 600;
                    line-height: 160%;
                    color: #0075FF;
                    margin: 20px 0;
                }
                h2{
                    color: #333;
                    font-size: 45px;
                    line-height: 1.2;
                    margin: 0;
                }
                p{
                    font-size: 20px;
                    margin-top: 30px;
                    color: #333;
                    line-height: 150%;
                    font-weight: 300;
                }
                @media (max-width: 991px){
                    order: -5;
                }
            }
            @media (max-width: 991px){
                grid-row-gap: 40px;
                grid-template-columns: 1fr;
                margin-bottom: 100px;
            }
        }
        @media (min-width: 1280px){
            max-width: 1170px;
        }
        @media (max-width: 991px){
            max-width: 740px;
            padding-left: 15px;
            padding-right: 15px;
        }
        @media (max-width: 767px){
            max-width: 540px;
        }
    }
    `