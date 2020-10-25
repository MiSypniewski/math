import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Keyboard from "./Keyboard";
import FakeAnswer from "./FakeAnswer";
import ProgressBar from "../components/ProgressBar";
import { variables } from "./../variables/variables";

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
  background-color: ${({ lastAnswer, theme }) =>
    lastAnswer === variables.answerMessage.good ? theme.green : theme.lightFiolet};
  border-radius: 16px;
  text-align: center;
  box-shadow: inset 2px 2px 10px 0px rgba(0, 0, 0, 0.75);
`;

function Task({ task, checkAnswer, lastAnswer, setLastAnswer, useTimer = 0 }) {
  const [isVisibleModal, setVisibleModal] = useState(false);
  const [remainingTime, setRemainingTime] = useState(useTimer);
  const useKeyboard = false;

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
  }, [lastAnswer]);

  useEffect(() => {
    const intervalId = setInterval(() => setRemainingTime((prev) => prev - 1), 100);
    if (useTimer === 0) return clearInterval(intervalId);
    if (remainingTime <= 0) {
      checkAnswer(variables.answerMessage.overtime, task.c, task.a, task.b, task.type);
      return clearInterval(intervalId);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [remainingTime]);

  return (
    <>
      {useTimer !== 0 ? <ProgressBar remainingTime={remainingTime} useTimer={useTimer} /> : null}
      {isVisibleModal ? (
        <ColorWrapper lastAnswer={lastAnswer}>{lastAnswer}</ColorWrapper>
      ) : (
        <Wrapper>
          {task.a} {task.type} {task.b} = <span>?</span>
        </Wrapper>
      )}
      {useKeyboard ? <Keyboard /> : <FakeAnswer checkAnswer={checkAnswer} task={task} lastAnswer={lastAnswer} />}
    </>
  );
}

export default Task;
