import React from "react";
import styled from "styled-components";
import Hero from "../components/Hero";
import Result from "./../components/Result";
import { v4 as uuid } from "uuid";
import { variables } from "../variables/variables";

const Wrapper = styled.div`
  width: 95%;
  margin: 16px auto;
`;

function AllResults({ changePage }) {
  const text = "Wyniki";
  const db = JSON.parse(localStorage.getItem("db"));
  console.log(db);

  return (
    <>
      <Hero title={text} btnLeftFn={changePage} btnLeftFnProperty={variables.pages.main} />
      <Wrapper>
        {db ? db.map((item) => <Result key={uuid()} result={item} />) : <div>Brak wyników</div>}
        {/* <Item>Wyniki</Item> */}
      </Wrapper>
    </>
  );
}

export default AllResults;
