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

var _shallowequal = require('shallowequal');

var _shallowequal2 = _interopRequireDefault(_shallowequal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var tabPaneInvalid = {
    color: '#dc3545'
};

var tabPaneActiveInvalid = {
    color: '#fff',
    backgroundColor: '#dc3545',
    border: '1px solid #dc3545'
};

var Tabs = function Tabs(_ref) {
    var _ref$config = _ref.config,
        config = _ref$config === undefined ? {} : _ref$config;
    var _config$elements = config.elements,
        elements = _config$elements === undefined ? {} : _config$elements,
        _config$name = config.name,
        containerName = _config$name === undefined ? '' : _config$name,
        _config$cardClass = config.cardClass,
        cardClass = _config$cardClass === undefined ? 'card' : _config$cardClass,
        _config$cardBodyClass = config.cardBodyClass,
        cardBodyClass = _config$cardBodyClass === undefined ? 'card-body' : _config$cardBodyClass,
        _config$rowClass = config.rowClass,
        rowClass = _config$rowClass === undefined ? 'row' : _config$rowClass,
        _config$tabListClass = config.tabListClass,
        tabListClass = _config$tabListClass === undefined ? 'nav flex-column nav-pills' : _config$tabListClass,
        _config$tabListItemCl = config.tabListItemClass,
        tabListItemClass = _config$tabListItemCl === undefined ? 'nav-link' : _config$tabListItemCl,
        _config$tabContentCla = config.tabContentClass,
        tabContentClass = _config$tabContentCla === undefined ? 'tab-content flutter-rjf-tab-content' : _config$tabContentCla,
        _config$tabColumnClas = config.tabColumnClass,
        tabColumnClass = _config$tabColumnClas === undefined ? 'col-sm-12 col-md-3' : _config$tabColumnClas,
        _config$contentColumn = config.contentColumnClass,
        contentColumnClass = _config$contentColumn === undefined ? 'col-sm-12 col-md-9' : _config$contentColumn,
        _config$tabActiveClas = config.tabActiveClass,
        tabActiveClass = _config$tabActiveClas === undefined ? ' active ' : _config$tabActiveClas,
        _config$tabPaneClass = config.tabPaneClass,
        tabPaneClass = _config$tabPaneClass === undefined ? 'tab-pane fade show' : _config$tabPaneClass;

    var tabContentEl = (0, _react.useRef)({});

    var _useState = (0, _react.useState)(_lodash2.default.first(_lodash2.default.keys(elements))),
        activeTab = _useState[0],
        setActiveTab = _useState[1];

    var _useState2 = (0, _react.useState)([]),
        isValid = _useState2[0],
        setIsValid = _useState2[1];

    var _useState3 = (0, _react.useState)({}),
        tabs = _useState3[0],
        setTabs = _useState3[1];

    var _useState4 = (0, _react.useState)({}),
        tabContent = _useState4[0],
        setTabContent = _useState4[1];

    var _useState5 = (0, _react.useState)(_lodash2.default.uniqueId('list-tab-')),
        tabId = _useState5[0];

    var tabValidations = (0, _lodash2.default)(isValid);

    (0, _react.useEffect)(function () {
        _lodash2.default.map(elements, function (tab, key) {
            var label = tab.label,
                content = tab.elements,
                active = tab.active,
                name = tab.name,
                comment = tab.comment,
                commentClass = tab.commentClass;


            setTabs(function (state) {
                var _extends2;

                return _extends({}, state, (_extends2 = {}, _extends2[key] = label, _extends2));
            });

            setTabContent(function (state) {
                var _extends3;

                return _extends({}, state, (_extends3 = {}, _extends3[key] = { name: name, content: content, comment: comment, commentClass: commentClass }, _extends3));
            });

            if (active) {
                setActiveTab(key);
            }
        });
    }, []);

    (0, _react.useEffect)(function () {
        var node = tabContentEl.current;
        var panes = _lodash2.default.map(node.children, function (child) {
            return child.querySelector('.is-invalid') !== null;
        });
        if (!(0, _shallowequal2.default)(isValid, panes)) {
            setIsValid(panes);
        }
    });

    return _react2.default.createElement(
        'div',
        { className: cardClass },
        _react2.default.createElement(
            'div',
            { className: cardBodyClass },
            _react2.default.createElement(
                'div',
                { className: rowClass },
                _react2.default.createElement(
                    'div',
                    { className: tabColumnClass },
                    _react2.default.createElement(
                        'nav',
                        null,
                        _react2.default.createElement(
                            'div',
                            { id: tabId, className: tabListClass },
                            _lodash2.default.map(tabs, function (tab, key) {
                                var tabInvalid = tabValidations.next().value === true;
                                return _react2.default.createElement(
                                    'a',
                                    {
                                        key: key,
                                        href: null,
                                        className: tabListItemClass + (activeTab === key ? tabActiveClass : '') + (tabInvalid ? ' is-invalid ' : ''),
                                        style: tabInvalid ? activeTab === key ? tabPaneActiveInvalid : tabPaneInvalid : null,
                                        onClick: function onClick() {
                                            return setActiveTab(key);
                                        }
                                    },
                                    tab
                                );
                            })
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: contentColumnClass },
                    _react2.default.createElement(
                        'div',
                        { ref: tabContentEl, className: tabContentClass },
                        _lodash2.default.map(tabContent, function (_ref2, tabKey, index) {
                            var _ref2$name = _ref2.name,
                                tabName = _ref2$name === undefined ? '' : _ref2$name,
                                content = _ref2.content,
                                comment = _ref2.comment,
                                _ref2$commentClass = _ref2.commentClass,
                                commentClass = _ref2$commentClass === undefined ? 'text-muted d-block mb-3' : _ref2$commentClass;
                            return _react2.default.createElement(
                                'div',
                                {
                                    key: tabKey,
                                    className: tabPaneClass + ' ' + (activeTab === tabKey ? tabActiveClass : '')
                                },
                                comment && _react2.default.createElement(
                                    'small',
                                    { className: commentClass },
                                    comment
                                ),
                                _lodash2.default.map(content, function (_ref3, key) {
                                    var name = _ref3.name,
                                        rest = _objectWithoutProperties(_ref3, ['name']);

                                    return _react2.default.createElement(_Element2.default, {
                                        key: key,
                                        config: _extends({}, rest, { name: (0, _utils.joinNames)(containerName, tabName, name) }),
                                        update: activeTab === tabKey
                                    });
                                })
                            );
                        })
                    )
                )
            )
        )
    );
};

Tabs.propTypes = process.env.NODE_ENV !== "production" ? {
    config: _propTypes2.default.shape({
        name: _propTypes2.default.string,
        elements: _propTypes2.default.object.isRequired,
        cardClass: _propTypes2.default.string,
        cardBodyClass: _propTypes2.default.string,
        rowClass: _propTypes2.default.string,
        tabListClass: _propTypes2.default.string,
        tabListItemClass: _propTypes2.default.string,
        tabContentClass: _propTypes2.default.string,
        tabColumnClass: _propTypes2.default.string,
        contentColumnClass: _propTypes2.default.string,
        tabActiveClass: _propTypes2.default.string,
        tabPaneClass: _propTypes2.default.string
    })
} : {};

exports.default = Tabs;
module.exports = exports['default'];