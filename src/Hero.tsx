import pc from './assets/joshua-pc.png'

function Hero() {

   return   <div className="h-[600px] px-[16px] lg:px-[120px]">
              <div className="animate-bounceHero m-[auto] h-full w-[50%] bg-contain bg-no-repeat bg-center"  style={{backgroundImage: `url(${pc})`}}></div>
            </div>
}

export default Hero;