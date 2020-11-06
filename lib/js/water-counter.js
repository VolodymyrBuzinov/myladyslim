"use strict";

var debounce = require('lodash.debounce');

var getInput = document.querySelector('.input');
var getOutput = document.querySelector('.output');
var countOfWater = 30;

var onValueCount = function onValueCount(evt) {
  if (evt.target.value > 0) {
    getOutput.style.opacity = '1';
    getOutput.textContent = "\u0412\u0430\u043C \u043D\u0443\u0436\u043D\u043E \u043F\u0438\u0442\u044C \u043A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C: ".concat(evt.target.value * countOfWater, " \u043C\u043B. \u0432\u043E\u0434\u044B!!!");
  }
};

var valueDebounced = debounce(onValueCount, 500);
getInput.addEventListener('input', valueDebounced);