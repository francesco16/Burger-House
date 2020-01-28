import React from 'react';
import styled from 'styled-components';
import {respondTo} from './respondTo';

const Input = styled.div`
  position: relative;
  margin-top: 20px;
  font-family: Nunito,sans-serif;
  font-weight: bold;
  input[type="text"]{
    font-size: 15px;
    display: inline-block;
    width: 70vw;
    height: 40px;
    box-sizing: border-box;
    outline: none;
    background-color: rgba(217, 217, 204, 0.8);
    border: none;
    border-radius: 3px;
    padding: 10px 10px 10px 100px;
    transition: all 0.1s ease-out;
    color: #0E0E0E;
    ${respondTo.M`
      width: 500px;
      font-size: 18px;
    `}
    ${respondTo.L`
      height: 3.5vw;
      width: 40vw;
      border-radius: 0.3vw;
      font-size: 1.5vw;
      padding: 10px 10px 10px 8vw;
    `}
    &::placeholder {
      color: #242422;
      opacity: 0.4
    }
    &:focus{
      background-color: #D9D9CC;
      padding: 10px 10px 10px 50px;
      transition: all 0.3s ease-out;
      ${respondTo.M`
        padding: 10px;
      `}
      ${respondTo.M`
        padding: 1vw;
      `}
    }
  }
  input[type="text"] + label{
    font-size: 18px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    height: 40px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 40px;
    color: #D9D9CC;
    border-radius: 3px 0 0 3px;
    padding: 0 20px;
    background: #A52B2A;
    transform: translateZ(0) translateX(0);
    transition: all 0.2s ease-in;
    ${respondTo.L`
      font-size: 1.5vw;
      height: 3.5vw;
      width: 5vw;
      padding: 0 1vw;
    `}
  }
  input[type="text"]:focus + label{
    transform: translateY(0%) translateX(-50%);
    transition: all 0.1s ease-out;
    ${respondTo.M`
      transform: translateY(0%) translateX(-95%);
    `}
  }
`;
export default function TextInput(props) {
  return (
    <Input>
      <input type="text" id={props.id} placeholder={props.placeholder} />
      <label htmlFor={props.id}>{props.label}</label>
    </Input>
  )
}

