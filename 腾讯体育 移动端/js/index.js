


//时间字符串格式化
~function (pro) {
    pro.myFormatTime = myFormatTime;
    function myFormatTime(template) {
        var res = null,
            ary = this.match(/\d+/g);
        template = template || "{0}年{1}月{2}日 {3}时{4}分{5}秒";
        res = template.replace(/\{(\d+)\}/g, function () {
            var val = ary[arguments[1]];
            !val ? val = "00" : null;
            val.length < 2 ? val = "0" + val : null;
            return val;
        });
        return res;
    }
}(String.prototype);



//动态计算rem的值
document.documentElement.style.fontSize = document.documentElement.clientWidth / 320 * 100 + "px";


//->头部和导航区域的点击事件

$(function () {
    var $menu = $(".menu"),
        $nav = $(".nav"),
        $oLis = $nav.find("li"),
        $navBtn = $nav.find(".navBtn");

    //->头部的MENU按钮
    var menuFlag = false;
    $menu.singleTap(function () {
        if (!menuFlag) {//->当前是隐藏的我让其显示
            $nav.css("display", "block").removeClass("move2").addClass("move");
            menuFlag = true;
            return;
        }
        //->当前是显示的我让其隐藏
        $nav.removeClass("move").addClass("move2");
        window.setTimeout(function () {
            $nav.css("display", "none");
        }, 200);
        menuFlag = false;
    });

    //->找到中间的LI让他们隐藏
    var $partAry = [];
    $oLis.each(function (index, curLi) {
        if (index >= 6 && index <= 11) {
            $(curLi).css("display", "none");
            $partAry.push(curLi);
        }
    });

    //->LI中的展开和收起
    $navBtn.attr("navFlag", "false");
    $navBtn.singleTap(function () {
        var navFlag = $navBtn.attr("navFlag");
        if (navFlag === "false") {
            $.each($partAry, function (index, curLi) {
                $(curLi).css("display", "block");
            });
            $navBtn.attr("navFlag", "true").removeClass("hide").children("a").html("收起");
            return;
        }
        $.each($partAry, function (index, curLi) {
            $(curLi).css("display", "none");
        });
        $navBtn.attr("navFlag", "false").addClass("hide").children("a").html("展开");
    });
});

