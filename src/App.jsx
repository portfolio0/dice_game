import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";
import Startgame from "./components/startgame";

import HowToPlay from "./components/HowToPlay";
import Gameplay from "./components/Gameplay";

const App = () => {
  const [isgamestarted, setisgamestarted] = useState(false);

  const togglegameplay = () => {
    setisgamestarted((prev) => !prev);
  };
  return (
    <>
      {isgamestarted ? <Gameplay /> : <Startgame toggle={togglegameplay} />}

      <HowToPlay />
    </>
  );
};

export default App;
