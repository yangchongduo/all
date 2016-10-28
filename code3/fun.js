/**
 * Created by liuxiaolu on 2016/10/22.
 */
var utils = (function () {
    /**
     * @param num 传入的数值
     * @returns {number} 返回最大值
     */
    function maxValue(num) {
        var total = 0;
        if(num<=100){
           total = num % 10 == 0 ? (num+10) : 100;
            return total;
        }
        if(num > 100){
            var curNum = num.toString();
            var curNumLen = curNum.length;
            var middleNum;
            var midInt = "1";
            if(curNumLen % 2==0){
                middleNum = curNumLen / 2 +1;
            }else {
                middleNum = (curNumLen +1 )/2 +1;
            }
            for(var i=0;i<middleNum-1;i++){
                midInt += "0";
            }
            total = Math.ceil(num / parseInt(midInt))*parseInt(midInt);
            total = total == num ? (total+parseInt(midInt)):total;
            return total;
        }
    }

    /**
     *要转化对应的PX
     * @param max  最大数据值
     * @param maxHeight  页面最大高度height
     * @param list  要转化的数据
     * @returns {Array|*} 计算出对应的高度
     */
    function calcRate(max,maxHeight,list) {
        return list.map(function (x) {
            if (x==0){
                return 0;
            }else {
                var num = Math.round(maxHeight/max *x);
                return num==0?1:num;
            }
        })
    }

    /**
     * 将UP和DOWN数据格式一致
     * @param data 数据
     * @param type 标示是UP部分数据或者DOWN部分数据
     * @returns {{}} 返回UP部分数据或者DOWN部分数据
     */
    function drawData(data, type) {
        var keyUp = ["0","1","2","joinShoppingCartUp","shoppingCartPageUp","writeIndentUp","indentSuccessUp"];
        var keyDown = ["allVisit","effectivityVisit","detailsPage","joinShoppingCartDown","shoppingCartPageDown","writeIndentDown","indentSuccessDown"];
        var map = {};
        if (type =="up"){
            for (var key in keyUp){
                map[keyUp[key]] = data[keyUp[key]]?data[keyUp[key]]:0;
            }
        }else {
            for (var key in keyDown){
                map[keyDown[key]] = data[keyDown[key]];
            }
        }
        return map
    }

    /**
     * 相邻的数据之差
     * @param list 总的数据列
     * @returns {Array} 相邻的数据之差
     */
    function lineDiff(list) {
       var li = [];
        for(var i =0;i<list.length-1;i++){
            li.push(list[i]-list[i+1])
        }
        return li;
    }

    /**
     * 数组之和
     * @param ary1 数组 
     * @param ary2 数组
     * @returns {*}
     */
    function addList(ary1,ary2) {
        var curAry = [];
        for(var i=0;i<ary1.length;i++){
            curAry.push(ary1[i]+ary2[i]);
        }
        return curAry
    }
/*function addList(ary1, ary2) {
    var curAry=[];
    curAry=ary1.concat(ary2)
}*/
    /**
     * 数组之差
     * @param ary1 数组
     * @param ary2 数组
     * @returns {*}
     */
    function decreaseList(ary1,ary2) {
        var cur = [];
        var newAry2=ary2.slice(1,ary2.length);
        for(var i=0;i<ary1.length-1;i++){
            var calc = ary1[i]-newAry2[i];
            calc < 0 ? cur.push('--'):cur.push(ary1[i]-newAry2[i]);
        }
        return cur;
    }

    /**
     * 数组之除
     * @param ary1 数组
     * @param ary2 数组
     * @returns {*}
     */
    function divideList(ary1,ary2) {
        var cur = [];
        var newAry2=ary2.slice(1,ary2.length);
        for(var i=0;i<ary1.length-1;i++){
            var curNum;
            curNum = ary1[i]==0?'--':((newAry2[i]/ary1[i])*100).toFixed(2);
            curNum = curNum > 100 ? "--": (curNum==100?curNum.toFixed(0):curNum);
            cur.push(curNum);
        }
        return cur;
    }
    /**
     * 千分符转化
     * @param num  转化的数字
     * @returns {string}  返回满足的
     */
    function toThousands(num) {
        return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
    }

    /**
     * 根据数值背景色变换
     * @param rate 传入的值
     * @returns {*} 返回对应的背景色
     */
    function getClass(rate){
        var tdClass = "colorA";
        if(rate=="--"){
            return "colorG";
        }
        switch (parseInt(rate/10)) {
            case 0:
                if(rate==0){
                    tdClass = "colorG";
                }else{
                    tdClass = "colorA";
                }
                break;
            case 1:
                tdClass = "colorB";
                break;
            case 2:
                tdClass = "colorC";
                break;
            case 3:
                tdClass = "colorD";
                break;
            case 4:
                tdClass = "colorE";
                break;
            default:
                tdClass = "colorF";
                break;
        }
        return tdClass;
    }
    return {
        maxValue:maxValue,
        calcRate: calcRate,
        lineDiff:lineDiff,
        drawData:drawData,
        addList:addList,
        decreaseList:decreaseList,
        toThousands:toThousands,
        divideList:divideList,
        getClass:getClass
    }
})();