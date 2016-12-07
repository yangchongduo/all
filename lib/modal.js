'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by yixi on 4/13/16.
 */
var Modal = function (_Component) {
    (0, _inherits3.default)(Modal, _Component);

    function Modal() {
        (0, _classCallCheck3.default)(this, Modal);
        return (0, _possibleConstructorReturn3.default)(this, (Modal.__proto__ || (0, _getPrototypeOf2.default)(Modal)).apply(this, arguments));
    }

    (0, _createClass3.default)(Modal, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.componentDidUpdate();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            if (this.props.show) {
                this.renderModal();
            } else {
                this.unrenderModal();
            }
        }
    }, {
        key: 'onMaskClick',
        value: function onMaskClick() {
            if (this.props.maskClosable) {
                this.onClose();
            }
        }
    }, {
        key: 'onClose',
        value: function onClose() {
            this.props.onClose();
        }
    }, {
        key: 'renderModal',
        value: function renderModal() {
            var _this2 = this;

            if (!this.modal) {
                this.modal = document.createElement('div');
                document.body.appendChild(this.modal);
                this.modal.className = 'mq-modal-portal';
                this.isShow = true;
            }

            _reactDom2.default.render(_react2.default.createElement(
                'div',
                { className: 'mq-modal-wrapper' },
                _react2.default.createElement('div', { className: 'mq-modal-mask', onClick: this.onMaskClick.bind(this) }),
                _react2.default.createElement(
                    'div',
                    { className: 'mq-modal-dialog' },
                    _react2.default.createElement(
                        'div',
                        { className: 'mq-modal-close', onClick: this.onClose.bind(this) },
                        _react2.default.createElement('i', { className: 'icon-15 icon-close' })
                    ),
                    this.props.children
                )
            ), this.modal);

            setTimeout(function () {
                _this2.modal.className = 'mq-modal-portal mq-after-open';
            }, 50);
        }
    }, {
        key: 'unrenderModal',
        value: function unrenderModal() {
            var _this3 = this;

            if (this.modal && this.isShow) {
                this.modal.className = 'mq-modal-portal';
                this.isShow = false;
                setTimeout(function () {
                    _reactDom2.default.unmountComponentAtNode(_this3.modal);
                    document.body.removeChild(_this3.modal);
                    _this3.modal = null;
                }, 160);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.DOM.noscript();
        }
    }]);
    return Modal;
}(_react.Component);

Modal.propTypes = {
    show: _react.PropTypes.bool,
    children: _react.PropTypes.any,
    onClose: _react.PropTypes.func,
    maskClosable: _react.PropTypes.bool
};
Modal.defaultProps = {
    onClose: function onClose() {
        return null;
    },
    maskClosable: true
};
exports.default = Modal;
module.exports = exports['default'];