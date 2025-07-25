import { useGSAP } from '@gsap/react'
import Clip_Path_Title from '../components/Clip_Path_Title'
import gsap from 'gsap'
import VideoPinSection from '../components/VideoPinSection'

function BenefitSection() {
    
    useGSAP(()=>{
        const revealTl=gsap.timeline({
            delay:1,
            scrollTrigger:{
                trigger:".benefit-section",
                start:"top 60%",
                end:"top top",
                scrub:1.5,
            }
        })

        revealTl.to(".benefit-section .first-title",{
            clipPath:"polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
            duration:1,
            ease:"circ.inOut",
            opacity:1
        }).to(".benefit-section .second-title",{
            clipPath:"polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
            duration:1,
            ease:"circ.inOut",
            opacity:1
        }).to(".benefit-section .third-title",{
            clipPath:"polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
            duration:1,
            ease:"circ.inOut",
            opacity:1
        }).to(".benefit-section .fourth-title",{
            clipPath:"polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
            duration:1,
            ease:"circ.inOut",
            opacity:1
        })
    })
  return (
    <div className='benefit-section'>
        <div className='container mx-auto pt-20'>
            <div className='col-center'>
                <p>Unlock the Advantages:<br/>Explore the key Benefits of Choosing SPYLT</p>
            
            <div className='mt-20 col-center '>
                <Clip_Path_Title 
                title={"shelf stable"}
                color={"#faeade"}
                bg={"#c88e64"}
                className={"first-title"}
                borderColor={"#222123"}
                />

                 <Clip_Path_Title 
                title={"protein + caffeine"}
                color={"#222123"}
                bg={"#faeade"}
                className={"second-title"}
                borderColor={"#222123"}
                />

                 <Clip_Path_Title 
                title={"Infinitely recyclable"}
                color={"#faeade"}
                bg={"#7F3B2D"}
                className={"third-title"}
                borderColor={"#222123"}
                />

                 <Clip_Path_Title 
                title={"lactose free"}
                color={"#222123"}
                bg={"#FED775"}
                className={"fourth-title"}
                borderColor={"#222123"}
                />
            </div>
            <div className='md:mt-0 mt-10'>
                <p>
                    Add much more...
                </p>
            </div>
            </div>
            <div className='relative overlay-box'>
                <VideoPinSection/>
            </div>
        </div>
    </div>
  )
}

export default BenefitSection