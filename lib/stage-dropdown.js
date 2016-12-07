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
 * created by linsong 4/14/2016
 * 多级选择菜单
 * 大家暂时先别用这个组件，这个组件还有很多问题，先暂时把结构放到这里，公台引入要赶紧给销售卖1000个坐席的大单来用，临时用，千万别引到其他地方用，坑了你们别来找我.
 * 目前存在的问题：
 * · 只支持多选
 * · 菜单不能设置最大高度，所以有滚动问题
 * · 菜单只支持两级
 * · 等等等。。。
 */
var stageDropdown = function (_Component) {
    (0, _inherits3.default)(stageDropdown, _Component);
    (0, _createClass3.default)(stageDropdown, [{
        key: 'buildData',
        value: function buildData(data) {
            var selected = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            var newData = _lodash2.default.cloneDeep(data).map(function (d) {
                if (!selected[d.value]) {
                    d.status = 'unChecked';
                    d.children.forEach(function (c) {
                        c.status = 'unChecked';
                    });
                } else {
                    var allChecked = true;
                    var atLeastOne = false;
                    d.children.forEach(function (c) {
                        if (selected[d.value].indexOf(c.value) >= 0) {
                            atLeastOne = true;
                            c.status = 'checked';
                        } else {
                            c.status = 'unChecked';
                            allChecked = false;
                        }
                    });
                    if (atLeastOne) {
                        if (allChecked) {
                            d.status = 'checked';
                        } else {
                            d.status = 'someChecked';
                        }
                    } else {
                        // 一个都没有的话状态就为未选中
                        d.status = 'unChecked';
                    }
                }
                return d;
            });

            return newData;
        }

        // defaultValue and selected
        // {
        //     100: [1 , 2, 3, 4]
        // }

    }]);

    function stageDropdown(props) {
        (0, _classCallCheck3.default)(this, stageDropdown);

        var _this = (0, _possibleConstructorReturn3.default)(this, (stageDropdown.__proto__ || (0, _getPrototypeOf2.default)(stageDropdown)).call(this, props));

        var defaultValue = props.value || props.defaultValue;

        var data = _this.buildData(_lodash2.default.cloneDeep(props.data), props.multi ? defaultValue : {});
        _this.state = {
            isShow: false,
            selected: defaultValue,
            data: data
        };

        _this.mounted = true;

        return _this;
    }

    (0, _createClass3.default)(stageDropdown, [{
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
            return menu;
            // 单选的形式还未实现
            // let selected = {
            //     value: menu.value,
            //     label: menu.label
            // };
            // this.props.onChange(selected);
            // this.setState({selected, isShow: false});
        }
    }, {
        key: 'topMenuSelect',
        value: function topMenuSelect(menu) {
            var data = this.state.data;
            if (menu.status === 'checked' || menu.status === 'someChecked') {
                data.forEach(function (d) {
                    if (d.value === menu.value) {
                        d.status = 'unChecked';
                        d.children.forEach(function (c) {
                            return c.status = 'unChecked';
                        });
                    }
                });
            } else {
                data.forEach(function (d) {
                    if (d.value === menu.value) {
                        d.status = 'checked';
                        d.children.forEach(function (c) {
                            return c.status = 'checked';
                        });
                    }
                });
            }
            this.setState({ data: data });
        }
    }, {
        key: 'subMenuSelect',
        value: function subMenuSelect(menu, parent) {
            var data = this.state.data;
            var parentMenu = data.find(function (d) {
                return d.value === parent.value;
            });
            var subMenu = parentMenu.children.find(function (c) {
                return c.value === menu.value;
            });

            if (menu.status === 'checked') {
                subMenu.status = 'unChecked';
                // 父菜单之前的状态为全选，先清除掉全选状态
                if (parentMenu.status === 'checked') {
                    parentMenu.status = 'someChecked';
                }
                // 检查是否所有的选中状态已经被清理掉 not cheked
                if (!parentMenu.children.find(function (c) {
                    return c.status === 'checked';
                })) {
                    parentMenu.status = 'unChecked';
                }
            } else {
                subMenu.status = 'checked';
                // 父菜单之前的状态为没有被选中，设置成部分选中
                if (parentMenu.status === 'unChecked') {
                    parentMenu.status = 'someChecked';
                }
                // 如果所有被选中，设置成全选状态
                if (!parentMenu.children.find(function (c) {
                    return c.status === 'unChecked';
                })) {
                    parentMenu.status = 'checked';
                }
            }
            this.setState({ data: data });
        }
    }, {
        key: 'multiSetValue',
        value: function multiSetValue() {
            var selected = {};
            this.state.data.forEach(function (d) {
                if (d.status === 'checked' || d.status === 'someChecked') {
                    selected[d.value] = [];
                    d.children.forEach(function (c) {
                        if (c.status === 'checked') {
                            selected[d.value].push(c.value);
                        }
                    });
                }
            });
            this.props.onChange(selected);
            this.setState({
                selected: selected,
                isShow: false
            });
        }
    }, {
        key: '_renderStatus',
        value: function _renderStatus(menuStatus) {
            var status = _react2.default.createElement('input', { type: 'checkbox', checked: false, readOnly: true });
            if (menuStatus === 'someChecked') {
                status = _react2.default.createElement(
                    'span',
                    { className: 'menu-status' },
                    '-'
                );
            } else if (menuStatus === 'checked') {
                status = _react2.default.createElement('input', { type: 'checkbox', checked: true, readOnly: true });
            }
            return status;
        }
    }, {
        key: 'renderOption',
        value: function renderOption(menu, index) {
            // 循环渲染 children
            var subMenu = null;
            if (menu.children) {
                subMenu = this._buildSubMenu(menu);
            }
            if (this.props.multi) {
                var status = this._renderStatus(menu.status);
                return _react2.default.createElement(
                    'li',
                    { key: index },
                    _react2.default.createElement(
                        'a',
                        { onMouseDown: this.topMenuSelect.bind(this, menu) },
                        status,
                        menu.label
                    ),
                    subMenu
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
                ),
                subMenu
            );
        }
    }, {
        key: '_buildMenu',
        value: function _buildMenu(data) {
            var _this2 = this;

            var menuSegment = data.map(function (menu, index) {
                return _this2.renderOption(menu, index);
            });

            if (this.props.multi) {
                return _react2.default.createElement(
                    'div',
                    { className: 'mq-dropdown-menu mq-dropdown-multi meiqia-stage-dropdown-menu' },
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
                { className: 'mq-dropdown-menu meiqia-stage-dropdown-menu' },
                _react2.default.createElement(
                    'ul',
                    null,
                    menuSegment
                )
            );
        }
    }, {
        key: '_buildSubMenu',
        value: function _buildSubMenu(parentMenu) {
            var _this3 = this;

            var data = parentMenu.children;
            var menuSegment = data.map(function (menu, index) {
                return _this3.renderSubOption(parentMenu, menu, index);
            });

            if (this.props.multi) {
                return _react2.default.createElement(
                    'div',
                    { className: 'mq-dropdown-menu mq-dropdown-multi meiqia-stage-dropdown-menu' },
                    _react2.default.createElement(
                        'ul',
                        null,
                        menuSegment
                    )
                );
            }

            return _react2.default.createElement(
                'div',
                { className: 'mq-dropdown-menu meiqia-stage-dropdown-menu' },
                _react2.default.createElement(
                    'ul',
                    null,
                    menuSegment
                )
            );
        }
    }, {
        key: 'renderSubOption',
        value: function renderSubOption(parentMenu, menu, index) {
            if (this.props.multi) {
                var status = this._renderStatus(menu.status);
                return _react2.default.createElement(
                    'li',
                    { key: index },
                    _react2.default.createElement(
                        'a',
                        { onMouseDown: this.subMenuSelect.bind(this, menu, parentMenu) },
                        status,
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
            this.setState({
                isShow: !this.state.isShow
            });
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
                zIndex: 999999,
                position: 'absolute',
                top: offset.top + 10,
                left: offset.left + 10
            };

            _reactDom2.default.render(_react2.default.createElement(
                'div',
                { style: style },
                this._buildMenu(this.state.data, 'top')
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
            var _this4 = this;

            var dropDownClass = 'mq-dropdown';
            if (/btn-block/.test(this.props.btnClass)) {
                dropDownClass = 'mq-dropdown dropdown-block';
            }

            var icon = 'icon-dropdown';
            var showText = this.props.placeholder;

            if (this.props.multi) {
                (function () {
                    icon = 'icon-filter-down';
                    var texts = [];
                    // console.log(JSON.stringify(this.state.selected));

                    var _loop = function _loop(i) {
                        // 被选中的 data 列表, 第二级的 value 值
                        var _sd = _this4.state.selected[i];
                        // 原始的一级数据
                        var d = _this4.state.data.find(function (_d) {
                            return _d.value.toString() === i.toString();
                        });
                        if (d) {
                            _sd.forEach(function (_sc) {
                                var c = d.children.find(function (c) {
                                    return c.value.toString() === _sc.toString();
                                });
                                // 找出的第二层数据
                                if (c) {
                                    texts.push(c.label);
                                }
                            });
                        }
                    };

                    for (var i in _this4.state.selected) {
                        _loop(i);
                    }
                    if (texts.length > 0) {
                        showText = texts.join('，');
                    }
                })();
            }

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
    return stageDropdown;
}(_react.Component);

stageDropdown.propTypes = {
    placeholder: _react.PropTypes.string,
    data: _react.PropTypes.array,
    value: _react.PropTypes.object,
    onChange: _react.PropTypes.func,
    defaultValue: _react.PropTypes.object,
    btnClass: _react.PropTypes.string,
    multi: _react.PropTypes.bool,
    children: _react.PropTypes.node
};
stageDropdown.defaultProps = {
    placeholder: '请选择',
    data: [],
    defaultValue: {},
    onChange: function onChange() {
        return null;
    }
};
exports.default = stageDropdown;
module.exports = exports['default'];