import FlavorSlider from "../components/FlavorSlider"
import FlavorTitle from "../components/FlavorTitle"


function Flavorsection() {
  return (
    <section className='flavor-section'>
        <div className='h-full flex lg:flex-row flex-col items-center relative'>
            <div className='lg:[57%] flex-none h-80 lg:h-full lg:mt-20 xl:mt-0'>
                <FlavorTitle/>
            </div>
            <div className="h-full">
              <FlavorSlider />
            </div>

        </div>
    </section>
  )
}

export default Flavorsection