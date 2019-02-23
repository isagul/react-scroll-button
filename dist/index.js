'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _src = require('../example/src');

var _fontawesomeSvgCore = require('@fortawesome/fontawesome-svg-core');

var _freeSolidSvgIcons = require('@fortawesome/free-solid-svg-icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_fontawesomeSvgCore.library.add(_freeSolidSvgIcons.faArrowUp, _freeSolidSvgIcons.faChevronUp, _freeSolidSvgIcons.faAngleUp);

_reactDom2.default.render(_react2.default.createElement(_src.Example, null), document.getElementById('root'));