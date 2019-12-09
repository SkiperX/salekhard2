/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./static/js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./markup/static/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../AppData/Roaming/npm/node_modules/tars-cli/node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./markup/components/b-event-map/b-event-map.js":
/*!******************************************************!*\
  !*** ./markup/components/b-event-map/b-event-map.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _b_map_b_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../b-map/b-map */ "./markup/components/b-map/b-map.js");

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var context = 'b-event-map';

  if ($(".".concat(context)).length == 0) {
    return;
  }

  Object(_b_map_b_map__WEBPACK_IMPORTED_MODULE_0__["default"])(window.bEventMapMarkersJson);
});

/***/ }),

/***/ "./markup/components/b-filter/b-filter.js":
/*!************************************************!*\
  !*** ./markup/components/b-filter/b-filter.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var context = 'b-filter';

  if ($(".".concat(context)).length == 0) {
    return;
  }

  $(".".concat(context, " select")).on('change', function () {
    setSelectTags($(".".concat(context, "__tags")), $(".".concat(context)));
  });
  setSelectTags($(".".concat(context, "__tags")), $(".".concat(context)));
  $('body').on('click', '.select-tag', function (e) {
    var id = $(this).attr('data-id');
    var val = $(this).attr('data-val');
    var selectVal = $("#".concat(id)).val();
    var valArr = Array.isArray(selectVal) ? selectVal : [selectVal];
    var index = valArr.indexOf(val);
    valArr.splice(index, 1);
    $("#".concat(id)).val(valArr);
    $("#".concat(id)).selectric('refresh');
    setSelectTags($(".".concat(context, "__tags")), $(".".concat(context)));
  });
});

function setSelectTags($cont, $context) {
  $cont.html('');
  $cont.append('<div class="select-taglist"></div>');
  $context.find('select').each(function (i, e) {
    var id = $(this).attr('id');
    var val = $(this).val();
    var valArr = Array.isArray(val) ? val : [val];

    if (val == null) {
      valArr = [];
    }

    valArr.forEach(function (el) {
      var text = $("#".concat(id, " [value='").concat(el, "']")).text();
      $cont.find('.select-taglist').append("<div class=\"select-tag\" data-id=\"".concat(id, "\" data-val=\"").concat(el, "\">").concat(text, "<div class=\"tag-del\"\n></div></div>"));
    });
    console.log(valArr);
  });
}

/***/ }),

/***/ "./markup/components/b-gallery/b-gallery.js":
/*!**************************************************!*\
  !*** ./markup/components/b-gallery/b-gallery.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  var context = 'b-gallery';

  if ($(".".concat(context)).length == 0) {
    return;
  }

  var galleryThumbs = new Swiper(".".concat(context, " .gallery-thumbs"), {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true
  });
  var galleryTop = new Swiper(".".concat(context, " .gallery-top"), {
    spaceBetween: 10,
    navigation: {
      nextEl: ".".concat(context, " .swiper-button-next"),
      prevEl: ".".concat(context, " .swiper-button-prev")
    },
    thumbs: {
      swiper: galleryThumbs
    },
    on: {
      slideChangeTransitionEnd: function slideChangeTransitionEnd() {
        setVideoBg();
      }
    }
  });

  function setVideoBg() {
    $('.b-video__video-bg:hidden').each(function (i, e) {
      var $context = $(this).closest(".b-video");
      $context.find('iframe').attr('src', '');
      $('.b-video__video-bg').fadeIn();
    });
  }
});

/***/ }),

/***/ "./markup/components/b-main-map/b-main-map.js":
/*!****************************************************!*\
  !*** ./markup/components/b-main-map/b-main-map.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _b_map_b_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../b-map/b-map */ "./markup/components/b-map/b-map.js");

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var context = 'b-main-map';

  if ($(".".concat(context)).length == 0) {
    return;
  }

  Object(_b_map_b_map__WEBPACK_IMPORTED_MODULE_0__["default"])(window.bMainMapMarkersJson);
});

/***/ }),

/***/ "./markup/components/b-map/b-map.js":
/*!******************************************!*\
  !*** ./markup/components/b-map/b-map.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ __webpack_exports__["default"] = (function (dataJson) {
  var _glossary;

  var context = 'b-map';

  if ($(".".concat(context)).length == 0) {
    return;
  }

  var dataJson = dataJson || null;
  var MapPathToStatic = window.MapPathToStatic || '';
  var maplang = window.MapLanguage || 'ru';
  var glossary = (_glossary = {}, _defineProperty(_glossary, 'ru', {
    'more': "Читать далее",
    'go': "Проложить маршрут"
  }), _defineProperty(_glossary, 'eng', {
    'more': "Read more",
    'go': "Get directions"
  }), _glossary);
  var ExtendedMarkers;

  if (dataJson) {
    ExtendedMarkers = JSON.parse(dataJson);
  }

  setTimeout(function () {
    initMap2();
  }, 3000);

  function initMap2() {
    var centerDesctop = {
      lat: 66.550073,
      lng: 66.602811
    };
    var centerMobile = {
      lat: 66.550073,
      lng: 66.602811
    };
    var centerinit = $(window).width() < 991 && $('.b-main-contacts').length ? centerMobile : centerDesctop;
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: centerinit,
      disableDefaultUI: true,
      styles: [{
        "featureType": "all",
        "elementType": "all",
        "stylers": [{
          "hue": "#e7ecf0"
        }]
      }, {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#636c81"
        }]
      }, {
        "featureType": "administrative.neighborhood",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#636c81"
        }]
      }, {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#ff0000"
        }]
      }, {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#f1f4f6"
        }]
      }, {
        "featureType": "landscape",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#496271"
        }]
      }, {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [{
          "visibility": "off"
        }]
      }, {
        "featureType": "road",
        "elementType": "all",
        "stylers": [{
          "saturation": -70
        }]
      }, {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#ffffff"
        }]
      }, {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#c6d3dc"
        }]
      }, {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#898e9b"
        }]
      }, {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [{
          "visibility": "off"
        }]
      }, {
        "featureType": "water",
        "elementType": "all",
        "stylers": [{
          "visibility": "simplified"
        }, {
          "saturation": -60
        }]
      }, {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#d3eaf8"
        }]
      }]
    });
    var image = '/static/img/general/pin.svg'; // var marker = new google.maps.Marker({
    //     position: {
    //         lat: 66.550073,
    //         lng: 66.602811
    //     },
    //     icon: image,
    //     map: map,
    //
    // });
    //  marker.setMap(map);
    // var marker2 = new google.maps.Marker({
    //     position: {
    //         lat: 57.135706,
    //         lng: 65.610532
    //     },
    //     icon: image,
    //     map: map,
    //
    // });
    // marker2.setMap(map);

    /**/

    if (ExtendedMarkers && ExtendedMarkers.markers && ExtendedMarkers.markers.length) {
      var markers = [];
      var centeredMarker = true;
      $.each(ExtendedMarkers.markers, function (index, ExtendedMarker) {
        // Set lat and lng
        var myLatLng = new google.maps.LatLng(ExtendedMarker.lat, ExtendedMarker.lng); // Rich Marker options

        var options = {
          map: map,
          flat: true,
          defaultZI: (Math.round(myLatLng.lat() * -100000) << 5) * 10,
          position: myLatLng,
          content: "<div class=\"b-map__marker\" data-id=\"".concat(ExtendedMarker.id, "\" data-filter=\"").concat(ExtendedMarker.filter, "\">\n                                <div class=\"b-map__marker-pin\">\n                                    <div class=\"b-map__marker-ico\" style=\"background-image: url('").concat(ExtendedMarker.bg, "')\"></div>\n                                    <div class=\"b-map__marker-title\">\n                                    ").concat(ExtendedMarker.title, "\n                                    </div>\n                                </div>\n                              </div>")
        }; // Add marker on map

        var marker = new RichMarker(options); // Cluster Markers

        markers.push(marker);
      }); // Cluster instance

      var clusterStyles = [{
        textColor: '#FFF',
        textSize: 14,
        url: 'https://www.alexandrebuffet.fr/codepen/svg/cluster.svg',
        height: 45,
        width: 45
      }, {
        textColor: '#FFF',
        textSize: 14,
        url: 'https://www.alexandrebuffet.fr/codepen/svg/cluster.svg',
        height: 45,
        width: 45
      }, {
        textColor: '#FFF',
        textSize: 14,
        url: 'https://www.alexandrebuffet.fr/codepen/svg/cluster.svg',
        height: 45,
        width: 45
      }];
      var clusterOptions = {
        gridSize: 50,
        styles: clusterStyles,
        maxZoom: 13,
        averageCenter: true
      };
      var markerCluster = new MarkerClusterer(map, markers, clusterOptions); // Center map on markers

      setTimeout(function () {
        // Get bounds
        var bounds = new google.maps.LatLngBounds();
        $.each(markers, function (index, marker) {
          if (marker.iwOpened) {
            var test = setInterval(function () {
              var clusters = markerCluster.getClusters(); // use the get clusters method which returns an array of objects

              if (clusters.length) {
                clearInterval(test);

                for (var i = 0, l = clusters.length; i < l; i++) {
                  for (var j = 0, le = clusters[i].markers_.length; j < le; j++) {
                    var marker_found = clusters[i].markers_[j]; // <-- Here's your clustered marker

                    if (marker.getPosition() === marker_found.getPosition()) {
                      centeredMarker = marker;
                    }
                  }
                }

                if (!centeredMarker) {
                  var bounds2 = new google.maps.LatLngBounds();
                  bounds2.extend(centeredMarker.getPosition());
                  map.fitBounds(bounds2);
                } else {
                  map.fitBounds(bounds);
                }
              }
            }, 500);
          }

          if (marker.getVisible()) {
            bounds.extend(marker.getPosition());
          }
        });

        if (!centeredMarker) {//map.setCenter(centeredMarker.getPosition());
        } else {//map.fitBounds(bounds);
          }
      }, 1000);
    }

    map.addListener('click', function (event) {
      var latitude = event.latLng.lat();
      var longitude = event.latLng.lng();
      console.log(latitude + ', ' + longitude);
    });
    $('body').on('click', '.b-map__marker', function (e) {
      var id = $(this).attr('data-id');
      var data = ExtendedMarkers.markers.find(function (n) {
        return n.id == id;
      });
      var $context = $('.b-map__event');
      $('.b-map__marker').removeClass('b-map__marker_active');
      $(this).addClass('b-map__marker_active');
      showMapEvent($context, data);
    });
    $('body').on('click', '.b-event__close', function (e) {
      e.stopPropagation();
      var $context = $('.b-map__event');
      hideMapEvent($context);
      $('.b-map__marker').removeClass('b-map__marker_active');
      return false;
    });
    $('.b-main-map__filter-btn').on('click', function (e) {
      $('.b-event__close').trigger('click');
      var filterVal = $(this).attr('data-filter');

      if (filterVal == '*') {
        $('.b-map__marker[data-filter]').css('opacity', '1').css('pointer-events', 'all');
        return;
      }

      $('.b-map__marker[data-filter]').css('opacity', '0').css('pointer-events', 'none');
      $('.b-map__marker[data-filter]').each(function (i, e) {
        var filter = $(this).attr('data-filter').split(',').map(function (n) {
          return n.trim();
        });
        console.log(filter.includes('' + filterVal));

        if (filter.includes('' + filterVal)) {
          $(this).css('opacity', '1').css('pointer-events', 'all');
        }
      });
    });
  }

  function hideMapEvent($context, data) {
    $context.html('');
  }

  function showMapEvent($context, data) {
    $context.html('');
    $context.html("\n        <div class=\"b-event\"  style=\"background-image: url(".concat(data.bg, ")\">\n            <a href=\"").concat(data.url, "\" class=\"b-event__link\">\n               <div class=\"b-event__content\">\n                  <div class=\"b-event__type\">").concat(data.type, "\n                  </div>\n                  <div class=\"b-event__close\">\n                     <svg class=\"icon__close\" width=\"25px\" height=\"25px\">\n                        <use xlink:href=\"").concat(MapPathToStatic, "svg-symbols.svg#close\"></use>\n                     </svg>\n                  </div>\n                  <div class=\"b-event__date\">").concat(data.date, "\n                  </div>\n                  <div class=\"b-event__title\">").concat(data.title, "\n                  </div>\n                  <div class=\"b-event__info\">\n                     <div class=\"row\">\n                        <div class=\"col-6\">\n                           <div class=\"b-event__loc\">\n                              <svg class=\"icon__pin2\" width=\"17px\" height=\"22px\">\n                                 <use xlink:href=\"").concat(MapPathToStatic, "svg-symbols.svg#pin2\"></use>\n                              </svg>\n                              ").concat(data.loc, "\n                           </div>\n                        </div>\n                        <div class=\"col-6\">\n                           <div class=\"b-event__time\">\n                              <svg class=\"icon__time\" width=\"18px\" height=\"18px\">\n                                 <use xlink:href=\"").concat(MapPathToStatic, "svg-symbols.svg#time\"></use>\n                              </svg>\n                              ").concat(data.time, "\n                           </div>\n                        </div>\n                     </div>\n                  </div>\n                  <div class=\"b-event__more\">\n                     ").concat(glossary[maplang].more, "\n                     <svg class=\"icon__more\" width=\"14px\" height=\"24px\">\n                        <use xlink:href=\"").concat(MapPathToStatic, "svg-symbols.svg#more\"></use>\n                     </svg>\n                  </div>\n               </div>\n            </a>\n            <a href=\"https://yandex.ru/maps/?rtext=~").concat(data.lat, ",").concat(data.lng, "&rtt=mt\" class=\"b-event__go\" target=\"_blank\">\n                ").concat(glossary[maplang].go, "\n                 <svg class=\"icon__more\" width=\"14px\" height=\"24px\">\n                    <use xlink:href=\"").concat(MapPathToStatic, "svg-symbols.svg#more\"></use>\n                 </svg>\n            </a>\n        </div>\n        "));
  }
});

/***/ }),

/***/ "./markup/components/b-pdf/b-pdf.js":
/*!******************************************!*\
  !*** ./markup/components/b-pdf/b-pdf.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (dataJson) {
  var context = 'b-pdf';

  if ($(".".concat(context)).length == 0) {
    return;
  }

  $('.b-pdf__td-content').each(function (i, e) {
    if ($(this).height() > 55) {
      fixTextSize($(this));
    }
  });
  $(window).load(function () {
    $('.b-pdf__td-content').each(function (i, e) {
      if ($(this).height() > 55) {
        fixTextSize($(this));
      }
    });
  });

  function fixTextSize($el) {
    do {
      var fz = parseFloat($el.css('font-size')) - 1;
      $el.css('font-size', fz + 'px');
    } while ($el.height() > 55);
  }
});

/***/ }),

/***/ "./markup/components/b-photo-slider/b-photo-slider.js":
/*!************************************************************!*\
  !*** ./markup/components/b-photo-slider/b-photo-slider.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  var context = 'b-photo-slider';

  if ($(".".concat(context)).length == 0) {
    return;
  }

  var slider = new Swiper(".".concat(context, " .swiper-container"), {
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: ".".concat(context, " .swiper-button-next"),
      prevEl: ".".concat(context, " .swiper-button-prev")
    }
  });
});

/***/ }),

/***/ "./markup/components/b-photo-slider2/b-photo-slider2.js":
/*!**************************************************************!*\
  !*** ./markup/components/b-photo-slider2/b-photo-slider2.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  var context = 'b-photo-slider2';

  if ($(".".concat(context)).length == 0) {
    return;
  }

  var slider = new Swiper(".".concat(context, " .swiper-container"), {
    spaceBetween: 30,
    slidesPerView: 'auto',
    loop: true,
    navigation: {
      nextEl: ".".concat(context, " .swiper-button-next"),
      prevEl: ".".concat(context, " .swiper-button-prev")
    },
    breakpoints: {
      640: {
        spaceBetween: 10
      }
    }
  });
});

/***/ }),

/***/ "./markup/components/b-snow-big/b-snow-big.js":
/*!****************************************************!*\
  !*** ./markup/components/b-snow-big/b-snow-big.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var context = 'b-snow-big';

  if ($(".".concat(context)).length == 0) {
    return;
  }

  ;

  if ($('body').width() < 768) {
    return;
  }

  ;
  var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

  if (isIE11) {
    return;
  }

  setInterval(function () {
    if ($('.winternetz').length > 15) {
      $('.winternetz').slice(15).remove();
    }
  }, 4000);

  (function ($) {
    //
    // Zachary Johnson
    // https://www.zachstronaut.com/posts/2009/12/21/happy-xmas-winternet.html
    // December 2009
    //
    var ww = 0;
    var wh = 0;
    var maxw = 0;
    var minw = 0;
    var maxh = 0;
    var textShadowSupport = true;
    var xv = 0; //var snowflakes = ["\u2744", "\u2745", "\u2746"];

    var snowflakes = ["\u2744", "\u2744", "\u2744"];
    var prevTime;
    var absMax = $('body').width() > 991 ? 9 : 4;
    var flakeCount = 0;
    var sceneCount = 0;
    $(init);

    function init() {
      var detectSize = function detectSize() {
        ww = $(window).width();
        wh = $(".".concat(context)).height();
        maxw = ww + 300;
        minw = -300;
        maxh = wh + 300;
      };

      detectSize();
      $(window).resize(detectSize);

      if (!$('body').css('textShadow')) {
        textShadowSupport = false;
      }
      /* Should work in Windows 7 /*
      if (/windows/i.test(navigator.userAgent))
      {
          snowflakes = ['*']; // Windows sucks and doesn't have Unicode chars installed
          //snowflakes = ['T']; //No FF support for Wingdings
      }
      */
      // FF seems to just be able to handle like 50... 25 with rotation
      // Safari seems fine with 150+... 75 with rotation


      var i = 5;

      while (i--) {
        addFlake(true);
      }

      prevTime = new Date().getTime(); //setInterval(move, 50);

      window.requestAnimationFrame(move);
    }

    function addFlake(initial) {
      flakeCount++;

      var color = function color() {
        if ($(window).scrollTop() < $('.b-main').height() - 300) {
          return 'transparent';
        }

        if ($(window).scrollTop() > $('.b-tour-slider').offset().top) {
          return '#fff';
        }

        return '#fff';
      };

      console.log(color());
      var sizes = [{
        r: 1.0,
        css: {
          fontSize: 50 + Math.floor(Math.random() * 20) + 'px',
          textShadow: "9999px 0 0 ".concat(color())
        },
        v: 2
      }, {
        r: 0.6,
        css: {
          fontSize: 50 + Math.floor(Math.random() * 20) + 'px',
          textShadow: "9999px 0 2px ".concat(color())
        },
        v: 6
      }, {
        r: 0.2,
        css: {
          fontSize: 90 + Math.floor(Math.random() * 30) + 'px',
          textShadow: "9999px 0 6px ".concat(color())
        },
        v: 12
      }, {
        r: 0.1,
        css: {
          fontSize: 90 + Math.floor(Math.random() * 50) + 'px',
          textShadow: "9999px 0 24px ".concat(color())
        },
        v: 20
      }];
      var $nowflake = $('<span class="winternetz">' + snowflakes[Math.floor(Math.random() * snowflakes.length)] + '</span>').css({
        /*fontFamily: 'Wingdings',*/
        color: '#eee',
        display: 'block',
        position: 'fixed',
        background: 'transparent',
        width: 'auto',
        height: 'auto',
        margin: '0',
        padding: '0',
        textAlign: 'left',
        zIndex: 10
      });

      if (textShadowSupport) {
        $nowflake.css('textIndent', '-9999px');
      }

      var r = Math.random();
      var i = sizes.length;
      var v = 0;

      while (i--) {
        if (r < sizes[i].r) {
          v = sizes[i].v;
          $nowflake.css(sizes[i].css);
          break;
        }
      }

      var x = -300 + Math.floor(Math.random() * (ww + 300));
      var y = 0;

      if (typeof initial == 'undefined' || !initial) {
        y = -300;
      } else {
        y = -300 + Math.floor(Math.random() * (wh + 300));
      }

      $nowflake.css({
        left: x + 'px',
        top: y + 'px'
      });
      $nowflake.data('x', x);
      $nowflake.data('y', y);
      $nowflake.data('v', v);
      $nowflake.data('half_v', Math.round(v * 0.5));
      $('body').append($nowflake);
    }

    function move() {
      sceneCount++;
      var bviIsInit = $('.bvi-body').length;

      if (bviIsInit) {
        $('.winternetz').remove();
      }

      if (Math.random() > 0.8) {
        xv += -1 + Math.random() * 2;

        if (Math.abs(xv) > 3) {
          xv = 3 * (xv / Math.abs(xv));
        }
      } // Throttle code


      var newTime = new Date().getTime();
      var diffTime = newTime - prevTime;
      prevTime = newTime;

      if (diffTime < 55 && flakeCount < absMax) {
        addFlake();
      } else if (diffTime > 150) {
        $('span.winternetz:first').remove();
        flakeCount--;
      }

      $('span.winternetz').each(function () {
        var x = $(this).data('x');
        var y = $(this).data('y');
        var v = $(this).data('v');
        var half_v = $(this).data('half_v');
        y += v;
        x += Math.round(xv * v);
        x += -half_v + Math.round(Math.random() * v); // because flakes are rotating, the origin could be +/- the size of the flake offset

        if (x > maxw) {
          x = -300;
        } else if (x < minw) {
          x = ww;
        }

        if (y > maxh) {
          $(this).remove();
          flakeCount--;
          addFlake();
        } else {
          $(this).data('x', x);
          $(this).data('y', y);
          $(this).css({
            left: x + 'px',
            top: y + 'px'
          }); // only spin biggest three flake sizes

          if (v >= 6) {
            $(this).animate({
              rotate: '+=' + half_v + 'deg'
            }, 0);
          }
        }
      });
      setTimeout(function () {
        window.requestAnimationFrame(move);
      }, 50);
    }
  })(jQuery);

  (function ($) {
    // Monkey patch jQuery 1.3.1+ css() method to support CSS 'transform'
    // property uniformly across Safari/Chrome/Webkit, Firefox 3.5+, IE 9+, and Opera 11+.
    // 2009-2011 Zachary Johnson www.zachstronaut.com
    // Updated 2011.05.04 (May the fourth be with you!)
    function getTransformProperty(element) {
      // Try transform first for forward compatibility
      // In some versions of IE9, it is critical for msTransform to be in
      // this list before MozTranform.
      var properties = ['transform', 'WebkitTransform', 'msTransform', 'MozTransform', 'OTransform'];
      var p;

      while (p = properties.shift()) {
        if (typeof element.style[p] != 'undefined') {
          return p;
        }
      } // Default to transform also


      return 'transform';
    }

    var _propsObj = null;
    var proxied = $.fn.css;

    $.fn.css = function (arg, val) {
      // Temporary solution for current 1.6.x incompatibility, while
      // preserving 1.3.x compatibility, until I can rewrite using CSS Hooks
      if (_propsObj === null) {
        if (typeof $.cssProps != 'undefined') {
          _propsObj = $.cssProps;
        } else if (typeof $.props != 'undefined') {
          _propsObj = $.props;
        } else {
          _propsObj = {};
        }
      } // Find the correct browser specific property and setup the mapping using
      // $.props which is used internally by jQuery.attr() when setting CSS
      // properties via either the css(name, value) or css(properties) method.
      // The problem with doing this once outside of css() method is that you
      // need a DOM node to find the right CSS property, and there is some risk
      // that somebody would call the css() method before body has loaded or any
      // DOM-is-ready events have fired.


      if (typeof _propsObj['transform'] == 'undefined' && (arg == 'transform' || _typeof(arg) == 'object' && typeof arg['transform'] != 'undefined')) {
        _propsObj['transform'] = getTransformProperty(this.get(0));
      } // We force the property mapping here because jQuery.attr() does
      // property mapping with jQuery.props when setting a CSS property,
      // but curCSS() does *not* do property mapping when *getting* a
      // CSS property.  (It probably should since it manually does it
      // for 'float' now anyway... but that'd require more testing.)
      //
      // But, only do the forced mapping if the correct CSS property
      // is not 'transform' and is something else.


      if (_propsObj['transform'] != 'transform') {
        // Call in form of css('transform' ...)
        if (arg == 'transform') {
          arg = _propsObj['transform']; // User wants to GET the transform CSS, and in jQuery 1.4.3
          // calls to css() for transforms return a matrix rather than
          // the actual string specified by the user... avoid that
          // behavior and return the string by calling jQuery.style()
          // directly

          if (typeof val == 'undefined' && jQuery.style) {
            return jQuery.style(this.get(0), arg);
          }
        } // Call in form of css({'transform': ...})
        else if (_typeof(arg) == 'object' && typeof arg['transform'] != 'undefined') {
            arg[_propsObj['transform']] = arg['transform'];
            delete arg['transform'];
          }
      }

      return proxied.apply(this, arguments);
    };
  })(jQuery);
  /*!
  /**
   * Monkey patch jQuery 1.3.1+ to add support for setting or animating CSS
   * scale and rotation independently.
   * https://github.com/zachstronaut/jquery-animate-css-rotate-scale
   * Released under dual MIT/GPL license just like jQuery.
   * 2009-2012 Zachary Johnson www.zachstronaut.com
   */


  (function ($) {
    // Updated 2010.11.06
    // Updated 2012.10.13 - Firefox 16 transform style returns a matrix rather than a string of transform functions.  This broke the features of this jQuery patch in Firefox 16.  It should be possible to parse the matrix for both scale and rotate (especially when scale is the same for both the X and Y axis), however the matrix does have disadvantages such as using its own units and also 45deg being indistinguishable from 45+360deg.  To get around these issues, this patch tracks internally the scale, rotation, and rotation units for any elements that are .scale()'ed, .rotate()'ed, or animated.  The major consequences of this are that 1. the scaled/rotated element will blow away any other transform rules applied to the same element (such as skew or translate), and 2. the scaled/rotated element is unaware of any preset scale or rotation initally set by page CSS rules.  You will have to explicitly set the starting scale/rotation value.
    function initData($el) {
      var _ARS_data = $el.data('_ARS_data');

      if (!_ARS_data) {
        _ARS_data = {
          rotateUnits: 'deg',
          scale: 1,
          rotate: 0
        };
        $el.data('_ARS_data', _ARS_data);
      }

      return _ARS_data;
    }

    function setTransform($el, data) {
      $el.css('transform', 'rotate(' + data.rotate + data.rotateUnits + ') scale(' + data.scale + ',' + data.scale + ')');
    }

    $.fn.rotate = function (val) {
      var $self = $(this),
          m,
          data = initData($self);

      if (typeof val == 'undefined') {
        return data.rotate + data.rotateUnits;
      }

      m = val.toString().match(/^(-?\d+(\.\d+)?)(.+)?$/);

      if (m) {
        if (m[3]) {
          data.rotateUnits = m[3];
        }

        data.rotate = m[1];
        setTransform($self, data);
      }

      return this;
    }; // Note that scale is unitless.


    $.fn.scale = function (val) {
      var $self = $(this),
          data = initData($self);

      if (typeof val == 'undefined') {
        return data.scale;
      }

      data.scale = val;
      setTransform($self, data);
      return this;
    }; // fx.cur() must be monkey patched because otherwise it would always
    // return 0 for current rotate and scale values


    var curProxied = $.fx.prototype.cur;

    $.fx.prototype.cur = function () {
      if (this.prop == 'rotate') {
        return parseFloat($(this.elem).rotate());
      } else if (this.prop == 'scale') {
        return parseFloat($(this.elem).scale());
      }

      return curProxied.apply(this, arguments);
    };

    $.fx.step.rotate = function (fx) {
      var data = initData($(fx.elem));
      $(fx.elem).rotate(fx.now + data.rotateUnits);
    };

    $.fx.step.scale = function (fx) {
      $(fx.elem).scale(fx.now);
    };
    /*
     Starting on line 3905 of jquery-1.3.2.js we have this code:
     // We need to compute starting value
    if ( unit != "px" ) {
        self.style[ name ] = (end || 1) + unit;
        start = ((end || 1) / e.cur(true)) * start;
        self.style[ name ] = start + unit;
    }
     This creates a problem where we cannot give units to our custom animation
    because if we do then this code will execute and because self.style[name]
    does not exist where name is our custom animation's name then e.cur(true)
    will likely return zero and create a divide by zero bug which will set
    start to NaN.
     The following monkey patch for animate() gets around this by storing the
    units used in the rotation definition and then stripping the units off.
     */


    var animateProxied = $.fn.animate;

    $.fn.animate = function (prop) {
      if (typeof prop['rotate'] != 'undefined') {
        var $self,
            data,
            m = prop['rotate'].toString().match(/^(([+-]=)?(-?\d+(\.\d+)?))(.+)?$/);

        if (m && m[5]) {
          $self = $(this);
          data = initData($self);
          data.rotateUnits = m[5];
        }

        prop['rotate'] = m[1];
      }

      return animateProxied.apply(this, arguments);
    };
  })(jQuery);
});

/***/ }),

/***/ "./markup/components/b-snow/b-snow.js":
/*!********************************************!*\
  !*** ./markup/components/b-snow/b-snow.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var context = 'b-snow';

  if ($(".".concat(context)).length == 0) {
    return;
  }

  var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

  if (isIE11) {
    return;
  }

  (function () {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
      window.setTimeout(callback, 1000 / 60);
    };

    window.requestAnimationFrame = requestAnimationFrame;
  })();

  var flakes = [],
      canvas = document.getElementById("snow-canvas"),
      ctx = canvas.getContext("2d"),
      flakeCount = 400,
      mX = -100,
      mY = -100;
  canvas.width = window.innerWidth;
  canvas.height = $('.b-snow').height();

  function snow() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < flakeCount; i++) {
      var flake = flakes[i],
          x = mX,
          y = mY,
          minDist = 150,
          x2 = flake.x,
          y2 = flake.y;
      var dist = Math.sqrt((x2 - x) * (x2 - x) + (y2 - y) * (y2 - y)),
          dx = x2 - x,
          dy = y2 - y;

      if (dist < minDist) {
        var force = minDist / (dist * dist),
            xcomp = (x - x2) / dist,
            ycomp = (y - y2) / dist,
            deltaV = force / 2;
        flake.velX -= deltaV * xcomp;
        flake.velY -= deltaV * ycomp;
      } else {
        flake.velX *= .98;

        if (flake.velY <= flake.speed) {
          flake.velY = flake.speed;
        }

        flake.velX += Math.cos(flake.step += .05) * flake.stepSize;
      }

      ctx.fillStyle = "rgba(255,255,255," + flake.opacity + ")";
      flake.y += flake.velY;
      flake.x += flake.velX;

      if (flake.y >= canvas.height || flake.y <= 0) {
        reset(flake);
      }

      if (flake.x >= canvas.width || flake.x <= 0) {
        reset(flake);
      }

      ctx.beginPath();
      ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
      ctx.fill();
    }

    requestAnimationFrame(snow);
  }

  ;

  function reset(flake) {
    flake.x = Math.floor(Math.random() * canvas.width);
    flake.y = 0;
    flake.size = Math.random() * 3 + 2;
    flake.speed = Math.random() * 1 + 0.5;
    flake.velY = flake.speed;
    flake.velX = 0;
    flake.opacity = Math.random() * 0.5 + 0.3;
  }

  function init() {
    for (var i = 0; i < flakeCount; i++) {
      var x = Math.floor(Math.random() * canvas.width),
          y = Math.floor(Math.random() * canvas.height),
          size = Math.random() * 3 + 2,
          speed = Math.random() * 1 + 0.5,
          opacity = Math.random() * 0.5 + 0.3;
      flakes.push({
        speed: speed,
        velY: speed,
        velX: 0,
        x: x,
        y: y,
        size: size,
        stepSize: Math.random() / 30,
        step: 0,
        opacity: opacity
      });
    }

    snow();
  }

  ;
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
  init();
});

/***/ }),

/***/ "./markup/components/b-space/b-space.js":
/*!**********************************************!*\
  !*** ./markup/components/b-space/b-space.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  if ($('.b-space').length == 0) {
    return;
  }

  var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

  if (isIE11) {
    return;
  }

  $(function () {
    var canvas,
        gl,
        ratio,
        vertices,
        velocities,
        freqArr,
        cw,
        ch,
        colorLoc,
        thetaArr,
        velThetaArr,
        velRadArr,
        boldRateArr,
        drawType = 0,
        numLines = 40000,
        iconNumLines = 40000,
        contentWidth,
        contentHeight,
        canvasSpace,
        canvas2,
        ctx2,
        ctx,
        maxStars = 1500,
        starsCount = 0,
        stars = [],
        hue = 217;
    var target = [];
    var iconTarget = [];
    var randomTargetXArr = [],
        randomTargetYArr = [];
    var requestAnimationFrameId;
    var coefficient = .4;
    var targetCoefficient = .02;

    function initAnimationScene() {
      //    Get the canvas element
      canvas = document.getElementById("animation-canvas");
      contentWidth = canvas.parentNode.offsetWidth;
      contentHeight = canvas.parentNode.offsetHeight;
      canvas.width = contentWidth;
      canvas.height = contentHeight;
      canvasSpace = document.getElementById("animation-space-canvas");
      canvasSpace.width = contentWidth;
      canvasSpace.height = contentHeight;
      initStarsAnimation();
      startStarsAnimation();
    }

    function timer() {
      if (drawType < 2) {
        drawType += 1;

        if (drawType < 2) {
          setTimeout(timer, 1500);
        } else {
          setTimeout(timer, 1200);
        }

        return;
      }

      if (drawType == 2) {
        canvas.parentNode.className += ' active';
        startStarsAnimation();
        drawIconScene();
      }
    }

    function random(min, max) {
      if (arguments.length < 2) {
        max = min;
        min = 0;
      }

      if (min > max) {
        var hold = max;
        max = min;
        min = hold;
      }

      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function maxOrbit(x, y) {
      var max = Math.max(x, y),
          diameter = Math.round(Math.sqrt(max * max + max * max));
      return diameter / 2;
    }

    var Star = function Star() {
      this.orbitRadius = random(maxOrbit(contentWidth, contentHeight));

      if (this.orbitRadius < 200 && starsCount % 2 != 0) {
        this.orbitRadius = random(maxOrbit(250, 1000));
      }

      if (this.orbitRadius < 200 && starsCount % 3 != 0) {
        this.orbitRadius = random(maxOrbit(250, 1000));
      }

      if (this.orbitRadius < 40 && starsCount % 2 != 0) {
        this.orbitRadius = random(maxOrbit(250, 1000));
      }

      this.radius = 2;
      this.orbitX = contentWidth / 2;
      this.orbitY = contentHeight / 2;
      this.timePassed = random(0, maxStars);
      this.speed = 0.0001;
      this.alpha = random(2, 10) / 10;
      starsCount++;
      stars[starsCount] = this;
    };

    Star.prototype.draw = function () {
      var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
          y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
          twinkle = random(10);

      if (twinkle === 1 && this.alpha > 0) {
        this.alpha -= 0.05;
      } else if (twinkle === 2 && this.alpha < 1) {
        this.alpha += 0.05;
      }

      ctx.globalAlpha = this.alpha; // draw the cached gradient canvas image

      ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
      this.timePassed += this.speed;
    };

    function starsAnimation() {
      ctx.clearRect(0, 0, contentWidth, contentHeight);
      ctx.globalCompositeOperation = 'source-over';
      ctx.globalAlpha = 0.8;
      ctx.fillStyle = 'transparent';
      ctx.fillRect(0, 0, contentWidth, contentHeight);
      ctx.globalCompositeOperation = 'lighter';

      for (var i = 1, l = stars.length; i < l; i++) {
        stars[i].draw();
      }

      ;
      requestAnimationFrame(starsAnimation);
    }

    function initCanvasCachedGradient() {
      // START CANVAS CACHED GRADIENT
      canvas2 = document.createElement('canvas');
      var w2 = canvas2.width = 100;
      var h2 = canvas2.height = 100;
      ctx2 = canvas2.getContext("2d"); // draw a big beefy gradient in the center of the dummy canvas

      var gradientCache = ctx2.createRadialGradient(w2 / 2, h2 / 2, 0, w2 / 2, h2 / 2, w2 / 2);
      gradientCache.addColorStop(0, '#e8d304');
      gradientCache.addColorStop(1, '#e8d304');
      ctx2.fillStyle = gradientCache;
      ctx2.beginPath();
      ctx2.arc(w2 / 2, h2 / 2, w2 / 2, 0, Math.PI * 2);
      ctx2.fill(); // END CANVAS CACHED GRADIENT
    }

    function initStarsAnimation() {
      ctx = canvasSpace.getContext('2d');

      for (var i = 0; i < maxStars; i++) {
        new Star();
      }

      initCanvasCachedGradient();
    }

    function startStarsAnimation() {
      starsAnimation();
    }

    function onResizeHandler(event) {
      contentWidth = canvas.parentNode.offsetWidth;
      contentHeight = canvas.parentNode.offsetHeight;
      canvas.width = contentWidth;
      canvas.height = contentHeight;
      canvasSpace.width = contentWidth;
      canvasSpace.height = contentHeight;
    }

    $(function (event, data) {
      initAnimationScene();
    });
  }); //meteoros

  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  var style = ["style1", "style2", "style3", "style4"];
  var tam = ["tam1", "tam1", "tam1", "tam2", "tam3"];
  var opacity = ["opacity1", "opacity1", "opacity1", "opacity2", "opacity2", "opacity3"];
  var numeroAleatorio = 5000;
  setTimeout(function () {
    carregarMeteoro();
  }, numeroAleatorio);

  function carregarMeteoro() {
    setTimeout(carregarMeteoro, numeroAleatorio);
    numeroAleatorio = getRandomArbitrary(5000, 10000);
    var meteoro = "<div class='meteoro " + style[getRandomArbitrary(0, 4)] + "'></div>";
    document.getElementsByClassName('chuvaMeteoro')[0].innerHTML = meteoro;
    setTimeout(function () {
      document.getElementsByClassName('chuvaMeteoro')[0].innerHTML = "";
    }, 1000);
  } //end meteoros
  //$('.b-space__canvas').hide();


  var scrollPosition = 0;
  var windowHeight = $(window).height() / 4 * 3;
  var mapOffeset = $('.b-main-map').offset().top;
  var sliderOffset = $('.b-tour-slider').offset().top;
  $(window).scroll(function () {
    scrollPosition = $(window).scrollTop();
  });

  function showSpace() {
    if (scrollPosition > mapOffeset) {
      $('.b-space').css('opacity', '0');
    }

    if (scrollPosition + windowHeight < sliderOffset) {
      $('.b-space').css('opacity', '0');
    } else {
      $('.b-space').css('opacity', '1');
    }

    window.requestAnimationFrame(showSpace);
  }

  window.requestAnimationFrame(showSpace);
});

/***/ }),

