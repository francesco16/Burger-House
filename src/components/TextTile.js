import React from 'react';
import styled from 'styled-components';
import {respondTo} from './respondTo';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .text{
    width: 80%;
    font-family: 'Finger Paint', cursive;
    font-size: 30px;
    color: #D9D9CC;
    font-weight: bold;
    ${respondTo.L`
      font-size: 2.5vw;
    `}
  }
  .highlights{
    width: 80%;
    font-family: 'Finger Paint', cursive;
    font-size: 30px;
    font-weight: bold;
    color: #A52B2A;
    ${respondTo.L`
        font-size: 2.5vw;
    `}
  }
`;
export default function HomeTile(props) {
  return (
    <Wrapper>
      <h1 className="text">
        {props.text1} <span className="highlights">{props.text2}</span>
      </h1>
    </Wrapper>
  )
}
