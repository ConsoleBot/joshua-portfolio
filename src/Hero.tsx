import pc from './assets/joshua-pc.png'
import { TextStyle } from 'pixi.js';
import { Stage, Text } from '@pixi/react';
import { ReactNode, useState, useEffect } from "react";

interface Props {
  poem: string,
  children: ReactNode,
  interval: number
}

function Message ({ poem, interval = 0, children }: Props) {
  const poemChars = () => poem.split("").concat([...Array(10)].map(() => ''));
  const [state, setState] = useState({ text: '', rest: poemChars() })
  
  useEffect(() => {
    setTimeout(function(){
      var update = () => {
        setState(({ text, rest }) => {
          if (rest.length === 0) {
            return { text: '', rest: poemChars() }
          }
          var line = text + rest.shift();
          if(state.rest.length == 0){
            clearInterval(i);
          }
          return { text: line, rest }
        })
      }
      
      var i = setInterval(update, interval);
      return () => {
        clearInterval(i)
      };
    }, 2000);
  }, [interval, poem]);

 
  return children(state.text);
};

function Hero() {

  const style = new TextStyle({
    align: 'center',
    fontFamily: '"Comfortaa", cursive',
    fontSize: 40,
    fill: ['#20232A', '#3C2133'], // gradient
    stroke: '#0172fd',
    strokeThickness: 5,
    letterSpacing: 20,
    dropShadow: true,
    dropShadowColor: '#3C2133',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
    wordWrap: true,
    wordWrapWidth: 100,
  });


  return   <div className="h-[300px] lg:h-[600px] px-[16px] lg:px-[120px]">
              <Stage width={300} height={300} className="absolute top-[300px] left-[50%] translate-x-[-50%] lg:top-[150px] lg:left-[20%] lg:translate-x-[-50%] z-[1]" options={{backgroundAlpha: 0,}}>
                <Message poem="Hello! I'm Joshua" interval={1000 / 10}>
                  {(text) => (
                    <Text
                     text={text}
                     anchor={0.5}
                     x={150}
                     y={150}
                     style={
                       style
                     }
                   />
                  )}
                </Message>
              </Stage>
              
              <div className="animate-bounceHero m-[auto] h-full w-[90% lg:w-[50%] bg-contain bg-no-repeat bg-center"  style={{backgroundImage: `url(${pc})`}}></div>
            </div>
}

export default Hero;