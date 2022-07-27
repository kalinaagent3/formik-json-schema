'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Element = require('../Element');

var _Element2 = _interopRequireDefault(_Element);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var HtmlTag = function HtmlTag(_ref) {
    var _ref$config = _ref.config,
        _ref$config$name = _ref$config.name,
        containerName = _ref$config$name === undefined ? '' : _ref$config$name,
        _ref$config$as = _ref$config.as,
        Component = _ref$config$as === undefined ? 'div' : _ref$config$as,
        elements = _ref$config.elements,
        htmlClass = _ref$config.htmlClass,
        comment = _ref$config.comment,
        _ref$config$commentCl = _ref$config.commentClass,
        commentClass = _ref$config$commentCl === undefined ? 'text-muted d-block mb-3' : _ref$config$commentCl;
    return _react2.default.createElement(
        Component,
        { className: htmlClass },
        comment && _react2.default.createElement(
            'small',
            { className: commentClass },
            comment
        ),
        _lodash2.default.map(elements, function (_ref2, key) {
            var name = _ref2.name,
                rest = _objectWithoutProperties(_ref2, ['name']);

            return _react2.default.createElement(_Element2.default, {
                key: key,
                config: _extends({}, rest, { name: (0, _utils.joinNames)(containerName, name) })
            });
        })
    );
};

HtmlTag.propTypes = process.env.NODE_ENV !== "production" ? {
    config: _propTypes2.default.shape({
        name: _propTypes2.default.string,
        elements: _propTypes2.default.object.isRequired,
        htmlClass: _propTypes2.default.string
    })
} : {};

exports.default = HtmlTag;
module.exports = exports['default'];