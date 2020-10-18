import React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import ProgressBar from "../components/ProgressBar";

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
  grid-template-columns: 5fr 2fr;
  grid-gap: 8px 16px;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
  align-items: center;
`;

const AlignCenter = styled.div`
  text-align: center;
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
            <Grid>
              <div>{item.a}</div>
              <div>{item.type}</div>
              <div>{item.b}</div>
              <div>=</div>
              <div>{item.c}</div>
            </Grid>
            <AlignCenter>{item.answer}</AlignCenter>
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
