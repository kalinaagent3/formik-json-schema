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

var _formik = require('formik');

var _utils = require('../utils');

var _reactSortableHoc = require('react-sortable-hoc');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var onSortEnd = function onSortEnd(move, _ref) {
    var oldIndex = _ref.oldIndex,
        newIndex = _ref.newIndex;
    return move(oldIndex, newIndex);
};
var SortableItem = (0, _reactSortableHoc.SortableElement)(function (props) {
    return renderTableRow(props);
});
var SortableTableBody = (0, _reactSortableHoc.SortableContainer)(function (props) {
    return renderTableBody(props);
});
var SortableRowHandle = (0, _reactSortableHoc.SortableHandle)(function (props) {
    return renderSortableHandle(props);
});

var renderTableBody = function renderTableBody(_ref2) {
    var _ref2$isObject = _ref2.isObject,
        isObject = _ref2$isObject === undefined ? false : _ref2$isObject,
        isSortable = _ref2.isSortable,
        hasValue = _ref2.hasValue,
        arrayValues = _ref2.arrayValues,
        rowProps = _objectWithoutProperties(_ref2, ['isObject', 'isSortable', 'hasValue', 'arrayValues']);

    return _react2.default.createElement(
        'tbody',
        null,
        hasValue ? _lodash2.default.map(arrayValues, function (value, index) {
            return isObject === false && isSortable ? _react2.default.createElement(SortableItem, _extends({ key: index, index: index, rowIndex: index, value: value, isSortable: isSortable }, rowProps)) : renderTableRow(_extends({}, rowProps, { index: index, rowIndex: index, value: value, isObject: isObject }));
        }) : null
    );
};

var renderTableRow = function renderTableRow(_ref3) {
    var fieldArrayName = _ref3.fieldArrayName,
        elements = _ref3.elements,
        arrayActions = _ref3.arrayActions,
        rowIndex = _ref3.rowIndex,
        buttons = _ref3.buttons,
        isSortable = _ref3.isSortable,
        _ref3$value = _ref3.value,
        value = _ref3$value === undefined ? {} : _ref3$value,
        _ref3$isObject = _ref3.isObject,
        isObject = _ref3$isObject === undefined ? false : _ref3$isObject;
    return _react2.default.createElement(
        'tr',
        { key: rowIndex },
        isObject === false && isSortable && _react2.default.createElement(SortableRowHandle, null),
        _lodash2.default.map(elements, function (_ref4, key) {
            var name = _ref4.name,
                label = _ref4.label,
                rest = _objectWithoutProperties(_ref4, ['name', 'label']);

            return _react2.default.createElement(
                'td',
                { key: key },
                _react2.default.createElement(_Element2.default, { config: _extends({}, rest, { name: (0, _utils.joinNames)(fieldArrayName, rowIndex, name) }) })
            );
        }),
        isObject === false && !!buttons && _react2.default.createElement(
            'td',
            { style: { minWidth: 50 } },
            !!buttons.remove && (_lodash2.default.isFunction(buttons.remove) ? buttons.remove(arrayActions, rowIndex, value) : _react2.default.createElement(
                'button',
                {
                    type: 'button',
                    className: 'btn remove',
                    onClick: arrayActions.remove.bind(undefined, rowIndex) },
                buttons.remove
            )),
            !!buttons.duplicate && (_lodash2.default.isFunction(buttons.duplicate) ? buttons.duplicate(arrayActions, value, rowIndex) : _react2.default.createElement(
                'button',
                {
                    type: 'button',
                    className: 'btn duplicate',
                    onClick: arrayActions.push.bind(undefined, value) },
                buttons.duplicate
            ))
        )
    );
};

var renderSortableHandle = function renderSortableHandle(props) {
    return _react2.default.createElement(
        'td',
        null,
        _react2.default.createElement('i', { className: 'fas fa-grip-vertical' })
    );
};

