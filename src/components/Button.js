import React from 'react';
import styled from 'styled-components';
import {respondTo} from './respondTo';

const ButtonWrapper = styled.button`
  height: 50px;
  padding: 0px 20px;
  margin-top: 20px;
  background-color: #A52B2A;
  border-radius: 5px;
  font-family: 'Finger Paint', cursive;
  font-size: 20px;
  font-weight: bold;
  color: #D9D9CC;   
  transition: 0.2S;
  display: flex;
  cursor: pointer;
  transition: 0.2S;
  border: none;
  ${respondTo.M`
      font-size: 2.5vw;
    `}
  ${respondTo.L`
    height: 3.1vw;
    padding: 0px 2vw;
    font-size: 1.8vw;
  `}
  &:hover{
    color: #A52B2A; 
    background-color: #D9D9CC;
  }
  &:focus{
    color: #A52B2A; 
    background-color: #D9D9CC;
  }
  .content{
    width: 100%;
    text-align: center;
    font-family: 'Finger Paint', cursive;
    font-size: 20px;
    font-weight: bold;
    color: #D9D9CC;   
    transition: 0.2S;
    &:hover{
      color: #A52B2A;   
    }
    ${respondTo.M`
      font-size: 2.5vw;
    `}
    ${respondTo.L`
      font-size: 2vw;
    `}
  }
`;
export default function Button({children}) {
  return (
    <ButtonWrapper>
      {children}
    </ButtonWrapper>
  )
}

