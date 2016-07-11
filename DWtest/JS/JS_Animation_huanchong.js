window.onload=function(){
	var oDiv=document.getElementById('div1');
	oDiv.onmouseover=function(){
		startMove(0);
	};
	oDiv.onmouseout=function(){
		startMove(-200);
	};

};
var timer=null;
function startMove(iTarget){
	clearInterval(timer);
	var oDiv=document.getElementById('div1');
	timer=setInterval(function(){
		var speed=(iTarget-oDiv.offsetLeft)/10;//目标值（0）减去当前值（-200）
		speed=speed>0?Math.ceil(speed):Math.floor(speed);
		if (oDiv.offsetLeft===iTarget) {
			clearInterval(timer);
		} 
		else {
			oDiv.style.left=oDiv.offsetLeft+speed+"px";
		}
		
	},30);
}
