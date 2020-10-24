import React from "react";
import Hero from "../components/Hero";
import Task from "../components/Task";
import CurrentResult from "./CurrentResult";
import { variables } from "./../variables/variables";

function Tasks({
  changePage,
  currentTask,
  tasksTable,
  checkAnswer,
  countCorrectAnswer,
  countWrongAnswer,
  lastAnswer,
  setLastAnswer,
  useTimer,
  answerTable,
  currentLesson,
}) {
  const text = `Lekcja ${currentLesson}`;
  return (
    <>
      <Hero
        title={text}
        btnLeftFn={changePage}
        btnLeftFnProperty={variables.pages.main}
        rightText={currentTask < tasksTable.length ? currentTask + 1 : ""}
      />
      {currentTask < tasksTable.length ? (
        <Task
          key={tasksTable[currentTask].id}
          task={tasksTable[currentTask]}
          checkAnswer={checkAnswer}
          lastAnswer={lastAnswer}
          setLastAnswer={setLastAnswer}
          useTimer={useTimer}
        />
      ) : (
        <CurrentResult
          countWrongAnswer={countWrongAnswer}
          countCorrectAnswer={countCorrectAnswer}
          changePage={changePage}
          answerTable={answerTable}
          currentLesson={currentLesson}
        />
      )}
    </>
  );
}

export default Tasks;
