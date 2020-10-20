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

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  font-weight: ${({ theme }) => theme.bold};
  justify-content: space-around;
`;

const ColorDiv = styled.div`
  color: ${({ theme, color }) => {
    if (color === variables.answerMessage.good) return theme.green;
    if (color === variables.answerMessage.overtime) return theme.yellow;
    if (color === variables.answerMessage.bad) return theme.red;
  }};
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
    if (color === variables.answerMessage.bad) return theme.red;
  }};
`;

const AlignCenter = styled.div`
  text-align: center;
  font-weight: ${({ theme }) => theme.bold};

  color: ${({ theme, color }) => {
    if (color === variables.answerMessage.good) return theme.green;
    if (color === variables.answerMessage.overtime) return theme.yellow;
    if (color === variables.answerMessage.bad) return theme.red;
  }};
`;

function CurrentResult({ changePage, countCorrectAnswer, countWrongAnswer, answerTable, currentLesson }) {
  const remainingTime = countCorrectAnswer;
  const useTimer = countCorrectAnswer + countWrongAnswer;
  const precent = (remainingTime / useTimer) * 100;
  let allData = [];

  function getDateNow() {
    const date = new Date();

    const dateOptions = {
      hour12: false,
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    };

    return date.toLocaleString("pl-PL", dateOptions);
  }

  const currentLessonToSave = {
    lesson: currentLesson,
    date: getDateNow(),
    correctAnswer: countCorrectAnswer,
    wrongAnswer: countWrongAnswer,
    precent: precent,
    answerTable: answerTable,
  };

  const lastDb = JSON.parse(localStorage.getItem("db"));
  if (lastDb) allData = lastDb;
  allData.unshift(currentLessonToSave);

  localStorage.setItem("lastLesson", currentLesson);
  localStorage.setItem("db", JSON.stringify(allData));

  return (
    <Flex>
      <RowWrapper>
        <ColorDiv color={variables.answerMessage.good}>Poprawne: {countCorrectAnswer}</ColorDiv>
        <ColorDiv color={variables.answerMessage.bad}>Błędne: {countWrongAnswer}</ColorDiv>
      </RowWrapper>
      <ProgressBar remainingTime={remainingTime} useTimer={useTimer} fiolet={true} />

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

      <Button fiolet onClick={() => changePage(variables.pages.main)}>
        OK
      </Button>
    </Flex>
  );
}

export default CurrentResult;
