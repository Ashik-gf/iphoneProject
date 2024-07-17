import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { heroVideo, smallHeroVideo } from "../utils"
import { useEffect, useState } from "react"

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)
  const handelVideosSet =()=>{
    if(window.innerWidth < 706){
      setVideoSrc(smallHeroVideo)
    }else{
      setVideoSrc(heroVideo)
    }
  }
  useEffect(()=>{
    window.addEventListener('resize', handelVideosSet);
    return ()=>{
      window.removeEventListener('resize', handelVideosSet)
    }
  },[])
   useGSAP(() => {
    gsap.to('#hero',{
opacity:1,
delay:1.5,
    })
    gsap.to('#cta',{
      opacity:1,
      y:-50,
      delay:1.5,
    })
  },[])
  return (
    <section className=" w-full nav-height bg-black relative">
      <div className=" w-full h-5/6 flex justify-center items-center flex-col">
        <p id="hero" className=" hero-title">iPhone 15 Pro Max</p>
        <div className=" md:w-10/12 w-9/12">
        <video className='pointer-events-none' autoPlay muted playsInline={true} key={videoSrc}>
          <source src={videoSrc} />
        </video>
        </div>

        <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20">
    <a href="#highlights" className="btn w-20 text-center">Buy</a>
    <p className=" font-normal text-3xl">From $199/month to $999</p>
        </div>
      </div>
    </section>
  )
}

export default Hero