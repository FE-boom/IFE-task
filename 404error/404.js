//获取location.search的参数对象
function getQueryStringArgs() {
	var qs = (location.search.length > 0 ? location.search.slice(1) : ""),
	args = {},
	items = qs.length ? qs.split("&") : [],
	item = null,
	name = null,
	value = null,
	len = items.length;
	for (var i=0; i < len; i++) {
		item = items[i].split("=");
		name = decodeURIComponent(item[0]);
		value = decodeURIComponent(item[1]);
		if (name.length) {
			args[name] = value;
		}
	}
	return args;
} 

//将获取到的参数对象处理成数组
var arg = getQueryStringArgs();
var error = "";
for(i in arg) {
	error += arg[i]+',';
}
var errorArr = error.substring(0,error.length-1).split(',');

//将参数内容放到错误说明里面
var errorContent = document.getElementById('error-content');
for (var i = 0; i < errorArr.length; i++) {
	var oP = document.createElement('p');
	oP.innerHTML = errorArr[i];
	errorContent.appendChild(oP);
}



