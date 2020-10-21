import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { v4 as uuid } from "uuid";
import GlobalStyle from "./theme/GlobalStyle";
import { theme } from "./theme/mainTheme";
import MainMenu from "./pages/MainMenu";
import AllResults from "./pages/AllResults";
import Tasks from "./pages/Tasks";
import { generateTasks } from "./logic/TaskGenerator";
import { variables } from "./variables/variables";

function App() {
  const [display, setDisplay] = useState(variables.pages.main);
  const [currentTask, setCurrentTask] = useState(0);
  const [useTimer, setTimer] = useState(10);
  const [lastAnswer, setLastAnswer] = useState("");
  const [countCorrectAnswer, setCountCorrectAnswer] = useState(0);
  const [countWrongAnswer, setCountWrongAnswer] = useState(0);
  const [additionRange, setAdditionRange] = useState(100);
  const [multiplicationRange, setMultiplicationRange] = useState(10);
  const [tasksTable, setTasksTable] = useState(generateTasks(additionRange, multiplicationRange));
  const [answerTable, setAnswerTable] = useState([]);
  const [currentLesson, setCurrentLesson] = useState(0);

  function checkAnswer(userAnswer, trueAnswer, intA, intB, type) {
    if (userAnswer === trueAnswer) {
      setCurrentTask((prevState) => prevState + 1);
      setCountCorrectAnswer((prevState) => prevState + 1);
      setLastAnswer(variables.answerMessage.good);
      setAnswerTable((prevState) => [
        ...prevState,
        {
          id: uuid(),
          a: intA,
          b: intB,
          c: userAnswer,
          type: type,
          answer: variables.answerMessage.good,
        },
      ]);
    } else if (userAnswer === variables.answerMessage.overtime) {
      setCurrentTask((prevState) => prevState + 1);
      setCountWrongAnswer((prevState) => prevState + 1);
      setLastAnswer(variables.answerMessage.overtime);
      setAnswerTable((prevState) => [
        ...prevState,
        {
          id: uuid(),
          a: intA,
          b: intB,
          c: trueAnswer,
          type: type,
          answer: variables.answerMessage.overtime,
        },
      ]);
    } else {
      setCountWrongAnswer((prevState) => prevState + 1);
      setLastAnswer(variables.answerMessage.bad);
      setAnswerTable((prevState) => [
        ...prevState,
        {
          id: uuid(),
          a: intA,
          b: intB,
          c: userAnswer,
          type: type,
          answer: variables.answerMessage.bad,
        },
      ]);
    }
  }

  function newLesson(currentTask = 0) {
    setCurrentTask(currentTask);
    setCountCorrectAnswer(0);
    setCountWrongAnswer(0);
    setTasksTable(generateTasks(additionRange, multiplicationRange));
    setLastAnswer("");
    setCurrentLesson((prevState) => prevState + 1);
    setAnswerTable([]);
  }

  function changePage(page) {
    if (variables.pages.start === page) newLesson();
    setDisplay(page);
  }

  useEffect(() => {
    const lastLesson = localStorage.getItem("lastLesson");
    setCurrentLesson(Number(lastLesson));
  }, []);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        {display === variables.pages.main ? <MainMenu changePage={changePage} /> : null}
        {display === variables.pages.start ? (
          <Tasks
            tasksTable={tasksTable}
            currentTask={currentTask}
            lastAnswer={lastAnswer}
            setLastAnswer={setLastAnswer}
            countCorrectAnswer={countCorrectAnswer}
            countWrongAnswer={countWrongAnswer}
            checkAnswer={checkAnswer}
            changePage={changePage}
            useTimer={useTimer}
            answerTable={answerTable}
            currentLesson={currentLesson}
          />
        ) : null}
        {display === variables.pages.results ? <AllResults changePage={changePage} /> : null}
      </ThemeProvider>
    </>
  );
}

export default App;
