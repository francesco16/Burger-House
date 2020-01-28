import React from 'react';
import styled from 'styled-components';
import {respondTo} from './respondTo';
import {FaMapMarkedAlt, FaTripadvisor} from 'react-icons/fa';
import {TiPhone} from "react-icons/ti";
import {MdEmail} from "react-icons/md";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
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
  .streetName, .paragraph{
    width: 80%;
    font-family: 'Nunito', sans-serif;
    font-size: 14px;
    margin-top: 20px;
    margin-bottom: 20px;
    font-weight: bold;
    color: #D9D9CC;
    ${respondTo.M`
      margin-bottom: 0;
    `}
    ${respondTo.L`
      margin-bottom: 0;
      font-size: 1.3vw;
    `}
  }
  .paragraph{
    margin-top: -10px;
  }
  .center1{
    width: 100%;
    padding: 0 30px;
    display: flex;
    justify-content: center;
    ${respondTo.M`
      width: 80%;
    `}
    ${respondTo.L`
      width: 60%;
    `}
  }
  .icon{
    background-color: transparent;
    border: none;
    color: #D9D9CC;
    margin-top: 0px;
    font-size: 40px;
    cursor: pointer;
    transition: 0.2s;
    &:hover{
      color: #A52A2A;
    }    
    &:focus{
      color: #A52A2A;
    }
    ${respondTo.M`
      margin-top: 50px;
    `}
    ${respondTo.L`
      margin-top: 30px;
      font-size: 3vw;
    `}
  }
`;
export default function FindUsTile(props) {
  return (
    <Wrapper>
      <h1 className="title">
        {props.text1}
      </h1>
      <p className="paragraph">
        Come in, take a seat or take your burger away!
      </p>
      <p className="streetName">
        Random road 16,<br/>RN56RD Edinburgh
      </p>

      <center className="center1">
        <button className="icon"><FaMapMarkedAlt /></button>
        <button className="icon"><TiPhone /></button>
        <button className="icon"><MdEmail /></button>
        <button className="icon"><FaTripadvisor /> </button>
      </center>
    </Wrapper>
  )
}