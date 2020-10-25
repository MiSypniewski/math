import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { variables } from "./../variables/variables";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
  max-width: 300px;
  margin: 32px auto 0;
  justify-items: center;
  align-items: center;
`;

function FakeAnswer({ task, checkAnswer, lastAnswer }) {
  return (
    <Grid>
      {task.fakeAnswer.map((item) => (
        <Button
          key={item.id}
          largeText
          transparentText={lastAnswer === variables.answerMessage.good ? true : false}
          onClick={() => checkAnswer(item, task.c, task.a, task.b, task.type)}
          value={item}
        >
          {item}
        </Button>
      ))}
    </Grid>
  );
}

export default FakeAnswer;
