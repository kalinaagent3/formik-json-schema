'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(_ref) {
    var config = _ref.config,
        formik = _ref.formik;
    var content = config.content,
        fieldClass = config.fieldClass,
        buttonType = config.buttonType,
        onClick = config.onClick;
    var isSubmitting = formik.isSubmitting;


    var buttonProps = {
        type: buttonType ? buttonType : 'button',
        className: 'btn ' + fieldClass,
        disabled: isSubmitting
    };

    if (typeof onClick === 'function') {
        buttonProps.onClick = onClick.bind(undefined, formik, config);
    }

    return _react2.default.createElement(
        'button',
        buttonProps,
        content,
        ' ',
        buttonType === 'submit' && isSubmitting && _react2.default.createElement('i', { className: 'fa fa-spinner fa-spin' })
    );
};

exports.default = Button;
module.exports = exports['default'];