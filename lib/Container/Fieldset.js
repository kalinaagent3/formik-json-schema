'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _Element = require('../Element');

var _Element2 = _interopRequireDefault(_Element);

var _utils = require('../utils');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Fieldset = function Fieldset(_ref) {
    var _ref$config = _ref.config,
        _ref$config$name = _ref$config.name,
        containerName = _ref$config$name === undefined ? '' : _ref$config$name,
        title = _ref$config.title,
        elements = _ref$config.elements,
        _ref$config$collapsib = _ref$config.collapsible,
        collapsible = _ref$config$collapsib === undefined ? true : _ref$config$collapsib,
        _ref$config$collapsed = _ref$config.collapsed,
        collapsed = _ref$config$collapsed === undefined ? false : _ref$config$collapsed,
        _ref$config$hasHeader = _ref$config.hasHeaderIcon,
        hasHeaderIcon = _ref$config$hasHeader === undefined ? true : _ref$config$hasHeader,
        comment = _ref$config.comment,
        _ref$config$commentCl = _ref$config.commentClass,
        commentClass = _ref$config$commentCl === undefined ? 'text-muted d-block mb-3' : _ref$config$commentCl,
        _ref$config$headerIco = _ref$config.headerIconClass,
        headerIconClass = _ref$config$headerIco === undefined ? 'fa fa-align-justify' : _ref$config$headerIco,
        _ref$config$cardClass = _ref$config.cardClass,
        cardClass = _ref$config$cardClass === undefined ? 'card flutter-fieldset' : _ref$config$cardClass,
        _ref$config$cardHeade = _ref$config.cardHeaderClass,
        cardHeaderClass = _ref$config$cardHeade === undefined ? 'card-header' : _ref$config$cardHeade,
        _ref$config$cardHeade2 = _ref$config.cardHeaderIconCollapsedClass,
        cardHeaderIconCollapsedClass = _ref$config$cardHeade2 === undefined ? 'fas fa-angle-down' : _ref$config$cardHeade2,
        _ref$config$cardHeade3 = _ref$config.cardHeaderIconDisclosedClass,
        cardHeaderIconDisclosedClass = _ref$config$cardHeade3 === undefined ? 'fas fa-angle-up' : _ref$config$cardHeade3,
        _ref$config$cardHeade4 = _ref$config.cardHeaderActionsClass,
        cardHeaderActionsClass = _ref$config$cardHeade4 === undefined ? 'card-header-actions' : _ref$config$cardHeade4,
        _ref$config$cardBodyC = _ref$config.cardBodyClass,
        cardBodyClass = _ref$config$cardBodyC === undefined ? 'card-body' : _ref$config$cardBodyC;

    var _useState = (0, _react.useState)(collapsible && collapsed),
        isCollapsed = _useState[0],
        setIsCollapsed = _useState[1];

    var toggle = function toggle(event) {
        if (false === collapsible) {
            event.preventDefault();
            return;
        }
        setIsCollapsed(function (isCollapsed) {
            return !isCollapsed;
        });
    };

    return _react2.default.createElement(
        'div',
        { className: cardClass },
        !!title && _react2.default.createElement(
            'div',
            { className: cardHeaderClass, onClick: toggle },
            hasHeaderIcon && _react2.default.createElement('i', { className: headerIconClass }),
            title,
            collapsible && _react2.default.createElement(
                'div',
                { className: cardHeaderActionsClass },
                _react2.default.createElement(
                    'a',
                    { className: 'card-header-action btn btn-minimize' },
                    _react2.default.createElement('i', { className: isCollapsed ? cardHeaderIconCollapsedClass : cardHeaderIconDisclosedClass })
                )
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'collapse ' + (!isCollapsed ? 'show' : '') },
            _react2.default.createElement(
                'div',
                { className: cardBodyClass },
                comment && _react2.default.createElement(
                    'small',
                    { className: commentClass },
                    comment
                ),
                _lodash2.default.map(elements, function (_ref2, key) {
                    var name = _ref2.name,
                        config = _objectWithoutProperties(_ref2, ['name']);

                    return _react2.default.createElement(_Element2.default, {
                        key: key,
                        update: !isCollapsed,
                        config: _extends({}, config, { name: (0, _utils.getName)(config.type, name, containerName) })
                    });
                })
            )
        )
    );
};

Fieldset.propTypes = process.env.NODE_ENV !== "production" ? {
    config: _propTypes2.default.shape({
        name: _propTypes2.default.string,
        title: _propTypes2.default.string,
        elements: _propTypes2.default.object.isRequired,
        cardClass: _propTypes2.default.string,
        cardHeaderClass: _propTypes2.default.string,
        cardHeaderActionsClass: _propTypes2.default.string,
        cardBodyClass: _propTypes2.default.string
    })
} : {};

exports.default = Fieldset;
module.exports = exports['default'];