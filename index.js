'use strict';

var document = require('global/document');
var interpolate = require('interpolate');

module.exports = function templateElement(html, data) {
  var template = document.createElement('template');

  function createElement(data) {
    template.innerHTML = interpolate(html, data);
    return template.content.firstElementChild;
  }

  if (data) {
    return createElement(data);
  } else if (data === false) {
    return createElement({});
  } else {
    return createElement;
  }
};
