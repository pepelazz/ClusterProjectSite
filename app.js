(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./src/javascript/app.coffee":[function(require,module,exports){
require('./util');

require('./loader');



},{"./loader":"/Users/Trikster/static_sites/ClusterProject/_ClusterProject/src/javascript/loader.coffee","./util":"/Users/Trikster/static_sites/ClusterProject/_ClusterProject/src/javascript/util.coffee"}],"/Users/Trikster/static_sites/ClusterProject/_ClusterProject/src/javascript/loader.coffee":[function(require,module,exports){
$(function() {
  $('#hideAll .loader').css({
    marginTop: window.innerHeight * 0.4
  });
  return $(window).load(function() {
    return $('#hideAll').css({
      display: 'none'
    });
  });
});



},{}],"/Users/Trikster/static_sites/ClusterProject/_ClusterProject/src/javascript/util.coffee":[function(require,module,exports){
var fixSize;

$(function() {
  fixSize();
  return $(window).on('resize', (function() {
    fixSize();
  }));
});

fixSize = (function() {
  var logoTextEl;
  $('#first-page-banner').css({
    height: window.innerHeight - $('.nav').height()
  });
  logoTextEl = $('.logo-text', '#first-page-banner');
  $('.rocket-picture').css({
    height: $('.smoke-picture').offset().top - (logoTextEl.offset().top + logoTextEl.innerHeight())
  });
  console.log(logoTextEl.offset().top, logoTextEl.height(), $('.smoke-picture').offset().top);
});



},{}]},{},["./src/javascript/app.coffee"]);
