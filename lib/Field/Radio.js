'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Radio = function Radio(_ref) {
    var config = _ref.config,
        formik = _ref.formik,
        value = _ref.value,
        error = _ref.error;
    var name = config.name,
        type = config.type,
        attributes = config.attributes,
        options = config.options,
        _config$formCheckClas = config.formCheckClass,
        formCheckClass = _config$formCheckClas === undefined ? 'form-check' : _config$formCheckClas,
        _config$fieldClass = config.fieldClass,
        fieldClass = _config$fieldClass === undefined ? 'form-check-input' : _config$fieldClass,
        _config$formCheckLabe = config.formCheckLabelClass,
        formCheckLabelClass = _config$formCheckLabe === undefined ? 'form-check-label' : _config$formCheckLabe;
    var handleChange = formik.handleChange,
        handleBlur = formik.handleBlur;


    return options.map(function (option) {
        return _react2.default.createElement(
            'div',
            { className: formCheckClass, key: option.value },
            _react2.default.createElement(
                'label',
                { htmlFor: name + '_' + option.value, className: formCheckLabelClass },
                _react2.default.createElement('input', _extends({
                    name: name,
                    type: 'radio',
                    className: fieldClass + (error ? ' is-invalid ' : ''),
                    id: name + '_' + option.value,
                    value: option.value,
                    defaultChecked: value == option.value,
                    onChange: function onChange(event) {
                        (0, _utils.changeHandler)(handleChange, formik, config, event);
                        handleBlur(event);
                    }
                }, attributes)),
                ' ',
                option.title
            )
        );
    });
};

exports.default = _react2.default.memo(Radio);
module.exports = exports['default'];