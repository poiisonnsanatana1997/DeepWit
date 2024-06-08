"use client"; 

import React, { useState } from 'react'
import styled from 'styled-components'
import BurguerButton from './BurguerButton'
import useMediaQuery from './useMediaQuery'

function Navbar() {
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    setClicked(!clicked)
  }

  const isMobile = useMediaQuery('(max-width: 768px)')

  if (!isMobile && clicked) {
    setClicked(false)
  }

  return (
    <>
      <NavContainer>
        <div className="container">
          <a className='Nombre-Empresa' href='#Principal'><h2>Deep<span className={`${clicked ? 'active' : ''}`}>Wit</span></h2></a>
          <div className={`links ${clicked ? 'active' : ''}`}>
            <a onClick={handleClick} href="#Servicios">Servicios</a>
            <a onClick={handleClick} href="#Soluciones">Soluciones</a>
            <a onClick={handleClick} href="#Contacto">Contacto</a>
          </div>
          <div className='burguer'>
            <BurguerButton clicked={clicked} handleClick={handleClick} />
          </div>
          <BgDiv className={`initial ${clicked ? 'active' : ''}`}></BgDiv>
        </div>

      </NavContainer>
    </>
  )
}

export default Navbar


const NavContainer = styled.nav`
  background-color: #fff;
  position: fixed;
  right: 0;
  left: 0;
  z-index: 100;
  .container{
    padding: .9rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1316px;
    margin: auto;
    .Nombre-Empresa{
      text-decoration: none;
      margin:0;
      cursor: pointer;
      h2{
        color: #0075FF;
        font-weight: 700;
        margin: 0;
        margin-right: 1rem;
        margin-left: 1rem;
        font-size: 1.5rem;
        span{
          color: #333;
        }
        .active{
          color: #fff;
        }
      }
    }
    
    a{
      color: white;
      text-decoration: none;
      margin-right: 1rem;
      margin-left: 1rem;
    }
    .links{
      position: absolute;
      top: -700px;
      left: -2000px;
      right: 0;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
      transition: all .5s ease;
      a{
        color: white;
        font-size: 2rem;
        display: block;
      }
      @media(min-width: 768px){
        position: initial;
        margin: 0;
        display: block;
        a{
          font-size: 18px;
          color: #333;
          display: inline;
          &:hover{
            color: #0075FF;
          }
        }
      }
    }
    .links.active{
      width: 100%;
      display: block;
      position: fixed;
      margin-left: auto;
      margin-right: auto;
      top: 30%;
      left: 0;
      right: 0;
      text-align: center;
      a{
        font-size: 2rem;
        margin-top: 1rem;
        color: white;
      }
    }
    .burguer{
      @media(min-width: 768px){
        display: none;
      }
    }
  }
  
`

const BgDiv = styled.div`
  background-color: #222;
  position: fixed;
  top: -2000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ;
  
  &.active{
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`