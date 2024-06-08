import React from 'react'
import styled from 'styled-components'
// ejecuta el onSubmit del formulario
type ButtonContactoProps = {
  onSubmit: () => void;
};

function ButtonContacto(props: ButtonContactoProps) {
  const { onSubmit } = props;

  return (
    <>
      <ButtonContainer onClick={onSubmit}>Enviar mensaje</ButtonContainer>
    </>
  );
}
// function ButtonContacto() {
//   return (
//     <>
//       <ButtonContainer>Enviar mensaje</ButtonContainer>
//     </>
//   )
// }

export default ButtonContacto


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