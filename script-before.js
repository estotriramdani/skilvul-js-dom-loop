const number1 = document.querySelector('#number1');
const number2 = document.querySelector('#number2');
const number3 = document.querySelector('#number3');
const form = document.querySelector('#form');
const resultContainer = document.getElementById('result');

// let tempNumber1 = 0;
// let tempNumber2 = 0;

// tangkap nilai yang ada pada number1
number1.addEventListener('change', (e) => {
  tempNumber1 = e.target.value;
});

// tangkap nilai yang ada pada number2
number2.addEventListener('change', (e) => {
  tempNumber2 = e.target.value;
});

const numbers = {
  // number1: 0,
  // number2: 0,
  // number3: 0,
};

function changeHandler(element) {
  element.addEventListener('change', (e) => {
    if (!!e.target.id) {
      numbers[e.target.id] = e.target.value;
    }
  });
}

changeHandler(document.querySelector('#number1'));
changeHandler(document.querySelector('#number2'));
changeHandler(document.querySelector('#number3'));
changeHandler(document.querySelector('#number4'));

const convertCharToNumber = (str) => {
  return Number.isNaN(+str) ? 0 : +str;
};

document.querySelector('#form')?.addEventListener('submit', (event) => {
  event.preventDefault();

  // const { number1, number2, number3 } = numbers;

  // const finalResult =
  //   convertCharToNumber(number1) + convertCharToNumber(number2) + convertCharToNumber(number3);

  const finalResult = Object.values(numbers).reduce((previousValue, currentValue) => {
    return convertCharToNumber(previousValue) + convertCharToNumber(currentValue);
  }, 0);

  let color = 'black';
  if (finalResult > 30) {
    color = 'red';
  }

  const resultContainer = document.getElementById('result');

  resultContainer.innerHTML = `<b style="color: ${color}">${finalResult}</b>`;
});
