var txt=document.getElementById("txt");
   var set={
    changeColor:function(){
        txt.style.color="red";
        txt.style.backgroundColor="#ccc";
    },
    changeSize:function(){
        txt.style.width="300px";
        txt.style.height="300px";
    },
    objHide:function(){
        txt.style.display="none";
    },
    objShow:function(){
        txt.style.display="block";
    },
    offSet:function(){
        var message=confirm("你确定要重置所有设置么？");
        if(message === true){
            txt.removeAttribute('style');
        }
    }
  };