/***/ "./markup/components/b-tour-slider/b-tour-slider.js":
/*!**********************************************************!*\
  !*** ./markup/components/b-tour-slider/b-tour-slider.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var context = 'b-tour-slider';

  if ($(".".concat(context)).length == 0) {
    return;
  }

  var swiper = new Swiper(".".concat(context, " .swiper-container"), {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".".concat(context, " .swiper-button-next"),
      prevEl: ".".concat(context, " .swiper-button-prev")
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30
      }
    }
  });
});

/***/ }),

/***/ "./markup/components/b-video/b-video.js":
/*!**********************************************!*\
  !*** ./markup/components/b-video/b-video.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var context = 'b-video';
  $('body').on('click', ".".concat(context, "__video-bg"), function (e) {
    e.stopPropagation();
    var $context = $(this).closest(".".concat(context));
    var src = $context.find('iframe').data('src');
    $context.find('iframe').attr('src', src);
    $(this).fadeOut();
    return false;
  });
});

/***/ }),

/***/ "./markup/components/page-header/page-header.js":
/*!******************************************************!*\
  !*** ./markup/components/page-header/page-header.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  $(".js-menu").on("click", function (e) {
    if (!$(this).is('.open')) {
      $(".js-menu").addClass("open");
      $('html').addClass('menu-open');
      $(".page-header__mobile-toggle").css('height', "calc(100vh - ".concat($(".page-header").height(), "px)"));
      $(".page-header__mobile-toggle").slideDown();
    } else {
      menuClose();
    }

    return false;
  });
  $(".page-header__search").on('click', function (e) {
    if (!$(this).is('.page-header__search_open')) {
      searchOpen();
      return false;
    }
  });
  $(".page-header__search-btn").on('click', function (e) {
    var $search = $(this).closest(".page-header__search");

    if (!$search.is('.page-header__search_open')) {
      searchOpen();
      return false;
    }
  });
  $(window).scroll(function () {
    if ($('body').width() < 1024) {
      return;
    }

    menuClose();
    searchClose();
  });
  $(document).mouseup(function (e) {
    var search = $(".page-header__search");

    if (search.has(e.target).length === 0) {
      searchClose();
    }
  });

  function searchOpen() {
    $(".page-header__search").addClass('page-header__search_open');
    $('.page-header__search-control').val('').focus();
  }

  function searchClose() {
    $(".page-header__search").removeClass('page-header__search_open');
  }

  function menuClose() {
    $(".js-menu").removeClass("open");
    $(".page-header__mobile-toggle").slideUp();
    $('html').removeClass('menu-open');
  }

  $('.page__header_abs:visible').each(function (i, e) {
    var h = $(this).height();
    var $el = $(this).next();
    var p = parseFloat($el.css('padding-top'));
    $el.css('padding-top', h + p);
  });

  if ($('body').width() > 991 && window.location.search.indexOf('backstop') == -1) {
    var h = $('.page__header').outerHeight();
    $('.b-intro').css('min-height', "calc(100vh - ".concat(h, "px)"));
  }

  var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

  if (isIE11) {
    $('.b-intro, .b-main').css('height', '100vh');
  }
});

/***/ }),

/***/ "./markup/components/page/page.js":
/*!****************************************!*\
  !*** ./markup/components/page/page.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var inputmask_dist_inputmask_inputmask_numeric_extensions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inputmask/dist/inputmask/inputmask.numeric.extensions */ "./node_modules/inputmask/dist/inputmask/inputmask.numeric.extensions.js");
/* harmony import */ var inputmask_dist_inputmask_inputmask_numeric_extensions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inputmask_dist_inputmask_inputmask_numeric_extensions__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _static_js_base_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../static/js/base/base */ "./markup/static/js/base/base.js");
/* harmony import */ var tippy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tippy.js */ "./node_modules/tippy.js/dist/tippy.esm.js");



/* harmony default export */ __webpack_exports__["default"] = (function () {
  /* */
  $.fn.extend({
    autoHeight: function autoHeight() {
      function autoHeight_(element) {
        var a = $(element).outerHeight() - $(element).height();
        return $(element).css({
          'height': 'auto',
          'overflow-y': 'hidden'
        }).height(element.scrollHeight - a);
      }

      return this.each(function () {
        autoHeight_(this).on('input', function () {
          autoHeight_(this);
        });
      });
    }
  });
  /**/

  if ($("body").width() > 991 && $(window).height() > 650) {
    var showFixedHeader = function showFixedHeader() {
      $(".fixed-header").addClass("sticky");
    };

    var hideFixedHeader = function hideFixedHeader() {
      $(".fixed-header").removeClass("sticky");
    };

    var showfixedHeader = false;
    $("body").prepend($(".page-header").eq(0).clone().addClass("fixed-header"));
    $("body").prepend($(".page__menu"));
    $(window).scroll(function () {
      if ($(window).scrollTop() > $(".page-header").outerHeight() + 200) {
        if (showfixedHeader) {
          return;
        }

        console.log(showfixedHeader);
        window.requestAnimationFrame(showFixedHeader);
        $(".page-up").fadeIn();
        showfixedHeader = true;
      } else {
        if (!showfixedHeader) {
          return;
        }

        window.requestAnimationFrame(hideFixedHeader);
        $(".page-up").fadeOut();
        showfixedHeader = false;
      }
    });
    $(".page-up").on('click', function () {
      $("html:not(:animated),body:not(:animated)").animate({
        scrollTop: 0
      }, 800);
      return false;
    });
    $('body').keydown(function (e) {
      if (e.which == '9') {
        $('body').addClass('tab-user');
      }
    }); //$(window).Scrollax();

    /*new WOW().init({
        offset:       100
    });*/
  }

  var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

  if ($('body').width() > 991 && !isIE11) {
    $(window).Scrollax();
    AOS.init({
      easing: 'ease-out-back',
      duration: 1500,
      offset: 120
    });
  } else {
    $('html').addClass('no-js');
    $('[data-aos]').removeAttr('data-aos');
  }

  $(".form-control").focus(function (e) {
    $(this).parent().addClass("is-active is-completed");
  });
  $(".form-control").on('change blur', function (e) {
    mInputSetState();
  });
  mInputSetState();

  function mInputSetState() {
    $(".form-control").each(function (i, e) {
      if ($(this).val() === "") {
        $(this).parent().removeClass("is-completed");
        $(this).parent().removeClass("is-active");
      } else {
        $(this).parent().addClass("is-active is-completed");
      }
    });
  }

  function addScript(link, callback) {
    var script = document.createElement('script');
    script.src = link;
    document.body.appendChild(script);

    script.onload = function () {
      callback();
    };
  }

  $('.lightgallery').lightGallery({
    selector: 'a'
  }); //$('input[type="tel"]').inputmask("+9 (999) 999-99-99");

  new inputmask_dist_inputmask_inputmask_numeric_extensions__WEBPACK_IMPORTED_MODULE_0___default.a("+9 (999) 999-99-99").mask('input[type="tel"]');
  $('.selectric').selectric();
  $("textarea.form-control").autoHeight();
  $('.modal').on('shown.bs.modal', function (e) {
    try {
      $(window).trigger('resize');
      window.dispatchEvent(new Event('resize'));
    } catch (e) {
      var resizeEvent = window.document.createEvent('UIEvents');
      resizeEvent.initUIEvent('resize', true, false, window, 0);
      window.dispatchEvent(resizeEvent);
    }
  });
  $('.modal').on('show.bs.modal', function (e) {
    setTimeout(function () {
      $("textarea.form-control").autoHeight();
    }, 200);
  });
  $('.modal').each(function (i, e) {
    $(this).appendTo('body');
  }); //$('.selectric').selectric();

  $('[data-js-sync]').on('blur', function (e) {
    var name = $(this).attr('data-js-sync');
    var val = $(this).val();
    $("[data-js-sync='".concat(name, "']")).val(val);
    mInputSetState();
  });
  $('.page__wrapper > *:not(.modal), .page-footer, .page-header').find('.container').each(function (i, e) {
    if ($(this).closest('.modal, .fixed-header, .swiper-container').length) {} else {
      if ($(this).offset().top < $(window).height()) {} else {//$(this).addClass('wow').addClass('fadeInMy');
      }
    }
  });
  $('.js-anchor[href^="#"]').on('click', function (e) {
    var scroll_el = $(this).attr("href");
    var d = 0;

    if ($('.fixed-header').height()) {
      d = $('.fixed-header').outerHeight() + 30;
    }

    $('html, body').animate({
      scrollTop: $(scroll_el).offset().top - d
    }, 800);
    return false;
  });
  var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

  function offsetfix() {
    $('.js-right').each(function (i, e) {
      var w = $('body').width();
      var o = $(this).offset().left;
      var iw = $(this).width();
      var d = w - o - iw;
      $(this).css('margin-right', -d);
    });
    $('.js-left').each(function (i, e) {
      var o = $(this).offset().left;
      $(this).css('margin-left', -o);
    });
  }

  offsetfix();
  $(window).resize(function () {
    $('.js-right').css('margin-right', '');
    $('.js-left').css('margin-left', '');
    offsetfix();
  });

  if (window.location.search.indexOf('backstop')) {
    $('body').addClass('backstop');
  }

  $('.input-file').each(function () {
    var $context = $(this);
    var $input = $(this).find('input'),
        $label = $(this).find('.js-labelFile'),
        labelVal = $label.html();
    $input.on('change', function (element) {
      $context.find('.file-list').html('');

      try {
        var files = Array.from(element.target.files);
        $context.find('.file-list').html('');
        files.forEach(function (n) {
          $context.find('.file-list').append("<div class=\"file-item\">".concat(n.name, "</div>"));
        });
      } catch (e) {
        $context.find('.file-list').append("\n                        <div class=\"file-item\">\n                            \u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0444\u0430\u0439\u043B\u043E\u0432: ".concat(element.target.files.length, "\n                        </div>\n                    "));
      }
    });
  }); // $(".js-select2").select2({
  //     width: '100%' // need to override the changed default
  // });

  $('.datepicker-here').on('focus', function (e) {
    $(this).blur();
    return false;
  }); // $('.js-tooltip').each(function (i,e) {
  //     new Tooltip($(this)[0], {
  //         placement: 'top', // or bottom, left, right, and variations
  //         title: $(this).attr('title')
  //     });
  // })

  Object(tippy_js__WEBPACK_IMPORTED_MODULE_2__["default"])('.js-tooltip', {});
});

/***/ }),

/***/ "./markup/static/js/base/base.js":
/*!***************************************!*\
  !*** ./markup/static/js/base/base.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Base; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Base =
/*#__PURE__*/
function () {
  function Base() {
    _classCallCheck(this, Base);
  }

  _createClass(Base, null, [{
    key: "setHeight",
    value: function setHeight($e) {
      function a($e) {
        var h = 0;
        $e.css('height', '');
        $($e).each(function (e) {
          if ($(this).outerHeight(true) > h) {
            h = $(this).outerHeight(true);
          }
        });
        $($e).outerHeight(h);
      }

      a($e);
      $(window).resize(function () {
        a($e);
      });
      $e.find('img').load(function () {
        a($e);
      });
    }
  }, {
    key: "animTitle",
    value: function animTitle($e) {
      if ($('body').width() < 1024) {
        return;
      }

      this.splitText($e);
      TweenMax.staggerFrom($e.find('.letter'), 0.4, {
        y: "+=105%",
        ///opacity: 0,
        delay: 0.3
      }, 0.05);
    }
  }, {
    key: "splitText",
    value: function splitText($e) {
      var t = $e.text();
      t = t.split(' ');
      t = t.map(function (n) {
        n = n.split('');
        n = n.map(function (e) {
          return '<span class="letter">' + e + '</span>';
        });
        n = n.join('');

        if (!n == '') {
          return '<span class="word">' + n + '</span> ';
        }
      });
      t = t.join('');
      $e.html(t);
    }
  }, {
    key: "animContent",
    value: function animContent($e, t, d) {
      if ($('body').width() < 1024) {
        return;
      }

      if (t == undefined) {
        t = 0.6;
      }

      if (d == undefined) {
        d = 0.85;
      }

      TweenMax.staggerFrom($e, t, {
        y: "+=30",
        opacity: 0,
        delay: d,
        ease: Power0.easeOut //ease: Quad.easeOut,

      }, t / $e.length);
    }
  }, {
    key: "parallaxHover",
    value: function parallaxHover($e, parent) {
      if ($('body').width() < 1024) {
        return;
      } // ПЕРЕМЕННЫЕ: координаты мыши


      window.MOUSE_clientX = 0; // координата X мыши относительно окна

      window.MOUSE_clientY = 0; // координата Y мыши относительно окна
      // СОБЫТИЕ: движение мыши над документом

      document.onmousemove = function (objEvent) {
        if (document.all) {
          // только для IE
          window.MOUSE_clientX = window.event.x;
          window.MOUSE_clientY = window.event.y;
        } else {
          // для остальных браузеров
          window.MOUSE_clientX = objEvent.clientX;
          window.MOUSE_clientY = objEvent.clientY;
        }
      };

      function parallaxBox() {
        if (window.MOUSE_clientX == undefined) {//
        }

        var yPer = window.MOUSE_clientY / ($(window).height() / 100);
        var xPer = window.MOUSE_clientX / ($(window).width() / 100);
        var $xPercent = window.MOUSE_clientX / ($('body').width() / 100) - 50;
        var $yPercent = window.MOUSE_clientY / ($('body').width() / 100) - 50;
        var d = -10;
        var d2 = -10;
        $e.css('transform', 'translate(' + d2 / 100 * $xPercent + '%, ' + d2 / 100 * $yPercent + '%)');
        requestAnimationFrame(parallaxBox);
      }

      requestAnimationFrame(parallaxBox);
      /*setTimeout(function(e) {
          var $p = $e.closest(parent);
          $p.mousemove(function(e){
                var $xPercent = e.clientX / ($('body').width()/100) - 50;
              var $yPercent = e.clientY / ($('body').width()/100) - 50;
              var d = -10;
              var d2 = -10;
              $e.css('transform', 'translate(' + d2/100*$xPercent + '%, ' + d2/100*$yPercent + '%)');
          });
      }, 700)*/
    }
  }, {
    key: "addScripts",
    value: function addScripts(scripts, callback) {
      var loaded = {}; // Для загруженных файлов loaded[i] = true

      var counter = 0;

      function onload(i) {
        if (loaded[i]) return; // лишний вызов onload/onreadystatechange

        loaded[i] = true;
        counter++;
        if (counter == scripts.length) callback();
      }

      for (var i = 0; i < scripts.length; i++) {
        (function (i) {
          var script = addScript(scripts[i]);

          script.onload = function () {
            onload(i);
          };

          script.onreadystatechange = function () {
            // IE8-
            if (this.readyState == 'loaded' || this.readyState == 'complete') {
              setTimeout(this.onload, 0); // возможны повторные вызовы onload
            }
          };
        })(i);
      }

      function addScript(src) {
        var script = document.createElement('script');
        script.src = src;
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(script, s);
        return script;
      }
    }
  }, {
    key: "addScripts",
    value: function addScripts(scripts, callback) {
      var loaded = {}; // Для загруженных файлов loaded[i] = true

      var counter = 0;

      function onload(i) {
        if (loaded[i]) return; // лишний вызов onload/onreadystatechange

        loaded[i] = true;
        counter++;
        if (counter == scripts.length) callback();
      }

      for (var i = 0; i < scripts.length; i++) {
        (function (i) {
          var script = addScript(scripts[i]);

          script.onload = function () {
            onload(i);
          };

          script.onreadystatechange = function () {
            // IE8-
            if (this.readyState == 'loaded' || this.readyState == 'complete') {
              setTimeout(this.onload, 0); // возможны повторные вызовы onload
            }
          };
        })(i);
      }

      function addScript(src) {
        var script = document.createElement('script');
        script.src = src;
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(script, s);
        return script;
      }
    }
  }, {
    key: "random",
    value: function random(min, max) {
      return Math.random() * (max - min) + min;
    }
  }]);

  return Base;
}();



/***/ }),

/***/ "./markup/static/js/base/bvi.js":
/*!**************************************!*\
  !*** ./markup/static/js/base/bvi.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// подключение версии для слабовидящих
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _EN;

  var pathToStatic = "/local/templates/salekhard/frontend/build/static/";
  var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

  if (isIE11) {
    return;
  }

  var bviIsInit = sessionStorage.getItem('bviIsInit');
  bviInit();

  if (bviIsInit) {// $('html').addClass('no-js')
    // $('[data-scrollax]').removeAttr('data-scrollax');
  }

  var click = false;
  $('.js-bvi-init').on('click', function (e) {
    sessionStorage.setItem('bviIsInit', 'true');
  });
  var lang = $('.page-header__lang select').val();

  var glossary = _defineProperty({}, "EN", (_EN = {}, _defineProperty(_EN, 'bvi.isvek.ru', "bvi.isvek.ru"), _defineProperty(_EN, 'Без засечек', "Sans serif"), _defineProperty(_EN, 'Большой', "Big"), _defineProperty(_EN, 'Включить Фрейм', "Enable Frame"), _defineProperty(_EN, 'Выключить Фрейм', "Turn Off Frame"), _defineProperty(_EN, 'Двойной', "Double"), _defineProperty(_EN, 'Дополнительно', "Optional"), _defineProperty(_EN, 'Закрыть', "Close"), _defineProperty(_EN, 'Изображения', "Images"), _defineProperty(_EN, 'Межбуквенный интервал', "Letter spacing"), _defineProperty(_EN, 'Междустрочный интервал', "Line spacing"), _defineProperty(_EN, 'Настройки', "Settings"), _defineProperty(_EN, 'Настройки по умолчанию', "Default settings"), _defineProperty(_EN, 'Одинарный', "Single"), _defineProperty(_EN, 'Полуторный', "One and a half"), _defineProperty(_EN, 'Размер шрифта', "Font size"), _defineProperty(_EN, 'С засечками', "Serif"), _defineProperty(_EN, 'Средний', "Middle"), _defineProperty(_EN, 'Стандартный', "Standard"), _defineProperty(_EN, 'Цвета сайта', "Site colors"), _defineProperty(_EN, 'Шрифт', "Font"), _defineProperty(_EN, 'Обычная версия сайта', "Normal version of the site"), _defineProperty(_EN, 'bvi.isvek.ru v1.0.7', "bvi.isvek.ru v1.0.7"), _defineProperty(_EN, 'Белым по черному', "White on black"), _defineProperty(_EN, 'Вернуть стандартные настройки', "Restore default settings"), _defineProperty(_EN, 'Включить Фрейм', "Enable Frame"), _defineProperty(_EN, 'Закрыть панель', "Close panel"), _defineProperty(_EN, 'Зеленым по темно-коричневому', "Green on dark brown"), _defineProperty(_EN, 'Изображения включены', "Images included"), _defineProperty(_EN, 'Изображения выключены', "Images are off"), _defineProperty(_EN, 'Изображения черно-белые', "Images are black and white"), _defineProperty(_EN, 'Коричневым по бежевому', "Brown on beige"), _defineProperty(_EN, 'Межбуквенный интервал двойной', "Double letter spacing"), _defineProperty(_EN, 'Межбуквенный интервал одинарный', "Single letter spacing"), _defineProperty(_EN, 'Межбуквенный интервал полуторный', "Letter spacing one and a half"), _defineProperty(_EN, 'Междустрочный интервал большой', "Line spacing is large"), _defineProperty(_EN, 'Междустрочный интервал средний', "Line spacing average"), _defineProperty(_EN, 'Междустрочный интервал стандартный', "Line spacing standard"), _defineProperty(_EN, 'Настройки', "Settings"), _defineProperty(_EN, 'Обычная версия сайта', "Normal version of the site"), _defineProperty(_EN, 'Скрыть панель', "Hide panel"), _defineProperty(_EN, 'Темно-синим по голубому', "Navy blue"), _defineProperty(_EN, 'Увеличить размер шрифта', "Increase font size"), _defineProperty(_EN, 'Уменьшить размер шрифта', "Reduce font size"), _defineProperty(_EN, 'Черным по белому', "Black and white"), _defineProperty(_EN, 'Шрифт без засечек', "Sans serif font"), _defineProperty(_EN, 'Шрифт с засечками', "Serif font"), _EN));

  window.bviOnPanelAdd = function () {};

  if (lang == "EN") {
    if ($('.bvi-panel').length) {
      setLang(lang);
    }

    window.bviOnPanelAdd = function () {
      setLang(lang);
    };
  }

  function setLang(lang) {
    $('.bvi-panel *, .bvi-panel-close').each(function (i, e) {
      var text = $(this).clone().children().remove().end().text().trim();

      if (text) {
        $(this).text(glossary[lang][text]);
      }

      var title = $(this).clone().children().remove().end().attr('title');

      if (title) {
        $(this).attr('title', glossary[lang][text]);
      }
    });
  }

  function bviInit(e) {
    $('head').append("\n            <link rel=\"stylesheet\" href=\"".concat(pathToStatic, "bvi/css/bvi.min.css\" type=\"text/css\">\n            <link rel=\"stylesheet\" href=\"").concat(pathToStatic, "bvi/css/bvi-font.min.css\" type=\"text/css\">\n        "));
    scriptLoader(["".concat(pathToStatic, "bvi/js/responsivevoice.min.js")], function () {
      scriptLoader(["".concat(pathToStatic, "bvi/js/js.cookie.min.js")], function () {
        scriptLoader(["".concat(pathToStatic, "bvi/js/bvi.js")], function () {
          scriptLoader(["".concat(pathToStatic, "bvi/js/bvi-init.js")], function () {
            if (click) {// $('.bvi-open').trigger('click')
            }
          });
        });
      });
    });
  }
});

function scriptLoader(scripts, callback) {
  var count = scripts.length;

  function urlCallback(url) {
    return function () {
      count -= count;

      if (count <= 0) {
        callback();
      }
    };
  }

  function loadScript(url) {
    var s = document.createElement('script');
    s.setAttribute('src', url);
    s.onload = urlCallback(url);
    document.head.appendChild(s);
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = scripts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var script = _step.value;
      loadScript(script);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

;

/***/ }),

/***/ "./markup/static/js/base/send-form.js":
/*!********************************************!*\
  !*** ./markup/static/js/base/send-form.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  $('.send-form').on('beforeSubmit submit', function (e) {
    var form = $(this)[0];
    var data = new FormData(form);
    var type = $(this).attr('method');
    var url = $(this).attr('action');
    $.ajax({
      context: this,
      url: url,
      type: type,
      dataType: 'json',
      processData: false,
      contentType: false,
      data: data,
      success: function success(res) {
        drowRes(res.title, res.text, $(this));
        return false;
      },
      error: function error(res) {
        drowRes(res.title, res.text, $(this));
        return false;
      }
    });
    return false;
  });
  window.drowRes = drowRes;
});

function drowRes(title, text, $form) {
  title = title || 'Произошла ошибка';
  text = text || 'Свяжитесь с нами по телефону';
  hideform($form);
  $form.html("\n                    <div class=\"b-senks\">\n                              <div class=\"b-senks__title\">".concat(title, "</div>\n                              <div class=\"b-senks__text\">").concat(text, "</div> \n                              <svg class=\"b-senks__svg\" viewBox=\"0 0 950 398\"  fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g clip-path=\"url(#clip0)\">\n<g filter=\"url(#filter0_d)\">\n<rect width=\"950\" height=\"398\" fill=\"white\" />\n</g>\n<line x1=\"0.275674\" y1=\"-0.417138\" x2=\"459.58\" y2=\"303.123\" stroke=\"#2443be\"/>\n<line x1=\"950.007\" y1=\"0.414239\" x2=\"500.28\" y2=\"304.414\" stroke=\"#2443be\"/>\n<path d=\"M504.618 284.784C495.987 273.578 479.001 280.19 479.001 291.57C479.001 280.19 462.014 273.578 453.382 284.784C444.46 296.369 453.254 316.662 479.001 328.32C504.746 316.662 513.54 296.369 504.618 284.784Z\" fill=\"#F05228\"/>\n</g>\n<defs>\n<filter id=\"filter0_d\" x=\"-30\" y=\"-30\" width=\"1010\" height=\"458\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n<feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"/>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\"/>\n<feOffset/>\n<feGaussianBlur stdDeviation=\"15\"/>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.694118 0 0 0 0 0.756863 0 0 0 0 1 0 0 0 1 0\"/>\n<feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow\"/>\n<feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow\" result=\"shape\"/>\n</filter>\n<clipPath id=\"clip0\">\n<rect width=\"950\" height=\"398\" fill=\"white\"/>\n</clipPath>\n</defs>\n</svg>\n                         \n                    </div>\n                "));
}

function hideform($form) {
  $form.closest('.modal').find('.modal-title, .b-callme__pre-title, .b-callme__title, .b-callme__alert').hide();
  $form.closest('.modal').find('.modal-content').addClass('modal-content_no-guetters');
  $form.closest('.b-event-info__form').css('padding', '0');
  $form.closest('.b-event-info').find('.b-event-info__title').hide();
}

/***/ }),

/***/ "./markup/static/js/main.js":
/*!**********************************!*\
  !*** ./markup/static/js/main.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var components_page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/page/page */ "./markup/components/page/page.js");
/* harmony import */ var components_page_header_page_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/page-header/page-header */ "./markup/components/page-header/page-header.js");
/* harmony import */ var static_js_base_send_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! static/js/base/send-form */ "./markup/static/js/base/send-form.js");
/* harmony import */ var svg4everybody_dist_svg4everybody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! svg4everybody/dist/svg4everybody */ "./node_modules/svg4everybody/dist/svg4everybody.js");
/* harmony import */ var svg4everybody_dist_svg4everybody__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(svg4everybody_dist_svg4everybody__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_b_main_map_b_main_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/b-main-map/b-main-map */ "./markup/components/b-main-map/b-main-map.js");
/* harmony import */ var components_b_event_map_b_event_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/b-event-map/b-event-map */ "./markup/components/b-event-map/b-event-map.js");
/* harmony import */ var components_b_tour_slider_b_tour_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/b-tour-slider/b-tour-slider */ "./markup/components/b-tour-slider/b-tour-slider.js");
/* harmony import */ var components_b_space_b_space__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/b-space/b-space */ "./markup/components/b-space/b-space.js");
/* harmony import */ var components_b_snow_b_snow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/b-snow/b-snow */ "./markup/components/b-snow/b-snow.js");
/* harmony import */ var components_b_snow_big_b_snow_big__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/b-snow-big/b-snow-big */ "./markup/components/b-snow-big/b-snow-big.js");
/* harmony import */ var static_js_base_bvi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! static/js/base/bvi */ "./markup/static/js/base/bvi.js");
/* harmony import */ var components_b_gallery_b_gallery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/b-gallery/b-gallery */ "./markup/components/b-gallery/b-gallery.js");
/* harmony import */ var components_b_video_b_video__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/b-video/b-video */ "./markup/components/b-video/b-video.js");
/* harmony import */ var components_b_photo_slider_b_photo_slider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/b-photo-slider/b-photo-slider */ "./markup/components/b-photo-slider/b-photo-slider.js");
/* harmony import */ var components_b_photo_slider2_b_photo_slider2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! components/b-photo-slider2/b-photo-slider2 */ "./markup/components/b-photo-slider2/b-photo-slider2.js");
/* harmony import */ var components_b_filter_b_filter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! components/b-filter/b-filter */ "./markup/components/b-filter/b-filter.js");
/* harmony import */ var components_b_pdf_b_pdf__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! components/b-pdf/b-pdf */ "./markup/components/b-pdf/b-pdf.js");



















$(document).ready(function () {
  //pageSlider();
  Object(static_js_base_bvi__WEBPACK_IMPORTED_MODULE_10__["default"])();
  Object(components_page_page__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(components_page_header_page_header__WEBPACK_IMPORTED_MODULE_1__["default"])();
  svg4everybody_dist_svg4everybody__WEBPACK_IMPORTED_MODULE_3___default()();
  Object(static_js_base_send_form__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(components_b_tour_slider_b_tour_slider__WEBPACK_IMPORTED_MODULE_6__["default"])();
  Object(components_b_space_b_space__WEBPACK_IMPORTED_MODULE_7__["default"])();
  Object(components_b_snow_b_snow__WEBPACK_IMPORTED_MODULE_8__["default"])();
  Object(components_b_snow_big_b_snow_big__WEBPACK_IMPORTED_MODULE_9__["default"])();
  Object(components_b_main_map_b_main_map__WEBPACK_IMPORTED_MODULE_4__["default"])();
  Object(components_b_event_map_b_event_map__WEBPACK_IMPORTED_MODULE_5__["default"])();
  Object(components_b_gallery_b_gallery__WEBPACK_IMPORTED_MODULE_11__["default"])();
  Object(components_b_video_b_video__WEBPACK_IMPORTED_MODULE_12__["default"])();
  Object(components_b_photo_slider_b_photo_slider__WEBPACK_IMPORTED_MODULE_13__["default"])();
  Object(components_b_photo_slider2_b_photo_slider2__WEBPACK_IMPORTED_MODULE_14__["default"])();
  Object(components_b_filter_b_filter__WEBPACK_IMPORTED_MODULE_15__["default"])();
  Object(components_b_pdf_b_pdf__WEBPACK_IMPORTED_MODULE_16__["default"])();
  $("body").css("opacity", "1").addClass("body-ready");
});

/***/ }),

/***/ "./node_modules/inputmask/dist/inputmask/dependencyLibs/inputmask.dependencyLib.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/inputmask/dist/inputmask/dependencyLibs/inputmask.dependencyLib.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
* dependencyLibs/inputmask.dependencyLib.js
* https://github.com/RobinHerbots/Inputmask
* Copyright (c) 2010 - 2019 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 4.0.6
*/

(function(factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(/*! ../global/window */ "./node_modules/inputmask/dist/inputmask/global/window.js") ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
})(function(window) {
    var document = window.document;
    function indexOf(list, elem) {
        var i = 0, len = list.length;
        for (;i < len; i++) {
            if (list[i] === elem) {
                return i;
            }
        }
        return -1;
    }
    function isWindow(obj) {
        return obj != null && obj === obj.window;
    }
    function isArraylike(obj) {
        var length = "length" in obj && obj.length, ltype = typeof obj;
        if (ltype === "function" || isWindow(obj)) {
            return false;
        }
        if (obj.nodeType === 1 && length) {
            return true;
        }
        return ltype === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
    }
    function isValidElement(elem) {
        return elem instanceof Element;
    }
    function DependencyLib(elem) {
        if (elem instanceof DependencyLib) {
            return elem;
        }
        if (!(this instanceof DependencyLib)) {
            return new DependencyLib(elem);
        }
        if (elem !== undefined && elem !== null && elem !== window) {
            this[0] = elem.nodeName ? elem : elem[0] !== undefined && elem[0].nodeName ? elem[0] : document.querySelector(elem);
            if (this[0] !== undefined && this[0] !== null) {
                this[0].eventRegistry = this[0].eventRegistry || {};
            }
        }
    }
    function getWindow(elem) {
        return isWindow(elem) ? elem : elem.nodeType === 9 ? elem.defaultView || elem.parentWindow : false;
    }
    DependencyLib.prototype = {
        on: function(events, handler) {
            if (isValidElement(this[0])) {
                var eventRegistry = this[0].eventRegistry, elem = this[0];
                function addEvent(ev, namespace) {
                    if (elem.addEventListener) {
                        elem.addEventListener(ev, handler, false);
                    } else if (elem.attachEvent) {
                        elem.attachEvent("on" + ev, handler);
                    }
                    eventRegistry[ev] = eventRegistry[ev] || {};
                    eventRegistry[ev][namespace] = eventRegistry[ev][namespace] || [];
                    eventRegistry[ev][namespace].push(handler);
                }
                var _events = events.split(" ");
                for (var endx = 0; endx < _events.length; endx++) {
                    var nsEvent = _events[endx].split("."), ev = nsEvent[0], namespace = nsEvent[1] || "global";
                    addEvent(ev, namespace);
                }
            }
            return this;
        },
        off: function(events, handler) {
            if (isValidElement(this[0])) {
                var eventRegistry = this[0].eventRegistry, elem = this[0];
                function removeEvent(ev, namespace, handler) {
                    if (ev in eventRegistry === true) {
                        if (elem.removeEventListener) {
                            elem.removeEventListener(ev, handler, false);
                        } else if (elem.detachEvent) {
                            elem.detachEvent("on" + ev, handler);
                        }
                        if (namespace === "global") {
                            for (var nmsp in eventRegistry[ev]) {
                                eventRegistry[ev][nmsp].splice(eventRegistry[ev][nmsp].indexOf(handler), 1);
                            }
                        } else {
                            eventRegistry[ev][namespace].splice(eventRegistry[ev][namespace].indexOf(handler), 1);
                        }
                    }
                }
                function resolveNamespace(ev, namespace) {
                    var evts = [], hndx, hndL;
                    if (ev.length > 0) {
                        if (handler === undefined) {
                            for (hndx = 0, hndL = eventRegistry[ev][namespace].length; hndx < hndL; hndx++) {
                                evts.push({
                                    ev: ev,
                                    namespace: namespace && namespace.length > 0 ? namespace : "global",
                                    handler: eventRegistry[ev][namespace][hndx]
                                });
                            }
                        } else {
                            evts.push({
                                ev: ev,
                                namespace: namespace && namespace.length > 0 ? namespace : "global",
                                handler: handler
                            });
                        }
                    } else if (namespace.length > 0) {
                        for (var evNdx in eventRegistry) {
                            for (var nmsp in eventRegistry[evNdx]) {
                                if (nmsp === namespace) {
                                    if (handler === undefined) {
                                        for (hndx = 0, hndL = eventRegistry[evNdx][nmsp].length; hndx < hndL; hndx++) {
                                            evts.push({
                                                ev: evNdx,
                                                namespace: nmsp,
                                                handler: eventRegistry[evNdx][nmsp][hndx]
                                            });
                                        }
                                    } else {
                                        evts.push({
                                            ev: evNdx,
                                            namespace: nmsp,
                                            handler: handler
                                        });
                                    }
                                }
                            }
                        }
                    }
                    return evts;
                }
                var _events = events.split(" ");
                for (var endx = 0; endx < _events.length; endx++) {
                    var nsEvent = _events[endx].split("."), offEvents = resolveNamespace(nsEvent[0], nsEvent[1]);
                    for (var i = 0, offEventsL = offEvents.length; i < offEventsL; i++) {
                        removeEvent(offEvents[i].ev, offEvents[i].namespace, offEvents[i].handler);
                    }
                }
            }
            return this;
        },
        trigger: function(events) {
            if (isValidElement(this[0])) {
                var eventRegistry = this[0].eventRegistry, elem = this[0];
                var _events = typeof events === "string" ? events.split(" ") : [ events.type ];
                for (var endx = 0; endx < _events.length; endx++) {
                    var nsEvent = _events[endx].split("."), ev = nsEvent[0], namespace = nsEvent[1] || "global";
                    if (document !== undefined && namespace === "global") {
                        var evnt, i, params = {
                            bubbles: true,
                            cancelable: true,
                            detail: arguments[1]
                        };
                        if (document.createEvent) {
                            try {
                                evnt = new CustomEvent(ev, params);
                            } catch (e) {
                                evnt = document.createEvent("CustomEvent");
                                evnt.initCustomEvent(ev, params.bubbles, params.cancelable, params.detail);
                            }
                            if (events.type) DependencyLib.extend(evnt, events);
                            elem.dispatchEvent(evnt);
                        } else {
                            evnt = document.createEventObject();
                            evnt.eventType = ev;
                            evnt.detail = arguments[1];
                            if (events.type) DependencyLib.extend(evnt, events);
                            elem.fireEvent("on" + evnt.eventType, evnt);
                        }
                    } else if (eventRegistry[ev] !== undefined) {
                        arguments[0] = arguments[0].type ? arguments[0] : DependencyLib.Event(arguments[0]);
                        if (namespace === "global") {
                            for (var nmsp in eventRegistry[ev]) {
                                for (i = 0; i < eventRegistry[ev][nmsp].length; i++) {
                                    eventRegistry[ev][nmsp][i].apply(elem, arguments);
                                }
                            }
                        } else {
                            for (i = 0; i < eventRegistry[ev][namespace].length; i++) {
                                eventRegistry[ev][namespace][i].apply(elem, arguments);
                            }
                        }
                    }
                }
            }
            return this;
        }
    };
    DependencyLib.isFunction = function(obj) {
        return typeof obj === "function";
    };
    DependencyLib.noop = function() {};
    DependencyLib.isArray = Array.isArray;
    DependencyLib.inArray = function(elem, arr, i) {
        return arr == null ? -1 : indexOf(arr, elem, i);
    };
    DependencyLib.valHooks = undefined;
    DependencyLib.isPlainObject = function(obj) {
        if (typeof obj !== "object" || obj.nodeType || isWindow(obj)) {
            return false;
        }
        if (obj.constructor && !Object.hasOwnProperty.call(obj.constructor.prototype, "isPrototypeOf")) {
            return false;
        }
        return true;
    };
    DependencyLib.extend = function() {
        var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
        if (typeof target === "boolean") {
            deep = target;
            target = arguments[i] || {};
            i++;
        }
        if (typeof target !== "object" && !DependencyLib.isFunction(target)) {
            target = {};
        }
        if (i === length) {
            target = this;
            i--;
        }
        for (;i < length; i++) {
            if ((options = arguments[i]) != null) {
                for (name in options) {
                    src = target[name];
                    copy = options[name];
                    if (target === copy) {
                        continue;
                    }
                    if (deep && copy && (DependencyLib.isPlainObject(copy) || (copyIsArray = DependencyLib.isArray(copy)))) {
                        if (copyIsArray) {
                            copyIsArray = false;
                            clone = src && DependencyLib.isArray(src) ? src : [];
                        } else {
                            clone = src && DependencyLib.isPlainObject(src) ? src : {};
                        }
                        target[name] = DependencyLib.extend(deep, clone, copy);
                    } else if (copy !== undefined) {
                        target[name] = copy;
                    }
                }
            }
        }
        return target;
    };
    DependencyLib.each = function(obj, callback) {
        var value, i = 0;
        if (isArraylike(obj)) {
            for (var length = obj.length; i < length; i++) {
                value = callback.call(obj[i], i, obj[i]);
                if (value === false) {
                    break;
                }
            }
        } else {
            for (i in obj) {
                value = callback.call(obj[i], i, obj[i]);
                if (value === false) {
                    break;
                }
            }
        }
        return obj;
    };
    DependencyLib.data = function(owner, key, value) {
        if (value === undefined) {
            return owner.__data ? owner.__data[key] : null;
        } else {
            owner.__data = owner.__data || {};
            owner.__data[key] = value;
        }
    };
    if (typeof window.CustomEvent === "function") {
        DependencyLib.Event = window.CustomEvent;
    } else {
        DependencyLib.Event = function(event, params) {
            params = params || {
                bubbles: false,
                cancelable: false,
                detail: undefined
            };
            var evt = document.createEvent("CustomEvent");
            evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
            return evt;
        };
        DependencyLib.Event.prototype = window.Event.prototype;
    }
    return DependencyLib;
});

