var btnList=document.querySelectorAll('.btn-group .btn');
var totalQty=document.getElementsByName('totalQty')[0];
//获取元素
var increaseBtns=document.getElementsByName('increase')

console.log(increaseBtns);

var decreaseBtns=document.getElementsByName('decrease')
// console.log(decreaseValue);

var addToCartBtns=document.getElementsByName('addToCart');

// for (const key in btnList) {
//     if (btnList.hasOwnProperty(key)) {
//         const element = btnList[key];
//         switch(element.name){
//             case 'increase':element.addEventListener('click',increaseValue);break;//增加商品的函数
//             case 'decrease':element.addEventListener('click',decreaseValue);break;//减少商品的函数
//             case 'addToCart':element.addEventListener('click',addToCart);break;//加入购物车
//         }        
//     }
// }


for(let i=0;i<increaseBtns.length;i++){
    increaseBtns[i].addEventListener('click',increaseValue);
}

for(let i=0;i<decreaseBtns.length;i++){
    decreaseBtns[i].addEventListener('click',decreaseValue);
}
for(let i=0;i<addToCartBtns.length;i++){
    addToCartBtns[i].addEventListener('click',addToCart);
}
function onClickListener(){
    
}



function increaseValue(e){
      var qtyObj=  e.target.nextElementSibling;
      var qty=parseInt(qtyObj.innerText);
      qty++;
      qtyObj.innerText=qty;
      console.log(qty);        
}
function decreaseValue(e){
    var qtyObj=  e.target.previousElementSibling;
    var qty=parseInt(qtyObj.innerText);
   if(qty>1) qty--;
   else qty=0;
    qtyObj.innerText=qty;
    console.log(qty);        
}

function addToCart(e){
    var qtyObj=  e.target.previousElementSibling.previousElementSibling;
    var qty=parseInt(qtyObj.innerText);
    var total=parseInt(totalQty.innerText);
    total+=qty;
    totalQty.innerText=total;  
}
