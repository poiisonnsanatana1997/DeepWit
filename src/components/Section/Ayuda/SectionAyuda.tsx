import React from 'react'
import styled from 'styled-components'
import Acordeon from '@/components/Section/Ayuda/Acordeon'
import { Bounce, Fade, Flip, Hinge, JackInTheBox, Roll, Rotate, Slide, Zoom } from "react-awesome-reveal";

function SectionAyuda() {
    return (
        <>
            <SectionContainer>
                <div className="container">
                    <div className="informacion">
                        <Slide cascade direction='left' triggerOnce>
                            <h2>Si necesitas ayuda estamos aquí para ti.</h2>
                            <p>Brindamos servicios profesionales a clientes en un área particular de especialización. Contamos con un equipo de expertos en diversos campos que pueden ofrecer asesoramiento sobre un proyecto o problema.</p>
                            <p>¿Aún tienes alguna pregunta?</p>
                            <div className="enlace-contacto">
                                <a href="#Contacto">Contáctanos</a>
                            </div>
                        </Slide>
                    </div>
                    <div className="preguntas">
                        <Acordeon></Acordeon>
                    </div>
                </div>
            </SectionContainer>
        </>
    )
}

export default SectionAyuda

const SectionContainer = styled.section`
    padding-top: 125px;
    padding-bottom: 125px;
    background-color: #1b1d1f;
    .container {
        max-width: 960px;
        margin-left: auto;
        margin-right: auto;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 50px;
        .informacion {
            display: flex;
            flex-direction: column;
            position: relative;
            h2 {
                font-size: 40px;
                line-height: 120%;
                color: #fff;
                margin-bottom: 20px;
            }
            p {
                margin-bottom: 20px;
                color: var(--gray-blue);
                text-align: left;
                margin-bottom: 0;
                font-size: 1.125rem; /* 18px */
                line-height: 1.75rem; /* 28px */
                margin-bottom: 15px;
            }
            .enlace-contacto {
                a {
                    color: var(--blue-dw);
                    text-decoration: none;
                    font-weight: 600;
                    &:hover {
                        text-decoration: underline;
                    }
                }
            }
        }
        .preguntas {
            display: flex;
            flex-direction: column;
            justify-content: center;
            .pregunta {
                margin-bottom: 20px;
                h3 {
                    font-size: 1.5rem;
                    margin-bottom: 10px;
                    color: #fff;
                }
                p {
                    font-size: 1rem;
                    color: #fff;
                }
            }
        }
        @media (min-width: 1280px){
            max-width: 1170px;
        }
        @media (max-width: 991px){
            max-width: 740px;
            padding-left: 15px;
            padding-right: 15px;
            grid-template-columns: repeat(1, 1fr);
            gap: 40px;
        }
        @media (max-width: 767px){
            max-width: 540px;
        }
    }   
`