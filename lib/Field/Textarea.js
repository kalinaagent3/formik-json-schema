'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Textarea = function Textarea(_ref) {
    var config = _ref.config,
        formik = _ref.formik,
        _ref$value = _ref.value,
        value = _ref$value === undefined ? '' : _ref$value,
        error = _ref.error;
    var name = config.name,
        type = config.type,
        attributes = config.attributes,
        rows = config.rows,
        _config$fieldClass = config.fieldClass,
        fieldClass = _config$fieldClass === undefined ? 'form-control' : _config$fieldClass;
    var handleChange = formik.handleChange,
        handleBlur = formik.handleBlur;


    return _react2.default.createElement('textarea', _extends({
        id: name,
        name: name,
        className: fieldClass + (error ? ' is-invalid ' : ''),
        value: value,
        onChange: _utils.changeHandler.bind(undefined, handleChange, formik, config),
        onBlur: handleBlur
    }, attributes));
};

exports.default = _react2.default.memo(Textarea);
module.exports = exports['default'];