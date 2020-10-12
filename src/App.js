import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./theme/GlobalStyle";
import { theme } from "./theme/mainTheme";
import MainMenu from "./pages/MainMenu";
import Tasks from "./pages/Tasks";
import { generateTasks } from "./logic/TaskGenerator";

function App() {
  const [display, setDisplay] = useState("main");
  const [currentTask, setCurrentTask] = useState(0);
  const [useTimer, setTimer] = useState(15);
  const [lastAnswer, setLastAnswer] = useState("");
  const [countCorrectAnswer, setCountCorrectAnswer] = useState(0);
  const [countWrongAnswer, setCountWrongAnswer] = useState(0);
  const [zakresDodowania, setZakresDodawania] = useState(100);
  const [zakresMnozenia, setZakresMnozenia] = useState(10);
  const [tasksTable, setTasksTable] = useState(generateTasks(zakresDodowania, zakresMnozenia));

  function checkAnswer(userAnswer, trueAnswer) {
    if (userAnswer === trueAnswer) {
      setCurrentTask((prevState) => prevState + 1);
      setCountCorrectAnswer((prevState) => prevState + 1);
      setLastAnswer("Dobrze");
    } else {
      setCountWrongAnswer((prevState) => prevState + 1);
      setLastAnswer("Źle");
    }
  }

  function changePage(page, currentTask = 0) {
    setDisplay(page);
    setCurrentTask(currentTask);
    setCountCorrectAnswer(0);
    setCountWrongAnswer(0);
    setTasksTable(generateTasks(zakresDodowania, zakresMnozenia));
  }

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        {display === "main" ? <MainMenu changePage={changePage} /> : null}
        {display === "start" ? (
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
          />
        ) : null}
      </ThemeProvider>
    </>
  );
}

export default App;
