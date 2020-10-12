import styled, { css } from "styled-components";

const Button = styled.button`
  display: block;
  position: relative;
  height: 64px;
  width: 128px;
  padding: 8px 16px;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.bold};
  cursor: pointer;
  background-color: ${({ theme }) => theme.blue};
  color: #ffffff;
  border: none;
  border-radius: 16px;
  box-shadow: 0px 8px 12px -4px rgba(0, 0, 0, 0.5);

  :active {
    top: 4px;
    left: 0;
    ::before {
      top: 0px;
      left: 0px;
    }
  }

  ::before {
    display: block;
    position: absolute;
    content: "";
    height: 64px;
    width: 128px;
    top: 4px;
    left: 0px;
    border-radius: 16px;
    border: none;
    z-index: -1;
    background-color: ${({ theme }) => theme.blue};
  }

  :hover {
    background-color: ${({ theme }) => theme.lightBlue};

    ::before {
      background-color: ${({ theme }) => theme.lightBlue};
    }
  }

  ${({ largeText }) =>
    largeText &&
    css`
      font-size: ${({ theme }) => theme.fontSize.m};
    `};

  ${({ transparentText }) =>
    transparentText &&
    css`
      color: rgba(0, 0, 0, 0.01);
    `};

  ${({ lightBlue }) =>
    lightBlue &&
    css`
      background-color: ${({ theme }) => theme.lightBlue};
      :hover {
        background-color: ${({ theme }) => theme.blue};
      }
    `};

  ${({ fiolet }) =>
    fiolet &&
    css`
      background-color: ${({ theme }) => theme.fiolet};
      ::before {
        background-color: ${({ theme }) => theme.fiolet};
      }

      :hover {
        background-color: ${({ theme }) => theme.lightFiolet};
        ::before {
          background-color: ${({ theme }) => theme.lightFiolet};
        }
      }
    `};

  ${({ red }) =>
    red &&
    css`
      background-color: ${({ theme }) => theme.red};
      :hover {
        background-color: ${({ theme }) => theme.lightRed};
      }
    `};
`;

export default Button;
