'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDropzone = require('react-dropzone');

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Thumb = function Thumb(_ref) {
    var key = _ref.key,
        file = _ref.file;
    return _react2.default.createElement('div', null);
};

var thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16
};

var thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box'
};

var thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
};

var img = {
    display: 'block',
    width: 'auto',
    height: '100%'
};

var baseStyle = {
    width: '100%',
    height: 200,
    borderWidth: 2,
    borderColor: '#666',
    borderStyle: 'dashed',
    borderRadius: 5,
    padding: 10
};

var activeStyle = {
    borderColor: '#6c6',
    backgroundColor: '#eee'
};

var acceptStyle = {
    borderColor: '#00e676'
};

var rejectStyle = {
    borderColor: '#ff1744'
};

var prepareFileUploderOptions = function prepareFileUploderOptions(_ref2, formik, config) {
    var onDrop = _ref2.onDrop,
        onDropAccepted = _ref2.onDropAccepted,
        onDropRejected = _ref2.onDropRejected,
        options = _objectWithoutProperties(_ref2, ['onDrop', 'onDropAccepted', 'onDropRejected']);

    options.onDrop = onDrop ? onDrop.bind(undefined, formik, config) : null;
    options.onDropAccepted = onDropAccepted ? onDropAccepted.bind(undefined, formik, config) : null;
    options.onDropRejected = onDropRejected ? onDropRejected.bind(undefined, formik, config) : null;

    return options;
};

var FileUploader = function FileUploader(_ref3) {
    var config = _ref3.config,
        formik = _ref3.formik,
        value = _ref3.value,
        error = _ref3.error;
    var name = config.name,
        options = config.options,
        placeholder = config.placeholder,
        disabledText = config.disabledText,
        zoneActiveText = config.zoneActiveText,
        _config$hasThumbs = config.hasThumbs,
        hasThumbs = _config$hasThumbs === undefined ? false : _config$hasThumbs;
    var setFieldValue = formik.setFieldValue;

    var selectedValue = value;

    var _useDropzone = (0, _reactDropzone.useDropzone)(_extends({}, prepareFileUploderOptions(_extends({}, options), formik, config))),
        acceptedFiles = _useDropzone.acceptedFiles,
        getRootProps = _useDropzone.getRootProps,
        getInputProps = _useDropzone.getInputProps,
        isDragActive = _useDropzone.isDragActive,
        isDragAccept = _useDropzone.isDragAccept,
        isDragReject = _useDropzone.isDragReject;

    var style = (0, _react.useMemo)(function () {
        return _extends({}, baseStyle, isDragActive ? activeStyle : {}, isDragAccept ? acceptStyle : {}, isDragReject ? rejectStyle : {});
    }, [isDragActive, isDragReject]);

    return _react2.default.createElement(
        'section',
        null,
        _react2.default.createElement(
            'div',
            getRootProps({ style: style }),
            _react2.default.createElement('input', getInputProps()),
            isDragActive ? _react2.default.createElement(
                'p',
                null,
                'Drop the files here ...'
            ) : _react2.default.createElement(
                'p',
                null,
                'Drag \'n\' drop some files here, or click to select files'
            )
        ),
        _react2.default.createElement(
            'aside',
            { style: thumbsContainer },
            value && (hasThumbs ? value.map(function (file) {
                return _react2.default.createElement(
                    'div',
                    { style: thumb, key: file.id },
                    _react2.default.createElement(
                        'div',
                        { style: thumbInner },
                        _react2.default.createElement('img', { src: file.url, alt: file.label, style: img })
                    )
                );
            }) : _react2.default.createElement(
                'ul',
                null,
                value.map(function (file) {
                    return _react2.default.createElement(
                        'li',
                        { key: file.id },
                        file.url
                    );
                })
            ))
        )
    );
};

exports.default = _react2.default.memo(FileUploader);
module.exports = exports['default'];