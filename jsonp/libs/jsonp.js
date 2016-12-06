(function () {
    /**
     * jsonp请求
     * @param {string} url jsonp地址
     * @param {*} data 发送的数据
     * @param {string} jsonpcallback jsonpcallback
     * @param {Function} callback 回调函数
     */
    this.jsonp = function (url, data, jsonpcallback, callback) {
        // 回调函数名
        var cbName = 'cb' + counter++; //cb1 cb2 cb3
        // 构造全局函数名 放到jsonpcallback后面的
        var callbackName = 'window.jsonp.' + cbName;
        //window.jsonp.cb1
        //window.jsonp.cb2

        // 根据全局函数名 定义一个全局函数
        window.jsonp[cbName] = function (data) {
            try {
                callback(data);
            } finally {
                script.parentNode.removeChild(script);
                delete window.jsonp[cbName];
            }
        };

        // 往url后拼接参数
        var src = tools.padStringToURL(url, data);

        // 往url后拼接jsonpcallback
        src = tools.padStringToURL(src, jsonpcallback + '=' + callbackName);

        // 动态生成script标签并添加到html中
        var script = document.createElement('script');
        script.async = 'async';
        script.type = 'text/javascript';
        script.src = src;

        document.documentElement.appendChild(script);

    };

    // 计数器 每次调用jsonp方法 都累加1
    var counter = 1;

    var tools = {
        padStringToURL: function (url, param) {
            param = this.encodeToURIString(param);
            if (!param) {
                return url;
            }
            return url + (/\?/.test(url) ? '&' : '?') + param;//如果有?说明前边已经有参数   没有?的话就添上?
        },
        encodeToURIString: function (data) {
            if (!data) {
                return '';
            }
            if (typeof data === 'string') {
                return data;
            }
            var arr = [];
            for (var n in data) {
                if (!data.hasOwnProperty(n)) continue;
                arr.push(encodeURIComponent(n) + '=' + encodeURIComponent(data[n]));
            }
            return arr.join('&');
        }
    }
})();