var debounce = require('lodash.debounce');
const getInput = document.querySelector('.input');
const getOutput = document.querySelector('.output');
const countOfWater = 30;
const onValueCount = (evt) => {    
   if (evt.target.value > 0) {  
      getOutput.textContent = `Вам нужно пить каждый день: ${evt.target.value * countOfWater} мл. воды!!!`;
   }
}
let valueThrottled = debounce(onValueCount, 500);
document.addEventListener('input', valueThrottled);