/***/ }),

/***/ "./node_modules/inputmask/dist/inputmask/global/window.js":
/*!****************************************************************!*\
  !*** ./node_modules/inputmask/dist/inputmask/global/window.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
* global/window.js
* https://github.com/RobinHerbots/Inputmask
* Copyright (c) 2010 - 2019 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 4.0.6
*/

if (true) !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
    return typeof window !== "undefined" ? window : new (eval("require('jsdom').JSDOM"))("").window;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); else {}

/***/ }),

/***/ "./node_modules/inputmask/dist/inputmask/inputmask.js":
/*!************************************************************!*\
  !*** ./node_modules/inputmask/dist/inputmask/inputmask.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
* inputmask.js
* https://github.com/RobinHerbots/Inputmask
* Copyright (c) 2010 - 2019 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 4.0.6
*/

(function(factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(/*! ./dependencyLibs/inputmask.dependencyLib */ "./node_modules/inputmask/dist/inputmask/dependencyLibs/inputmask.dependencyLib.js"), __webpack_require__(/*! ./global/window */ "./node_modules/inputmask/dist/inputmask/global/window.js") ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
})(function($, window, undefined) {
    var document = window.document, ua = navigator.userAgent, ie = ua.indexOf("MSIE ") > 0 || ua.indexOf("Trident/") > 0, mobile = isInputEventSupported("touchstart"), iemobile = /iemobile/i.test(ua), iphone = /iphone/i.test(ua) && !iemobile;
    function Inputmask(alias, options, internal) {
        if (!(this instanceof Inputmask)) {
            return new Inputmask(alias, options, internal);
        }
        this.el = undefined;
        this.events = {};
        this.maskset = undefined;
        this.refreshValue = false;
        if (internal !== true) {
            if ($.isPlainObject(alias)) {
                options = alias;
            } else {
                options = options || {};
                if (alias) options.alias = alias;
            }
            this.opts = $.extend(true, {}, this.defaults, options);
            this.noMasksCache = options && options.definitions !== undefined;
            this.userOptions = options || {};
            this.isRTL = this.opts.numericInput;
            resolveAlias(this.opts.alias, options, this.opts);
        }
    }
    Inputmask.prototype = {
        dataAttribute: "data-inputmask",
        defaults: {
            placeholder: "_",
            optionalmarker: [ "[", "]" ],
            quantifiermarker: [ "{", "}" ],
            groupmarker: [ "(", ")" ],
            alternatormarker: "|",
            escapeChar: "\\",
            mask: null,
            regex: null,
            oncomplete: $.noop,
            onincomplete: $.noop,
            oncleared: $.noop,
            repeat: 0,
            greedy: false,
            autoUnmask: false,
            removeMaskOnSubmit: false,
            clearMaskOnLostFocus: true,
            insertMode: true,
            clearIncomplete: false,
            alias: null,
            onKeyDown: $.noop,
            onBeforeMask: null,
            onBeforePaste: function(pastedValue, opts) {
                return $.isFunction(opts.onBeforeMask) ? opts.onBeforeMask.call(this, pastedValue, opts) : pastedValue;
            },
            onBeforeWrite: null,
            onUnMask: null,
            showMaskOnFocus: true,
            showMaskOnHover: true,
            onKeyValidation: $.noop,
            skipOptionalPartCharacter: " ",
            numericInput: false,
            rightAlign: false,
            undoOnEscape: true,
            radixPoint: "",
            _radixDance: false,
            groupSeparator: "",
            keepStatic: null,
            positionCaretOnTab: true,
            tabThrough: false,
            supportsInputType: [ "text", "tel", "url", "password", "search" ],
            ignorables: [ 8, 9, 13, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 0, 229 ],
            isComplete: null,
            preValidation: null,
            postValidation: null,
            staticDefinitionSymbol: undefined,
            jitMasking: false,
            nullable: true,
            inputEventOnly: false,
            noValuePatching: false,
            positionCaretOnClick: "lvp",
            casing: null,
            inputmode: "verbatim",
            colorMask: false,
            disablePredictiveText: false,
            importDataAttributes: true,
            shiftPositions: true
        },
        definitions: {
            9: {
                validator: "[0-9\uff11-\uff19]",
                definitionSymbol: "*"
            },
            a: {
                validator: "[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
                definitionSymbol: "*"
            },
            "*": {
                validator: "[0-9\uff11-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]"
            }
        },
        aliases: {},
        masksCache: {},
        mask: function(elems) {
            var that = this;
            function importAttributeOptions(npt, opts, userOptions, dataAttribute) {
                if (opts.importDataAttributes === true) {
                    var attrOptions = npt.getAttribute(dataAttribute), option, dataoptions, optionData, p;
                    function importOption(option, optionData) {
                        optionData = optionData !== undefined ? optionData : npt.getAttribute(dataAttribute + "-" + option);
                        if (optionData !== null) {
                            if (typeof optionData === "string") {
                                if (option.indexOf("on") === 0) optionData = window[optionData]; else if (optionData === "false") optionData = false; else if (optionData === "true") optionData = true;
                            }
                            userOptions[option] = optionData;
                        }
                    }
                    if (attrOptions && attrOptions !== "") {
                        attrOptions = attrOptions.replace(/'/g, '"');
                        dataoptions = JSON.parse("{" + attrOptions + "}");
                    }
                    if (dataoptions) {
                        optionData = undefined;
                        for (p in dataoptions) {
                            if (p.toLowerCase() === "alias") {
                                optionData = dataoptions[p];
                                break;
                            }
                        }
                    }
                    importOption("alias", optionData);
                    if (userOptions.alias) {
                        resolveAlias(userOptions.alias, userOptions, opts);
                    }
                    for (option in opts) {
                        if (dataoptions) {
                            optionData = undefined;
                            for (p in dataoptions) {
                                if (p.toLowerCase() === option.toLowerCase()) {
                                    optionData = dataoptions[p];
                                    break;
                                }
                            }
                        }
                        importOption(option, optionData);
                    }
                }
                $.extend(true, opts, userOptions);
                if (npt.dir === "rtl" || opts.rightAlign) {
                    npt.style.textAlign = "right";
                }
                if (npt.dir === "rtl" || opts.numericInput) {
                    npt.dir = "ltr";
                    npt.removeAttribute("dir");
                    opts.isRTL = true;
                }
                return Object.keys(userOptions).length;
            }
            if (typeof elems === "string") {
                elems = document.getElementById(elems) || document.querySelectorAll(elems);
            }
            elems = elems.nodeName ? [ elems ] : elems;
            $.each(elems, function(ndx, el) {
                var scopedOpts = $.extend(true, {}, that.opts);
                if (importAttributeOptions(el, scopedOpts, $.extend(true, {}, that.userOptions), that.dataAttribute)) {
                    var maskset = generateMaskSet(scopedOpts, that.noMasksCache);
                    if (maskset !== undefined) {
                        if (el.inputmask !== undefined) {
                            el.inputmask.opts.autoUnmask = true;
                            el.inputmask.remove();
                        }
                        el.inputmask = new Inputmask(undefined, undefined, true);
                        el.inputmask.opts = scopedOpts;
                        el.inputmask.noMasksCache = that.noMasksCache;
                        el.inputmask.userOptions = $.extend(true, {}, that.userOptions);
                        el.inputmask.isRTL = scopedOpts.isRTL || scopedOpts.numericInput;
                        el.inputmask.el = el;
                        el.inputmask.maskset = maskset;
                        $.data(el, "_inputmask_opts", scopedOpts);
                        maskScope.call(el.inputmask, {
                            action: "mask"
                        });
                    }
                }
            });
            return elems && elems[0] ? elems[0].inputmask || this : this;
        },
        option: function(options, noremask) {
            if (typeof options === "string") {
                return this.opts[options];
            } else if (typeof options === "object") {
                $.extend(this.userOptions, options);
                if (this.el && noremask !== true) {
                    this.mask(this.el);
                }
                return this;
            }
        },
        unmaskedvalue: function(value) {
            this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache);
            return maskScope.call(this, {
                action: "unmaskedvalue",
                value: value
            });
        },
        remove: function() {
            return maskScope.call(this, {
                action: "remove"
            });
        },
        getemptymask: function() {
            this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache);
            return maskScope.call(this, {
                action: "getemptymask"
            });
        },
        hasMaskedValue: function() {
            return !this.opts.autoUnmask;
        },
        isComplete: function() {
            this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache);
            return maskScope.call(this, {
                action: "isComplete"
            });
        },
        getmetadata: function() {
            this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache);
            return maskScope.call(this, {
                action: "getmetadata"
            });
        },
        isValid: function(value) {
            this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache);
            return maskScope.call(this, {
                action: "isValid",
                value: value
            });
        },
        format: function(value, metadata) {
            this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache);
            return maskScope.call(this, {
                action: "format",
                value: value,
                metadata: metadata
            });
        },
        setValue: function(value) {
            if (this.el) {
                $(this.el).trigger("setvalue", [ value ]);
            }
        },
        analyseMask: function(mask, regexMask, opts) {
            var tokenizer = /(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?(?:\|[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g, regexTokenizer = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g, escaped = false, currentToken = new MaskToken(), match, m, openenings = [], maskTokens = [], openingToken, currentOpeningToken, alternator, lastMatch, groupToken;
            function MaskToken(isGroup, isOptional, isQuantifier, isAlternator) {
                this.matches = [];
                this.openGroup = isGroup || false;
                this.alternatorGroup = false;
                this.isGroup = isGroup || false;
                this.isOptional = isOptional || false;
                this.isQuantifier = isQuantifier || false;
                this.isAlternator = isAlternator || false;
                this.quantifier = {
                    min: 1,
                    max: 1
                };
            }
            function insertTestDefinition(mtoken, element, position) {
                position = position !== undefined ? position : mtoken.matches.length;
                var prevMatch = mtoken.matches[position - 1];
                if (regexMask) {
                    if (element.indexOf("[") === 0 || escaped && /\\d|\\s|\\w]/i.test(element) || element === ".") {
                        mtoken.matches.splice(position++, 0, {
                            fn: new RegExp(element, opts.casing ? "i" : ""),
                            optionality: false,
                            newBlockMarker: prevMatch === undefined ? "master" : prevMatch.def !== element,
                            casing: null,
                            def: element,
                            placeholder: undefined,
                            nativeDef: element
                        });
                    } else {
                        if (escaped) element = element[element.length - 1];
                        $.each(element.split(""), function(ndx, lmnt) {
                            prevMatch = mtoken.matches[position - 1];
                            mtoken.matches.splice(position++, 0, {
                                fn: null,
                                optionality: false,
                                newBlockMarker: prevMatch === undefined ? "master" : prevMatch.def !== lmnt && prevMatch.fn !== null,
                                casing: null,
                                def: opts.staticDefinitionSymbol || lmnt,
                                placeholder: opts.staticDefinitionSymbol !== undefined ? lmnt : undefined,
                                nativeDef: (escaped ? "'" : "") + lmnt
                            });
                        });
                    }
                    escaped = false;
                } else {
                    var maskdef = (opts.definitions ? opts.definitions[element] : undefined) || Inputmask.prototype.definitions[element];
                    if (maskdef && !escaped) {
                        mtoken.matches.splice(position++, 0, {
                            fn: maskdef.validator ? typeof maskdef.validator == "string" ? new RegExp(maskdef.validator, opts.casing ? "i" : "") : new function() {
                                this.test = maskdef.validator;
                            }() : new RegExp("."),
                            optionality: false,
                            newBlockMarker: prevMatch === undefined ? "master" : prevMatch.def !== (maskdef.definitionSymbol || element),
                            casing: maskdef.casing,
                            def: maskdef.definitionSymbol || element,
                            placeholder: maskdef.placeholder,
                            nativeDef: element
                        });
                    } else {
                        mtoken.matches.splice(position++, 0, {
                            fn: null,
                            optionality: false,
                            newBlockMarker: prevMatch === undefined ? "master" : prevMatch.def !== element && prevMatch.fn !== null,
                            casing: null,
                            def: opts.staticDefinitionSymbol || element,
                            placeholder: opts.staticDefinitionSymbol !== undefined ? element : undefined,
                            nativeDef: (escaped ? "'" : "") + element
                        });
                        escaped = false;
                    }
                }
            }
            function verifyGroupMarker(maskToken) {
                if (maskToken && maskToken.matches) {
                    $.each(maskToken.matches, function(ndx, token) {
                        var nextToken = maskToken.matches[ndx + 1];
                        if ((nextToken === undefined || (nextToken.matches === undefined || nextToken.isQuantifier === false)) && token && token.isGroup) {
                            token.isGroup = false;
                            if (!regexMask) {
                                insertTestDefinition(token, opts.groupmarker[0], 0);
                                if (token.openGroup !== true) {
                                    insertTestDefinition(token, opts.groupmarker[1]);
                                }
                            }
                        }
                        verifyGroupMarker(token);
                    });
                }
            }
            function defaultCase() {
                if (openenings.length > 0) {
                    currentOpeningToken = openenings[openenings.length - 1];
                    insertTestDefinition(currentOpeningToken, m);
                    if (currentOpeningToken.isAlternator) {
                        alternator = openenings.pop();
                        for (var mndx = 0; mndx < alternator.matches.length; mndx++) {
                            if (alternator.matches[mndx].isGroup) alternator.matches[mndx].isGroup = false;
                        }
                        if (openenings.length > 0) {
                            currentOpeningToken = openenings[openenings.length - 1];
                            currentOpeningToken.matches.push(alternator);
                        } else {
                            currentToken.matches.push(alternator);
                        }
                    }
                } else {
                    insertTestDefinition(currentToken, m);
                }
            }
            function reverseTokens(maskToken) {
                function reverseStatic(st) {
                    if (st === opts.optionalmarker[0]) st = opts.optionalmarker[1]; else if (st === opts.optionalmarker[1]) st = opts.optionalmarker[0]; else if (st === opts.groupmarker[0]) st = opts.groupmarker[1]; else if (st === opts.groupmarker[1]) st = opts.groupmarker[0];
                    return st;
                }
                maskToken.matches = maskToken.matches.reverse();
                for (var match in maskToken.matches) {
                    if (maskToken.matches.hasOwnProperty(match)) {
                        var intMatch = parseInt(match);
                        if (maskToken.matches[match].isQuantifier && maskToken.matches[intMatch + 1] && maskToken.matches[intMatch + 1].isGroup) {
                            var qt = maskToken.matches[match];
                            maskToken.matches.splice(match, 1);
                            maskToken.matches.splice(intMatch + 1, 0, qt);
                        }
                        if (maskToken.matches[match].matches !== undefined) {
                            maskToken.matches[match] = reverseTokens(maskToken.matches[match]);
                        } else {
                            maskToken.matches[match] = reverseStatic(maskToken.matches[match]);
                        }
                    }
                }
                return maskToken;
            }
            function groupify(matches) {
                var groupToken = new MaskToken(true);
                groupToken.openGroup = false;
                groupToken.matches = matches;
                return groupToken;
            }
            if (regexMask) {
                opts.optionalmarker[0] = undefined;
                opts.optionalmarker[1] = undefined;
            }
            while (match = regexMask ? regexTokenizer.exec(mask) : tokenizer.exec(mask)) {
                m = match[0];
                if (regexMask) {
                    switch (m.charAt(0)) {
                      case "?":
                        m = "{0,1}";
                        break;

                      case "+":
                      case "*":
                        m = "{" + m + "}";
                        break;
                    }
                }
                if (escaped) {
                    defaultCase();
                    continue;
                }
                switch (m.charAt(0)) {
                  case "(?=":
                    break;

                  case "(?!":
                    break;

                  case "(?<=":
                    break;

                  case "(?<!":
                    break;

                  case opts.escapeChar:
                    escaped = true;
                    if (regexMask) {
                        defaultCase();
                    }
                    break;

                  case opts.optionalmarker[1]:
                  case opts.groupmarker[1]:
                    openingToken = openenings.pop();
                    openingToken.openGroup = false;
                    if (openingToken !== undefined) {
                        if (openenings.length > 0) {
                            currentOpeningToken = openenings[openenings.length - 1];
                            currentOpeningToken.matches.push(openingToken);
                            if (currentOpeningToken.isAlternator) {
                                alternator = openenings.pop();
                                for (var mndx = 0; mndx < alternator.matches.length; mndx++) {
                                    alternator.matches[mndx].isGroup = false;
                                    alternator.matches[mndx].alternatorGroup = false;
                                }
                                if (openenings.length > 0) {
                                    currentOpeningToken = openenings[openenings.length - 1];
                                    currentOpeningToken.matches.push(alternator);
                                } else {
                                    currentToken.matches.push(alternator);
                                }
                            }
                        } else {
                            currentToken.matches.push(openingToken);
                        }
                    } else defaultCase();
                    break;

                  case opts.optionalmarker[0]:
                    openenings.push(new MaskToken(false, true));
                    break;

                  case opts.groupmarker[0]:
                    openenings.push(new MaskToken(true));
                    break;

                  case opts.quantifiermarker[0]:
                    var quantifier = new MaskToken(false, false, true);
                    m = m.replace(/[{}]/g, "");
                    var mqj = m.split("|"), mq = mqj[0].split(","), mq0 = isNaN(mq[0]) ? mq[0] : parseInt(mq[0]), mq1 = mq.length === 1 ? mq0 : isNaN(mq[1]) ? mq[1] : parseInt(mq[1]);
                    if (mq0 === "*" || mq0 === "+") {
                        mq0 = mq1 === "*" ? 0 : 1;
                    }
                    quantifier.quantifier = {
                        min: mq0,
                        max: mq1,
                        jit: mqj[1]
                    };
                    var matches = openenings.length > 0 ? openenings[openenings.length - 1].matches : currentToken.matches;
                    match = matches.pop();
                    if (match.isAlternator) {
                        matches.push(match);
                        matches = match.matches;
                        var groupToken = new MaskToken(true);
                        var tmpMatch = matches.pop();
                        matches.push(groupToken);
                        matches = groupToken.matches;
                        match = tmpMatch;
                    }
                    if (!match.isGroup) {
                        match = groupify([ match ]);
                    }
                    matches.push(match);
                    matches.push(quantifier);
                    break;

                  case opts.alternatormarker:
                    function groupQuantifier(matches) {
                        var lastMatch = matches.pop();
                        if (lastMatch.isQuantifier) {
                            lastMatch = groupify([ matches.pop(), lastMatch ]);
                        }
                        return lastMatch;
                    }
                    if (openenings.length > 0) {
                        currentOpeningToken = openenings[openenings.length - 1];
                        var subToken = currentOpeningToken.matches[currentOpeningToken.matches.length - 1];
                        if (currentOpeningToken.openGroup && (subToken.matches === undefined || subToken.isGroup === false && subToken.isAlternator === false)) {
                            lastMatch = openenings.pop();
                        } else {
                            lastMatch = groupQuantifier(currentOpeningToken.matches);
                        }
                    } else {
                        lastMatch = groupQuantifier(currentToken.matches);
                    }
                    if (lastMatch.isAlternator) {
                        openenings.push(lastMatch);
                    } else {
                        if (lastMatch.alternatorGroup) {
                            alternator = openenings.pop();
                            lastMatch.alternatorGroup = false;
                        } else {
                            alternator = new MaskToken(false, false, false, true);
                        }
                        alternator.matches.push(lastMatch);
                        openenings.push(alternator);
                        if (lastMatch.openGroup) {
                            lastMatch.openGroup = false;
                            var alternatorGroup = new MaskToken(true);
                            alternatorGroup.alternatorGroup = true;
                            openenings.push(alternatorGroup);
                        }
                    }
                    break;

                  default:
                    defaultCase();
                }
            }
            while (openenings.length > 0) {
                openingToken = openenings.pop();
                currentToken.matches.push(openingToken);
            }
            if (currentToken.matches.length > 0) {
                verifyGroupMarker(currentToken);
                maskTokens.push(currentToken);
            }
            if (opts.numericInput || opts.isRTL) {
                reverseTokens(maskTokens[0]);
            }
            return maskTokens;
        }
    };
    Inputmask.extendDefaults = function(options) {
        $.extend(true, Inputmask.prototype.defaults, options);
    };
    Inputmask.extendDefinitions = function(definition) {
        $.extend(true, Inputmask.prototype.definitions, definition);
    };
    Inputmask.extendAliases = function(alias) {
        $.extend(true, Inputmask.prototype.aliases, alias);
    };
    Inputmask.format = function(value, options, metadata) {
        return Inputmask(options).format(value, metadata);
    };
    Inputmask.unmask = function(value, options) {
        return Inputmask(options).unmaskedvalue(value);
    };
    Inputmask.isValid = function(value, options) {
        return Inputmask(options).isValid(value);
    };
    Inputmask.remove = function(elems) {
        if (typeof elems === "string") {
            elems = document.getElementById(elems) || document.querySelectorAll(elems);
        }
        elems = elems.nodeName ? [ elems ] : elems;
        $.each(elems, function(ndx, el) {
            if (el.inputmask) el.inputmask.remove();
        });
    };
    Inputmask.setValue = function(elems, value) {
        if (typeof elems === "string") {
            elems = document.getElementById(elems) || document.querySelectorAll(elems);
        }
        elems = elems.nodeName ? [ elems ] : elems;
        $.each(elems, function(ndx, el) {
            if (el.inputmask) el.inputmask.setValue(value); else $(el).trigger("setvalue", [ value ]);
        });
    };
    Inputmask.escapeRegex = function(str) {
        var specials = [ "/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^" ];
        return str.replace(new RegExp("(\\" + specials.join("|\\") + ")", "gim"), "\\$1");
    };
    Inputmask.keyCode = {
        BACKSPACE: 8,
        BACKSPACE_SAFARI: 127,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        INSERT: 45,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38,
        X: 88,
        CONTROL: 17
    };
    Inputmask.dependencyLib = $;
    function resolveAlias(aliasStr, options, opts) {
        var aliasDefinition = Inputmask.prototype.aliases[aliasStr];
        if (aliasDefinition) {
            if (aliasDefinition.alias) resolveAlias(aliasDefinition.alias, undefined, opts);
            $.extend(true, opts, aliasDefinition);
            $.extend(true, opts, options);
            return true;
        } else if (opts.mask === null) {
            opts.mask = aliasStr;
        }
        return false;
    }
    function generateMaskSet(opts, nocache) {
        function generateMask(mask, metadata, opts) {
            var regexMask = false;
            if (mask === null || mask === "") {
                regexMask = opts.regex !== null;
                if (regexMask) {
                    mask = opts.regex;
                    mask = mask.replace(/^(\^)(.*)(\$)$/, "$2");
                } else {
                    regexMask = true;
                    mask = ".*";
                }
            }
            if (mask.length === 1 && opts.greedy === false && opts.repeat !== 0) {
                opts.placeholder = "";
            }
            if (opts.repeat > 0 || opts.repeat === "*" || opts.repeat === "+") {
                var repeatStart = opts.repeat === "*" ? 0 : opts.repeat === "+" ? 1 : opts.repeat;
                mask = opts.groupmarker[0] + mask + opts.groupmarker[1] + opts.quantifiermarker[0] + repeatStart + "," + opts.repeat + opts.quantifiermarker[1];
            }
            var masksetDefinition, maskdefKey = regexMask ? "regex_" + opts.regex : opts.numericInput ? mask.split("").reverse().join("") : mask;
            if (Inputmask.prototype.masksCache[maskdefKey] === undefined || nocache === true) {
                masksetDefinition = {
                    mask: mask,
                    maskToken: Inputmask.prototype.analyseMask(mask, regexMask, opts),
                    validPositions: {},
                    _buffer: undefined,
                    buffer: undefined,
                    tests: {},
                    excludes: {},
                    metadata: metadata,
                    maskLength: undefined,
                    jitOffset: {}
                };
                if (nocache !== true) {
                    Inputmask.prototype.masksCache[maskdefKey] = masksetDefinition;
                    masksetDefinition = $.extend(true, {}, Inputmask.prototype.masksCache[maskdefKey]);
                }
            } else masksetDefinition = $.extend(true, {}, Inputmask.prototype.masksCache[maskdefKey]);
            return masksetDefinition;
        }
        var ms;
        if ($.isFunction(opts.mask)) {
            opts.mask = opts.mask(opts);
        }
        if ($.isArray(opts.mask)) {
            if (opts.mask.length > 1) {
                if (opts.keepStatic === null) {
                    opts.keepStatic = "auto";
                    for (var i = 0; i < opts.mask.length; i++) {
                        if (opts.mask[i].charAt(0) !== opts.mask[0].charAt(0)) {
                            opts.keepStatic = true;
                            break;
                        }
                    }
                }
                var altMask = opts.groupmarker[0];
                $.each(opts.isRTL ? opts.mask.reverse() : opts.mask, function(ndx, msk) {
                    if (altMask.length > 1) {
                        altMask += opts.groupmarker[1] + opts.alternatormarker + opts.groupmarker[0];
                    }
                    if (msk.mask !== undefined && !$.isFunction(msk.mask)) {
                        altMask += msk.mask;
                    } else {
                        altMask += msk;
                    }
                });
                altMask += opts.groupmarker[1];
                return generateMask(altMask, opts.mask, opts);
            } else opts.mask = opts.mask.pop();
        }
        if (opts.mask && opts.mask.mask !== undefined && !$.isFunction(opts.mask.mask)) {
            ms = generateMask(opts.mask.mask, opts.mask, opts);
        } else {
            ms = generateMask(opts.mask, opts.mask, opts);
        }
        return ms;
    }
    function isInputEventSupported(eventName) {
        var el = document.createElement("input"), evName = "on" + eventName, isSupported = evName in el;
        if (!isSupported) {
            el.setAttribute(evName, "return;");
            isSupported = typeof el[evName] === "function";
        }
        el = null;
        return isSupported;
    }
    function maskScope(actionObj, maskset, opts) {
        maskset = maskset || this.maskset;
        opts = opts || this.opts;
        var inputmask = this, el = this.el, isRTL = this.isRTL, undoValue, $el, skipKeyPressEvent = false, skipInputEvent = false, ignorable = false, maxLength, mouseEnter = false, colorMask, originalPlaceholder;
        function getMaskTemplate(baseOnInput, minimalPos, includeMode, noJit, clearOptionalTail) {
            var greedy = opts.greedy;
            if (clearOptionalTail) opts.greedy = false;
            minimalPos = minimalPos || 0;
            var maskTemplate = [], ndxIntlzr, pos = 0, test, testPos, lvp = getLastValidPosition();
            do {
                if (baseOnInput === true && getMaskSet().validPositions[pos]) {
                    testPos = clearOptionalTail && getMaskSet().validPositions[pos].match.optionality === true && getMaskSet().validPositions[pos + 1] === undefined && (getMaskSet().validPositions[pos].generatedInput === true || getMaskSet().validPositions[pos].input == opts.skipOptionalPartCharacter && pos > 0) ? determineTestTemplate(pos, getTests(pos, ndxIntlzr, pos - 1)) : getMaskSet().validPositions[pos];
                    test = testPos.match;
                    ndxIntlzr = testPos.locator.slice();
                    maskTemplate.push(includeMode === true ? testPos.input : includeMode === false ? test.nativeDef : getPlaceholder(pos, test));
                } else {
                    testPos = getTestTemplate(pos, ndxIntlzr, pos - 1);
                    test = testPos.match;
                    ndxIntlzr = testPos.locator.slice();
                    var jitMasking = noJit === true ? false : opts.jitMasking !== false ? opts.jitMasking : test.jit;
                    if (jitMasking === false || jitMasking === undefined || typeof jitMasking === "number" && isFinite(jitMasking) && jitMasking > pos) {
                        maskTemplate.push(includeMode === false ? test.nativeDef : getPlaceholder(pos, test));
                    }
                }
                if (opts.keepStatic === "auto") {
                    if (test.newBlockMarker && test.fn !== null) {
                        opts.keepStatic = pos - 1;
                    }
                }
                pos++;
            } while ((maxLength === undefined || pos < maxLength) && (test.fn !== null || test.def !== "") || minimalPos > pos);
            if (maskTemplate[maskTemplate.length - 1] === "") {
                maskTemplate.pop();
            }
            if (includeMode !== false || getMaskSet().maskLength === undefined) getMaskSet().maskLength = pos - 1;
            opts.greedy = greedy;
            return maskTemplate;
        }
        function getMaskSet() {
            return maskset;
        }
        function resetMaskSet(soft) {
            var maskset = getMaskSet();
            maskset.buffer = undefined;
            if (soft !== true) {
                maskset.validPositions = {};
                maskset.p = 0;
            }
        }
        function getLastValidPosition(closestTo, strict, validPositions) {
            var before = -1, after = -1, valids = validPositions || getMaskSet().validPositions;
            if (closestTo === undefined) closestTo = -1;
            for (var posNdx in valids) {
                var psNdx = parseInt(posNdx);
                if (valids[psNdx] && (strict || valids[psNdx].generatedInput !== true)) {
                    if (psNdx <= closestTo) before = psNdx;
                    if (psNdx >= closestTo) after = psNdx;
                }
            }
            return before === -1 || before == closestTo ? after : after == -1 ? before : closestTo - before < after - closestTo ? before : after;
        }
        function getDecisionTaker(tst) {
            var decisionTaker = tst.locator[tst.alternation];
            if (typeof decisionTaker == "string" && decisionTaker.length > 0) {
                decisionTaker = decisionTaker.split(",")[0];
            }
            return decisionTaker !== undefined ? decisionTaker.toString() : "";
        }
        function getLocator(tst, align) {
            var locator = (tst.alternation != undefined ? tst.mloc[getDecisionTaker(tst)] : tst.locator).join("");
            if (locator !== "") while (locator.length < align) locator += "0";
            return locator;
        }
        function determineTestTemplate(pos, tests) {
            pos = pos > 0 ? pos - 1 : 0;
            var altTest = getTest(pos), targetLocator = getLocator(altTest), tstLocator, closest, bestMatch;
            for (var ndx = 0; ndx < tests.length; ndx++) {
                var tst = tests[ndx];
                tstLocator = getLocator(tst, targetLocator.length);
                var distance = Math.abs(tstLocator - targetLocator);
                if (closest === undefined || tstLocator !== "" && distance < closest || bestMatch && !opts.greedy && bestMatch.match.optionality && bestMatch.match.newBlockMarker === "master" && (!tst.match.optionality || !tst.match.newBlockMarker) || bestMatch && bestMatch.match.optionalQuantifier && !tst.match.optionalQuantifier) {
                    closest = distance;
                    bestMatch = tst;
                }
            }
            return bestMatch;
        }
        function getTestTemplate(pos, ndxIntlzr, tstPs) {
            return getMaskSet().validPositions[pos] || determineTestTemplate(pos, getTests(pos, ndxIntlzr ? ndxIntlzr.slice() : ndxIntlzr, tstPs));
        }
        function getTest(pos, tests) {
            if (getMaskSet().validPositions[pos]) {
                return getMaskSet().validPositions[pos];
            }
            return (tests || getTests(pos))[0];
        }
        function positionCanMatchDefinition(pos, def) {
            var valid = false, tests = getTests(pos);
            for (var tndx = 0; tndx < tests.length; tndx++) {
                if (tests[tndx].match && tests[tndx].match.def === def) {
                    valid = true;
                    break;
                }
            }
            return valid;
        }
        function getTests(pos, ndxIntlzr, tstPs) {
            var maskTokens = getMaskSet().maskToken, testPos = ndxIntlzr ? tstPs : 0, ndxInitializer = ndxIntlzr ? ndxIntlzr.slice() : [ 0 ], matches = [], insertStop = false, latestMatch, cacheDependency = ndxIntlzr ? ndxIntlzr.join("") : "";
            function resolveTestFromToken(maskToken, ndxInitializer, loopNdx, quantifierRecurse) {
                function handleMatch(match, loopNdx, quantifierRecurse) {
                    function isFirstMatch(latestMatch, tokenGroup) {
                        var firstMatch = $.inArray(latestMatch, tokenGroup.matches) === 0;
                        if (!firstMatch) {
                            $.each(tokenGroup.matches, function(ndx, match) {
                                if (match.isQuantifier === true) firstMatch = isFirstMatch(latestMatch, tokenGroup.matches[ndx - 1]); else if (match.hasOwnProperty("matches")) firstMatch = isFirstMatch(latestMatch, match);
                                if (firstMatch) return false;
                            });
                        }
                        return firstMatch;
                    }
                    function resolveNdxInitializer(pos, alternateNdx, targetAlternation) {
                        var bestMatch, indexPos;
                        if (getMaskSet().tests[pos] || getMaskSet().validPositions[pos]) {
                            $.each(getMaskSet().tests[pos] || [ getMaskSet().validPositions[pos] ], function(ndx, lmnt) {
                                if (lmnt.mloc[alternateNdx]) {
                                    bestMatch = lmnt;
                                    return false;
                                }
                                var alternation = targetAlternation !== undefined ? targetAlternation : lmnt.alternation, ndxPos = lmnt.locator[alternation] !== undefined ? lmnt.locator[alternation].toString().indexOf(alternateNdx) : -1;
                                if ((indexPos === undefined || ndxPos < indexPos) && ndxPos !== -1) {
                                    bestMatch = lmnt;
                                    indexPos = ndxPos;
                                }
                            });
                        }
                        if (bestMatch) {
                            var bestMatchAltIndex = bestMatch.locator[bestMatch.alternation];
                            var locator = bestMatch.mloc[alternateNdx] || bestMatch.mloc[bestMatchAltIndex] || bestMatch.locator;
                            return locator.slice((targetAlternation !== undefined ? targetAlternation : bestMatch.alternation) + 1);
                        } else {
                            return targetAlternation !== undefined ? resolveNdxInitializer(pos, alternateNdx) : undefined;
                        }
                    }
                    function isSubsetOf(source, target) {
                        function expand(pattern) {
                            var expanded = [], start, end;
                            for (var i = 0, l = pattern.length; i < l; i++) {
                                if (pattern.charAt(i) === "-") {
                                    end = pattern.charCodeAt(i + 1);
                                    while (++start < end) expanded.push(String.fromCharCode(start));
                                } else {
                                    start = pattern.charCodeAt(i);
                                    expanded.push(pattern.charAt(i));
                                }
                            }
                            return expanded.join("");
                        }
                        if (opts.regex && source.match.fn !== null && target.match.fn !== null) {
                            return expand(target.match.def.replace(/[\[\]]/g, "")).indexOf(expand(source.match.def.replace(/[\[\]]/g, ""))) !== -1;
                        }
                        return source.match.def === target.match.nativeDef;
                    }
                    function staticCanMatchDefinition(source, target) {
                        var sloc = source.locator.slice(source.alternation).join(""), tloc = target.locator.slice(target.alternation).join(""), canMatch = sloc == tloc;
                        canMatch = canMatch && source.match.fn === null && target.match.fn !== null ? target.match.fn.test(source.match.def, getMaskSet(), pos, false, opts, false) : false;
                        return canMatch;
                    }
                    function setMergeLocators(targetMatch, altMatch) {
                        if (altMatch === undefined || targetMatch.alternation === altMatch.alternation && targetMatch.locator[targetMatch.alternation].toString().indexOf(altMatch.locator[altMatch.alternation]) === -1) {
                            targetMatch.mloc = targetMatch.mloc || {};
                            var locNdx = targetMatch.locator[targetMatch.alternation];
                            if (locNdx === undefined) targetMatch.alternation = undefined; else {
                                if (typeof locNdx === "string") locNdx = locNdx.split(",")[0];
                                if (targetMatch.mloc[locNdx] === undefined) targetMatch.mloc[locNdx] = targetMatch.locator.slice();
                                if (altMatch !== undefined) {
                                    for (var ndx in altMatch.mloc) {
                                        if (typeof ndx === "string") ndx = ndx.split(",")[0];
                                        if (targetMatch.mloc[ndx] === undefined) targetMatch.mloc[ndx] = altMatch.mloc[ndx];
                                    }
                                    targetMatch.locator[targetMatch.alternation] = Object.keys(targetMatch.mloc).join(",");
                                }
                                return true;
                            }
                        }
                        return false;
                    }
                    if (testPos > 500 && quantifierRecurse !== undefined) {
                        throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + getMaskSet().mask;
                    }
                    if (testPos === pos && match.matches === undefined) {
                        matches.push({
                            match: match,
                            locator: loopNdx.reverse(),
                            cd: cacheDependency,
                            mloc: {}
                        });
                        return true;
                    } else if (match.matches !== undefined) {
                        if (match.isGroup && quantifierRecurse !== match) {
                            match = handleMatch(maskToken.matches[$.inArray(match, maskToken.matches) + 1], loopNdx, quantifierRecurse);
                            if (match) return true;
                        } else if (match.isOptional) {
                            var optionalToken = match;
                            match = resolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse);
                            if (match) {
                                $.each(matches, function(ndx, mtch) {
                                    mtch.match.optionality = true;
                                });
                                latestMatch = matches[matches.length - 1].match;
                                if (quantifierRecurse === undefined && isFirstMatch(latestMatch, optionalToken)) {
                                    insertStop = true;
                                    testPos = pos;
                                } else return true;
                            }
                        } else if (match.isAlternator) {
                            var alternateToken = match, malternateMatches = [], maltMatches, currentMatches = matches.slice(), loopNdxCnt = loopNdx.length;
                            var altIndex = ndxInitializer.length > 0 ? ndxInitializer.shift() : -1;
                            if (altIndex === -1 || typeof altIndex === "string") {
                                var currentPos = testPos, ndxInitializerClone = ndxInitializer.slice(), altIndexArr = [], amndx;
                                if (typeof altIndex == "string") {
                                    altIndexArr = altIndex.split(",");
                                } else {
                                    for (amndx = 0; amndx < alternateToken.matches.length; amndx++) {
                                        altIndexArr.push(amndx.toString());
                                    }
                                }
                                if (getMaskSet().excludes[pos]) {
                                    var altIndexArrClone = altIndexArr.slice();
                                    for (var i = 0, el = getMaskSet().excludes[pos].length; i < el; i++) {
                                        altIndexArr.splice(altIndexArr.indexOf(getMaskSet().excludes[pos][i].toString()), 1);
                                    }
                                    if (altIndexArr.length === 0) {
                                        getMaskSet().excludes[pos] = undefined;
                                        altIndexArr = altIndexArrClone;
                                    }
                                }
                                if (opts.keepStatic === true || isFinite(parseInt(opts.keepStatic)) && currentPos >= opts.keepStatic) altIndexArr = altIndexArr.slice(0, 1);
                                var unMatchedAlternation = false;
                                for (var ndx = 0; ndx < altIndexArr.length; ndx++) {
                                    amndx = parseInt(altIndexArr[ndx]);
                                    matches = [];
                                    ndxInitializer = typeof altIndex === "string" ? resolveNdxInitializer(testPos, amndx, loopNdxCnt) || ndxInitializerClone.slice() : ndxInitializerClone.slice();
                                    if (alternateToken.matches[amndx] && handleMatch(alternateToken.matches[amndx], [ amndx ].concat(loopNdx), quantifierRecurse)) match = true; else if (ndx === 0) {
                                        unMatchedAlternation = true;
                                    }
                                    maltMatches = matches.slice();
                                    testPos = currentPos;
                                    matches = [];
                                    for (var ndx1 = 0; ndx1 < maltMatches.length; ndx1++) {
                                        var altMatch = maltMatches[ndx1], dropMatch = false;
                                        altMatch.match.jit = altMatch.match.jit || unMatchedAlternation;
                                        altMatch.alternation = altMatch.alternation || loopNdxCnt;
                                        setMergeLocators(altMatch);
                                        for (var ndx2 = 0; ndx2 < malternateMatches.length; ndx2++) {
                                            var altMatch2 = malternateMatches[ndx2];
                                            if (typeof altIndex !== "string" || altMatch.alternation !== undefined && $.inArray(altMatch.locator[altMatch.alternation].toString(), altIndexArr) !== -1) {
                                                if (altMatch.match.nativeDef === altMatch2.match.nativeDef) {
                                                    dropMatch = true;
                                                    setMergeLocators(altMatch2, altMatch);
                                                    break;
                                                } else if (isSubsetOf(altMatch, altMatch2)) {
                                                    if (setMergeLocators(altMatch, altMatch2)) {
                                                        dropMatch = true;
                                                        malternateMatches.splice(malternateMatches.indexOf(altMatch2), 0, altMatch);
                                                    }
                                                    break;
                                                } else if (isSubsetOf(altMatch2, altMatch)) {
                                                    setMergeLocators(altMatch2, altMatch);
                                                    break;
                                                } else if (staticCanMatchDefinition(altMatch, altMatch2)) {
                                                    if (setMergeLocators(altMatch, altMatch2)) {
                                                        dropMatch = true;
                                                        malternateMatches.splice(malternateMatches.indexOf(altMatch2), 0, altMatch);
                                                    }
                                                    break;
                                                }
                                            }
                                        }
                                        if (!dropMatch) {
                                            malternateMatches.push(altMatch);
                                        }
                                    }
                                }
                                matches = currentMatches.concat(malternateMatches);
                                testPos = pos;
                                insertStop = matches.length > 0;
                                match = malternateMatches.length > 0;
                                ndxInitializer = ndxInitializerClone.slice();
                            } else match = handleMatch(alternateToken.matches[altIndex] || maskToken.matches[altIndex], [ altIndex ].concat(loopNdx), quantifierRecurse);
                            if (match) return true;
                        } else if (match.isQuantifier && quantifierRecurse !== maskToken.matches[$.inArray(match, maskToken.matches) - 1]) {
                            var qt = match;
                            for (var qndx = ndxInitializer.length > 0 ? ndxInitializer.shift() : 0; qndx < (isNaN(qt.quantifier.max) ? qndx + 1 : qt.quantifier.max) && testPos <= pos; qndx++) {
                                var tokenGroup = maskToken.matches[$.inArray(qt, maskToken.matches) - 1];
                                match = handleMatch(tokenGroup, [ qndx ].concat(loopNdx), tokenGroup);
                                if (match) {
                                    latestMatch = matches[matches.length - 1].match;
                                    latestMatch.optionalQuantifier = qndx >= qt.quantifier.min;
                                    latestMatch.jit = (qndx || 1) * tokenGroup.matches.indexOf(latestMatch) >= qt.quantifier.jit;
                                    if (latestMatch.optionalQuantifier && isFirstMatch(latestMatch, tokenGroup)) {
                                        insertStop = true;
                                        testPos = pos;
                                        break;
                                    }
                                    if (latestMatch.jit) {
                                        getMaskSet().jitOffset[pos] = tokenGroup.matches.indexOf(latestMatch);
                                    }
                                    return true;
                                }
                            }
                        } else {
                            match = resolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse);
                            if (match) return true;
                        }
                    } else {
                        testPos++;
                    }
                }
                for (var tndx = ndxInitializer.length > 0 ? ndxInitializer.shift() : 0; tndx < maskToken.matches.length; tndx++) {
                    if (maskToken.matches[tndx].isQuantifier !== true) {
                        var match = handleMatch(maskToken.matches[tndx], [ tndx ].concat(loopNdx), quantifierRecurse);
                        if (match && testPos === pos) {
                            return match;
                        } else if (testPos > pos) {
                            break;
                        }
                    }
                }
            }
            function mergeLocators(pos, tests) {
                var locator = [];
                if (!$.isArray(tests)) tests = [ tests ];
                if (tests.length > 0) {
                    if (tests[0].alternation === undefined) {
                        locator = determineTestTemplate(pos, tests.slice()).locator.slice();
                        if (locator.length === 0) locator = tests[0].locator.slice();
                    } else {
                        $.each(tests, function(ndx, tst) {
                            if (tst.def !== "") {
                                if (locator.length === 0) locator = tst.locator.slice(); else {
                                    for (var i = 0; i < locator.length; i++) {
                                        if (tst.locator[i] && locator[i].toString().indexOf(tst.locator[i]) === -1) {
                                            locator[i] += "," + tst.locator[i];
                                        }
                                    }
                                }
                            }
                        });
                    }
                }
                return locator;
            }
            if (pos > -1) {
                if (ndxIntlzr === undefined) {
                    var previousPos = pos - 1, test;
                    while ((test = getMaskSet().validPositions[previousPos] || getMaskSet().tests[previousPos]) === undefined && previousPos > -1) {
                        previousPos--;
                    }
                    if (test !== undefined && previousPos > -1) {
                        ndxInitializer = mergeLocators(previousPos, test);
                        cacheDependency = ndxInitializer.join("");
                        testPos = previousPos;
                    }
                }
                if (getMaskSet().tests[pos] && getMaskSet().tests[pos][0].cd === cacheDependency) {
                    return getMaskSet().tests[pos];
                }
                for (var mtndx = ndxInitializer.shift(); mtndx < maskTokens.length; mtndx++) {
                    var match = resolveTestFromToken(maskTokens[mtndx], ndxInitializer, [ mtndx ]);
                    if (match && testPos === pos || testPos > pos) {
                        break;
                    }
                }
            }
            if (matches.length === 0 || insertStop) {
                matches.push({
                    match: {
                        fn: null,
                        optionality: false,
                        casing: null,
                        def: "",
                        placeholder: ""
                    },
                    locator: [],
                    mloc: {},
                    cd: cacheDependency
                });
            }
            if (ndxIntlzr !== undefined && getMaskSet().tests[pos]) {
                return $.extend(true, [], matches);
            }
            getMaskSet().tests[pos] = $.extend(true, [], matches);
            return getMaskSet().tests[pos];
        }
        function getBufferTemplate() {
            if (getMaskSet()._buffer === undefined) {
                getMaskSet()._buffer = getMaskTemplate(false, 1);
                if (getMaskSet().buffer === undefined) getMaskSet().buffer = getMaskSet()._buffer.slice();
            }
            return getMaskSet()._buffer;
        }
        function getBuffer(noCache) {
            if (getMaskSet().buffer === undefined || noCache === true) {
                getMaskSet().buffer = getMaskTemplate(true, getLastValidPosition(), true);
                if (getMaskSet()._buffer === undefined) getMaskSet()._buffer = getMaskSet().buffer.slice();
            }
            return getMaskSet().buffer;
        }
        function refreshFromBuffer(start, end, buffer) {
            var i, p;
            if (start === true) {
                resetMaskSet();
                start = 0;
                end = buffer.length;
            } else {
                for (i = start; i < end; i++) {
                    delete getMaskSet().validPositions[i];
                }
            }
            p = start;
            for (i = start; i < end; i++) {
                resetMaskSet(true);
                if (buffer[i] !== opts.skipOptionalPartCharacter) {
                    var valResult = isValid(p, buffer[i], true, true);
                    if (valResult !== false) {
                        resetMaskSet(true);
                        p = valResult.caret !== undefined ? valResult.caret : valResult.pos + 1;
                    }
                }
            }
        }
        function casing(elem, test, pos) {
            switch (opts.casing || test.casing) {
              case "upper":
                elem = elem.toUpperCase();
                break;

              case "lower":
                elem = elem.toLowerCase();
                break;

              case "title":
                var posBefore = getMaskSet().validPositions[pos - 1];
                if (pos === 0 || posBefore && posBefore.input === String.fromCharCode(Inputmask.keyCode.SPACE)) {
                    elem = elem.toUpperCase();
                } else {
                    elem = elem.toLowerCase();
                }
                break;

              default:
                if ($.isFunction(opts.casing)) {
                    var args = Array.prototype.slice.call(arguments);
                    args.push(getMaskSet().validPositions);
                    elem = opts.casing.apply(this, args);
                }
            }
            return elem;
        }
        function checkAlternationMatch(altArr1, altArr2, na) {
            var altArrC = opts.greedy ? altArr2 : altArr2.slice(0, 1), isMatch = false, naArr = na !== undefined ? na.split(",") : [], naNdx;
            for (var i = 0; i < naArr.length; i++) {
                if ((naNdx = altArr1.indexOf(naArr[i])) !== -1) {
                    altArr1.splice(naNdx, 1);
                }
            }
            for (var alndx = 0; alndx < altArr1.length; alndx++) {
                if ($.inArray(altArr1[alndx], altArrC) !== -1) {
                    isMatch = true;
                    break;
                }
            }
            return isMatch;
        }
        function alternate(pos, c, strict, fromSetValid, rAltPos) {
            var validPsClone = $.extend(true, {}, getMaskSet().validPositions), lastAlt, alternation, isValidRslt = false, altPos, prevAltPos, i, validPos, decisionPos, lAltPos = rAltPos !== undefined ? rAltPos : getLastValidPosition();
            if (lAltPos === -1 && rAltPos === undefined) {
                lastAlt = 0;
                prevAltPos = getTest(lastAlt);
                alternation = prevAltPos.alternation;
            } else {
                for (;lAltPos >= 0; lAltPos--) {
                    altPos = getMaskSet().validPositions[lAltPos];
                    if (altPos && altPos.alternation !== undefined) {
                        if (prevAltPos && prevAltPos.locator[altPos.alternation] !== altPos.locator[altPos.alternation]) {
                            break;
                        }
                        lastAlt = lAltPos;
                        alternation = getMaskSet().validPositions[lastAlt].alternation;
                        prevAltPos = altPos;
                    }
                }
            }
            if (alternation !== undefined) {
                decisionPos = parseInt(lastAlt);
                getMaskSet().excludes[decisionPos] = getMaskSet().excludes[decisionPos] || [];
                if (pos !== true) {
                    getMaskSet().excludes[decisionPos].push(getDecisionTaker(prevAltPos));
                }
                var validInputsClone = [], staticInputsBeforePos = 0;
                for (i = decisionPos; i < getLastValidPosition(undefined, true) + 1; i++) {
                    validPos = getMaskSet().validPositions[i];
                    if (validPos && validPos.generatedInput !== true) {
                        validInputsClone.push(validPos.input);
                    } else if (i < pos) staticInputsBeforePos++;
                    delete getMaskSet().validPositions[i];
                }
                while (getMaskSet().excludes[decisionPos] && getMaskSet().excludes[decisionPos].length < 10) {
                    var posOffset = staticInputsBeforePos * -1, validInputs = validInputsClone.slice();
                    getMaskSet().tests[decisionPos] = undefined;
                    resetMaskSet(true);
                    isValidRslt = true;
                    while (validInputs.length > 0) {
                        var input = validInputs.shift();
                        if (!(isValidRslt = isValid(getLastValidPosition(undefined, true) + 1, input, false, fromSetValid, true))) {
                            break;
                        }
                    }
                    if (isValidRslt && c !== undefined) {
                        var targetLvp = getLastValidPosition(pos) + 1;
                        for (i = decisionPos; i < getLastValidPosition() + 1; i++) {
                            validPos = getMaskSet().validPositions[i];
                            if ((validPos === undefined || validPos.match.fn == null) && i < pos + posOffset) {
                                posOffset++;
                            }
                        }
                        pos = pos + posOffset;
                        isValidRslt = isValid(pos > targetLvp ? targetLvp : pos, c, strict, fromSetValid, true);
                    }
                    if (!isValidRslt) {
                        resetMaskSet();
                        prevAltPos = getTest(decisionPos);
                        getMaskSet().validPositions = $.extend(true, {}, validPsClone);
                        if (getMaskSet().excludes[decisionPos]) {
                            var decisionTaker = getDecisionTaker(prevAltPos);
                            if (getMaskSet().excludes[decisionPos].indexOf(decisionTaker) !== -1) {
                                isValidRslt = alternate(pos, c, strict, fromSetValid, decisionPos - 1);
                                break;
                            }
                            getMaskSet().excludes[decisionPos].push(decisionTaker);
                            for (i = decisionPos; i < getLastValidPosition(undefined, true) + 1; i++) delete getMaskSet().validPositions[i];
                        } else {
                            isValidRslt = alternate(pos, c, strict, fromSetValid, decisionPos - 1);
                            break;
                        }
                    } else break;
                }
            }
            getMaskSet().excludes[decisionPos] = undefined;
            return isValidRslt;
        }
        function isValid(pos, c, strict, fromSetValid, fromAlternate, validateOnly) {
            function isSelection(posObj) {
                return isRTL ? posObj.begin - posObj.end > 1 || posObj.begin - posObj.end === 1 : posObj.end - posObj.begin > 1 || posObj.end - posObj.begin === 1;
            }
            strict = strict === true;
            var maskPos = pos;
            if (pos.begin !== undefined) {
                maskPos = isRTL ? pos.end : pos.begin;
            }
            function _isValid(position, c, strict) {
                var rslt = false;
                $.each(getTests(position), function(ndx, tst) {
                    var test = tst.match;
                    getBuffer(true);
                    rslt = test.fn != null ? test.fn.test(c, getMaskSet(), position, strict, opts, isSelection(pos)) : (c === test.def || c === opts.skipOptionalPartCharacter) && test.def !== "" ? {
                        c: getPlaceholder(position, test, true) || test.def,
                        pos: position
                    } : false;
                    if (rslt !== false) {
                        var elem = rslt.c !== undefined ? rslt.c : c, validatedPos = position;
                        elem = elem === opts.skipOptionalPartCharacter && test.fn === null ? getPlaceholder(position, test, true) || test.def : elem;
                        if (rslt.remove !== undefined) {
                            if (!$.isArray(rslt.remove)) rslt.remove = [ rslt.remove ];
                            $.each(rslt.remove.sort(function(a, b) {
                                return b - a;
                            }), function(ndx, lmnt) {
                                revalidateMask({
                                    begin: lmnt,
                                    end: lmnt + 1
                                });
                            });
                        }
                        if (rslt.insert !== undefined) {
                            if (!$.isArray(rslt.insert)) rslt.insert = [ rslt.insert ];
                            $.each(rslt.insert.sort(function(a, b) {
                                return a - b;
                            }), function(ndx, lmnt) {
                                isValid(lmnt.pos, lmnt.c, true, fromSetValid);
                            });
                        }
                        if (rslt !== true && rslt.pos !== undefined && rslt.pos !== position) {
                            validatedPos = rslt.pos;
                        }
                        if (rslt !== true && rslt.pos === undefined && rslt.c === undefined) {
                            return false;
                        }
                        if (!revalidateMask(pos, $.extend({}, tst, {
                            input: casing(elem, test, validatedPos)
                        }), fromSetValid, validatedPos)) {
                            rslt = false;
                        }
                        return false;
                    }
                });
                return rslt;
            }
            var result = true, positionsClone = $.extend(true, {}, getMaskSet().validPositions);
            if ($.isFunction(opts.preValidation) && !strict && fromSetValid !== true && validateOnly !== true) {
                result = opts.preValidation(getBuffer(), maskPos, c, isSelection(pos), opts, getMaskSet());
            }
            if (result === true) {
                trackbackPositions(undefined, maskPos, true);
                if (maxLength === undefined || maskPos < maxLength) {
                    result = _isValid(maskPos, c, strict);
                    if ((!strict || fromSetValid === true) && result === false && validateOnly !== true) {
                        var currentPosValid = getMaskSet().validPositions[maskPos];
                        if (currentPosValid && currentPosValid.match.fn === null && (currentPosValid.match.def === c || c === opts.skipOptionalPartCharacter)) {
                            result = {
                                caret: seekNext(maskPos)
                            };
                        } else {
                            if ((opts.insertMode || getMaskSet().validPositions[seekNext(maskPos)] === undefined) && (!isMask(maskPos, true) || getMaskSet().jitOffset[maskPos])) {
                                if (getMaskSet().jitOffset[maskPos] && getMaskSet().validPositions[seekNext(maskPos)] === undefined) {
                                    result = isValid(maskPos + getMaskSet().jitOffset[maskPos], c, strict);
                                    if (result !== false) result.caret = maskPos;
                                } else for (var nPos = maskPos + 1, snPos = seekNext(maskPos); nPos <= snPos; nPos++) {
                                    result = _isValid(nPos, c, strict);
                                    if (result !== false) {
                                        result = trackbackPositions(maskPos, result.pos !== undefined ? result.pos : nPos) || result;
                                        maskPos = nPos;
                                        break;
                                    }
                                }
                            }
                        }
                    }
                }
                if (result === false && opts.keepStatic !== false && (opts.regex == null || isComplete(getBuffer())) && !strict && fromAlternate !== true) {
                    result = alternate(maskPos, c, strict, fromSetValid);
                }
                if (result === true) {
                    result = {
                        pos: maskPos
                    };
                }
            }
            if ($.isFunction(opts.postValidation) && result !== false && !strict && fromSetValid !== true && validateOnly !== true) {
                var postResult = opts.postValidation(getBuffer(true), pos.begin !== undefined ? isRTL ? pos.end : pos.begin : pos, result, opts);
                if (postResult !== undefined) {
                    if (postResult.refreshFromBuffer && postResult.buffer) {
                        var refresh = postResult.refreshFromBuffer;
                        refreshFromBuffer(refresh === true ? refresh : refresh.start, refresh.end, postResult.buffer);
                    }
                    result = postResult === true ? result : postResult;
                }
            }
            if (result && result.pos === undefined) {
                result.pos = maskPos;
            }
            if (result === false || validateOnly === true) {
                resetMaskSet(true);
                getMaskSet().validPositions = $.extend(true, {}, positionsClone);
            }
            return result;
        }
        function trackbackPositions(originalPos, newPos, fillOnly) {
            var result;
            if (originalPos === undefined) {
                for (originalPos = newPos - 1; originalPos > 0; originalPos--) {
                    if (getMaskSet().validPositions[originalPos]) break;
                }
            }
            for (var ps = originalPos; ps < newPos; ps++) {
                if (getMaskSet().validPositions[ps] === undefined && !isMask(ps, true)) {
                    var vp = ps == 0 ? getTest(ps) : getMaskSet().validPositions[ps - 1];
                    if (vp) {
                        var tests = getTests(ps).slice();
                        if (tests[tests.length - 1].match.def === "") tests.pop();
                        var bestMatch = determineTestTemplate(ps, tests);
                        bestMatch = $.extend({}, bestMatch, {
                            input: getPlaceholder(ps, bestMatch.match, true) || bestMatch.match.def
                        });
                        bestMatch.generatedInput = true;
                        revalidateMask(ps, bestMatch, true);
                        if (fillOnly !== true) {
                            var cvpInput = getMaskSet().validPositions[newPos].input;
                            getMaskSet().validPositions[newPos] = undefined;
                            result = isValid(newPos, cvpInput, true, true);
                        }
                    }
                }
            }
            return result;
        }
        function revalidateMask(pos, validTest, fromSetValid, validatedPos) {
            function IsEnclosedStatic(pos, valids, selection) {
                var posMatch = valids[pos];
                if (posMatch !== undefined && (posMatch.match.fn === null && posMatch.match.optionality !== true || posMatch.input === opts.radixPoint)) {
                    var prevMatch = selection.begin <= pos - 1 ? valids[pos - 1] && valids[pos - 1].match.fn === null && valids[pos - 1] : valids[pos - 1], nextMatch = selection.end > pos + 1 ? valids[pos + 1] && valids[pos + 1].match.fn === null && valids[pos + 1] : valids[pos + 1];
                    return prevMatch && nextMatch;
                }
                return false;
            }
            var begin = pos.begin !== undefined ? pos.begin : pos, end = pos.end !== undefined ? pos.end : pos;
            if (pos.begin > pos.end) {
                begin = pos.end;
                end = pos.begin;
            }
            validatedPos = validatedPos !== undefined ? validatedPos : begin;
            if (begin !== end || opts.insertMode && getMaskSet().validPositions[validatedPos] !== undefined && fromSetValid === undefined) {
                var positionsClone = $.extend(true, {}, getMaskSet().validPositions), lvp = getLastValidPosition(undefined, true), i;
                getMaskSet().p = begin;
                for (i = lvp; i >= begin; i--) {
                    if (getMaskSet().validPositions[i] && getMaskSet().validPositions[i].match.nativeDef === "+") {
                        opts.isNegative = false;
                    }
                    delete getMaskSet().validPositions[i];
                }
                var valid = true, j = validatedPos, vps = getMaskSet().validPositions, needsValidation = false, posMatch = j, i = j;
                if (validTest) {
                    getMaskSet().validPositions[validatedPos] = $.extend(true, {}, validTest);
                    posMatch++;
                    j++;
                    if (begin < end) i++;
                }
                for (;i <= lvp; i++) {
                    var t = positionsClone[i];
                    if (t !== undefined && (i >= end || i >= begin && t.generatedInput !== true && IsEnclosedStatic(i, positionsClone, {
                        begin: begin,
                        end: end
                    }))) {
                        while (getTest(posMatch).match.def !== "") {
                            if (needsValidation === false && positionsClone[posMatch] && positionsClone[posMatch].match.nativeDef === t.match.nativeDef) {
                                getMaskSet().validPositions[posMatch] = $.extend(true, {}, positionsClone[posMatch]);
                                getMaskSet().validPositions[posMatch].input = t.input;
                                trackbackPositions(undefined, posMatch, true);
                                j = posMatch + 1;
                                valid = true;
                            } else if (opts.shiftPositions && positionCanMatchDefinition(posMatch, t.match.def)) {
                                var result = isValid(posMatch, t.input, true, true);
                                valid = result !== false;
                                j = result.caret || result.insert ? getLastValidPosition() : posMatch + 1;
                                needsValidation = true;
                            } else {
                                valid = t.generatedInput === true || t.input === opts.radixPoint && opts.numericInput === true;
                            }
                            if (valid) break;
                            if (!valid && posMatch > end && isMask(posMatch, true) && (t.match.fn !== null || posMatch > getMaskSet().maskLength)) {
                                break;
                            }
                            posMatch++;
                        }
                        if (getTest(posMatch).match.def == "") valid = false;
                        posMatch = j;
                    }
                    if (!valid) break;
                }
                if (!valid) {
                    getMaskSet().validPositions = $.extend(true, {}, positionsClone);
                    resetMaskSet(true);
                    return false;
                }
            } else if (validTest) {
                getMaskSet().validPositions[validatedPos] = $.extend(true, {}, validTest);
            }
            resetMaskSet(true);
            return true;
        }
        function isMask(pos, strict) {
            var test = getTestTemplate(pos).match;
            if (test.def === "") test = getTest(pos).match;
            if (test.fn != null) {
                return test.fn;
            }
            if (strict !== true && pos > -1) {
                var tests = getTests(pos);
                return tests.length > 1 + (tests[tests.length - 1].match.def === "" ? 1 : 0);
            }
            return false;
        }
        function seekNext(pos, newBlock) {
            var position = pos + 1;
            while (getTest(position).match.def !== "" && (newBlock === true && (getTest(position).match.newBlockMarker !== true || !isMask(position)) || newBlock !== true && !isMask(position))) {
                position++;
            }
            return position;
        }
        function seekPrevious(pos, newBlock) {
            var position = pos, tests;
            if (position <= 0) return 0;
            while (--position > 0 && (newBlock === true && getTest(position).match.newBlockMarker !== true || newBlock !== true && !isMask(position) && (tests = getTests(position), 
            tests.length < 2 || tests.length === 2 && tests[1].match.def === ""))) {}
            return position;
        }
        function writeBuffer(input, buffer, caretPos, event, triggerEvents) {
            if (event && $.isFunction(opts.onBeforeWrite)) {
                var result = opts.onBeforeWrite.call(inputmask, event, buffer, caretPos, opts);
                if (result) {
                    if (result.refreshFromBuffer) {
                        var refresh = result.refreshFromBuffer;
                        refreshFromBuffer(refresh === true ? refresh : refresh.start, refresh.end, result.buffer || buffer);
                        buffer = getBuffer(true);
                    }
                    if (caretPos !== undefined) caretPos = result.caret !== undefined ? result.caret : caretPos;
                }
            }
            if (input !== undefined) {
                input.inputmask._valueSet(buffer.join(""));
                if (caretPos !== undefined && (event === undefined || event.type !== "blur")) {
                    caret(input, caretPos);
                } else renderColorMask(input, caretPos, buffer.length === 0);
                if (triggerEvents === true) {
                    var $input = $(input), nptVal = input.inputmask._valueGet();
                    skipInputEvent = true;
                    $input.trigger("input");
                    setTimeout(function() {
                        if (nptVal === getBufferTemplate().join("")) {
                            $input.trigger("cleared");
                        } else if (isComplete(buffer) === true) {
                            $input.trigger("complete");
                        }
                    }, 0);
                }
            }
        }
        function getPlaceholder(pos, test, returnPL) {
            test = test || getTest(pos).match;
            if (test.placeholder !== undefined || returnPL === true) {
                return $.isFunction(test.placeholder) ? test.placeholder(opts) : test.placeholder;
            } else if (test.fn === null) {
                if (pos > -1 && getMaskSet().validPositions[pos] === undefined) {
                    var tests = getTests(pos), staticAlternations = [], prevTest;
                    if (tests.length > 1 + (tests[tests.length - 1].match.def === "" ? 1 : 0)) {
                        for (var i = 0; i < tests.length; i++) {
                            if (tests[i].match.optionality !== true && tests[i].match.optionalQuantifier !== true && (tests[i].match.fn === null || (prevTest === undefined || tests[i].match.fn.test(prevTest.match.def, getMaskSet(), pos, true, opts) !== false))) {
                                staticAlternations.push(tests[i]);
                                if (tests[i].match.fn === null) prevTest = tests[i];
                                if (staticAlternations.length > 1) {
                                    if (/[0-9a-bA-Z]/.test(staticAlternations[0].match.def)) {
                                        return opts.placeholder.charAt(pos % opts.placeholder.length);
                                    }
                                }
                            }
                        }
                    }
                }
                return test.def;
            }
            return opts.placeholder.charAt(pos % opts.placeholder.length);
        }
        function HandleNativePlaceholder(npt, value) {
            if (ie) {
                if (npt.inputmask._valueGet() !== value && (npt.placeholder !== value || npt.placeholder === "")) {
                    var buffer = getBuffer().slice(), nptValue = npt.inputmask._valueGet();
                    if (nptValue !== value) {
                        var lvp = getLastValidPosition();
                        if (lvp === -1 && nptValue === getBufferTemplate().join("")) {
                            buffer = [];
                        } else if (lvp !== -1) {
                            clearOptionalTail(buffer);
                        }
                        writeBuffer(npt, buffer);
                    }
                }
            } else if (npt.placeholder !== value) {
                npt.placeholder = value;
                if (npt.placeholder === "") npt.removeAttribute("placeholder");
            }
        }
        var EventRuler = {
            on: function(input, eventName, eventHandler) {
                var ev = function(e) {
                    var that = this;
                    if (that.inputmask === undefined && this.nodeName !== "FORM") {
                        var imOpts = $.data(that, "_inputmask_opts");
                        if (imOpts) new Inputmask(imOpts).mask(that); else EventRuler.off(that);
                    } else if (e.type !== "setvalue" && this.nodeName !== "FORM" && (that.disabled || that.readOnly && !(e.type === "keydown" && (e.ctrlKey && e.keyCode === 67) || opts.tabThrough === false && e.keyCode === Inputmask.keyCode.TAB))) {
                        e.preventDefault();
                    } else {
                        switch (e.type) {
                          case "input":
                            if (skipInputEvent === true) {
                                skipInputEvent = false;
                                return e.preventDefault();
                            }
                            if (mobile) {
                                var args = arguments;
                                setTimeout(function() {
                                    eventHandler.apply(that, args);
                                    caret(that, that.inputmask.caretPos, undefined, true);
                                }, 0);
                                return false;
                            }
                            break;

                          case "keydown":
                            skipKeyPressEvent = false;
                            skipInputEvent = false;
                            break;

                          case "keypress":
                            if (skipKeyPressEvent === true) {
                                return e.preventDefault();
                            }
                            skipKeyPressEvent = true;
                            break;

                          case "click":
                            if (iemobile || iphone) {
                                var args = arguments;
                                setTimeout(function() {
                                    eventHandler.apply(that, args);
                                }, 0);
                                return false;
                            }
                            break;
                        }
                        var returnVal = eventHandler.apply(that, arguments);
                        if (returnVal === false) {
                            e.preventDefault();
                            e.stopPropagation();
                        }
                        return returnVal;
                    }
                };
                input.inputmask.events[eventName] = input.inputmask.events[eventName] || [];
                input.inputmask.events[eventName].push(ev);
                if ($.inArray(eventName, [ "submit", "reset" ]) !== -1) {
                    if (input.form !== null) $(input.form).on(eventName, ev);
                } else {
                    $(input).on(eventName, ev);
                }
            },
            off: function(input, event) {
                if (input.inputmask && input.inputmask.events) {
                    var events;
                    if (event) {
                        events = [];
                        events[event] = input.inputmask.events[event];
                    } else {
                        events = input.inputmask.events;
                    }
                    $.each(events, function(eventName, evArr) {
                        while (evArr.length > 0) {
                            var ev = evArr.pop();
                            if ($.inArray(eventName, [ "submit", "reset" ]) !== -1) {
                                if (input.form !== null) $(input.form).off(eventName, ev);
                            } else {
                                $(input).off(eventName, ev);
                            }
                        }
                        delete input.inputmask.events[eventName];
                    });
                }
            }
        };
        var EventHandlers = {
            keydownEvent: function(e) {
                var input = this, $input = $(input), k = e.keyCode, pos = caret(input);
                if (k === Inputmask.keyCode.BACKSPACE || k === Inputmask.keyCode.DELETE || iphone && k === Inputmask.keyCode.BACKSPACE_SAFARI || e.ctrlKey && k === Inputmask.keyCode.X && !isInputEventSupported("cut")) {
                    e.preventDefault();
                    handleRemove(input, k, pos);
                    writeBuffer(input, getBuffer(true), getMaskSet().p, e, input.inputmask._valueGet() !== getBuffer().join(""));
                } else if (k === Inputmask.keyCode.END || k === Inputmask.keyCode.PAGE_DOWN) {
                    e.preventDefault();
                    var caretPos = seekNext(getLastValidPosition());
                    caret(input, e.shiftKey ? pos.begin : caretPos, caretPos, true);
                } else if (k === Inputmask.keyCode.HOME && !e.shiftKey || k === Inputmask.keyCode.PAGE_UP) {
                    e.preventDefault();
                    caret(input, 0, e.shiftKey ? pos.begin : 0, true);
                } else if ((opts.undoOnEscape && k === Inputmask.keyCode.ESCAPE || k === 90 && e.ctrlKey) && e.altKey !== true) {
                    checkVal(input, true, false, undoValue.split(""));
                    $input.trigger("click");
                } else if (k === Inputmask.keyCode.INSERT && !(e.shiftKey || e.ctrlKey)) {
                    opts.insertMode = !opts.insertMode;
                    input.setAttribute("im-insert", opts.insertMode);
                } else if (opts.tabThrough === true && k === Inputmask.keyCode.TAB) {
                    if (e.shiftKey === true) {
                        if (getTest(pos.begin).match.fn === null) {
                            pos.begin = seekNext(pos.begin);
                        }
                        pos.end = seekPrevious(pos.begin, true);
                        pos.begin = seekPrevious(pos.end, true);
                    } else {
                        pos.begin = seekNext(pos.begin, true);
                        pos.end = seekNext(pos.begin, true);
                        if (pos.end < getMaskSet().maskLength) pos.end--;
                    }
                    if (pos.begin < getMaskSet().maskLength) {
                        e.preventDefault();
                        caret(input, pos.begin, pos.end);
                    }
                }
                opts.onKeyDown.call(this, e, getBuffer(), caret(input).begin, opts);
                ignorable = $.inArray(k, opts.ignorables) !== -1;
            },
            keypressEvent: function(e, checkval, writeOut, strict, ndx) {
                var input = this, $input = $(input), k = e.which || e.charCode || e.keyCode;
                if (checkval !== true && (!(e.ctrlKey && e.altKey) && (e.ctrlKey || e.metaKey || ignorable))) {
                    if (k === Inputmask.keyCode.ENTER && undoValue !== getBuffer().join("")) {
                        undoValue = getBuffer().join("");
                        setTimeout(function() {
                            $input.trigger("change");
                        }, 0);
                    }
                    return true;
                } else {
                    if (k) {
                        if (k === 46 && e.shiftKey === false && opts.radixPoint !== "") k = opts.radixPoint.charCodeAt(0);
                        var pos = checkval ? {
                            begin: ndx,
                            end: ndx
                        } : caret(input), forwardPosition, c = String.fromCharCode(k), offset = 0;
                        if (opts._radixDance && opts.numericInput) {
                            var caretPos = getBuffer().indexOf(opts.radixPoint.charAt(0)) + 1;
                            if (pos.begin <= caretPos) {
                                if (k === opts.radixPoint.charCodeAt(0)) offset = 1;
                                pos.begin -= 1;
                                pos.end -= 1;
                            }
                        }
                        getMaskSet().writeOutBuffer = true;
                        var valResult = isValid(pos, c, strict);
                        if (valResult !== false) {
                            resetMaskSet(true);
                            forwardPosition = valResult.caret !== undefined ? valResult.caret : seekNext(valResult.pos.begin ? valResult.pos.begin : valResult.pos);
                            getMaskSet().p = forwardPosition;
                        }
                        forwardPosition = (opts.numericInput && valResult.caret === undefined ? seekPrevious(forwardPosition) : forwardPosition) + offset;
                        if (writeOut !== false) {
                            setTimeout(function() {
                                opts.onKeyValidation.call(input, k, valResult, opts);
                            }, 0);
                            if (getMaskSet().writeOutBuffer && valResult !== false) {
                                var buffer = getBuffer();
                                writeBuffer(input, buffer, forwardPosition, e, checkval !== true);
                            }
                        }
                        e.preventDefault();
                        if (checkval) {
                            if (valResult !== false) valResult.forwardPosition = forwardPosition;
                            return valResult;
                        }
                    }
                }
            },
            pasteEvent: function(e) {
                var input = this, ev = e.originalEvent || e, $input = $(input), inputValue = input.inputmask._valueGet(true), caretPos = caret(input), tempValue;
                if (isRTL) {
                    tempValue = caretPos.end;
                    caretPos.end = caretPos.begin;
                    caretPos.begin = tempValue;
                }
                var valueBeforeCaret = inputValue.substr(0, caretPos.begin), valueAfterCaret = inputValue.substr(caretPos.end, inputValue.length);
                if (valueBeforeCaret === (isRTL ? getBufferTemplate().reverse() : getBufferTemplate()).slice(0, caretPos.begin).join("")) valueBeforeCaret = "";
                if (valueAfterCaret === (isRTL ? getBufferTemplate().reverse() : getBufferTemplate()).slice(caretPos.end).join("")) valueAfterCaret = "";
                if (window.clipboardData && window.clipboardData.getData) {
                    inputValue = valueBeforeCaret + window.clipboardData.getData("Text") + valueAfterCaret;
                } else if (ev.clipboardData && ev.clipboardData.getData) {
                    inputValue = valueBeforeCaret + ev.clipboardData.getData("text/plain") + valueAfterCaret;
                } else return true;
                var pasteValue = inputValue;
                if ($.isFunction(opts.onBeforePaste)) {
                    pasteValue = opts.onBeforePaste.call(inputmask, inputValue, opts);
                    if (pasteValue === false) {
                        return e.preventDefault();
                    }
                    if (!pasteValue) {
                        pasteValue = inputValue;
                    }
                }
                checkVal(input, false, false, pasteValue.toString().split(""));
                writeBuffer(input, getBuffer(), seekNext(getLastValidPosition()), e, undoValue !== getBuffer().join(""));
                return e.preventDefault();
            },
            inputFallBackEvent: function(e) {
                function radixPointHandler(input, inputValue, caretPos) {
                    if (inputValue.charAt(caretPos.begin - 1) === "." && opts.radixPoint !== "") {
                        inputValue = inputValue.split("");
                        inputValue[caretPos.begin - 1] = opts.radixPoint.charAt(0);
                        inputValue = inputValue.join("");
                    }
                    return inputValue;
                }
                function ieMobileHandler(input, inputValue, caretPos) {
                    if (iemobile) {
                        var inputChar = inputValue.replace(getBuffer().join(""), "");
                        if (inputChar.length === 1) {
                            var iv = inputValue.split("");
                            iv.splice(caretPos.begin, 0, inputChar);
                            inputValue = iv.join("");
                        }
                    }
                    return inputValue;
                }
                var input = this, inputValue = input.inputmask._valueGet();
                if (getBuffer().join("") !== inputValue) {
                    var caretPos = caret(input);
                    inputValue = radixPointHandler(input, inputValue, caretPos);
                    inputValue = ieMobileHandler(input, inputValue, caretPos);
                    if (getBuffer().join("") !== inputValue) {
                        var buffer = getBuffer().join(""), offset = !opts.numericInput && inputValue.length > buffer.length ? -1 : 0, frontPart = inputValue.substr(0, caretPos.begin), backPart = inputValue.substr(caretPos.begin), frontBufferPart = buffer.substr(0, caretPos.begin + offset), backBufferPart = buffer.substr(caretPos.begin + offset);
                        var selection = caretPos, entries = "", isEntry = false;
                        if (frontPart !== frontBufferPart) {
                            var fpl = (isEntry = frontPart.length >= frontBufferPart.length) ? frontPart.length : frontBufferPart.length, i;
                            for (i = 0; frontPart.charAt(i) === frontBufferPart.charAt(i) && i < fpl; i++) ;
                            if (isEntry) {
                                selection.begin = i - offset;
                                entries += frontPart.slice(i, selection.end);
                            }
                        }
                        if (backPart !== backBufferPart) {
                            if (backPart.length > backBufferPart.length) {
                                entries += backPart.slice(0, 1);
                            } else {
                                if (backPart.length < backBufferPart.length) {
                                    selection.end += backBufferPart.length - backPart.length;
                                    if (!isEntry && opts.radixPoint !== "" && backPart === "" && frontPart.charAt(selection.begin + offset - 1) === opts.radixPoint) {
                                        selection.begin--;
                                        entries = opts.radixPoint;
                                    }
                                }
                            }
                        }
                        writeBuffer(input, getBuffer(), {
                            begin: selection.begin + offset,
                            end: selection.end + offset
                        });
                        if (entries.length > 0) {
                            $.each(entries.split(""), function(ndx, entry) {
                                var keypress = new $.Event("keypress");
                                keypress.which = entry.charCodeAt(0);
                                ignorable = false;
                                EventHandlers.keypressEvent.call(input, keypress);
                            });
                        } else {
                            if (selection.begin === selection.end - 1) {
                                selection.begin = seekPrevious(selection.begin + 1);
                                if (selection.begin === selection.end - 1) {
                                    caret(input, selection.begin);
                                } else {
                                    caret(input, selection.begin, selection.end);
                                }
                            }
                            var keydown = new $.Event("keydown");
                            keydown.keyCode = opts.numericInput ? Inputmask.keyCode.BACKSPACE : Inputmask.keyCode.DELETE;
                            EventHandlers.keydownEvent.call(input, keydown);
                        }
                        e.preventDefault();
                    }
                }
            },
            beforeInputEvent: function(e) {
                if (e.cancelable) {
                    var input = this;
                    switch (e.inputType) {
                      case "insertText":
                        $.each(e.data.split(""), function(ndx, entry) {
                            var keypress = new $.Event("keypress");
                            keypress.which = entry.charCodeAt(0);
                            ignorable = false;
                            EventHandlers.keypressEvent.call(input, keypress);
                        });
                        return e.preventDefault();

                      case "deleteContentBackward":
                        var keydown = new $.Event("keydown");
                        keydown.keyCode = Inputmask.keyCode.BACKSPACE;
                        EventHandlers.keydownEvent.call(input, keydown);
                        return e.preventDefault();

                      case "deleteContentForward":
                        var keydown = new $.Event("keydown");
                        keydown.keyCode = Inputmask.keyCode.DELETE;
                        EventHandlers.keydownEvent.call(input, keydown);
                        return e.preventDefault();
                    }
                }
            },
            setValueEvent: function(e) {
                this.inputmask.refreshValue = false;
                var input = this, value = e && e.detail ? e.detail[0] : arguments[1], value = value || input.inputmask._valueGet(true);
                if ($.isFunction(opts.onBeforeMask)) value = opts.onBeforeMask.call(inputmask, value, opts) || value;
                value = value.split("");
                checkVal(input, true, false, value);
                undoValue = getBuffer().join("");
                if ((opts.clearMaskOnLostFocus || opts.clearIncomplete) && input.inputmask._valueGet() === getBufferTemplate().join("")) {
                    input.inputmask._valueSet("");
                }
            },
            focusEvent: function(e) {
                var input = this, nptValue = input.inputmask._valueGet();
                if (opts.showMaskOnFocus) {
                    if (nptValue !== getBuffer().join("")) {
                        writeBuffer(input, getBuffer(), seekNext(getLastValidPosition()));
                    } else if (mouseEnter === false) {
                        caret(input, seekNext(getLastValidPosition()));
                    }
                }
                if (opts.positionCaretOnTab === true && mouseEnter === false) {
                    EventHandlers.clickEvent.apply(input, [ e, true ]);
                }
                undoValue = getBuffer().join("");
            },
            mouseleaveEvent: function(e) {
                var input = this;
                mouseEnter = false;
                if (opts.clearMaskOnLostFocus && document.activeElement !== input) {
                    HandleNativePlaceholder(input, originalPlaceholder);
                }
            },
            clickEvent: function(e, tabbed) {
                function doRadixFocus(clickPos) {
                    if (opts.radixPoint !== "") {
                        var vps = getMaskSet().validPositions;
                        if (vps[clickPos] === undefined || vps[clickPos].input === getPlaceholder(clickPos)) {
                            if (clickPos < seekNext(-1)) return true;
                            var radixPos = $.inArray(opts.radixPoint, getBuffer());
                            if (radixPos !== -1) {
                                for (var vp in vps) {
                                    if (radixPos < vp && vps[vp].input !== getPlaceholder(vp)) {
                                        return false;
                                    }
                                }
                                return true;
                            }
                        }
                    }
                    return false;
                }
                var input = this;
                setTimeout(function() {
                    if (document.activeElement === input) {
                        var selectedCaret = caret(input);
                        if (tabbed) {
                            if (isRTL) {
                                selectedCaret.end = selectedCaret.begin;
                            } else {
                                selectedCaret.begin = selectedCaret.end;
                            }
                        }
                        if (selectedCaret.begin === selectedCaret.end) {
                            switch (opts.positionCaretOnClick) {
                              case "none":
                                break;

                              case "select":
                                caret(input, 0, getBuffer().length);
                                break;

                              case "ignore":
                                caret(input, seekNext(getLastValidPosition()));
                                break;

                              case "radixFocus":
                                if (doRadixFocus(selectedCaret.begin)) {
                                    var radixPos = getBuffer().join("").indexOf(opts.radixPoint);
                                    caret(input, opts.numericInput ? seekNext(radixPos) : radixPos);
                                    break;
                                }

                              default:
                                var clickPosition = selectedCaret.begin, lvclickPosition = getLastValidPosition(clickPosition, true), lastPosition = seekNext(lvclickPosition);
                                if (clickPosition < lastPosition) {
                                    caret(input, !isMask(clickPosition, true) && !isMask(clickPosition - 1, true) ? seekNext(clickPosition) : clickPosition);
                                } else {
                                    var lvp = getMaskSet().validPositions[lvclickPosition], tt = getTestTemplate(lastPosition, lvp ? lvp.match.locator : undefined, lvp), placeholder = getPlaceholder(lastPosition, tt.match);
                                    if (placeholder !== "" && getBuffer()[lastPosition] !== placeholder && tt.match.optionalQuantifier !== true && tt.match.newBlockMarker !== true || !isMask(lastPosition, opts.keepStatic) && tt.match.def === placeholder) {
                                        var newPos = seekNext(lastPosition);
                                        if (clickPosition >= newPos || clickPosition === lastPosition) {
                                            lastPosition = newPos;
                                        }
                                    }
                                    caret(input, lastPosition);
                                }
                                break;
                            }
                        }
                    }
                }, 0);
            },
            cutEvent: function(e) {
                var input = this, $input = $(input), pos = caret(input), ev = e.originalEvent || e;
                var clipboardData = window.clipboardData || ev.clipboardData, clipData = isRTL ? getBuffer().slice(pos.end, pos.begin) : getBuffer().slice(pos.begin, pos.end);
                clipboardData.setData("text", isRTL ? clipData.reverse().join("") : clipData.join(""));
                if (document.execCommand) document.execCommand("copy");
                handleRemove(input, Inputmask.keyCode.DELETE, pos);
                writeBuffer(input, getBuffer(), getMaskSet().p, e, undoValue !== getBuffer().join(""));
            },
            blurEvent: function(e) {
                var $input = $(this), input = this;
                if (input.inputmask) {
                    HandleNativePlaceholder(input, originalPlaceholder);
                    var nptValue = input.inputmask._valueGet(), buffer = getBuffer().slice();
                    if (nptValue !== "" || colorMask !== undefined) {
                        if (opts.clearMaskOnLostFocus) {
                            if (getLastValidPosition() === -1 && nptValue === getBufferTemplate().join("")) {
                                buffer = [];
                            } else {
                                clearOptionalTail(buffer);
                            }
                        }
                        if (isComplete(buffer) === false) {
                            setTimeout(function() {
                                $input.trigger("incomplete");
                            }, 0);
                            if (opts.clearIncomplete) {
                                resetMaskSet();
                                if (opts.clearMaskOnLostFocus) {
                                    buffer = [];
                                } else {
                                    buffer = getBufferTemplate().slice();
                                }
                            }
                        }
                        writeBuffer(input, buffer, undefined, e);
                    }
                    if (undoValue !== getBuffer().join("")) {
                        undoValue = buffer.join("");
                        $input.trigger("change");
                    }
                }
            },
            mouseenterEvent: function(e) {
                var input = this;
                mouseEnter = true;
                if (document.activeElement !== input && opts.showMaskOnHover) {
                    HandleNativePlaceholder(input, (isRTL ? getBuffer().slice().reverse() : getBuffer()).join(""));
                }
            },
            submitEvent: function(e) {
                if (undoValue !== getBuffer().join("")) {
                    $el.trigger("change");
                }
                if (opts.clearMaskOnLostFocus && getLastValidPosition() === -1 && el.inputmask._valueGet && el.inputmask._valueGet() === getBufferTemplate().join("")) {
                    el.inputmask._valueSet("");
                }
                if (opts.clearIncomplete && isComplete(getBuffer()) === false) {
                    el.inputmask._valueSet("");
                }
                if (opts.removeMaskOnSubmit) {
                    el.inputmask._valueSet(el.inputmask.unmaskedvalue(), true);
                    setTimeout(function() {
                        writeBuffer(el, getBuffer());
                    }, 0);
                }
            },
            resetEvent: function(e) {
                el.inputmask.refreshValue = true;
                setTimeout(function() {
                    $el.trigger("setvalue");
                }, 0);
            }
        };
        function checkVal(input, writeOut, strict, nptvl, initiatingEvent) {
            var inputmask = this || input.inputmask, inputValue = nptvl.slice(), charCodes = "", initialNdx = -1, result = undefined;
            function isTemplateMatch(ndx, charCodes) {
                var charCodeNdx = getMaskTemplate(true, 0, false).slice(ndx, seekNext(ndx)).join("").replace(/'/g, "").indexOf(charCodes);
                return charCodeNdx !== -1 && !isMask(ndx) && (getTest(ndx).match.nativeDef === charCodes.charAt(0) || getTest(ndx).match.fn === null && getTest(ndx).match.nativeDef === "'" + charCodes.charAt(0) || getTest(ndx).match.nativeDef === " " && (getTest(ndx + 1).match.nativeDef === charCodes.charAt(0) || getTest(ndx + 1).match.fn === null && getTest(ndx + 1).match.nativeDef === "'" + charCodes.charAt(0)));
            }
            resetMaskSet();
            if (!strict && opts.autoUnmask !== true) {
                var staticInput = getBufferTemplate().slice(0, seekNext(-1)).join(""), matches = inputValue.join("").match(new RegExp("^" + Inputmask.escapeRegex(staticInput), "g"));
                if (matches && matches.length > 0) {
                    inputValue.splice(0, matches.length * staticInput.length);
                    initialNdx = seekNext(initialNdx);
                }
            } else {
                initialNdx = seekNext(initialNdx);
            }
            if (initialNdx === -1) {
                getMaskSet().p = seekNext(initialNdx);
                initialNdx = 0;
            } else getMaskSet().p = initialNdx;
            inputmask.caretPos = {
                begin: initialNdx
            };
            $.each(inputValue, function(ndx, charCode) {
                if (charCode !== undefined) {
                    if (getMaskSet().validPositions[ndx] === undefined && inputValue[ndx] === getPlaceholder(ndx) && isMask(ndx, true) && isValid(ndx, inputValue[ndx], true, undefined, undefined, true) === false) {
                        getMaskSet().p++;
                    } else {
                        var keypress = new $.Event("_checkval");
                        keypress.which = charCode.charCodeAt(0);
                        charCodes += charCode;
                        var lvp = getLastValidPosition(undefined, true);
                        if (!isTemplateMatch(initialNdx, charCodes)) {
                            result = EventHandlers.keypressEvent.call(input, keypress, true, false, strict, inputmask.caretPos.begin);
                            if (result) {
                                initialNdx = inputmask.caretPos.begin + 1;
                                charCodes = "";
                            }
                        } else {
                            result = EventHandlers.keypressEvent.call(input, keypress, true, false, strict, lvp + 1);
                        }
                        if (result) {
                            writeBuffer(undefined, getBuffer(), result.forwardPosition, keypress, false);
                            inputmask.caretPos = {
                                begin: result.forwardPosition,
                                end: result.forwardPosition
                            };
                        }
                    }
                }
            });
            if (writeOut) writeBuffer(input, getBuffer(), result ? result.forwardPosition : undefined, initiatingEvent || new $.Event("checkval"), initiatingEvent && initiatingEvent.type === "input");
        }
        function unmaskedvalue(input) {
            if (input) {
                if (input.inputmask === undefined) {
                    return input.value;
                }
                if (input.inputmask && input.inputmask.refreshValue) {
                    EventHandlers.setValueEvent.call(input);
                }
            }
            var umValue = [], vps = getMaskSet().validPositions;
            for (var pndx in vps) {
                if (vps[pndx].match && vps[pndx].match.fn != null) {
                    umValue.push(vps[pndx].input);
                }
            }
            var unmaskedValue = umValue.length === 0 ? "" : (isRTL ? umValue.reverse() : umValue).join("");
            if ($.isFunction(opts.onUnMask)) {
                var bufferValue = (isRTL ? getBuffer().slice().reverse() : getBuffer()).join("");
                unmaskedValue = opts.onUnMask.call(inputmask, bufferValue, unmaskedValue, opts);
            }
            return unmaskedValue;
        }
        function caret(input, begin, end, notranslate) {
            function translatePosition(pos) {
                if (isRTL && typeof pos === "number" && (!opts.greedy || opts.placeholder !== "") && el) {
                    pos = el.inputmask._valueGet().length - pos;
                }
                return pos;
            }
            var range;
            if (begin !== undefined) {
                if ($.isArray(begin)) {
                    end = isRTL ? begin[0] : begin[1];
                    begin = isRTL ? begin[1] : begin[0];
                }
                if (begin.begin !== undefined) {
                    end = isRTL ? begin.begin : begin.end;
                    begin = isRTL ? begin.end : begin.begin;
                }
                if (typeof begin === "number") {
                    begin = notranslate ? begin : translatePosition(begin);
                    end = notranslate ? end : translatePosition(end);
                    end = typeof end == "number" ? end : begin;
                    var scrollCalc = parseInt(((input.ownerDocument.defaultView || window).getComputedStyle ? (input.ownerDocument.defaultView || window).getComputedStyle(input, null) : input.currentStyle).fontSize) * end;
                    input.scrollLeft = scrollCalc > input.scrollWidth ? scrollCalc : 0;
                    input.inputmask.caretPos = {
                        begin: begin,
                        end: end
                    };
                    if (input === document.activeElement) {
                        if ("selectionStart" in input) {
                            input.selectionStart = begin;
                            input.selectionEnd = end;
                        } else if (window.getSelection) {
                            range = document.createRange();
                            if (input.firstChild === undefined || input.firstChild === null) {
                                var textNode = document.createTextNode("");
                                input.appendChild(textNode);
                            }
                            range.setStart(input.firstChild, begin < input.inputmask._valueGet().length ? begin : input.inputmask._valueGet().length);
                            range.setEnd(input.firstChild, end < input.inputmask._valueGet().length ? end : input.inputmask._valueGet().length);
                            range.collapse(true);
                            var sel = window.getSelection();
                            sel.removeAllRanges();
                            sel.addRange(range);
                        } else if (input.createTextRange) {
                            range = input.createTextRange();
                            range.collapse(true);
                            range.moveEnd("character", end);
                            range.moveStart("character", begin);
                            range.select();
                        }
                        renderColorMask(input, {
                            begin: begin,
                            end: end
                        });
                    }
                }
            } else {
                if ("selectionStart" in input) {
                    begin = input.selectionStart;
                    end = input.selectionEnd;
                } else if (window.getSelection) {
                    range = window.getSelection().getRangeAt(0);
                    if (range.commonAncestorContainer.parentNode === input || range.commonAncestorContainer === input) {
                        begin = range.startOffset;
                        end = range.endOffset;
                    }
                } else if (document.selection && document.selection.createRange) {
                    range = document.selection.createRange();
                    begin = 0 - range.duplicate().moveStart("character", -input.inputmask._valueGet().length);
                    end = begin + range.text.length;
                }
                return {
                    begin: notranslate ? begin : translatePosition(begin),
                    end: notranslate ? end : translatePosition(end)
                };
            }
        }
        function determineLastRequiredPosition(returnDefinition) {
            var buffer = getMaskTemplate(true, getLastValidPosition(), true, true), bl = buffer.length, pos, lvp = getLastValidPosition(), positions = {}, lvTest = getMaskSet().validPositions[lvp], ndxIntlzr = lvTest !== undefined ? lvTest.locator.slice() : undefined, testPos;
            for (pos = lvp + 1; pos < buffer.length; pos++) {
                testPos = getTestTemplate(pos, ndxIntlzr, pos - 1);
                ndxIntlzr = testPos.locator.slice();
                positions[pos] = $.extend(true, {}, testPos);
            }
            var lvTestAlt = lvTest && lvTest.alternation !== undefined ? lvTest.locator[lvTest.alternation] : undefined;
            for (pos = bl - 1; pos > lvp; pos--) {
                testPos = positions[pos];
                if ((testPos.match.optionality || testPos.match.optionalQuantifier && testPos.match.newBlockMarker || lvTestAlt && (lvTestAlt !== positions[pos].locator[lvTest.alternation] && testPos.match.fn != null || testPos.match.fn === null && testPos.locator[lvTest.alternation] && checkAlternationMatch(testPos.locator[lvTest.alternation].toString().split(","), lvTestAlt.toString().split(",")) && getTests(pos)[0].def !== "")) && buffer[pos] === getPlaceholder(pos, testPos.match)) {
                    bl--;
                } else break;
            }
            return returnDefinition ? {
                l: bl,
                def: positions[bl] ? positions[bl].match : undefined
            } : bl;
        }
        function clearOptionalTail(buffer) {
            buffer.length = 0;
            var template = getMaskTemplate(true, 0, true, undefined, true), lmnt, validPos;
            while (lmnt = template.shift(), lmnt !== undefined) buffer.push(lmnt);
            return buffer;
        }
        function isComplete(buffer) {
            if ($.isFunction(opts.isComplete)) return opts.isComplete(buffer, opts);
            if (opts.repeat === "*") return undefined;
            var complete = false, lrp = determineLastRequiredPosition(true), aml = seekPrevious(lrp.l);
            if (lrp.def === undefined || lrp.def.newBlockMarker || lrp.def.optionality || lrp.def.optionalQuantifier) {
                complete = true;
                for (var i = 0; i <= aml; i++) {
                    var test = getTestTemplate(i).match;
                    if (test.fn !== null && getMaskSet().validPositions[i] === undefined && test.optionality !== true && test.optionalQuantifier !== true || test.fn === null && buffer[i] !== getPlaceholder(i, test)) {
                        complete = false;
                        break;
                    }
                }
            }
            return complete;
        }
        function handleRemove(input, k, pos, strict, fromIsValid) {
            if (opts.numericInput || isRTL) {
                if (k === Inputmask.keyCode.BACKSPACE) {
                    k = Inputmask.keyCode.DELETE;
                } else if (k === Inputmask.keyCode.DELETE) {
                    k = Inputmask.keyCode.BACKSPACE;
                }
                if (isRTL) {
                    var pend = pos.end;
                    pos.end = pos.begin;
                    pos.begin = pend;
                }
            }
            if (k === Inputmask.keyCode.BACKSPACE && pos.end - pos.begin < 1) {
                pos.begin = seekPrevious(pos.begin);
                if (getMaskSet().validPositions[pos.begin] !== undefined && getMaskSet().validPositions[pos.begin].input === opts.groupSeparator) {
                    pos.begin--;
                }
            } else if (k === Inputmask.keyCode.DELETE && pos.begin === pos.end) {
                pos.end = isMask(pos.end, true) && (getMaskSet().validPositions[pos.end] && getMaskSet().validPositions[pos.end].input !== opts.radixPoint) ? pos.end + 1 : seekNext(pos.end) + 1;
                if (getMaskSet().validPositions[pos.begin] !== undefined && getMaskSet().validPositions[pos.begin].input === opts.groupSeparator) {
                    pos.end++;
                }
            }
            revalidateMask(pos);
            if (strict !== true && opts.keepStatic !== false || opts.regex !== null) {
                var result = alternate(true);
                if (result) {
                    var newPos = result.caret !== undefined ? result.caret : result.pos ? seekNext(result.pos.begin ? result.pos.begin : result.pos) : getLastValidPosition(-1, true);
                    if (k !== Inputmask.keyCode.DELETE || pos.begin > newPos) {
                        pos.begin == newPos;
                    }
                }
            }
            var lvp = getLastValidPosition(pos.begin, true);
            if (lvp < pos.begin || pos.begin === -1) {
                getMaskSet().p = seekNext(lvp);
            } else if (strict !== true) {
                getMaskSet().p = pos.begin;
                if (fromIsValid !== true) {
                    while (getMaskSet().p < lvp && getMaskSet().validPositions[getMaskSet().p] === undefined) {
                        getMaskSet().p++;
                    }
                }
            }
        }
        function initializeColorMask(input) {
            var computedStyle = (input.ownerDocument.defaultView || window).getComputedStyle(input, null);
            function findCaretPos(clientx) {
                var e = document.createElement("span"), caretPos;
                for (var style in computedStyle) {
                    if (isNaN(style) && style.indexOf("font") !== -1) {
                        e.style[style] = computedStyle[style];
                    }
                }
                e.style.textTransform = computedStyle.textTransform;
                e.style.letterSpacing = computedStyle.letterSpacing;
                e.style.position = "absolute";
                e.style.height = "auto";
                e.style.width = "auto";
                e.style.visibility = "hidden";
                e.style.whiteSpace = "nowrap";
                document.body.appendChild(e);
                var inputText = input.inputmask._valueGet(), previousWidth = 0, itl;
                for (caretPos = 0, itl = inputText.length; caretPos <= itl; caretPos++) {
                    e.innerHTML += inputText.charAt(caretPos) || "_";
                    if (e.offsetWidth >= clientx) {
                        var offset1 = clientx - previousWidth;
                        var offset2 = e.offsetWidth - clientx;
                        e.innerHTML = inputText.charAt(caretPos);
                        offset1 -= e.offsetWidth / 3;
                        caretPos = offset1 < offset2 ? caretPos - 1 : caretPos;
                        break;
                    }
                    previousWidth = e.offsetWidth;
                }
                document.body.removeChild(e);
                return caretPos;
            }
            var template = document.createElement("div");
            template.style.width = computedStyle.width;
            template.style.textAlign = computedStyle.textAlign;
            colorMask = document.createElement("div");
            input.inputmask.colorMask = colorMask;
            colorMask.className = "im-colormask";
            input.parentNode.insertBefore(colorMask, input);
            input.parentNode.removeChild(input);
            colorMask.appendChild(input);
            colorMask.appendChild(template);
            input.style.left = template.offsetLeft + "px";
            $(colorMask).on("mouseleave", function(e) {
                return EventHandlers.mouseleaveEvent.call(input, [ e ]);
            });
            $(colorMask).on("mouseenter", function(e) {
                return EventHandlers.mouseenterEvent.call(input, [ e ]);
            });
            $(colorMask).on("click", function(e) {
                caret(input, findCaretPos(e.clientX));
                return EventHandlers.clickEvent.call(input, [ e ]);
            });
        }
        Inputmask.prototype.positionColorMask = function(input, template) {
            input.style.left = template.offsetLeft + "px";
        };
        function renderColorMask(input, caretPos, clear) {
            var maskTemplate = [], isStatic = false, test, testPos, ndxIntlzr, pos = 0;
            function setEntry(entry) {
                if (entry === undefined) entry = "";
                if (!isStatic && (test.fn === null || testPos.input === undefined)) {
                    isStatic = true;
                    maskTemplate.push("<span class='im-static'>" + entry);
                } else if (isStatic && (test.fn !== null && testPos.input !== undefined || test.def === "")) {
                    isStatic = false;
                    var mtl = maskTemplate.length;
                    maskTemplate[mtl - 1] = maskTemplate[mtl - 1] + "</span>";
                    maskTemplate.push(entry);
                } else maskTemplate.push(entry);
            }
            function setCaret() {
                if (document.activeElement === input) {
                    maskTemplate.splice(caretPos.begin, 0, caretPos.begin === caretPos.end || caretPos.end > getMaskSet().maskLength ? '<mark class="im-caret" style="border-right-width: 1px;border-right-style: solid;">' : '<mark class="im-caret-select">');
                    maskTemplate.splice(caretPos.end + 1, 0, "</mark>");
                }
            }
            if (colorMask !== undefined) {
                var buffer = getBuffer();
                if (caretPos === undefined) {
                    caretPos = caret(input);
                } else if (caretPos.begin === undefined) {
                    caretPos = {
                        begin: caretPos,
                        end: caretPos
                    };
                }
                if (clear !== true) {
                    var lvp = getLastValidPosition();
                    do {
                        if (getMaskSet().validPositions[pos]) {
                            testPos = getMaskSet().validPositions[pos];
                            test = testPos.match;
                            ndxIntlzr = testPos.locator.slice();
                            setEntry(buffer[pos]);
                        } else {
                            testPos = getTestTemplate(pos, ndxIntlzr, pos - 1);
                            test = testPos.match;
                            ndxIntlzr = testPos.locator.slice();
                            if (opts.jitMasking === false || pos < lvp || typeof opts.jitMasking === "number" && isFinite(opts.jitMasking) && opts.jitMasking > pos) {
                                setEntry(getPlaceholder(pos, test));
                            } else isStatic = false;
                        }
                        pos++;
                    } while ((maxLength === undefined || pos < maxLength) && (test.fn !== null || test.def !== "") || lvp > pos || isStatic);
                    if (isStatic) setEntry();
                    setCaret();
                }
                var template = colorMask.getElementsByTagName("div")[0];
                template.innerHTML = maskTemplate.join("");
                input.inputmask.positionColorMask(input, template);
            }
        }
        function mask(elem) {
            function isElementTypeSupported(input, opts) {
                function patchValueProperty(npt) {
                    var valueGet;
                    var valueSet;
                    function patchValhook(type) {
                        if ($.valHooks && ($.valHooks[type] === undefined || $.valHooks[type].inputmaskpatch !== true)) {
                            var valhookGet = $.valHooks[type] && $.valHooks[type].get ? $.valHooks[type].get : function(elem) {
                                return elem.value;
                            };
                            var valhookSet = $.valHooks[type] && $.valHooks[type].set ? $.valHooks[type].set : function(elem, value) {
                                elem.value = value;
                                return elem;
                            };
                            $.valHooks[type] = {
                                get: function(elem) {
                                    if (elem.inputmask) {
                                        if (elem.inputmask.opts.autoUnmask) {
                                            return elem.inputmask.unmaskedvalue();
                                        } else {
                                            var result = valhookGet(elem);
                                            return getLastValidPosition(undefined, undefined, elem.inputmask.maskset.validPositions) !== -1 || opts.nullable !== true ? result : "";
                                        }
                                    } else return valhookGet(elem);
                                },
                                set: function(elem, value) {
                                    var $elem = $(elem), result;
                                    result = valhookSet(elem, value);
                                    if (elem.inputmask) {
                                        $elem.trigger("setvalue", [ value ]);
                                    }
                                    return result;
                                },
                                inputmaskpatch: true
                            };
                        }
                    }
                    function getter() {
                        if (this.inputmask) {
                            return this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : getLastValidPosition() !== -1 || opts.nullable !== true ? document.activeElement === this && opts.clearMaskOnLostFocus ? (isRTL ? clearOptionalTail(getBuffer().slice()).reverse() : clearOptionalTail(getBuffer().slice())).join("") : valueGet.call(this) : "";
                        } else return valueGet.call(this);
                    }
                    function setter(value) {
                        valueSet.call(this, value);
                        if (this.inputmask) {
                            $(this).trigger("setvalue", [ value ]);
                        }
                    }
                    function installNativeValueSetFallback(npt) {
                        EventRuler.on(npt, "mouseenter", function(event) {
                            var $input = $(this), input = this, value = input.inputmask._valueGet();
                            if (value !== getBuffer().join("")) {
                                $input.trigger("setvalue");
                            }
                        });
                    }
                    if (!npt.inputmask.__valueGet) {
                        if (opts.noValuePatching !== true) {
                            if (Object.getOwnPropertyDescriptor) {
                                if (typeof Object.getPrototypeOf !== "function") {
                                    Object.getPrototypeOf = typeof "test".__proto__ === "object" ? function(object) {
                                        return object.__proto__;
                                    } : function(object) {
                                        return object.constructor.prototype;
                                    };
                                }
                                var valueProperty = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(npt), "value") : undefined;
                                if (valueProperty && valueProperty.get && valueProperty.set) {
                                    valueGet = valueProperty.get;
                                    valueSet = valueProperty.set;
                                    Object.defineProperty(npt, "value", {
                                        get: getter,
                                        set: setter,
                                        configurable: true
                                    });
                                } else if (npt.tagName !== "INPUT") {
                                    valueGet = function() {
                                        return this.textContent;
                                    };
                                    valueSet = function(value) {
                                        this.textContent = value;
                                    };
                                    Object.defineProperty(npt, "value", {
                                        get: getter,
                                        set: setter,
                                        configurable: true
                                    });
                                }
                            } else if (document.__lookupGetter__ && npt.__lookupGetter__("value")) {
                                valueGet = npt.__lookupGetter__("value");
                                valueSet = npt.__lookupSetter__("value");
                                npt.__defineGetter__("value", getter);
                                npt.__defineSetter__("value", setter);
                            }
                            npt.inputmask.__valueGet = valueGet;
                            npt.inputmask.__valueSet = valueSet;
                        }
                        npt.inputmask._valueGet = function(overruleRTL) {
                            return isRTL && overruleRTL !== true ? valueGet.call(this.el).split("").reverse().join("") : valueGet.call(this.el);
                        };
                        npt.inputmask._valueSet = function(value, overruleRTL) {
                            valueSet.call(this.el, value === null || value === undefined ? "" : overruleRTL !== true && isRTL ? value.split("").reverse().join("") : value);
                        };
                        if (valueGet === undefined) {
                            valueGet = function() {
                                return this.value;
                            };
                            valueSet = function(value) {
                                this.value = value;
                            };
                            patchValhook(npt.type);
                            installNativeValueSetFallback(npt);
                        }
                    }
                }
                var elementType = input.getAttribute("type");
                var isSupported = input.tagName === "INPUT" && $.inArray(elementType, opts.supportsInputType) !== -1 || input.isContentEditable || input.tagName === "TEXTAREA";
                if (!isSupported) {
                    if (input.tagName === "INPUT") {
                        var el = document.createElement("input");
                        el.setAttribute("type", elementType);
                        isSupported = el.type === "text";
                        el = null;
                    } else isSupported = "partial";
                }
                if (isSupported !== false) {
                    patchValueProperty(input);
                } else input.inputmask = undefined;
                return isSupported;
            }
            EventRuler.off(elem);
            var isSupported = isElementTypeSupported(elem, opts);
            if (isSupported !== false) {
                el = elem;
                $el = $(el);
                originalPlaceholder = el.placeholder;
                maxLength = el !== undefined ? el.maxLength : undefined;
                if (maxLength === -1) maxLength = undefined;
                if (opts.colorMask === true) {
                    initializeColorMask(el);
                }
                if (mobile) {
                    if ("inputmode" in el) {
                        el.inputmode = opts.inputmode;
                        el.setAttribute("inputmode", opts.inputmode);
                    }
                    if (opts.disablePredictiveText === true) {
                        if ("autocorrect" in el) {
                            el.autocorrect = false;
                        } else {
                            if (opts.colorMask !== true) {
                                initializeColorMask(el);
                            }
                            el.type = "password";
                        }
                    }
                }
                if (isSupported === true) {
                    el.setAttribute("im-insert", opts.insertMode);
                    EventRuler.on(el, "submit", EventHandlers.submitEvent);
                    EventRuler.on(el, "reset", EventHandlers.resetEvent);
                    EventRuler.on(el, "blur", EventHandlers.blurEvent);
                    EventRuler.on(el, "focus", EventHandlers.focusEvent);
                    if (opts.colorMask !== true) {
                        EventRuler.on(el, "click", EventHandlers.clickEvent);
                        EventRuler.on(el, "mouseleave", EventHandlers.mouseleaveEvent);
                        EventRuler.on(el, "mouseenter", EventHandlers.mouseenterEvent);
                    }
                    EventRuler.on(el, "paste", EventHandlers.pasteEvent);
                    EventRuler.on(el, "cut", EventHandlers.cutEvent);
                    EventRuler.on(el, "complete", opts.oncomplete);
                    EventRuler.on(el, "incomplete", opts.onincomplete);
                    EventRuler.on(el, "cleared", opts.oncleared);
                    if (!mobile && opts.inputEventOnly !== true) {
                        EventRuler.on(el, "keydown", EventHandlers.keydownEvent);
                        EventRuler.on(el, "keypress", EventHandlers.keypressEvent);
                    } else {
                        el.removeAttribute("maxLength");
                    }
                    EventRuler.on(el, "input", EventHandlers.inputFallBackEvent);
                    EventRuler.on(el, "beforeinput", EventHandlers.beforeInputEvent);
                }
                EventRuler.on(el, "setvalue", EventHandlers.setValueEvent);
                undoValue = getBufferTemplate().join("");
                if (el.inputmask._valueGet(true) !== "" || opts.clearMaskOnLostFocus === false || document.activeElement === el) {
                    var initialValue = $.isFunction(opts.onBeforeMask) ? opts.onBeforeMask.call(inputmask, el.inputmask._valueGet(true), opts) || el.inputmask._valueGet(true) : el.inputmask._valueGet(true);
                    if (initialValue !== "") checkVal(el, true, false, initialValue.split(""));
                    var buffer = getBuffer().slice();
                    undoValue = buffer.join("");
                    if (isComplete(buffer) === false) {
                        if (opts.clearIncomplete) {
                            resetMaskSet();
                        }
                    }
                    if (opts.clearMaskOnLostFocus && document.activeElement !== el) {
                        if (getLastValidPosition() === -1) {
                            buffer = [];
                        } else {
                            clearOptionalTail(buffer);
                        }
                    }
                    if (opts.clearMaskOnLostFocus === false || opts.showMaskOnFocus && document.activeElement === el || el.inputmask._valueGet(true) !== "") writeBuffer(el, buffer);
                    if (document.activeElement === el) {
                        caret(el, seekNext(getLastValidPosition()));
                    }
                }
            }
        }
        var valueBuffer;
        if (actionObj !== undefined) {
            switch (actionObj.action) {
              case "isComplete":
                el = actionObj.el;
                return isComplete(getBuffer());

              case "unmaskedvalue":
                if (el === undefined || actionObj.value !== undefined) {
                    valueBuffer = actionObj.value;
                    valueBuffer = ($.isFunction(opts.onBeforeMask) ? opts.onBeforeMask.call(inputmask, valueBuffer, opts) || valueBuffer : valueBuffer).split("");
                    checkVal.call(this, undefined, false, false, valueBuffer);
                    if ($.isFunction(opts.onBeforeWrite)) opts.onBeforeWrite.call(inputmask, undefined, getBuffer(), 0, opts);
                }
                return unmaskedvalue(el);

              case "mask":
                mask(el);
                break;

              case "format":
                valueBuffer = ($.isFunction(opts.onBeforeMask) ? opts.onBeforeMask.call(inputmask, actionObj.value, opts) || actionObj.value : actionObj.value).split("");
                checkVal.call(this, undefined, true, false, valueBuffer);
                if (actionObj.metadata) {
                    return {
                        value: isRTL ? getBuffer().slice().reverse().join("") : getBuffer().join(""),
                        metadata: maskScope.call(this, {
                            action: "getmetadata"
                        }, maskset, opts)
                    };
                }
                return isRTL ? getBuffer().slice().reverse().join("") : getBuffer().join("");

              case "isValid":
                if (actionObj.value) {
                    valueBuffer = actionObj.value.split("");
                    checkVal.call(this, undefined, true, true, valueBuffer);
                } else {
                    actionObj.value = getBuffer().join("");
                }
                var buffer = getBuffer();
                var rl = determineLastRequiredPosition(), lmib = buffer.length - 1;
                for (;lmib > rl; lmib--) {
                    if (isMask(lmib)) break;
                }
                buffer.splice(rl, lmib + 1 - rl);
                return isComplete(buffer) && actionObj.value === getBuffer().join("");

              case "getemptymask":
                return getBufferTemplate().join("");

              case "remove":
                if (el && el.inputmask) {
                    $.data(el, "_inputmask_opts", null);
                    $el = $(el);
                    el.inputmask._valueSet(opts.autoUnmask ? unmaskedvalue(el) : el.inputmask._valueGet(true));
                    EventRuler.off(el);
                    if (el.inputmask.colorMask) {
                        colorMask = el.inputmask.colorMask;
                        colorMask.removeChild(el);
                        colorMask.parentNode.insertBefore(el, colorMask);
                        colorMask.parentNode.removeChild(colorMask);
                    }
                    var valueProperty;
                    if (Object.getOwnPropertyDescriptor && Object.getPrototypeOf) {
                        valueProperty = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(el), "value");
                        if (valueProperty) {
                            if (el.inputmask.__valueGet) {
                                Object.defineProperty(el, "value", {
                                    get: el.inputmask.__valueGet,
                                    set: el.inputmask.__valueSet,
                                    configurable: true
                                });
                            }
                        }
                    } else if (document.__lookupGetter__ && el.__lookupGetter__("value")) {
                        if (el.inputmask.__valueGet) {
                            el.__defineGetter__("value", el.inputmask.__valueGet);
                            el.__defineSetter__("value", el.inputmask.__valueSet);
                        }
                    }
                    el.inputmask = undefined;
                }
                return el;
                break;

              case "getmetadata":
                if ($.isArray(maskset.metadata)) {
                    var maskTarget = getMaskTemplate(true, 0, false).join("");
                    $.each(maskset.metadata, function(ndx, mtdt) {
                        if (mtdt.mask === maskTarget) {
                            maskTarget = mtdt;
                            return false;
                        }
                    });
                    return maskTarget;
                }
                return maskset.metadata;
            }
        }
    }
    return Inputmask;
});

