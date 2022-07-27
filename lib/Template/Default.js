"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Label = require("../Field/Label");

var _Label2 = _interopRequireDefault(_Label);

var _ErrorMessage = require("../Field/ErrorMessage");

var _ErrorMessage2 = _interopRequireDefault(_ErrorMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(disabled) {
  return disabled ? { pointerEvents: "none", opacity: 0.6 } : {};
};

var Default = function Default(_ref) {
  var _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === undefined ? false : _ref$disabled,
      name = _ref.name,
      label = _ref.label,
      comment = _ref.comment,
      error = _ref.error,
      _ref$labelClass = _ref.labelClass,
      labelClass = _ref$labelClass === undefined ? "" : _ref$labelClass,
      _ref$wrapAs = _ref.wrapAs,
      wrapAs = _ref$wrapAs === undefined ? "div" : _ref$wrapAs,
      _ref$htmlClass = _ref.htmlClass,
      htmlClass = _ref$htmlClass === undefined ? "form-group" : _ref$htmlClass,
      _ref$commentClass = _ref.commentClass,
      commentClass = _ref$commentClass === undefined ? "text-muted order-last" : _ref$commentClass,
      _ref$commentAs = _ref.commentAs,
      CommentComponent = _ref$commentAs === undefined ? "small" : _ref$commentAs,
      errorClass = _ref.errorClass,
      errorAs = _ref.errorAs,
      children = _ref.children;

  var Component = !wrapAs ? _react.Fragment : wrapAs;
  var componentProps = !wrapAs ? {} : {
    className: htmlClass,
    style: styles(disabled)
  };

  return _react2.default.createElement(
    Component,
    componentProps,
    label && _react2.default.createElement(
      _Label2.default,
      { htmlFor: name, className: labelClass },
      label
    ),
    children,
    comment && _react2.default.createElement(
      CommentComponent,
      { className: commentClass },
      _react2.default.createElement("span", { dangerouslySetInnerHTML: { __html: comment } })
    ),
    _react2.default.createElement(_ErrorMessage2.default, {
      name: name,
      error: error,
      className: errorClass,
      as: errorAs
    })
  );
};

exports.default = Default;
module.exports = exports["default"];