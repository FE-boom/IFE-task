var oBtn=document.getElementById('button');
var oDiv=document.getElementById('div1');
var aDiv=oDiv.getElementsByTagName('div');
var str='';
var onOff=true;
var num=0;
oBtn.onclick=function(){
	if (onOff) {
		for (var i = 0; i < 5; i++) {
			oDiv.innerHTML+='<div>'+i+'</div>';
		}
		onOff=false;
	}
	num=num%4;
	if(num == 0) {
		for(var i=0; i<3; i++) {
			aDiv[i].style.left= 10 + (2-i)*50 +"px";
			aDiv[i].style.top = i*50 + "px";
		}
		for(var i=3; i<5; i++) {
			aDiv[i].style.left = 10+(i-2)*50+ "px";
			aDiv[i].style.top = i*50 + "px";
		}
	}else if(num == 1) {
		for(var i=0; i<3; i++) {
			aDiv[i].style.left = 10 + i*50 + "px";
			aDiv[i].style.top = (2-i)*50 + "px";
		}
		for(var i=3; i<5; i++) {
			aDiv[i].style.left = 10 +i*50+ "px";
			aDiv[i].style.top = (i-2)*50 + "px";
		}
	}else if(num == 2) {
		for(var i=0; i<3; i++) {
			aDiv[i].style.left= 10 + i*50 +"px";
			aDiv[i].style.top = i*50 + "px";
		}
		for(var i=3; i<5; i++) {
			aDiv[i].style.left = 10 + (4-i)*50 + "px";
			aDiv[i].style.top = i*50 + "px";
		}
	}else if(num == 3) {
		for(var i=0; i<3; i++) {
			aDiv[i].style.left= 10 + i*50 +"px";
			aDiv[i].style.top = i*50 + "px";
		}
		for(var i=3; i<5; i++) {
			aDiv[i].style.left = 10+i*50+ "px";
			aDiv[i].style.top = (4-i)*50 + "px";
		}
	}
		num++;
}
					
