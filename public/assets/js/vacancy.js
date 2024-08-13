(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _favorite = _interopRequireDefault(require("../common/favorite"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// import feedback from '../common/feedback'

(0, _favorite.default)();

// const feedbackButton = document.querySelectorAll('.js-feedback-button')
// const radioButton = document.querySelectorAll('.js-profile-radio')
// const sendButton = document.querySelector('.js-send-profile')

// document.addEventListener("DOMContentLoaded", () => {
// 	if (feedbackButton !== null) {
// 		feedback(feedbackButton, radioButton, sendButton);
// 	}
// });

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

//# sourceMappingURL=vacancy.js.map
