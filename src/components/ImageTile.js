import React, { useState, useEffect } from 'react';
import { useTransition, animated, config } from 'react-spring';
import styled from 'styled-components';

const StyledAnimatedDiv = styled(animated.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  will-change: opacity;
`;
export default function ImageTile(props) {
  const slides = props.imagesArray
  const [index, set] = useState(0)
  const transitions = useTransition(slides[index], item => item.id, {
  from: { opacity: 0 },
  enter: { opacity: 1 },
  leave: { opacity: 0 },
  config: config.molasses,
  })
  useEffect(() => void setInterval(() => set(state => (state + 1) % props.imagesArray.length), props.duration), [props.imagesArray.length, props.duration])
  return transitions.map(({ item, props, key }) => (
    <StyledAnimatedDiv
      key={key}
      style={{ ...props, backgroundImage: `url(${item.url})` }}
    />
  ))
}