/***/ }),

/***/ "./node_modules/inputmask/dist/inputmask/inputmask.numeric.extensions.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/inputmask/dist/inputmask/inputmask.numeric.extensions.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
* inputmask.numeric.extensions.js
* https://github.com/RobinHerbots/Inputmask
* Copyright (c) 2010 - 2019 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 4.0.6
*/

(function(factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(/*! ./inputmask */ "./node_modules/inputmask/dist/inputmask/inputmask.js") ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
})(function(Inputmask) {
    var $ = Inputmask.dependencyLib;
    function autoEscape(txt, opts) {
        var escapedTxt = "";
        for (var i = 0; i < txt.length; i++) {
            if (Inputmask.prototype.definitions[txt.charAt(i)] || opts.definitions[txt.charAt(i)] || opts.optionalmarker.start === txt.charAt(i) || opts.optionalmarker.end === txt.charAt(i) || opts.quantifiermarker.start === txt.charAt(i) || opts.quantifiermarker.end === txt.charAt(i) || opts.groupmarker.start === txt.charAt(i) || opts.groupmarker.end === txt.charAt(i) || opts.alternatormarker === txt.charAt(i)) {
                escapedTxt += "\\" + txt.charAt(i);
            } else escapedTxt += txt.charAt(i);
        }
        return escapedTxt;
    }
    function alignDigits(buffer, digits, opts) {
        if (digits > 0) {
            var radixPosition = $.inArray(opts.radixPoint, buffer);
            if (radixPosition === -1) {
                buffer.push(opts.radixPoint);
                radixPosition = buffer.length - 1;
            }
            for (var i = 1; i <= digits; i++) {
                buffer[radixPosition + i] = buffer[radixPosition + i] || "0";
            }
        }
        return buffer;
    }
    Inputmask.extendAliases({
        numeric: {
            mask: function(opts) {
                if (opts.repeat !== 0 && isNaN(opts.integerDigits)) {
                    opts.integerDigits = opts.repeat;
                }
                opts.repeat = 0;
                if (opts.groupSeparator === opts.radixPoint && opts.digits && opts.digits !== "0") {
                    if (opts.radixPoint === ".") {
                        opts.groupSeparator = ",";
                    } else if (opts.radixPoint === ",") {
                        opts.groupSeparator = ".";
                    } else opts.groupSeparator = "";
                }
                if (opts.groupSeparator === " ") {
                    opts.skipOptionalPartCharacter = undefined;
                }
                opts.autoGroup = opts.autoGroup && opts.groupSeparator !== "";
                if (opts.autoGroup) {
                    if (typeof opts.groupSize == "string" && isFinite(opts.groupSize)) opts.groupSize = parseInt(opts.groupSize);
                    if (isFinite(opts.integerDigits)) {
                        var seps = Math.floor(opts.integerDigits / opts.groupSize);
                        var mod = opts.integerDigits % opts.groupSize;
                        opts.integerDigits = parseInt(opts.integerDigits) + (mod === 0 ? seps - 1 : seps);
                        if (opts.integerDigits < 1) {
                            opts.integerDigits = "*";
                        }
                    }
                }
                if (opts.placeholder.length > 1) {
                    opts.placeholder = opts.placeholder.charAt(0);
                }
                if (opts.positionCaretOnClick === "radixFocus" && (opts.placeholder === "" && opts.integerOptional === false)) {
                    opts.positionCaretOnClick = "lvp";
                }
                opts.definitions[";"] = opts.definitions["~"];
                opts.definitions[";"].definitionSymbol = "~";
                if (opts.numericInput === true) {
                    opts.positionCaretOnClick = opts.positionCaretOnClick === "radixFocus" ? "lvp" : opts.positionCaretOnClick;
                    opts.digitsOptional = false;
                    if (isNaN(opts.digits)) opts.digits = 2;
                    opts.decimalProtect = false;
                }
                var mask = "[+]";
                mask += autoEscape(opts.prefix, opts);
                if (opts.integerOptional === true) {
                    mask += "~{1," + opts.integerDigits + "}";
                } else mask += "~{" + opts.integerDigits + "}";
                if (opts.digits !== undefined) {
                    var radixDef = opts.decimalProtect ? ":" : opts.radixPoint;
                    var dq = opts.digits.toString().split(",");
                    if (isFinite(dq[0]) && dq[1] && isFinite(dq[1])) {
                        mask += radixDef + ";{" + opts.digits + "}";
                    } else if (isNaN(opts.digits) || parseInt(opts.digits) > 0) {
                        if (opts.digitsOptional) {
                            mask += "[" + radixDef + ";{1," + opts.digits + "}]";
                        } else mask += radixDef + ";{" + opts.digits + "}";
                    }
                }
                mask += autoEscape(opts.suffix, opts);
                mask += "[-]";
                opts.greedy = false;
                return mask;
            },
            placeholder: "",
            greedy: false,
            digits: "*",
            digitsOptional: true,
            enforceDigitsOnBlur: false,
            radixPoint: ".",
            positionCaretOnClick: "radixFocus",
            groupSize: 3,
            groupSeparator: "",
            autoGroup: false,
            allowMinus: true,
            negationSymbol: {
                front: "-",
                back: ""
            },
            integerDigits: "+",
            integerOptional: true,
            prefix: "",
            suffix: "",
            rightAlign: true,
            decimalProtect: true,
            min: null,
            max: null,
            step: 1,
            insertMode: true,
            autoUnmask: false,
            unmaskAsNumber: false,
            inputType: "text",
            inputmode: "numeric",
            preValidation: function(buffer, pos, c, isSelection, opts, maskset) {
                if (c === "-" || c === opts.negationSymbol.front) {
                    if (opts.allowMinus !== true) return false;
                    opts.isNegative = opts.isNegative === undefined ? true : !opts.isNegative;
                    if (buffer.join("") === "") return true;
                    return {
                        caret: maskset.validPositions[pos] ? pos : undefined,
                        dopost: true
                    };
                }
                if (isSelection === false && c === opts.radixPoint && (opts.digits !== undefined && (isNaN(opts.digits) || parseInt(opts.digits) > 0))) {
                    var radixPos = $.inArray(opts.radixPoint, buffer);
                    if (radixPos !== -1 && maskset.validPositions[radixPos] !== undefined) {
                        if (opts.numericInput === true) {
                            return pos === radixPos;
                        }
                        return {
                            caret: radixPos + 1
                        };
                    }
                }
                return true;
            },
            postValidation: function(buffer, pos, currentResult, opts) {
                function buildPostMask(buffer, opts) {
                    var postMask = "";
                    postMask += "(" + opts.groupSeparator + "*{" + opts.groupSize + "}){*}";
                    if (opts.radixPoint !== "") {
                        var radixSplit = buffer.join("").split(opts.radixPoint);
                        if (radixSplit[1]) {
                            postMask += opts.radixPoint + "*{" + radixSplit[1].match(/^\d*\??\d*/)[0].length + "}";
                        }
                    }
                    return postMask;
                }
                var suffix = opts.suffix.split(""), prefix = opts.prefix.split("");
                if (currentResult.pos === undefined && currentResult.caret !== undefined && currentResult.dopost !== true) return currentResult;
                var caretPos = currentResult.caret !== undefined ? currentResult.caret : currentResult.pos;
                var maskedValue = buffer.slice();
                if (opts.numericInput) {
                    caretPos = maskedValue.length - caretPos - 1;
                    maskedValue = maskedValue.reverse();
                }
                var charAtPos = maskedValue[caretPos];
                if (charAtPos === opts.groupSeparator) {
                    caretPos += 1;
                    charAtPos = maskedValue[caretPos];
                }
                if (caretPos === maskedValue.length - opts.suffix.length - 1 && charAtPos === opts.radixPoint) return currentResult;
                if (charAtPos !== undefined) {
                    if (charAtPos !== opts.radixPoint && charAtPos !== opts.negationSymbol.front && charAtPos !== opts.negationSymbol.back) {
                        maskedValue[caretPos] = "?";
                        if (opts.prefix.length > 0 && caretPos >= (opts.isNegative === false ? 1 : 0) && caretPos < opts.prefix.length - 1 + (opts.isNegative === false ? 1 : 0)) {
                            prefix[caretPos - (opts.isNegative === false ? 1 : 0)] = "?";
                        } else if (opts.suffix.length > 0 && caretPos >= maskedValue.length - opts.suffix.length - (opts.isNegative === false ? 1 : 0)) {
                            suffix[caretPos - (maskedValue.length - opts.suffix.length - (opts.isNegative === false ? 1 : 0))] = "?";
                        }
                    }
                }
                prefix = prefix.join("");
                suffix = suffix.join("");
                var processValue = maskedValue.join("").replace(prefix, "");
                processValue = processValue.replace(suffix, "");
                processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), "");
                processValue = processValue.replace(new RegExp("[-" + Inputmask.escapeRegex(opts.negationSymbol.front) + "]", "g"), "");
                processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.negationSymbol.back) + "$"), "");
                if (isNaN(opts.placeholder)) {
                    processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.placeholder), "g"), "");
                }
                if (processValue.length > 1 && processValue.indexOf(opts.radixPoint) !== 1) {
                    if (charAtPos === "0") {
                        processValue = processValue.replace(/^\?/g, "");
                    }
                    processValue = processValue.replace(/^0/g, "");
                }
                if (processValue.charAt(0) === opts.radixPoint && opts.radixPoint !== "" && opts.numericInput !== true) {
                    processValue = "0" + processValue;
                }
                if (processValue !== "") {
                    processValue = processValue.split("");
                    if ((!opts.digitsOptional || opts.enforceDigitsOnBlur && currentResult.event === "blur") && isFinite(opts.digits)) {
                        var radixPosition = $.inArray(opts.radixPoint, processValue);
                        var rpb = $.inArray(opts.radixPoint, maskedValue);
                        if (radixPosition === -1) {
                            processValue.push(opts.radixPoint);
                            radixPosition = processValue.length - 1;
                        }
                        for (var i = 1; i <= opts.digits; i++) {
                            if ((!opts.digitsOptional || opts.enforceDigitsOnBlur && currentResult.event === "blur") && (processValue[radixPosition + i] === undefined || processValue[radixPosition + i] === opts.placeholder.charAt(0))) {
                                processValue[radixPosition + i] = currentResult.placeholder || opts.placeholder.charAt(0);
                            } else if (rpb !== -1 && maskedValue[rpb + i] !== undefined) {
                                processValue[radixPosition + i] = processValue[radixPosition + i] || maskedValue[rpb + i];
                            }
                        }
                    }
                    if (opts.autoGroup === true && opts.groupSeparator !== "" && (charAtPos !== opts.radixPoint || currentResult.pos !== undefined || currentResult.dopost)) {
                        var addRadix = processValue[processValue.length - 1] === opts.radixPoint && currentResult.c === opts.radixPoint;
                        processValue = Inputmask(buildPostMask(processValue, opts), {
                            numericInput: true,
                            jitMasking: true,
                            definitions: {
                                "*": {
                                    validator: "[0-9?]",
                                    cardinality: 1
                                }
                            }
                        }).format(processValue.join(""));
                        if (addRadix) processValue += opts.radixPoint;
                        if (processValue.charAt(0) === opts.groupSeparator) {
                            processValue.substr(1);
                        }
                    } else processValue = processValue.join("");
                }
                if (opts.isNegative && currentResult.event === "blur") {
                    opts.isNegative = processValue !== "0";
                }
                processValue = prefix + processValue;
                processValue += suffix;
                if (opts.isNegative) {
                    processValue = opts.negationSymbol.front + processValue;
                    processValue += opts.negationSymbol.back;
                }
                processValue = processValue.split("");
                if (charAtPos !== undefined) {
                    if (charAtPos !== opts.radixPoint && charAtPos !== opts.negationSymbol.front && charAtPos !== opts.negationSymbol.back) {
                        caretPos = $.inArray("?", processValue);
                        if (caretPos > -1) {
                            processValue[caretPos] = charAtPos;
                        } else caretPos = currentResult.caret || 0;
                    } else if (charAtPos === opts.radixPoint || charAtPos === opts.negationSymbol.front || charAtPos === opts.negationSymbol.back) {
                        var newCaretPos = $.inArray(charAtPos, processValue);
                        if (newCaretPos !== -1) caretPos = newCaretPos;
                    }
                }
                if (opts.numericInput) {
                    caretPos = processValue.length - caretPos - 1;
                    processValue = processValue.reverse();
                }
                var rslt = {
                    caret: (charAtPos === undefined || currentResult.pos !== undefined) && caretPos !== undefined ? caretPos + (opts.numericInput ? -1 : 1) : caretPos,
                    buffer: processValue,
                    refreshFromBuffer: currentResult.dopost || buffer.join("") !== processValue.join("")
                };
                return rslt.refreshFromBuffer ? rslt : currentResult;
            },
            onBeforeWrite: function(e, buffer, caretPos, opts) {
                function parseMinMaxOptions(opts) {
                    if (opts.parseMinMaxOptions === undefined) {
                        if (opts.min !== null) {
                            opts.min = opts.min.toString().replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), "");
                            if (opts.radixPoint === ",") opts.min = opts.min.replace(opts.radixPoint, ".");
                            opts.min = isFinite(opts.min) ? parseFloat(opts.min) : NaN;
                            if (isNaN(opts.min)) opts.min = Number.MIN_VALUE;
                        }
                        if (opts.max !== null) {
                            opts.max = opts.max.toString().replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), "");
                            if (opts.radixPoint === ",") opts.max = opts.max.replace(opts.radixPoint, ".");
                            opts.max = isFinite(opts.max) ? parseFloat(opts.max) : NaN;
                            if (isNaN(opts.max)) opts.max = Number.MAX_VALUE;
                        }
                        opts.parseMinMaxOptions = "done";
                    }
                }
                if (e) {
                    switch (e.type) {
                      case "keydown":
                        return opts.postValidation(buffer, caretPos, {
                            caret: caretPos,
                            dopost: true
                        }, opts);

                      case "blur":
                      case "checkval":
                        var unmasked;
                        parseMinMaxOptions(opts);
                        if (opts.min !== null || opts.max !== null) {
                            unmasked = opts.onUnMask(buffer.join(""), undefined, $.extend({}, opts, {
                                unmaskAsNumber: true
                            }));
                            if (opts.min !== null && unmasked < opts.min) {
                                opts.isNegative = opts.min < 0;
                                return opts.postValidation(opts.min.toString().replace(".", opts.radixPoint).split(""), caretPos, {
                                    caret: caretPos,
                                    dopost: true,
                                    placeholder: "0"
                                }, opts);
                            } else if (opts.max !== null && unmasked > opts.max) {
                                opts.isNegative = opts.max < 0;
                                return opts.postValidation(opts.max.toString().replace(".", opts.radixPoint).split(""), caretPos, {
                                    caret: caretPos,
                                    dopost: true,
                                    placeholder: "0"
                                }, opts);
                            }
                        }
                        return opts.postValidation(buffer, caretPos, {
                            caret: caretPos,
                            placeholder: "0",
                            event: "blur"
                        }, opts);

                      case "_checkval":
                        return {
                            caret: caretPos
                        };

                      default:
                        break;
                    }
                }
            },
            regex: {
                integerPart: function(opts, emptyCheck) {
                    return emptyCheck ? new RegExp("[" + Inputmask.escapeRegex(opts.negationSymbol.front) + "+]?") : new RegExp("[" + Inputmask.escapeRegex(opts.negationSymbol.front) + "+]?\\d+");
                },
                integerNPart: function(opts) {
                    return new RegExp("[\\d" + Inputmask.escapeRegex(opts.groupSeparator) + Inputmask.escapeRegex(opts.placeholder.charAt(0)) + "]+");
                }
            },
            definitions: {
                "~": {
                    validator: function(chrs, maskset, pos, strict, opts, isSelection) {
                        var isValid, l;
                        if (chrs === "k" || chrs === "m") {
                            isValid = {
                                insert: [],
                                c: 0
                            };
                            for (var i = 0, l = chrs === "k" ? 2 : 5; i < l; i++) {
                                isValid.insert.push({
                                    pos: pos + i,
                                    c: 0
                                });
                            }
                            isValid.pos = pos + l;
                            return isValid;
                        }
                        isValid = strict ? new RegExp("[0-9" + Inputmask.escapeRegex(opts.groupSeparator) + "]").test(chrs) : new RegExp("[0-9]").test(chrs);
                        if (isValid === true) {
                            if (opts.numericInput !== true && maskset.validPositions[pos] !== undefined && maskset.validPositions[pos].match.def === "~" && !isSelection) {
                                var processValue = maskset.buffer.join("");
                                processValue = processValue.replace(new RegExp("[-" + Inputmask.escapeRegex(opts.negationSymbol.front) + "]", "g"), "");
                                processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.negationSymbol.back) + "$"), "");
                                var pvRadixSplit = processValue.split(opts.radixPoint);
                                if (pvRadixSplit.length > 1) {
                                    pvRadixSplit[1] = pvRadixSplit[1].replace(/0/g, opts.placeholder.charAt(0));
                                }
                                if (pvRadixSplit[0] === "0") {
                                    pvRadixSplit[0] = pvRadixSplit[0].replace(/0/g, opts.placeholder.charAt(0));
                                }
                                processValue = pvRadixSplit[0] + opts.radixPoint + pvRadixSplit[1] || "";
                                var bufferTemplate = maskset._buffer.join("");
                                if (processValue === opts.radixPoint) {
                                    processValue = bufferTemplate;
                                }
                                while (processValue.match(Inputmask.escapeRegex(bufferTemplate) + "$") === null) {
                                    bufferTemplate = bufferTemplate.slice(1);
                                }
                                processValue = processValue.replace(bufferTemplate, "");
                                processValue = processValue.split("");
                                if (processValue[pos] === undefined) {
                                    isValid = {
                                        pos: pos,
                                        remove: pos
                                    };
                                } else {
                                    isValid = {
                                        pos: pos
                                    };
                                }
                            }
                        } else if (!strict && chrs === opts.radixPoint && maskset.validPositions[pos - 1] === undefined) {
                            isValid = {
                                insert: {
                                    pos: pos,
                                    c: 0
                                },
                                pos: pos + 1
                            };
                        }
                        return isValid;
                    },
                    cardinality: 1
                },
                "+": {
                    validator: function(chrs, maskset, pos, strict, opts) {
                        return opts.allowMinus && (chrs === "-" || chrs === opts.negationSymbol.front);
                    },
                    cardinality: 1,
                    placeholder: ""
                },
                "-": {
                    validator: function(chrs, maskset, pos, strict, opts) {
                        return opts.allowMinus && chrs === opts.negationSymbol.back;
                    },
                    cardinality: 1,
                    placeholder: ""
                },
                ":": {
                    validator: function(chrs, maskset, pos, strict, opts) {
                        var radix = "[" + Inputmask.escapeRegex(opts.radixPoint) + "]";
                        var isValid = new RegExp(radix).test(chrs);
                        if (isValid && maskset.validPositions[pos] && maskset.validPositions[pos].match.placeholder === opts.radixPoint) {
                            isValid = {
                                caret: pos + 1
                            };
                        }
                        return isValid;
                    },
                    cardinality: 1,
                    placeholder: function(opts) {
                        return opts.radixPoint;
                    }
                }
            },
            onUnMask: function(maskedValue, unmaskedValue, opts) {
                if (unmaskedValue === "" && opts.nullable === true) {
                    return unmaskedValue;
                }
                var processValue = maskedValue.replace(opts.prefix, "");
                processValue = processValue.replace(opts.suffix, "");
                processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), "");
                if (opts.placeholder.charAt(0) !== "") {
                    processValue = processValue.replace(new RegExp(opts.placeholder.charAt(0), "g"), "0");
                }
                if (opts.unmaskAsNumber) {
                    if (opts.radixPoint !== "" && processValue.indexOf(opts.radixPoint) !== -1) processValue = processValue.replace(Inputmask.escapeRegex.call(this, opts.radixPoint), ".");
                    processValue = processValue.replace(new RegExp("^" + Inputmask.escapeRegex(opts.negationSymbol.front)), "-");
                    processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.negationSymbol.back) + "$"), "");
                    return Number(processValue);
                }
                return processValue;
            },
            isComplete: function(buffer, opts) {
                var maskedValue = (opts.numericInput ? buffer.slice().reverse() : buffer).join("");
                maskedValue = maskedValue.replace(new RegExp("^" + Inputmask.escapeRegex(opts.negationSymbol.front)), "-");
                maskedValue = maskedValue.replace(new RegExp(Inputmask.escapeRegex(opts.negationSymbol.back) + "$"), "");
                maskedValue = maskedValue.replace(opts.prefix, "");
                maskedValue = maskedValue.replace(opts.suffix, "");
                maskedValue = maskedValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator) + "([0-9]{3})", "g"), "$1");
                if (opts.radixPoint === ",") maskedValue = maskedValue.replace(Inputmask.escapeRegex(opts.radixPoint), ".");
                return isFinite(maskedValue);
            },
            onBeforeMask: function(initialValue, opts) {
                opts.isNegative = undefined;
                var radixPoint = opts.radixPoint || ",";
                if ((typeof initialValue == "number" || opts.inputType === "number") && radixPoint !== "") {
                    initialValue = initialValue.toString().replace(".", radixPoint);
                }
                var valueParts = initialValue.split(radixPoint), integerPart = valueParts[0].replace(/[^\-0-9]/g, ""), decimalPart = valueParts.length > 1 ? valueParts[1].replace(/[^0-9]/g, "") : "";
                initialValue = integerPart + (decimalPart !== "" ? radixPoint + decimalPart : decimalPart);
                var digits = 0;
                if (radixPoint !== "") {
                    digits = decimalPart.length;
                    if (decimalPart !== "") {
                        var digitsFactor = Math.pow(10, digits || 1);
                        if (isFinite(opts.digits)) {
                            digits = parseInt(opts.digits);
                            digitsFactor = Math.pow(10, digits);
                        }
                        initialValue = initialValue.replace(Inputmask.escapeRegex(radixPoint), ".");
                        if (isFinite(initialValue)) initialValue = Math.round(parseFloat(initialValue) * digitsFactor) / digitsFactor;
                        initialValue = initialValue.toString().replace(".", radixPoint);
                    }
                }
                if (opts.digits === 0 && initialValue.indexOf(Inputmask.escapeRegex(radixPoint)) !== -1) {
                    initialValue = initialValue.substring(0, initialValue.indexOf(Inputmask.escapeRegex(radixPoint)));
                }
                return alignDigits(initialValue.toString().split(""), digits, opts).join("");
            },
            onKeyDown: function(e, buffer, caretPos, opts) {
                var $input = $(this);
                if (e.ctrlKey) {
                    switch (e.keyCode) {
                      case Inputmask.keyCode.UP:
                        $input.val(parseFloat(this.inputmask.unmaskedvalue()) + parseInt(opts.step));
                        $input.trigger("setvalue");
                        break;

                      case Inputmask.keyCode.DOWN:
                        $input.val(parseFloat(this.inputmask.unmaskedvalue()) - parseInt(opts.step));
                        $input.trigger("setvalue");
                        break;
                    }
                }
            }
        },
        currency: {
            prefix: "$ ",
            groupSeparator: ",",
            alias: "numeric",
            placeholder: "0",
            autoGroup: true,
            digits: 2,
            digitsOptional: false,
            clearMaskOnLostFocus: false
        },
        decimal: {
            alias: "numeric"
        },
        integer: {
            alias: "numeric",
            digits: 0,
            radixPoint: ""
        },
        percentage: {
            alias: "numeric",
            digits: 2,
            digitsOptional: true,
            radixPoint: ".",
            placeholder: "0",
            autoGroup: false,
            min: 0,
            max: 100,
            suffix: " %",
            allowMinus: false
        }
    });
    return Inputmask;
});

