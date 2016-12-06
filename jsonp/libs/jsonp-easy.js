(function () {
    this.jsonp = function (url, data, jsonpcallback, callback) {
        var cbName = 'cb' + counter++;
        var callbackName = 'window.jsonp.' + cbName;
        window.jsonp[cbName] = function (data) {
            try {
                callback(data);
            } finally {
                script.parentNode.removeChild(script);
                delete window.jsonp[cbName];
            }
        };
        var src = tools.padStringToURL(url, data);
        src = tools.padStringToURL(src, jsonpcallback + '=' + callbackName);
        var script = document.createElement('script');
        script.async = 'async';
        script.type = 'text/javascript';
        script.src = src;
        document.documentElement.appendChild(script);
    };
    var counter = 1;
    var tools = {
        padStringToURL: function (url, param) {
            param = this.encodeToURIString(param);
            if (!param) {
                return url;
            }
            return url + (/\?/.test(url) ? '&' : '?') + param;//如果有?说明前边已经有参数   没有?的话就添上?
        },
        encodeToURIString: function (data) {//将发送的数据拼接成url
            var arr = [];
            for (var n in data) {
                if (!data.hasOwnProperty(n)) continue;
                arr.push(encodeURIComponent(n) + '=' + encodeURIComponent(data[n]));
            }
            return arr.join('&');
        }
    }
})();