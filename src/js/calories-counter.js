const refs = {
    male: document.querySelector('#male'),
    female: document.querySelector('#female'),
    age: document.querySelector('#age'),
    weight: document.querySelector('#weight'),
    growth: document.querySelector('#growth'),
    count: document.querySelector('#count'),
    result: document.querySelector('.result'),
    item1: document.querySelector('.man'),
    item2: document.querySelector('.woman'),
}
let total = 0;
const onSwitchBackgroundColor = function () {
    if (refs.male.checked === true) {
        refs.item1.style.backgroundColor = "#ff6c00";
        refs.female.checked = false;
        refs.item2.style.backgroundColor = "#fff";
    }
    if (refs.female.checked === true) {
        refs.item1.style.backgroundColor = "#fff";
        refs.item2.style.backgroundColor = "#ff6c00";
        refs.male.checked = false;
    }
}
const onCountCalories = function (evt) {     
    if (evt.target.id === 'count') {       
        if (refs.male.checked === true) {   
            refs.result.style.opacity = '1';
    total = Math.round(66.5 + (13.75 * refs.weight.value) + (5.003 * refs.growth.value) - (6.775 * refs.age.value));        
        refs.result.textContent = `Ваша норма ${total} каллорий в день`;
    }
        if (refs.female.checked === true) {   
        refs.result.style.opacity = '1';
        total = Math.round(655.1 + (9.563 * refs.weight.value) + (1.58 * refs.growth.value) - (4.676 * refs.age.value));     
  refs.result.textContent = `Ваша норма ${total} каллорий в день`;      
        }
    }    
} 

addEventListener('click', onSwitchBackgroundColor);
addEventListener('click', onCountCalories)