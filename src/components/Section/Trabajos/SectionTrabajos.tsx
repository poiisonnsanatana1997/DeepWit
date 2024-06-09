import React from 'react'
import styled from 'styled-components'
import DirectionAwareHoverDemo from './DirectionAwareHoverDemo'
import Trabajo from "@/assets/Dashboard.svg"
import RFID from "@/assets/rfid.svg"
import { Bounce, Fade, Flip, Hinge, JackInTheBox, Roll, Rotate, Slide, Zoom } from "react-awesome-reveal";

function SectionTrabajos() {
    return (
        <>
            <SectionContainer id='Soluciones'>
                <div className="container">
                    <Slide cascade direction='up' className="container-info">
                        <h6>Nuestro Trabajo</h6>
                        <h2>Productos haciendo la diferencia</h2>
                    </Slide>
                    <div className="container-cards">
                        <JackInTheBox delay={200} triggerOnce>
                            <DirectionAwareHoverDemo
                                imageUrl={Trabajo}
                                title='Sistema de gestión de almacenes'
                                subtitle='WMS'
                            />
                        </JackInTheBox>
                        <JackInTheBox delay={200} triggerOnce>
                            <DirectionAwareHoverDemo
                                imageUrl={RFID}
                                title='Sistema de identificación por radiofrecuencia'
                                subtitle='RFID'
                            />
                        </JackInTheBox>
                    </div>
                </div>
            </SectionContainer>
        </>
    )
}

export default SectionTrabajos

const SectionContainer = styled.section`
    background-color: rgb(243 246 248);
    color: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 120px 0;
    .container{
        max-width: 960px;
        .container-info{
            text-align: center;
            @media (max-width: 768px){
                width: 100%;
            }
            h2{
                font-size: 70px;
                margin: 20px 0;
                @media (max-width: 768px){
                    font-size: 50px;
                }
            }
            h6{
                font-size: 20px;
                font-weight: 600;
                line-height: 160%;
                color: #0075FF;
                margin: 20px 0;
            }
        }
        .container-cards{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 50px;
            @media (max-width: 991px){
                grid-template-columns: repeat(1, 1fr);
                gap: 0px;
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
            padding-left: 15px;
            padding-right: 15px;
        }
    }
`
