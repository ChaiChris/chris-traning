## Object (物件)
#### 定義
無序的鍵值對集合，可以存入多個屬性和方法，並透過鍵名(key)進行存取
#### 特性
1. 無序集合: 與陣列不同，物件沒有固定順序，需透過屬性名稱進行存取和修改
2. 動態結構: 可以隨時新增/刪除/修改屬性和方法
3. 多型資料: 屬性值可以是任何類型，包括函式、陣列、其他物件等
4. 多種存取方式: 可使用點記法(.)或方括號記法([])來存取屬性
5. typeof 是 object: typeof 輸出物件為 object，是 JavaScript 的基本資料型態之一
#### 用途
1. 儲存資料: 以鍵值對形式組織和管理相關資料
2. 資料結構建模: 表示真實世界的實體，如使用者資料、商品資訊等
3. 命名空間: 避免全域變數衝突，將相關功能組織在一起
4. 函式式程式設計: 作為參數傳遞、回傳值，支援不可變資料結構的操作模式

## 建立 Object 的方法
### 方法一：直接創建 Object（最常用）
**說明：** 使用大括號 `{}` 建立物件，適合儲存結構化資料
```js
const product = {
  name: 'iPhone 15',
  price: 38900,
  inStock: true
};
console.log('商品資訊:', product);
// 執行結果: 商品資訊: { name: 'iPhone 15', price: 38900, inStock: true }
```

### 方法二：使用 new Object() 建構子
**說明：** 使用 Object 建構子建立空物件，再動態新增屬性
```js
const store = new Object();
store.name = '7-11';
store.location = '台北市';
store.open = true;
console.log('店家資訊:', store);
// 執行結果: 店家資訊: { name: '3C大賣場', location: '台北市', open: true }
```
### 方法三：使用函式建立物件（Factory Function）
**說明：**  封裝邏輯建立多個類似的物件，適合動態生成
```js
function createUser(name, position) {
    return {
        name,
        age,
        introduce() {
            console.log(`我是 ${name}，今年 ${position} 歲`);
        }
    };
}

const userA = createUser('小明', '25');
userA.introduce();
// 執行結果: 我是 小明，今年 25 歲
```

### 方法四：使用建構子函式（Constructor Function）
**說明：**  使用 new 搭配函式建立實例，用於封裝及擴充功能
```js
function Car(brand, price) {
    this.brand = brand;
    this.price = price;
}

const myCar = new Car('Toyota', 720000);
console.log('Car:', myCar);
// 執行結果: Car: { brand: 'Toyota', price: 720000 }
```

### 方法五：使用 class（ES6 語法）
**說明：**  使用 class 建立具有方法與屬性的物件模板，適合 OOP 物件導向設計
```js
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
// 執行結果: 帳號: chris, 信箱: chris@gmail.com
```

## 常見的物件方法

### Object.keys()
**說明：** 返回一個包含該對象所有的鍵的數組
```js
const params = {
    page: 1,
    size: 20,
    keyword: 'notebook'
};

const queryString = Object.keys(params) // 取鍵值
    // encodeURIComponent() 是 JavaScript 中常用的URL 編碼工具
    .map(k => `${k}=${encodeURIComponent(params[k])}`)
    // 以 & 整合字串
    .join('&');

console.log(`www.url.com?${queryString}`);
// 結果：www.url.com?page=1&size=20&keyword=notebook
```

### Object.values()
**說明：** 返回一個包含該對象所有的值的數組
```js
const cart = {
    'iPhone 15': 38900,
    'AirPods': 7990,
    'Apple Watch': 12900
};

// 取出所有商品的價格，計算總和
const total = Object.values(cart).reduce((sum, price) => sum + price, 0);

console.log('Total:', total);
```

### Object.entries()
**說明：** 返回一個包含該對象所有 [key, value] 鍵值對的數組
```js
const userProfile = {
    name: 'Chris',
    age: 25,
    email: 'chris@gmail.com',
    role: 'admin'
};

// 顯示為 key: value
Object.entries(userProfile).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});
```

### Object.assign()
**說明：** 
```js
以下是其主要用法
    
- 合併多個物件
const user = { name: 'Chris' };
const info = { age: 20 };
const status = { online: true };

const merged = Object.assign({}, user, info, status);
console.log(merged);
// { name: 'Chris', age: 20, online: true }


-  設定預設值
const defaultConfig = {
    theme: 'light',
    showSidebar: true
};

const userConfig = {
    theme: 'dark'
};

const finalConfig = Object.assign({}, defaultConfig, userConfig);
console.log(finalConfig);
// { theme: 'dark', showSidebar: true }

-  複製物件(淺拷貝)
const original = { a: 1, b: 2 };
const copy = Object.assign({}, original);

console.log(copy); // { a: 1, b: 2 }
console.log(copy === original); // false（不是同一個物件）
//巢狀物件仍是參照(這個複製只會複製到第一層的屬性值)

-  更新現有物件
const user = { name: 'Chris', age: 20 };

Object.assign(user, { age: 21, online: true });
console.log(user);
// { name: 'Chris', age: 21, online: true }

- mixin 混入
// 啟用/停用功能
const Activatable = {
    activate() {
        this.active = true;
    },
    deactivate() {
        this.active = false;
    }
};

// 時間戳記功能
const Timestamped = {
    setCreatedAt() {
        this.createdAt = new Date();
    },
};

// 建立使用者物件並混入功能
const user = {
    name: 'Chris',
    email: 'chris@gmail.com',
    active: false
};

// 將功能混入 user 物件
Object.assign(user, Activatable, Timestamped);

// 使用 mixin 功能
user.activate();
user.setCreatedAt();

console.log(user);
/*
{
  name: 'Chris',
  email: 'chris@gmail.com',
  active: true,
  createdAt: 2025-07-16T03:35:00.000Z,
  activate: [Function],
  deactivate: [Function],
  setCreatedAt: [Function]
}
 */
//會覆蓋重複屬性，靠後的 source 值會蓋掉前面的
```

