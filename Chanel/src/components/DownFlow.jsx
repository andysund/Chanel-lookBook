import './DownFlow.css'
import backOne from '../assets/carousel/back-one.webp'
import frontFive from '../assets/carousel/front-five.webp'
import lowerOne from '../assets/carousel/lower-two.webp'
import sideTwo from '../assets/carousel/side-two.webp'
function DownFlow() {
  return (
    <>
    <div className="downflow-background">
       <div className="img-background">
        <img src={backOne} alt="Back-one"/>
       </div>
       <div className="img-background">
        <img src={frontFive} alt="front-five"/>
       </div>
       <div className="img-background">
        <img src={lowerOne} alt="lower-one"/>
       </div>
       <div className="img-background">
        <img src={sideTwo} alt="side-two"/>
       </div>
    </div>

    </>
  )
}

export default DownFlow