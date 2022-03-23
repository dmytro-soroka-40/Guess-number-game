let yourName = '';
let number = Math.floor(Math.random() * 100);
let attempts = 0;

const output = document.getElementById('output');
const message = document.getElementById('prompt');
const input = document.getElementById('input');

const handleSubmit = (e) => {
  e.preventDefault();

  processInput(input.value.trim());

  input.value = null;
};

const printMessage = (message) => {
  let li = document.createElement('li');

  li.textContent = message;

  output.appendChild(li);
};

const clearOutput = () => {
  for (let i = 0; i < output.children.length; i++) {
    output.removeChild(output.children[i]);
  }
};

const processInput = (value) => {
  if (!value) {
    return;
  }

  if (!isNaN(value) && !yourName) {
    printMessage('Enter a name, not a number.');

    return;
  }

  if (!yourName) {
    yourName = value;
    printMessage(
      `${yourName}, guessed number from 0 to 100. Try to guess it in the least number of attempts. After each attempt, I will say "Less" or "More".`
    );
    return;
  }

  printMessage(value);

  let yourNum = parseInt(value);

  if (isNaN(yourNum)) return;

  attempts += 1;

  if (yourNum > number) {
    printMessage('Less. Try again.');
  } else if (yourNum < number) {
    printMessage('More. Try again.');
  } else {
    printMessage(`That's right, this number ${yourNum}.`);
    printMessage(`Number of attempts: ${attempts}.`);
    printMessage('GAME OVER');

    message.remove();
  }
};

message.addEventListener('submit', handleSubmit);

printMessage('Enter player name:');

input.focus();
