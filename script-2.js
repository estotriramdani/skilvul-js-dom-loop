const elementInputNumbers = document.getElementsByClassName('inputNumbers');

const numberRaw = Array(elementInputNumbers.length).fill(0);

const convertCharToNumber = (str) => {
  return Number.isNaN(+str) ? 0 : +str;
};

for (let i = 0; i < elementInputNumbers.length; i++) {
  const element = elementInputNumbers[i];
  element.addEventListener('change', (event) => {
    const value = convertCharToNumber(event.target.value);
    numberRaw[i] = value;
  });
}

document.querySelector('#form')?.addEventListener('submit', (event) => {
  event.preventDefault();

  let sum = 0;

  for (let i = 0; i < numberRaw.length; i++) {
    const element = numberRaw[i];
    sum = sum + element;
  }

  let color = 'black';

  if (sum > 30) {
    color = 'red';
  }

  const resultContainer = document.getElementById('result');
  resultContainer.innerHTML = `<b style="color: ${color}">${sum}</b>`;
});
