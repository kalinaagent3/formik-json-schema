"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var InnerText = function InnerText(_ref) {
  var config = _ref.config,
      formik = _ref.formik,
      value = _ref.value,
      error = _ref.error;

  var name = config.name,
      _config$as = config.as,
      Component = _config$as === undefined ? "span" : _config$as,
      htmlClass = config.htmlClass,
      _config$defaultValue = config.defaultValue,
      defaultValue = _config$defaultValue === undefined ? "" : _config$defaultValue,
      attributes = _objectWithoutProperties(config, ["name", "as", "htmlClass", "defaultValue"]);

  return _react2.default.createElement(
    Component,
    _extends({ className: htmlClass }, attributes),
    _react2.default.createElement("span", { dangerouslySetInnerHTML: { __html: value || defaultValue } })
  );
};

exports.default = _react2.default.memo(InnerText);
module.exports = exports["default"];