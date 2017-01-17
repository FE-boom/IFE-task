function addLoadEvent(func){
	var oldonload=window.oldonload;
	if (typeof window.onload!='function') {
		window.onload=func;
	}
	else{
		window.onload=function(){
			oldonload();
			func();
		}
	}
}

function  setStyle(){
	if (!document.getElementById) return false;
	var setButton=document.getElementById("setButton");
	var zhezhao=document.getElementById("zhezhao");
	var setStyleOne=document.getElementById("setStyleOne");
	var box=document.getElementById("box");
	var setColorOne=document.getElementById("setColorOne");
	var setColorTwo=document.getElementById("setColorTwo");
	var setColorThree=document.getElementById("setColorThree");
	var setWidthOne=document.getElementById("setWidthOne");
	var setWidthTwo=document.getElementById("setWidthTwo");
	var setWidthThree=document.getElementById("setWidthThree");
	var setHeightOne=document.getElementById("setHeightOne");
	var setHeightTwo=document.getElementById("setHeightTwo");
	var setHeightThree=document.getElementById("setHeightThree");
	var recovery=document.getElementById("recovery");
	var determine=document.getElementById("determine");
	zhezhao.style.display="none";
	setButton.onclick=function(){
		zhezhao.style.display="block";
	};
	setColorOne.onmouseover=function(){
		setColorOne.style.background="red";
	};
	setColorOne.onmouseout=function(){
		setColorOne.style.background="#77f312";
	};
	setColorOne.onclick=function(){
		box.style.background="red";
	};
	setColorTwo.onmouseover=function(){
		setColorTwo.style.background="yellow";
	};
	setColorTwo.onmouseout=function(){
		setColorTwo.style.background="#f88407";
	};
	setColorTwo.onclick=function(){
		box.style.background="yellow";
	};
	setColorThree.onmouseover=function(){
		setColorThree.style.background="blue";
	};
	setColorThree.onmouseout=function(){
		setColorThree.style.background="#68bff7";
	}
	setColorThree.onclick=function(){
		box.style.background="blue";
	};
	setWidthOne.onmouseover=function(){
		setWidthOne.style.background="#fa7907";
	};
	setWidthOne.onmouseout=function(){
		setWidthOne.style.background="#aaa3a3";
	};
	setWidthOne.onclick=function(){
		box.style.width="200px";
	};
	setWidthTwo.onmouseover=function(){
		setWidthTwo.style.background="#fa7907";
	};
	setWidthTwo.onmouseout=function(){
		setWidthTwo.style.background="#aaa3a3";
	};
	setWidthTwo.onclick=function(){
		box.style.width="300px";
	};
	setWidthThree.onmouseover=function(){
		setWidthThree.style.background="#fa7907";
	};
	setWidthThree.onmouseout=function(){
		setWidthThree.style.background="#aaa3a3";
	};
	setWidthThree.onclick=function(){
		box.style.width="400px";
	};
	setHeightOne.onmouseover=function(){
		setHeightOne.style.background="#fa7907";
	};
	setHeightOne.onmouseout=function(){
		setHeightOne.style.background="#aaa3a3";
	};
	setHeightOne.onclick=function(){
		box.style.height="200px";
	};
	setHeightTwo.onmouseover=function(){
		setHeightTwo.style.background="#fa7907";
	};
	setHeightTwo.onmouseout=function(){
		setHeightTwo.style.background="#aaa3a3";
	};
	setHeightTwo.onclick=function(){
		box.style.height="300px";
	};
	setHeightThree.onmouseover=function(){
		setHeightThree.style.background="#fa7907";
	};
	setHeightThree.onmouseout=function(){
		setHeightThree.style.background="#aaa3a3";
	};
	setHeightThree.onclick=function(){
		box.style.height="400px";
	};
	recovery.onclick=function(){
		box.style.background="white";
		box.style.width="100px";
		box.style.height="100px";
	};
	determine.onclick=function(){
		setStyleOne.style.display="none";
	};
}
	
addLoadEvent(setStyle);