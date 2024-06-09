"use client";

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import ButtonEnviar from './ButtonEnviar'
import imagen_naranja from '@/assets/flecha-naranja.svg'
import { useEffect } from 'react'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { userSchema } from '@/validations/userSchema'

type FormValues = {
    nombre: string;
    correo: string;
    empresa: string;
    telefono: number;
}

function SectionContacto() {

    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver: zodResolver(userSchema) });

    useEffect(() => {
        const containerImagen = document.querySelector('.container-imagen-naranja') as HTMLElement;
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
            <SectionContainer id='Contacto'>
                <div className="container">
                    <div className="informacion">
                        <div className="principal">
                            <h2>¿Tienes alguna pregunta?</h2>
                            <p>Si tienes alguna duda o necesitas información adicional, no dudes en contactarnos.</p>
                        </div>
                        <div className="direccion">
                            <p><FontAwesomeIcon icon={faLocationDot} className='location' /><span>Av. Insurgentes Sur 1234, Col. Del Valle, CDMX, México</span></p>
                        </div>
                        <div className="telefono">
                            <p><FontAwesomeIcon icon={faPhone} className='phone' />+52 55 1234 5678</p>
                        </div>
                        <div className="correo">
                            <p><FontAwesomeIcon icon={faEnvelope} className='email' />info@deepwit.com</p>
                        </div>
                        <div className="container-imagen-naranja">
                            <Image src={imagen_naranja} alt="" />
                        </div>
                    </div>
                    <div className="formulario">
                        <form id='form_contacto' onSubmit={handleSubmit(async data => { 
                            // llamado a la API
                            const res = await fetch('/api/Send', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(data)
                            });
                            console.log(res);
                            if (res.status === 200) {
                                // mostrar mensaje de exito
                                const successMessage = document.querySelector('.success-message') as HTMLElement;
                                successMessage.style.display = 'block';
                                // ocultar boton de enviar
                                const buttonEnviar = document.querySelector('.button-enviar') as HTMLElement;
                                buttonEnviar.style.display = 'none';
                                // limpiar formulario
                                const form = document.getElementById('form_contacto') as HTMLFormElement;
                                form.reset();
                            }else{
                                // mostrar mensaje de error
                                const errorMessage = document.querySelector('.error-message') as HTMLElement;
                                errorMessage.style.display = 'block';
                                // ocultar boton de enviar
                                const buttonEnviar = document.querySelector('.button-enviar') as HTMLElement;
                                buttonEnviar.style.display = 'none';
                                // limpiar formulario
                                const form = document.getElementById('form_contacto') as HTMLFormElement;
                                form.reset();
                            }
                         })}>
                            <div className="form-input">
                                <input type="text" id='nombre' placeholder="¿Cómo te llamas?"
                                    {...register('nombre')}
                                ></input>
                                {errors.nombre?.message && <SpanError>{errors.nombre.message}</SpanError>}
                            </div>
                            <div className="form-input">
                                <input type="text" id="empresa" placeholder="¿Cuál es tu empresa?"
                                    {...register('empresa')}
                                ></input>
                                {errors.empresa?.message && <SpanError>{errors.empresa.message}</SpanError>}
                            </div>
                            <div className="form-input">
                                <input type="email" id='correo' placeholder="¿Cuál es tu correo electrónico?"
                                    {...register('correo')}
                                ></input>
                                {errors.correo?.message && <SpanError>{errors.correo.message}</SpanError>}
                            </div>
                            <div className="form-input">
                                <input type="text" id='telefono' placeholder="¿Cuál es número de telefónico?"
                                    {...register('telefono')}
                                ></input>
                                {errors.telefono?.message && <SpanError>{errors.telefono.message}</SpanError>}
                            </div>
                            <textarea name="" id="" cols={30} rows={10} placeholder="Escribe tu mensaje..."></textarea>
                            <ButtonContainer className='button-enviar' type='submit'>Enviar mensaje</ButtonContainer>
                        </form>
                        <div className="success-message w-form-done">
                            <div>
                                <p>Mensaje enviado correctamente</p>
                            </div>
                        </div>
                        <div className="error-message w-form-fail">
                            <div>
                                <p>Error al enviar el mensaje</p>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionContainer>
        </>
    )
}

export default SectionContacto

