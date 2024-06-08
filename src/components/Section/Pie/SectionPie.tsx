import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareXTwitter, faSquareInstagram, faSquareFacebook } from '@fortawesome/free-brands-svg-icons'

function SectionPie() {
    return (
        <>
            <SectionContainer>
                <div className="footer">
                    <div className="info">
                        <h2>Deepwit</h2>
                        <p>Deepwit es una empresa de tecnología que se enfoca en la creación de soluciones digitales para empresas y emprendedores.</p>
                    </div>
                    <div className="redes">
                        <h2>Redes sociales</h2>
                        <div className='icon-redes'>
                            <a><FontAwesomeIcon icon={faSquareFacebook} /></a>
                            <a><FontAwesomeIcon icon={faSquareInstagram} /></a>
                            <a><FontAwesomeIcon icon={faSquareXTwitter} /></a>
                        </div>
                    </div>
                </div>
                <div className="footer-small">
                    <h3>Hecho por DeepWit 2024. Todos los derechos reservados.</h3>
                </div>
            </SectionContainer>
        </>
    )
}

export default SectionPie

const SectionContainer = styled.footer`
    padding-top: 120px;
    padding-bottom: 120px;
    background-color: #F2F2F2;
    .footer{
        max-width: 1316px;
        margin-left: auto;
        margin-right: auto;
        padding-left: 24px;
        padding-right: 24px;
        padding-bottom: 50px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 50px;
        .info{
            h2{
                font-size: 24px;
                font-weight: 700;
                margin-bottom: 24px;
            }
            p{
                font-size: 16px;
                font-weight: 400;
                line-height: 1.5;
            }
        }
        .redes{
            h2{
                font-size: 24px;
                font-weight: 700;
                margin-bottom: 24px;
            }
            p{
                font-size: 16px;
                font-weight: 400;
                line-height: 1.5;
            }
            .icon-redes{
                display: flex;
                gap: 20px;
                a{
                    font-size: 30px;
                    color: #000;
                    cursor: pointer;
                    &:hover{
                        color: var(--blue-dw);
                    }
                }
            }
        }
    }
    .footer-small{
        max-width: 1316px;
        margin-left: auto;
        margin-right: auto;
        padding-left: 24px;
        padding-right: 24px;
        display: flex;
        justify-content: start;
        align-items: center;
        h3{
            font-size: 16px;
            font-weight: 400;
            line-height: 1.5;
        }
    }
`
