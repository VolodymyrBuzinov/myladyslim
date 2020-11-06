"use strict";

var refs = {
  male: document.querySelector('#male'),
  female: document.querySelector('#female'),
  age: document.querySelector('#age'),
  weight: document.querySelector('#weight'),
  growth: document.querySelector('#growth'),
  count: document.querySelector('#count'),
  result: document.querySelector('.result'),
  item1: document.querySelector('.man'),
  item2: document.querySelector('.woman')
};
var total = 0;

var onSwitchBackgroundColor = function onSwitchBackgroundColor() {
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
};

var onCountCalories = function onCountCalories(evt) {
  if (evt.target.id === 'count') {
    if (refs.male.checked === true) {
      refs.result.style.opacity = '1';
      total = Math.round(66.5 + 13.75 * refs.weight.value + 5.003 * refs.growth.value - 6.775 * refs.age.value);
      refs.result.textContent = "\u0412\u0430\u0448\u0430 \u043D\u043E\u0440\u043C\u0430 ".concat(total, " \u043A\u0430\u043B\u043B\u043E\u0440\u0438\u0439 \u0432 \u0434\u0435\u043D\u044C");
    }

    if (refs.female.checked === true) {
      refs.result.style.opacity = '1';
      total = Math.round(655.1 + 9.563 * refs.weight.value + 1.58 * refs.growth.value - 4.676 * refs.age.value);
      refs.result.textContent = "\u0412\u0430\u0448\u0430 \u043D\u043E\u0440\u043C\u0430 ".concat(total, " \u043A\u0430\u043B\u043B\u043E\u0440\u0438\u0439 \u0432 \u0434\u0435\u043D\u044C");
    }
  }
};

addEventListener('click', onSwitchBackgroundColor);
addEventListener('click', onCountCalories);