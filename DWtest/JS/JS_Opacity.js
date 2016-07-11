//没有直接属性去比较时，可以定义一个变量。通过改变这个变量的值，并且返回去赋值来达到效果。

window.onload=function(){
	var oDiv=document.getElementById('div1');
	oDiv.onmouseover=function(){
		startMove(100);
	};
	oDiv.onmouseout=function(){
		startMove(30);
	};

};
var timer=null;
var alpha=30;
function startMove(iTarget) {
	var oDiv=document.getElementById('div1');
	clearInterval(timer);
	timer=setInterval(function(){
		var speed=0;
		if (alpha>iTarget) {
			speed=-10;
		} else {
			speed=10;
		}
		if (alpha===iTarget) {
			clearInterval(timer);
		} else {
			//var oDiv=document.getElementById('div1');
			alpha+=speed;
			oDiv.style.filter='alpha(opacity:'+alpha+')';//IE
			oDiv.style.opacity=alpha/100;//Chrome or Firefox
		}
	},30);
}