//->支持区域的数据绑定和业务处理
$(function(){
    var $support = $(".support"),
        rightNum = 0,
        leftNum = 0,
        $count = null;

    var $sup = null,
        $supList = null;
    //->每一次加载页面之前我们先判断之前是否已经存储过数据,并且存储的时间是否还在有效期内,如果还在有效期内,我们不需要重新的请求新的数据了
    var matchStorage = localStorage.getItem("matchStorage");
    //如果信息还存在说明 已经请求过了 判断时间 是否已过期
    if (matchStorage) {
        matchStorage = JSON.parse(matchStorage);
        var time = matchStorage["time"];
        if (new Date().getTime() - time <= 60000) {
            //刷新页面 如果时间少于1分钟 我们就将 matchStorage存储的数据进行绑定 不在向服务器发送请求
            callback(matchStorage["data"]);
            return;
        }
    }

    //ajax获取比赛信息的数据
    $.ajax({
        url: "http://matchweb.sports.qq.com/html/matchDetail?mid=100000:1468531",
        type: "get",
        dataType: "jsonp",
        success: callback
    });

    //callback 函数内进行数据绑定 和事件处理

    function callback(jsonData) {
        var str = '';

        //数据绑定                               r
        if (jsonData && jsonData[1]) {
            var data = jsonData[1],
                matchInfo = data["matchInfo"];

            str += '<div class="teamInfor">';
            str += '<div class="home"><img src="' + matchInfo["leftBadge"] + '"/><span>' + matchInfo["leftGoal"] + '</span></div>';
            str += '<span>' + matchInfo["startTime"].myFormatTime("{1}月{2}日 {3}:{4}") + '</span>';
            str += '<div class="away"><span>' + matchInfo["rightGoal"] + '</span><img src="' + matchInfo["rightBadge"] + '"/></div>';
            str += '</div>';

            str += '<div class="count"><span></span></div>';

            str += '<div class="sup">';
            str += '<span dir="left">' + data["leftSupport"] + '</span>';
            str += '<span>' + matchInfo["matchDesc"] + '</span>';
            str += '<span dir="right">' + data["rightSupport"] + '</span>';
            str += '</div>';

            leftNum = parseFloat(data["leftSupport"]);
            rightNum = parseFloat(data["rightSupport"]);
        }
        $support.html(str);

        //->把本次请求回来的数据存储到本地
        var matchStorage = {
            time: new Date().getTime(),//设置存储的时间
            data: jsonData
        };
        localStorage.setItem("matchStorage", JSON.stringify(matchStorage));

        //->默认显示对应的进度条比例
        $count = $support.children(".count");
        $count.children("span").css("width", (leftNum / (leftNum + rightNum)) * 100 + "%");

        //->绑定支持的事件：首先需要判断之前是否存储过,如果存储过我们就不在绑定
        $sup = $support.children(".sup");
        $supList = $sup.children("span");
        var storageInfo = localStorage.getItem("storageInfo");
        if (storageInfo) {
            //如果点击过了
            storageInfo = JSON.parse(storageInfo);
            var touchDir = storageInfo["touchDir"];
            if (touchDir === "left") {
                $supList.eq(0).addClass("bg");
            } else {
                $supList.eq(2).addClass("bg");
            }
        } else {
            $supList.eq(0).singleTap(supportFn);
            $supList.eq(2).singleTap(supportFn);
        }
    }

    //点击支持完成的操作
    function supportFn() {
        if ($sup.attr("isTouch") === "ok") {
            return;
        }
        $sup.attr("isTouch", "ok");
        var oldNum = parseFloat($(this).html());
        $(this).html(oldNum + 1).addClass("bg").siblings().removeClass("bg");

        //->点击完成后需要进行本地存储
        var storageInfo = {
            isTouch: "ok",
            touchDir: $(this).attr("dir")
        };
        localStorage.setItem("storageInfo", JSON.stringify(storageInfo));

        //->向后台的服务器发送请求告诉它我点击的是哪一个
        var t = $(this).attr("dir") === "left" ? 1 : 2;
        $.ajax({
            url: "http://matchweb.sports.qq.com/kbs/teamSupport?mid=100000:1468531&type=" + t,
            type: "get",
            dataType: "jsonp"
        });
    }
});



//短视频区的数据绑定及效果



