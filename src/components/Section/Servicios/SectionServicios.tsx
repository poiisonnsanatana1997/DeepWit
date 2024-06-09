import React from 'react'
import styled from 'styled-components'
import Cards from './Cards'
import { Bounce, Fade, Flip, Hinge, JackInTheBox, Roll, Rotate, Slide, Zoom } from "react-awesome-reveal";

function SectionServicios() {
    return (
        <>
            <SectionContainer id='Servicios'>
                <div className="container">
                    <div className="container-info">
                        <Fade cascade direction="up" triggerOnce>
                            <h6>Caracteristicas pricipales</h6>
                            <h2>Descubriendo nuestros diversos servicios</h2>
                        </Fade>
                    </div>
                    <div className="container-cards">
                        <Cards />
                    </div>
                </div>
            </SectionContainer>
        </>
    )
}

export default SectionServicios

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