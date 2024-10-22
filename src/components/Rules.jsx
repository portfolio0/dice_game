import React from "react";
import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>how to play the game</h2>
      <div className="taxt">
        <p>select any number</p>
        <p>
          after click on the dice if selected number is equal to dice number you
          will get same point as dice{""}
        </p>

        <p>if you get wrong guess then 2 points will be deducted</p>
      </div>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  background-color: lightpink;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 20px;
  padding: 20px;
  border-radius: 15px;
  h2 {
    font-size: 24px;
  }
  .text {
    margin-top: 24px;
  }
`;
