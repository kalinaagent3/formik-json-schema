'use strict';

var _registry = require('../registry');

var _Text = require('./Text');

var _Text2 = _interopRequireDefault(_Text);

var _Radio = require('./Radio');

var _Radio2 = _interopRequireDefault(_Radio);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _Switch = require('./Switch');

var _Switch2 = _interopRequireDefault(_Switch);

var _Wysiwyg = require('./Wysiwyg');

var _Wysiwyg2 = _interopRequireDefault(_Wysiwyg);

var _Textarea = require('./Textarea');

var _Textarea2 = _interopRequireDefault(_Textarea);

var _Checkbox = require('./Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _InnerText = require('./InnerText');

var _InnerText2 = _interopRequireDefault(_InnerText);

var _CodeEditor = require('./CodeEditor');

var _CodeEditor2 = _interopRequireDefault(_CodeEditor);

var _ReactSelect = require('./ReactSelect');

var _ReactSelect2 = _interopRequireDefault(_ReactSelect);

var _FileUploader = require('./FileUploader');

var _FileUploader2 = _interopRequireDefault(_FileUploader);

var _Autocomplete = require('./Autocomplete');

var _Autocomplete2 = _interopRequireDefault(_Autocomplete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

['text', 'email', 'password', 'number', 'url', 'date'].map(function (type) {
    return (0, _registry.registerField)(type, _Text2.default);
});

(0, _registry.registerField)('radio', _Radio2.default);
(0, _registry.registerField)('button', _Button2.default);
(0, _registry.registerField)('switch', _Switch2.default);
(0, _registry.registerField)('wysiwyg', _Wysiwyg2.default);
(0, _registry.registerField)('textarea', _Textarea2.default);
(0, _registry.registerField)('checkbox', _Checkbox2.default);
(0, _registry.registerField)('inner-text', _InnerText2.default);
(0, _registry.registerField)('code-editor', _CodeEditor2.default);
(0, _registry.registerField)('react-select', _ReactSelect2.default);
(0, _registry.registerField)('autocomplete', _Autocomplete2.default);
(0, _registry.registerField)('file-uploader', _FileUploader2.default);