'use strict';

exports.__esModule = true;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _formik = require('formik');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Error manager component that displays error only when it's right
 *
 * The component sets the global formik submitCount in it's local state for reference
 * The local submit count is used to make sure the error message is not shown on it's initial load
 *
 * The local submitcount will be set to 1 less than the value of submitCount if the form is being
 * submitted when the fields are mounted. This is done so that fields (such as tab fields) that are mounted
 * for the sole purpose of showing error messages correctly, show the error message right during the first load
 *
 * The error message will be visible only after the first touch or first form submission so that
 * form submitted with fields hidden do not show the a message when they show up when a certain condition is
 * satisified, fieldset disclosed, tab opened, editable grid field added etc.
 *
 * @param {string} name
 * @param {object} formik
 * @param {function} children
 */
var ErrorManager = function ErrorManager(_ref) {
  var name = _ref.name,
      children = _ref.children;

  // Set submitCount on initial mount.
  var formik = (0, _formik.useFormikContext)();

  var _useFormikContext = (0, _formik.useFormikContext)(),
      formikSubmitCount = _useFormikContext.submitCount,
      isSubmitting = _useFormikContext.isSubmitting,
      errors = _useFormikContext.errors,
      touched = _useFormikContext.touched;

  var _useState = (0, _react.useState)(isSubmitting ? formikSubmitCount - 1 : formikSubmitCount),
      submitCount = _useState[0];

  var isTouched = _lodash2.default.get(touched, name);
  var errorMessage = _lodash2.default.get(errors, name);
  var error = !_lodash2.default.isEmpty(errorMessage) && (isTouched || formikSubmitCount > submitCount) ? errorMessage : false;

  return children(error);
};

exports.default = ErrorManager;
module.exports = exports['default'];