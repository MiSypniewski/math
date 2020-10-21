import React, { useState } from "react";
import ResultDescryption from "./ResultDescryption";
import { v4 as uuid } from "uuid";
import styled from "styled-components";

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  font-weight: ${({ theme }) => theme.bold};
  justify-content: space-around;
  color: ${({ theme }) => theme.fiolet};
`;

const Div = styled.div`
  margin-top: 8px;
`;

function Result({ result }) {
  const [isVisible, setVisible] = useState(false);
  return (
    <Div
      onClick={() => {
        setVisible((prevState) => !prevState);
      }}
    >
      <RowWrapper>
        <div>{result.date}</div>
        <div>{result.precent}%</div>
      </RowWrapper>
      <ResultDescryption key={uuid()} isVisible={isVisible} result={result} />
    </Div>
  );
}

export default Result;
