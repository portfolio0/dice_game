import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";
import Startgame from "./components/Startgame";

import HowToPlay from "./components/HowToPlay";
import PlayComponent from "./components/Playcomponent";

const App = () => {
  const [isgamestarted, setisgamestarted] = useState(false);

  const togglegameplay = () => {
    setisgamestarted((prev) => !prev);
  };
  return (
    <>
      {isgamestarted ? (
        <PlayComponent />
      ) : (
        <Startgame toggle={togglegameplay} />
      )}

      <HowToPlay />
    </>
  );
};

export default App;
