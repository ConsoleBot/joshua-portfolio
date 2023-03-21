import pc from './assets/joshua-pc.png'
import tech from './assets/tech.png'
import { useState, useEffect } from "react"
import './Hero.scss';

function Hero() {
  const [text1, setText1] = useState("")
  const [fullText1, setFullText1] = useState(
    `A web developer who specializes Frontend design.
    `
  )
  const [index1, setIndex1] = useState(0);

  useEffect(() => {
    if (index1 < fullText1.length) {
      setTimeout(() => {
        setText1(text1 + fullText1[index1])
        setIndex1(index1 + 1)
      }, 100)
    }
  }, [index1])

  return  <div className="h-[450px] md:h-[600px] px-[16px] lg:px-[120px] relative">
            <div className="h-full w-full absolute bg-contain left-0 top-0 bg-no-repeat bg-center opacity-[20%]" style={{backgroundImage: `url(${tech})`}}></div>
            <div className="animate-bounceHero m-[auto] h-full w-[90%] lg:w-[50%] bg-contain bg-no-repeat bg-center relative"  style={{backgroundImage: `url(${pc})`}}>
              <div className='text-white font-bold text-[28px] absolute bottom-[120px] left-[50%] translate-x-[-50%] md:translate-x-[0%] md:top-[70px] lg:top-[145px] md:left-[40px] lg:left-[-150px] w-[280px] h-[35px]'><span className='mr-[10px]'>Hello, I'm</span><span className='text-primary name cursor-pointer font-black'>Joshua</span></div>
              <div className="text-[20px] text-white absolute pointer-events-none bottom-[50px] left-[50%] translate-x-[-50%] md:translate-x-[0%] md:top-[100px] lg:top-[180px] md:left-[40px] lg:left-[-150px] w-[280px] h-[60px]">{text1}</div>
            </div>
          </div>
}

export default Hero;