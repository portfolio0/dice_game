import React from "react";

import Totalscore from "./totalscore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import Rolldice from "./Rolldice";
import { useState } from "react";
import { Button, OutlineButton } from "../styled/buttons";
import Rules from "./Rules";

const Gameplay = () => {
  const [score, setscore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(null); //putting null
  const [currentdice, setcurrentdice] = useState(1);

  const [error, seterror] = useState();

  const [showrules, setshowrules] = useState(false);

  const generaterandomnumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roledice = () => {
    if (!selectedNumber) {
      seterror("you have not selected any number!");
      return;
    }

    const randomnumber = generaterandomnumber(1, 7);
    setcurrentdice((prev) => randomnumber);

    if (selectedNumber == randomnumber) {
      setscore((prev) => prev + randomnumber);
    } else {
      setscore((prev) => prev - 2);
    }

    setSelectedNumber();
  };

  const resetscore = () => {
    setscore(0);
  };
  return (
    <Maincontainer>
      <div className="top_section">
        <Totalscore score={score} />
        <NumberSelector
          error={error}
          seterror={seterror}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <Rolldice currentdice={currentdice} roledice={roledice} />
      <div className="btns">
        <OutlineButton onClick={resetscore}>Reset</OutlineButton>
        <Button onClick={() => setshowrules((prev) => !prev)}>
          {showrules ? "Hide" : "Show"}Rules
        </Button>
      </div>
      {showrules && <Rules />}
    </Maincontainer>
  );
};

export default Gameplay;

const Maincontainer = styled.main`
  .top_section {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
  .btns {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
`;
