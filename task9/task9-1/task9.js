var oBtn=document.getElementById('button');
		
		var arr=['red','yellow','blue','green'];
		var str='';
		for(var i=0;i<100;i++){
		
		str=str+'<div>'+i+'</div>';
		
	}
	
	oBtn.onclick=function(){
		document.body.innerHTML+=str;
			var aDiv=document.getElementsByTagName('div');
			for (var i = 0; i < 10; i++) {
				for (var j = i*10; j<(i+1)*10; j++) {
					aDiv[j].style.backgroundColor=arr[j%4];
					aDiv[j].style.left=(j%10)*60+'px';
					aDiv[j].style.top=50+i*60+'px';
				}

			}
		}