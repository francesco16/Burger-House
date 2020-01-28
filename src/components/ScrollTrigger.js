import React from 'react';
import styled from 'styled-components';
import { InView } from 'react-intersection-observer';
import {respondTo} from './respondTo';
import { useHistory } from "react-router-dom";

const Wrapper = styled.div`
  margin-top: 100vh;
  background-color: #0E0E0E;
  ${respondTo.M`
    margin-top: 150vh;
  `}
  ${respondTo.L`
    margin-top: 220vh;
	`}
`;
export default function ScrollTrigger(){
  let history = useHistory();
  let onInViewChange = inview => {
    if (inview) {
      history.push('/Home')
    }
  }
  return(
    <Wrapper>
      <InView tag="div" onChange={onInViewChange} />
    </Wrapper>
  )
}
