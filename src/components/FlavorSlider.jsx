import { useGSAP } from "@gsap/react"
import { flavorlists } from "../constants"
import gsap from "gsap"
import { useRef } from "react"
import { useMediaQuery } from "react-responsive";

function FlavorSlider() {
  const sliderref=useRef();

  const isTablet=useMediaQuery({
    query:"(max-width:1024px)"
  })
  
  useGSAP(()=>{
    let scrollvalue=sliderref.current.scrollWidth-window.innerWidth;
  console.log(scrollvalue);

  if(!isTablet){
    const sliderTl= gsap.timeline({
      scrollTrigger:{
        trigger:".flavor-section",
        start:"top top",
        end:`+=${scrollvalue+1000}px`,
        scrub:true,
        pin:true,
        markers:true
      }
    })
    sliderTl.to(".flavor-section",{
      x:`-${scrollvalue+1000}px`,
      ease:"power1.in"
    })
  }

    const titlet1=gsap.timeline({
          scrollTrigger:{
            trigger:".flavor-section",
            start:"top top",
            end:"bottom 80%",
            scrub:true,
            markers:true,
          },
    })

    titlet1.to(".first-text-split",{
      xPercent:-30,
      ease:"power1.in"
    }).to(".flavor-text-scroll",{
      xPercent:-22,
      ease:"power1.in"
    },"<").to(".second-text-split",{
      xPercent:-10,
      ease:"power1.inOut"
    },"<")
  
  })
  return (
    <div ref={sliderref} className="slider-wrapper">
      <div className="flavors">
        {
          flavorlists.map((flavor)=>{
           return (
             <div key={flavor.name} className={`relative z-30 lg:w-[50vw] w-96 lg:h-[90vh] md:w-[90vw] md:h-[50] h-80 flex-none ml-2 ${flavor.rotation}`}>
              <img src={`/images/${flavor.color}-bg.svg`}
              className="absolute bottom-0"></img>

              <img src={`/images/${flavor.color}-drink.webp`}
              className="drinks"></img>

              <img src={`/images/${flavor.color}-elements.webp`}
              className="elements"></img>

              <h1>{flavor.name}</h1>
            </div>
           )
          })
        }
      </div>
    </div>
  )
}

export default FlavorSlider