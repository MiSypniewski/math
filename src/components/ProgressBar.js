import React from "react";
import styled from "styled-components";

const EmptyBar = styled.div`
  display: block;
  height: 24px;
  width: 90%;
  margin: 16px auto 0;
  background-color: #ffffff;
  color: #ffffff;
  border: none;
  border-radius: 16px;
  overflow: hidden;

  font-weight: ${({ theme }) => theme.bold};
  box-shadow: 0px 8px 12px -4px rgba(0, 0, 0, 0.5);

  ::before {
    display: block;
    content: "";
    height: 24px;
    border-radius: 8px;
    width: ${({ precent }) => `${precent}%`};
    background-color: ${({ theme, fiolet }) => (fiolet ? theme.lightFiolet : theme.yellow)};
  }
`;

function ProgressBar({ remainingTime, useTimer, fiolet = false }) {
  const precent = (remainingTime / useTimer) * 100;
  return <EmptyBar precent={precent} fiolet={fiolet} />;
}

export default ProgressBar;
