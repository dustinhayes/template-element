'use strict';

var document = require('global/document');
var interpolate = require('interpolate');

module.exports = function templateElement(html, data) {
  var template = document.createElement('template');

  function interpolateElement(data) {
    template.innerHTML = interpolate(html, data);
    return template.content.firstElementChild;
  }

  if (data) {
    return interpolateElement(data);
  }
  else if (data === false) {
    return interpolateElement({});
  }
  else {
    return interpolateElement;
  }
};
