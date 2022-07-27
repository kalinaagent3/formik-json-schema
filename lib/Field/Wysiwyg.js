'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
// import 'react-quill/dist/quill.snow.css';


var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactQuill = require('react-quill');

var _reactQuill2 = _interopRequireDefault(_reactQuill);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wysiwyg = function Wysiwyg(_ref) {
    var config = _ref.config,
        formik = _ref.formik,
        _ref$value = _ref.value,
        value = _ref$value === undefined ? '' : _ref$value,
        error = _ref.error;

    var _useState = (0, _react.useState)(false),
        showHtml = _useState[0],
        setShowHtml = _useState[1];

    var _useState2 = (0, _react.useState)(''),
        html = _useState2[0],
        setHtml = _useState2[1];

    var name = config.name,
        type = config.type,
        attributes = config.attributes,
        options = config.options,
        rows = config.rows,
        _config$textareaClass = config.textareaClass,
        textareaClass = _config$textareaClass === undefined ? 'form-control' : _config$textareaClass;
    var setFieldValue = formik.setFieldValue,
        handleChange = formik.handleChange,
        handleBlur = formik.handleBlur;

    var toolbarOptions = _lodash2.default.assign({}, options ? options : Wysiwyg.defaultOptions);

    return _react2.default.createElement(
        'div',
        { className: 'row ql-container-wysiwyg ql-container-wysiwyg-' + name },
        _react2.default.createElement(
            'div',
            { className: 'col-md-12 d-flex justify-content-end' },
            _react2.default.createElement(
                'button',
                {
                    type: 'button',
                    className: 'btn btn-primary pull-right',
                    onClick: function onClick() {
                        return setShowHtml(function (showHtml) {
                            return !showHtml;
                        });
                    } },
                showHtml ? 'Show Editor' : 'View Source'
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'col-md-12 ',
                onBlur: function onBlur(event) {
                    return handleBlur(_extends({}, event, {
                        target: _extends({}, event.target, {
                            name: name
                        })
                    }));
                } },
            !showHtml && _react2.default.createElement(_reactQuill2.default, _extends({
                id: name,
                value: value,
                className: error ? ' is-invalid ' : '',
                onChange: _utils.changeHandler.bind(undefined, (0, _utils.setFieldValueWrapper)(setFieldValue, name), formik, config)
            }, toolbarOptions, attributes)),
            showHtml && _react2.default.createElement('textarea', {
                id: 'ql-show-html-' + name,
                name: name,
                className: textareaClass,
                rows: '10',
                value: value,
                onChange: _utils.changeHandler.bind(undefined, handleChange, formik, config)
            })
        )
    );
};

Wysiwyg.defaultOptions = {
    modules: {
        toolbar: [['bold', 'italic', 'underline', 'strike'], // toggled buttons
        ['blockquote', 'code-block'], [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        // [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1' }, { 'indent': '+1' }], // outdent/indent
        // [{ 'direction': 'rtl' }],                         // text direction

        [{ 'size': ['small', false, 'large', 'huge'] }], // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }], [{ 'color': [] }, { 'background': [] }], // dropdown with defaults from theme
        [{ 'font': [] }], [{ 'align': [] }], ['clean']],
        clipboard: {
            matchVisual: false
        }
    },
    formats: ['header', 'font', 'size', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'indent', 'link', 'image', 'video']
};

exports.default = _react2.default.memo(Wysiwyg);
module.exports = exports['default'];