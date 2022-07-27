"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Checkbox = function Checkbox(_ref) {
  var config = _ref.config,
      formik = _ref.formik,
      value = _ref.value,
      error = _ref.error;
  var name = config.name,
      attributes = config.attributes,
      _config$options = config.options,
      options = _config$options === undefined ? [] : _config$options,
      _config$formCheckClas = config.formCheckClass,
      formCheckClass = _config$formCheckClas === undefined ? "form-check" : _config$formCheckClas,
      _config$fieldClass = config.fieldClass,
      fieldClass = _config$fieldClass === undefined ? "form-check-input" : _config$fieldClass,
      _config$formCheckLabe = config.formCheckLabelClass,
      formCheckLabelClass = _config$formCheckLabe === undefined ? "form-check-label" : _config$formCheckLabe;
  var handleChange = formik.handleChange,
      handleBlur = formik.handleBlur;

  var checkboxValue = value || [];
  return options.map(function (_ref2, key, index) {
    var value = _ref2.value,
        label = _ref2.label;

    var fieldName = _lodash2.default.kebabCase(name + " " + value);

    var isChecked = function isChecked() {
      var checked = void 0;
      if (checkboxValue[key]) {
        checked = !!checkboxValue[key][0];
      } else {
        checked = false;
      }
      return checked;
    };
    console.log(isChecked);

    return _react2.default.createElement(
      "div",
      { key: key, className: formCheckClass },
      _react2.default.createElement(
        "label",
        { htmlFor: fieldName, className: formCheckLabelClass },
        _react2.default.createElement("input", _extends({
          id: fieldName,
          name: name + "." + key,
          className: fieldClass + (error ? " is-invalid " : ""),
          type: "checkbox",
          checked: isChecked(),
          onChange: function onChange(event) {
            (0, _utils.changeHandler)(handleChange, formik, config, event);
            handleBlur(event);
          }
        }, attributes)),
        _react2.default.createElement("span", { dangerouslySetInnerHTML: { __html: label } })
      )
    );
  });
};

Checkbox.propTypes = process.env.NODE_ENV !== "production" ? {
  config: _propTypes2.default.shape({
    name: _propTypes2.default.string.isRequired,
    options: _propTypes2.default.array.isRequired,
    formCheckClass: _propTypes2.default.string
  })
} : {};

exports.default = _react2.default.memo(Checkbox);
module.exports = exports["default"];