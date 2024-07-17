import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { rightImg, watchImg } from '../utils/index';
import VideoCarousel from "./VideoCarousel";


const HighLight = () => {
useGSAP(()=>{
  gsap.to('#title',{
    opacity:1,
    y:0,
    delay:1.5,
    duration:1,
  })
  gsap.to('.link',{
    opacity:1,
    y:0,
    duration:1,
    stagger:0.25,

  })
},[])
  return (
    <section id='highlights'
    className=' w-screen overflow-hidden h-full common-padding bg-zinc-900'
    >
      <div className=" ">
        <div className=" mb-8 w-full md:flex items-end justify-between">
          <h1 id='title' className='section-heading'>Get the Highlights.</h1>
          <div className="flex items-e gap-5">
            <p className="link">Watch The flim
             <img src={watchImg}  alt="watch" className=" ml-2"/>
            </p>
            <p className="link">Watch The event.
             <img src={rightImg}  alt="watch" className=" ml-2"/>
            </p>
           
          </div>
         
        </div>
        <VideoCarousel />
      </div>
    </section>
  )
}

export default HighLight