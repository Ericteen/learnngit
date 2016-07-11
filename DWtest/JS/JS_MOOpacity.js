//没有直接属性去比较时，可以定义一个变量。通过改变这个变量的值，并且返回去赋值来达到效果。

window.onload=function(){
	var oDiv=document.getElementsByTagName('div');
	for (var i = 0; i < oDiv.length; i++) {
		oDiv[i].alpha=30;
		oDiv[i].onmouseover=function(){
			startMove(this,100);
		};
		oDiv[i].onmouseout=function(){
			startMove(this,30);
		};
	}
	
};
//var timer=null;
// var alpha=30;
function startMove(obj,iTarget) {
	//var oDiv=document.getElementById('div1');
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var speed=0;
		if (obj.alpha>iTarget) {
			speed=-10;
		} else {
			speed=10;
		}
		if (obj.alpha===iTarget) {
			clearInterval(obj.timer);
		} else {
			//var oDiv=document.getElementById('div1');
			obj.alpha+=speed;
			obj.style.filter='obj.alpha(opacity:'+obj.alpha+')';//IE
			obj.style.opacity=obj.alpha/100;//Chrome or Firefox
		}
	},30);
}