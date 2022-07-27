'use strict';

var _registry = require('../registry');

var _HtmlTag = require('./HtmlTag');

var _HtmlTag2 = _interopRequireDefault(_HtmlTag);

var _Form = require('./Form');

var _Form2 = _interopRequireDefault(_Form);

var _Tabs = require('./Tabs');

var _Tabs2 = _interopRequireDefault(_Tabs);

var _Fieldset = require('./Fieldset');

var _Fieldset2 = _interopRequireDefault(_Fieldset);

var _ButtonGroup = require('./ButtonGroup');

var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

var _EditableGrid = require('./EditableGrid');

var _EditableGrid2 = _interopRequireDefault(_EditableGrid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _registry.registerContainer)('div', _HtmlTag2.default);
(0, _registry.registerContainer)('html-tag', _HtmlTag2.default);
(0, _registry.registerContainer)('form', _Form2.default);
(0, _registry.registerContainer)('tabs', _Tabs2.default);
(0, _registry.registerContainer)('fieldset', _Fieldset2.default);
(0, _registry.registerContainer)('button-group', _ButtonGroup2.default);
(0, _registry.registerContainer)('editable-grid', _EditableGrid2.default);