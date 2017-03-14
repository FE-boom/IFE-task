var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(text){
     if(xhr.readyState == 4){
        if(xhr.status == 200){
            text = JSON.parse(xhr.responseText);
            console.log(text.stat);
            test(text.stat,text.rows);
            mouseon();
        } else{
            console.log("false");
        }
    }   
}

var url = "http://139.199.196.101:8080/test/getData/";
xhr.open("get", url,true);
xhr.send(null);
var contentul = document.getElementById("content");

function JudgeAd(isad,k){
    var display = document.getElementsByClassName("display");
    if(isad == ""){
       display[k].style.backgroundColor = "#fff8f9";
    } else{
       display[k].style.backgroundColor = "#fff";
    }
}

function test(checkstat,arr){
    if(checkstat == "OK"){
        console.log("请求成功");
        Sort(arr);
    } else{
        console.log("请求失败");
    }
}

function Sort(arr){
    arr.sort(function(a,b){
        return a.sort - b.sort;
    })
    var arr2 = arr.length;
    for(var k = 0; k < arr2; k++){
        create1(arr[k]);
        // JudgeAd(arr.isAd,k);
    }
}

function create1(arr){
    var li = document.createElement("li");
    li.className = "display";
    contentul.appendChild(li);
    var div = document.createElement("div");
    div.className = "mainContent";
    CreateA(li,arr);
    MainContent(div,arr);
    li.appendChild(div);
    clean(li);
}

function clean(point){
    var div = document.createElement("div");
    div.className = "cleanfix";
    point.appendChild(div);
}

function CreateA(point,arr){
    var a = document.createElement("a");
    a.setAttribute("href",arr.href);
    var h1 = document.createElement("h1");
    // h1.innerHTML = arr.tit;
    wordChange(arr.tit,h1);
    a.appendChild(h1);
    point.appendChild(a);
}

function MainContent(point,arr){
    var div1 = document.createElement("div");
    div1.className = "pic";
    var img = document.createElement("img");
    if(arr.img != null){
        img.setAttribute("src",arr.img);
    } else{
        img.setAttribute("src","");
    }
    div1.appendChild(img);
    point.appendChild(div1);
    var div2 = document.createElement("div");
    div2.className = "content1";
    point.appendChild(div2);
    Content(div2,arr);
    clean(point);
}

function Content(point,arr){
    var a =document.createElement("a");
    var p = document.createElement("p");
    if(arr.cont == null){
        p.innerHTML = "";
    } else{
        // p.innerHTML = arr.cont;
        wordChange(arr.cont,p);
    }
    a.appendChild(p);
    point.appendChild(a);
    var div3 = document.createElement("div");
    div3.className = "targetUrl1";
    TargetUrl(div3,arr);
    point.appendChild(div3);
    var div4 = document.createElement("div");
    div4.className = "commit1";
    Commit(div4,arr);
    point.appendChild(div4);
}

function TargetUrl(point,arr){
    var a = document.createElement("a");
    a.innerHTML = arr.targetUrl;
    point.appendChild(a);
    var span = document.createElement("span");
    datetime(span);
    point.appendChild(span);
    var div = document.createElement("div");
    div.className = "outMenu";
    OutMenu(div,arr);
    point.appendChild(div,arr);
}

function OutMenu(opint,arr){
    var span = document.createElement("span");
    var img = document.createElement("img");
    img.setAttribute("src","../image/clickbg.gif");
    span.appendChild(img);
    span.className = "ganga";
    opint.appendChild(span);
    var ul = document.createElement("ul");
    var arr1 = new Array("收藏","分享","评价","举报");
    for(var i = 0; i < 4; i++){
        CreateLi(ul,arr1[i]);
    }
    opint.appendChild(ul);
}

function CreateLi(opint,arr){
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.innerHTML = arr;
    li.appendChild(a);
    opint.appendChild(li);
}

function Commit(opint,arr){
    var span1 = document.createElement("span");
    var spanText = document.createTextNode("-");
    span1.appendChild(spanText);
    var a = document.createElement("a");
    a.innerHTML = "百度快照";
    a.setAttribute("href","javascript:");
    span1.appendChild(a);
    opint.appendChild(span1);
    var span2 = document.createElement("span");
    var spanText = document.createTextNode("-");
    span2.appendChild(spanText);
    var a1 = document.createElement("a");
    a1.setAttribute("href","javascript:");
    if(arr.commit){
        a1.innerHTML = arr.commit;
    } else{
        span2.innerHTML ="";
    }
    span2.appendChild(a1);
    opint.appendChild(span2);
}

function mouseon(){
    var ganga = document.getElementsByClassName("ganga");   
    for(var n = 0; n < 8; n++){
        (ganga[n].onmouseover = function(x){
            return function(){
                var outMenu = document.getElementsByClassName("outMenu")[x];
                var outMenuUl = outMenu.getElementsByTagName("ul")[0];
                outMenuUl.style.display = "block";
            }
        }(n));
        (ganga[n].onmouseleave = function(x){
            return function(){
                var outMenu = document.getElementsByClassName("outMenu")[x];
                var outMenuUl = outMenu.getElementsByTagName("ul")[0];
                outMenuUl.style.display = "none";
            }
        }(n));
    }
}

function datetime(opint){
    obj = new Date();
    var Y = obj.getFullYear();
    var M = obj.getMonth()+1;
    var form1 = Y + "-" + M;
    opint.innerHTML = form1;
}

function wordChange(string,opint){
    var text;
    var string = string +"";
    wordArray = new Array();
    wordArray = string.match(/javascript/gi);
    var string2 = function(string,i,arr){
        if(i == arr.length){
            text = string;
            return text;
        }
        string = string.replace(/javascript[^<]/i, "<span>"+arr[i]+"</span>");
        ++i;
        return string2(string,i,arr);
    };
    if(wordArray){
        string2(string,0,wordArray);
        opint.innerHTML = text;
    } else{
        opint.innerHTML = string;
    } 
}