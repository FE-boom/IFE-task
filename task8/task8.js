var oPrevious=document.getElementById('previous');
		var oNext=document.getElementById('next');
		var oSort=document.getElementById('sort');
		var oDescribe=document.getElementById('describe');
		var oPicture=document.getElementById('picture');
		var arrPictureURL=['1.jpg','2.jpg','3.jpg','4.jpg'];
		var arrPictureDescribe=['文字一','文字二','文字三','文字四'];
		var oLoop=document.getElementById('loop');
		var oOrder=document.getElementById('order');
		var oSwitchhhingMode=document.getElementById('SwitchhhingMode');
		var i=0;
		function PicTab(){
			oPicture.src=arrPictureURL[i];
			oSort.innerHTML=i+1+'/'+arrPictureURL.length;
			oDescribe.innerHTML=arrPictureDescribe[i];
		};
		PicTab();
		oLoop.onclick=function(){
			SwitchhhingMode.innerHTML='图片可以从最后一张跳转到第一张循环切换';
			oNext.onclick=function(){
				i++;
				PicTab();
				if (i>arrPictureURL.length-1) {
				i=0;
				PicTab();
				};
			};
			oPrevious.onclick=function(){
				i--;
				PicTab();
				if (i<0) {
				i=arrPictureURL.length-1;
				PicTab();
				};
			};
		};
		oOrder.onclick=function(){
			SwitchhhingMode.innerHTML='图片只能到最后一张或只能到第一张切换';
			oNext.onclick=function(){
				i++;
				PicTab();
				if (i>arrPictureURL.length-1) {
				i=3;
				PicTab();
				};
			};
			oPrevious.onclick=function(){
				i--;
				PicTab();
				if (i<0) {
				i=0;
				PicTab();
				};
			};
		};