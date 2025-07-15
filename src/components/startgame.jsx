import React from "react";
import styled from "styled-components";
import "./startgame.css";
import { Buttons } from "../styled/Buttons";
const Startgame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="./images/dice.webp" alt="dice image" className="main_dice" />
      </div>
      <div>
        <h1>Dice Game</h1>
        <Buttons onClick={toggle}>Play Now</Buttons>
      </div>
    </Container>
  );
};

export default Startgame;

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  height: 100vh;
  max-width: 1200px;
  justify-content: space-evenly;
`;
