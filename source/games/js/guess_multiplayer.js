const answer = parseInt(Math.random() * 100);

function readInt() {
  const number = document.getElementById('userAnswer').value;
  return parseInt(number);
}

function readInt2() {
  const number = document.getElementById('userAnswer2').value;
  return parseInt(number);
}

function write(text) {
  document.getElementById('info').innerHTML = text;
}

function write2(text) {
  document.getElementById('info2').innerHTML = text;
}

function hide(id) {
  document.getElementById(id).style.display = 'none';
}

function guess() {
  const userAnswer = readInt();
  const userAnswer2 = readInt2();

  if (userAnswer == answer && userAnswer2 != answer) {
    write('<b>Игрок 1 победил!</b><br> Игрок 2 проиграл');
    hide('button');
    hide('userAnswer');
    hide('userAnswer2');
    hide('info2');
  } else if (userAnswer2 == answer && userAnswer != answer) {
    write('<b>Игрок 2 победил!</b><br> Игрок 1 проиграл');
    hide('button');
    hide('userAnswer');
    hide('userAnswer2');
    hide('info');
  } else if (userAnswer2 == answer && userAnswer == answer) {
    write('<b>Оба игрока угадали! Ничья! </b>');
    hide('button');
    hide('userAnswer');
    hide('userAnswer2');
    hide('info2');
  } else {
    if (userAnswer > answer) { write(`Игрок 1, ваше число ${userAnswer} слишком большое`); } else { write(`Игрок 1, ваше число ${userAnswer} слишком маленькое`); }
    if (userAnswer2 > answer) { write2(`Игрок 2, ваше число ${userAnswer2} слишком большое`); } else { write2(`Игрок 2, ваше число ${userAnswer2} слишком маленькое`); }
  }
}
