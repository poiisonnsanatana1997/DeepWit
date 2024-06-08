import React from 'react'
import styled from 'styled-components'
import imagen_web from '@/assets/web.svg'
import imagen_movil from '@/assets/movil.svg'
import imagen_interacciones from '@/assets/nube.svg'
import Image from 'next/image'
import { Bounce, Fade, Flip, Hinge, JackInTheBox, Roll, Rotate, Slide, Zoom } from "react-awesome-reveal";

function Cards() {
    return (
        <>
            <CardContainer>
                <Fade delay={150} direction="up" triggerOnce>
                    <div className="card">
                        <div className="card-icon">
                            <Image src={imagen_web} alt="imagen de web" />
                        </div>
                        <h5>Aplicación Web</h5>
                        <div className="card-info">
                            <div className="info-a1">
                                <div className="info-a2 line">
                                    <div className="info-a3">
                                        <h6>1. Autenticación de usuario</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="info-a1">
                                <div className="info-a2 line">
                                    <div className="info-a3">
                                        <h6>2. Perfiles de usuario</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="info-a1">
                                <div className="info-a2 line">
                                    <div className="info-a3">
                                        <h6>3. Notificaciones automáticas</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="info-a1">
                                <div className="info-a2 line">
                                    <div className="info-a3">
                                        <h6>4. Mensajería dentro de la aplicación</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="info-a1">
                                <div className="info-a2 line">
                                    <div className="info-a3">
                                        <h6>5. Servicios de geolocalización</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="info-a1">
                                <div className="info-a2 line">
                                    <div className="info-a3">
                                        <h6>6. Redes sociales</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
                <Fade delay={300} direction="up" triggerOnce>
                    <div className="card">
                        <div className="card-icon">
                            <Image src={imagen_movil} alt="imagen de movil" />
                        </div>
                        <h5>Aplicación  Movil</h5>
                        <div className="card-info">
                            <div className="info-a1">
                                <div className="info-a2 line">
                                    <div className="info-a3">
                                        <h6>1. Autenticación de usuario</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="info-a1">
                                <div className="info-a2 line">
                                    <div className="info-a3">
                                        <h6>2. Perfiles de usuario</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="info-a1">
                                <div className="info-a2 line">
                                    <div className="info-a3">
                                        <h6>3. Notificaciones automáticas</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="info-a1">
                                <div className="info-a2 line">
                                    <div className="info-a3">
                                        <h6>4. Mensajería dentro de la aplicación</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="info-a1">
                                <div className="info-a2 line">
                                    <div className="info-a3">
                                        <h6>5. Servicios de geolocalización</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="info-a1">
                                <div className="info-a2 line">
                                    <div className="info-a3">
                                        <h6>6. Redes sociales</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
                <Fade delay={450} direction="up" triggerOnce>
                    <div className="card">
                        <div className="card-icon">
                            <Image src={imagen_interacciones} alt="imagen de interacciones" />
                        </div>
                        <h5>Interacciones</h5>
                        <div className="card-info">
                            <div className="info-a1">
                                <div className="info-a2 line">
                                    <div className="info-a3">
                                        <h6>1. Integración de aplicaciones de terceros</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="info-a1">
                                <div className="info-a2 line">
                                    <div className="info-a3">
                                        <h6>2. Soporte de API</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="info-a1">
                                <div className="info-a2 line">
                                    <div className="info-a3">
                                        <h6>3. Compatibilidad con CRM</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="info-a1">
                                <div className="info-a2 line">
                                    <div className="info-a3">
                                        <h6>4. Integración de la pasarela de pago</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="info-a1">
                                <div className="info-a2 line">
                                    <div className="info-a3">
                                        <h6>5. Sincronización del marketing por correo electrónico</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="info-a1">
                                <div className="info-a2 line">
                                    <div className="info-a3">
                                        <h6>6. Compatibilidad de medios</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
            </CardContainer>
        </>
    )
}

export default Cards

const CardContainer = styled.div`
    display: grid;
    grid-auto-columns: 1fr;
    grid-column-gap: 32px;
    grid-row-gap: 32px;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr;

    @media screen and (max-width: 991px) {
        grid-template-columns: 1fr;
    }

    .card{
        z-index: 1;
        grid-column-gap: 14px;
        grid-row-gap: 14px;
        color: var(--black);
        text-align: left;
        flex-direction: column;
        flex: 270px;
        justify-content: center;
        align-items: flex-start;
        padding: 30px;
        display: flex;
        position: relative;

        .card-icon{
            background-color: #bcebff;
            background-image: linear-gradient(135deg, rgba(0, 0, 0, 0), #fff);
            border: 1px #000;
            border-radius: 100px;
            flex: none;
            justify-content: center;
            align-items: center;
            width: 170px;
            height: 170px;
            margin-bottom: 16px;
            display: flex;
        }
        h5{
            letter-spacing: -.03em;
            font-size: 32px;
            font-weight: 600;
            line-height: 1.2;
            margin: 0;
        }
        .card-info{
            display: grid;
            grid-auto-columns: 1fr;
            justify-content: center;
            grid-column-gap: 0px;
            grid-row-gap: 0px;
            padding: 0;
            grid-template-rows: auto auto auto auto auto;
            grid-template-columns: 1fr;
            .info-a1{
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
                display: flex;
                .info-a2{
                    text-align: left;
                    border: 1px #000;
                    border-radius: 0px;
                    flex-flow: row;
                    flex: 60px;
                    justify-content: space-between;
                    align-items: center;
                    width: 100%;
                    padding: 0;
                    display: flex;
                    position: relative;
                    border-bottom-style: solid;
                    border-bottom-color: #cfcfcf;
                    .info-a3{
                        margin: 0;
                        h6{
                            color: #333;
                            margin-top: 0;
                            line-height: 1.2;
                            letter-spacing: -.03em;
                            margin-bottom: 0;
                            font-family: Bdogrotesk, sans-serif;
                            font-size: 18px;
                            font-weight: 400;
                        }
                }
            }
        }
    }
`