'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAutosuggest = require('react-autosuggest');

var _reactAutosuggest2 = _interopRequireDefault(_reactAutosuggest);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import '../css/autocomplete.css';

var Autocomplete = (_temp = _class = function (_Component) {
    _inherits(Autocomplete, _Component);

    function Autocomplete(props) {
        _classCallCheck(this, Autocomplete);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        var _this$props$initialSu = _this.props.initialSuggestions,
            initialSuggestions = _this$props$initialSu === undefined ? [] : _this$props$initialSu;

        _this.state = { suggestions: initialSuggestions };
        _this.initOptions();
        return _this;
    }

    Autocomplete.prototype.initOptions = function initOptions() {
        this.prepareCallbacks();
        this.autosuggestOptions = _lodash2.default.assign({ inputProps: {} }, this.props.config.options, this.callbacks);
        this.inputClassName = this.autosuggestOptions.inputProps.className || 'react-autosuggest__input';
    };

    Autocomplete.prototype.prepareCallbacks = function prepareCallbacks() {
        var _this2 = this;

        var _props = this.props,
            formik = _props.formik,
            config = _props.config;

        var stateUpdater = this.setState.bind(this);

        this.callbacks = _lodash2.default.reduce(Autocomplete.autosuggestCallbackKeys, function (callbacks, key) {
            if (_lodash2.default.isFunction(config.options[key])) {
                callbacks[key] = config.options[key].bind(_this2, formik, config, { stateUpdater: stateUpdater });
            }

            return callbacks;
        }, {});
    };

    Autocomplete.prototype.render = function render() {
        var _props2 = this.props,
            config = _props2.config,
            formik = _props2.formik,
            error = _props2.error,
            value = _props2.value;
        var name = config.name;
        var setFieldValue = formik.setFieldValue,
            handleBlur = formik.handleBlur;


        this.autosuggestOptions.inputProps.name = name;
        this.autosuggestOptions.inputProps.value = value || '';
        this.autosuggestOptions.inputProps.onChange = function (event, _ref) {
            var newValue = _ref.newValue,
                method = _ref.method;
            return (0, _utils.changeHandler)((0, _utils.setFieldValueWrapper)(setFieldValue, name), formik, config, newValue);
        };
        this.autosuggestOptions.inputProps.onBlur = handleBlur.bind(this);
        this.autosuggestOptions.inputProps.className = this.inputClassName + (error ? ' is-invalid ' : '');

        return _react2.default.createElement(_reactAutosuggest2.default, _extends({ suggestions: this.state.suggestions }, this.autosuggestOptions));
    };

    return Autocomplete;
}(_react.Component), _class.autosuggestCallbackKeys = ['onSuggestionsFetchRequested', 'onSuggestionsClearRequested', 'getSuggestionValue', 'renderSuggestion', 'onSuggestionSelected', 'onSuggestionHighlighted', 'shouldRenderSuggestions', 'renderSectionTitle', 'getSectionSuggestions', 'renderInputComponent', 'renderSuggestionsContainer'], _temp);
exports.default = _react2.default.memo(Autocomplete);
module.exports = exports['default'];