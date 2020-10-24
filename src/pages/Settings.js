import React from "react";
import Hero from "./../components/Hero";
import styled from "styled-components";
import { variables } from "./../variables/variables";
import Button from "./../components/Button";

const Wrapper = styled.div`
  width: 95%;
  margin: 32px auto;
`;

const Div = styled.div`
  width: 100%;
  margin: 8px auto;
`;

const Input = styled.input`
  max-width: 64px;
  text-align: center;
  margin-left: 8px;
  padding: 4px 16px;
  border-radius: 4px;
`;

const SButton = styled(Button)`
  margin: 32px auto;
`;

const Grid = styled.div`
  width: 100%;
  margin: 16px auto;
  padding: 0 16px;
  display: grid;
  grid-template-columns: 3fr 1fr;
  /* flex-direction: row; */
  justify-content: space-around;
  align-items: center;
`;

function Settings({
  changePage,
  setTimer,
  useTimer,
  setAdditionRange,
  additionRange,
  setMultiplicationRange,
  multiplicationRange,
}) {
  function save() {
    const obj = {
      additionRange: additionRange,
      multiplicationRange: multiplicationRange,
      useTimer: useTimer,
    };
    localStorage.setItem("settings", JSON.stringify(obj));
    changePage(variables.pages.main);
  }

  function convertTimerToSeconds(time) {
    return Number(time) / 10;
  }

  function convertTimerToMiliseconds(time) {
    return Number(time) * 10;
  }

  return (
    <>
      <Hero title="Ustawienia" btnLeftFn={changePage} btnLeftFnProperty={variables.pages.main} />
      <Wrapper>
        <Grid>
          <label htmlFor="additionRange">Zakres dodawania i odejmowania: </label>
          <Input
            id="additionRange"
            type="number"
            value={additionRange}
            onChange={(e) => setAdditionRange(e.target.value)}
          />
        </Grid>
        <Grid>
          <label htmlFor="multiplicationRange">Zakres monożenia i dzielenia:</label>
          <Input
            id="multiplicationRange"
            type="number"
            value={multiplicationRange}
            onChange={(e) => setMultiplicationRange(e.target.value)}
          />
        </Grid>
        <Grid>
          <label htmlFor="useTimer">Ile czasu na zadanie (sekundy):</label>
          <Input
            id="useTimer"
            type="number"
            value={convertTimerToSeconds(useTimer)}
            onChange={(e) => setTimer(convertTimerToMiliseconds(e.target.value))}
          />
        </Grid>

        <Div>
          <SButton fiolet onClick={save}>
            Zapisz
          </SButton>
        </Div>
      </Wrapper>
    </>
  );
}

export default Settings;
