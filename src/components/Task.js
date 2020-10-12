import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import ProgressBar from "../components/ProgressBar";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
  max-width: 300px;
  margin: 32px auto 0;
  justify-items: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 80%;
  height: 128px;
  line-height: 128px;
  margin: 24px auto 0;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.bold};
  background-color: #ffffff;
  border-radius: 16px;
  text-align: center;
  box-shadow: inset 2px 2px 10px 0px rgba(0, 0, 0, 0.75);
`;
const ColorWrapper = styled.div`
  width: 80%;
  height: 128px;
  line-height: 128px;
  color: #ffffff;
  margin: 24px auto 0;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.bold};
  background-color: ${({ lastAnswer, theme }) => (lastAnswer === "Dobrze" ? theme.green : theme.lightFiolet)};
  border-radius: 16px;
  text-align: center;
  box-shadow: inset 2px 2px 10px 0px rgba(0, 0, 0, 0.75);
`;

function Task({ task, checkAnswer, lastAnswer, setLastAnswer, useTimer }) {
  const [isVisibleModal, setVisibleModal] = useState(false);
  const [cuurentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    if (lastAnswer) {
      setVisibleModal(true);
      setTimeout(() => {
        setVisibleModal(false);
        setLastAnswer("");
      }, 500);
    } else {
      setVisibleModal(false);
    }
  });

  return (
    <>
      {useTimer !== 0 ? <ProgressBar time={useTimer} /> : null}
      {isVisibleModal ? (
        <ColorWrapper lastAnswer={lastAnswer}>{lastAnswer}</ColorWrapper>
      ) : (
        <Wrapper>
          {task.a} {task.type} {task.b} = <span>?</span>
        </Wrapper>
      )}
      <Grid>
        {task.fakeAnswer.map((item) => (
          <Button
            key={item.id}
            largeText
            transparentText={lastAnswer === "Dobrze" ? true : false}
            onClick={() => checkAnswer(item, task.c)}
            value={item}
          >
            {item}
          </Button>
        ))}
      </Grid>
    </>
  );
}

export default Task;
