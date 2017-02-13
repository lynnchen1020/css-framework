/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(2);

	window.addEventListener('scroll', function () {
	  let bodyScrollTop = document.body.scrollTop;
	  let elHeader = document.getElementById('Header');
	  let elLogo = document.getElementById('logo');
	  let menuListLink = document.querySelectorAll('.Menulist > li > a');

	  if (bodyScrollTop > 0) {
	    elHeader.style.backgroundColor = "#fff";
	    for (i = 0; i < menuListLink.length; i++) {
	      menuListLink[i].style.color = "#444";
	    }
	    elLogo.style.backgroundImage = "url('client/SassPattern/src/img/logo-dark.png')";
	    elHeader.style.transition = "0.3s";
	  } else {
	    elHeader.style.backgroundColor = "transparent";
	    elLogo.style.backgroundImage = "url('client/SassPattern/src/img/logo.png')";
	    for (i = 0; i < menuListLink.length; i++) {
	      menuListLink[i].style.color = "#fff";
	    }
	  }
	});

	if (false) {
	  module.hot.accept();
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);