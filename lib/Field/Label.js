'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Label = function Label(_ref) {
  var children = _ref.children,
      attributes = _objectWithoutProperties(_ref, ['children']);

  return children ? _react2.default.createElement(
    'label',
    attributes,
    children
  ) : null;
};

exports.default = _react2.default.memo(Label);
module.exports = exports['default'];