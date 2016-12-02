'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createAction;

var _identity = require('lodash/identity');

var _identity2 = _interopRequireDefault(_identity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createAction(type, payloadCreator, metaCreator) {
    var finalPayloadCreator = typeof payloadCreator === 'function' ? payloadCreator : _identity2.default;

    var actionHandler = function actionHandler() {
        var hasError = (arguments.length <= 0 ? undefined : arguments[0]) instanceof Error;

        //这是对象的字面量方式 可以不写
        var action = {
            type: type
        };

        var payload = hasError ? arguments.length <= 0 ? undefined : arguments[0] : finalPayloadCreator.apply(undefined, arguments);
        if (!(payload === null || payload === undefined)) {
            action.payload = payload;
        }

        if (hasError) {
            // Handle FSA errors where the payload is an Error object. Set error.
            action.error = true;
        }

        if (typeof metaCreator === 'function') {
            //如果是一个函数
            action.meta = metaCreator.apply(undefined, arguments);
        }

        return action;
    };

    actionHandler.toString = function () {
        return type.toString();
    };

    return actionHandler;
}
/**
 createAction ()会返回一个函数 但是不执行 actionHandler 当这个actionHandle执行的时候就是为了能够返回一个
 action 这个action是一个对象 action  里面有三个参数
 createAction(type, payloadCreator, metaCreator)
 payloadCreator 必须是promise的对象
 -------------------------------------返回值
 action={
 type:'type',
 payload:payloadCreator-> finalPayloadCreator.apply(undefined, arguments);
 meta:metaCreator.apply(undefined, arguments);
 }
 */