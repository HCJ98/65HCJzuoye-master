localStorage.setItem("key","value");//存储变量名为key，值为value的变量 

localStorage.getItem("key");//获取存储的变量key的值

localStorage.removeItem("key")//删除变量名为key的存储变量

class Product {
    constructor(id, title, price, imgSrc) {
        //商品类成员
        this.id = id;
        this.title = title;
        this.price = price;
        this.imgSrc = imgSrc;
    }
}
//订单类
class Order{
    constructor(product,qty,selectStatus){
        this.id=product.id;
        this.title=product.title;
        this.imgSrc=product.imgSrc;
        this.price=product.price;
        this.qty=qty;
        this.selectStatus=selectStatus;
    }
}

class Cartdata {
    //数据成员
    constructor() {
        this.orderList = new Array();//订单列表
        this.units = 0;//总样本
        this.totalQty = 0;//总件数
        this.totalAmount = 0;//总金额
    }
}
class shoppingCart{
    setDataToLocalSatorge(Cartdata){
        var cartDataString=JSON.stringify(Cartdata);
        localStorage.setItem('test',cartDataString);
    }
    getDataFromLocalStorage(){
        return localStorage.getItem('test');
    }

}