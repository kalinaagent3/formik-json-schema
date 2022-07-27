'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Text = function Text(_ref) {
    var config = _ref.config,
        formik = _ref.formik,
        _ref$value = _ref.value,
        value = _ref$value === undefined ? '' : _ref$value,
        error = _ref.error;
    var name = config.name,
        type = config.type,
        attributes = config.attributes,
        fieldType = config.fieldType,
        defaultValue = config.defaultValue,
        icon = config.icon,
        _config$fieldClass = config.fieldClass,
        fieldClass = _config$fieldClass === undefined ? 'form-control' : _config$fieldClass,
        _config$inputGroupCla = config.inputGroupClass,
        inputGroupClass = _config$inputGroupCla === undefined ? 'input-group' : _config$inputGroupCla;
    var handleChange = formik.handleChange,
        handleBlur = formik.handleBlur;

    var isInputGroup = icon ? true : false;

    return isInputGroup ? _react2.default.createElement(
        'div',
        { className: inputGroupClass },
        _react2.default.createElement(
            'div',
            { className: 'input-group-prepend' },
            _react2.default.createElement(
                'span',
                { className: 'input-group-text' },
                _react2.default.createElement('i', { className: icon })
            )
        ),
        _react2.default.createElement('input', _extends({
            id: name,
            name: name,
            type: fieldType,
            className: fieldClass + (error ? ' is-invalid ' : ''),
            value: value,
            onChange: _utils.changeHandler.bind(undefined, handleChange, formik, config),
            onBlur: handleBlur
        }, attributes))
    ) : _react2.default.createElement('input', _extends({
        id: name,
        name: name,
        type: fieldType,
        className: fieldClass + (error ? ' is-invalid ' : ''),
        value: value,
        onChange: _utils.changeHandler.bind(undefined, handleChange, formik, config),
        onBlur: handleBlur
    }, attributes));
};

exports.default = _react2.default.memo(Text);
module.exports = exports['default'];