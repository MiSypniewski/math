import React from "react";
import styled from "styled-components";
import { variables } from "./../variables/variables";

const LeftDiv = styled.div`
  height: 63px;
  width: 64px;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.xl};
  cursor: pointer;
`;

const RightDiv = styled.div`
  height: 63px;
  width: 64px;
  text-align: center;
  font-weight: ${({ theme }) => theme.bold};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 64px;
  width: 100%;
  border-bottom: 1px solid #cccccc;
  line-height: 64px;
  box-shadow: 0px 8px 12px -4px rgba(0, 0, 0, 0.5);
`;

function Hero({
  title = "Matematyka",
  btnLeftFn = (title) => console.log(title),
  btnLeftFnProperty = variables.pages.main,
  rightText = "",
}) {
  return (
    <Wrapper>
      <LeftDiv onClick={() => btnLeftFn(btnLeftFnProperty)}>
        {title === "Matematyka" ? variables.emoji.teacher : variables.emoji.back}
      </LeftDiv>
      <h3>{title}</h3>
      {rightText ? <RightDiv>{rightText} / 10</RightDiv> : <RightDiv />}
    </Wrapper>
  );
}

export default Hero;
