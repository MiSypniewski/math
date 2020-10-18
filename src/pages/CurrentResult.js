import React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import ProgressBar from "../components/ProgressBar";
import { variables } from "./../variables/variables";

const Flex = styled.div`
  width: 95%;
  margin: 16px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  margin: 32px auto;
  display: grid;
  grid-template-columns: 7fr 3fr;
  grid-gap: 8px 16px;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
  align-items: center;
  font-weight: ${({ theme }) => theme.bold};

  color: ${({ theme, color }) => {
    if (color === variables.answerMessage.good) return theme.green;
    if (color === variables.answerMessage.overtime) return theme.yellow;
    if (color === variables.answerMessage.bad) return theme.fiolet;
  }};
`;

const AlignCenter = styled.div`
  text-align: center;
  font-weight: ${({ theme }) => theme.bold};

  color: ${({ theme, color }) => {
    if (color === variables.answerMessage.good) return theme.green;
    if (color === variables.answerMessage.overtime) return theme.yellow;
    if (color === variables.answerMessage.bad) return theme.fiolet;
  }};
`;

function CurrentResult({ changePage, countCorrectAnswer, countWrongAnswer, answerTable }) {
  const remainingTime = countCorrectAnswer;
  const useTimer = countCorrectAnswer + countWrongAnswer;
  return (
    <Flex>
      <div>Poprawne odpowiedzi: {countCorrectAnswer}</div>
      <div>Błędne odpowiedzi: {countWrongAnswer}</div>
      <ProgressBar remainingTime={remainingTime} useTimer={useTimer} />

      <Wrapper>
        {answerTable.map((item) => (
          <>
            <Grid color={item.answer}>
              <div>{item.a}</div>
              <div>{item.type}</div>
              <div>{item.b}</div>
              <div>=</div>
              <div>{item.c}</div>
            </Grid>
            <AlignCenter color={item.answer}>{item.answer}</AlignCenter>
          </>
        ))}
      </Wrapper>

      <Button fiolet onClick={() => changePage("main")}>
        OK
      </Button>
    </Flex>
  );
}

export default CurrentResult;
