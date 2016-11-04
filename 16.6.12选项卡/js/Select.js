/**
 * Created by JIAO on 2016/6/12.
 */


    function Selector(ele){
    this.oBox=document.getElementById(ele);
    this.oList=this.oBox.getElementsByTagName("ul")[0];
    this.oLis=this.oList.getElementsByTagName("li");
    this.oDivs=this.oBox.getElementsByTagName("div");
    return this.init();
}
Selector.prototype= {
    constructor: Selector,
    init: function () {
        var _this = this;
        this.change();
        return this;
    },
    change: function change() {
        var _this = this;
        for (var i = 0; i < _this.oLis.length; i++) {
            var curLi = _this.oLis[i];
            curLi.index = i;
            curLi.onclick = function () {
            //alert(curLi.index);
                for (var j = 0; j < _this.oDivs.length; j++) {
                    _this.oDivs[j].style.display = "none";
                    _this.oLis[j].className = "";
                }
                _this.oDivs[this.index].style.display = "block";
                this.className = "on";
            }

        }
    }
}



