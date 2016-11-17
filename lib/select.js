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
 * Created by yixi on 6/27/16.
 */
var select = function (_Component) {
    (0, _inherits3.default)(select, _Component);
    (0, _createClass3.default)(select, [{
        key: 'buildData',
        value: function buildData(orignalData, select, isMulti) {
            var _this2 = this;

            /*建立值hash*/
            var data = _lodash2.default.cloneDeep(orignalData);
            this.dataHash = {};
            var loop = function loop(_data, _p) {
                _data.forEach(function (d) {
                    d.checked = select && select.indexOf ? select.indexOf(d.value) > -1 : false;
                    d.parent = _p;
                    _this2.dataHash[d.value] = d;
                    if (d.children) {
                        loop(d.children, d);
                    }
                });
            };

            loop(data, null);

            if (isMulti) {
                this.buildInitCheck(data, select);
            }

            return data;
        }
    }, {
        key: 'buildInitCheck',
        value: function buildInitCheck(data) {
            var _this3 = this;

            var loop = function loop(_data) {
                _data.forEach(function (_d) {
                    if (_d.checked) {
                        _this3.checkAllChildren(_d, true);
                    } else {
                        if (_d.children) {
                            loop(_d.children);
                        }
                    }
                });
            };

            loop(data);
        }
    }, {
        key: 'checkAllChildren',
        value: function checkAllChildren(data, checked) {
            console.log(data);
            var loop = function loop(_data) {
                _data.forEach(function (_d) {
                    _d.checked = !!checked;
                    if (_d.children) {
                        loop(_d.children);
                    }
                });
            };

            if (data.children) {
                loop(data.children);
            }
        }
    }]);

    function select(props) {
        (0, _classCallCheck3.default)(this, select);

        var _this = (0, _possibleConstructorReturn3.default)(this, (select.__proto__ || (0, _getPrototypeOf2.default)(select)).call(this, props));

        var data = _this.buildData(props.data, props.defaultValue, props.multi);

        _this.state = {
            show: false,
            data: data,
            cursor: [],
            select: props.defaultValue
        };
        return _this;
    }

    (0, _createClass3.default)(select, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.mounted = true;
            document.addEventListener('mousedown', this.handleDocumentClick.bind(this), false);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            if (this.state.show) {
                this._renderMenu();
            } else {
                this._unrenderMenu();
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.value) {
                this.setState({ select: nextProps.value });
            }

            if (nextProps.data) {
                var data = this.buildData(nextProps.data, nextProps.value, nextProps.multi);
                this.setState({ data: data });
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.mounted = false;
            document.removeEventListener('mousedown', this.handleDocumentClick.bind(this), false);
        }
    }, {
        key: 'handleDocumentClick',
        value: function handleDocumentClick(evt) {
            if (this.mounted) {
                if (!_reactDom2.default.findDOMNode(this).contains(evt.target) && this.menu && !this.menu.contains(evt.target)) {
                    this.setState({ show: false });
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
                show: !this.state.show
            });
        }
    }, {
        key: 'setValue',
        value: function setValue(menu) {
            this.setState({
                select: menu.value,
                show: false
            });
            this.props.onChange(menu.value);
        }
    }, {
        key: 'multiSetValueDone',
        value: function multiSetValueDone() {
            var data = this.state.data;
            var value = [];

            //建立最终的值
            var loop = function loop(_data) {
                _data.forEach(function (_d) {
                    if (_d.checked) {
                        if (_d.value !== undefined) {
                            //这里做一个 如果 gruop 有 value 的话, 就直接返回 group 的value 就不向下查找了。
                            value.push(_d.value);
                        } else if (_d.children) {
                            loop(_d.children);
                        }
                    } else {
                        if (_d.children) {
                            loop(_d.children);
                        }
                    }
                });
            };

            loop(data);

            this.setState({
                select: value,
                show: false
            });

            this.props.onChange(value);
        }
    }, {
        key: 'onMenuOver',
        value: function onMenuOver(value, cursorIndex) {
            var cursor = this.state.cursor;
            cursor = cursor.slice(0, cursorIndex + 1);
            cursor[cursorIndex] = value;
            this.setState({ cursor: cursor });
        }
    }, {
        key: 'multiSetValue',
        value: function multiSetValue(menu) {
            console.log(menu);
            menu.checked = !menu.checked;

            this.checkAllChildren(menu, menu.checked); //向下check
            this.checkParent(menu); //向上查找

            this.setState({ data: this.state.data });
        }
    }, {
        key: 'checkParent',
        value: function checkParent(menu) {
            var _this4 = this;

            var loop = function loop(_menu) {
                _menu.checked = _menu.children.every(function (m) {
                    return m.checked;
                });

                var inputEle = _this4.menu.querySelector('input[name="' + _menu.value + '"]');
                if (inputEle) {
                    inputEle.indeterminate = false;
                }

                if (!_menu.checked && _menu.children.some(function (m) {
                    return m.checked;
                }) && inputEle) {
                    //set indeterminate;
                    inputEle.indeterminate = true;
                }

                if (_menu.parent) {
                    loop(_menu.parent);
                }
            };

            if (menu.parent) {
                loop(menu.parent);
            }
        }
    }, {
        key: '_buildMenu',
        value: function _buildMenu(array, cursorIndex) {
            var _this5 = this;

            var menuSegment = array.map(function (menu, index) {
                if (_this5.props.multi) {
                    return _react2.default.createElement(
                        'li',
                        { key: menu.value },
                        _react2.default.createElement(
                            'a',
                            { onMouseOver: _this5.onMenuOver.bind(_this5, index, cursorIndex),
                                onMouseDown: _this5.multiSetValue.bind(_this5, menu) },
                            _react2.default.createElement('input', { type: 'checkbox', readOnly: true, checked: menu.checked, name: menu.value }),
                            menu.name,
                            menu.children ? _react2.default.createElement('i', { className: 'icon-15 icon-right nest-menu-icon' }) : ''
                        )
                    );
                }

                return _react2.default.createElement(
                    'li',
                    { key: menu.value },
                    _react2.default.createElement(
                        'a',
                        { onMouseOver: _this5.onMenuOver.bind(_this5, index, cursorIndex),
                            onMouseDown: _this5.setValue.bind(_this5, menu) },
                        menu.name,
                        menu.children ? _react2.default.createElement('i', { className: 'icon-15 icon-right nest-menu-icon' }) : ''
                    )
                );
            });

            if (this.props.multi && cursorIndex === 0) {
                return _react2.default.createElement(
                    'div',
                    { className: 'mq-dropdown-menu mq-dropdown-multi' },
                    _react2.default.createElement(
                        'ul',
                        { className: 'mq-dropdown-menu-root' },
                        menuSegment
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'mq-dropdown-action' },
                        _react2.default.createElement(
                            'button',
                            { className: 'mq-btn btn-block', onClick: this.multiSetValueDone.bind(this) },
                            '\u9009\u597D\u4E86'
                        )
                    )
                );
            }

            return _react2.default.createElement(
                'div',
                { className: 'mq-dropdown-menu' + (this.props.multi ? ' mq-dropdown-multi' : '') },
                _react2.default.createElement(
                    'ul',
                    null,
                    menuSegment
                )
            );
        }
    }, {
        key: '_renderMenu',
        value: function _renderMenu() {
            var _this6 = this;

            var offset = _helper2.default.getOffset(this.refs['mq-select']);

            if (!this.menu) {
                this.menu = document.createElement('div');
                document.body.appendChild(this.menu);
                this.menu.className = 'mq-popup-portal ' + this.props.cls;
            }

            var rootStyle = {
                position: 'absolute',
                // top: offset.top + 10,
                left: offset.left + 10
            };

            if (this.props.position === 'bottom') {
                rootStyle.top = offset.top + 10;
            } else {
                rootStyle.visibility = 'hidden';
            }

            var menu = [_react2.default.createElement(
                'div',
                { style: rootStyle, key: 'root', className: 'mq-dropdown-menu-wrapper' },
                this._buildMenu(this.state.data, 0)
            )];

            var cursor = this.state.cursor;
            var i = 0;
            var recursiveData = function recursiveData(lastData) {
                var currentData = lastData[cursor[i]].children;
                if (currentData) {
                    menu.push(_react2.default.createElement(
                        'div',
                        { key: i, className: 'mq-dropdown-menu-wrapper', style: { visibility: 'hidden' } },
                        _this6._buildMenu(currentData, i + 1)
                    ));

                    if (cursor[++i]) {
                        recursiveData(currentData);
                    }
                }
            };

            if (cursor[0] !== undefined) {
                recursiveData(this.state.data);
            }

            _reactDom2.default.render(_react2.default.createElement(
                'div',
                null,
                menu
            ), this.menu);

            setTimeout(this._setMenuOffset.bind(this), 100);
        }
    }, {
        key: '_setMenuOffset',
        value: function _setMenuOffset() {
            var _this7 = this;

            var cursor = this.state.cursor;
            var i = 0;

            var rootMenu = this.menu.querySelectorAll('.mq-dropdown-menu-wrapper')[0];
            if (rootMenu && this.props.position === 'top') {
                var selectOffset = _helper2.default.getOffset(this.refs['mq-select']);
                var menuOffset = _helper2.default.getOffset(rootMenu);

                rootMenu.style.top = selectOffset.top - menuOffset.height + 20 + 'px';
                rootMenu.style.visibility = '';
            }

            var recursiveOffset = function recursiveOffset(element) {
                var selectElement = element.querySelectorAll('li')[cursor[i]];
                var nextElement = _this7.menu.querySelectorAll('.mq-dropdown-menu-wrapper')[i + 1];

                if (selectElement && nextElement) {
                    var offset = _helper2.default.getOffset(selectElement);

                    nextElement.style.position = 'absolute';
                    nextElement.style.top = offset.top + 'px';
                    nextElement.style.left = offset.width + offset.left - 10 + 'px';
                    nextElement.style.visibility = '';
                }

                if (cursor[++i]) {
                    recursiveOffset(nextElement);
                }
            };

            if (cursor[0] !== undefined && this.menu) {
                recursiveOffset(this.menu.querySelector('.mq-dropdown-menu-wrapper'));
            }

            this._setIndeterminate();
        }
    }, {
        key: '_setIndeterminate',
        value: function _setIndeterminate() {
            var _this8 = this;

            var loop = function loop(_data) {
                _data.forEach(function (_d) {
                    if (!_d.checked && _d.children && _d.children.some(function (m) {
                        return m.checked;
                    })) {
                        var inputEle = _this8.menu.querySelector('input[name="' + _d.value + '"]');
                        if (inputEle) {
                            inputEle.indeterminate = true;
                        }
                    }
                });
            };

            if (this.props.multi) {
                var data = this.state.data;
                loop(data);
            }
        }
    }, {
        key: '_unrenderMenu',
        value: function _unrenderMenu() {
            if (this.menu) {
                _reactDom2.default.unmountComponentAtNode(this.menu);
                document.body.removeChild(this.menu);
                this.menu = null;
                this.setState({ cursor: [] });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this9 = this;

            var dropDownClass = 'mq-dropdown';
            if (/btn-block/.test(this.props.btnClass)) {
                dropDownClass = 'mq-dropdown dropdown-block';
            }

            var icon = 'icon-dropdown';

            var showText = void 0;
            if (this.state.select) {

                showText = _lodash2.default.isArray(this.state.select) ? this.state.select.map(function (s) {
                    return _this9.dataHash[s] ? _this9.dataHash[s].name : '';
                }).join(',') || this.props.placeholder : (this.dataHash[this.state.select] ? this.dataHash[this.state.select].name : null) || this.props.placeholder;
            } else {
                showText = this.props.placeholder;
            }

            var buttonClass = 'mq-btn mq-btn-dropdown-button ' + this.props.btnClass + ' ' + (this.state.select ? '' : 'empty');

            return _react2.default.createElement(
                'div',
                { className: dropDownClass, ref: 'mq-select' },
                this.props.children ? _react2.default.cloneElement(this.props.children, { onMouseDown: this.handleMouseDown.bind(this) }) : _react2.default.createElement(
                    'button',
                    { className: buttonClass, onMouseDown: this.handleMouseDown.bind(this) },
                    showText,
                    _react2.default.createElement('i', { className: 'icon-15 ' + icon + ' icon-dropdown-button' })
                )
            );
        }
    }]);
    return select;
}(_react.Component);

select.propTypes = {
    placeholder: _react.PropTypes.string,
    data: _react.PropTypes.array,
    defaultValue: _react.PropTypes.any,
    value: _react.PropTypes.any,
    onChange: _react.PropTypes.func,
    btnClass: _react.PropTypes.string,
    multi: _react.PropTypes.bool,
    children: _react.PropTypes.any,
    position: _react.PropTypes.string,
    cls: _react.PropTypes.string
};
select.defaultProps = {
    placeholder: '请选择',
    position: 'bottom',
    data: [],
    onChange: function onChange() {
        return null;
    },
    select: null,
    cls: ''
};
exports.default = select;
module.exports = exports['default'];