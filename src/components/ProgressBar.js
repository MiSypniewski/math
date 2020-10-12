import styled, { css } from "styled-components";

const ProgressBar = styled.button`
  display: block;
  height: 24px;
  width: 90%;
  /* padding: 8px 16px; */
  margin: 16px auto 0;
  background-color: ${({ theme }) => theme.yellow};
  color: #ffffff;
  border: none;
  border-radius: 16px;

  font-weight: ${({ theme }) => theme.bold};
  box-shadow: 0px 8px 12px -4px rgba(0, 0, 0, 0.5);

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: ${({ theme }) => theme.primary};
    `};
`;

export default ProgressBar;
