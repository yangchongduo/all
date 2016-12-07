function on(ele,type,fn){
	if(ele.addEventListener){
		ele.addEventListener(type,fn,false);
	}else{
		if(!ele["aEvent"+type]){
			ele["aEvent"+type]=[];
			ele.attachEvent("on"+type,function(){run.call(ele)});	
		}
		
		var a=ele["aEvent"+type];
		for(var i=0;i<a.length;i++){
			if(a[i]==fn)return;	
		}
		a.push(fn);
		
	}
	
}


function run(){
	var e=window.event;
	var type=e.type;
	if(!e.target){//如果事件对象上不支持类型似于target的这些属性，我们想个办法，让假装支持
		e.target=e.srcElement;
		e.pageX=(document.documentElement.scrollLeft||document.body.scrollLeft)+e.clientX;
		e.pageY=(document.documentElement.scrollTop||document.body.scrollTop)+e.clientY;
		e.stopPropagation=function (){e.cancelBubble=true;}
		e.preventDefault=function(){e.returnValue=false;}
		
	}
	var a=this["aEvent"+type];
	if(a){
		for(var i=0;i<a.length;i++){
			var fn=a[i];
			if(typeof fn=="function"){
					fn.call(this,e);//让IE保持像chrome一样，事件对象是以参数的方式传进来的
			}else{
				a.splice(i,1);//如果不是function就删掉
				i--;
			}
		}
	}
}

function off(ele,type,fn){
	if(ele.removeEventListener){//标准浏览器就使用以下的方法
		ele.removeEventListener(type,fn,false);
	}else{
		var a=ele["aEvent"+type];
		if(a){
			for(var i=0;i<a.length;i++){
				if(a[i]==fn){
					//a.splice(i,1);
					a[i]=null;
					return;	
				}
			}
		}
	}
}

function processThis(fn,obj){
				return function(e){fn.call(obj,e)}
			}