(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _favorite = _interopRequireDefault(require("../common/favorite"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
(0, _favorite.default)();
var showListButton = document.querySelector('#show_list');
var showEmptySearchButton = document.querySelector('#show_empty_search');
var showEmptyCompaniesListButton = document.querySelector('#show_empty_companies');
function listener($element, callback) {
  $element === null || $element === void 0 || $element.addEventListener('click', function (event) {
    return callback(event);
  });
}
function showBlock(selectors) {
  selectors.forEach(function (selector) {
    document.getElementById(selector).classList.remove('d-none');
  });
}
function hideBlock(selectors) {
  selectors.forEach(function (selector) {
    document.getElementById(selector).classList.add('d-none');
  });
}
listener(showListButton, function () {
  hideBlock(['search_result_empty_block']);
  showBlock(['search_result_list', 'search_result_filter_used']);
});
listener(showEmptyCompaniesListButton, function () {
  hideBlock(['search_result_list', 'search_result_filter_used', 'search_result_no_result']);
  showBlock(['search_result_empty_block', 'search_result_no_companies']);
});
listener(showEmptySearchButton, function () {
  hideBlock(['search_result_list', 'search_result_no_companies']);
  showBlock(['search_result_empty_block', 'search_result_no_result', 'search_result_filter_used']);
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

//# sourceMappingURL=companies.js.map
