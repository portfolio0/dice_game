import styled from "styled-components";

export const Buttons = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 220px;
  border: none;
  padding: 10px 18px;
  background-color: black;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  border: 1px solid transparent;

  &:hover {
    border: 1px solid black;
    background-color: white;
    color: black;
    transition: 1000ms;
  }
`;

export const OutlineButton = styled(Buttons)`
  background-color: white;
  border: 1px solid black;
  color: black;
  &:hover {
    border: 1px solid transparent;
    background-color: black;
    color: white;
    /* transition: 1000ms; */
  }
`;
