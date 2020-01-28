import React from 'react';
import styled from 'styled-components';
import {respondTo} from './respondTo';
import Button from './Button';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 20px 0;
  .title{
    width: 80%;
    height: auto;
    font-family: 'Finger Paint', cursive;
    font-size: 30px;
    color: #D9D9CC;
    font-weight: bold;
    ${respondTo.L`
      font-size: 2.5vw;
    `}
  }
  .description{
    width: 80%;
    font-family: 'Nunito', sans-serif;
    font-size: 15px;
    margin-top: -10px;
    font-weight: bold;
    color: #D9D9CC;
    ${respondTo.L`
      font-size: 1.3vw;
    `}
  }
`;
export default function HomeTile(props) {
  return (
    <Wrapper>
      <h1 className="title">
        {props.text1}
      </h1>
      <p className="description">
        {props.description}
      </p>
      <Button>
        {props.textButton}
      </Button>
    </Wrapper>
  )
}