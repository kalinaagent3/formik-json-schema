'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSwitch = require('react-switch');

var _reactSwitch2 = _interopRequireDefault(_reactSwitch);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Switch = function Switch(_ref) {
    var config = _ref.config,
        formik = _ref.formik,
        _ref$value = _ref.value,
        value = _ref$value === undefined ? false : _ref$value,
        error = _ref.error;
    var name = config.name,
        _config$fieldClass = config.fieldClass,
        fieldClass = _config$fieldClass === undefined ? 'switch d-block' : _config$fieldClass;
    var setFieldValue = formik.setFieldValue;


    return _react2.default.createElement(
        'label',
        { className: fieldClass + (error ? ' is-invalid ' : '') },
        _react2.default.createElement(_reactSwitch2.default, {
            checked: value,
            onChange: _utils.changeHandler.bind(undefined, (0, _utils.setFieldValueWrapper)(setFieldValue, name), formik, config)
        })
    );
};

exports.default = _react2.default.memo(Switch);
module.exports = exports['default'];