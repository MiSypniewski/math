import React, { useState } from "react";
import ResultDescryption from "./ResultDescryption";
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
  cursor: pointer;
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
      <ResultDescryption key={result.id} isVisible={isVisible} result={result} />
    </Div>
  );
}

export default Result;