var EditableGrid = function EditableGrid(_ref5) {
    var _ref5$config = _ref5.config,
        fieldArrayName = _ref5$config.name,
        _ref5$config$isObject = _ref5$config.isObject,
        isObject = _ref5$config$isObject === undefined ? false : _ref5$config$isObject,
        elements = _ref5$config.elements,
        buttons = _ref5$config.buttons,
        _ref5$config$isSortab = _ref5$config.isSortable,
        isSortable = _ref5$config$isSortab === undefined ? true : _ref5$config$isSortab,
        comment = _ref5$config.comment,
        _ref5$config$commentC = _ref5$config.commentClass,
        commentClass = _ref5$config$commentC === undefined ? 'text-muted d-block mb-3' : _ref5$config$commentC,
        _ref5$config$tableCon = _ref5$config.tableContainerClass,
        tableContainerClass = _ref5$config$tableCon === undefined ? 'table-responsive' : _ref5$config$tableCon,
        _ref5$config$tableCla = _ref5$config.tableClass,
        tableClass = _ref5$config$tableCla === undefined ? 'table table-bordered flutter-editable-grid' : _ref5$config$tableCla,
        formik = _ref5.formik;
    var values = formik.values,
        errors = formik.errors,
        touched = formik.touched;

    var arrayFields = _lodash2.default.mapValues(_lodash2.default.assign({}, elements), function () {
        return '';
    });
    var arrayValues = _lodash2.default.get(values, fieldArrayName);
    var hasValue = _lodash2.default.size(arrayValues) > 0;
    var tableWidth = _lodash2.default.map(elements, 'width').reduce(function (sum, num) {
        return sum + num;
    }, 50) || '100%';
    var additionalColumnCount = isSortable ? 2 : 1;

    return _react2.default.createElement(_formik.FieldArray, {
        name: fieldArrayName,
        render: function render(arrayActions) {
            var bodyProps = {
                arrayValues: arrayValues, hasValue: hasValue, elements: elements, fieldArrayName: fieldArrayName, arrayActions: arrayActions, buttons: buttons, isSortable: isSortable, isObject: isObject
            };

            return _react2.default.createElement(
                'div',
                { className: tableContainerClass },
                comment && _react2.default.createElement(
                    'small',
                    { className: commentClass },
                    comment
                ),
                _react2.default.createElement(
                    'table',
                    { className: tableClass, style: { width: tableWidth } },
                    _react2.default.createElement(
                        'thead',
                        null,
                        _react2.default.createElement(
                            'tr',
                            null,
                            isObject === false && isSortable && _react2.default.createElement('th', null),
                            _lodash2.default.map(elements, function (_ref6, key) {
                                var label = _ref6.label,
                                    width = _ref6.width;
                                return _react2.default.createElement(
                                    'th',
                                    { key: key, style: { width: width } },
                                    label
                                );
                            }),
                            isObject === false && !!buttons && !!buttons.remove && _react2.default.createElement('th', null)
                        )
                    ),
                    isObject === false && isSortable ? _react2.default.createElement(SortableTableBody, _extends({
                        distance: 10,
                        onSortEnd: onSortEnd.bind(undefined, arrayActions.move),
                        useDragHandle: true
                    }, bodyProps)) : renderTableBody(bodyProps),
                    _react2.default.createElement(
                        'tfoot',
                        null,
                        _react2.default.createElement(
                            'tr',
                            null,
                            isObject === false && !!buttons && !!buttons.add && _react2.default.createElement(
                                'td',
                                { colSpan: _lodash2.default.size(elements) + additionalColumnCount },
                                _lodash2.default.isFunction(buttons.add) ? buttons.add(arrayActions, arrayFields) : _react2.default.createElement(
                                    'button',
                                    {
                                        type: 'button',
                                        className: 'btn btn-secondary',
                                        onClick: arrayActions.push.bind(undefined, arrayFields) },
                                    buttons.add
                                )
                            )
                        )
                    )
                )
            );
        } });
};

EditableGrid.propTypes = process.env.NODE_ENV !== "production" ? {
    config: _propTypes2.default.shape({
        name: _propTypes2.default.string.isRequired,
        elements: _propTypes2.default.object.isRequired,
        buttons: _propTypes2.default.exact({
            add: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
            remove: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
            duplicate: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func])
        }),
        isSortable: _propTypes2.default.bool,
        tableContainerClass: _propTypes2.default.string,
        tableClass: _propTypes2.default.string
    })
} : {};

exports.default = EditableGrid;
module.exports = exports['default'];