// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/massage-items.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = [{
  preview: 'https://i.ibb.co/BzQkD3t/massage-1.jpg',
  original: 'https://i.ibb.co/kHwZnBx/massage-1.jpg',
  description: 'Результат марафона'
}, {
  preview: 'https://i.ibb.co/c8XFZyh/massage-2.jpg',
  original: 'https://i.ibb.co/Sm7nM6w/massage-2.jpg',
  description: 'Результат марафона'
}, {
  preview: 'https://i.ibb.co/s170zQd/massage-3.jpg',
  original: 'https://i.ibb.co/hd0PwHJ/massage-3.jpg',
  description: 'Результат марафона'
}, {
  preview: 'https://i.ibb.co/sCFYbbv/massage-4.jpg',
  original: 'https://i.ibb.co/FXBTmmb/massage-4.jpg',
  description: 'Результат марафона'
}, {
  preview: 'https://i.ibb.co/Vx8b2cN/massage-5.jpg',
  original: 'https://i.ibb.co/ZSCvWpJ/massage-5.jpg',
  description: 'Результат марафона'
}, {
  preview: 'https://i.ibb.co/H2mTnjZ/massage-6.jpg',
  original: 'https://i.ibb.co/1nHG8kc/massage-6.jpg',
  description: 'Результат марафона'
}, {
  preview: 'https://i.ibb.co/sKH6bNG/massage-7.jpg',
  original: 'https://i.ibb.co/x1HfXB0/massage-7.jpg',
  description: 'Результат марафона'
}, {
  preview: 'https://i.ibb.co/CQvw4nG/massage-8.jpg',
  original: 'https://i.ibb.co/TtRwJH3/massage-8.jpg',
  description: 'Результат марафона'
}, {
  preview: 'https://i.ibb.co/3h6G6Hq/massage-9.jpg',
  original: 'https://i.ibb.co/cTfMfdH/massage-9.jpg',
  description: 'Результат марафона'
}, {
  preview: 'https://i.ibb.co/52G1rnq/massage-10.jpg',
  original: 'https://i.ibb.co/g6mrSPs/massage-10.jpg',
  description: 'Результат марафона'
}, {
  preview: 'https://i.ibb.co/Pzpj8GR/massage-11.jpg',
  original: 'https://i.ibb.co/zHcxwV1/massage-11.jpg',
  description: 'Результат марафона'
}, {
  preview: 'https://i.ibb.co/KjBDvxD/massage-12.jpg',
  original: 'https://i.ibb.co/d0XtY4t/massage-12.jpg',
  description: 'Результат марафона'
}];
exports.default = _default;
},{}],"js/massage.js":[function(require,module,exports) {
"use strict";

var _massageItems = _interopRequireDefault(require("./massage-items"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ref = {
  containerGallery: document.querySelector('.massage-js-gallery'),
  closeBtn: document.querySelector('.massage-lightbox__button[data-action="massage-close-lightbox"]'),
  lightBox: document.querySelector('.massage-lightbox'),
  bigImg: document.querySelector('.massage-lightbox__image')
};

var galleryItemsPalette = function galleryItemsPalette(images) {
  return images.map(function (_ref) {
    var preview = _ref.preview,
        original = _ref.original,
        description = _ref.description;
    return "<li class=\"massage-gallery__item\">\n       <a\n         class=\"massage-gallery__link\"\n         href=\"".concat(original, "\"\n       >\n         <img\n          class=\"massage-gallery__image\"\n           src=\"").concat(preview, "\"\n           data-source=\"").concat(original, "\"\n           alt=\"").concat(description, "\"\n         />\n       </a>\n     </li>");
  }).join('');
};

ref.containerGallery.insertAdjacentHTML('beforeend', galleryItemsPalette(_massageItems.default));

var showImg = function showImg(evt) {
  evt.preventDefault();
  ref.lightBox.classList.add('is-open');
  ref.bigImg.src = evt.target.dataset.source;
};

var closeImg = function closeImg() {
  ref.lightBox.classList.remove('is-open');
  ref.bigImg.src = '';
};

var getIndexOfChildren = function getIndexOfChildren() {
  return _massageItems.default.findIndex(function (evt) {
    return evt.original === ref.bigImg.src;
  });
};

var controlButtonsOfGallery = function controlButtonsOfGallery(evt) {
  if (evt.target.classList.contains('massage-gallery__image') && !ref.lightBox.classList.contains('is-open')) {
    showImg(evt);
  }

  if (ref.lightBox.classList.contains('is-open') && evt.target === ref.closeBtn || evt.code === 'Escape') {
    closeImg(evt);
  }
};

var isOnSwitchImages = function isOnSwitchImages(evt) {
  var idx = getIndexOfChildren();

  if (evt.code === 'ArrowLeft') {
    if (idx !== 0) {
      ref.bigImg.src = _massageItems.default[idx - 1].original;
    }
  }

  if (evt.code === 'ArrowRight') {
    if (idx !== _massageItems.default.length - 1) {
      ref.bigImg.src = _massageItems.default[idx + 1].original;
    }
  }
};

var onTapScreen = function onTapScreen(evt) {
  var index = getIndexOfChildren();

  if (evt.targetTouches.length === 1) {
    if (index !== _massageItems.default.length - 1) {
      ref.bigImg.src = _massageItems.default[index + 1].original;
    }
  }

  if (evt.targetTouches.length !== 1) {
    if (idx !== 0) {
      ref.bigImg.src = _massageItems.default[idx - 1].original;
    }
  }
};

addEventListener('click', controlButtonsOfGallery);
addEventListener('keydown', controlButtonsOfGallery);
addEventListener('keydown', isOnSwitchImages);
addEventListener('touchstart', onTapScreen);
},{"./massage-items":"js/massage-items.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49852" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/massage.js"], null)
//# sourceMappingURL=/massage.3c1eb8bb.js.map