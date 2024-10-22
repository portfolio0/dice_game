import React from "react";
import styled from "styled-components";
const Totalscore = ({ score }) => {
  return (
    <Scorecontainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </Scorecontainer>
  );
};

export default Totalscore;

const Scorecontainer = styled.div`
  text-align: center;
  max-width: 200px;
  margin-left: 60px;
  padding-top: 40px;
  h1 {
    font: 100px;
    line-height: 100px;
  }
  p {
    font-size: 20px;
    font-weight: 500px;
  }
`;
