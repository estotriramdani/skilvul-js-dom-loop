const numbers = {};

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