//短视频区数据请求
$(function(){
    var con=localStorage.getItem(con);
    if(con){
        con = JSON.parse(con);
        var time = con["time1"];
        if (new Date().getTime() - time <= 60000) {
            //刷新页面 如果时间少于1分钟 我们就将 matchStorage存储的数据进行绑定 不在向服务器发送请求
            matchBind(con["data"]);
            return;
        }
    }
    $.ajax({
        url: "http://matchweb.sports.qq.com/html/matchStatV37?mid=100000:1468531",
        type: "get",
        dataType: "jsonp",
        success: matchBind

   })
});
function matchBind(jsonData){
    console.log(jsonData);
    var str="";
    var data=jsonData[1];
    data=data['stats'];
    data=data[0].list;
    console.log(data)
    for(var i=0;i<data.length;i++){
        var curData=data[i];
    str+='<li>';
        str+="<div>";
        str+="<img src='"+curData['pic']+"'/>";
        str+="<span ></span>";
        str+="<span class='time'>"+(curData['duration'].myFormatTime("{1}:{2}"))+"</span>";
        str+="</div>";
        str+="<span>"+curData['title']+"</span>"
    str+='</li>'
    }
    var $programme=$('#programme-list');
    $programme.html(str);
    $programme.css("width",data.length*1.2+0.1+"rem");
    //初始化iscroll
    var $videoConIs= new IScroll("#videoCon", {
        snap : true,
        momentum : false,
        scrollX:true,
        hScrollbar : true,
        vScrollbar : false,
        hScroll:true,
        checkDOMChanges : true
    });


    /*回放区绑定*/
    var str2="";
    var data2=jsonData[1]['stats'][1].list;
    for(var k=0;k<data2.length;k++){
        var curData2=data2[k];
        str2+='<li>';
        str2+="<div>";
        str2+="<img src='"+curData2['pic']+"'/>";
        if(curData2['tag']){
            str2+="<span class='ico'><img src='img/tag_cornerbg_97a3b6.png' alt=''/></span>"
        }

        str2+="<span class='time'>"+(curData2['duration'].myFormatTime("{1}:{2}"))+"</span>";
        if(curData2['tag']){
            str2+='<span class="back">'+curData2['tag']+'</span>'
        }
        str2+="</div>";
        str2+="<span>"+curData2['title']+"</span>" ;
        str2+='</li>'
    }
    var $programme2=$('#programme-list2');
    $programme2.html(str2);
    $programme2.css("width",data2.length*1.2+0.1+"rem");
    var $videoCon2= new IScroll("#videoCon2", {
        snap : true,
        momentum : false,
        scrollX:true,
        hScrollbar : true,
        vScrollbar : false,
        hScroll:true,
        checkDOMChanges : true
    });

    /*新闻区绑定*/
    var str3="";
    var data3=jsonData[1]['stats'][2]['newsList'];
    for(var i=0;i<data3.length;i++){
        var curData3=data3[i];
    str3+='<li>'
    str3+='<a src="'+curData3['url']+'">';
        str3+='<img src="'+curData3['imgurl']+'" alt=""/>';
        str3+='<i></i>'
        str3+='<h3>'+curData3['title']+'</h3>';
        str3+='<p>'+curData3['abstract']+'</p>';
        str3+='<span><i></i>'+curData3['commentsNum']+'</span>';
    str3+='</a>'
    str3+='</li>'
    }
    var $new=$('#new').html(str3);


    var str4="";
    var data4=jsonData[1]['stats'][3]
    str4+="<h2>"+data4['text'];
    str4+="<a src='javascript:;'>";
    str4+="<span>"+data4['secondText']+"</span><i></i>";
    str4+="</a>";
    str4+="</h2>";
    str4+="<ul>"
    data4=data4['basketballBestPlayers']
    for(var i=0;i<data4.length;i++){
        var curData4=data4[i];
        str4+="<li>";
        str4+="<a>"
        str4+="<img src='"+curData4['leftPlayer']['icon']+"'/>";
        str4+="<p>"+curData4['leftPlayer']['jerseyNum']+"</p>"
        str4+="<p>"+curData4['leftPlayer']['name']+"</p>"
        str4+="</a>"
        str4+="<div>"
        str4+="<strong>"+curData4['leftVal']+"</strong>"
        str4+="<span>"+curData4['text']+"</span>"
        str4+="<strong>"+curData4['rightVal']+"</strong>"
        str4+="</div>"
        str4+="<a>"
        str4+="<img src='"+curData4['rightPlayer']['icon']+"'/>";
        str4+="<p>"+curData4['rightPlayer']['jerseyNum']+"</p>"
        str4+="<p>"+curData4['rightPlayer']['name']+"</p>"
        str4+="</a>"
        str4+="</li>"
    }
    str4+="</ul>"
    $('#data').html(str4);



    var str5="";
    var data5=jsonData[1]['stats'][4]
    str5+="<h2>"+data5['text']+"</h2>"
    str5+="<ul>";
    data5=data5['topics'];
    console.log(data5)
    for(var i=0;i<data5.length;i++){
        var curData5=data5[i]
        str5+="<li>";
        str5+="<a src='"+curData5['url']+"'>"
        str5+='<h3>'+curData5['htitle']+'</h3>'
        str5+="<p>"+curData5['summary']+"</p>"
        str5+='<div>'
        for(var k=0;k<curData5['images'].length;k++){
            var ing= curData5['images'][k];
            str5+='<img src="'+ing+'" />'
        }
        str5+='</div>'
        str5+='<div>'
        str5+='<p>'+curData5['user']['name']+'</p>'
        str5+='<span>来自</span>'
        str5+='<p>'+curData5['moduleName']+'</p>'
        str5+=' <span><i></i>'+curData5['status']+'</span>'
        str5+='</div>'
        str5+="</a>"
      str5+="</li>"
    }
    str5+="</ul>"
    str5+='<div class="team" id="team">'

    var data6=jsonData[1]['stats'][5]['modules'];
    console.log(data6);
    for(var c=0;c<data6.length;c++){
        var curData6=data6[c];
        str5+='<a href="'+curData6['url']+'">';
        str5+='<img src="'+curData6['icon']+'" alt=""/>';
        str5+="<span>"+curData6['name']+"</span>"
        str5+='</a>'

    }
    str5+='</div>';

     $('#girl').html(str5)

     var con={
         time1:new Date().getTime(),
         data:jsonData
     };
    localStorage.setItem("con", JSON.stringify(con));


}











