import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/all"

function Herosection() {
    useGSAP(()=>{
        const titleSplit=SplitText.create(".hero-title",{
            type:"chars",
        })
        const t1=gsap.timeline({
            delay:1,
        })
        t1.to(".hero-content",{
            opacity:1,
            y:0,
            ease:"power2.inOut",
        }).to(".hero-text-scroll",{
            duration:1,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease:"circ.out"
        },"-=0.5").from(titleSplit.chars,{
            yPercent:200,
            stagger:0.05,
            ease:"power2.out",
        },"-=0.5")

        const heroTL=gsap.timeline({
            scrollTrigger:{
                trigger:".hero-container",
                start:"1% top",
                end:"bottom top",
                scrub:true,
               
            }
        })
        heroTL.to(".hero-container",{
            rotate:7,
            scale:0.9,
            yPercent:30,
            ease:"power1.inOut"
        })
    })              
    return (
        <section className="bg-main-bg">
            <div className="hero-container">
                <img
                    src="/images/static-img.png"
                    alt="Hero"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 object-auto scale-100 md:scale-150"
                />
                <div className="hero-content opacity-0">
                    <div className="overflow-hidden">
                        <h1 className="hero-title">Freaking Delicious</h1>
                    </div>
                    <div style={{
                        clipPath: "polygon(50% 0,50% 0,50% 100%,50% 100%)"
                    }}
                        className="hero-text-scroll"
                    >
                        <div className="hero-subtitle">
                            <h1>Protein + Caffine</h1>"
                        </div>
                    </div>
                    <h2>Live life to the fullest  with SPYLT: Shatter boredom and embrace your inner kid with every deliciously smooth chug.
                    </h2>
                    
                    <div className="hero-button">
                        <p>chug a spylt</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Herosection