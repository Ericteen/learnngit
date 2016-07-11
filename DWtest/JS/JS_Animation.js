window.onload=function(){
	var oDiv=document.getElementById('div1');
	oDiv.onmouseover=function(){
		startMove(10,0);
	};
	oDiv.onmouseout=function(){
		startMove(-10,-200);
	};

};
var timer=null;
function startMove(speed,iTarget){
	clearInterval(timer);
	var oDiv=document.getElementById('div1');
	timer=setInterval(function(){
		if (oDiv.offsetLeft===iTarget) {
			clearInterval(timer);
		} 
		else {
			oDiv.style.left=oDiv.offsetLeft+speed+"px";
		}
		
	},30);
}
