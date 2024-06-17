import React from 'react'
import styled from 'styled-components'

function ButtonContacto() {
  return (
    <>
      <ButtonContainer href='#Contacto'>Hablemos</ButtonContainer>
    </>
  )
}

export default ButtonContacto


const ButtonContainer = styled.a`
  background-color: #333;
  color: white;
  font-size: 18px;
  text-align: center;
  transform-style: preserve-3d;
  border-radius: 1000px;
  padding: 20px 40px;
  font-weight: 600;
  line-height: 1.111em;
  margin: 0 15px;
  transition: transform .3s, background-color .3s;

  @media (max-width: 880px){
      line-height: 2.111em;
  }
  &:hover{
      background-color: #0075FF;
      transform: scale(.95);
  }
  &:focus{
      border: none;
      outline: none;
  }
    `