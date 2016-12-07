'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _helper = require('./_helper');

var _helper2 = _interopRequireDefault(_helper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by yixi on 3/30/16.
 */
var dropdown = function (_Component) {
    (0, _inherits3.default)(dropdown, _Component);
    (0, _createClass3.default)(dropdown, [{
        key: 'buildData',
        value: function buildData(data) {
            var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];


            defaultValue.forEach(function (d) {
                if (!d.value) d.value = d.label;
            });

            var _d = defaultValue.map(function (d) {
                return d.value;
            });

            var newData = _lodash2.default.cloneDeep(data).map(function (d) {
                if (!d.value) d.value = d.label;
                d.checked = _d.indexOf(d.value) > -1;
                return d;
            });

            return newData;
        }
    }]);

    function dropdown(props) {
        (0, _classCallCheck3.default)(this, dropdown);

        var _this = (0, _possibleConstructorReturn3.default)(this, (dropdown.__proto__ || (0, _getPrototypeOf2.default)(dropdown)).call(this, props));

        var defaultValue = props.defaultValue;
        if (defaultValue && !defaultValue.value) {
            defaultValue.value = defaultValue.label;
        }

        var data = _this.buildData(_lodash2.default.cloneDeep(props.data), props.multi ? defaultValue : []);

        _this.state = {
            isShow: false,
            selected: defaultValue || {
                label: props.placeholder,
                value: ''
            },
            data: data
        };

        _this.mounted = true;

        return _this;
    }

    (0, _createClass3.default)(dropdown, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            //TODO-yixi: 待组件完成后面的层级问题后再来组织这里重新赋值的逻辑
            if (this.props.multi || newProps.multi) {
                if (newProps.value) {
                    var data = this.buildData(newProps.data, newProps.value);
                    this.setState({ data: data, selected: newProps.value });
                }
            } else {
                if (newProps.value && newProps.value.value !== this.state.selected.value) {
                    var _data = this.buildData(newProps.data);
                    var value = newProps.value;
                    if (!_lodash2.default.isObject(value)) {
                        value = _lodash2.default.find(_data, { value: value });
                    }
                    this.setState({ data: _data, selected: value });
                } else if (newProps.data) {
                    var _data2 = this.buildData(newProps.data);
                    this.setState({ data: _data2 });
                }
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            document.addEventListener('mousedown', this.handleDocumentClick.bind(this), false);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            if (this.state.isShow) {
                this.renderMenu();
            } else {
                this.unrenderMenu();
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.mounted = false;
            document.removeEventListener('mousedown', this.handleDocumentClick.bind(this), false);
        }
    }, {
        key: 'setValue',
        value: function setValue(menu) {
            var selected = {
                value: menu.value,
                label: menu.label
            };
            this.props.onChange(selected);
            this.setState({ selected: selected, isShow: false });
        }
    }, {
        key: 'checkedOption',
        value: function checkedOption(menu) {
            menu.checked = !menu.checked; //利用对象引用改变值, 层级使用方便, 但感觉会玩脱
            this.setState({ data: this.state.data });
        }
    }, {
        key: 'multiSetValue',
        value: function multiSetValue() {
            var selected = this.state.data.filter(function (d) {
                return d.checked;
            });
            this.props.onChange(selected.map(function (s) {
                return { value: s.value, label: s.label };
            }));
            if (selected.length === 0) {
                selected = {
                    label: this.props.placeholder,
                    value: ''
                };
            }
            this.setState({
                selected: selected,
                isShow: false
            });
        }
    }, {
        key: 'renderOption',
        value: function renderOption(menu, index) {

            if (this.props.multi) {
                return _react2.default.createElement(
                    'li',
                    { key: index },
                    _react2.default.createElement(
                        'a',
                        { onMouseDown: this.checkedOption.bind(this, menu) },
                        _react2.default.createElement('input', { type: 'checkbox', checked: menu.checked, readOnly: true }),
                        menu.label
                    )
                );
            }

            return _react2.default.createElement(
                'li',
                { key: index },
                _react2.default.createElement(
                    'a',
                    { onMouseDown: this.setValue.bind(this, menu),
                        onClick: this.setValue.bind(this, menu) },
                    menu.label
                )
            );
        }
    }, {
        key: '_buildMenu',
        value: function _buildMenu() {
            var _this2 = this;

            var menuSegment = this.state.data.map(function (menu, index) {
                return _this2.renderOption(menu, index);
            });

            if (this.props.multi) {
                return _react2.default.createElement(
                    'div',
                    { className: 'mq-dropdown-menu mq-dropdown-multi' },
                    _react2.default.createElement(
                        'ul',
                        null,
                        menuSegment
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'mq-dropdown-action' },
                        _react2.default.createElement(
                            'button',
                            { className: 'mq-btn btn-block', onClick: this.multiSetValue.bind(this) },
                            '\u9009\u597D\u4E86'
                        )
                    )
                );
            }

            return _react2.default.createElement(
                'div',
                { className: 'mq-dropdown-menu' },
                _react2.default.createElement(
                    'ul',
                    null,
                    menuSegment
                )
            );
        }
    }, {
        key: 'handleDocumentClick',
        value: function handleDocumentClick(evt) {
            if (this.mounted) {
                if (!_reactDom2.default.findDOMNode(this).contains(evt.target) && this.menu && !this.menu.contains(evt.target)) {
                    this.setState({ isShow: false });
                }
            }
        }
    }, {
        key: 'handleMouseDown',
        value: function handleMouseDown(evt) {
            if (evt.type === 'mousedown' && evt.button !== 0) {
                return;
            }
            evt.stopPropagation();
            evt.preventDefault();
            // setTimeout(() => {
            this.setState({
                isShow: !this.state.isShow
            });
            // }, 50);
        }
    }, {
        key: 'renderMenu',
        value: function renderMenu() {
            var offset = _helper2.default.getOffset(this.refs['mq-dropdown']);

            if (!this.menu) {
                this.menu = document.createElement('div');
                document.body.appendChild(this.menu);
                this.menu.className = 'mq-popup-portal';
            }

            var style = {
                position: 'absolute',
                top: offset.top + 10,
                left: offset.left + 10
            };

            _reactDom2.default.render(_react2.default.createElement(
                'div',
                { style: style },
                this._buildMenu()
            ), this.menu);
        }
    }, {
        key: 'unrenderMenu',
        value: function unrenderMenu() {
            if (this.menu) {
                _reactDom2.default.unmountComponentAtNode(this.menu);
                document.body.removeChild(this.menu);
                this.menu = null;
            }
        }
    }, {
        key: 'render',
        value: function render() {

            var dropDownClass = 'mq-dropdown';
            if (/btn-block/.test(this.props.btnClass)) {
                dropDownClass = 'mq-dropdown dropdown-block';
            }

            var icon = 'icon-dropdown';

            if (this.props.multi) {
                icon = 'icon-filter-down';
            }

            var showText = Array.isArray(this.state.selected) ? this.state.selected.map(function (l) {
                return l.label;
            }).join(',') : this.state.selected.label;

            var buttonClass = 'mq-btn mq-btn-dropdown-button ' + this.props.btnClass + ' ' + (this.state.selected.value || this.state.selected.length > 0 ? '' : 'empty');

            return _react2.default.createElement(
                'div',
                { className: dropDownClass, ref: 'mq-dropdown' },
                this.props.children ? _react2.default.cloneElement(this.props.children, { onMouseDown: this.handleMouseDown.bind(this) }) : _react2.default.createElement(
                    'button',
                    { className: buttonClass,
                        onMouseDown: this.handleMouseDown.bind(this) },
                    showText,
                    _react2.default.createElement('i', { className: 'icon-15 ' + icon + ' icon-dropdown-button' })
                )
            );
        }
    }]);
    return dropdown;
}(_react.Component);

dropdown.propTypes = {
    placeholder: _react.PropTypes.string,
    data: _react.PropTypes.array,
    onChange: _react.PropTypes.func,
    defaultValue: _react.PropTypes.any,
    btnClass: _react.PropTypes.string,
    multi: _react.PropTypes.bool,
    children: _react.PropTypes.node
};
dropdown.defaultProps = {
    placeholder: '请选择',
    data: [],
    onChange: function onChange() {
        return null;
    }
};
exports.default = dropdown;
module.exports = exports['default'];