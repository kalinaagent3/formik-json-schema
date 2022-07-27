'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Element = require('../Element');

var _Element2 = _interopRequireDefault(_Element);

var _utils = require('../utils');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _formik = require('formik');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Form = function Form(_ref) {
    var config = _ref.config;
    var _config$name = config.name,
        containerName = _config$name === undefined ? '' : _config$name,
        elements = config.elements,
        _config$htmlClass = config.htmlClass,
        htmlClass = _config$htmlClass === undefined ? 'form-horizontal' : _config$htmlClass,
        comment = config.comment,
        _config$commentClass = config.commentClass,
        commentClass = _config$commentClass === undefined ? 'text-muted d-block mb-3' : _config$commentClass;


    return _react2.default.createElement(
        _formik.Form,
        { className: htmlClass },
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
                config: _extends({}, config, { name: (0, _utils.getName)(config.type, name, containerName) })
            });
        })
    );
};

Form.propTypes = process.env.NODE_ENV !== "production" ? {
    config: _propTypes2.default.shape({
        name: _propTypes2.default.string,
        htmlClass: _propTypes2.default.string,
        elements: _propTypes2.default.object.isRequired
    })
} : {};

exports.default = Form;
module.exports = exports['default'];