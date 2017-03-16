var oBtn = document.getElementById('serch-btn');
	var xhr = new XMLHttpRequest();
	    xhr.open("get", "http://139.199.196.101:8080/test/getData", true);
		xhr.send(null);
		xhr.onreadystatechange = function() {
			if((xhr.status >= 200 && xhr.status <= 300) || xhr.status == 304){
				if (xhr.readyState == 4) {
					var data = JSON.parse( xhr.responseText );
					var rows = data.rows;
					rows.sort(compare('sort'));
					console.log(data);
					result(data);
				}
			} else {
				alert("Request was unsuccessful: " + xhr.status)
			}
		}
var compare = function(prop) {   //排序函数
	return function(obi1, obj2) {
		var val1 = obi1[prop];
		var val2 = obj2[prop];
		if (val1 < val2) {
			return -1;
		} else if(val1 > val2) {
			return 1;
		} else {
			return 0;
		}
	}

}

function result(data) {
		var oUl = document.getElementById('ul');
		for (var i = 0; i < data.rows.length; i++) {
				var oLi = document.createElement('li');
				var oH3 = document.createElement('h3');     // 每条搜索结果的标题
				var oA = document.createElement('a');     //搜索结果的链接
				
			    oA.href = data.rows[i].href;
			    oA.innerHTML = data.rows[i].tit;
			    oUl.appendChild(oLi);
			    oLi.appendChild(oH3);
			    oH3.appendChild(oA);
			    var oLi = oUl.getElementsByTagName('li');
			   
			    if (data.rows[i].img) {      //图片
			    	var oImg = document.createElement('img');
			    	oImg.src = data.rows[i].img;
			    	oImg.className = 'clearfix img';
			    	oLi[i].appendChild(oImg);

			    }

			    if (data.rows[i].sort) {   //简介
			    	var oCont = document.createElement('p');
			    	oCont.innerHTML = data.rows[i].cont == null? "":data.rows[i].cont + '</br>';
			    	oLi[i].appendChild(oCont);

			    	if (data.rows[i].img) {
			    		var oP = oUl.getElementsByTagName('p');
						oP[i].style.marginLeft = '141px';		
			    	}
			    }
			    var oA1 = document.createElement('a');     //搜索结果下面的网址
			    oA1.innerHTML = data.rows[i].targetUrl;
			    oA1.className = 'targetUrl';
			    oA1.style.textDecoration = 'none';
			    oA1.href = data.rows[i].href;
			    oP[i].appendChild(oA1);
				//add div for relative
				var divs = document.createElement('div');
			    var oImg1 = document.createElement('img');		//小三角形		
			    oImg1.className = 'Triangle';
			    oImg1.src = 'pictures/1.png';
			    divs.appendChild(oImg1);
				divs.style.display='inline';
			    oP[i].appendChild(divs);
			    var oTr = oP[i].getElementsByTagName('img');
			    if (data.rows[i].commit) {
			    	var oCommit = document.createElement('span');
			    	oCommit.className = 'commit';
			    	oCommit.innerHTML = data.rows[i].commit;
			    	oP[i].appendChild(oCommit);
			    }
		}
		var oTr = document.getElementsByClassName("Triangle");  //tr是那个小三角形
		for (var j = 0; j < oTr.length; j++) {
			oTr[j].id = j;
			oTr[j].onclick = function() {
				var parentN = this.parentNode;
				var alertDiv = parentN.getElementsByClassName("Triangle-seclect");
				parentN.style.position = "relative";
				var otriangleSerch = document.createElement('div');     //这是那个弹出框
				otriangleSerch.className = 'Triangle-seclect';
				otriangleSerch.innerHTML = '<a href="javascript: ;">' + '收藏' + '</a>'+
				'<a href="javascript: ;">' + '分享' + '</a>' + 
				'<a href="javascript: ;">' + '评价' + '</a>' + 
				'<a href="javascript: ;">' + '举报' + '</a>';
				otriangleSerch.style.position = "absolute";
				otriangleSerch.style.top = "15px";
				otriangleSerch.style.left = "-31px";
				otriangleSerch.style.backgroundColor="white";
				parentN.appendChild(otriangleSerch);
			}
			oTr[j].onmouseout = function() {
				var parentN = this.parentNode;
				var alertDiv = parentN.getElementsByClassName("Triangle-seclect");
				parentN.style.position = "relative";
				// if(alertDiv.length > 0){

				for(var i=0; i<alertDiv.length; i++){
				 	parentN.removeChild(alertDiv[i]);
				}
			}
		
		}
}