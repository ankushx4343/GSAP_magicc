import React from 'react'
import { cards } from '../constants'

function TestimonialsSection() {
  return (
    <section className=' testimonials-section'>
        <div className='absolute size-full flex flex-col items-center pt-[5vw]'>
            <h1 className='text-black first-title'>what's</h1>
            <h1 className='text-light-brown sec-title'>Everyone</h1>
            <h1 className='text-black third-title'>talking</h1>
        </div>

        <div className='pin-box'>
            {cards.map((card,key)=>{
                <div key={key} className={`vd-card ${card.translation} ${card.rotation}`} >
                    <video src={card.src}
                    playsInline
                    loop
                    muted
                    className='size-full object-cover'>
                        
                    </video>
                </div>
            })}
        </div>
    </section>
  )
}

export default TestimonialsSection