import React from 'react'
import styled from 'styled-components'

function ButtonServicios() {
  return (
    <>
      <ButtonContainer href='#Servicios'>Nuestros Servicios</ButtonContainer>
    </>
  )
}

export default ButtonServicios

const ButtonContainer = styled.a`
  background-color: #fff;
  color: #333;
  font-size: 18px;
  text-align: center;
  transform-style: preserve-3d;
  border: 1px solid #333;
  border-radius: 1000px;
  padding: 20px 40px;
  font-weight: 600;
  line-height: 1.111em;
  margin: 0 15px;
  transition: transform .3s, background-color .3s;

  &:hover{
      color: white;
      background-color: #0075FF;
      transform: scale(.95);
  }
  &:focus{
      border: none;
      outline: none;
  }
    `