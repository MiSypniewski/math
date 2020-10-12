import React from "react";
import styled, { css } from "styled-components";

const Tmp = styled.div`
  height: 63px;
  width: 64px;
  text-align: center;
  background-color: #fff;
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

function Hero({ text = "Matematyka", btnLeftFn = (text) => console.log(text), btnLeftFnProperty = "main" }) {
  return (
    <Wrapper>
      <Tmp onClick={() => btnLeftFn(btnLeftFnProperty)}>BTN</Tmp>
      <h3>{text}</h3>
      <Tmp>BTN</Tmp>
    </Wrapper>
  );
}

export default Hero;