/***/ }),

/***/ "./node_modules/popper.js/dist/esm/popper.js":
/*!***************************************************!*\
  !*** ./node_modules/popper.js/dist/esm/popper.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.0
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined';

var timeoutDuration = function () {
  var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
  for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
    if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
      return 1;
    }
  }
  return 0;
}();

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

/**
 * Returns the reference node of the reference object, or the reference object itself.
 * @method
 * @memberof Popper.Utils
 * @param {Element|Object} reference - the reference element (the popper will be relative to this)
 * @returns {Element} parent
 */
function getReferenceNode(reference) {
  return reference && reference.referenceNode ? reference.referenceNode : reference;
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent || null;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.width;
  var height = sizes.height || element.clientHeight || result.height;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop, 10);
    var marginLeft = parseFloat(styles.marginLeft, 10);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  var parentNode = getParentNode(element);
  if (!parentNode) {
    return false;
  }
  return isFixed(parentNode);
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicitly asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */
function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var round = Math.round,
      floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);

  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;

  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;

    // flips variation if reference element overflows boundaries
    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    // flips variation if popper content overflows boundaries
    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);

    var flippedVariation = flippedVariationByRef || flippedVariationByContent;

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport',
    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,
    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

/* harmony default export */ __webpack_exports__["default"] = (Popper);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../AppData/Roaming/npm/node_modules/tars-cli/node_modules/webpack/buildin/global.js */ "../../../AppData/Roaming/npm/node_modules/tars-cli/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/svg4everybody/dist/svg4everybody.js":
/*!**********************************************************!*\
  !*** ./node_modules/svg4everybody/dist/svg4everybody.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(root, factory) {
     true ? // AMD. Register as an anonymous module unless amdModuleId is set
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
        return root.svg4everybody = factory();
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function() {
    /*! svg4everybody v2.1.9 | github.com/jonathantneal/svg4everybody */
    function embed(parent, svg, target) {
        // if the target exists
        if (target) {
            // create a document fragment to hold the contents of the target
            var fragment = document.createDocumentFragment(), viewBox = !svg.hasAttribute("viewBox") && target.getAttribute("viewBox");
            // conditionally set the viewBox on the svg
            viewBox && svg.setAttribute("viewBox", viewBox);
            // copy the contents of the clone into the fragment
            for (// clone the target
            var clone = target.cloneNode(!0); clone.childNodes.length; ) {
                fragment.appendChild(clone.firstChild);
            }
            // append the fragment into the svg
            parent.appendChild(fragment);
        }
    }
    function loadreadystatechange(xhr) {
        // listen to changes in the request
        xhr.onreadystatechange = function() {
            // if the request is ready
            if (4 === xhr.readyState) {
                // get the cached html document
                var cachedDocument = xhr._cachedDocument;
                // ensure the cached html document based on the xhr response
                cachedDocument || (cachedDocument = xhr._cachedDocument = document.implementation.createHTMLDocument(""), 
                cachedDocument.body.innerHTML = xhr.responseText, xhr._cachedTarget = {}), // clear the xhr embeds list and embed each item
                xhr._embeds.splice(0).map(function(item) {
                    // get the cached target
                    var target = xhr._cachedTarget[item.id];
                    // ensure the cached target
                    target || (target = xhr._cachedTarget[item.id] = cachedDocument.getElementById(item.id)), 
                    // embed the target into the svg
                    embed(item.parent, item.svg, target);
                });
            }
        }, // test the ready state change immediately
        xhr.onreadystatechange();
    }
    function svg4everybody(rawopts) {
        function oninterval() {
            // while the index exists in the live <use> collection
            for (// get the cached <use> index
            var index = 0; index < uses.length; ) {
                // get the current <use>
                var use = uses[index], parent = use.parentNode, svg = getSVGAncestor(parent), src = use.getAttribute("xlink:href") || use.getAttribute("href");
                if (!src && opts.attributeName && (src = use.getAttribute(opts.attributeName)), 
                svg && src) {
                    if (polyfill) {
                        if (!opts.validate || opts.validate(src, svg, use)) {
                            // remove the <use> element
                            parent.removeChild(use);
                            // parse the src and get the url and id
                            var srcSplit = src.split("#"), url = srcSplit.shift(), id = srcSplit.join("#");
                            // if the link is external
                            if (url.length) {
                                // get the cached xhr request
                                var xhr = requests[url];
                                // ensure the xhr request exists
                                xhr || (xhr = requests[url] = new XMLHttpRequest(), xhr.open("GET", url), xhr.send(), 
                                xhr._embeds = []), // add the svg and id as an item to the xhr embeds list
                                xhr._embeds.push({
                                    parent: parent,
                                    svg: svg,
                                    id: id
                                }), // prepare the xhr ready state change event
                                loadreadystatechange(xhr);
                            } else {
                                // embed the local id into the svg
                                embed(parent, svg, document.getElementById(id));
                            }
                        } else {
                            // increase the index when the previous value was not "valid"
                            ++index, ++numberOfSvgUseElementsToBypass;
                        }
                    }
                } else {
                    // increase the index when the previous value was not "valid"
                    ++index;
                }
            }
            // continue the interval
            (!uses.length || uses.length - numberOfSvgUseElementsToBypass > 0) && requestAnimationFrame(oninterval, 67);
        }
        var polyfill, opts = Object(rawopts), newerIEUA = /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/, webkitUA = /\bAppleWebKit\/(\d+)\b/, olderEdgeUA = /\bEdge\/12\.(\d+)\b/, edgeUA = /\bEdge\/.(\d+)\b/, inIframe = window.top !== window.self;
        polyfill = "polyfill" in opts ? opts.polyfill : newerIEUA.test(navigator.userAgent) || (navigator.userAgent.match(olderEdgeUA) || [])[1] < 10547 || (navigator.userAgent.match(webkitUA) || [])[1] < 537 || edgeUA.test(navigator.userAgent) && inIframe;
        // create xhr requests object
        var requests = {}, requestAnimationFrame = window.requestAnimationFrame || setTimeout, uses = document.getElementsByTagName("use"), numberOfSvgUseElementsToBypass = 0;
        // conditionally start the interval if the polyfill is active
        polyfill && oninterval();
    }
    function getSVGAncestor(node) {
        for (var svg = node; "svg" !== svg.nodeName.toLowerCase() && (svg = svg.parentNode); ) {}
        return svg;
    }
    return svg4everybody;
});

