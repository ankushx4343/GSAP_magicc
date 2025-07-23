import React, { useEffect, useState } from 'react'
import { nutrientLists } from '../constants'
import { useMediaQuery } from 'react-responsive'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';

function Nutrition() {
    const ismobile=useMediaQuery({
        query:"(max-width:768px)"
    });

    const [list,setList]=useState(nutrientLists)
    useEffect(()=>{
        if(ismobile){
            setList(nutrientLists.slice(0,3))
        }else{
            setList(nutrientLists);
        }
    },[ismobile])

    useGSAP(()=>{
      const titleSplit=SplitText.create(".nutrition-title",{
        type:"chars",
      })

      const paraSplit=SplitText.create(".nutrition-section p",{
        type:"words, lines",
        linesClass:"paragraph-line"
      })

      const nutritionTL=gsap.timeline({
        scrollTrigger:{
            trigger:".nutrition-section",
            start:"top 40%",
         
        }
      })
      nutritionTL.from(titleSplit.chars,{
        yPercent:100,
        ease:"power1.inOut",
        stagger:0.02
    }).from(paraSplit.words,{
        yPercent:300,
        rotate:3,
        ease:"power1.inOut",
        stagger:0.02,
        duration:1
    })
     
        const titleTL=gsap.timeline({
            scrollTrigger:{
                trigger:".nutrition-section",
                start:"top 10%",
            }
        })
        titleTL.to(".nutrition-text-scroll",{
            duration:1,
            opacity:1,
            clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease:"power1.inOut",
        })

    })

  return (
    <div className='nutrition-section'>
        <img src='\images\slider-dip.png' alt='slider-dip' className='w-full object-cover'></img>
        <img src='\images\big-img.png' alt='big-img' className='big-img'></img>
        <div className='flex md:flex-row flex-col justify-between md:px-10 px-5 md:mt-0 mt-14 '>
                <div className='relative inline-block md:trasnlate-y-20'>
                    <div className='general-title relative flex flex-col justify-center items-center gap-24'>
                        <div className='overflow-hidden place-self-start'>
                            <h1 className='nutrition-title'>It still does</h1>
                        </div>
                        <div style={{
                            clipPath:"polygon(0% 0%, 0% 0%, 0% 98%, 0% 100%)"
                        }} className='nutrition-text-scroll'>
                            <div className=" bg-yellow-brown pb-6 md:pt-0 pt-3 md:px-5 px-3">
                                <h2 className='text-milk-yellow'> body good</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex md:justify-center items-center translate-y-5'>
                    <div className='md:max-w-xs max-w-md'>
                        <p className='text-lg md:text-right text-balance font-paragraph'>
                            milk contains array of nutrition,including calcium,vitamin D, and protein, and this is lactose free.
                        </p>
                    </div>
                </div>

                <div className='nutrition-box'>
                    <div className='list-wrapper'>
                        {list.map((nutrient,index)=>{
                          return  (
                            <div key={index} className='relative flex-1 col-center'>
                                <div>
                                    <p>{nutrient.label}</p>
                                    <p>up to</p>
                                    <p>{nutrient.amount}</p>
                                </div> 
                                {
                                    index!==list.length-1 &&(<div className='spacer-border'></div>)
                                }   
                            </div>   
                            )
                        })}
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Nutrition