### Object.create()
**說明：** 用於創建一個新物件，並指定該物件的原型（prototype）
```js
// form模板，含有一個 validate 函式
const formTemplate = {
    validate() {
        return this.name !== '' && this.email.includes('@');
    }
}

// 工廠函式
function createFormData(name, email) {
    // 建立原型繼承 formTemplate
    const form = Object.create(formTemplate);
    form.name = name;
    form.email = email;
    // 回傳新的物件
    return form;
}

const form1 = createFormData('Chris', 'chris#gmail.com')
console.log(form1.validate());
```

## 物件資料解構（Object Destructuring)
### 標準解構
**說明：** 從物件中提取指定屬性的值，並賦值給同名變數
```js
const user = { name: 'Jack', age: 28, email: 'jack@gmail.com' };
const { name, age } = user;
console.log('姓名:', name); // Jack
console.log('年齡:', age);  // 28
console.log('原始物件:', user); // 原物件不受影響
// 執行結果:
// 姓名: Jack
// 年齡: 28
// 原始物件: { name: 'Jack', age: 28, email: 'jack@gmail.com' }
```
### 變數命名重命名
**說明：** 使用 屬性名: 新變數名 的語法來重新命名變數
```js
const { user: x } = { user: 5 };
console.log('x =', x); // x = 5
console.log('變數 user 是否存在:', typeof user); // undefined（變數名稱是 x，不是 user）
// 執行結果:
// x = 5
// 變數 user 是否存在: undefined
```
---
多個重新命名範例
````js
const apiResponse = {
    user_id: 12345,
    user_name: 'John',
    user_email: 'john@example.com',
    created_at: '2024-01-15'
};

const { 
    user_id: id, 
    user_name: name, 
    user_email: email,
    created_at: createdDate 
} = apiResponse;

console.log('用戶 ID:', id);
console.log('用戶姓名:', name);
console.log('用戶信箱:', email);
console.log('建立日期:', createdDate);
// 執行結果:
// 用戶 ID: 12345
// 用戶姓名: John
// 用戶信箱: john@example.com
// 建立日期: 2024-01-15
````
### 失敗保護
**說明：**  當物件中沒有對應的屬性時，變數會被賦值為 undefined，防止直接crash
```js
// 假設資料不完整
const response = { user2: 'Not found' };

// 取不到 user，x 為 undefined，不會報錯
const { user: x } = response;

console.log(x); // undefined
```
-- 也可以設定預設值 --
```js
const { name = '未知用戶', age = 0 } = { name: 'Chris' };
console.log('姓名:', name); // Chris（存在於物件中）
console.log('年齡:', age);  // 0（使用預設值）

// 結合重新命名和預設值
const { status: userStatus = 'inactive' } = { userStat: 'active' };
console.log('用戶狀態:', userStatus);
// 結果:
// 姓名: Chris
// 年齡: 0
// 用戶狀態: inactive
```
### 簡短語法
**說明：** 當屬性名稱與變數名稱相同時，可以省略冒號和重複的名稱
```js
const formData = { prop: 5, prop2: 10 };

// 快速取出欄位
const { prop, prop2 } = { prop: 5, prop2: 10 };
console.log('prop =', prop);   // 5
console.log('prop2 =', prop2); // 10
// 執行結果:
// prop = 5
// prop2 = 10
// 相當於 { prop: prop, prop2: prop2 }
```
### 物件屬性其餘運算符
**說明：** 使用 ... 語法收集剩餘的屬性到新物件中
```js
// 模擬 React 元件的 props 處理
function UserCard({ name, email, avatar = '/default-avatar.png', ...otherProps }) {
    console.log('姓名:', name);
    console.log('信箱:', email);
    console.log('頭像:', avatar);
    console.log('其他屬性:', otherProps);
}

// 使用元件
const userProps = {
    name: 'Diana',
    email: 'diana@example.com',
    age: 30,
    role: 'developer',
    isActive: true
};

UserCard(userProps);
// 結果:
// 姓名: Diana
// 信箱: diana@example.com
// 頭像: /default-avatar.png
// 其他屬性: { age: 30, role: 'developer', isActive: true }
```

### 巢狀物件解構
**說明：** 從巢狀物件中提取深層屬性
```js
const company = {
    location: {
        country: 'Taiwan',
        city: 'Taipei',
        address: {
            street: '忠孝東路',
            number: 123
        }
    },
    employees: 150
};

const {
    location: { 
        country, 
        city,
        address: { street, number }
    },
    employees 
} = company;

console.log('國家:', country);
console.log('城市:', city);
console.log('街道:', street);
console.log('門牌號碼:', number);
console.log('員工數量:', employees);
// 結果:
// 國家: Taiwan
// 城市: Taipei
// 街道: 忠孝東路
// 門牌號碼: 123
// 員工數量: 150
````