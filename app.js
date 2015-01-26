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
var fixSize, navHideAnimation;

$(function() {
  fixSize();
  navHideAnimation();
  return $(window).on('resize', (function() {
    fixSize();
  }));
});

fixSize = (function() {
  var logoTextEl;
  if ($('#first-page-banner').length > 0) {
    $('#first-page-banner').css({
      height: window.innerHeight
    });
    logoTextEl = $('.logo-text', '#first-page-banner');
    $('.rocket-picture').css({
      height: $('.smoke-picture').offset().top - (logoTextEl.offset().top + logoTextEl.innerHeight())
    });
  }
});

navHideAnimation = (function() {
  var $document, $element, $window, dHeight, elHeight, elTop, wHeight, wScrollBefore, wScrollCurrent, wScrollDiff;
  $element = $('.nav');
  if (!$element.length) {
    return true;
  }
  elHeight = 0;
  elTop = 0;
  $document = $(document);
  dHeight = 0;
  $window = $(window);
  wHeight = 0;
  wScrollCurrent = 0;
  wScrollBefore = 0;
  wScrollDiff = 0;
  $window.on("scroll", function() {
    elHeight = $element.outerHeight();
    dHeight = $document.height();
    wHeight = $window.height();
    wScrollCurrent = $window.scrollTop();
    wScrollDiff = wScrollBefore - wScrollCurrent;
    elTop = parseInt($element.css("top")) + wScrollDiff;
    if (wScrollCurrent <= 0) {
      $element.css("top", 0);
    } else if (wScrollDiff > 0) {
      $element.css("top", (elTop > 0 ? 0 : elTop));
    } else if (wScrollDiff < 0) {
      if (wScrollCurrent + wHeight >= dHeight - elHeight) {
        $element.css("top", ((elTop = wScrollCurrent + wHeight - dHeight) < 0 ? elTop : 0));
      } else {
        $element.css("top", (Math.abs(elTop) > elHeight ? -elHeight : elTop));
      }
    }
    wScrollBefore = wScrollCurrent;
  });
});



},{}]},{},["./src/javascript/app.coffee"]);
