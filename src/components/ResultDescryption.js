import React from "react";
import styled from "styled-components";
import { variables } from "./../variables/variables";
import { v4 as uuid } from "uuid";

const Wrapper = styled.div`
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  margin: 16px auto;
`;

const ColorDiv = styled.div`
  color: ${({ theme, color }) => {
    if (color === variables.answerMessage.good) return theme.green;
    if (color === variables.answerMessage.overtime) return theme.yellow;
    if (color === variables.answerMessage.bad) return theme.red;
    if (color === variables.answerMessage.fiolet) return theme.fiolet;
  }};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
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

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  font-weight: ${({ theme }) => theme.bold};
  margin: 8px auto;
  justify-content: space-around;
`;

const TWrapper = styled.div`
  margin: 24px auto;
  display: grid;
  grid-template-columns: 7fr 3fr;
  grid-gap: 8px 16px;
  align-items: center;
`;

function ResultDescryption({ result, isVisible }) {
  return (
    <Wrapper isVisible={isVisible}>
      <RowWrapper>
        <ColorDiv color={variables.answerMessage.fiolet}>Lekcja: {result.lesson}</ColorDiv>
      </RowWrapper>
      <RowWrapper>
        <ColorDiv color={variables.answerMessage.good}>
          {variables.emoji.good}: {result.correctAnswer}
        </ColorDiv>
        <ColorDiv color={variables.answerMessage.bad}>
          {variables.emoji.wrong}: {result.wrongAnswer}
        </ColorDiv>
      </RowWrapper>
      <TWrapper>
        {result.answerTable.map((answer) => (
          <>
            <Grid key={answer.id} color={answer.answer}>
              <div>{answer.a}</div>
              <div>{answer.type}</div>
              <div>{answer.b}</div>
              <div>=</div>
              <div>{answer.c}</div>
            </Grid>
            <AlignCenter key={uuid()} color={answer.answer}>
              {answer.emoji}
            </AlignCenter>
          </>
        ))}
      </TWrapper>
    </Wrapper>
  );
}

export default ResultDescryption;
