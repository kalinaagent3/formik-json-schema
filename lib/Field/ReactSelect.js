'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _Creatable = require('react-select/lib/Creatable');

var _Creatable2 = _interopRequireDefault(_Creatable);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var prepareOptions = function prepareOptions(options) {
    return _lodash2.default.reduce(options, function (result, value) {
        if (!_lodash2.default.isObject(value) && !_lodash2.default.isEmpty(value)) {
            result.push({ value: value, label: value });
        } else {
            result.push(value);
        }

        return result;
    }, []);
};

var getSelectedOptions = function getSelectedOptions(options, values, isCreatable) {
    var getSelectedOption = function getSelectedOption(value) {
        var selectedOption = _lodash2.default.filter(options, _lodash2.default.matches({ value: value }));
        return !_lodash2.default.isEmpty(selectedOption) ? selectedOption : isCreatable ? [{ value: value, label: value }] : null;
    };

    if (values) {
        if (!_lodash2.default.isObject(values)) {
            return getSelectedOption(values);
        }

        return _lodash2.default.reduce(values, function (result, value) {
            var selectedOption = getSelectedOption(value);
            if (_lodash2.default.isEmpty(selectedOption)) {
                return result;
            }

            return _lodash2.default.union(result, selectedOption);
        }, []);
    }

    return null;
};

var ReactSelect = function ReactSelect(_ref) {
    var config = _ref.config,
        formik = _ref.formik,
        value = _ref.value,
        error = _ref.error;

    var name = config.name,
        isMulti = config.isMulti,
        defaultValue = config.defaultValue,
        _config$fieldClass = config.fieldClass,
        fieldClass = _config$fieldClass === undefined ? '' : _config$fieldClass,
        noOptionsMessage = config.noOptionsMessage,
        _config$isDisabled = config.isDisabled,
        isDisabled = _config$isDisabled === undefined ? false : _config$isDisabled,
        _config$isClearable = config.isClearable,
        isClearable = _config$isClearable === undefined ? false : _config$isClearable,
        _config$isCreatable = config.isCreatable,
        isCreatable = _config$isCreatable === undefined ? false : _config$isCreatable,
        initialOptions = config.options,
        attributes = _objectWithoutProperties(config, ['name', 'isMulti', 'defaultValue', 'fieldClass', 'noOptionsMessage', 'isDisabled', 'isClearable', 'isCreatable', 'options']);

    var setFieldValue = formik.setFieldValue,
        handleBlur = formik.handleBlur;

    var options = prepareOptions(initialOptions);
    var selectedValue = value || defaultValue;
    var selectedOption = getSelectedOptions(options, selectedValue, isCreatable);

    var _useState = (0, _react.useState)(''),
        inputValue = _useState[0],
        setInputValue = _useState[1];

    var selectProps = _extends({
        name: name,
        isMulti: isMulti,
        noOptionsMessage: noOptionsMessage,
        isClearable: isClearable,
        isDisabled: isDisabled,
        id: name,
        inputValue: inputValue,
        className: fieldClass + (error ? ' is-invalid ' : ''),
        onChange: function onChange(selectedOptions) {
            var selectedValues = !isMulti ? selectedOptions.value : _lodash2.default.reduce(selectedOptions, function (result, option) {
                return [].concat(result, [option.value]);
            }, []);

            return (0, _utils.changeHandler)((0, _utils.setFieldValueWrapper)(setFieldValue, name), formik, config, selectedValues);
        },
        onBlur: function onBlur(event) {
            return handleBlur(_extends({}, event, {
                target: _extends({}, event.target, {
                    name: name
                })
            }));
        },
        onInputChange: function onInputChange(inputValue) {
            (0, _utils.changeHandler)(setInputValue, formik, config, inputValue, 'onInputChange');
        },
        onKeyDown: function onKeyDown(event) {
            if (!isMulti || !inputValue || !selectedValue || selectedValue.indexOf(inputValue) > -1) {
                return;
            }

            switch (event.key) {
                case 'Enter':
                case 'Tab':
                    (0, _utils.changeHandler)((0, _utils.setFieldValueWrapper)(setFieldValue, name), formik, config, [].concat(selectedValue, [inputValue]), 'onChange');
                    setInputValue('');
                    event.preventDefault();
            }
        }
    }, attributes);
    selectProps = _lodash2.default.assign(selectProps, { options: options });

    if (selectedOption) {
        selectProps.value = selectedOption;
    }

    var SelectComponent = isCreatable ? _Creatable2.default : _reactSelect2.default;
    return _react2.default.createElement(SelectComponent, selectProps);
};

exports.default = _react2.default.memo(ReactSelect);
module.exports = exports['default'];