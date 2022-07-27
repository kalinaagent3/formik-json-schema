'use strict';

exports.__esModule = true;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Element = require('../Element');

var _Element2 = _interopRequireDefault(_Element);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonGroup = function ButtonGroup(_ref) {
    var _ref$config = _ref.config,
        elements = _ref$config.elements,
        _ref$config$buttonsCo = _ref$config.buttonsContainerClass,
        buttonsContainerClass = _ref$config$buttonsCo === undefined ? 'buttons-container' : _ref$config$buttonsCo,
        _ref$config$buttonGro = _ref$config.buttonGroupClass,
        buttonGroupClass = _ref$config$buttonGro === undefined ? 'btn-group' : _ref$config$buttonGro;
    return _react2.default.createElement(
        'div',
        { className: buttonsContainerClass },
        _react2.default.createElement(
            'div',
            { className: buttonGroupClass },
            _lodash2.default.map(elements, function (element, key) {
                return _react2.default.createElement(_Element2.default, { key: key, config: element });
            })
        )
    );
};

ButtonGroup.propTypes = process.env.NODE_ENV !== "production" ? {
    config: _propTypes2.default.shape({
        buttonsContainerClass: _propTypes2.default.string,
        buttonGroupClass: _propTypes2.default.string,
        elements: _propTypes2.default.object.isRequired
    })
} : {};

exports.default = ButtonGroup;
module.exports = exports['default'];