import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Wrapper = styled.div`
  width: 95%;
  margin: 32px auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 8px;
  justify-items: center;
  align-items: center;
`;

function Keyboard() {
  return (
    <Wrapper>
      <Button small>1</Button>
      <Button small>2</Button>
      <Button small>3</Button>
      <Button small>4</Button>
      <Button small>5</Button>
      <Button small>6</Button>
      <Button small>7</Button>
      <Button small>8</Button>
      <Button small>9</Button>
      <Button small>x</Button>
      <Button small>0</Button>
      <Button small>OK</Button>
    </Wrapper>
  );
}

export default Keyboard;
