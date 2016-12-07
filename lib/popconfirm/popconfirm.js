'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var popconfirm = function popconfirm() {
    return function (ComposedComponent) {
        var confirm = function confirm(_ref) {
            var content = _ref.content,
                target = _ref.target,
                position = _ref.position,
                onConfirm = _ref.onConfirm,
                onCancel = _ref.onCancel;

            var Ele = _react2.default.createElement(_index2.default, {
                content: content,
                target: target,
                position: position,
                onConfirm: onConfirm,
                onCancel: onCancel
            });
            var container = document.createElement('div');
            document.body.appendChild(container);
            var instance = _reactDom2.default.render(Ele, container);
            instance.setContainer(container);
            instance.show();
        };
        if (!ComposedComponent.prototype.confirm) {
            ComposedComponent.prototype.confirm = confirm;
        }
        return ComposedComponent;
    };
}; /**
    *  一个高阶函数，用于装饰组件给组件提供 confirm 方法。
    *  @popconfirm()
    *  class Component {
    *  	handleConfirm(e) {
    *  		this.confirm({
    *  			content: '确认删除',
    *  			target: e.srcElement,
    *  			position: ['left', 'right', 'top', 'bottom'],
    *  			onConfirm: () => console.log('confirm'),
    *  			onCancel: () => console.log('cancel')
    *  		})
    *  	}
    *  }
    */
exports.default = popconfirm;
module.exports = exports['default'];