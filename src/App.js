import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./theme/GlobalStyle";
import { theme } from "./theme/mainTheme";
import MainMenu from "./pages/MainMenu";
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

  function checkAnswer(userAnswer, trueAnswer, intA, intB, type) {
    if (userAnswer === trueAnswer) {
      setCurrentTask((prevState) => prevState + 1);
      setCountCorrectAnswer((prevState) => prevState + 1);
      setLastAnswer(variables.answerMessage.good);
      setAnswerTable((prevState) => [
        ...prevState,
        {
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
          a: intA,
          b: intB,
          c: userAnswer,
          type: type,
          answer: variables.answerMessage.bad,
        },
      ]);
    }
  }

  function changePage(page, currentTask = 0) {
    setDisplay(page);
    setCurrentTask(currentTask);
    setCountCorrectAnswer(0);
    setCountWrongAnswer(0);
    setTasksTable(generateTasks(additionRange, multiplicationRange));
    setLastAnswer("");
  }

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
          />
        ) : null}
      </ThemeProvider>
    </>
  );
}

export default App;
