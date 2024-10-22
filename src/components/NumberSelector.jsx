import React, { useState } from "react";
import styled from "styled-components";
const NumberSelector = ({
  seterror,
  error,
  selectedNumber,
  setSelectedNumber,
}) => {
  const arrno = [1, 2, 3, 4, 5, 6];

  const numberselectorhandler = (value) => {
    //remove {} this bracket from parem. work  after this
    setSelectedNumber(value);
    seterror("");
  };

  return (
    <Numberselectorcontainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arrno.map((value, i) => (
          <Box
            isSelected={value == selectedNumber}
            key={i}
            onClick={() => numberselectorhandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </Numberselectorcontainer>
  );
};

export default NumberSelector;
const Numberselectorcontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-right: 80px;
  padding-top: 40px;
  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700px;
  }
  .error {
    color: red;
    margin-bottom: 20px;
  }
`;
const Box = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-weight: 700;
  font-size: 24px;

  color: ${(props) => (props.isSelected ? "white" : "black")};
  /* color: ${(props) =>
    !props.isSelected ? "white" : "black"};  another option*/

  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
`;
