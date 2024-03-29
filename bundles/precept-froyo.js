(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.precept = {}));
})(this, (function (exports) { 'use strict';

  function _iterableToArrayLimit(arr, i) {
    var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
    if (null != _i) {
      var _s,
        _e,
        _x,
        _r,
        _arr = [],
        _n = !0,
        _d = !1;
      try {
        if (_x = (_i = _i.call(arr)).next, 0 === i) {
          if (Object(_i) !== _i) return;
          _n = !1;
        } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
      } catch (err) {
        _d = !0, _e = err;
      } finally {
        try {
          if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
        } finally {
          if (_d) throw _e;
        }
      }
      return _arr;
    }
  }
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }
  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
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
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
        result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var ReactPropTypesSecret_1;
  var hasRequiredReactPropTypesSecret;
  function requireReactPropTypesSecret() {
    if (hasRequiredReactPropTypesSecret) return ReactPropTypesSecret_1;
    hasRequiredReactPropTypesSecret = 1;
    var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
    ReactPropTypesSecret_1 = ReactPropTypesSecret;
    return ReactPropTypesSecret_1;
  }

  var has$1;
  var hasRequiredHas;
  function requireHas() {
    if (hasRequiredHas) return has$1;
    hasRequiredHas = 1;
    has$1 = Function.call.bind(Object.prototype.hasOwnProperty);
    return has$1;
  }

  var printWarning = function printWarning() {};
  {
    var ReactPropTypesSecret = requireReactPropTypesSecret();
    var loggedTypeFailures = {};
    var has = requireHas();
    printWarning = function printWarning(text) {
      var message = 'Warning: ' + text;
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {/**/}
    };
  }

  /**
   * Assert that the values match with the type specs.
   * Error messages are memorized and will only be shown once.
   *
   * @param {object} typeSpecs Map of name to a ReactPropType
   * @param {object} values Runtime values that need to be type-checked
   * @param {string} location e.g. "prop", "context", "child context"
   * @param {string} componentName Name of the component for error messages.
   * @param {?Function} getStack Returns the component stack.
   * @private
   */
  function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
    {
      for (var typeSpecName in typeSpecs) {
        if (has(typeSpecs, typeSpecName)) {
          var error;
          // Prop type validation may throw. In case they do, we don't want to
          // fail the render phase where it didn't fail before. So we log it.
          // After these have been cleaned up, we'll let them throw.
          try {
            // This is intentionally an invariant that gets caught. It's the same
            // behavior as without this statement except with a better message.
            if (typeof typeSpecs[typeSpecName] !== 'function') {
              var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + _typeof(typeSpecs[typeSpecName]) + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
              err.name = 'Invariant Violation';
              throw err;
            }
            error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
          } catch (ex) {
            error = ex;
          }
          if (error && !(error instanceof Error)) {
            printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + _typeof(error) + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
          }
          if (error instanceof Error && !(error.message in loggedTypeFailures)) {
            // Only monitor this failure once because there tends to be a lot of the
            // same error.
            loggedTypeFailures[error.message] = true;
            var stack = getStack ? getStack() : '';
            printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
          }
        }
      }
    }
  }

  /**
   * Resets warning cache when testing.
   *
   * @private
   */
  checkPropTypes.resetWarningCache = function () {
    {
      loggedTypeFailures = {};
    }
  };
  var checkPropTypes_1 = checkPropTypes;
  var checkPropTypes$1 = checkPropTypes_1;

  /******************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */

  function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
  }
  function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
  }

  /* eslint-disable no-console */
  var _Component_components, _Component_elements, _Component_initialized, _Component_listeners, _Component_observers, _Component_rootElement, _Component_state;
  // stores references to component instances
  var instances = new Set();
  var Component = /*#__PURE__*/function () {
    function Component(root) {
      var initialState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      _classCallCheck(this, Component);
      _Component_components.set(this, new Map());
      _Component_elements.set(this, {});
      _Component_initialized.set(this, false);
      _Component_listeners.set(this, new Map());
      _Component_observers.set(this, new Set());
      _Component_rootElement.set(this, void 0);
      _Component_state.set(this, {});
      var htmlInitialState = {};
      var rootElement = null;
      if (typeof root === 'string') {
        rootElement = document.body.querySelector(root);
      } else if (root instanceof Element) {
        rootElement = root;
      }
      if (rootElement instanceof Element) {
        __classPrivateFieldSet(this, _Component_rootElement, rootElement, "f");
      } else {
        throw new Error('Warning: the root element must be an HTML element');
      }
      // retrieve initial state properties from the HTML
      if (rootElement.hasAttribute('data-initial-state')) {
        try {
          htmlInitialState = JSON.parse(rootElement.getAttribute('data-initial-state') || '');
        } catch (_unused) {
          console.error('Warning: "data-initial-state" must contain valid JSON');
        }
      }
      // merge and set initial states before setup
      this.state = _objectSpread2(_objectSpread2({}, htmlInitialState), initialState);
      if (this.setup) {
        this.setup();
      }
      if (this.validate) {
        this.subscribe(this.validate.bind(this));
        this.validate(this.state, {}, this);
      }
      if (this.render) {
        this.subscribe(this.render.bind(this));
        this.render(this.state, {}, this);
      }
      if (this.update !== undefined) {
        this.subscribe(this.update.bind(this));
        this.update(this.state, {}, this);
      }
      __classPrivateFieldSet(this, _Component_initialized, true, "f");
      instances.add(this);
    }
    _createClass(Component, [{
      key: "components",
      get: function get() {
        return Object.fromEntries(__classPrivateFieldGet(this, _Component_components, "f"));
      },
      set: function set(newComponents) {
        var _this = this;
        Object.entries(newComponents).forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];
          if (!(value instanceof Component)) {
            console.error("Warning: component \"".concat(key, "\" is not an instance of \"Component\""));
            return;
          }
          if (__classPrivateFieldGet(_this, _Component_components, "f").has(key)) {
            var _classPrivateFieldGe;
            (_classPrivateFieldGe = __classPrivateFieldGet(_this, _Component_components, "f").get(key)) === null || _classPrivateFieldGe === void 0 ? void 0 : _classPrivateFieldGe.destroy();
          }
          __classPrivateFieldGet(_this, _Component_components, "f").set(key, value);
        });
      }
    }, {
      key: "displayName",
      get: function get() {
        var _this$constructor = this.constructor,
          name = _this$constructor.name,
          displayName = _this$constructor.displayName;
        return displayName || name;
      }
    }, {
      key: "elements",
      get: function get() {
        return _objectSpread2({}, __classPrivateFieldGet(this, _Component_elements, "f"));
      },
      set: function set(newElements) {
        var _this2 = this;
        Object.entries(newElements).forEach(function (_ref3) {
          var _ref4 = _slicedToArray(_ref3, 2),
            key = _ref4[0],
            value = _ref4[1];
          if (value instanceof Node || value === null) {
            __classPrivateFieldGet(_this2, _Component_elements, "f")[key] = value;
            return;
          }
          if (value instanceof NodeList || value instanceof HTMLCollection) {
            __classPrivateFieldGet(_this2, _Component_elements, "f")[key] = Array.from(value);
            return;
          }
          console.error("Warning: value assigned to \"elements.".concat(key, "\" is not a valid DOM node"));
        });
      }
    }, {
      key: "listeners",
      get: function get() {
        return Object.fromEntries(__classPrivateFieldGet(this, _Component_listeners, "f"));
      },
      set: function set(newListeners) {
        var _this3 = this;
        Object.entries(newListeners).forEach(function (_ref5) {
          var _ref6 = _slicedToArray(_ref5, 2),
            key = _ref6[0],
            value = _ref6[1];
          if (typeof (value === null || value === void 0 ? void 0 : value.destroy) !== 'function') {
            console.error("Warning: listener \"".concat(key, "\" is missing a \"destroy\" function"));
            return;
          }
          if (__classPrivateFieldGet(_this3, _Component_listeners, "f").has(key)) {
            var _classPrivateFieldGe2;
            (_classPrivateFieldGe2 = __classPrivateFieldGet(_this3, _Component_listeners, "f").get(key)) === null || _classPrivateFieldGe2 === void 0 ? void 0 : _classPrivateFieldGe2.destroy();
          }
          __classPrivateFieldGet(_this3, _Component_listeners, "f").set(key, value);
        });
      }
    }, {
      key: "initialized",
      get: function get() {
        return __classPrivateFieldGet(this, _Component_initialized, "f");
      }
    }, {
      key: "rootElement",
      get: function get() {
        return __classPrivateFieldGet(this, _Component_rootElement, "f");
      }
    }, {
      key: "state",
      get: function get() {
        return _objectSpread2({}, __classPrivateFieldGet(this, _Component_state, "f"));
      },
      set: function set(newState) {
        if (this.initialized) {
          console.error('Warning: state can only be updated via "setState" after initialization');
          return;
        }
        this.setState(newState);
      }
    }, {
      key: "destroy",
      value: function destroy() {
        __classPrivateFieldGet(this, _Component_observers, "f").clear();
        __classPrivateFieldGet(this, _Component_listeners, "f").forEach(function (listener) {
          return listener.destroy();
        });
        __classPrivateFieldGet(this, _Component_components, "f").forEach(function (component) {
          return component.destroy();
        });
        instances["delete"](this);
      }
    }, {
      key: "setState",
      value: function setState(newState) {
        var _this4 = this;
        var _this$constructor2 = this.constructor,
          _this$constructor2$de = _this$constructor2.defaultState,
          defaultState = _this$constructor2$de === void 0 ? {} : _this$constructor2$de,
          _this$constructor2$st = _this$constructor2.stateTypes,
          stateTypes = _this$constructor2$st === void 0 ? {} : _this$constructor2$st;
        var previousState = this.state;
        var stateChanges = {};
        // identify state properties that have changed
        Object.entries(newState).forEach(function (_ref7) {
          var _ref8 = _slicedToArray(_ref7, 2),
            key = _ref8[0],
            value = _ref8[1];
          if (value !== previousState[key]) {
            stateChanges[key] = value;
          }
        });
        if (Object.keys(stateChanges).length > 0 || !this.initialized) {
          var nextState = _objectSpread2(_objectSpread2({}, previousState), stateChanges);
          // default states that are "undefined"
          Object.keys(defaultState).forEach(function (key) {
            if (typeof nextState[key] === 'undefined') {
              nextState[key] = defaultState[key];
            }
          });
          // validate data types of state in non-production
          {
            checkPropTypes$1(stateTypes, nextState, 'state', this.displayName);
          }
          // update the state
          __classPrivateFieldSet(this, _Component_state, nextState, "f");
          // notify observers if initialized
          if (this.initialized) {
            __classPrivateFieldGet(this, _Component_observers, "f").forEach(function (observer) {
              observer(stateChanges, previousState, _this4);
            });
          }
        }
      }
    }, {
      key: "subscribe",
      value: function subscribe(observer) {
        if (typeof observer !== 'function') {
          console.error('Warning: a function must be provided to "subscribe"');
          return;
        }
        if (!__classPrivateFieldGet(this, _Component_observers, "f").has(observer)) {
          __classPrivateFieldGet(this, _Component_observers, "f").add(observer);
        }
      }
    }, {
      key: "unsubscribe",
      value: function unsubscribe(observer) {
        if (__classPrivateFieldGet(this, _Component_observers, "f").has(observer)) {
          __classPrivateFieldGet(this, _Component_observers, "f")["delete"](observer);
        }
      }
    }], [{
      key: "instances",
      get: function get() {
        return Array.from(instances);
      }
    }]);
    return Component;
  }();
  _Component_components = new WeakMap(), _Component_elements = new WeakMap(), _Component_initialized = new WeakMap(), _Component_listeners = new WeakMap(), _Component_observers = new WeakMap(), _Component_rootElement = new WeakMap(), _Component_state = new WeakMap();

  /* eslint-disable no-console */
  function createInitializer(componentList) {
    return function initialize() {
      var rootElements = document.querySelectorAll('[data-initialize]');
      var instances = [];
      Array.from(rootElements).forEach(function (rootElement) {
        var name = rootElement.getAttribute('data-initialize') || '';
        if (name in componentList && componentList[name].prototype instanceof Component) {
          rootElement.removeAttribute('data-initialize');
          instances.push(new componentList[name](rootElement));
        } else {
          console.error("Warning: \"".concat(name, "\" is not a valid \"Component\" constructor"));
        }
      });
      return instances;
    };
  }
  function addEventListener(target, type, listener, options) {
    target.addEventListener(type, listener, options);
    return {
      destroy: function destroy() {
        target.removeEventListener(type, listener, options);
      }
    };
  }
  function createMutationObserver(target, callback, options) {
    var observer = new MutationObserver(callback);
    observer.observe(target, options);
    return {
      observer: observer,
      destroy: function destroy() {
        observer.disconnect();
      }
    };
  }
  function createMediaQueryListener(query, callback) {
    var media = window.matchMedia(query);
    media.addEventListener('change', callback);
    return {
      media: media,
      destroy: function destroy() {
        media.removeEventListener('change', callback);
      }
    };
  }
  function setAttributes(target) {
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    Object.entries(attributes).forEach(function (_ref9) {
      var _ref10 = _slicedToArray(_ref9, 2),
        key = _ref10[0],
        value = _ref10[1];
      if (value === null) {
        target.removeAttribute(key);
      } else if (value !== undefined) {
        target.setAttribute(key, value);
      }
    });
  }
  function createElement(tag, attributes) {
    var children = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    var element = document.createElement(tag);
    if (attributes) {
      setAttributes(element, attributes);
    }
    if (typeof children === 'string') {
      element.innerHTML = children;
    } else {
      element.appendChild(children);
    }
    return element;
  }
  function setClasses(target, classes) {
    Object.entries(classes).forEach(function (entry) {
      target.classList[entry[1] ? 'add' : 'remove'](entry[0]);
    });
  }

  var froyojs = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Component: Component,
    addEventListener: addEventListener,
    createElement: createElement,
    createInitializer: createInitializer,
    createMediaQueryListener: createMediaQueryListener,
    createMutationObserver: createMutationObserver,
    setAttributes: setAttributes,
    setClasses: setClasses
  });

  var options = {
    manual: {
      type: Boolean,
      "default": false
    },
    activeTab: {
      type: Number,
      "default": 0
    }
  };
  var schema = function getTabsSchema(schemaOptions) {
    var uniqueId = schemaOptions.uniqueId,
      activeTab = schemaOptions.activeTab,
      manual = schemaOptions.manual,
      totalTabs = schemaOptions.totalTabs,
      totalPanels = schemaOptions.totalPanels,
      changeTab = schemaOptions.changeTab,
      focusOnTab = schemaOptions.focusOnTab;
    // convert the tab and panel lengths into
    // an array of numbers that can be iterated
    var tabNumbers = Array.from(Array(totalTabs).keys());
    var panelNumbers = Array.from(Array(totalPanels).keys());
    if (totalTabs !== totalPanels) {
      console.error("Warning: Tabs must have an equal number of tabs and panels. Found ".concat(totalTabs, " tabs and ").concat(totalPanels, " panels."));
    }
    if (activeTab < 0 || activeTab >= totalTabs) {
      console.error("Warning: There is no tab for index: \"".concat(activeTab, "\""));
    }
    return {
      attributes: {
        tablist: {
          role: 'tablist'
        },
        tabs: tabNumbers.map(function (tabNumber) {
          return {
            type: 'button',
            role: 'tab',
            id: "".concat(uniqueId, "-tab-").concat(tabNumber),
            'aria-controls': "".concat(uniqueId, "-panel-").concat(tabNumber),
            'aria-selected': activeTab === tabNumber
          };
        }),
        panels: panelNumbers.map(function (panelNumber) {
          return {
            role: 'tabpanel',
            id: "".concat(uniqueId, "-panel-").concat(panelNumber),
            'aria-labelledby': "".concat(uniqueId, "-tab-").concat(panelNumber),
            hidden: activeTab === panelNumber ? null : true
          };
        })
      },
      handlers: {
        tabs: tabNumbers.map(function (tabNumber) {
          return {
            click: function click() {
              changeTab(tabNumber);
            },
            focus: function focus() {
              if (!manual) {
                changeTab(tabNumber);
              }
            },
            keydown: function keydown(event) {
              var lastTab = totalTabs - 1;
              var nextTab = tabNumber + 1;
              var previousTab = tabNumber - 1;
              var tabToFocus = -1;
              if (event.key === 'ArrowRight') {
                tabToFocus = tabNumber === lastTab ? 0 : nextTab;
              } else if (event.key === 'ArrowLeft') {
                tabToFocus = tabNumber === 0 ? lastTab : previousTab;
              }
              if (!manual && tabToFocus > -1) {
                focusOnTab(tabToFocus);
              }
            }
          };
        })
      }
    };
  };

  var nanoid = function nanoid() {
    var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 21;
    return crypto.getRandomValues(new Uint8Array(size)).reduce(function (id, _byte) {
      _byte &= 63;
      if (_byte < 36) {
        id += _byte.toString(36);
      } else if (_byte < 62) {
        id += (_byte - 26).toString(36).toUpperCase();
      } else if (_byte > 62) {
        id += '-';
      } else {
        id += '_';
      }
      return id;
    }, '');
  };

  function getDefaultState(options) {
    var defaultState = {};
    Object.keys(options).forEach(function (name) {
      defaultState[name] = options[name]["default"];
    });
    return defaultState;
  }

  var propTypesExports = {};
  var propTypes = {
    get exports(){ return propTypesExports; },
    set exports(v){ propTypesExports = v; },
  };

  var reactIsExports = {};
  var reactIs = {
    get exports(){ return reactIsExports; },
    set exports(v){ reactIsExports = v; },
  };

  var reactIs_development = {};

  var hasRequiredReactIs_development;
  function requireReactIs_development() {
    if (hasRequiredReactIs_development) return reactIs_development;
    hasRequiredReactIs_development = 1;
    {
      (function () {

        // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
        // nor polyfill, then a plain number is used for performance.
        var hasSymbol = typeof Symbol === 'function' && Symbol["for"];
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol["for"]('react.element') : 0xeac7;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol["for"]('react.portal') : 0xeaca;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol["for"]('react.fragment') : 0xeacb;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol["for"]('react.strict_mode') : 0xeacc;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol["for"]('react.profiler') : 0xead2;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol["for"]('react.provider') : 0xeacd;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol["for"]('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
        // (unstable) APIs that have been removed. Can we remove the symbols?

        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol["for"]('react.async_mode') : 0xeacf;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol["for"]('react.concurrent_mode') : 0xeacf;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol["for"]('react.forward_ref') : 0xead0;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol["for"]('react.suspense') : 0xead1;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol["for"]('react.suspense_list') : 0xead8;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol["for"]('react.memo') : 0xead3;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol["for"]('react.lazy') : 0xead4;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol["for"]('react.block') : 0xead9;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol["for"]('react.fundamental') : 0xead5;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol["for"]('react.responder') : 0xead6;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol["for"]('react.scope') : 0xead7;
        function isValidElementType(type) {
          return typeof type === 'string' || typeof type === 'function' ||
          // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || _typeof(type) === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (_typeof(object) === 'object' && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return undefined;
        } // AsyncMode is deprecated along with isAsyncMode

        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

              console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return _typeof(object) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        reactIs_development.AsyncMode = AsyncMode;
        reactIs_development.ConcurrentMode = ConcurrentMode;
        reactIs_development.ContextConsumer = ContextConsumer;
        reactIs_development.ContextProvider = ContextProvider;
        reactIs_development.Element = Element;
        reactIs_development.ForwardRef = ForwardRef;
        reactIs_development.Fragment = Fragment;
        reactIs_development.Lazy = Lazy;
        reactIs_development.Memo = Memo;
        reactIs_development.Portal = Portal;
        reactIs_development.Profiler = Profiler;
        reactIs_development.StrictMode = StrictMode;
        reactIs_development.Suspense = Suspense;
        reactIs_development.isAsyncMode = isAsyncMode;
        reactIs_development.isConcurrentMode = isConcurrentMode;
        reactIs_development.isContextConsumer = isContextConsumer;
        reactIs_development.isContextProvider = isContextProvider;
        reactIs_development.isElement = isElement;
        reactIs_development.isForwardRef = isForwardRef;
        reactIs_development.isFragment = isFragment;
        reactIs_development.isLazy = isLazy;
        reactIs_development.isMemo = isMemo;
        reactIs_development.isPortal = isPortal;
        reactIs_development.isProfiler = isProfiler;
        reactIs_development.isStrictMode = isStrictMode;
        reactIs_development.isSuspense = isSuspense;
        reactIs_development.isValidElementType = isValidElementType;
        reactIs_development.typeOf = typeOf;
      })();
    }
    return reactIs_development;
  }

  var hasRequiredReactIs;
  function requireReactIs() {
    if (hasRequiredReactIs) return reactIsExports;
    hasRequiredReactIs = 1;
    (function (module) {

      {
        module.exports = requireReactIs_development();
      }
    })(reactIs);
    return reactIsExports;
  }

  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */
  var objectAssign;
  var hasRequiredObjectAssign;
  function requireObjectAssign() {
    if (hasRequiredObjectAssign) return objectAssign;
    hasRequiredObjectAssign = 1;
    /* eslint-disable no-unused-vars */
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === undefined) {
        throw new TypeError('Object.assign cannot be called with null or undefined');
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }

        // Detect buggy property enumeration order in older V8 versions.

        // https://bugs.chromium.org/p/v8/issues/detail?id=4118
        var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
        test1[5] = 'de';
        if (Object.getOwnPropertyNames(test1)[0] === '5') {
          return false;
        }

        // https://bugs.chromium.org/p/v8/issues/detail?id=3056
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2['_' + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
          return test2[n];
        });
        if (order2.join('') !== '0123456789') {
          return false;
        }

        // https://bugs.chromium.org/p/v8/issues/detail?id=3056
        var test3 = {};
        'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
          return false;
        }
        return true;
      } catch (err) {
        // We don't expect any of the above to throw, but better to be safe.
        return false;
      }
    }
    objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }
      return to;
    };
    return objectAssign;
  }

  var factoryWithTypeCheckers;
  var hasRequiredFactoryWithTypeCheckers;
  function requireFactoryWithTypeCheckers() {
    if (hasRequiredFactoryWithTypeCheckers) return factoryWithTypeCheckers;
    hasRequiredFactoryWithTypeCheckers = 1;
    var ReactIs = requireReactIs();
    var assign = requireObjectAssign();
    var ReactPropTypesSecret = requireReactPropTypesSecret();
    var has = requireHas();
    var checkPropTypes = checkPropTypes_1;
    var printWarning = function printWarning() {};
    {
      printWarning = function printWarning(text) {
        var message = 'Warning: ' + text;
        if (typeof console !== 'undefined') {
          console.error(message);
        }
        try {
          // --- Welcome to debugging React ---
          // This error was thrown as a convenience so that you can use this stack
          // to find the callsite that caused this warning to fire.
          throw new Error(message);
        } catch (x) {}
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    factoryWithTypeCheckers = function factoryWithTypeCheckers(isValidElement, throwOnDirectAccess) {
      /* global Symbol */
      var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

      /**
       * Returns the iterator method function contained on the iterable object.
       *
       * Be sure to invoke the function with the iterable as context:
       *
       *     var iteratorFn = getIteratorFn(myIterable);
       *     if (iteratorFn) {
       *       var iterator = iteratorFn.call(myIterable);
       *       ...
       *     }
       *
       * @param {?object} maybeIterable
       * @return {?function}
       */
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === 'function') {
          return iteratorFn;
        }
      }

      /**
       * Collection of methods that allow declaration and validation of props that are
       * supplied to React components. Example usage:
       *
       *   var Props = require('ReactPropTypes');
       *   var MyArticle = React.createClass({
       *     propTypes: {
       *       // An optional string prop named "description".
       *       description: Props.string,
       *
       *       // A required enum prop named "category".
       *       category: Props.oneOf(['News','Photos']).isRequired,
       *
       *       // A prop named "dialog" that requires an instance of Dialog.
       *       dialog: Props.instanceOf(Dialog).isRequired
       *     },
       *     render: function() { ... }
       *   });
       *
       * A more formal specification of how these methods are used:
       *
       *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
       *   decl := ReactPropTypes.{type}(.isRequired)?
       *
       * Each and every declaration produces a function with the same signature. This
       * allows the creation of custom validation functions. For example:
       *
       *  var MyLink = React.createClass({
       *    propTypes: {
       *      // An optional string or URI prop named "href".
       *      href: function(props, propName, componentName) {
       *        var propValue = props[propName];
       *        if (propValue != null && typeof propValue !== 'string' &&
       *            !(propValue instanceof URI)) {
       *          return new Error(
       *            'Expected a string or an URI for ' + propName + ' in ' +
       *            componentName
       *          );
       *        }
       *      }
       *    },
       *    render: function() {...}
       *  });
       *
       * @internal
       */

      var ANONYMOUS = '<<anonymous>>';

      // Important!
      // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker('array'),
        bigint: createPrimitiveTypeChecker('bigint'),
        bool: createPrimitiveTypeChecker('boolean'),
        func: createPrimitiveTypeChecker('function'),
        number: createPrimitiveTypeChecker('number'),
        object: createPrimitiveTypeChecker('object'),
        string: createPrimitiveTypeChecker('string'),
        symbol: createPrimitiveTypeChecker('symbol'),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };

      /**
       * inlined Object.is polyfill to avoid requiring consumers ship their own
       * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
       */
      /*eslint-disable no-self-compare*/
      function is(x, y) {
        // SameValue algorithm
        if (x === y) {
          // Steps 1-5, 7-10
          // Steps 6.b-6.e: +0 != -0
          return x !== 0 || 1 / x === 1 / y;
        } else {
          // Step 6.a: NaN == NaN
          return x !== x && y !== y;
        }
      }
      /*eslint-enable no-self-compare*/

      /**
       * We use an Error-like object for backward compatibility as people may call
       * PropTypes directly and inspect their output. However, we don't use real
       * Errors anymore. We don't inspect their stack anyway, and creating them
       * is prohibitively expensive if they are created too often, such as what
       * happens in oneOfType() for any type before the one that matched.
       */
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && _typeof(data) === 'object' ? data : {};
        this.stack = '';
      }
      // Make `instanceof Error` still work for returned errors.
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              // New behavior only for users of `prop-types` package
              var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
              err.name = 'Invariant Violation';
              throw err;
            } else if (typeof console !== 'undefined') {
              // Old behavior for people using React.PropTypes
              var cacheKey = componentName + ':' + propName;
              if (!manualPropTypeCallCache[cacheKey] &&
              // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3) {
                printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
              }
              return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            // `propValue` being instance of, say, date/regexp, pass the 'object'
            // check, but we can offer a more precise error message here rather than
            // 'of type `object`'.
            var preciseType = getPreciseType(propValue);
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'), {
              expectedType: expectedType
            });
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== 'function') {
            return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          {
            if (arguments.length > 1) {
              printWarning('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
            } else {
              printWarning('Invalid argument supplied to oneOf, expected an array.');
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === 'symbol') {
              return String(value);
            }
            return value;
          });
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== 'function') {
            return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== 'object') {
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') ;
          return emptyFunctionThatReturnsNull;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== 'function') {
            printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
            var checker = arrayOfTypeCheckers[i];
            var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ', expected one of type [' + expectedTypes.join(', ') + ']' : '';
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError((componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + type + '`.');
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== 'object') {
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== 'function') {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== 'object') {
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
          }
          // We need to check all keys in case some are required but missing from props.
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== 'function') {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
            }
            var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (_typeof(propValue)) {
          case 'number':
          case 'string':
          case 'undefined':
            return true;
          case 'boolean':
            return !propValue;
          case 'object':
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                // Iterator will provide entry [k,v] tuples rather than values.
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        // Native Symbol.
        if (propType === 'symbol') {
          return true;
        }

        // falsy value can't be a Symbol
        if (!propValue) {
          return false;
        }

        // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
        if (propValue['@@toStringTag'] === 'Symbol') {
          return true;
        }

        // Fallback for non-spec compliant Symbols which are polyfilled.
        if (typeof Symbol === 'function' && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }

      // Equivalent of `typeof` but with special handling for array and regexp.
      function getPropType(propValue) {
        var propType = _typeof(propValue);
        if (Array.isArray(propValue)) {
          return 'array';
        }
        if (propValue instanceof RegExp) {
          // Old webkits (at least until Android 4.0) return 'function' rather than
          // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
          // passes PropTypes.object.
          return 'object';
        }
        if (isSymbol(propType, propValue)) {
          return 'symbol';
        }
        return propType;
      }

      // This handles more types than `getPropType`. Only used for error messages.
      // See `createPrimitiveTypeChecker`.
      function getPreciseType(propValue) {
        if (typeof propValue === 'undefined' || propValue === null) {
          return '' + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === 'object') {
          if (propValue instanceof Date) {
            return 'date';
          } else if (propValue instanceof RegExp) {
            return 'regexp';
          }
        }
        return propType;
      }

      // Returns a string that is postfixed to a warning about an invalid type.
      // For example, "undefined" or "of type array"
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case 'array':
          case 'object':
            return 'an ' + type;
          case 'boolean':
          case 'date':
          case 'regexp':
            return 'a ' + type;
          default:
            return type;
        }
      }

      // Returns class name of the object, if any.
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
    return factoryWithTypeCheckers;
  }

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  {
    var ReactIs = requireReactIs();

    // By explicitly using `prop-types` you are opting into new development behavior.
    // http://fb.me/prop-types-in-prod
    var throwOnDirectAccess = true;
    propTypes.exports = requireFactoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
  }

  function getStateTypes(options) {
    var stateTypes = {};
    Object.keys(options).forEach(function (name) {
      switch (options[name].type) {
        case Boolean:
          stateTypes[name] = propTypesExports.bool;
          break;
        case Number:
          stateTypes[name] = propTypesExports.number;
          break;
      }
    });
    return stateTypes;
  }

  function getSchema() {
    var _this = this;
    return schema(_objectSpread2(_objectSpread2({}, this.state), {}, {
      uniqueId: this.id,
      totalTabs: this.elements.tabs.length,
      totalPanels: this.elements.panels.length,
      changeTab: function changeTab(tabNumber) {
        _this.setState({
          activeTab: tabNumber
        });
      },
      focusOnTab: function focusOnTab(tabNumber) {
        _this.elements.tabs[tabNumber].focus();
      }
    }));
  }
  var Tabs = /*#__PURE__*/function (_Component) {
    _inherits(Tabs, _Component);
    var _super = _createSuper(Tabs);
    function Tabs() {
      _classCallCheck(this, Tabs);
      return _super.apply(this, arguments);
    }
    _createClass(Tabs, [{
      key: "setup",
      value: function setup() {
        var rootElement = this.rootElement;
        this.id = nanoid(8);
        this.elements = {
          tablist: rootElement.querySelector('[data-tablist]'),
          tabs: rootElement.querySelectorAll(':scope > * > [data-tab]'),
          panels: rootElement.querySelectorAll(':scope > [data-panel]')
        };
        this.listeners = {
          tabClick: addEventListener(rootElement, 'click', this.handleTabClick.bind(this)),
          tabFocus: addEventListener(rootElement, 'focus', this.handleTabFocus.bind(this), true),
          tabKeyDown: addEventListener(rootElement, 'keydown', this.handleTabKeyDown.bind(this))
        };
      }
    }, {
      key: "handleTabClick",
      value: function handleTabClick(event) {
        var tabs = this.elements.tabs;

        // istanbul ignore else
        if (tabs.includes(event.target)) {
          var tabNumber = tabs.indexOf(event.target);
          var _getSchema$call = getSchema.call(this),
            handlers = _getSchema$call.handlers;
          handlers.tabs[tabNumber].click(event);
        }
      }
    }, {
      key: "handleTabFocus",
      value: function handleTabFocus(event) {
        var tabs = this.elements.tabs;

        // istanbul ignore else
        if (tabs.includes(event.target)) {
          var tabNumber = tabs.indexOf(event.target);
          var _getSchema$call2 = getSchema.call(this),
            handlers = _getSchema$call2.handlers;
          handlers.tabs[tabNumber].focus(event);
        }
      }
    }, {
      key: "handleTabKeyDown",
      value: function handleTabKeyDown(event) {
        var tabs = this.elements.tabs;

        // istanbul ignore else
        if (tabs.includes(event.target)) {
          var tabNumber = tabs.indexOf(event.target);
          var _getSchema$call3 = getSchema.call(this),
            handlers = _getSchema$call3.handlers;
          handlers.tabs[tabNumber].keydown(event);
        }
      }
    }, {
      key: "render",
      value: function render(stateChanges) {
        var _this$elements = this.elements,
          tablist = _this$elements.tablist,
          tabs = _this$elements.tabs,
          panels = _this$elements.panels;
        var _getSchema$call4 = getSchema.call(this),
          attributes = _getSchema$call4.attributes;
        if (!this.initialized) {
          setAttributes(tablist, attributes.tablist);
        }

        // istanbul ignore else
        if ('activeTab' in stateChanges) {
          tabs.forEach(function (tab, index) {
            setAttributes(tab, attributes.tabs[index]);
          });
          panels.forEach(function (panel, index) {
            setAttributes(panel, attributes.panels[index]);
          });
        }
      }
    }], [{
      key: "stateTypes",
      get: function get() {
        return getStateTypes(options);
      }
    }, {
      key: "defaultState",
      get: function get() {
        return getDefaultState(options);
      }
    }]);
    return Tabs;
  }(Component);
  var Tabs$1 = Tabs;

  /* eslint-disable import/prefer-default-export */

  var components = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Tabs: Tabs$1
  });

  var initialize = createInitializer(components);
  initialize();

  exports.components = components;
  exports.froyojs = froyojs;
  exports.initialize = initialize;

}));
