import React from 'react';
import styled from 'styled-components';
import {respondTo} from '../components/respondTo';
import Button from '../components/Button';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  a{
    font-size: 20px;
    text-decoration: none;
    color: #D9D9CC;
    &:hover{
        color: #a52a2a;
    }
  }
`;
const Header = styled.h1`
  width: 100%;
  text-align: center;
  font-family: 'Finger Paint', cursive;
  font-size: 30px;
  color: #D9D9CC;
  font-weight: bold;
  ${respondTo.L`
    font-size: 2.5vw;
  `}
`;
export default function Error() {
  return (
    <Wrapper>
      <Header>Ouch! This page does not exist...</Header>
      <Button><a href="home">Return to Home</a></Button>
    </Wrapper>
  )
}
