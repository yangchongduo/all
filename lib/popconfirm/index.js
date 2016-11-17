'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _helper = require('../_helper');

var _helper2 = _interopRequireDefault(_helper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Popconfirm = function (_Component) {
    (0, _inherits3.default)(Popconfirm, _Component);

    function Popconfirm(props) {
        (0, _classCallCheck3.default)(this, Popconfirm);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Popconfirm.__proto__ || (0, _getPrototypeOf2.default)(Popconfirm)).call(this, props));

        _this.state = {
            top: 0,
            left: 0
        };
        return _this;
    }

    (0, _createClass3.default)(Popconfirm, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var handleDocumentClick = function handleDocumentClick(e) {
                if (!_reactDom2.default.findDOMNode(_this2.refs.root).contains(e.target)) {
                    apply(_this2, _this2.props.onCancel, _this2.close);
                    return;
                }
            };
            this.handleDocumentClick = handleDocumentClick.bind(this);
            document.addEventListener('mousedown', this.handleDocumentClick, false);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            document.removeEventListener('mousedown', this.handleDocumentClick, false);
        }
    }, {
        key: 'setContainer',
        value: function setContainer(container) {
            this.container = container;
        }
    }, {
        key: 'close',
        value: function close() {
            if (this.container) {
                _reactDom2.default.unmountComponentAtNode(this.container);
                document.body.removeChild(this.container);
                this.container = null;
            }
        }
    }, {
        key: 'show',
        value: function show() {
            var _props = this.props,
                target = _props.target,
                position = _props.position;

            var offset = _helper2.default.getOffset(target);
            var ele = _reactDom2.default.findDOMNode(this.refs.root);
            var eleOffset = _helper2.default.getOffset(ele);
            if (offset && eleOffset) {
                var _state = this.state,
                    top = _state.top,
                    left = _state.left;

                var _getOffset = getOffset(offset, eleOffset, position),
                    _top = _getOffset._top,
                    _left = _getOffset._left;

                if (top !== _top || left !== _left) {
                    this.setState({
                        left: _left,
                        top: _top
                    });
                }
            }
        }
    }, {
        key: 'getPosition',
        value: function getPosition() {
            return {
                left: this.state.left + 'px',
                top: this.state.top + 'px'
            };
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var content = this.props.content;

            return _react2.default.createElement(
                'div',
                { style: this.getPosition(), ref: 'root', className: 'mq-popconfirm' },
                _react2.default.createElement(
                    'div',
                    null,
                    content
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'button',
                        { onClick: function onClick() {
                                return apply(_this3, _this3.props.onConfirm, _this3.close);
                            }, className: 'mq-btn mq-btn-danger' },
                        '\u786E\u8BA4'
                    ),
                    _react2.default.createElement(
                        'button',
                        { onClick: function onClick() {
                                return apply(_this3, _this3.props.onCancel, _this3.close);
                            }, className: 'mq-btn mq-btn-gray' },
                        '\u53D6\u6D88'
                    )
                )
            );
        }
    }]);
    return Popconfirm;
}(_react.Component);

exports.default = Popconfirm;


Popconfirm.propTypes = {
    content: _react.PropTypes.string.isRequired,
    target: _react.PropTypes.object,
    position: _react.PropTypes.oneOf(['top', 'left', 'right', 'bottom']),
    onConfirm: _react.PropTypes.func,
    onCancel: _react.PropTypes.func
};

Popconfirm.defaultProps = {
    content: '',
    show: false,
    position: 'left'
};

/**
 * offset: 定位元素的 offset
 * eleOffset: 弹出框元素的 offset
 */
var getOffset = function getOffset(offset, eleOffset, position) {
    var _left = 0;
    var _top = 0;
    if (position === 'right') {
        _top = offset.top + offset.height / 2 - eleOffset.height / 2;
        _left = offset.left + offset.width + 10;
    }
    if (position === 'left') {
        _top = offset.top + offset.height / 2 - eleOffset.height / 2;
        _left = offset.left - eleOffset.width - 10;
    }
    if (position === 'top') {
        _top = offset.top - eleOffset.height - 10;
        _left = offset.left + offset.width / 2 - eleOffset.width / 2;
    }
    if (position === 'bottom') {
        _top = offset.top + offset.height + 10;
        _left = offset.left + offset.width / 2 - eleOffset.width / 2;
    }
    return fixedOffset({ _left: _left, _top: _top, eleOffset: eleOffset });
};

var fixedOffset = function fixedOffset(_ref) {
    var _left = _ref._left,
        _top = _ref._top,
        eleOffset = _ref.eleOffset;

    var body = document.documentElement || document.body;
    var bodyRect = body.getBoundingClientRect();
    var maxWidth = bodyRect.width + body.scrollLeft,
        maxHeight = bodyRect.height + body.scrollTop;
    //修复离左边最少 10 个像素

    _left = min(10 + body.scrollLeft)(_left);
    //修复离上面最少 10 个像素
    _top = min(10 + body.scrollTop)(_top);

    // 修复离右边最少 10 个像素
    if (_left + eleOffset.width > maxWidth) {
        _left = maxWidth - eleOffset.width - 10;
    }
    // 修复离底部最少 10 个像素
    if (_top + eleOffset.height > maxHeight) {
        _top = maxHeight - eleOffset.height - 10;
    }
    return {
        _left: _left,
        _top: _top
    };
};

var min = function min(_min) {
    return function (num) {
        return num < _min ? _min : num;
    };
};

var apply = function apply(content) {
    for (var _len = arguments.length, funcs = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        funcs[_key - 1] = arguments[_key];
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = (0, _getIterator3.default)(funcs), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var func = _step.value;

            if (func && typeof func === 'function') {
                func.call(content);
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
};
module.exports = exports['default'];