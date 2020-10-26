function shuffle(array) {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function answerGenerator(trueAnswer) {
  const tmpArray = [];
  tmpArray.push(trueAnswer);
  let range = 100;
  if (trueAnswer < 10) range = 20;
  else if (trueAnswer < 30) range = 50;
  else if (trueAnswer < 50) range = 70;
  else if (trueAnswer < 60) range = 80;
  else range = 100;

  for (let i = 0; i < 5; i++) {
    let flag = true;
    while (flag) {
      const random = Math.floor(Math.random() * range);
      if (tmpArray.indexOf(random) === -1) {
        tmpArray.push(random);
        flag = false;
      }
    }
  }

  return shuffle(tmpArray);
}

function draw() {
  return Math.floor(Math.random() * 2 + 1);
}

export function generateTasks(additionRange, multiplicationRange, precent) {
  const TaskArray = [];
  for (let i = 0; i < 10; i++) {
    const random = Math.floor(Math.random() * 100 + 1);

    let jakieZadanie = 1;
    if (random <= precent) {
      draw() === 1 ? (jakieZadanie = 1) : (jakieZadanie = 2);
    } else {
      draw() + 2 === 3 ? (jakieZadanie = 3) : (jakieZadanie = 4);
    }

    //tak było do teraz
    // const jakieZadanie = Math.floor(Math.random() * 4 + 1);

    switch (jakieZadanie) {
      case 1:
        TaskArray.push(Dodawanie(i, additionRange));
        break;
      case 2:
        TaskArray.push(Odejmowanie(i, additionRange));
        break;
      case 3:
        TaskArray.push(Mnozenie(i, multiplicationRange));
        break;
      case 4:
        TaskArray.push(Dzielenie(i, multiplicationRange));
        break;
      default:
        console.log(`Sorry, we are out of ${jakieZadanie}.`);
    }
  }
  return TaskArray;
}

const Dodawanie = (id, range) => {
  const a = Math.floor(Math.random() * range);
  const b = Math.floor(Math.random() * (range - a) + 1);
  const c = a + b;

  return {
    id,
    type: "+",
    a: a,
    b: b,
    c: c,
    fakeAnswer: answerGenerator(c),
    answer: "",
  };
};

const Odejmowanie = (id, range) => {
  const a = Math.floor(Math.random() * range);
  const b = Math.floor(Math.random() * (range - a) + 1);
  if (a > b) {
    const c = a - b;
    return {
      id,
      type: "-",
      a: a,
      b: b,
      c: c,
      fakeAnswer: answerGenerator(c),
      answer: "",
    };
  } else {
    const c = b - a;
    return {
      id,
      type: "-",
      a: b,
      b: a,
      c: c,
      fakeAnswer: answerGenerator(c),
      answer: "",
    };
  }
};

const Mnozenie = (id, range) => {
  const a = Math.floor(Math.random() * 10 + 1);
  const b = Math.floor(Math.random() * range + 1);
  const c = a * b;
  return {
    id,
    type: "x",
    a: a,
    b: b,
    c: c,
    fakeAnswer: answerGenerator(c),
    answer: "",
  };
};

function Dzielenie(id, range) {
  const a = Math.floor(Math.random() * 10 + 1);
  const b = Math.floor(Math.random() * range + 1);
  const c = a * b;
  return {
    id,
    type: ":",
    a: c,
    b: b,
    c: a,
    fakeAnswer: answerGenerator(a),
    answer: "",
  };
}
