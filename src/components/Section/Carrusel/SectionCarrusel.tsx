import React from 'react'
import styled from 'styled-components'
import Tecnologias from '@/components/Section/Carrusel/SectionTecnologias'

function SectionCarrusel() {
    return (
        <>
            <SectionContainer>
                <div className="container">
                    <Tecnologias />
                </div>
            </SectionContainer>
        </>
    )
}

export default SectionCarrusel

const SectionContainer = styled.section`
    .container {
        max-width: 960px;
        margin-left: auto;
        margin-right: auto;
        overflow: hidden;
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
