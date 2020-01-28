import React from 'react';
import styled from 'styled-components';
import HomeTile from './TextTile';
import ImageTile from './ImageTile';
import FindUsTile from './FindUsTile';
import ButtonTile from './ButtonTile';
import { useSpring, animated } from 'react-spring';
import LogoTransparent from '../img/LogoTransparent.svg'
import {respondTo} from './respondTo';
import ScrollIntoView from './ScrollIntoView';
import {isMobile} from 'react-device-detect';

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 0 100px 0;
  overscroll-behavior: none;
`;
const Logo = styled.img`
  height: 50vh;
  ${respondTo.M`
    height: 70vh;
  `}
`;
const Grid = styled.div`
  position: relative;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 80vw;
  grid-template-rows: auto 220px auto 220px auto auto;
  grid-template-areas: 
    "headerTitle" 
    "headerImg"
    "menuT" 
    "midImg"
    "delivery"
    "footerMap"
    "footerImg";
  ${respondTo.M`
    grid-template-columns: 300px 300px 300px;
    grid-template-rows: 300px 300px 300px;
    grid-template-areas: 
    "headerTitle headerImg headerImg"
    "menuT midImg delivery"
    "footerImg footerImg footerMap";
  `}
  ${respondTo.L`
    grid-template-columns: 25vw 25vw 25vw;
    grid-template-rows: 25vw 25vw 25vw;
    grid-template-areas: 
    "headerTitle headerImg headerImg"
    "menuT midImg delivery"
    "footerImg footerImg footerMap";
	`}
  .headerTitle{
    grid-area: headerTitle;
    background-color: #242424;
  }
  .headerImg {
    grid-area: headerImg;
    position: relative;
  }
  .menuT {
    grid-area: menuT;
    background-color: #242424;
  }
  .midImg{
    grid-area: midImg;
    position: relative;
  }
  .delivery {
    grid-area: delivery;
    background-color: #242424;
  }
  .footerImg {
    grid-area: footerImg;
    position: relative;
    visibility: hidden;
    ${respondTo.M`
      visibility: visible;
    `}
  }    
  .footerMap {
    grid-area: footerMap;
    background-color: #242424;
  }
`;
const Overlayer = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.300);
`;
const trans1 = (s) => `scale(${s})`
const trans2 = (s) => `scale(${s})`
const trans3 = (s) => `scale(${s})`
const imgTop = [
  { id: 0, url: 'https://images.unsplash.com/photo-1551447456-b9ef333d1ef1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80' },
  { id: 1, url: 'https://images.unsplash.com/photo-1521845455419-eac340fdbbed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1566&q=80' },
  { id: 2, url: 'https://images.unsplash.com/photo-1477617722074-45613a51bf6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80' },
  { id: 3, url: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=964&q=80' },
];
const imgMid = [
  { id: 0, url: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80' },
  { id: 1, url: 'https://images.unsplash.com/photo-1513185158878-8d8c2a2a3da3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80' },
  { id: 2, url: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80' },
  { id: 3, url: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1903&q=80' },
  { id: 4, url: 'https://images.unsplash.com/photo-1534790566855-4cb788d389ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80' },
  { id: 5, url: 'https://images.unsplash.com/photo-1550317138-10000687a72b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1993&q=80' },
];
const imgBot = [
  { id: 0, url: 'https://images.unsplash.com/photo-1536521463147-afd1fc97dbef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80' },
  { id: 1, url: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80' },
  { id: 2, url: 'https://images.unsplash.com/photo-1485677959733-60c357f80d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80' },
  { id: 3, url: 'https://images.unsplash.com/photo-1564019709518-6182bdabe251?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80' },
];
export default function GridHome() {
  const [props, set] = useSpring(() => ({ s1: 1, s2: 1, s3: 1, config: { mass: 2, tension: 500, friction: 25 } }))
  return (
    <ScrollIntoView>
      <Wrapper>
        <Logo src={LogoTransparent} />
        <Grid>
          <div className="headerTitle">
            <HomeTile text1="BANGIN' BURGERS SINCE 2010." text2="JOIN US IN THE HEART OF EDINBURGH."/>
          </div>
          <div className="headerImg">
            <ImageTile
            imagesArray={imgTop}
            duration={5500}
            />
            <Overlayer/>
          </div>                    
          <div className="menuT">
            {
              isMobile
              ?
              <ButtonTile text1="Discover our menu" description="Tuck your napkin in your shirt and get ready to sink your teeth into something juicy." textButton="menu"/>
              :
              <animated.div
              onMouseEnter={() => set({ s1:1.1 })}
              onMouseLeave={() => set({ s1: 1 })}
              style={{ transform: props.s1.interpolate(trans1) }}
              >
                <ButtonTile text1="Discover our menu" description="Tuck your napkin in your shirt and get ready to sink your teeth into something juicy." textButton="menu"/>
              </animated.div>
            }
          </div>
          <div className="midImg">
            <ImageTile
            imagesArray={imgMid}
            duration={3000}
            />
            <Overlayer/>
          </div>
          <div className="delivery">
            {
              isMobile
              ?
              <ButtonTile text1="Get it delivered!" description="Looking to order our signature burgers to be delivered straight to your door?" textButton="delivery"/>
              :
              <animated.div
              onMouseEnter={() => set({ s2:1.1 })}
              onMouseLeave={() => set({ s2: 1 })}
              style={{ transform: props.s2.interpolate(trans2) }}
              >
                <ButtonTile text1="Get it delivered!" description="Looking to order our signature burgers to be delivered straight to your door?" textButton="delivery"/>
              </animated.div>
            }
          </div>
          <div className="footerImg">
            <ImageTile
            imagesArray={imgBot}
            duration={4500}
            />
            <Overlayer/>
          </div>
          <div className="footerMap">
            {
              isMobile
              ?
              <FindUsTile text1="Find us!"/>
              :
              <animated.div
              onMouseEnter={() => set({ s3:1.08 })}
              onMouseLeave={() => set({ s3: 1 })}
              style={{ transform: props.s3.interpolate(trans3) }}
              >
                <FindUsTile text1="Find us!"/>
              </animated.div>
            }
          </div>
        </Grid>
      </Wrapper>
    </ScrollIntoView>
  )
}
