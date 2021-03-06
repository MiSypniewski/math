import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { v4 as uuid } from "uuid";
import GlobalStyle from "./theme/GlobalStyle";
import { theme } from "./theme/mainTheme";
import MainMenu from "./pages/MainMenu";
import AllResults from "./pages/AllResults";
import Tasks from "./pages/Tasks";
import Settings from "./pages/Settings";
import { generateTasks } from "./logic/TaskGenerator";
import { variables } from "./variables/variables";

function App() {
  const [display, setDisplay] = useState(variables.pages.main);
  const [currentTask, setCurrentTask] = useState(0);
  const [useTimer, setTimer] = useState(150);
  const [lastAnswer, setLastAnswer] = useState("");
  const [inputUser, setInputUser] = useState("?");
  const [useKeyboard, setUseKeyboard] = useState(false);
  const [countCorrectAnswer, setCountCorrectAnswer] = useState(0);
  const [countWrongAnswer, setCountWrongAnswer] = useState(0);
  const [additionRange, setAdditionRange] = useState(100);
  const [additionPrecent, setAdditionPrecent] = useState(50);
  const [multiplicationRange, setMultiplicationRange] = useState(10);
  const [tasksTable, setTasksTable] = useState([]);
  const [answerTable, setAnswerTable] = useState([]);
  const [currentLesson, setCurrentLesson] = useState(0);

  function checkAnswer(userAnswer, trueAnswer, intA, intB, type) {
    if (userAnswer === trueAnswer) {
      setCurrentTask((prevState) => prevState + 1);
      setCountCorrectAnswer((prevState) => prevState + 1);
      setLastAnswer(variables.answerMessage.good);
      setInputUser("?");
      setAnswerTable((prevState) => [
        ...prevState,
        {
          id: uuid(),
          a: intA,
          b: intB,
          c: userAnswer,
          type: type,
          answer: variables.answerMessage.good,
          emoji: variables.emoji.good,
        },
      ]);
    } else if (userAnswer === variables.answerMessage.overtime) {
      setCurrentTask((prevState) => prevState + 1);
      setCountWrongAnswer((prevState) => prevState + 1);
      setInputUser("?");
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
          emoji: variables.emoji.time,
        },
      ]);
    } else {
      setCountWrongAnswer((prevState) => prevState + 1);
      setLastAnswer(variables.answerMessage.bad);
      setInputUser("?");
      setAnswerTable((prevState) => [
        ...prevState,
        {
          id: uuid(),
          a: intA,
          b: intB,
          c: userAnswer,
          type: type,
          answer: variables.answerMessage.bad,
          emoji: variables.emoji.wrong,
        },
      ]);
    }
  }

  function newLesson(currentTask = 0) {
    setCurrentTask(currentTask);
    setCountCorrectAnswer(0);
    setCountWrongAnswer(0);
    setTasksTable(generateTasks(additionRange, multiplicationRange, additionPrecent));
    setLastAnswer("");
    setCurrentLesson((prevState) => prevState + 1);
    setAnswerTable([]);
  }

  function changePage(page) {
    if (variables.pages.start === page) newLesson();
    setDisplay(page);
  }

  function changeInput(value) {
    if (inputUser === "?" && value !== variables.emoji.wrong) {
      setInputUser(value);
    } else if (value === variables.emoji.wrong) {
      if (inputUser !== "?" && inputUser.length > 0) {
        setInputUser((prevState) => {
          let tmp = prevState.slice(0, prevState.length - 1);
          if (tmp.length === 0) {
            return "?";
          } else {
            return tmp;
          }
        });
      } else {
        setInputUser("?");
      }
    } else {
      setInputUser((prevState) => prevState + value);
    }
  }

  useEffect(() => {
    const lastLesson = localStorage.getItem("lastLesson");
    setCurrentLesson(Number(lastLesson));
    const settings = JSON.parse(localStorage.getItem("settings"));
    if (settings) {
      setAdditionRange(Number(settings.additionRange));
      setMultiplicationRange(Number(settings.multiplicationRange));
      setTimer(Number(settings.useTimer));
      setAdditionPrecent(Number(settings.additionPrecent));
      setUseKeyboard(settings.useKeyboard);
    }
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
            inputUser={inputUser}
            changeInput={changeInput}
            useKeyboard={useKeyboard}
          />
        ) : null}
        {display === variables.pages.results ? <AllResults changePage={changePage} /> : null}
        {display === variables.pages.settings ? (
          <Settings
            changePage={changePage}
            setTimer={setTimer}
            useTimer={useTimer}
            setAdditionRange={setAdditionRange}
            additionRange={additionRange}
            setMultiplicationRange={setMultiplicationRange}
            multiplicationRange={multiplicationRange}
            useKeyboard={useKeyboard}
            setUseKeyboard={setUseKeyboard}
            setAdditionPrecent={setAdditionPrecent}
            additionPrecent={additionPrecent}
          />
        ) : null}
      </ThemeProvider>
    </>
  );
}

export default App;
