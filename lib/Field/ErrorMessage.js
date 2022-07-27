'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ErrorMessage = function ErrorMessage(_ref) {
    var name = _ref.name,
        error = _ref.error,
        _ref$className = _ref.className,
        className = _ref$className === undefined ? 'invalid-feedback order-last' : _ref$className,
        _ref$as = _ref.as,
        Component = _ref$as === undefined ? 'div' : _ref$as;
    return error && _react2.default.createElement(
        Component,
        { className: className },
        error
    );
};

exports.default = _react2.default.memo(ErrorMessage);
module.exports = exports['default'];