import React from 'react'
import Marquee from 'react-fast-marquee'
import Image from 'next/image'
import airbnb from '@/assets/Carrusel/6.svg'
import apple from '@/assets/Carrusel/1.svg'
import disney from '@/assets/Carrusel/8.svg'
import facebook from '@/assets/Carrusel/2.svg'
import quora from '@/assets/Carrusel/7.svg'
import samsung from '@/assets/Carrusel/5.svg'
import sass from '@/assets/Carrusel/3.svg'
import spark from '@/assets/Carrusel/10.svg'
import react from '@/assets/Carrusel/4.svg'

function SectionTecnologias() {
  return (
    <>
      <section className="flex justify-center items-center">
          <Marquee gradient pauseOnHover={true} className="rounded-2xl py-3 overflow-hidden grid  ">
            <div className=" flex pr-10 flex-col justify-center items-center h-[200px] mx-5 ">
              <Image src={airbnb} alt="" className='w-16'/>
            </div>

            <div className=" flex pr-10 flex-col justify-center items-center h-[200px] mx-5 ">
              <Image src={apple} alt="" className='w-16'/>
            </div>

            <div className=" flex pr-10 flex-col justify-center items-center h-[200px] mx-5 ">
              <Image src={disney} alt="" className='w-16'/>
            </div>

            <div className=" flex pr-10 flex-col justify-center items-center h-[200px] mx-5 ">
              <Image src={facebook} alt="" className='w-16'/>
            </div>

            <div className=" flex pr-10 flex-col justify-center items-center h-[200px] mx-5 ">
              <Image src={quora} alt="" className='w-16'/>
            </div>

            <div className=" flex pr-10 flex-col justify-center items-center h-[200px] mx-5 ">
              <Image src={react} alt="" className='w-16'/>
            </div>

            <div className=" flex pr-10 flex-col justify-center items-center h-[200px] mx-5 ">
              <Image src={sass} alt="" className='w-16'/>
            </div>

            <div className=" flex pr-10 flex-col justify-center items-center h-[200px] mx-5 ">
              <Image src={samsung} alt="" className='w-16'/>
            </div>

            <div className=" flex pr-10 flex-col justify-center items-center h-[200px] mx-5 ">
              <Image src={spark} alt="" className='w-16'/>
            </div>
          </Marquee>
      </section>
    </>
  )
}

export default SectionTecnologias
