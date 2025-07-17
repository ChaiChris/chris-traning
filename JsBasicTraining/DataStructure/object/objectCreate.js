// 方法一：直接創建 Object
console.log('===直接創建 Object===')
const product = {
    name: 'iPhone 15',
    price: 38900,
    inStock: true
};
console.log('商品資訊:', product);

// 方法二：使用 new Object() 建構子
console.log('\n===使用 new Object() 建構子===')
const store = new Object();
store.name = '7-11';
store.location = '台北市';
store.open = true;
console.log('店家資訊:', store);

// 方法三：函式建立物件（Factory Function）
console.log('\n===函式建立物件（Factory Function）===')
function createUser(name, position) {
    return {
        name,
        position,
        introduce() {
            console.log(`我是 ${name}，今年 ${position} 歲`);
        }
    };
}
const userA = createUser('小明', '25');
userA.introduce();

// 方法四：建構子函式
console.log('\n===建構子函式===')
function Car(brand, price) {
    this.brand = brand;
    this.price = price;
}
const myCar = new Car('Toyota', 720000);
console.log('Car:', myCar);

// 方法五：使用 class（ES6 語法）
console.log('\n===使用 class（ES6 語法)===')
class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }
    showInfo() {
        console.log(`帳號: ${this.username}, 信箱: ${this.email}`);
    }
}
const user1 = new User('chris', 'chris@gmail.com');
user1.showInfo();
