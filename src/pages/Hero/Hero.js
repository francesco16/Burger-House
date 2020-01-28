import React from 'react'
import { useSpring, animated } from 'react-spring'
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons';
import {IoIosArrowDown} from "react-icons/io";
import ScrollTrigger from '../../components/ScrollTrigger';
import {isMobile} from 'react-device-detect';
import {topHand,
        bottomBun,
        tomato,
        burger,
        cheese,
        bacon,
        onion,
        pickle,
        topBun} from './img/img.js';
import './Hero.scss';
const calc = (x, y) => [x - window.innerWidth/2 , y - window.innerHeight/2]
const trans1 = (x) => `translate3d(${x / 34}px,0px,0)`
const trans2 = (x) => `translate3d(${x / -34}px,0px,0)`
const transHand = (x, y) => `translate3d(${x / 3}px,${y / 3}px,0)`
const transScroll = (x, y) => `translate3d(${x / 4}px,${y / 7}px,0)`
export default function App() {
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 30, tension: 100, friction: 70 } }))
  return (
    <div className="container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
      <Parallax pages={window.innerWidth > 1000 ? 2 : 4.5} scrolling={true} vertical >
        <ParallaxLayer offset={0} speed={-8} >
          { isMobile ? (
            <div className="scrollWrapper">
              <h1 className="scroll">Scroll Down!</h1>
              <h1 className="scrollIcon"><IoIosArrowDown/></h1>
            </div> 
          ):(
            <animated.div style={{ transform: props.xy.interpolate(transScroll) }}>
              <div className="scrollWrapper">
                <h1 className="scroll">Scroll Down!</h1>
                <h1 className="scrollIcon"><IoIosArrowDown/></h1>
              </div>
            </animated.div>
          )}
        </ParallaxLayer>
        <ParallaxLayer offset={0.9} speed={2.6}>
          { isMobile ? (
            <img src={topHand} alt="top hand" className="center cardHand" />
          ):(
            <animated.img src={topHand} alt="top hand" className="center cardHand" style={{ transform: props.xy.interpolate(transHand) }} />
          )}
        </ParallaxLayer>
        <ParallaxLayer offset={0.9} speed={0.2}>     
          { isMobile ? (
            <img src={bottomBun} alt="bottom bun" className="center card1" />
          ):(
            <animated.img src={bottomBun} alt="bottom bun" className="center card1" style={{ transform: props.xy.interpolate(trans2) }} />
          )}
        </ParallaxLayer>
        <ParallaxLayer offset={0.9} speed={0.5}>
          { isMobile ? (
            <img src={tomato} alt="tomato" className="center card2" />
          ):(
            <animated.img src={tomato} alt="tomato" className="center card2" style={{ transform: props.xy.interpolate(trans1) }} />
          )}
        </ParallaxLayer>
        <ParallaxLayer offset={0.9} speed={1}>          
          { isMobile ? (
            <img src={burger} alt="burger" className="center card3" />
          ):(
            <animated.img src={burger} alt="burger" className="center card3" style={{ transform: props.xy.interpolate(trans2) }} />
          )}
        </ParallaxLayer>
        <ParallaxLayer offset={0.9} speed={1.5}>
          { isMobile ? (
            <img src={cheese} alt="cheese" className="center card4" />
          ):(
            <animated.img src={cheese} alt="cheese" className="center card4" style={{ transform: props.xy.interpolate(trans1) }} />
          )}
        </ParallaxLayer>
        <ParallaxLayer offset={0.9} speed={2}>       
          { isMobile ? (
            <img src={bacon} alt="bacon" className="center card5" />
          ):(
            <animated.img src={bacon} alt="bacon" className="center card5" style={{ transform: props.xy.interpolate(trans2) }} />
          )}
        </ParallaxLayer>
        <ParallaxLayer offset={0.9} speed={2.5}>     
          { isMobile ? (
            <img src={onion} alt="onion" className="center card6" />
          ):(
            <animated.img src={onion} alt="onion" className="center card6" style={{ transform: props.xy.interpolate(trans1) }} />
          )}
        </ParallaxLayer>
        <ParallaxLayer offset={0.9} speed={3}>
          { isMobile ? (
            <img src={pickle} alt="pickles" className="center card7" />
          ):(
            <animated.img src={pickle} alt="pickles" className="center card7" style={{ transform: props.xy.interpolate(trans2) }} />
          )}
        </ParallaxLayer>
        <ParallaxLayer offset={0.9} speed={3.5}>
          { isMobile ? (
            <img src={topBun} alt="top bun" className="center card8" />
          ):(
            <animated.img src={topBun} alt="top bun" className="center card8" style={{ transform: props.xy.interpolate(trans1) }} />
          )}
        </ParallaxLayer>
        <ParallaxLayer className="descriptionSection" offset={0.9} speed={window.innerWidth/700*1.5} >
          <ScrollTrigger/>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