const ButtonContainer = styled.button`
  background-color: #333;
  color: white;
  font-size: 18px;
  text-align: center;
  transform-style: preserve-3d;
  border-radius: 1000px;
  padding: 24px 40px;
  font-weight: 600;
  line-height: 1.111em;
  transition: transform .3s, background-color .3s;

  &:hover{
      background-color: #0075FF;
      transform: scale(.95);
  }
  &:focus{
      border: none;
      outline: none;
  }
    `

const SpanError = styled.span`
    color: red;
    font-size: 0.8rem;
`

const SectionContainer = styled.section`
    padding-top: 155px;
    padding-bottom: 155px;
    .container{
        max-width: 960px;
        margin-left: auto;
        margin-right: auto;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 50px;
        .formulario{
            display: flex;
            flex-direction: column;
            justify-content: center;
            border-radius: 8px;
            padding: 32px;
            position: relative;
            box-shadow: 0 15px 45px -5px rgba(0, 0, 0, .07);
            form{
                grid-column-gap: 20px;
                grid-row-gap: 24px;
                grid-template-rows: auto;
                grid-template-columns: 1fr 1fr;
                grid-auto-columns: 1fr;
                align-self: stretch;
                display: grid;
                .form-input{
                    display: flex;
                    flex-direction: column;
                    input{
                        min-height: 68px;
                        background-color: #f5f7fa;
                        color: #333;
                        border: 1px solid rgba(0, 0, 0, 0);
                        border-radius: 1000px;
                        margin-bottom: 0;
                        padding-left: 27px;
                        padding-right: 27px;
                        font-size: 18px;
                        transition: border-color .3s, background-color .3s, color .3s;
                        &:hover{
                            border-color: #333;
                        }
                    }
                    
                }

                textarea{
                        max-height: 200px;
                        min-height: 134px;
                        background-color: #f5f7fa;
                        color: #333;
                        border: 1px solid rgba(0, 0, 0, 0);
                        border-radius: 20px;
                        margin-bottom: 0;
                        padding: 19px 27px;
                        font-size: 18px;
                        transition: border-color .3s, background-color .3s, color .3s;
                        grid-area: span 1 / span 2 / span 1 / span 2;
                        &:hover{
                            border-color: #333;
                        }
                    }
                @media (max-width: 767px){
                    grid-template-columns: 1fr;
                    grid-row-gap: 24px;
                    input, textarea{
                        grid-column: 1 / 1;
                    }
                }
            }

            .success-message{
                background-color: #f0f9eb;
                color: #2d8621;
                padding: 15px;
                border-radius: 8px;
                margin-top: 20px;
                p{
                    margin: 0;
                    font-size: 16px;
                }
            }

            .w-form-done{
                display: none;
            }

            .error-message{
                background-color: #fdecea;
                color: #e55353;
                padding: 15px;
                border-radius: 8px;
                margin-top: 20px;
                p{
                    margin: 0;
                    font-size: 16px;
                }
            }

            .w-form-fail{
                display: none;
            }
        }
        .informacion{
            display: flex;
            flex-direction: column;
            padding: 0 20px;
            position: relative;
            .principal{
                h2{
                    color: #333;
                    ext-align: left;
                    margin-top: 0;
                    margin-bottom: 20px;
                    font-size: 40px;
                    line-height: 120%;
                }
                p{
                    margin-bottom: 20px;
                    font-size: 20px;
                    font-weight: 500;
                    color: #333;
                    line-height: 1.5;
                }
            }
            .telefono, .correo, .direccion{
                h2{
                    font-size: 24px;
                    font-weight: 700;
                    color: #000;
                    margin-bottom: 16px;
                }
                p{
                    margin: 6px 0;  
                    font-size: 20px;
                    font-weight: 500;
                    color: #0075FF;
                    line-height: 1.5;
                    span{
                        color: #333;
                    }
                    .location{
                        margin-right: 15px;
                    }
                    .phone{
                        margin-right: 15px;
                    }
                    .email{
                        margin-right: 15px;
                    }
                }
            }
            .container-imagen-naranja{
                position: absolute;
                bottom: -25px;
                right: 0px;
                width: 300px;
                height: 300px;
                img{
                    width: 100%;
                    height: 100%;
                }
                @media (max-width: 1280px){
                    display: none;
                }
            }
            @media (max-width: 991px){
                order: -5;
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