/***/ }),

/***/ "./node_modules/tippy.js/dist/tippy.chunk.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/tippy.js/dist/tippy.chunk.esm.js ***!
  \*******************************************************/
/*! exports provided: B, R, _, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, r, s, t, u, w */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return BACKDROP_CLASS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return ROUND_ARROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_", function() { return _extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tippy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return div; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isUCBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return defaultProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return isMouseEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return currentInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getOwnerDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return closestCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return includes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getBasePlacement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return arrayFrom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return hideAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return createTippyWithPlugins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return normalizeToArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return isBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return removeProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return setVisibilityState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return throwErrorWhen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return useIfDefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return warnWhen; });
/* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");
/**!
* tippy.js v5.1.1
* (c) 2017-2019 atomiks
* MIT License
*/


function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var version = "5.1.1";

/**
 * Triggers reflow
 */
function reflow(element) {
  void element.offsetHeight;
}
/**
 * Sets the innerHTML of an element
 */

function setInnerHTML(element, html) {
  element[innerHTML()] = html;
}
/**
 * Determines if the value is a reference element
 */

function isReferenceElement(value) {
  return !!(value && value._tippy && value._tippy.reference === value);
}
/**
 * Safe .hasOwnProperty check, for prototype-less objects
 */

function hasOwnProperty(obj, key) {
  return {}.hasOwnProperty.call(obj, key);
}
/**
 * Returns an array of elements based on the value
 */

