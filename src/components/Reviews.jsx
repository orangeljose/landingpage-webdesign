import React from 'react'

import {
    RiDoubleQuotesL,
    RiDoubleQuotesR,
  } from "react-icons/ri";

const Reviews = () => {
  return (
    <div className='p-8 flex flex-col gap-8 bg-gray-100'>
        <h1 className='text-[40px] text-center font-black'>Let's Hear What They Says</h1>
        <div className='flex justify-center'>
            <RiDoubleQuotesL className='text-5xl text-primary'/>
            <p className='max-w-2xl text-center text-gray-500 gap-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vel lobortis tincidunt fames quisque mauris at diam. Nullam morbi ipsum turpis amet id posuere torto quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
            </p>
            <RiDoubleQuotesR className='text-5xl text-primary'/>
        </div>
        <div className='flex flex-col items-center justify-center gap-8'>
          <div className='flex flex-row items-center justify-center gap-8 md:gap-12'>
            <img
              src="https://img.freepik.com/foto-gratis/retrato-hombre-afroamericano-inteligente-profesional-pie-manos-cruzadas-sobre-pecho-pose-confianza_176420-33861.jpg"
              className="w-8 h-8 md:w-14 md:h-14 object-cover rounded-full"
            />
            <img
              src="https://img.freepik.com/foto-gratis/hombre-barbudo-feliz-sorprendido-camisa-apuntando-lejos_171337-5021.jpg"
              className="w-10 h-10 md:w-16 md:h-16 object-cover rounded-full"
            />
            <img
              src="https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg"
              className="w-12 h-12 md:w-20 md:h-20 object-cover rounded-full ring-4 ring-primary p-1 bg-white"
            />
            <img
              src="https://img.freepik.com/foto-gratis/feliz-joven_1098-20869.jpg"
              className="w-10 h-10 md:w-16 md:h-16 object-cover rounded-full"
            />
            <img
              src="https://img.freepik.com/foto-gratis/negocios-finanzas-empleo-concepto-mujeres-emprendedoras-exitosas-joven-empresaria-segura-anteojos-mostrando-gesto-pulgar-arriba-sostenga-computadora-portatil-garantice-mejor-calidad-servicio_1258-59118.jpg"
              className="w-8 h-8 md:w-14 md:h-14 object-cover rounded-full"
            />
          </div>
          <div>
            <h3 className='font-bold text-center text-[24px]'>Vanessa Astilla</h3>
            <h5 className='text-center text-[20px] text-gray-500'>Founder of Power</h5>
          </div>
        </div>
    </div>
  )
}

export default Reviews