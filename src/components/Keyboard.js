import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { variables } from "../variables/variables";

const Wrapper = styled.div`
  width: 95%;
  margin: 32px auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 8px;
  justify-items: center;
  align-items: center;
`;

function Keyboard({ checkAnswer, changeInput, task, inputUser }) {
  const buttons = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let answer = 0;

  if (inputUser === "?") answer = 0;
  else answer = Number(inputUser);

  return (
    <Wrapper>
      {buttons.map((btn) => (
        <Button small key={btn} value={btn} onClick={(e) => changeInput(e.target.value)}>
          {btn}
        </Button>
      ))}

      <Button small fiolet value={variables.emoji.wrong} onClick={(e) => changeInput(e.target.value)}>
        {variables.emoji.wrong}
      </Button>
      <Button small value="0" onClick={(e) => changeInput(e.target.value)}>
        0
      </Button>
      <Button
        small
        fiolet
        value={variables.emoji.good}
        onClick={() => checkAnswer(answer, task.c, task.a, task.b, task.type)}
      >
        {variables.emoji.good}
      </Button>
    </Wrapper>
  );
}

export default Keyboard;