function getArrayOfElements(value) {
  if (isElement(value)) {
    return [value];
  }

  if (isNodeList(value)) {
    return arrayFrom(value);
  }

  if (Array.isArray(value)) {
    return value;
  }

  return arrayFrom(document.querySelectorAll(value));
}
/**
 * Returns a value at a given index depending on if it's an array or number
 */

function getValueAtIndexOrReturn(value, index, defaultValue) {
  if (Array.isArray(value)) {
    var v = value[index];
    return v == null ? Array.isArray(defaultValue) ? defaultValue[index] : defaultValue : v;
  }

  return value;
}
/**
 * Prevents errors from being thrown while accessing nested modifier objects
 * in `popperOptions`
 */

function getModifier(obj, key) {
  return obj && obj.modifiers && obj.modifiers[key];
}
/**
 * Determines if the value is of type
 */

function isType(value, type) {
  var str = {}.toString.call(value);
  return str.indexOf('[object') === 0 && str.indexOf(type + "]") > -1;
}
/**
 * Determines if the value is of type Element
 */

function isElement(value) {
  return isType(value, 'Element');
}
/**
 * Determines if the value is of type NodeList
 */

function isNodeList(value) {
  return isType(value, 'NodeList');
}
/**
 * Determines if the value is of type MouseEvent
 */

function isMouseEvent(value) {
  return isType(value, 'MouseEvent');
}
/**
 * Firefox extensions don't allow setting .innerHTML directly, this will trick
 * it
 */

function innerHTML() {
  return 'innerHTML';
}
/**
 * Evaluates a function if one, or returns the value
 */

function invokeWithArgsOrReturn(value, args) {
  return typeof value === 'function' ? value.apply(void 0, args) : value;
}
/**
 * Sets a popperInstance modifier's property to a value
 */

function setModifierValue(modifiers, name, property, value) {
  modifiers.filter(function (m) {
    return m.name === name;
  })[0][property] = value;
}
/**
 * Returns a new `div` element
 */

function div() {
  return document.createElement('div');
}
/**
 * Applies a transition duration to a list of elements
 */

function setTransitionDuration(els, value) {
  els.forEach(function (el) {
    if (el) {
      el.style.transitionDuration = value + "ms";
    }
  });
}
/**
 * Sets the visibility state to elements so they can begin to transition
 */

function setVisibilityState(els, state) {
  els.forEach(function (el) {
    if (el) {
      el.setAttribute('data-state', state);
    }
  });
}
/**
 * Debounce utility. To avoid bloating bundle size, we're only passing 1
 * argument here, a more generic function would pass all arguments. Only
 * `onMouseMove` uses this which takes the event object for now.
 */

function debounce(fn, ms) {
  // Avoid wrapping in `setTimeout` if ms is 0 anyway
  if (ms === 0) {
    return fn;
  }

  var timeout;
  return function (arg) {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      fn(arg);
    }, ms);
  };
}
/**
 * Preserves the original function invocation when another function replaces it
 */

function preserveInvocation(originalFn, currentFn, args) {
  if (originalFn && originalFn !== currentFn) {
    originalFn.apply(void 0, args);
  }
}
/**
 * Deletes properties from an object (pure)
 */

function removeProperties(obj, keys) {
  var clone = _extends({}, obj);

  keys.forEach(function (key) {
    delete clone[key];
  });
  return clone;
}
/**
 * Ponyfill for Array.from - converts iterable values to an array
 */

function arrayFrom(value) {
  return [].slice.call(value);
}
/**
 * Works like Element.prototype.closest, but uses a callback instead
 */

function closestCallback(element, callback) {
  while (element) {
    if (callback(element)) {
      return element;
    }

    element = element.parentElement;
  }

  return null;
}
/**
 * Determines if an array or string includes a string
 */

function includes(a, b) {
  return a.indexOf(b) > -1;
}
/**
 * Creates an array from string of values separated by whitespace
 */

function splitBySpaces(value) {
  return value.split(/\s+/).filter(Boolean);
}
/**
 * Returns the `nextValue` if `nextValue` is not `undefined`, otherwise returns
 * `currentValue`
 */

function useIfDefined(nextValue, currentValue) {
  return nextValue !== undefined ? nextValue : currentValue;
}
/**
 * Converts a value that's an array or single value to an array
 */

function normalizeToArray(value) {
  // @ts-ignore
  return [].concat(value);
}
/**
 * Returns the ownerDocument of the first available element, otherwise global
 * document
 */

function getOwnerDocument(elementOrElements) {
  var _normalizeToArray = normalizeToArray(elementOrElements),
      element = _normalizeToArray[0];

  return element ? element.ownerDocument || document : document;
}
/**
 * Adds item to array if array does not contain it
 */

function pushIfUnique(arr, value) {
  if (arr.indexOf(value) === -1) {
    arr.push(value);
  }
}
/**
 * Adds `px` if value is a number, or returns it directly
 */

function appendPxIfNumber(value) {
  return typeof value === 'number' ? value + "px" : value;
}
/**
 * Filters out duplicate elements in an array
 */

function unique(arr) {
  return arr.filter(function (item, index) {
    return arr.indexOf(item) === index;
  });
}
/**
 * Returns number from number or CSS units string
 */

function getNumber(value) {
  return typeof value === 'number' ? value : parseFloat(value);
}
/**
 * Gets number or CSS string units in pixels (e.g. `1rem` -> 16)
 */

function getUnitsInPx(doc, value) {
  var isRem = typeof value === 'string' && includes(value, 'rem');
  var html = doc.documentElement;
  var rootFontSize = 16;

  if (html && isRem) {
    return parseFloat(getComputedStyle(html).fontSize || String(rootFontSize)) * getNumber(value);
  }

  return getNumber(value);
}
/**
 * Adds the `distancePx` value to the placement of a Popper.Padding object
 */

function getComputedPadding(basePlacement, padding, distancePx) {
  if (padding === void 0) {
    padding = 5;
  }

  var freshPaddingObject = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
  var keys = Object.keys(freshPaddingObject);
  return keys.reduce(function (obj, key) {
    obj[key] = typeof padding === 'number' ? padding : padding[key];

    if (basePlacement === key) {
      obj[key] = typeof padding === 'number' ? padding + distancePx : padding[basePlacement] + distancePx;
    }

    return obj;
  }, freshPaddingObject);
}

function createMemoryLeakWarning(method) {
  var txt = method === 'destroy' ? 'n already-' : ' ';
  return "\n    " + method + "() was called on a" + txt + "destroyed instance. This is a no-op but\n    indicates a potential memory leak.\n  ";
}
function clean(value) {
  var spacesAndTabs = /[ \t]{2,}/g;
  var lineStartWithSpaces = /^[ \t]*/gm;
  return value.replace(spacesAndTabs, ' ').replace(lineStartWithSpaces, '').trim();
}

function getDevMessage(message) {
  return clean("\n  %ctippy.js\n\n  %c" + clean(message) + "\n\n  %c\uD83D\uDC77\u200D This is a development-only message. It will be removed in production.\n  ");
}

function getFormattedMessage(message) {
  return [getDevMessage(message), // title
  'color: #00C584; font-size: 1.3em; font-weight: bold;', // message
  'line-height: 1.5', // footer
  'color: #a6a095;'];
}
/**
 * Helpful wrapper around `console.warn()`.
 * TODO: Should we use a cache so it only warns a single time and not spam the
 * console? (Need to consider hot reloading and invalidation though). Chrome
 * already batches warnings as well.
 */

function warnWhen(condition, message) {
  if (condition) {
    var _console;

    (_console = console).warn.apply(_console, getFormattedMessage(message));
  }
}
/**
 * Helpful wrapper around thrown errors
 */

function throwErrorWhen(condition, message) {
  if (condition) {
    throw new Error(clean(message));
  }
}
/**
 * Validates the `targets` value passed to `tippy()`
 */

function validateTargets(targets) {
  var didPassFalsyValue = !targets;
  var didPassPlainObject = Object.prototype.toString.call(targets) === '[object Object]' && !targets.addEventListener;
  throwErrorWhen(didPassFalsyValue, "tippy() was passed `" + targets + "` as its targets (first) argument.\n\n    Valid types are: String, Element, Element[], or NodeList.");
  throwErrorWhen(didPassPlainObject, "tippy() was passed a plain object which is no longer supported as an\n    argument.\n    \n    See https://atomiks.github.io/tippyjs/misc/#custom-position");
}

var defaultProps = {
  allowHTML: true,
  animateFill: false,
  animation: 'fade',
  appendTo: function appendTo() {
    return document.body;
  },
  aria: 'describedby',
  arrow: true,
  boundary: 'scrollParent',
  content: '',
  delay: 0,
  distance: 10,
  duration: [300, 250],
  flip: true,
  flipBehavior: 'flip',
  flipOnUpdate: false,
  followCursor: false,
  hideOnClick: true,
  ignoreAttributes: false,
  inlinePositioning: false,
  inertia: false,
  interactive: false,
  interactiveBorder: 2,
  interactiveDebounce: 0,
  lazy: true,
  maxWidth: 350,
  multiple: false,
  offset: 0,
  onAfterUpdate: function onAfterUpdate() {},
  onBeforeUpdate: function onBeforeUpdate() {},
  onCreate: function onCreate() {},
  onDestroy: function onDestroy() {},
  onHidden: function onHidden() {},
  onHide: function onHide() {},
  onMount: function onMount() {},
  onShow: function onShow() {},
  onShown: function onShown() {},
  onTrigger: function onTrigger() {},
  onUntrigger: function onUntrigger() {},
  placement: 'top',
  plugins: [],
  popperOptions: {},
  role: 'tooltip',
  showOnCreate: false,
  sticky: false,
  theme: '',
  touch: true,
  trigger: 'mouseenter focus',
  triggerTarget: null,
  updateDuration: 0,
  zIndex: 9999
};
var defaultKeys = Object.keys(defaultProps);
/**
 * If the setProps() method encounters one of these, the popperInstance must be
 * recreated
 */

var POPPER_INSTANCE_DEPENDENCIES = ['arrow', 'boundary', 'distance', 'flip', 'flipBehavior', 'flipOnUpdate', 'offset', 'placement', 'popperOptions'];
/**
 * Mutates the defaultProps object by setting the props specified
 */

var setDefaultProps = function setDefaultProps(partialProps) {
  if (undefined !== "production") {
    validateProps(partialProps, []);
  }

  var keys = Object.keys(partialProps);
  keys.forEach(function (key) {
    defaultProps[key] = partialProps[key];
  });
};
/**
 * Returns an extended props object including plugin props
 */

function getExtendedProps(props) {
  return _extends({}, props, {}, props.plugins.reduce(function (acc, plugin) {
    var name = plugin.name,
        defaultValue = plugin.defaultValue;

    if (name) {
      acc[name] = props[name] !== undefined ? props[name] : defaultValue;
    }

    return acc;
  }, {}));
}
/**
 * Returns an object of optional props from data-tippy-* attributes
 */

function getDataAttributeProps(reference, plugins) {
  var propKeys = plugins ? Object.keys(getExtendedProps(_extends({}, defaultProps, {
    plugins: plugins
  }))) : defaultKeys;
  var props = propKeys.reduce(function (acc, key) {
    var valueAsString = (reference.getAttribute("data-tippy-" + key) || '').trim();

    if (!valueAsString) {
      return acc;
    }

    if (key === 'content') {
      acc[key] = valueAsString;
    } else {
      try {
        acc[key] = JSON.parse(valueAsString);
      } catch (e) {
        acc[key] = valueAsString;
      }
    }

    return acc;
  }, {});
  return props;
}
/**
 * Evaluates the props object by merging data attributes and disabling
 * conflicting props where necessary
 */

function evaluateProps(reference, props) {
  var out = _extends({}, props, {
    content: invokeWithArgsOrReturn(props.content, [reference])
  }, props.ignoreAttributes ? {} : getDataAttributeProps(reference, props.plugins));

  if (out.interactive) {
    out.aria = null;
  }

  return out;
}
/**
 * Validates props with the valid `defaultProps` object
 */

function validateProps(partialProps, plugins) {
  if (partialProps === void 0) {
    partialProps = {};
  }

  if (plugins === void 0) {
    plugins = [];
  }

  var keys = Object.keys(partialProps);
  keys.forEach(function (prop) {
    var value = partialProps[prop];
    var didSpecifyPlacementInPopperOptions = prop === 'popperOptions' && value !== null && typeof value === 'object' && hasOwnProperty(value, 'placement');
    var nonPluginProps = removeProperties(defaultProps, ['animateFill', 'followCursor', 'inlinePositioning', 'sticky']); // These props have custom warnings

    var customWarningProps = ['a11y', 'arrowType', 'showOnInit', 'size', 'target', 'touchHold'];
    var didPassUnknownProp = !hasOwnProperty(nonPluginProps, prop) && !includes(customWarningProps, prop); // Check if the prop exists in `plugins`

    if (didPassUnknownProp) {
      didPassUnknownProp = plugins.filter(function (plugin) {
        return plugin.name === prop;
      }).length === 0;
    }

    warnWhen(prop === 'target', "The `target` prop was removed in v5 and replaced with the delegate()\n      addon in order to conserve bundle size.\n      \n      See: https://atomiks.github.io/tippyjs/addons/#event-delegation");
    warnWhen(prop === 'a11y', "The `a11y` prop was removed in v5. Make sure the element you are giving\n      a tippy to is natively focusable, such as <button> or <input>, not <div>\n      or <span>.");
    warnWhen(prop === 'showOnInit', "The `showOnInit` prop was renamed to `showOnCreate` in v5.");
    warnWhen(prop === 'arrowType', "The `arrowType` prop was removed in v5 in favor of overloading the\n      `arrow` prop.\n\n      \"round\" string was replaced with importing the string from the package.\n\n      * import {roundArrow} from 'tippy.js'; (ESM version)\n      * const {roundArrow} = tippy; (IIFE CDN version)\n\n      Before: {arrow: true, arrowType: \"round\"}\n      After: {arrow: roundArrow}");
    warnWhen(prop === 'touchHold', "The `touchHold` prop was removed in v5 in favor of overloading the\n      `touch` prop.\n      \n      Before: {touchHold: true}\n      After: {touch: \"hold\"}");
    warnWhen(prop === 'size', "The `size` prop was removed in v5. Instead, use a theme that specifies\n      CSS padding and font-size properties.");
    warnWhen(prop === 'theme' && value === 'google', "The included theme \"google\" was renamed to \"material\" in v5.");
    warnWhen(didSpecifyPlacementInPopperOptions, "Specifying placement in `popperOptions` is not supported. Use the\n      base-level `placement` prop instead.\n      \n      Before: {popperOptions: {placement: \"bottom\"}}\n      After: {placement: \"bottom\"}");
    warnWhen(didPassUnknownProp, "`" + prop + "` is not a valid prop. You may have spelled it incorrectly,\n      or if it's a plugin, forgot to pass it in an array as props.plugins.\n\n      In v5, the following props were turned into plugins:\n\n      * animateFill\n      * followCursor\n      * sticky\n\n      All props: https://atomiks.github.io/tippyjs/all-props/\n      Plugins: https://atomiks.github.io/tippyjs/plugins/");
  });
}

var PASSIVE = {
  passive: true
};
var ROUND_ARROW = '<svg viewBox="0 0 18 7" xmlns="http://www.w3.org/2000/svg"><path d="M0 7s2.021-.015 5.253-4.218C6.584 1.051 7.797.007 9 0c1.203-.007 2.416 1.035 3.761 2.782C16.012 7.005 18 7 18 7H0z"/></svg>';
var IOS_CLASS = "tippy-iOS";
var POPPER_CLASS = "tippy-popper";
var TOOLTIP_CLASS = "tippy-tooltip";
var CONTENT_CLASS = "tippy-content";
var BACKDROP_CLASS = "tippy-backdrop";
var ARROW_CLASS = "tippy-arrow";
var SVG_ARROW_CLASS = "tippy-svg-arrow";
var POPPER_SELECTOR = "." + POPPER_CLASS;
var TOOLTIP_SELECTOR = "." + TOOLTIP_CLASS;
var CONTENT_SELECTOR = "." + CONTENT_CLASS;
var ARROW_SELECTOR = "." + ARROW_CLASS;
var SVG_ARROW_SELECTOR = "." + SVG_ARROW_CLASS;

var currentInput = {
  isTouch: false
};
var lastMouseMoveTime = 0;
/**
 * When a `touchstart` event is fired, it's assumed the user is using touch
 * input. We'll bind a `mousemove` event listener to listen for mouse input in
 * the future. This way, the `isTouch` property is fully dynamic and will handle
 * hybrid devices that use a mix of touch + mouse input.
 */

function onDocumentTouchStart() {
  if (currentInput.isTouch) {
    return;
  }

  currentInput.isTouch = true;

  if (window.performance) {
    document.addEventListener('mousemove', onDocumentMouseMove);
  }
}
/**
 * When two `mousemove` event are fired consecutively within 20ms, it's assumed
 * the user is using mouse input again. `mousemove` can fire on touch devices as
 * well, but very rarely that quickly.
 */

function onDocumentMouseMove() {
  var now = performance.now();

  if (now - lastMouseMoveTime < 20) {
    currentInput.isTouch = false;
    document.removeEventListener('mousemove', onDocumentMouseMove);
  }

  lastMouseMoveTime = now;
}
/**
 * When an element is in focus and has a tippy, leaving the tab/window and
 * returning causes it to show again. For mouse users this is unexpected, but
 * for keyboard use it makes sense.
 * TODO: find a better technique to solve this problem
 */

function onWindowBlur() {
  var activeElement = document.activeElement;

  if (isReferenceElement(activeElement)) {
    var instance = activeElement._tippy;

    if (activeElement.blur && !instance.state.isVisible) {
      activeElement.blur();
    }
  }
}
/**
 * Adds the needed global event listeners
 */

function bindGlobalEventListeners() {
  document.addEventListener('touchstart', onDocumentTouchStart, _extends({}, PASSIVE, {
    capture: true
  }));
  window.addEventListener('blur', onWindowBlur);
}

var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
var ua = isBrowser ? navigator.userAgent : '';
var isIE = /MSIE |Trident\//.test(ua);
var isUCBrowser = /UCBrowser\//.test(ua);
var isIOS = isBrowser && /iPhone|iPad|iPod/.test(navigator.platform);
function updateIOSClass(isAdd) {
  var shouldAdd = isAdd && isIOS && currentInput.isTouch;
  document.body.classList[shouldAdd ? 'add' : 'remove'](IOS_CLASS);
}

/**
 * Returns the popper's placement, ignoring shifting (top-start, etc)
 */

function getBasePlacement(placement) {
  return placement.split('-')[0];
}
/**
 * Adds `data-inertia` attribute
 */

function addInertia(tooltip) {
  tooltip.setAttribute('data-inertia', '');
}
/**
 * Removes `data-inertia` attribute
 */

function removeInertia(tooltip) {
  tooltip.removeAttribute('data-inertia');
}
/**
 * Adds interactive-related attributes
 */

function addInteractive(tooltip) {
  tooltip.setAttribute('data-interactive', '');
}
/**
 * Removes interactive-related attributes
 */

function removeInteractive(tooltip) {
  tooltip.removeAttribute('data-interactive');
}
/**
 * Sets the content of a tooltip
 */

function setContent(contentEl, props) {
  if (isElement(props.content)) {
    setInnerHTML(contentEl, '');
    contentEl.appendChild(props.content);
  } else if (typeof props.content !== 'function') {
    var key = props.allowHTML ? 'innerHTML' : 'textContent';
    contentEl[key] = props.content;
  }
}
/**
 * Returns the child elements of a popper element
 */

function getChildren(popper) {
  return {
    tooltip: popper.querySelector(TOOLTIP_SELECTOR),
    content: popper.querySelector(CONTENT_SELECTOR),
    arrow: popper.querySelector(ARROW_SELECTOR) || popper.querySelector(SVG_ARROW_SELECTOR)
  };
}
/**
 * Creates an arrow element and returns it
 */

function createArrowElement(arrow) {
  var arrowElement = div();

  if (arrow === true) {
    arrowElement.className = ARROW_CLASS;
  } else {
    arrowElement.className = SVG_ARROW_CLASS;

    if (isElement(arrow)) {
      arrowElement.appendChild(arrow);
    } else {
      setInnerHTML(arrowElement, arrow);
    }
  }

  return arrowElement;
}
/**
 * Constructs the popper element and returns it
 */

function createPopperElement(id, props) {
  var popper = div();
  popper.className = POPPER_CLASS;
  popper.style.position = 'absolute';
  popper.style.top = '0';
  popper.style.left = '0';
  var tooltip = div();
  tooltip.className = TOOLTIP_CLASS;
  tooltip.id = "tippy-" + id;
  tooltip.setAttribute('data-state', 'hidden');
  tooltip.setAttribute('tabindex', '-1');
  updateTheme(tooltip, 'add', props.theme);
  var content = div();
  content.className = CONTENT_CLASS;
  content.setAttribute('data-state', 'hidden');

  if (props.interactive) {
    addInteractive(tooltip);
  }

  if (props.arrow) {
    tooltip.setAttribute('data-arrow', '');
    tooltip.appendChild(createArrowElement(props.arrow));
  }

  if (props.inertia) {
    addInertia(tooltip);
  }

  setContent(content, props);
  tooltip.appendChild(content);
  popper.appendChild(tooltip);
  updatePopperElement(popper, props, props);
  return popper;
}
/**
 * Updates the popper element based on the new props
 */

function updatePopperElement(popper, prevProps, nextProps) {
  var _getChildren = getChildren(popper),
      tooltip = _getChildren.tooltip,
      content = _getChildren.content,
      arrow = _getChildren.arrow;

  popper.style.zIndex = '' + nextProps.zIndex;
  tooltip.setAttribute('data-animation', nextProps.animation);
  tooltip.style.maxWidth = appendPxIfNumber(nextProps.maxWidth);

  if (nextProps.role) {
    tooltip.setAttribute('role', nextProps.role);
  } else {
    tooltip.removeAttribute('role');
  }

  if (prevProps.content !== nextProps.content) {
    setContent(content, nextProps);
  } // arrow


  if (!prevProps.arrow && nextProps.arrow) {
    // false to true
    tooltip.appendChild(createArrowElement(nextProps.arrow));
    tooltip.setAttribute('data-arrow', '');
  } else if (prevProps.arrow && !nextProps.arrow) {
    // true to false
    tooltip.removeChild(arrow);
    tooltip.removeAttribute('data-arrow');
  } else if (prevProps.arrow !== nextProps.arrow) {
    // true to 'round' or vice-versa
    tooltip.removeChild(arrow);
    tooltip.appendChild(createArrowElement(nextProps.arrow));
  } // interactive


  if (!prevProps.interactive && nextProps.interactive) {
    addInteractive(tooltip);
  } else if (prevProps.interactive && !nextProps.interactive) {
    removeInteractive(tooltip);
  } // inertia


  if (!prevProps.inertia && nextProps.inertia) {
    addInertia(tooltip);
  } else if (prevProps.inertia && !nextProps.inertia) {
    removeInertia(tooltip);
  } // theme


  if (prevProps.theme !== nextProps.theme) {
    updateTheme(tooltip, 'remove', prevProps.theme);
    updateTheme(tooltip, 'add', nextProps.theme);
  }
}
/**
 * Add/remove transitionend listener from tooltip
 */

function updateTransitionEndListener(tooltip, action, listener) {
  var eventName = isUCBrowser && document.body.style.webkitTransition !== undefined ? 'webkitTransitionEnd' : 'transitionend';
  tooltip[action + 'EventListener'](eventName, listener);
}
/**
 * Adds/removes theme from tooltip's classList
 */

function updateTheme(tooltip, action, theme) {
  splitBySpaces(theme).forEach(function (name) {
    tooltip.classList[action](name + "-theme");
  });
}
/**
 * Determines if the mouse cursor is outside of the popper's interactive border
 * region
 */

function isCursorOutsideInteractiveBorder(popperTreeData, event) {
  var clientX = event.clientX,
      clientY = event.clientY;
  return popperTreeData.every(function (_ref) {
    var popperRect = _ref.popperRect,
        tooltipRect = _ref.tooltipRect,
        interactiveBorder = _ref.interactiveBorder;
    // Get min/max bounds of both the popper and tooltip rects due to
    // `distance` offset
    var mergedRect = {
      top: Math.min(popperRect.top, tooltipRect.top),
      right: Math.max(popperRect.right, tooltipRect.right),
      bottom: Math.max(popperRect.bottom, tooltipRect.bottom),
      left: Math.min(popperRect.left, tooltipRect.left)
    };
    var exceedsTop = mergedRect.top - clientY > interactiveBorder;
    var exceedsBottom = clientY - mergedRect.bottom > interactiveBorder;
    var exceedsLeft = mergedRect.left - clientX > interactiveBorder;
    var exceedsRight = clientX - mergedRect.right > interactiveBorder;
    return exceedsTop || exceedsBottom || exceedsLeft || exceedsRight;
  });
}

var idCounter = 1;
var mouseMoveListeners = [];
/**
 * Used by `hideAll()`
 */

var mountedInstances = [];
/**
 * Creates and returns a Tippy object. We're using a closure pattern instead of
 * a class so that the exposed object API is clean without private members
 * prefixed with `_`.
 */

