import React from "react";
import styled from "styled-components";
import Button from "../components/Button";

const Wrapper = styled.div`
  margin: 120px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function CurrentResult({ changePage, countCorrectAnswer, countWrongAnswer }) {
  const procent = (countCorrectAnswer / (countCorrectAnswer + countWrongAnswer)) * 100;

  return (
    <Wrapper>
      <div>Twoja skuteczność to: {Math.floor(procent)}%</div>
      <div>Poprawne odpowiedzi: {countCorrectAnswer}</div>
      <div>Błędne odpowiedzi: {countWrongAnswer}</div>
      <Button fiolet onClick={() => changePage("main")}>
        OK
      </Button>
    </Wrapper>
  );
}

export default CurrentResult;
