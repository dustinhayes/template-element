'use strict';

var test = require('tape');
var template = require('../');

test('Should create a new dom element.', function (t) {
  var anchor = template('<a href="http://example.com/"></a>', false);

  t.equal(anchor.href, 'http://example.com/');
  t.end();
});

test('Should interpolate and create a new dom element.', function (t) {
  var anchor = template('<a href="{href}"></a>', {
    href: 'http://example.com/'
  });

  t.equal(anchor.href, 'http://example.com/');
  t.end();
});

test('Should return a template that can be interpolated', function (t) {
  var anchor = template('<a href="{href}"></a>');

  t.equal(anchor({
    href: 'http://example.com/'
  }).href, 'http://example.com/');
  t.end();
});
