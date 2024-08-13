(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _favorite = _interopRequireDefault(require("../common/favorite"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
(0, _favorite.default)();
function toggleCheckbox($elements, child) {
  $elements.forEach(function ($element) {
    $element.addEventListener('click', function (event) {
      var $target = event.target;
      if (!$target.classList.contains('is-checked') && $target !== $element.querySelector(child)) {
        $target.classList.add('is-checked');
      } else if ($target === $element.querySelector(child)) {
        $target.parentElement.classList.remove('is-checked');
      } else {
        $target.classList.remove('is-checked');
      }
    });
  });
}
var $checkboxFilled = document.querySelectorAll('.js-checkbox-filled');
var checkboxFilledElementClassName = '.js-checkbox-filled-element';
if ($checkboxFilled.length > 0) {
  toggleCheckbox($checkboxFilled, checkboxFilledElementClassName);
}
var $hideVacancyButtons = document.querySelectorAll('.js-hide-vacancy');
$hideVacancyButtons.forEach(function ($button) {
  $button.addEventListener('click', function (e) {
    var $card = e.target.closest('.js-card');
    $card.classList.add('hidden');
  });
});
var $undoHideVacancyButtons = document.querySelectorAll('.js-undo-hide-vacancy');
$undoHideVacancyButtons.forEach(function ($button) {
  $button.addEventListener('click', function (e) {
    var $card = e.target.closest('.js-card');
    $card.classList.remove('hidden');
    $card.querySelector('.js-hide-company-vacancies-block').classList.remove('hidden', 'hidden-all');
  });
});
var $hideAdditionalBlockButtons = document.querySelectorAll('.js-hide-block-button');
$hideAdditionalBlockButtons.forEach(function ($button) {
  $button.addEventListener('click', function (e) {
    var $block = e.target.closest('.js-hide-company-vacancies-block');
    $block.classList.add('hidden');
  });
});
var $hideAllVacancyCompanyButton = document.querySelectorAll('.js-hide-all-vacancy-button');
$hideAllVacancyCompanyButton.forEach(function ($button) {
  $button.addEventListener('click', function (e) {
    var $block = e.target.closest('.js-hide-company-vacancies-block');
    $block.classList.add('hidden-all');
  });
});
var $undoHideCompanyVacanciesButton = document.querySelectorAll('.js-undo-hide-company-vacancies');
$undoHideCompanyVacanciesButton.forEach(function ($button) {
  $button.addEventListener('click', function (e) {
    var $block = e.target.closest('.js-hide-company-vacancies-block');
    $block.classList.remove('hidden-all');
  });
});

},{"../common/favorite":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
function _default() {
  document.querySelectorAll('.card__action-button').forEach(function ($button) {
    $button.addEventListener('click', function (event) {
      event.target.classList.toggle('in-favorite');
    });
  });
}

},{}]},{},[1]);

//# sourceMappingURL=vacancies.js.map
