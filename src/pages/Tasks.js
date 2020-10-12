import React from "react";
import Hero from "../components/Hero";
import Task from "../components/Task";
import CurrentResult from "./CurrentResult";

function Tasks({
  changePage,
  currentTask,
  tasksTable,
  checkAnswer,
  countCorrectAnswer,
  countWrongAnswer,
  lastAnswer,
  setLastAnswer,
}) {
  return (
    <>
      <Hero text="Lekcja" btnLeftFn={changePage} btnLeftFnProperty="main" />
      {currentTask < tasksTable.length ? (
        <Task
          key={tasksTable[currentTask].id}
          task={tasksTable[currentTask]}
          checkAnswer={checkAnswer}
          lastAnswer={lastAnswer}
          setLastAnswer={setLastAnswer}
        />
      ) : (
        <CurrentResult
          countWrongAnswer={countWrongAnswer}
          countCorrectAnswer={countCorrectAnswer}
          changePage={changePage}
        />
      )}
    </>
  );
}

export default Tasks;