"use client"; 
import styled from 'styled-components'
import ButtonContacto from './ButtonContacto'
import ButtonServicios from './ButtonServicios'
import imagen_flecha from '@/assets/flecha.svg'
import { useEffect } from 'react'
import Image from 'next/image'

function SectionPrincipal() {

    useEffect(() => {
        const containerImagen = document.querySelector('.container-imagen') as HTMLElement;
        if (containerImagen) {
            const floatingEffect = () => {
                containerImagen.style.transform = 'translateY(-10px)';
                containerImagen.style.transition = 'transform 0.5s ease-in-out';
                setTimeout(() => {
                    containerImagen.style.transform = 'translateY(0)';
                }, 500);
            };
            setInterval(floatingEffect, 1000);
        }
    }, []);

    return (
        <>
            <SectionContainer id='Principal'>
                <div className="container">
                    <div className="container-info">
                        <h1>Optimiza tus operaciones y haga crecer su negocio con <span>DeepWit.</span></h1>
                        <p> En DeepWit, nos dedicamos a desarrollar soluciones tecnológicas personalizadas para     optimizar y automatizar tus procesos empresariales. ¿Quieres
                            llevar tu empresa al siguiente nivel? ¡Déjanos ayudarte!</p>
                    </div>
                    <div className='container-button'>
                        <ButtonContacto />
                        <ButtonServicios />
                    </div>
                    <div className="container-imagen">
                        <Image src={imagen_flecha} alt="" />

                    </div>
                </div>
            </SectionContainer>
        </>
    )
}

export default SectionPrincipal

const SectionContainer = styled.section`
  background-color: white;
  padding: 150px 0;
  position: relative;
    h1{
        font-size: 70px;
        span{
            color: #0075FF;
        }
        @media (max-width: 1070px){
            font-size: 60px;
        }
        @media (max-width: 768px){
            font-size: 50px;
        }
    }
    p{
        font-size: 22px;
        font-weight: 400;
        line-height: 160%;
        margin: 20px 0;
        @media (max-width: 1070px){
            font-size: 18px;
        }
    }
    .container{
        position:relative;
        color: #333;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        max-width: 900px;
        margin:auto;
        
        .container-info{
            text-align: center;
        }
        @media (max-width: 1070px){
            max-width: 750px;
        }
        @media (max-width: 880px){
            width: 100%;
        }
    }

    .container-imagen {
        position: absolute;
        top: 330px;
        left: -80px;
        width: 200px;
        height: 200px;
        img{
            width: 100%;
            height: 100%;
        }
        @media (max-width: 1070px){
            top: 300px;
            left: -64px;
            width: 150px;
            height: 150px;
        }
        @media (max-width: 880px){
            display: none;
        }
    }

    .container-button{
        
        @media (max-width: 880px){
            display: flex;
        }
    }
`