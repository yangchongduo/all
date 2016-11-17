"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by yixi on 4/7/16.
 */

// const whitespace = '[\\x20\\t\\r\\n\\f]';
// let rtrim = new RegExp('^' + whitespace + '+|((?:^|[^\\\\])(?:\\\\.)*)' + whitespace + '+$', 'g');
// let rnotwhite = /\S+/g;
// let rclass = /[\t\r\n\f]/g;

// let stylePropertyMapping = {
//     float: ('styleFloat' in document.createElement('div').style) ? 'styleFloat' : 'cssFloat'
// };
// const REG_EXP_CAMELIZE = /\-[a-z]/g;
// let camelize = (str) => {
//     return str.replace(REG_EXP_CAMELIZE, (match) => {
//         return match.charAt(1).toUpperCase();
//     });
// };
var isWindow = function isWindow(obj) {
    return obj !== null && obj === obj.window;
};
var getWindow = function getWindow(ele) {
    return isWindow(ele) ? ele : ele.nodeType === 9 && ele.defaultView;
};
// let nodeName = (ele, name) => ele.nodeName && ele.nodeName.toLowerCase() === name.toLowerCase();

exports.default = {
    getOffset: function getOffset(element) {
        var doc = element && element.ownerDocument;
        var box = { top: 0, left: 0 };
        var docElement = void 0;
        var win = void 0;
        if (!doc) {
            return null;
        }
        docElement = doc.documentElement;

        if ((0, _typeof3.default)(element.getBoundingClientRect) !== (typeof undefined === "undefined" ? "undefined" : (0, _typeof3.default)(undefined))) {
            box = element.getBoundingClientRect();
        }

        win = getWindow(doc);

        return {
            top: box.top + win.pageYOffset - docElement.clientTop,
            left: box.left + win.pageXOffset - docElement.clientLeft,
            width: box.width,
            height: box.height
        };
    }
};
module.exports = exports['default'];