function createTippy(reference, collectionProps) {
  var props = getExtendedProps(evaluateProps(reference, collectionProps)); // If the reference shouldn't have multiple tippys, return null early

  if (!props.multiple && reference._tippy) {
    return null;
  }
  /* ======================= 🔒 Private members 🔒 ======================= */


  var showTimeout;
  var hideTimeout;
  var scheduleHideAnimationFrame;
  var isBeingDestroyed = false;
  var didHideDueToDocumentMouseDown = false;
  var popperUpdates = 0;
  var lastTriggerEvent;
  var currentMountCallback;
  var currentTransitionEndListener;
  var listeners = [];
  var debouncedOnMouseMove = debounce(onMouseMove, props.interactiveDebounce);
  var currentTarget; // Support iframe contexts
  // Static check that assumes any of the `triggerTarget` or `reference`
  // nodes will never change documents, even when they are updated

  var doc = getOwnerDocument(props.triggerTarget || reference);
  /* ======================= 🔑 Public members 🔑 ======================= */

  var id = idCounter++;
  var popper = createPopperElement(id, props);
  var popperChildren = getChildren(popper);
  var popperInstance = null;
  var plugins = unique(props.plugins); // These two elements are static

  var tooltip = popperChildren.tooltip,
      content = popperChildren.content;
  var transitionableElements = [tooltip, content];
  var state = {
    // The current real placement (`data-placement` attribute)
    currentPlacement: null,
    // Is the instance currently enabled?
    isEnabled: true,
    // Is the tippy currently showing and not transitioning out?
    isVisible: false,
    // Has the instance been destroyed?
    isDestroyed: false,
    // Is the tippy currently mounted to the DOM?
    isMounted: false,
    // Has the tippy finished transitioning in?
    isShown: false
  };
  var instance = {
    // properties
    id: id,
    reference: reference,
    popper: popper,
    popperChildren: popperChildren,
    popperInstance: popperInstance,
    props: props,
    state: state,
    plugins: plugins,
    // methods
    clearDelayTimeouts: clearDelayTimeouts,
    setProps: setProps,
    setContent: setContent,
    show: show,
    hide: hide,
    enable: enable,
    disable: disable,
    destroy: destroy
  };
  /* ==================== Initial instance mutations =================== */

  reference._tippy = instance;
  popper._tippy = instance;
  var pluginsHooks = plugins.map(function (plugin) {
    return plugin.fn(instance);
  });
  addListenersToTriggerTarget();
  handleAriaExpandedAttribute();

  if (!props.lazy) {
    createPopperInstance();
  }

  invokeHook('onCreate', [instance]);

  if (props.showOnCreate) {
    scheduleShow();
  } // Prevent a tippy with a delay from hiding if the cursor left then returned
  // before it started hiding


  popper.addEventListener('mouseenter', function () {
    if (instance.props.interactive && instance.state.isVisible) {
      instance.clearDelayTimeouts();
    }
  });
  popper.addEventListener('mouseleave', function () {
    if (instance.props.interactive && includes(instance.props.trigger, 'mouseenter')) {
      doc.addEventListener('mousemove', debouncedOnMouseMove);
    }
  });
  return instance;
  /* ======================= 🔒 Private methods 🔒 ======================= */

  function getNormalizedTouchSettings() {
    var touch = instance.props.touch;
    return Array.isArray(touch) ? touch : [touch, 0];
  }

  function getIsCustomTouchBehavior() {
    return getNormalizedTouchSettings()[0] === 'hold';
  }

  function getCurrentTarget() {
    return currentTarget || reference;
  }

  function getDelay(isShow) {
    // For touch or keyboard input, force `0` delay for UX reasons
    // Also if the instance is mounted but not visible (transitioning out),
    // ignore delay
    if (instance.state.isMounted && !instance.state.isVisible || currentInput.isTouch || (lastTriggerEvent ? lastTriggerEvent.type === 'focus' : true)) {
      return 0;
    }

    return getValueAtIndexOrReturn(instance.props.delay, isShow ? 0 : 1, defaultProps.delay);
  }

  function invokeHook(hook, args, shouldInvokePropsHook) {
    if (shouldInvokePropsHook === void 0) {
      shouldInvokePropsHook = true;
    }

    pluginsHooks.forEach(function (pluginHooks) {
      if (hasOwnProperty(pluginHooks, hook)) {
        // @ts-ignore
        pluginHooks[hook].apply(pluginHooks, args);
      }
    });

    if (shouldInvokePropsHook) {
      var _instance$props;

      // @ts-ignore
      (_instance$props = instance.props)[hook].apply(_instance$props, args);
    }
  }

  function handleAriaDescribedByAttribute() {
    var aria = instance.props.aria;

    if (!aria) {
      return;
    }

    var attr = "aria-" + aria;
    var id = tooltip.id;
    var nodes = normalizeToArray(instance.props.triggerTarget || reference);
    nodes.forEach(function (node) {
      var currentValue = node.getAttribute(attr);

      if (instance.state.isVisible) {
        node.setAttribute(attr, currentValue ? currentValue + " " + id : id);
      } else {
        var nextValue = currentValue && currentValue.replace(id, '').trim();

        if (nextValue) {
          node.setAttribute(attr, nextValue);
        } else {
          node.removeAttribute(attr);
        }
      }
    });
  }

  function handleAriaExpandedAttribute() {
    var nodes = normalizeToArray(instance.props.triggerTarget || reference);
    nodes.forEach(function (node) {
      if (instance.props.interactive) {
        node.setAttribute('aria-expanded', instance.state.isVisible && node === getCurrentTarget() ? 'true' : 'false');
      } else {
        node.removeAttribute('aria-expanded');
      }
    });
  }

  function cleanupInteractiveMouseListeners() {
    doc.body.removeEventListener('mouseleave', scheduleHide);
    doc.removeEventListener('mousemove', debouncedOnMouseMove);
    mouseMoveListeners = mouseMoveListeners.filter(function (listener) {
      return listener !== debouncedOnMouseMove;
    });
  }

  function onDocumentMouseDown(event) {
    // Clicked on interactive popper
    if (instance.props.interactive && popper.contains(event.target)) {
      return;
    } // Clicked on the event listeners target


    if (getCurrentTarget().contains(event.target)) {
      if (currentInput.isTouch) {
        return;
      }

      if (instance.state.isVisible && includes(instance.props.trigger, 'click')) {
        return;
      }
    }

    if (instance.props.hideOnClick === true) {
      instance.clearDelayTimeouts();
      instance.hide(); // `mousedown` event is fired right before `focus` if pressing the
      // currentTarget. This lets a tippy with `focus` trigger know that it
      // should not show

      didHideDueToDocumentMouseDown = true;
      setTimeout(function () {
        didHideDueToDocumentMouseDown = false;
      }); // The listener gets added in `scheduleShow()`, but this may be hiding it
      // before it shows, and hide()'s early bail-out behavior can prevent it
      // from being cleaned up

      if (!instance.state.isMounted) {
        removeDocumentMouseDownListener();
      }
    }
  }

  function addDocumentMouseDownListener() {
    doc.addEventListener('mousedown', onDocumentMouseDown, true);
  }

  function removeDocumentMouseDownListener() {
    doc.removeEventListener('mousedown', onDocumentMouseDown, true);
  }

  function onTransitionedOut(duration, callback) {
    onTransitionEnd(duration, function () {
      if (!instance.state.isVisible && popper.parentNode && popper.parentNode.contains(popper)) {
        callback();
      }
    });
  }

  function onTransitionedIn(duration, callback) {
    onTransitionEnd(duration, callback);
  }

  function onTransitionEnd(duration, callback) {
    function listener(event) {
      if (event.target === tooltip) {
        updateTransitionEndListener(tooltip, 'remove', listener);
        callback();
      }
    } // Make callback synchronous if duration is 0
    // `transitionend` won't fire otherwise


    if (duration === 0) {
      return callback();
    }

    updateTransitionEndListener(tooltip, 'remove', currentTransitionEndListener);
    updateTransitionEndListener(tooltip, 'add', listener);
    currentTransitionEndListener = listener;
  }

  function on(eventType, handler, options) {
    if (options === void 0) {
      options = false;
    }

    var nodes = normalizeToArray(instance.props.triggerTarget || reference);
    nodes.forEach(function (node) {
      node.addEventListener(eventType, handler, options);
      listeners.push({
        node: node,
        eventType: eventType,
        handler: handler,
        options: options
      });
    });
  }

  function addListenersToTriggerTarget() {
    if (getIsCustomTouchBehavior()) {
      on('touchstart', onTrigger, PASSIVE);
      on('touchend', onMouseLeave, PASSIVE);
    }

    splitBySpaces(instance.props.trigger).forEach(function (eventType) {
      if (eventType === 'manual') {
        return;
      }

      on(eventType, onTrigger);

      switch (eventType) {
        case 'mouseenter':
          on('mouseleave', onMouseLeave);
          break;

        case 'focus':
          on(isIE ? 'focusout' : 'blur', onBlur);
          break;
      }
    });
  }

  function removeListenersFromTriggerTarget() {
    listeners.forEach(function (_ref) {
      var node = _ref.node,
          eventType = _ref.eventType,
          handler = _ref.handler,
          options = _ref.options;
      node.removeEventListener(eventType, handler, options);
    });
    listeners = [];
  }

  function onTrigger(event) {
    if (!instance.state.isEnabled || isEventListenerStopped(event) || didHideDueToDocumentMouseDown) {
      return;
    }

    lastTriggerEvent = event;
    currentTarget = event.currentTarget;
    handleAriaExpandedAttribute();

    if (!instance.state.isVisible && isMouseEvent(event)) {
      // If scrolling, `mouseenter` events can be fired if the cursor lands
      // over a new target, but `mousemove` events don't get fired. This
      // causes interactive tooltips to get stuck open until the cursor is
      // moved
      mouseMoveListeners.forEach(function (listener) {
        return listener(event);
      });
    } // Toggle show/hide when clicking click-triggered tooltips


    if (event.type === 'click' && instance.props.hideOnClick !== false && instance.state.isVisible) {
      scheduleHide(event);
    } else {
      var _getNormalizedTouchSe = getNormalizedTouchSettings(),
          value = _getNormalizedTouchSe[0],
          duration = _getNormalizedTouchSe[1];

      if (currentInput.isTouch && value === 'hold' && duration) {
        // We can hijack the show timeout here, it will be cleared by
        // `scheduleHide()` when necessary
        showTimeout = setTimeout(function () {
          scheduleShow(event);
        }, duration);
      } else {
        scheduleShow(event);
      }
    }
  }

  function onMouseMove(event) {
    var isCursorOverReferenceOrPopper = closestCallback(event.target, function (el) {
      return el === reference || el === popper;
    });

    if (isCursorOverReferenceOrPopper) {
      return;
    }

    var popperTreeData = arrayFrom(popper.querySelectorAll(POPPER_SELECTOR)).concat(popper).map(function (popper) {
      var instance = popper._tippy;
      var tooltip = instance.popperChildren.tooltip;
      var interactiveBorder = instance.props.interactiveBorder;
      return {
        popperRect: popper.getBoundingClientRect(),
        tooltipRect: tooltip.getBoundingClientRect(),
        interactiveBorder: interactiveBorder
      };
    });

    if (isCursorOutsideInteractiveBorder(popperTreeData, event)) {
      cleanupInteractiveMouseListeners();
      scheduleHide(event);
    }
  }

  function onMouseLeave(event) {
    if (isEventListenerStopped(event)) {
      return;
    }

    if (instance.props.interactive) {
      doc.body.addEventListener('mouseleave', scheduleHide);
      doc.addEventListener('mousemove', debouncedOnMouseMove);
      pushIfUnique(mouseMoveListeners, debouncedOnMouseMove);
      return;
    }

    scheduleHide(event);
  }

  function onBlur(event) {
    if (event.target !== getCurrentTarget()) {
      return;
    } // If focus was moved to within the popper


    if (instance.props.interactive && event.relatedTarget && popper.contains(event.relatedTarget)) {
      return;
    }

    scheduleHide(event);
  }

  function isEventListenerStopped(event) {
    var supportsTouch = 'ontouchstart' in window;
    var isTouchEvent = includes(event.type, 'touch');
    var isCustomTouch = getIsCustomTouchBehavior();
    return supportsTouch && currentInput.isTouch && isCustomTouch && !isTouchEvent || currentInput.isTouch && !isCustomTouch && isTouchEvent;
  }

  function createPopperInstance() {
    var popperOptions = instance.props.popperOptions;
    var arrow = instance.popperChildren.arrow;
    var flipModifier = getModifier(popperOptions, 'flip');
    var preventOverflowModifier = getModifier(popperOptions, 'preventOverflow');
    var distancePx;

    function applyMutations(data) {
      var prevPlacement = instance.state.currentPlacement;
      instance.state.currentPlacement = data.placement;

      if (instance.props.flip && !instance.props.flipOnUpdate) {
        if (data.flipped) {
          instance.popperInstance.options.placement = data.placement;
        }

        setModifierValue(instance.popperInstance.modifiers, 'flip', 'enabled', false);
      }

      tooltip.setAttribute('data-placement', data.placement);

      if (data.attributes['x-out-of-boundaries'] !== false) {
        tooltip.setAttribute('data-out-of-boundaries', '');
      } else {
        tooltip.removeAttribute('data-out-of-boundaries');
      }

      var basePlacement = getBasePlacement(data.placement);
      var isVerticalPlacement = includes(['top', 'bottom'], basePlacement);
      var isSecondaryPlacement = includes(['bottom', 'right'], basePlacement); // Apply `distance` prop

      tooltip.style.top = '0';
      tooltip.style.left = '0';
      tooltip.style[isVerticalPlacement ? 'top' : 'left'] = (isSecondaryPlacement ? 1 : -1) * distancePx + 'px'; // Careful not to cause an infinite loop here
      // Fixes https://github.com/FezVrasta/popper.js/issues/784

      if (prevPlacement && prevPlacement !== data.placement) {
        instance.popperInstance.update();
      }
    }

    var config = _extends({
      eventsEnabled: false,
      placement: instance.props.placement
    }, popperOptions, {
      modifiers: _extends({}, popperOptions && popperOptions.modifiers, {
        // We can't use `padding` on the popper el because of these bugs when
        // flipping from a vertical to horizontal placement or vice-versa,
        // there is severe flickering.
        // https://github.com/FezVrasta/popper.js/issues/720
        // This workaround increases bundle size by 250B minzip unfortunately,
        // due to need to custom compute the distance (since Popper rect does
        // not get affected by the inner tooltip's distance offset)
        tippyDistance: {
          enabled: true,
          order: 0,
          fn: function fn(data) {
            // `html` fontSize may change while `popperInstance` is alive
            // e.g. on resize in media queries
            distancePx = getUnitsInPx(doc, instance.props.distance);
            var basePlacement = getBasePlacement(data.placement);
            var computedPreventOverflowPadding = getComputedPadding(basePlacement, preventOverflowModifier && preventOverflowModifier.padding, distancePx);
            var computedFlipPadding = getComputedPadding(basePlacement, flipModifier && flipModifier.padding, distancePx);
            var instanceModifiers = instance.popperInstance.modifiers;
            setModifierValue(instanceModifiers, 'preventOverflow', 'padding', computedPreventOverflowPadding);
            setModifierValue(instanceModifiers, 'flip', 'padding', computedFlipPadding);
            return data;
          }
        },
        preventOverflow: _extends({
          boundariesElement: instance.props.boundary
        }, preventOverflowModifier),
        flip: _extends({
          enabled: instance.props.flip,
          behavior: instance.props.flipBehavior
        }, flipModifier),
        arrow: _extends({
          element: arrow,
          enabled: !!arrow
        }, getModifier(popperOptions, 'arrow')),
        offset: _extends({
          offset: instance.props.offset
        }, getModifier(popperOptions, 'offset'))
      }),
      onCreate: function onCreate(data) {
        applyMutations(data);
        preserveInvocation(popperOptions && popperOptions.onCreate, config.onCreate, [data]);
        runMountCallback();
      },
      onUpdate: function onUpdate(data) {
        applyMutations(data);
        preserveInvocation(popperOptions && popperOptions.onUpdate, config.onUpdate, [data]);
        runMountCallback();
      }
    });

    instance.popperInstance = new popper_js__WEBPACK_IMPORTED_MODULE_0__["default"](reference, popper, config);
  }

  function runMountCallback() {
    // Only invoke currentMountCallback after 2 updates
    // This fixes some bugs in Popper.js (TODO: aim for only 1 update)
    if (popperUpdates === 0) {
      popperUpdates++; // 1

      instance.popperInstance.update();
    } else if (currentMountCallback && popperUpdates === 1) {
      popperUpdates++; // 2

      reflow(popper);
      currentMountCallback();
    }
  }

  function mount() {
    // The mounting callback (`currentMountCallback`) is only run due to a
    // popperInstance update/create
    popperUpdates = 0;
    var appendTo = instance.props.appendTo;
    var parentNode; // By default, we'll append the popper to the triggerTargets's parentNode so
    // it's directly after the reference element so the elements inside the
    // tippy can be tabbed to
    // If there are clipping issues, the user can specify a different appendTo
    // and ensure focus management is handled correctly manually

    var node = getCurrentTarget();

    if (instance.props.interactive && appendTo === defaultProps.appendTo || appendTo === 'parent') {
      parentNode = node.parentNode;
    } else {
      parentNode = invokeWithArgsOrReturn(appendTo, [node]);
    } // The popper element needs to exist on the DOM before its position can be
    // updated as Popper.js needs to read its dimensions


    if (!parentNode.contains(popper)) {
      parentNode.appendChild(popper);
    }

    if (undefined !== "production") {
      // Accessibility check
      warnWhen(instance.props.interactive && appendTo === defaultProps.appendTo && node.nextElementSibling !== popper, "Interactive tippy element may not be accessible via keyboard\n        navigation because it is not directly after the reference element in\n        the DOM source order.\n\n        Using a wrapper <div> or <span> tag around the reference element solves\n        this by creating a new parentNode context.\n        \n        Specifying `appendTo: document.body` silences this warning, but it\n        assumes you are using a focus management solution to handle keyboard\n        navigation.\n        \n        See: https://atomiks.github.io/tippyjs/accessibility/#interactivity");
    }

    setModifierValue(instance.popperInstance.modifiers, 'flip', 'enabled', instance.props.flip);
    instance.popperInstance.enableEventListeners(); // Mounting callback invoked in `onUpdate`

    instance.popperInstance.update();
  }

  function scheduleShow(event) {
    instance.clearDelayTimeouts();

    if (!instance.popperInstance) {
      createPopperInstance();
    }

    if (event) {
      invokeHook('onTrigger', [instance, event]);
    }

    addDocumentMouseDownListener();
    var delay = getDelay(true);

    if (delay) {
      showTimeout = setTimeout(function () {
        instance.show();
      }, delay);
    } else {
      instance.show();
    }
  }

  function scheduleHide(event) {
    instance.clearDelayTimeouts();
    invokeHook('onUntrigger', [instance, event]);

    if (!instance.state.isVisible) {
      removeDocumentMouseDownListener();
      return;
    }

    var delay = getDelay(false);

    if (delay) {
      hideTimeout = setTimeout(function () {
        if (instance.state.isVisible) {
          instance.hide();
        }
      }, delay);
    } else {
      // Fixes a `transitionend` problem when it fires 1 frame too
      // late sometimes, we don't want hide() to be called.
      scheduleHideAnimationFrame = requestAnimationFrame(function () {
        instance.hide();
      });
    }
  }
  /* ======================= 🔑 Public methods 🔑 ======================= */


  function enable() {
    instance.state.isEnabled = true;
  }

  function disable() {
    // Disabling the instance should also hide it
    // https://github.com/atomiks/tippy.js-react/issues/106
    instance.hide();
    instance.state.isEnabled = false;
  }

  function clearDelayTimeouts() {
    clearTimeout(showTimeout);
    clearTimeout(hideTimeout);
    cancelAnimationFrame(scheduleHideAnimationFrame);
  }

  function setProps(partialProps) {
    if (undefined !== "production") {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('setProps'));
    }

    if (instance.state.isDestroyed) {
      return;
    }

    if (undefined !== "production") {
      validateProps(partialProps, plugins);
      warnWhen(partialProps.plugins ? partialProps.plugins.length !== plugins.length || plugins.some(function (p, i) {
        if (partialProps.plugins && partialProps.plugins[i]) {
          return p !== partialProps.plugins[i];
        } else {
          return true;
        }
      }) : false, "Cannot update plugins");
    }

    invokeHook('onBeforeUpdate', [instance, partialProps]);
    removeListenersFromTriggerTarget();
    var prevProps = instance.props;
    var nextProps = evaluateProps(reference, _extends({}, instance.props, {}, partialProps, {
      ignoreAttributes: true
    }));
    nextProps.ignoreAttributes = useIfDefined(partialProps.ignoreAttributes, prevProps.ignoreAttributes);
    instance.props = nextProps;
    addListenersToTriggerTarget();

    if (prevProps.interactiveDebounce !== nextProps.interactiveDebounce) {
      cleanupInteractiveMouseListeners();
      debouncedOnMouseMove = debounce(onMouseMove, nextProps.interactiveDebounce);
    }

    updatePopperElement(popper, prevProps, nextProps);
    instance.popperChildren = getChildren(popper); // Ensure stale aria-expanded attributes are removed

    if (prevProps.triggerTarget && !nextProps.triggerTarget) {
      normalizeToArray(prevProps.triggerTarget).forEach(function (node) {
        node.removeAttribute('aria-expanded');
      });
    } else if (nextProps.triggerTarget) {
      reference.removeAttribute('aria-expanded');
    }

    handleAriaExpandedAttribute();

    if (instance.popperInstance) {
      if (POPPER_INSTANCE_DEPENDENCIES.some(function (prop) {
        return hasOwnProperty(partialProps, prop) && partialProps[prop] !== prevProps[prop];
      })) {
        instance.popperInstance.destroy();
        createPopperInstance();

        if (instance.state.isVisible) {
          instance.popperInstance.enableEventListeners();
        }
      } else {
        instance.popperInstance.update();
      }
    }

    invokeHook('onAfterUpdate', [instance, partialProps]);
  }

  function setContent(content) {
    instance.setProps({
      content: content
    });
  }

  function show(duration) {
    if (duration === void 0) {
      duration = getValueAtIndexOrReturn(instance.props.duration, 0, defaultProps.duration);
    }

    if (undefined !== "production") {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('show'));
    } // Early bail-out


    var isAlreadyVisible = instance.state.isVisible;
    var isDestroyed = instance.state.isDestroyed;
    var isDisabled = !instance.state.isEnabled;
    var isTouchAndTouchDisabled = currentInput.isTouch && !instance.props.touch;

    if (isAlreadyVisible || isDestroyed || isDisabled || isTouchAndTouchDisabled) {
      return;
    } // Normalize `disabled` behavior across browsers.
    // Firefox allows events on disabled elements, but Chrome doesn't.
    // Using a wrapper element (i.e. <span>) is recommended.


    if (getCurrentTarget().hasAttribute('disabled')) {
      return;
    }

    if (!instance.popperInstance) {
      createPopperInstance();
    }

    invokeHook('onShow', [instance], false);

    if (instance.props.onShow(instance) === false) {
      return;
    }

    addDocumentMouseDownListener();
    popper.style.visibility = 'visible';
    instance.state.isVisible = true; // Prevent a transition of the popper from its previous position and of the
    // elements at a different placement
    // Check if the tippy was fully unmounted before `show()` was called, to
    // allow for smooth transition for `createSingleton()`

    if (!instance.state.isMounted) {
      setTransitionDuration(transitionableElements.concat(popper), 0);
    }

    currentMountCallback = function currentMountCallback() {
      if (!instance.state.isVisible) {
        return;
      }

      setTransitionDuration([popper], instance.props.updateDuration);
      setTransitionDuration(transitionableElements, duration);
      setVisibilityState(transitionableElements, 'visible');
      handleAriaDescribedByAttribute();
      handleAriaExpandedAttribute();
      pushIfUnique(mountedInstances, instance);
      updateIOSClass(true);
      instance.state.isMounted = true;
      invokeHook('onMount', [instance]);
      onTransitionedIn(duration, function () {
        instance.state.isShown = true;
        invokeHook('onShown', [instance]);
      });
    };

    mount();
  }

  function hide(duration) {
    if (duration === void 0) {
      duration = getValueAtIndexOrReturn(instance.props.duration, 1, defaultProps.duration);
    }

    if (undefined !== "production") {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('hide'));
    } // Early bail-out


    var isAlreadyHidden = !instance.state.isVisible && !isBeingDestroyed;
    var isDestroyed = instance.state.isDestroyed;
    var isDisabled = !instance.state.isEnabled && !isBeingDestroyed;

    if (isAlreadyHidden || isDestroyed || isDisabled) {
      return;
    }

    invokeHook('onHide', [instance], false);

    if (instance.props.onHide(instance) === false && !isBeingDestroyed) {
      return;
    }

    removeDocumentMouseDownListener();
    popper.style.visibility = 'hidden';
    instance.state.isVisible = false;
    instance.state.isShown = false;
    setTransitionDuration(transitionableElements, duration);
    setVisibilityState(transitionableElements, 'hidden');
    handleAriaDescribedByAttribute();
    handleAriaExpandedAttribute();
    onTransitionedOut(duration, function () {
      instance.popperInstance.disableEventListeners();
      instance.popperInstance.options.placement = instance.props.placement;
      popper.parentNode.removeChild(popper);
      mountedInstances = mountedInstances.filter(function (i) {
        return i !== instance;
      });

      if (mountedInstances.length === 0) {
        updateIOSClass(false);
      }

      instance.state.isMounted = false;
      invokeHook('onHidden', [instance]);
    });
  }

  function destroy() {
    if (undefined !== "production") {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('destroy'));
    }

    if (instance.state.isDestroyed) {
      return;
    }

    isBeingDestroyed = true;
    instance.clearDelayTimeouts();
    instance.hide(0);
    removeListenersFromTriggerTarget();
    delete reference._tippy;

    if (instance.popperInstance) {
      instance.popperInstance.destroy();
    }

    isBeingDestroyed = false;
    instance.state.isDestroyed = true;
    invokeHook('onDestroy', [instance]);
  }
}

function tippy(targets, optionalProps,
/** @deprecated use Props.plugins */
plugins) {
  if (optionalProps === void 0) {
    optionalProps = {};
  }

  if (plugins === void 0) {
    plugins = [];
  }

  plugins = defaultProps.plugins.concat(optionalProps.plugins || plugins);

  if (undefined !== "production") {
    validateTargets(targets);
    validateProps(optionalProps, plugins);
  }

  bindGlobalEventListeners();

  var props = _extends({}, defaultProps, {}, optionalProps, {
    plugins: plugins
  });

  var elements = getArrayOfElements(targets);

  if (undefined !== "production") {
    var isSingleContentElement = isElement(props.content);
    var isMoreThanOneReferenceElement = elements.length > 1;
    warnWhen(isSingleContentElement && isMoreThanOneReferenceElement, "tippy() was passed an Element as the `content` prop, but more than one\n      tippy instance was created by this invocation. This means the content\n      element will only be appended to the last tippy instance.\n      \n      Instead, pass the .innerHTML of the element, or use a function that\n      returns a cloned version of the element instead.\n      \n      1) content: () => element.cloneNode(true)\n      2) content: element.innerHTML");
  }

  var instances = elements.reduce(function (acc, reference) {
    var instance = reference && createTippy(reference, props);

    if (instance) {
      acc.push(instance);
    }

    return acc;
  }, []);
  return isElement(targets) ? instances[0] : instances;
}

tippy.version = version;
tippy.defaultProps = defaultProps;
tippy.setDefaultProps = setDefaultProps;
tippy.currentInput = currentInput;
/**
 * Hides all visible poppers on the document
 */

var hideAll = function hideAll(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      excludedReferenceOrInstance = _ref.exclude,
      duration = _ref.duration;

  mountedInstances.forEach(function (instance) {
    var isExcluded = false;

    if (excludedReferenceOrInstance) {
      isExcluded = isReferenceElement(excludedReferenceOrInstance) ? instance.reference === excludedReferenceOrInstance : instance.popper === excludedReferenceOrInstance.popper;
    }

    if (!isExcluded) {
      instance.hide(duration);
    }
  });
};
/**
 * Returns a proxy wrapper function that passes the plugins
 * @deprecated use tippy.setDefaultProps({plugins: [...]});
 */

function createTippyWithPlugins(outerPlugins) {
  if (undefined !== "production") {
    warnWhen(true, "createTippyWithPlugins([...]) has been deprecated.\n\n      Use tippy.setDefaultProps({plugins: [...]}) instead.");
  }

  var tippyPluginsWrapper = function tippyPluginsWrapper(targets, optionalProps, innerPlugins) {
    if (optionalProps === void 0) {
      optionalProps = {};
    }

    if (innerPlugins === void 0) {
      innerPlugins = [];
    }

    innerPlugins = optionalProps.plugins || innerPlugins;
    return tippy(targets, _extends({}, optionalProps, {
      plugins: [].concat(outerPlugins, innerPlugins)
    }));
  };

  tippyPluginsWrapper.version = version;
  tippyPluginsWrapper.defaultProps = defaultProps;
  tippyPluginsWrapper.setDefaultProps = setDefaultProps;
  tippyPluginsWrapper.currentInput = currentInput; // @ts-ignore

  return tippyPluginsWrapper;
}




/***/ }),

/***/ "./node_modules/tippy.js/dist/tippy.esm.js":
/*!*************************************************!*\
  !*** ./node_modules/tippy.js/dist/tippy.esm.js ***!
  \*************************************************/
/*! exports provided: createTippyWithPlugins, default, hideAll, roundArrow, animateFill, createSingleton, delegate, followCursor, inlinePositioning, sticky */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animateFill", function() { return animateFill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSingleton", function() { return createSingleton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delegate", function() { return delegate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "followCursor", function() { return followCursor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inlinePositioning", function() { return inlinePositioning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sticky", function() { return sticky; });
/* harmony import */ var _tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tippy.chunk.esm.js */ "./node_modules/tippy.js/dist/tippy.chunk.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTippyWithPlugins", function() { return _tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__["m"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideAll", function() { return _tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__["l"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "roundArrow", function() { return _tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__["R"]; });

/* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");
/**!
* tippy.js v5.1.1
* (c) 2017-2019 atomiks
* MIT License
*/




/**
 * Re-uses a single tippy element for many different tippy instances.
 * Replaces v4's `tippy.group()`.
 */

var createSingleton = function createSingleton(tippyInstances, optionalProps,
/** @deprecated use Props.plugins */
plugins) {
  if (optionalProps === void 0) {
    optionalProps = {};
  }

  if (plugins === void 0) {
    plugins = [];
  }

  if (undefined !== "production") {
    Object(_tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__["t"])(!Array.isArray(tippyInstances), "The first argument passed to createSingleton() must be an array of tippy\n      instances.\n  \n      The passed value was: " + tippyInstances);
  }

  plugins = optionalProps.plugins || plugins;
  tippyInstances.forEach(function (instance) {
    instance.disable();
  });

  var userAria = Object(_tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__["_"])({}, _tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__["d"], {}, optionalProps).aria;

  var currentAria;
  var currentTarget;
  var shouldSkipUpdate = false;
  var references = tippyInstances.map(function (instance) {
    return instance.reference;
  });
  var singleton = {
    fn: function fn(instance) {
      function handleAriaDescribedByAttribute(isShow) {
        if (!currentAria) {
          return;
        }

        var attr = "aria-" + currentAria;

        if (isShow && !instance.props.interactive) {
          currentTarget.setAttribute(attr, instance.popperChildren.tooltip.id);
        } else {
          currentTarget.removeAttribute(attr);
        }
      }

      return {
        onAfterUpdate: function onAfterUpdate(_, _ref) {
          var aria = _ref.aria;

          // Ensure `aria` for the singleton instance stays `null`, while
          // changing the `userAria` value
          if (aria !== undefined && aria !== userAria) {
            if (!shouldSkipUpdate) {
              userAria = aria;
            } else {
              shouldSkipUpdate = true;
              instance.setProps({
                aria: null
              });
              shouldSkipUpdate = false;
            }
          }
        },
        onDestroy: function onDestroy() {
          tippyInstances.forEach(function (instance) {
            instance.enable();
          });
        },
        onMount: function onMount() {
          handleAriaDescribedByAttribute(true);
        },
        onUntrigger: function onUntrigger() {
          handleAriaDescribedByAttribute(false);
        },
        onTrigger: function onTrigger(_, event) {
          var target = event.currentTarget;
          var index = references.indexOf(target);
          currentTarget = target;
          currentAria = userAria;

          if (instance.state.isVisible) {
            handleAriaDescribedByAttribute(true);
          }

          instance.popperInstance.reference = {
            referenceNode: target,
            // These `client` values don't get used by Popper.js if they are 0
            clientHeight: 0,
            clientWidth: 0,
            getBoundingClientRect: function getBoundingClientRect() {
              return target.getBoundingClientRect();
            }
          };
          instance.setContent(tippyInstances[index].props.content);
        }
      };
    }
  };
  return Object(_tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__["a"])(Object(_tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__["b"])(), Object(_tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__["_"])({}, optionalProps, {
    plugins: [singleton].concat(plugins),
    aria: null,
    triggerTarget: references
  }));
};

var BUBBLING_EVENTS_MAP = {
  mouseover: 'mouseenter',
  focusin: 'focus',
  click: 'click'
};
/**
 * Creates a delegate instance that controls the creation of tippy instances
 * for child elements (`target` CSS selector).
 */

function delegate(targets, props,
/** @deprecated use Props.plugins */
plugins) {
  if (plugins === void 0) {
    plugins = [];
  }

  if (undefined !== "production") {
    Object(_tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__["t"])(!props || !props.target, "You must specify a `target` prop indicating the CSS selector string\n      matching the target elements that should receive a tippy.");
  }

  plugins = props.plugins || plugins;
  var listeners = [];
  var childTippyInstances = [];
  var target = props.target;
  var nativeProps = Object(_tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__["r"])(props, ['target']);

  var parentProps = Object(_tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__["_"])({}, nativeProps, {
    plugins: plugins,
    trigger: 'manual'
  });

  var childProps = Object(_tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__["_"])({}, nativeProps, {
    plugins: plugins,
    showOnCreate: true
  });

  var returnValue = Object(_tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__["a"])(targets, parentProps);
  var normalizedReturnValue = Object(_tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__["n"])(returnValue);

  function onTrigger(event) {
    if (!event.target) {
      return;
    }

    var targetNode = event.target.closest(target);

    if (!targetNode) {
      return;
    } // Get relevant trigger with fallbacks:
    // 1. Check `data-tippy-trigger` attribute on target node
    // 2. Fallback to `trigger` passed to `delegate()`
    // 3. Fallback to `defaultProps.trigger`


    var trigger = targetNode.getAttribute('data-tippy-trigger') || props.trigger || _tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__["d"].trigger; // Only create the instance if the bubbling event matches the trigger type

    if (!Object(_tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__["i"])(trigger, BUBBLING_EVENTS_MAP[event.type])) {
      return;
    }

    var instance = Object(_tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__["a"])(targetNode, childProps);

    if (instance) {
      childTippyInstances = childTippyInstances.concat(instance);
    }
  }

  function on(node, eventType, handler, options) {
    if (options === void 0) {
      options = false;
    }

    node.addEventListener(eventType, handler, options);
    listeners.push({
      node: node,
      eventType: eventType,
      handler: handler,
      options: options
    });
  }

  function addEventListeners(instance) {
    var reference = instance.reference;
    on(reference, 'mouseover', onTrigger);
    on(reference, 'focusin', onTrigger);
    on(reference, 'click', onTrigger);
  }

  function removeEventListeners() {
    listeners.forEach(function (_ref) {
      var node = _ref.node,
          eventType = _ref.eventType,
          handler = _ref.handler,
          options = _ref.options;
      node.removeEventListener(eventType, handler, options);
    });
    listeners = [];
  }

  function applyMutations(instance) {
    var originalDestroy = instance.destroy;

    instance.destroy = function (shouldDestroyChildInstances) {
      if (shouldDestroyChildInstances === void 0) {
        shouldDestroyChildInstances = true;
      }

      if (shouldDestroyChildInstances) {
        childTippyInstances.forEach(function (instance) {
          instance.destroy();
        });
      }

      childTippyInstances = [];
      removeEventListeners();
      originalDestroy();
    };

    addEventListeners(instance);
  }

  normalizedReturnValue.forEach(applyMutations);
  return returnValue;
}

var animateFill = {
  name: 'animateFill',
  defaultValue: false,
  fn: function fn(instance) {
    var _instance$popperChild = instance.popperChildren,
        tooltip = _instance$popperChild.tooltip,
        content = _instance$popperChild.content;
    var backdrop = instance.props.animateFill && !_tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__["c"] ? createBackdropElement() : null;

    function addBackdropToPopperChildren() {
      instance.popperChildren.backdrop = backdrop;
    }

    return {
      onCreate: function onCreate() {
        if (backdrop) {
          addBackdropToPopperChildren();
          tooltip.insertBefore(backdrop, tooltip.firstElementChild);
          tooltip.setAttribute('data-animatefill', '');
          tooltip.style.overflow = 'hidden';
          instance.setProps({
            animation: 'shift-away',
            arrow: false
          });
        }
      },
      onMount: function onMount() {
        if (backdrop) {
          var transitionDuration = tooltip.style.transitionDuration;
          var duration = Number(transitionDuration.replace('ms', '')); // The content should fade in after the backdrop has mostly filled the
          // tooltip element. `clip-path` is the other alternative but is not
          // well-supported and is buggy on some devices.

          content.style.transitionDelay = Math.round(duration / 10) + "ms";
          backdrop.style.transitionDuration = transitionDuration;
          Object(_tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__["s"])([backdrop], 'visible'); // Warn if the stylesheets are not loaded

          if (undefined !== "production") {
            Object(_tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__["w"])(getComputedStyle(backdrop).position !== 'absolute', "The `tippy.js/dist/backdrop.css` stylesheet has not been\n              imported!\n              \n              The `animateFill` plugin requires this stylesheet to work.");
            Object(_tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__["w"])(getComputedStyle(tooltip).transform === 'none', "The `tippy.js/animations/shift-away.css` stylesheet has not\n              been imported!\n              \n              The `animateFill` plugin requires this stylesheet to work.");
          }
        }
      },
      onShow: function onShow() {
        if (backdrop) {
          backdrop.style.transitionDuration = '0ms';
        }
      },
      onHide: function onHide() {
        if (backdrop) {
          Object(_tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__["s"])([backdrop], 'hidden');
        }
      },
      onAfterUpdate: function onAfterUpdate() {
        // With this type of prop, it's highly unlikely it will be changed
        // dynamically. We'll leave out the diff/update logic it to save bytes.
        // `popperChildren` is assigned a new object onAfterUpdate
        addBackdropToPopperChildren();
      }
    };
  }
};

function createBackdropElement() {
  var backdrop = Object(_tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__["b"])();
  backdrop.className = _tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__["B"];
  Object(_tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__["s"])([backdrop], 'hidden');
  return backdrop;
}

var followCursor = {
  name: 'followCursor',
  defaultValue: false,
  fn: function fn(instance) {
    var reference = instance.reference,
        popper = instance.popper; // Support iframe contexts
    // Static check that assumes any of the `triggerTarget` or `reference`
    // nodes will never change documents, even when they are updated

    var doc = Object(_tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__["g"])(instance.props.triggerTarget || reference); // Internal state

    var lastMouseMoveEvent;
    var mouseCoords = null;
    var isInternallySettingControlledProp = false; // These are controlled by this plugin, so we need to store the user's
    // original prop value

    var userProps = instance.props;

    function setUserProps(props) {
      var keys = Object.keys(props);
      keys.forEach(function (prop) {
        userProps[prop] = Object(_tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__["u"])(props[prop], userProps[prop]);
      });
    }

    function getIsManual() {
      return instance.props.trigger.trim() === 'manual';
    }

    function getIsEnabled() {
      // #597
      var isValidMouseEvent = getIsManual() ? true : // Check if a keyboard "click"
      mouseCoords !== null && !(mouseCoords.clientX === 0 && mouseCoords.clientY === 0);
      return instance.props.followCursor && isValidMouseEvent;
    }

    function getIsInitialBehavior() {
      return _tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__["f"].isTouch || instance.props.followCursor === 'initial' && instance.state.isVisible;
    }

    function resetReference() {
      if (instance.popperInstance) {
        instance.popperInstance.reference = reference;
      }
    }

    function handlePlacement() {
      // Due to `getVirtualOffsets()`, we need to reverse the placement if it's
      // shifted (start -> end, and vice-versa)
      // Early bail-out
      if (!getIsEnabled() && instance.props.placement === userProps.placement) {
        return;
      }

      var placement = userProps.placement;
      var shift = placement.split('-')[1];
      isInternallySettingControlledProp = true;
      instance.setProps({
        placement: getIsEnabled() && shift ? placement.replace(shift, shift === 'start' ? 'end' : 'start') : placement
      });
      isInternallySettingControlledProp = false;
    }

    function handlePopperListeners() {
      if (!instance.popperInstance) {
        return;
      } // Popper's scroll listeners make sense for `true` only. TODO: work out
      // how to only listen horizontal scroll for "horizontal" and vertical
      // scroll for "vertical"


      if (getIsEnabled() && (getIsInitialBehavior() || instance.props.followCursor !== true)) {
        instance.popperInstance.disableEventListeners();
      }
    }

    function handleMouseMoveListener() {
      if (getIsEnabled()) {
        addListener();
      } else {
        resetReference();
      }
    }

    function triggerLastMouseMove() {
      if (getIsEnabled()) {
        onMouseMove(lastMouseMoveEvent);
      }
    }

    function addListener() {
      doc.addEventListener('mousemove', onMouseMove);
    }

    function removeListener() {
      doc.removeEventListener('mousemove', onMouseMove);
    }

    function onMouseMove(event) {
      var _lastMouseMoveEvent = lastMouseMoveEvent = event,
          clientX = _lastMouseMoveEvent.clientX,
          clientY = _lastMouseMoveEvent.clientY;

      if (!instance.popperInstance || !instance.state.currentPlacement) {
        return;
      } // If the instance is interactive, avoid updating the position unless it's
      // over the reference element


      var isCursorOverReference = Object(_tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__["h"])(event.target, function (el) {
        return el === reference;
      });
      var rect = reference.getBoundingClientRect();
      var followCursor = instance.props.followCursor;
      var isHorizontal = followCursor === 'horizontal';
      var isVertical = followCursor === 'vertical';
      var isVerticalPlacement = Object(_tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__["i"])(['top', 'bottom'], Object(_tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__["j"])(instance.state.currentPlacement)); // The virtual reference needs some size to prevent itself from overflowing

      var _getVirtualOffsets = getVirtualOffsets(popper, isVerticalPlacement),
          size = _getVirtualOffsets.size,
          x = _getVirtualOffsets.x,
          y = _getVirtualOffsets.y;

      if (isCursorOverReference || !instance.props.interactive) {
        instance.popperInstance.reference = {
          referenceNode: reference,
          // These `client` values don't get used by Popper.js if they are 0
          clientWidth: 0,
          clientHeight: 0,
          getBoundingClientRect: function getBoundingClientRect() {
            return {
              width: isVerticalPlacement ? size : 0,
              height: isVerticalPlacement ? 0 : size,
              top: (isHorizontal ? rect.top : clientY) - y,
              bottom: (isHorizontal ? rect.bottom : clientY) + y,
              left: (isVertical ? rect.left : clientX) - x,
              right: (isVertical ? rect.right : clientX) + x
            };
          }
        };
        instance.popperInstance.update();
      }

      if (getIsInitialBehavior()) {
        removeListener();
      }
    }

    return {
      onAfterUpdate: function onAfterUpdate(_, partialProps) {
        if (!isInternallySettingControlledProp) {
          setUserProps(partialProps);

          if (partialProps.placement) {
            handlePlacement();
          }
        } // A new placement causes the popperInstance to be recreated


        if (partialProps.placement) {
          handlePopperListeners();
        } // Wait for `.update()` to set `instance.state.currentPlacement` to
        // the new placement


        requestAnimationFrame(triggerLastMouseMove);
      },
      onMount: function onMount() {
        triggerLastMouseMove();
        handlePopperListeners();
      },
      onShow: function onShow() {
        if (getIsManual()) {
          // Since there's no trigger event to use, we have to use these as
          // baseline coords
          mouseCoords = {
            clientX: 0,
            clientY: 0
          }; // Ensure `lastMouseMoveEvent` doesn't access any other properties
          // of a MouseEvent here

          lastMouseMoveEvent = mouseCoords;
          handlePlacement();
          handleMouseMoveListener();
        }
      },
      onTrigger: function onTrigger(_, event) {
        // Tapping on touch devices can trigger `mouseenter` then `focus`
        if (mouseCoords) {
          return;
        }

        if (Object(_tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__["e"])(event)) {
          mouseCoords = {
            clientX: event.clientX,
            clientY: event.clientY
          };
          lastMouseMoveEvent = event;
        }

        handlePlacement();
        handleMouseMoveListener();
      },
      onUntrigger: function onUntrigger() {
        // If untriggered before showing (`onHidden` will never be invoked)
        if (!instance.state.isVisible) {
          removeListener();
          mouseCoords = null;
        }
      },
      onHidden: function onHidden() {
        removeListener();
        resetReference();
        mouseCoords = null;
      }
    };
  }
};
function getVirtualOffsets(popper, isVerticalPlacement) {
  var size = isVerticalPlacement ? popper.offsetWidth : popper.offsetHeight;
  return {
    size: size,
    x: isVerticalPlacement ? size : 0,
    y: isVerticalPlacement ? 0 : size
  };
}

// position. This will require the `followCursor` plugin's fixes for overflow
// due to using event.clientX/Y values. (normalizedPlacement, getVirtualOffsets)

var inlinePositioning = {
  name: 'inlinePositioning',
  defaultValue: false,
  fn: function fn(instance) {
    var reference = instance.reference;

    function getIsEnabled() {
      return instance.props.inlinePositioning;
    }

    return {
      onHidden: function onHidden() {
        if (getIsEnabled()) {
          instance.popperInstance.reference = reference;
        }
      },
      onShow: function onShow() {
        if (!getIsEnabled()) {
          return;
        }

        instance.popperInstance.reference = {
          referenceNode: reference,
          // These `client` values don't get used by Popper.js if they are 0
          clientWidth: 0,
          clientHeight: 0,
          getBoundingClientRect: function getBoundingClientRect() {
            return getInlineBoundingClientRect(instance.state.currentPlacement && Object(_tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__["j"])(instance.state.currentPlacement), reference.getBoundingClientRect(), Object(_tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__["k"])(reference.getClientRects()));
          }
        };
      }
    };
  }
};
function getInlineBoundingClientRect(currentBasePlacement, boundingRect, clientRects) {
  // Not an inline element, or placement is not yet known
  if (clientRects.length < 2 || currentBasePlacement === null) {
    return boundingRect;
  }

  var rectToUse;

  switch (currentBasePlacement) {
    case 'top':
    case 'bottom':
      {
        var firstRect = clientRects[0];
        var lastRect = clientRects[clientRects.length - 1];
        var isTop = currentBasePlacement === 'top';
        var top = firstRect.top;
        var bottom = lastRect.bottom;
        var left = isTop ? firstRect.left : lastRect.left;
        var right = isTop ? firstRect.right : lastRect.right;
        var width = right - left;
        var height = bottom - top;
        rectToUse = {
          top: top,
          bottom: bottom,
          left: left,
          right: right,
          width: width,
          height: height
        };
        break;
      }

    case 'left':
    case 'right':
      {
        var minLeft = Math.min.apply(Math, clientRects.map(function (rects) {
          return rects.left;
        }));
        var maxRight = Math.max.apply(Math, clientRects.map(function (rects) {
          return rects.right;
        }));
        var measureRects = clientRects.filter(function (rect) {
          return currentBasePlacement === 'left' ? rect.left === minLeft : rect.right === maxRight;
        });
        var _top = measureRects[0].top;
        var _bottom = measureRects[measureRects.length - 1].bottom;
        var _left = minLeft;
        var _right = maxRight;

        var _width = _right - _left;

        var _height = _bottom - _top;

        rectToUse = {
          top: _top,
          bottom: _bottom,
          left: _left,
          right: _right,
          width: _width,
          height: _height
        };
        break;
      }

    default:
      {
        rectToUse = boundingRect;
      }
  }

  return rectToUse;
}

var sticky = {
  name: 'sticky',
  defaultValue: false,
  fn: function fn(instance) {
    var reference = instance.reference,
        popper = instance.popper;

    function shouldCheck(value) {
      return instance.props.sticky === true || instance.props.sticky === value;
    }

    var prevRefRect = null;
    var prevPopRect = null;

    function updatePosition() {
      var currentRefRect = shouldCheck('reference') ? reference.getBoundingClientRect() : null;
      var currentPopRect = shouldCheck('popper') ? popper.getBoundingClientRect() : null;

      if (currentRefRect && areRectsDifferent(prevRefRect, currentRefRect) || currentPopRect && areRectsDifferent(prevPopRect, currentPopRect)) {
        instance.popperInstance.update();
      }

      prevRefRect = currentRefRect;
      prevPopRect = currentPopRect;

      if (instance.state.isMounted) {
        requestAnimationFrame(updatePosition);
      }
    }

    return {
      onMount: function onMount() {
        if (instance.props.sticky) {
          updatePosition();
        }
      }
    };
  }
};

function areRectsDifferent(rectA, rectB) {
  if (rectA && rectB) {
    return rectA.top !== rectB.top || rectA.right !== rectB.right || rectA.bottom !== rectB.bottom || rectA.left !== rectB.left;
  }

  return true;
}




/***/ })

/******/ });