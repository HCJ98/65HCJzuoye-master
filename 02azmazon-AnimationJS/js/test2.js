// var img4=document.querySelector('#images>a :nth-child(4)');
// var img4=document.getElementById('iamgex').children[4];
// var img4=document.getElementsByTagName('hiddenImg')[3];
// var img4=document.getElementsByName('a')[4];
// // console.log(img4);

// img4.stylr.display="block"

//获取一组带超链接的图像
var imagesA = document.getElementById("images").children;
console.log(imagesA);
//元素隐藏
// imagesA[0].style.display="none";
//元素显示S
// imagesA[4].style.display="block";

//利用计时器时间隔1s。显示1张图象，其余图像隐藏。
var currentNo = 0;
function changgeImg() {
    for (var i = 0; i < imagesA.length; i++) {
        imagesA[i].className = "hiddenImg";
        console.log(imagesA[i]);
    }
    //在突出自己
    imagesA[currentNo].className = "displayImg";


    if (currentNo < 7) { currentNo++;}
    else {
        currentNo = 0;
    }
    console.log(currentNo);

}

// 设置图片播放的时间
var timer=window.setInterval(changgeImg,1000);
// imagesA[0].className="hiddenImg";
// console[4].className="displayImg";

//添加事件（侦听器p41-p55)
var imageB=document.querySelector('#images');
console.log(imageB);

//定义启动定时器函数，函数功能为启动定时器
function starChabge(){
    timer = window.setInterval(changgeImg,1000)
}
//定义函数停止器
function stopChange(){
    window.clearInterval(timer);
}
//轮播图添加鼠标移入移出事件
imageB.addEventListener('mouseover',starChabge);
imageB.addEventListener('mouseout',starChabge);





























