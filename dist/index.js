'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    0% {\n      right: 0px;\n    }\n    100% {\n      right: 2%;\n    }\n'], ['\n    0% {\n      right: 0px;\n    }\n    100% {\n      right: 2%;\n    }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  background-color: ', ';\n  color: ', ';\n  position: fixed;\n  right:0;\n  bottom:0;\n  opacity:0.9;\n  margin-bottom: 2%;\n  border:none;\n  height:35px;\n  width: 35px;\n  border-radius: 50%;\n  cursor: pointer;\n  outline:0;\n  animation: ', ';\n  animation-duration: 1s;\n  animation-iteration-count: 1;\n  animation-fill-mode: forwards;\n'], ['\n  background-color: ', ';\n  color: ', ';\n  position: fixed;\n  right:0;\n  bottom:0;\n  opacity:0.9;\n  margin-bottom: 2%;\n  border:none;\n  height:35px;\n  width: 35px;\n  border-radius: 50%;\n  cursor: pointer;\n  outline:0;\n  animation: ', ';\n  animation-duration: 1s;\n  animation-iteration-count: 1;\n  animation-fill-mode: forwards;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactFontawesome = require('@fortawesome/react-fontawesome');

var _src = require('../example/src');

var _fontawesomeSvgCore = require('@fortawesome/fontawesome-svg-core');

var _freeSolidSvgIcons = require('@fortawesome/free-solid-svg-icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_fontawesomeSvgCore.library.add(_freeSolidSvgIcons.faArrowUp, _freeSolidSvgIcons.faChevronUp, _freeSolidSvgIcons.faAngleUp);

var ScrollButton = function (_Component) {
  _inherits(ScrollButton, _Component);

  function ScrollButton(props) {
    _classCallCheck(this, ScrollButton);

    var _this = _possibleConstructorReturn(this, (ScrollButton.__proto__ || Object.getPrototypeOf(ScrollButton)).call(this, props));

    _this.state = {
      targetId: props.targetId,
      behavior: props.behavior,
      buttonBackgroundColor: props.buttonBackgroundColor,
      buttonColor: props.buttonColor,
      iconType: props.iconType,
      isButtonShow: false
    };

    _this.handleOnScroll = _this.handleOnScroll.bind(_this);
    _this.handleOnPress = _this.handleOnPress.bind(_this);
    return _this;
  }

  _createClass(ScrollButton, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('scroll', this.handleOnScroll);
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      window.removeEventListener('scroll', this.handleOnScroll);
    }
  }, {
    key: 'handleOnScroll',
    value: function handleOnScroll() {
      var isButtonShow = this.state.isButtonShow;


      if (!isButtonShow) {
        if (window.scrollY > 90) {
          this.setState({
            isButtonShow: true
          });
        }
      } else {
        if (window.scrollY < 90) {
          this.setState({
            isButtonShow: false
          });
        }
      }
    }
  }, {
    key: 'handleOnPress',
    value: function handleOnPress() {
      var _state = this.state,
          targetId = _state.targetId,
          behavior = _state.behavior;

      if (targetId !== null && targetId !== undefined && targetId.trim().length > 0) {
        var targetDiv = document.getElementById('' + targetId);
        targetDiv.scrollIntoView({ behavior: behavior });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var RenderScrollButton = function RenderScrollButton(_ref) {
        var handleOnPress = _ref.handleOnPress,
            config = _ref.config;
        var isButtonShow = config.isButtonShow;


        return _react2.default.createElement(
          'div',
          null,
          isButtonShow && _react2.default.createElement(
            ButtonDefaultStyle,
            {
              onClick: handleOnPress,
              buttonColor: config.buttonColor,
              buttonBackgrundColor: config.buttonBackgroundColor
            },
            _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: config.iconType })
          )
        );
      };
      return _react2.default.createElement(RenderScrollButton, { config: this.state, handleOnPress: this.handleOnPress });
    }
  }]);

  return ScrollButton;
}(_react.Component);

exports.default = ScrollButton;


var buttonAnimate = (0, _styledComponents.keyframes)(_templateObject);

var ButtonDefaultStyle = _styledComponents2.default.button(_templateObject2, function (props) {
  return props.buttonBackgrundColor;
}, function (props) {
  return props.buttonColor;
}, buttonAnimate);

ScrollButton.propTypes = {
  targetId: _propTypes2.default.string,
  behavior: _propTypes2.default.string,
  buttonBackgroundColor: _propTypes2.default.string,
  buttonColor: _propTypes2.default.string,
  iconType: _propTypes2.default.string
};

ScrollButton.defaultProps = {
  behavior: 'auto',
  buttonBackgroundColor: 'green',
  buttonColor: 'white',
  iconType: 'chevron-up',
  targetId: ''
};