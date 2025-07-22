# JavaScript 程式開發

## 環境設定

### 如何在本地安裝 `Node.js` 與 `npm`

- winget 方法 (Windows 10 above only):

  #### 安裝 winget (Powershell)

  ```
   Add-AppxPackage -RegisterByFamilyName -MainPackage Microsoft.DesktopAppInstaller_8wekyb3d8bbwe
  ```

  #### 安裝 node.js (Powershell, 通常 npm 會與 node.js 一同安裝)

  ```
  winget install --id=OpenJS.NodeJS  -e
  ```

  #### 測試

  ```
  node -v (node.js 安裝成功並且加入path)
  npm -v (npm 安裝成功並且加入path)
  ```

---

### 使用 `npm` 初始化專案 (package.json)

#### 初始化

````

npm init (依照問題選答)

````

---

### 如何確認當前所在的專案環境 (使用 node -v 和 npm -v 確認版本)

#### 執行

```
node -v (輸出 v24.4.0)
npm -v (輸出 11.4.2)
```

---

### 全域安裝與專案安裝套件

```
npm install -g (全域安裝 在終端機隨時可執行)
npm install (專案安裝 只安裝到當前專案目錄)
```

---

### 如何設定與使用 `.env` 環境變數

- dotenv+.env 檔 方法:

  #### 安裝 dotenv

  ```
   npm install dotenv
  ```

  #### 創建 .env 檔案並寫入需要的環境變數

  ```
  創建 .env
  寫入 DB_HOST="123.0.0.1"
  ```

  #### 在代碼透過 dotenv 引入.env

  ```
  require('dotenv').config()
  ```

  #### 使用環境變數

  ```
  console.log(process.env.DB_HOST)
  (輸出 123.0.0.1)
  ```

## 開發工具

### 快速尋找方法或參數的「源頭」或是「有哪些方法在使用」

- Ctrl + b 可以快速訂位到源頭

---

### 快速 reformat 程式碼

- Ctrl + Alt + l 可以快速 Reformat

---

# JavaScript 基本練習

## Array (陣列)

#### 定義

有序規則的物件，可以存入多個多型資料，並依照順序有 index (從 0 開始)

#### 特性

1. 有序集合: 有固定順序，可依照索引進行修改
2. 動態大小: 其長度並非固定，可以隨時新增/刪除元素
3. 多型資料: 可以混和存入多種類型元素
4. 多種內建方法: 有許多內建方法對其進行修改
5. typeof 是 object: typeof 輸出陣列為物件，但可使用 isArray 方法來區分是否為陣列

#### 用途

1. 儲存資料:
2. 集合+運算處裡: 對陣列值進行多種查找\ 排序\ 篩選\ 運算
3. 迴圈操作: 透過迴圈處裡程式邏輯\ 輸出 UI 列表，常與 .length 屬性搭配使用
4. 函式式程式設計: 保持資料不可變，避免副作用，並提高代碼可維護性

## 建立 Array 的方法

### 方法一：直接創建 Array (最常用)

**說明：** 使用方括號 [] 直接建立陣列，最直觀且常用的方式

```js
const fruits = ["apple", "orange", "banana", "strawberry"];
console.log("水果店商品清單:", fruits);
// 執行結果: 水果店商品清單: [ 'apple', 'orange', 'banana', 'strawberry' ]
```

### 方法二：使用 new Array() 建構子

**說明：** 透過 Array 建構子建立陣列，適用於動態建立

```js
const monthlyRevenue = new Array(150000, 180000, 200000);
console.log("前三個月營收:", monthlyRevenue);
// 執行結果: 前三個月營收: [150000, 180000, 200000]
```

### new Array() 的誤區

**說明：** 當只傳入一個數字參數時，會建立指定長度的空陣列而非包含該數字的陣列

```js
function createScoreArray(score) {
  return new Array(score);
}
console.log("想要加入分數 85 卻得到:", createScoreArray(85));
// 執行結果: 想要加入分數 85 卻得到: [ <85 empty items> ]
```

### 方法三：Array.of() 可解決 new Array() 單一數字問題

**說明：** 無論參數是什麼類型或數量，都會建立包含這些參數的陣列

```js
const productId = Array.of(12345);
console.log("商品 ID:", productId);
// 執行結果: 商品 ID: [12345]
```

### 方法四：Array.from() 動態建立

**說明：** 從類陣列物件或可迭代物件建立新陣列，並可搭配映射函式

```js
const pageNumbers = Array.from({ length: 5 }, (_, index) => index + 1);
console.log("分頁號碼:", pageNumbers);
// 執行結果: 分頁號碼: [1, 2, 3, 4, 5]
```

## 改變原陣列的方法

### push()

**說明：** 在陣列末端新增一個或多個元素，並回傳新的陣列長度

```js
const shoppingList = ["牛奶", "蛋"];
const newLength = shoppingList.push("香蕉", "布丁");
console.log("購物清單內容：", shoppingList);
console.log("購物清單的總項目數：", newLength);
// 執行結果:
// 購物清單內容： [ '牛奶', '蛋', '香蕉', '布丁' ]
// 購物清單的總項目數： 4
```

### pop()

**說明：** 移除並回傳陣列最後一個元素

```js
const historyStack = ["首頁", "商品頁", "商品詳情"];
const lastVisitedPage = historyStack.pop();
console.log("返回前的頁面是：", lastVisitedPage);
console.log("目前瀏覽紀錄：", historyStack);
// 執行結果:
// 返回前的頁面是： 商品詳情
// 目前瀏覽紀錄： [ '首頁', '商品頁' ]
```

### shift()

**說明：** 移除並回傳陣列第一個元素

```js
const paddingUser = [
  { name: "Jack", email: "jack@gmail.com" },
  { name: "Chris", email: "Chris@gmail.com" },
  { name: "Vic", email: "Vic@gmail.com" },
];
function RegisterUser() {
  if (paddingUser.length > 0) {
    const currentUser = paddingUser.shift();
    console.log("現在註冊的會員是", currentUser.name);
    RegisterUser();
  } else {
    console.log("所有會員註冊完成");
  }
}
RegisterUser();
// 執行結果:
// 現在註冊的會員是 Jack
// 現在註冊的會員是 Chris
// 現在註冊的會員是 Vic
// 所有會員註冊完成
```

### unshift()

**說明：** 在陣列開頭新增一個或多個元素，並回傳新的陣列長度

```js
const todoList = ["買牛奶", "清貓砂"];
const newTodo = "拿包裹";
const todoListLength = todoList.unshift(newTodo);
console.log("unshift() 回傳陣列長度", todoListLength);
console.log("unshift() todoList 新增", newTodo);
console.log("unshift() todoList", todoList);
// 執行結果:
// unshift() 回傳陣列長度 3
// unshift() todoList 新增 拿包裹
// unshift() todoList [ '拿包裹', '買牛奶', '清貓砂' ]
```

### splice()

**說明：** 在指定位置刪除元素並可同時插入新元素，回傳被刪除的元素陣列

```js
const event = ["空閒", "預定", "預定", "空閒", "預定", "空閒"];
const newChange = event.splice(0, 2, "空閒");
console.log("splice() 移除預定", newChange);
console.log("splice() 新的預定表", event);
// 執行結果:
// splice() 移除預定 [ '空閒', '預定' ]
// splice() 新的預定表 [ '空閒', '空閒', '空閒', '預定', '空閒' ]
```

### fill()

**說明：** 用指定值填充陣列中的所有元素或指定範圍的元素

```js
const buttonStates = Array(10).fill("disable");
buttonStates.fill("active", 5);
console.log("初始化按鈕狀態:", buttonStates);
// 執行結果: 初始化按鈕狀態: [ 'disable', 'disable', 'disable', 'disable', 'disable', 'active', 'active', 'active', 'active', 'active' ]
```

### copyWithin()

**說明：** 在陣列內部複製指定範圍的元素到另一個位置，會覆蓋原有元素

```js
const formTemplate = ["空", "空", "空", "姓名", "電話", "地址"];
formTemplate.copyWithin(0, 3);
console.log("表單欄位快速填充:", formTemplate);
// 執行結果: 表單欄位快速填充: ['姓名', '電話', '地址', '姓名', '電話', '地址']
```

### sort()

**說明：** 對陣列元素進行排序，預設按字符串排序，可自定義比較函式

```js
const users = [
  { name: "Amy", age: 28 },
  { name: "Bob", age: 18 },
  { name: "Whora", age: 35 },
];
console.log(
  "用戶依年齡升冪排序:",
  users.sort((a, b) => a.age - b.age)
);
// 執行結果: 用戶依年齡升冪排序: [
//   { name: 'Bob', age: 18 },
//   { name: 'Amy', age: 28 },
//   { name: 'Whora', age: 35 }
// ]
```

## 不改變原陣列的方法

### concat()

**說明：** 合併兩個或多個陣列，回傳新的合併陣列

```js
const hotItems = ["熱銷A", "熱銷B"];
const newItems = ["新品X", "新品Y"];
const allItems = hotItems.concat(newItems);
console.log("所有商品:", allItems);
// 執行結果: 所有商品: [ '熱銷A', '熱銷B', '新品X', '新品Y' ]
```

### join()

**說明：** 將陣列元素連接成字串，可指定分隔符

```js
const row = ["Jack", "jack@gmail.com", "已啟用"];
const csvLine = row.join(",");
console.log("CSV 輸出:", csvLine);
// 執行結果: CSV 輸出: Jack,jack@gmail.com,已啟用
```

### slice()

**說明：** 從陣列中提取指定範圍的元素，回傳新陣列

```js
console.log("\n===slice()===");
const data1 = [10, 20, 30, 40, 50];
const firstTwo = data1.slice(0, 2);
console.log("取出前兩筆資料", firstTwo);
// 執行結果:
// ===slice()===
// 取出前兩筆資料 [ 10, 20 ]
```

### map()

**說明：** 對陣列每個元素執行函式，並回傳新的陣列

```js
const items = ["Home", "About", "Contact"];
const listItems = items.map((item) => `<li>${item}</li>`);
console.log(listItems.join(""));
// 執行結果: <li>Home</li><li>About</li><li>Contact</li>
```

### filter()

**說明：** 根據指定條件篩選陣列元素，回傳符合條件的新陣列

```js
console.log("\n===filter()===");
const users = [
  { name: "Amy", age: 28 },
  { name: "Bob", age: 18 },
  { name: "Whora", age: 35 },
];
users.forEach((user) => {
  if (user.age >= 20) {
    user.active = true;
  } else {
    user.active = false;
  }
});
console.log("過濾 active 為 true 的使用者");
users.filter((user) => user.active).forEach((user) => console.log(user.name));
// 執行結果:
// ===filter()===
// 過濾 active 為 true 的使用者
// Amy
// Whora
```

### flat()

**說明：** 將多維陣列展平成一維陣列，可指定展平的深度

```js
const data2 = [0, 1, 2, [3, 4, [5], [6, 7, 8, [9, 10]]]];
console.log("有一個多層陣列", data2);
console.log("flat(1) 回傳新陣列", data2.flat(1));
console.log("flat(2) 回傳新陣列", data2.flat(2));
console.log("flat(Infinity) 回傳新陣列", data2.flat(Infinity));
// 執行結果:
// 有一個多層陣列 [ 0, 1, 2, [ 3, 4, [ 5 ], [ 6, 7, 8, [Array] ] ] ]
// flat(1) 回傳新陣列 [ 0, 1, 2, 3, 4, [ 5 ], [ 6, 7, 8, [ 9, 10 ] ] ]
// flat(2) 回傳新陣列 [ 0, 1, 2, 3, 4, 5, 6, 7, 8, [ 9, 10 ] ]
// flat(Infinity) 回傳新陣列 [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
```

## 陣列資料解構（Array Destructuring）

### 位置對應賦值

**說明：** 根據陣列元素位置將值賦給對應的變數

```js
const orderData1 = [
  "ORD-2024-001",
  "待付款",
  "Jack",
  "john@email.com",
  1299.99,
];
const [orderID, status, customer, , total] = orderData1;
console.log(
  `${customer} 的訂單資訊: 訂單編號 ${orderID} | 狀態 ${status} | 訂單金額 ${total}`
);
// 執行結果: Jack 的訂單資訊: 訂單編號 ORD-2024-001 | 狀態 待付款 | 訂單金額 1299.99
```

### 帶預設值

**說明：** 當陣列元素不存在時，可以設定預設值

```js
const serverConfig = ["localhost", 3000]; // 缺少 protocol
const [host, port, protocol = "http"] = serverConfig;
console.log(`伺服器地址: ${protocol}://${host}:${port}`);
// 執行結果: 伺服器地址: http://localhost:3000
```

### 忽略元素 (, 為一單位)

**說明：** 使用空位（逗號）來跳過不需要的陣列元素

```js
const [first, , , fourth] = fruits;
console.log(first, fourth);
// 執行結果: apple strawberry
```

### 剩餘運算符 (...)

**說明：** 使用 ... 語法將剩餘的元素收集到新陣列中

```js
const salesData = [850, 720, 950, 680, 1100, 890, 760];
const [todaySales, ...previousSales] = salesData;
console.log(`今日銷售: $${todaySales}`);
console.log(`前幾日銷售: [${previousSales}]`);
const sum = previousSales.reduce((a, b) => a + b, 0);
console.log("所有銷售額總和:$", sum);
// 執行結果:
// 今日銷售: $850
// 前幾日銷售: [720,950,680,1100,890,760]
// 所有銷售額總和:$ 5100
```

### 變數值交換

**說明：** 使用解構賦值快速交換兩個變數的值

```js
let currentBestSeller = "iPhone 15";
let newBestSeller = "AirPods";
console.log(`交換前 - 當前: ${currentBestSeller}, 新品: ${newBestSeller}`);
[currentBestSeller, newBestSeller] = [newBestSeller, currentBestSeller];
console.log(`交換後 - 當前: ${currentBestSeller}, 新品: ${newBestSeller}\n`);
// 執行結果:
// 交換前 - 當前: iPhone 15, 新品: AirPods
// 交換後 - 當前: AirPods, 新品: iPhone 15
```

### Function 回傳解析

**說明：** 直接解構函式回傳的陣列，將值賦給對應的變數

```js
function fetchUserProfile(userId) {
  // 模擬 API 回傳格式: [用戶名, 積分, 會員類型]
  const userDatabase = {
    user123: ["Alice", 15800, "Premium"],
    user456: ["Bob", 3200, "Basic"],
  };
  return userDatabase[userId] || ["Unknown", 0, "None"];
}

const [username, points, memberType] = fetchUserProfile("user456");
console.log(
  `用戶資料:  姓名: ${username} | 積分: ${points} | 會員類型: ${memberType}`
);
// 執行結果: 用戶資料:  姓名: Bob | 積分: 3200 | 會員類型: Basic
```

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
  name: "iPhone 15",
  price: 38900,
  inStock: true,
};
console.log("商品資訊:", product);
// 執行結果: 商品資訊: { name: 'iPhone 15', price: 38900, inStock: true }
```

### 方法二：使用 new Object() 建構子

**說明：** 使用 Object 建構子建立空物件，再動態新增屬性

```js
const store = new Object();
store.name = "7-11";
store.location = "台北市";
store.open = true;
console.log("店家資訊:", store);
// 執行結果: 店家資訊: { name: '3C大賣場', location: '台北市', open: true }
```

### 方法三：使用函式建立物件（Factory Function）

**說明：** 封裝邏輯建立多個類似的物件，適合動態生成

```js
function createUser(name, position) {
  return {
    name,
    age,
    introduce() {
      console.log(`我是 ${name}，今年 ${position} 歲`);
    },
  };
}

const userA = createUser("小明", "25");
userA.introduce();
// 執行結果: 我是 小明，今年 25 歲
```

### 方法四：使用建構子函式（Constructor Function）

**說明：** 使用 new 搭配函式建立實例，用於封裝及擴充功能

```js
function Car(brand, price) {
  this.brand = brand;
  this.price = price;
}

const myCar = new Car("Toyota", 720000);
console.log("Car:", myCar);
// 執行結果: Car: { brand: 'Toyota', price: 720000 }
```

### 方法五：使用 class（ES6 語法）

**說明：** 使用 class 建立具有方法與屬性的物件模板，適合 OOP 物件導向設計

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

const user1 = new User("chris", "chris@gmail.com");
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
  keyword: "notebook",
};

const queryString = Object.keys(params) // 取鍵值
  // encodeURIComponent() 是 JavaScript 中常用的URL 編碼工具
  .map((k) => `${k}=${encodeURIComponent(params[k])}`)
  // 以 & 整合字串
  .join("&");

console.log(`www.url.com?${queryString}`);
// 結果：www.url.com?page=1&size=20&keyword=notebook
```

### Object.values()

**說明：** 返回一個包含該對象所有的值的數組

```js
const cart = {
  "iPhone 15": 38900,
  AirPods: 7990,
  "Apple Watch": 12900,
};

// 取出所有商品的價格，計算總和
const total = Object.values(cart).reduce((sum, price) => sum + price, 0);

console.log("Total:", total);
```

### Object.entries()

**說明：** 返回一個包含該對象所有 [key, value] 鍵值對的數組

```js
const userProfile = {
  name: "Chris",
  age: 25,
  email: "chris@gmail.com",
  role: "admin",
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
    return this.name !== "" && this.email.includes("@");
  },
};

// 工廠函式
function createFormData(name, email) {
  // 建立原型繼承 formTemplate
  const form = Object.create(formTemplate);
  form.name = name;
  form.email = email;
  // 回傳新的物件
  return form;
}

const form1 = createFormData("Chris", "chris#gmail.com");
console.log(form1.validate());
```

## 物件資料解構（Object Destructuring)

### 標準解構

**說明：** 從物件中提取指定屬性的值，並賦值給同名變數

```js
const user = { name: "Jack", age: 28, email: "jack@gmail.com" };
const { name, age } = user;
console.log("姓名:", name); // Jack
console.log("年齡:", age); // 28
console.log("原始物件:", user); // 原物件不受影響
// 執行結果:
// 姓名: Jack
// 年齡: 28
// 原始物件: { name: 'Jack', age: 28, email: 'jack@gmail.com' }
```

### 變數命名重命名

**說明：** 使用 屬性名: 新變數名 的語法來重新命名變數

```js
const { user: x } = { user: 5 };
console.log("x =", x); // x = 5
console.log("變數 user 是否存在:", typeof user); // undefined（變數名稱是 x，不是 user）
// 執行結果:
// x = 5
// 變數 user 是否存在: undefined
```

---

多個重新命名範例

```js
const apiResponse = {
  user_id: 12345,
  user_name: "John",
  user_email: "john@example.com",
  created_at: "2024-01-15",
};

const {
  user_id: id,
  user_name: name,
  user_email: email,
  created_at: createdDate,
} = apiResponse;

console.log("用戶 ID:", id);
console.log("用戶姓名:", name);
console.log("用戶信箱:", email);
console.log("建立日期:", createdDate);
// 執行結果:
// 用戶 ID: 12345
// 用戶姓名: John
// 用戶信箱: john@example.com
// 建立日期: 2024-01-15
```

### 失敗保護

**說明：** 當物件中沒有對應的屬性時，變數會被賦值為 undefined，防止直接 crash

```js
// 假設資料不完整
const response = { user2: "Not found" };

// 取不到 user，x 為 undefined，不會報錯
const { user: x } = response;

console.log(x); // undefined
```

-- 也可以設定預設值 --

```js
const { name = "未知用戶", age = 0 } = { name: "Chris" };
console.log("姓名:", name); // Chris（存在於物件中）
console.log("年齡:", age); // 0（使用預設值）

// 結合重新命名和預設值
const { status: userStatus = "inactive" } = { userStat: "active" };
console.log("用戶狀態:", userStatus);
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
console.log("prop =", prop); // 5
console.log("prop2 =", prop2); // 10
// 執行結果:
// prop = 5
// prop2 = 10
// 相當於 { prop: prop, prop2: prop2 }
```

### 物件屬性其餘運算符

**說明：** 使用 ... 語法收集剩餘的屬性到新物件中

```js
// 模擬 React 元件的 props 處理
function UserCard({
  name,
  email,
  avatar = "/default-avatar.png",
  ...otherProps
}) {
  console.log("姓名:", name);
  console.log("信箱:", email);
  console.log("頭像:", avatar);
  console.log("其他屬性:", otherProps);
}

// 使用元件
const userProps = {
  name: "Diana",
  email: "diana@example.com",
  age: 30,
  role: "developer",
  isActive: true,
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
    country: "Taiwan",
    city: "Taipei",
    address: {
      street: "忠孝東路",
      number: 123,
    },
  },
  employees: 150,
};

const {
  location: {
    country,
    city,
    address: { street, number },
  },
  employees,
} = company;

console.log("國家:", country);
console.log("城市:", city);
console.log("街道:", street);
console.log("門牌號碼:", number);
console.log("員工數量:", employees);
// 結果:
// 國家: Taiwan
// 城市: Taipei
// 街道: 忠孝東路
// 門牌號碼: 123
// 員工數量: 150
```

## ES6 Set (集合)

#### 定義

- Set 是一個 object，可以儲存任何型別的唯一值，不論是原始型別或是物件
- NaN 和 undefined 都可以被放置在 Set 中， NaN 之間被視為相同的值（儘管 NaN !== NaN）

#### 特性

1. 唯一性保證：Set 中的所有元素都是唯一的，重複加入相同值不會改變集合內容。
2. 插入順序保留：元素按照插入的順序進行儲存，可使用 for...of 或 forEach 迴圈遍歷。
3. 動態大小：Set 的大小會自動根據內容變化，可使用 .size 取得目前長度。
4. 多種內建方法: 有許多內建方法對其進行操作，如 add、has、delete、clear、intersection、union

#### 用途

1. 資料去重：快速移除陣列或資料中的重複項目。
2. 集合運算：可透過交集（intersection）、聯集（union）、差集（difference）實現集合邏輯。
3. 條件查找：比對某個值是否存在於集合中（如防止重複執行某些操作）。
4. 迴圈處理：與 .size、for...of 搭配可靈活處理唯一資料集。
5. 事件記錄 / Cache：追蹤已處理過的項目，例如文章是否已讀、使用者是否已點擊等。

## 建立 Object 的方法

### 方法一：直接創建 Set

**說明：** 使用 new Set() 可建立一個空的集合，之後可透過 .add() 方法逐一加入元素。

```js
const set1 = new Set();
```

### 方法二： 由陣列建立 Set

**說明：** 將陣列作為建構函式的參數，Set 會自動移除重複項目，只保留唯一值。

```js
const fetchedTags = ["red", "blue", "red", "green"];
const uniqueTags = new Set(fetchedTags);
console.log(...uniqueTags); // red blue green
```

### 方法三： 字串轉 Set（去除重複字元）

**說明：** 字串會被當作可迭代物件，Set 自動將重複字元移除。

```js
const letters = new Set("hello");
console.log(...letters);
//  h e l o
```

### 方法四： 從其他 Set 複製

**說明：** 將現有 Set 作為參數傳入 new Set()，可建立一份新的集合副本（淺拷貝）。

```js
const setA = new Set([1, 2, 3]);
const setB = new Set(setA);
console.log(...setB); // 1 2 3
```

## 常見的物件方法

### add()

**說明：** 在一個 Set 物件的尾端加上一個指定 value 的新元素

```js
const users = new Set();
function onUserMessage(user) {
  users.add(user);
  console.log(`目前有 ${users.size} 人講過話`);
}
onUserMessage("Jack");
onUserMessage("Chris");
onUserMessage("Jack");
onUserMessage("Alex");
onUserMessage("Alex");
onUserMessage("Vic");
// 結果：目前有 1 人講過話、目前有 2 人講過話、目前有 2 人講過話、目前有 3 人講過話、目前有 3 人講過話、目前有 4 人講過話
```

### delete()

**說明：** 會從一個 Set 物件中移除指定元素

```js
const favorites = new Set(["article1", "article2", "article3"]);

// 取消收藏 article2
favorites.delete("article2");

console.log([...favorites]);
// 結果：['article1', 'article3']
```

### has()

**說明：** 對一個指定值元素在 Set 物件中的存在與否回傳一個布林值

```js
// 升級紀錄已讀的文章，透過has()再加入前判斷，可節約效能
const readedArticle = new Set();
let runCounter = 0;
function readArticle(bookArray) {
  for (let i = 0; i < bookArray.length; i++) {
    const bookname = bookArray[i];
    if (readedArticle.has(bookArray[i])) return;
    readedArticle.add(`${bookArray[i]}`);
    runCounter++;
  }
  console.log(`已讀文章: ${[...readedArticle]}, 執行了 ${runCounter}次`);
}
readArticle(["做繪本的人", "做繪本的人"]);
readArticle(["空間之外OUT OFF THE SPACE：沈中怡的空間學"]);
readArticle(["胡督魔法：北美民間魔法指南"]);
readArticle([
  "我是誰：找回快樂與自由的隨身練習",
  "我是誰：找回快樂與自由的隨身練習",
]);
readArticle(["空間之外OUT OFF THE SPACE：沈中怡的空間學"]);
// 結果：透過重複檢查避免重複加入，提升效能
```

### clear()

**說明：** 從一個 Set 物件中移除其所有元素

```js
// 商品篩選
const selectedTags = new Set(["防曬", "保濕", "無香料"]);
console.log(selectedTags.size); // 3
// 點選「重設」
selectedTags.clear();
console.log(selectedTags.size); // 0
```

### intersection()

**說明：** 從兩個 set 集合回傳一個新集合，其中包含該集合和指定集合中相同者

```js
//找兩個學生都有空的時間
const studentA = new Set(["10:00", "13:00", "16:00", "18:00"]);
const studentB = new Set(["09:00", "13:00", "17:00", "18:00"]);

const availableTime = studentA.intersection(studentB);
console.log([...availableTime]);
// 結果：['13:00', '18:00']
```

### union()

**說明：** 從兩個 set 集合回傳一個新集合，其中包含該集合和指定集合中的元素或兩者

```js
// 跨裝置同步搜尋紀錄或瀏覽紀錄
const mobileHistory = new Set(["apple", "banana"]);
const desktopHistory = new Set(["banana", "cherry"]);

const mergedHistory = new Set([...mobileHistory, ...desktopHistory]);
console.log([...mergedHistory]);
// 結果：['apple', 'banana', 'cherry']
```

## ES6 Map (映射)

#### 定義

鍵值對的集合，可以存入多個多型資料，並依照插入順序保持有序，鍵可以是任何類型

#### 特性

1. 有序集合: 保持插入順序，可依照鍵進行存取和修改
2. 動態大小: 其長度並非固定，可以隨時新增/刪除鍵值對
3. 多型資料: 鍵和值都可以是任何類型，包括物件、函式、基本型別
4. 多種內建方法: 有許多內建方法對其進行操作，如 set、get、has、delete
5. typeof 是 object: typeof 輸出 Map 為物件，但可使用 instanceof Map 來區分是否為 Map

#### 用途

1. 儲存資料: 以鍵值對形式組織和管理相關資料
2. 集合+運算處理: 對 Map 進行查找、篩選、轉換等操作
3. 迴圈操作: 透過迴圈處理程式邏輯，常與 .size 屬性和 for...of 迴圈搭配使用
4. 函式式程式設計: 保持資料不可變，避免副作用，並提高代碼可維護性

## 建立 Map 的方法

### 方法一：直接創建 Map（最常用）

**說明：** 使用 `new Map()` 建立空的 Map，然後用 `set()` 方法添加鍵值對

```js
const map1 = new Map();
map1.set("Location", "Taiwan");
map1.set("Map", "Asia");
console.log(...map1);
// 執行結果: [ 'Location', 'Taiwan' ] [ 'Map', 'Asia' ]
```

### 方法二：由陣列建立 Map

**說明：** 使用二維陣列作為參數，每個子陣列包含 [key, value] 對

```js
const addr = [
  ["Location", "England"],
  ["Map", "Europe"],
];
const map2 = new Map(addr);
console.log(...map2);
// 執行結果: [ 'Location', 'England' ] [ 'Map', 'Europe' ]
```

### 方法三：從其他 Map 複製

**說明：** 將現有的 Map 作為參數傳入，創建一個新的 Map 副本

```js
const copyMap2 = new Map(map2);
console.log(...copyMap2);
// 執行結果: [ 'Location', 'England' ] [ 'Map', 'Europe' ]
```

### 方法四：由物件建立 Map（手動轉換）

**說明：** 使用 `Object.entries()` 將物件轉換為 [key, value] 陣列，再建立 Map

```js
const nycAddr = { lon: 40, lat: -73 };
const nycMap = new Map(Object.entries(nycAddr));
console.log(...nycMap);
// 執行結果: [ 'lon', 40 ] [ 'lat', -73 ]
```

## 常見的陣列方法

### Map.set()

**說明：** 設置 Map 的鍵值對，Map 可以使用物件作為鍵值

```js
const studentScores = new Map();

const studentA = { name: "Chris" };
const studentB = { name: "Jack" };

studentScores.set(studentA, 95);
studentScores.set(studentB, 88);

console.log(...studentScores);
// 結果：[{name: 'Chris'}, 95] [{name: 'Jack'}, 88]
```

### Map.get()

**說明：** 取得指定鍵的值

```js
const htmlAddr = new Map([
  ["Home", "www.mapexample.com"],
  ["about", "www.mapexample.com/about"],
  ["product", "www.mapexample.com/product"],
]);

for (const [key, value] of htmlAddr) {
  console.log(`<a href="${value}">${key}</a>`);
}
// 結果：<a href="www.mapexample.com">Home</a>
//       <a href="www.mapexample.com/about">about</a>
//       <a href="www.mapexample.com/product">product</a>
```

### Map.delete()

**說明：** 刪除指定鍵的項目

```js
const sessionsExample = new Map();
sessionsExample.set("session1", {
  userId: 123,
  expires: Date.now() - 3600 * 1000,
});
sessionsExample.set("session2", {
  userId: 456,
  expires: Date.now() + 3600 * 1000,
});

for (const [key, value] of sessionsExample) {
  if (value.expires <= Date.now()) {
    sessionsExample.delete(key);
    console.log(`刪除過期的session: ${key}`);
  }
}
// 結果：刪除過期的session: session1
```

### Map.has()

**說明：** 檢查是否存在指定的鍵

```js
const userPermission = new Map();
userPermission.set("admin", ["read", "write", "changeOwner"]);
userPermission.set("editor", ["read", "write"]);

function hasAdmin(permission) {
  return (
    userPermission.has(permission) &&
    userPermission.get(permission).includes("changeOwner")
  );
}

console.log(`目前權限為: ${hasAdmin("editor") ? "管理員" : "編輯者"}`);
// 結果：目前權限為: 編輯者
```

### Map.clear()

**說明：** 清除 Map 中的所有項目

```js
let cacheMap = new Map();

// 原本的資料
cacheMap.set("products", "oldProducts");
cacheMap.set("categories", "oldCategories");
console.log(...cacheMap);

// 模擬重新取得新資料時
cacheMap.clear(); // clear() 清掉

// 設新資料
cacheMap.set("products", "newProducts");
cacheMap.set("categories", "newCategories");

console.log(...cacheMap);
// 結果：['products', 'newProducts'] ['categories', 'newCategories']
```

### Map.keys()

**說明：** 取得 Map 中所有的鍵

```js
const userPermission2 = new Map([
  ["admin", ["read", "write", "changeOwner"]],
  ["editor", ["read", "edit"]],
  ["viewer", ["read"]],
]);

const permissionList = [...userPermission2.keys()];

for (let i = 0; i < permissionList.length; i++) {
  console.log(`<option>${permissionList[i]}</option>`);
}
// 結果：<option>admin</option>
//       <option>editor</option>
//       <option>viewer</option>
```

### Map.values()

**說明：** 取得 Map 中所有的值

```js
const shop = new Map([
  ["iPhone", 10],
  ["Airpods", 5],
  ["Apple Watch", 3],
]);

// 先透過values() 取每列的值再使用reduce 加總
const total = [...shop.values()].reduce((a, b) => a + b, 0);
console.log(...shop);
console.log("總數量:", total);
// 結果：總數量: 18
```

### Map.entries()

**說明：** 取得 Map 中所有的鍵值對

```js
const cart = new Map([
  ["apple", 2],
  ["banana", 3],
  ["strawberry", 1],
]);

for (const [product, quantity] of cart.entries()) {
  console.log(`${product} 有 ${quantity} 個`);
}
// 結果：apple 有 2 個
//       banana 有 3 個
//       strawberry 有 1 個
```

# 函數宣告(Function Declaration) 與 表達式 (Function Expression)

### 這是什麼: 使用 function 關鍵字直接宣告一個命名函數

```js
// 可在宣告前呼叫
console.log("宣告前呼叫:", NumPlus(12, 30)); // 360

function NumPlus(a, b) {
  return a * b;
}

console.log("宣告後呼叫:", NumPlus(5, 7)); // 35
```

### 特性：

- 會發生提升(Hoisting)，可以在宣告前就呼叫
- 函數名稱是必需的
- 在執行階段之前就會被載入
- 可以作為參數使用
- 常見於定義工具函式

## 函數表達式 (Function Expression)

### 這是什麼: 將函數指派給變數，而且可以是匿名的

```js
const division = function DoDivision(a, b) {
  return a / b;
};

// 只能在宣告後呼叫變數名
console.log("除法運算:", division(56, 5)); // 11.2
```

### 匿名函數表達式

```js
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function (num) {
  return num * 2;
});

console.log("使用匿名函數:", doubled); // [2, 4, 6, 8, 10]
```

### 箭頭函式 (Arrow Function) - 也是函數表達式的一種

```js
const plus = (a, b) => a + b;
console.log("加法運算:", plus(10, 32)); // 42
```

### 特性：

- 不會發生提升(Hoisting)，不可在宣告前就呼叫
- 函數名稱不是必需的
- 在宣告之前不會被載入
- 可以作為參數使用
- callback、事件處理、箭頭函式等場景

## 函數作為參數使用

### 函數可以作為參數傳遞給其他函數

```js
const calculate = (operation, a, b) => {
  return operation(a, b);
};

console.log("使用函數宣告:", calculate(NumPlus, 3, 4)); // 12
console.log("使用函數表達式:", calculate(division, 20, 4)); // 5
console.log("使用箭頭函式:", calculate(plus, 15, 25)); // 40
```

# 箭頭函數與 `this` 的關係

### 這是什麼: 函數表達式-箭頭函式的 this 作用域與一般函式不同，而是繼承「定義時」的外層 this

## 範例代碼

```js
//誤區一 物件方法
const permissionChecker = {
  user: "Root",

  //普通函式
  checkPermission1: function () {
    console.log(this);
    if (this.user === "Root") {
      return "管理員帳號";
    } else if (this.user === "editor") {
      return "編輯者帳號";
    } else {
      return "ERROR";
    }
  },

  //箭頭函式
  checkPermission2: () => {
    console.log(this);
    // 箭頭函式不綁定自己的 this，會往外層作用域（這裡是全域）去找
    if (this.user === "Root") {
      return "管理員帳號";
    } else if (this.user === "editor") {
      return "編輯者帳號";
    } else {
      return "ERROR";
    }
  },
};

console.log("函數宣告:", permissionChecker.checkPermission1()); // 正常
console.log("箭頭函式:", permissionChecker.checkPermission2()); // this 指向 window（或 undefined），結果通常為 undefined

// 誤區二 setTimeout / setInterval 中使用普通函式
//setTimeout 是在「全域作用域」中呼叫函式，不是 obj 呼叫的，所以普通函式反而會綁定到以下狀況
// 在瀏覽器中 this === window
// 在嚴格模式或模組中 this === undefined

// 普通函式
const obj1 = {
  name: "Chris",
  greet: function () {
    setTimeout(function () {
      console.log(`Hello, ${this.name}`); // 錯誤輸出 undefined
    }, 1000);
  },
};

obj1.greet();

// 箭頭函式
const obj2 = {
  name: "Chris",
  greet: function () {
    setTimeout(() => {
      console.log(`Hello, ${this.name}`); // 正確輸出 Chris
    }, 1000);
  },
};

obj2.greet();
```

# 預設參數、剩餘參數 (Rest parameters)、解構參數

# 預設參數

### 這是什麼: 預設參數允許為函數參數設定預設值，當調用函數時沒有提供該參數或傳入 undefined 時，就會使用預設值。

```js
function user({
  firstName,
  lastName,
  contact: { email, phone } = {}, //給外層物件設預設值為 {}
  password,
  preferences: {
    theme = "light", //預設值為 'light'
    language = "tw", //預設值為 'tw'
  } = {}, // = {} 若傳入資料未定義 preferences 時，就會使用空物件 {}，以防解構時發生錯誤 ( 給外層物件設預設值為 {} )
  timestamp = getDate(), // 預設值也可以是函式呼叫 (該函式回傳現在時間)
  isShortPassword = password.length <= 8, // 也可以用判斷前面值方式創建預設
}) {
  return {
    // 解構並回傳資料方便輸出
    firstName,
    lastName,
    contact: {
      email,
      phone,
    },
    password,
    preferences: {
      theme,
      language,
    },
    timestamp,
    isShortPassword,
  };
}

// 模擬傳入資料 (不設 contact\ preferences 來呈現 = {} 效果 )
const userdata = {
  firstName: "Test1",
  lastName: "Test1",
  password: "short",
  timestamp: 123456,
};

// 模擬傳入資料
const userdata2 = {
  firstName: "Test2",
  lastName: "Test2",
  password: "LongPassword",
  contact: {
    phone: "1234567890",
  },
  preferences: {
    theme: "Nord",
  },
};

console.log(user(userdata));
/*
{
  firstName: 'Test1',
  lastName: 'Test1',
  contact: { email: undefined, phone: undefined },
  password: 'short',
  preferences: { theme: 'light', language: 'tw' },
  timestamp: 123456,
  isShortPassword: true
}
*/
console.log(user(userdata2));
/*
{
  firstName: 'Test2',
  lastName: 'Test2',
  contact: { email: undefined, phone: '1234567890' },
  password: 'LongPassword',
  preferences: { theme: 'Nord', language: 'tw' },
  timestamp: 1752806237027,
  isShortPassword: false
}
*/
```

# 剩餘參數 (Rest parameters)

### 這是什麼: 剩餘參數使用...語法，可以將不定數量的參數收集到一個陣列中

```js
// ! 剩餘參數必須是最後一個參數
function introduce(name, age, ...hobbies) {
  console.log(`I'm ${name}，${age} years old`);
  console.log(`My habit：${hobbies.join(", ")}`);
}

introduce("Jack", 25, "Reading", "Swimming", "Photography");
// I'm Jack，25 years old
// My habit：Reading, Swimming, Photography
```

# 解構參數

### 這是什麼: 解構參數允許你直接從傳入的物件或陣列中提取值作為參數

```js
function location([x, y, z = 0]) {
  //預設為 0 (若不預設，未定義值為 undefined)
  return `座標：(${x}, ${y}, ${z})`;
}

console.log(location([10, 20])); // "座標：(10, 20, 0)"
console.log(location([5, 15, 25])); // "座標：(5, 15, 25)"
```

# return 與 yield

## return

### 這是什麼:

```js
function normalFunction() {
  console.log("步驟 1");
  return "第一個值";
  console.log("步驟 2"); // 這行不會執行
  return "第二個值"; // 這行不會執行
}
```

- 立即終止函式執行
- JavaScript 中每個函式都會返回一個值，沒有 return 語句時，隱式返回 undefined
- 返回值類型：可回傳任意型別的值 (空則為 undefined)
- 例外狀況: 即使在 try 或 catch 中使用 return，finally 區塊仍然會執行。
  如果 finally 中也有 return，它會覆蓋前面的回傳值

## yield (ES6)

### 這是什麼: 用於生成器函式中暫停執行，並回傳值。呼叫 .next() 則會從下個 yield 後繼續執行

```js
// 定義一個 生成器函式，傳入 items[] 和 每次數量
function* paginate(items, size) {
  for (let i = 0; i < items.length; i += size) {
    // 使用 yield 暫停函式執行，並返回目前這一頁
    // 下一次循環會從 yield 的地方繼續執行
    yield items.slice(i, i + size);
  }
}

// 呼叫 paginate 傳入陣列與每頁數量，成為一個生成器物件
const pages = paginate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16], 3);

for (let page of pages) {
  console.log(page); // 每次迭代會輸出一個分頁陣列
}
/*
[ 1, 2, 3 ]
[ 4, 5, 6 ]
[ 7, 8, 9 ]
[ 10, 12, 13 ]
[ 14, 15, 16 ]
*/
```

- 只能用在生成器函式內 (function\* )
- yield 是表達式: 可以用在賦值、條件判斷等地方
- yield 會暫停函式的執行並回傳一個值，等外部再呼叫 .next() 時才會從 yield 暫停點繼續執行
- 雙向通信: 外部可以用 .next(value) 把值傳給生成器函式， 生成器函式內的 yield 表達式本身會「回傳」給 .next() 所傳入的值
- 可搭配迭代器使用: 生成器函式物件同時也是一個 iterator（迭代器），配合 yield 產生的值可以用 for...of 迴圈取得

# Scope 與 Closure

## Scope 作用域

### 這是什麼: 簡單來說 Scope 是變數、函式定義與訪問的可見範圍

```js
const name = "Chris"; // 全域
console.log(name);
function isName(name) {
  // 變數定義在函式內，只能在該函式內部存取。
  //例外: var 不具區塊作用域，但有函式作用域 (但建議還避免使用 var)
  var newName = name;
  console.log(newName); // 函式作用域
}
isName("Jack");
if (true) {
  let name = "Vic";
  console.log(name); // 區塊作用域
}
```

## Closure 閉包

### 這是什麼: 指函式可以「記住」並存取它被定義時的作用域，即使那個作用域已經被關閉（函式已執行完畢）

- 閉包會導致變數保留在記憶體中，過度使用可能造成記憶體洩漏

#### 必備條件：

- 一個 內部函式（inner function）
- 該函式使用了「外層函式」的變數
- 且「外層函式已執行完畢」，但內部函式仍被引用

```js
function doCountDog(num = 0) {
  // 將傳入的數字儲存到區域變數 count
  let count = num;
  // 回傳一個函式，此函式就是閉包，會保留對 count 的存取權
  return function () {
    count++; // 閉包中修改 count
    return count; // 回傳更新後的 count
  };
}

function doCountCat(num = 0) {
  let count = num;
  // 使用箭頭函式建立閉包，效果與上面相同
  return () => {
    count++;
    return count;
  };
}

// 建立 dogCount 閉包，count = 10 儲存在函式內部
const dogCount = doCountDog(10);
// 每次呼叫 dogCount 都會操作同一個 count 值（因為是同一個閉包）
console.log(dogCount(), dogCount());
// 輸出：11 12

// 不儲存閉包，直接建立新的閉包並立即執行
console.log(doCountDog(10)(), doCountDog(10)());
// 每次都是新的閉包，count 都從 10 開始
// 輸出：11 11

// 建立 catCount 閉包，count = 21 儲存在函式內部
const catCount = doCountCat(21);
// 每次呼叫 catCount 都會操作同一個 count 值
console.log(catCount(), catCount());
// 輸出：22 23
```

# typeof 和 instanceof 運算符

## typeof

### 這是什麼: 用來檢查一個值的基本型別或某些特殊物件的類型

### typeof 運算符結果

| 類型         | 範例                   | typeof 回傳結果 |
| ------------ | ---------------------- | --------------- |
| 數字         | `typeof 123`           | `'number'`      |
| 字串         | `typeof 'hello'`       | `'string'`      |
| 布林         | `typeof true`          | `'boolean'`     |
| 未定義       | `typeof undefined`     | `'undefined'`   |
| 空值（錯誤） | `typeof null`          | `'object'`      |
| 符號         | `typeof Symbol()`      | `'symbol'`      |
| BigInt       | `typeof 10n`           | `'bigint'`      |
| 函式         | `typeof function() {}` | `'function'`    |
| 陣列或物件   | `typeof [1, 2, 3]`     | `'object'`      |
| 自訂物件     | `typeof { a: 1 }`      | `'object'`      |

- `typeof null` 返回 `'object'` 是 JavaScript 的一個歷史錯誤
- 陣列、物件、null 都會返回 `'object'`，需要其他方法來區分
- 函式是唯一會返回 `'function'` 的類型

## instanceof

### 這是什麼: 檢查物件是否為某個「建構函式的實例」，也就是在原型鍊（prototype chain）上是否存在指定的建構函式。

### instanceof 運算符結果

```js
function Animal() {}
function Dog() {}
Dog.prototype = Object.create(Animal.prototype);
const dog = new Dog();

console.log(dog instanceof Dog); // true
console.log(dog instanceof Animal); // true
console.log(dog instanceof Object); // true
console.log(dog instanceof Array); // false

const arr = [];
console.log(arr instanceof Array); // true
console.log(arr instanceof Object); // true 陣列是一種物件

const num = 5;
console.log(num instanceof Number); // false (雖然是數字，但並非 Number 產生的實例)
console.log(new Number(5) instanceof Number); // true

const str = "hello";
console.log(str instanceof String); // false (雖然是字串，但並非 String 產生的實例)
console.log(new String("hello") instanceof String); // true
```

## Module（模組）

- 模組是單一的 JavaScript 檔案或一組檔案，用來封裝程式碼邏輯，使其可以被匯入（import）與重用。

  ### 特點：

  - 每個檔案就是一個模組。
  - 可以匯出變數、函式、類別等。
  - 可以用 import / export（ESM）或 require / module.exports（CommonJS）使用

  ### 為什麼要使用 Module?

  - 封裝: 將功能拆分成獨立模組，讓每個模組只專注一個任務

    ```js
    export function login() {
      /* ... */
    }
    import { login } from "./auth.js";
    ```

  - 重用: 模組設計讓你可以在多個專案或檔案中使用相同的程式碼，不需要重寫

  - 維護及測試容易: 每個模組功能單一，方便維護及撰寫測試

### 如何使用 `import` 與 `export` 來引入與匯出模組

#### 合法的輸出語法

```js
    export var x = 42;                      // export a named variable
    export function foo() {};               // export a named function
    export default 42;                      // export the default export
    export default function foo() {};       // export the default export as a function
    export { encrypt };                     // export an existing variable
    export { decrypt as dec };              // export a variable as a new name
    export { encrypt as en } from 'crypto'; // export an export from another module
    export * from 'crypto';                 // export all exports from another module
```

#### 合法的輸入語法

```js
import "jquery"; // import a module without any import bindings
import $ from "jquery"; // import the default export of a module
import { $ } from "jquery"; // import a named export of a module
import { $ as jQuery } from "jquery"; // import a named export to a different name
import * as crypto from "crypto"; // import an entire module instance object
```

### 程式範例

```js
//module-export.js
// 驗證是否是今天的函式
// export 匯出 isToday module
export function isToday(date) {
  const d = new Date(date);
  const today = new Date();
  return d.toDateString() === today.toDateString();
}

//module-import.js
import { isToday } from "./module-export.js";

//使用 isToday module
console.log(isToday(new Date())); //true
```

## Package（套件）

- 套件是一個包含 package.json 檔案的資料夾，可以包含多個模組，通常是為了封裝一個完整功能，並能被安裝與發布到 npm

  ### 特點：

  - 是一個專案單位（可以被 npm 安裝的單位）
  - 包含一個 package.json，定義名稱、版本、依賴等
  - 通常包含一個主模組檔（例如 index.js）

  ### 為什麼要使用 Package?

  - 第三方功能整合: 可以輕鬆引入社群撰寫好的功能
  - 依賴管理: 自動記錄你用的套件與版本，方便安裝與部署
  - 模組化部署: 你可以把自己寫好的工具包變成套件，在其他專案或給他人使用
  - 團隊協作更容易: 大型專案可以拆成多個 packages ，每個模組分工清楚

  ```js
  // npm install date-fns 安裝第三方 package
  // 引入使用第三方套件的 isToday
  // 使用 as 來重命名
  import { isToday as today } from "date-fns";

  console.log(today(new Date())); // true
  ```

## Promise (ES6) 是什麼？

Promise 是一種「非同步操作的容器」，用來處理尚未完成但未來會完成的任務（如：資料請求、讀檔、計時器等）

### Promise 的三種狀態：

- Pending：初始狀態
- Fulfilled：執行完成狀態
- Rejected：執行失敗狀態

### 特性

- 透過 .then() 處理成功結果

  ```js
  .then(result => {
  console.log("成功：", result); });
  ```

- 透過 .catch() 處理錯誤

  ```js
  .catch(error => {
  console.error("錯誤：", error); })
  ```

- 可以鏈式呼叫（Chaining）

  ```js
  getData()
    .then((user) => getOrders(user.id))
    .then((orders) => console.log(orders))
    .catch((err) => console.error(err));
  ```

- 可以合併多個 Promise 一起處理

  - Promise.all() – 等所有都完成才回傳

  ```js
  Promise.all([data1, data2]).then((results) => console.log(results));
  ```

  - Promise.race() – 回傳最先完成者

  ```js
  Promise.race([slow, fast]).then((result) => console.log(result));
  ```

### 使用範例

```js
function getData(url) {
  // 創建並返回一個新的 Promise
  return new Promise((resolve, reject) => {
    // 使用 setTimeout 模擬網路請求的延遲（1秒）
    setTimeout(() => {
      // 檢查 URL 是否為指定的有效網址
      url === "www.example.com"
        ? resolve("Finished with " + url)
        : reject("Error: " + url);
    }, 1000);
  });
}

// 第一個測試：使用正確的 URL
getData("www.example.com")
  .then((res) => {
    // 當 Promise 成功解決時執行這裡
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// 第二個測試：使用錯誤的 URL
getData("ErrorExample")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    // 當 Promise 被拒絕時執行這裡
    console.log(err);
  });
```

## Async/Await 是什麼？

是 JavaScript ES2017 (ES8) 引入的語法糖，讓非同步程式碼的撰寫和閱讀變得更加直觀和簡潔。它建立在 Promise 的基礎上，提供了一種更接近同步程式碼風格的非同步程式設計方式

### 特性

async

- async 函數返回 Promise (可以使用 .then() 和 .catch() 方法)
  await
- await 只能在 async 函數內部使用
- await 會暫停函數執行，直到 Promise 被解析或拒絕
- 多個 await 會依序執行

### 優點

- 可讀性更好：程式碼結構更接近同步程式碼
- 錯誤處理更直觀：可以使用 try/catch 統一處理錯誤
- 除錯更容易：調試器可以更好地追蹤執行流程
- 條件邏輯更簡潔：避免複雜的 Promise 鏈

### 基本語法

```js
async function example() {
  const result = await somePromise;
  return result;
}
```

### 範例

```js
async function example() {
  const result = await somePromise;
  return result;
}
```

## Try...Catch 是甚麼

用於在代碼執行期間捕獲和處理錯誤

### 語法特性：

- Try (必要)： 初始狀態
- Catch (必要)： 如果 try 語句發生錯誤執行的代碼塊。如果 try 語句沒發生錯誤該代碼不會執行。
- err： 執行失敗狀態
- Finally： 無論 try / catch 的結果如何都會執行。
- throw: 自訂錯誤用的，當某些不是 javascript 的錯誤就可以使用 throw 來輸出自訂錯誤訊息

### 主要的錯誤類型:

- EvalError: `eval()`函數的使用或定義不符合規範。
- RangeError: 數組操作時發生越界。
- ReferenceError: 引用了非法或無法識別的數值。
- SyntaxError: 發生語法解析錯誤。
- TypeError: 操作的類型不正確。
- URIError: URL 處理函數使用不當。

### 也可以自動錯誤類型:

```js
class customErrorType extends Error {
  constructor(message) {
    super(message); //呼叫 Error 父類別的 constructor
    this.name = "可自訂錯誤名稱";
  }
}
// 使用  throw new customErrorType
```

### 特性

- 只捕捉 Runtime Error

  ```js
  //語法錯誤會在javascript 解析階段就被捕會中止，catch 不會被執行
  try{
    //像是語法錯誤
    console.log('少了括號'
    // 引用未定義的變數
    console.log(undefinedVariable);
    // ...等
  }catch(err){
      console.log('不會被執行')
  }
  ```

- 只捕捉同步錯誤（不自動捕捉非同步錯誤）

  ```js
  try {
    setTimeout(() => {
      throw new Error("這不會被 catch");
    }, 100);
  } catch (err) {
    console.log("這不會執行");
  }
  ```

- 一旦進入 catch，後續 try 區塊的程式碼不會再執行

  ```js
  try {
    throw new Error("Boom");
    console.log("這行不會執行");
  } catch (err) {
    console.log("error:", err.message);
  }
  ```

- 支援巢狀

  ```js
  try {
    try {
      throw new Error("內層錯誤");
    } catch (err) {
      console.log("內層:", err.message);
      throw err; // 往外拋
    }
  } catch (err) {
    console.log("拋到這裡:", err.message);
  }
  ```

  - 可配合 instanceof 區分錯誤型別

  ```js
  try {
    throw new TypeError("Type 不對");
  } catch (err) {
    if (err instanceof TypeError) {
      console.log("is TypeError");
    } else {
      console.log("other error");
    }
  }
  ```

### 使用範例

```js
async function tryCatchTest() {
  try {
    // 因為使用 await，這個錯誤「會」被 catch 捕獲
    await timeoutDoCatch();
    // 陷阱: 雖然使用await， 但是
    await timeoutDoNoCatch();
  } catch (err) {
    console.log("這邊是被捕捉的error :", err);
  }
}

const timeoutDoCatch = () => {
  return new Promise((_, reject) => {
    // 透過 reject 拋出錯誤，這樣可以被 await 和 try-catch 捕獲
    setTimeout(() => {
      // Promise 中使用 reject 而不是 throw
      reject(new customError("這會被捕獲 timeout error"));
    }, 1000);
  });
};

// try-catch 可以捕捉：
// - 同步執行的 runtime error
// - await Promise 中的錯誤
// - 手動 throw 的錯誤

const timeoutDoNoCatch = () => {
  // 直接 throw 錯誤，這個錯誤會變成「未捕獲的異常」
  // 因為它不在 Promise 中，try-catch 無法捕獲它
  setTimeout(() => {
    throw new customError("這不會被捕獲 timeout error");
  }, 1000);
};

// try-catch 無法捕捉：
// - 語法錯誤 (Syntax Error)
// - setTimeout/setInterval 回調中的錯誤
// - 事件監聽器中的錯誤
// - 未包裝在 Promise 中的異步錯誤

// 自訂錯誤類別
class customError extends Error {
  constructor(message) {
    super(message); // 呼叫父類別的建構函式
    this.name = "customError"; // 設定錯誤名稱
  }
}

tryCatchTest();
```

## 事件循環 (Event Loop) 的概念

### 同步與非同步

Javascript 執行上是單執行的，所以需要透過同步與非同步方式確保耗時運算不阻塞運行

- 同步: 指的是程式碼的執行順序是由上往下一行一行的執行，同一時間只能做一件事
- 非同步(異步): 先將工作丟出去給其他 Runtime 處理，不阻塞後續程式的執行，處理完成後再將結果傳給回調函式，然後等待 Event Loop

### 事件迴圈 Event Loop 的運作流程

Event Loop 是 JavaScript 中的一個機制，它允許 JavaScript 處理非同步操作。

它的主要作用是監控 Call Stack（呼叫堆疊）和 Task Queue（任務佇列），當 Call Stack 清空時，Event Loop 會從 Task Queue 中取出回調函式，並將它們推入 Call Stack 進行執行。

1. Javascript engine 執行 call stack 中的任務。
2. 當遇到 Web APIs 或是無法處理的任務時會交給 Javascript runtime 執行，Javascript runtime 處理完成後會將資料交給 callback function，並將 callback function 放進 queue 中，形成 Callback Queue。
3. Javascript runtime 等待 call stack 中的任務全部執行結束變成空的，從 callback queue 中拉取第一個任務放進 call stack，回到第一步繼續重複循環下去。

### 微任務（Microtask）與宏任務（Macrotask）

- 微任務（Microtask)
  - 微任務的優先級比宏任務高，這意味著微任務會在每次事件循環結束前執行
    - Promise.then()、catch()、finally()
    - async/await（內部其實是 Promise）
    - queueMicrotask()
    - DOM 監聽 (DOM 結構變化監聽，程式或 API 修改)
    - MutationObserver (監控 DOM 的 javascript 的原生 API)
- 宏任務（Macrotask）
  - setTimeout()、setInterval()
  - requestAnimationFrame()
  - I/O 事件（如讀檔、網路請求回傳）
  - DOM 事件 (使用者互動事件)

### 範例代碼

```js
console.log("1. 同步開始");

setTimeout(() => {
  console.log("2. setTimeout 宏任務");
}, 0);

Promise.resolve().then(() => {
  console.log("3. Promise 微任務");
});

queueMicrotask(() => {
  console.log("4. queueMicrotask 微任務");
});

console.log("5. 同步結束");

// 結果:
// 1. 同步開始
// 5. 同步結束
// 3. Promise 微任務
// 4. queueMicrotask 微任務
// 2. setTimeout 宏任務
```

## 說明 `setTimeout` 與 `setInterval` 的概念與使用

### setTimeout

- 安排一段程式在指定毫秒(ms)後只執行一次

#### 語法

```js
setTimeout(() => {
  console.log("1 秒後將輸出");
}, 1000);

// 取消語法
const timeoutId = setTimeout(() => console.log("hello"), 3000);
clearTimeout(timeoutId); // clearTimeout
```

### setInterval

- 安排一段程式每隔指定毫秒重複執行

#### 語法

```js
setInterval(() => {
  console.log("每 2 秒輸出一次");
}, 2000);

// 取消語法
const intervalId = setInterval(() => console.log("hello"), 1000);
clearInterval(intervalId); // clearInterval
```

### 特性

- 不保證精準時間: 延遲與重複時間可能因主執行緒（Call Stack）塞滿而變慢
- 使用 setInterval() 時，如果裡面的 callback 執行得太慢（比間隔時間還久），會造成回呼函式堆疊排隊，進而導致執行混亂或系統卡住

## 範例

```js
function apiSimulator(delay) {
  return new Promise((resolve, reject) => {
    // 隨機失敗
    if (Math.random() > 0.5) {
      setTimeout(function () {
        reject("failed");
      }, delay);
    } else {
      setTimeout(function () {
        resolve("ok");
      }, delay);
    }
  });
}

const delay = 1000;

function getDataUseTimeout(delay) {
  console.log("模擬 API 回應");
  //使用鍊式可不加async來補獲 err
  apiSimulator(delay)
    .then((res) => {
      console.log("Timeout:", res);
    })
    .catch((err) => {
      console.log("Timeout: 失敗", err);
    })
    .finally(() => {
      // 每次執行完隔兩秒才再次執行 (安全實現模擬Interval)
      setTimeout(() => getDataUseTimeout(delay), delay);
    });
}

getDataUseTimeout(delay);

//1. setTimeout 遞迴方式：
//    - 優點：確保每次調用完成後才開始下一次，時間間隔更精確
//    - 優點：不會有重疊執行的問題
//    - 缺點：如果 API 調用時間很長，總間隔時間會變長

let isProcessing = false; // 防止重疊執行的旗標
const getDataUseInterval = setInterval(async () => {
  // 如果上一次調用還在處理中，直接返回，避免重疊執行
  if (isProcessing) return;
  // 設置處理中狀態
  isProcessing = true;
  try {
    const result = await apiSimulator(delay);
    console.log("Interval:", result);
  } catch (err) {
    console.log("Interval: 失敗", err);
  } finally {
    // 允許下一次 interval 觸發
    isProcessing = false;
  }
}, delay);

//2. setInterval 方式：
//    - 優點：嚴格按照設定的時間間隔觸發
//    - 缺點：需要額外的 isProcessing 旗標來防止重疊
//    - 缺點：如果 API 調用時間超過間隔時間，可能會積累執行請求
```

## 如何理解 `callback` 和 `Promise` 的區別與優勢

## Callback（回呼函式）

是一個函式，作為參數傳入另一個函式中，在非同步操作完成後執行。

- 寫法: 函式作為參數
- 錯誤處理: 通常是第一個參數處理 error
- 可讀性: 較低
- 多步驟非同步: 難以維護
- async: 無法搭配

## Promise（承諾物件）

非同步操作後，最終的成功值（success value）或失敗訊息（failure reason）的處理函式

- 寫法: 回傳一個 Promise 物件
- 錯誤處理: 使用.catch() 處理
- 可讀性: 較高，可鏈式處理
- 多步驟非同步: 容易組合與串接
- async: 可直接搭配使用

## 比對範例

## Callback

```js
// 檢查使用者是否存在
function checkUser(email, callback) {
  setTimeout(() => {
    console.log("使用者不存在", email);
    callback(null, email);
  }, 500);
}

// 註冊新使用者
function registerUser(email, name, password, callback) {
  setTimeout(() => {
    console.log("註冊成功", name);
    callback(null, true);
  }, 500);
}

// 寄出驗證信
function sendEmailValidation(email, callback) {
  setTimeout(() => {
    if (email) {
      console.log("寄出成功", email);
      callback(null, true);
    } else {
      console.log("缺少email資料");
      callback("缺少email資料");
    }
  }, 2000);
}

// 驗證信箱驗證碼
function emailValidation(emailCode, callback) {
  const code = 123456;
  setTimeout(() => {
    if (emailCode === code) {
      console.log("驗證成功", emailCode);
      callback(null, true);
    } else {
      console.log("驗證失敗");
      callback("驗證失敗");
    }
  }, 500);
}

// callback 地獄
checkUser("example@gmail.com", (err, email) => {
  if (err || !email) return console.error("電子郵件驗證失敗", err);
  registerUser(email, "Chris", "12345678910", (err, state) => {
    if (err || !state) return console.error("註冊失敗", err);
    sendEmailValidation(email, (err, state) => {
      if (err || !state) return console.error("寄出驗證信失敗", err);
      emailValidation(123456, (err, state) => {
        if (err || !state) return console.error("代碼驗證失敗", err);
        console.log("歡迎加入!");
      });
    });
  });
});
```

## Promise

```js
// 檢查使用者是否存在
function checkUser(email) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("使用者不存在", email);
      resolve({ state: false, email });
    }, 500);
  });
}

// 註冊新使用者
function registerUser(email, name, password) {
  return new Promise((resolve, reject) => {
    if (!email || !name || !password) {
      return reject("缺少欄位");
    }
    setTimeout(() => {
      console.log("註冊成功", name);
      resolve({ state: true, email });
    }, 1000);
  });
}

// 寄出驗證信
function sendEmailValidation(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email) {
        console.log("寄出成功", email);
        resolve(true);
      } else {
        console.log("缺少email資料");
        reject("缺少email資料");
      }
    }, 2000);
  });
}

// 驗證信箱驗證碼
function emailValidation(emailCode) {
  const code = 123456;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (emailCode === code) {
        console.log("驗證成功");
        resolve(true);
      } else {
        console.log("驗證失敗");
        reject("驗證失敗");
      }
    }, 2000);
  });
}

// Promise 鍊式註冊流程
checkUser("example@gmail.com")
  .then((result) => {
    return registerUser(result.email, "Chris", "123456");
  })
  .then((result) => {
    return sendEmailValidation(result.email);
  })
  .then((result) => {
    return emailValidation(123456);
  })
  .then((result) => {
    if (result) {
      // 驗證成功
      console.log("歡迎加入!");
    }
  })
  .catch((err) => {
    // 任一步驟失敗時，會觸發這裡的錯誤處理
    console.log(err);
  });
```

## JavaScript 的提升是什麼意思

在程式真正開始執行之前，JavaScript 會先進行一個重要的準備階段，稱為編譯階段（Compilation Phase）。
在這個階段，JavaScript 解譯器會預先掃描整份程式碼，並將某些特定的宣告（例如函式或 var 變數）「自動搬到程式的最上面」

### 特性

- 變數可以在宣告前使用 (不建議使用這些技巧，會降低程式可讀性與可維護性)
- 讓函式可以彼此互相呼叫

### Hosting 優點

- 可以先寫「邏輯」，後面再補「細節」
- 讓函式定義集中管理，程式架構更清晰

### Hosting 缺點

- 函式宣告會整個被提升，但 var 只提升「名稱」而不提升「值」，而 let 和 const 則會進入暫時性死區

## `var`, `let` 與 `const` 的提升

### var：

#### 只有宣告的變數會提升，賦值不會提升

#### 所以 console.log(a) 印出 undefined，不是錯誤。

```js
console.log(a); // undefined（因為 var 被提升，但沒賦值）
var a = 10;
```

### let / const：

#### 也會被「宣告提升」，但進入「暫時性死區（TDZ, Temporal Dead Zone）」，直到程式執行到賦值那一行。

#### 在 TDZ 內存取會出現 ReferenceError，即使變數其實已經宣告過。

```js
// TDZ
console.log(b); // Error
let b = 20;

// TDZ
console.log(c); // Error
const c = 30;
```

## `function` 的提升

### function 宣告

- 名稱 + 內容都提升

```js
sayHi(); // Hi!

function sayHi() {
  console.log("Hi!");
}
```

### var + 函式表達式

- 提升變數，值是 undefined

```js
sayHi(); // ERROR

var sayHi = function () {
  console.log("Hi!");
};
```

### let / const 表達式

- 不會提升（TDZ 暫時性死區)

```js
sayHi(); // ERROR

const sayHi = function () {
  console.log("Hi!");
};
```

### 箭頭函式

- 不會提升（TDZ 暫時性死區)

```js
sayHi(); // ERROR

const sayHi = () => {
  console.log("Hi!");
};
```

# 日誌與異常處理

## log 類型的介紹

- console.log("log"); // 一般除錯用途
- console.info("info"); // 與 log 類似，語意更明確
- console.warn("warn"); // 表示潛在風險或非預期行為
- console.error("error"); // 表示嚴重錯誤

## Winston

winston 是一個功能強大且彈性極高的 Node.js 日誌紀錄（logging）套件，廣泛應用於各種 Node.js 應用中，用來記錄伺服器訊息、錯誤、除錯資訊等。它支援將訊息輸出到 console、檔案、HTTP、資料庫 等多個通道（transports）

### 特性

- 多 transport 支援: 可同時輸出到多個目標（console、file、http...）

- 支援等級: 像是 error、warn、info、debug 等分級輸出

- Express 支援: 可結合 express-winston 中介層，記錄 API 請求

- 可擴充、自訂 transport: 可以自訂儲存邏輯（如寫入資料庫）

- 自訂輸出格式: 支援 timestamp、json、colorize、自訂格式

  ```js
  winston.format.combine(
    winston.format.colorize(), // 顏色輸出
    winston.format.timestamp(), // 時間戳
    winston.format.printf(({ level, message, timestamp }) => {
      return `[${timestamp}] ${level}: ${message}`; //自訂紀錄方式
    })
  );
  ```

### 輸出錯誤類型

- error 錯誤（系統無法運作）
- warn 警告（可運作但有風險）
- info 一般訊息（正常狀態）
- http HTTP 請求紀錄（可自訂）
- verbose 比 info 更詳細的訊息
- debug 除錯訊息
- silly 最細的紀錄資訊

### 主要風格

#### camelCase

​ 第一個單字小寫，其後每個單字首字母大寫 userName, getData

#### PascalCase

​ 每個單字首字母皆大寫（用於類別） UserModel, AppService

#### UPPER_SNAKE_CASE

​ 全大寫，單字用底線分隔（常用於常數）MAX_LIMIT, API_KEY

#### kebab-case

​ 小寫，單字用 - 分隔（常用於檔案與 NPM 套件）date-utils, my-library

### 命名慣例

#### Package (kebab-case)

​ NPM 套件名稱慣用格式

```js
winston, react - dom;
```

#### Module (常用 kebab-case)

​ 檔名常用 kebab-case

```js
userController.js, utils.mjs;
```

#### Variable (camelCase)

​ 全大寫，單字用底線分隔（常用於常數）MAX_LIMIT, API_KEY

```js
userName, totalCount;
```

#### Constant (UPPER_SNAKE_CASE)

​ 全大寫＋底線，表示不可變值或環境變數

```js
MAX_RETRIES, API_URL;
```

#### Function (camelCase)

​ 小寫開頭動詞 + 名詞，動作導向命名

```js
getUserData(), calculateTotal();
```

#### Class (PascalCase)

​ 每個單字首字母大寫，用於建構函式與類別

```js
User, HttpClient;
```

#### Event Handler (camelCase)

​ 通常以 handle 或 on 開頭，清楚表明是事件處理

```js
handleClick, onSubmit;
```

### 開發技巧

- 變數名要有意義，避免使用 a, b, temp 這類模糊命名

- 函式命名用動詞開頭：如 getUser(), updateProfile()

- boolean 命名用 is/has/can 開頭：如 isAdmin, hasPermission

- 事件 handler 用 on 或 handle 開頭

# Git (分散式版本控制軟體)

### 什麼是 git

Git 是分散式版本控制系統，這表示專案的本機複本是完整的版本控制存放庫。 這些功能完整的本機存放庫可讓您輕鬆地離線或遠端工作。 開發人員在本機認可其工作，然後同步處理其存放庫複本與伺服器上的複本。

## 如何建立 Git Repository

### 情境一：全新的專案

**情境：** 你剛開始一個新的網站專案，想要開始使用 Git 來管理程式碼。

#### 建立好 repository 後 (常見以 GitHub 為主)

首先在 GitHub 上建立一個新的 repository，就像在雲端建立一個新的資料夾。

#### 在當前專案目錄下進行 git init

```bash
git init -b main
```

這就像是在你的專案資料夾裡放入一個「監視器」，開始監控所有檔案的變化。

#### 進行 Add & Commit

```bash
git add .
git commit -m "Initial commit"
```

這就像是拍了一張「快照」，記錄目前專案的狀態。

#### 設定 repository 源：

```bash
git remote add origin <http or ssh.git(repository)>
```

這是告訴本地的 Git：「我的雲端備份位置在這裡」。

#### 推送 commit 到 repository 源：

```bash
git push -u origin main
```

把你的「快照」上傳到雲端備份。

### 情境二：已經有使用 Git 版控的專案

**情境：** 你接手了一個已經在使用 Git 的專案，但需要更換到新的 GitHub repository。

#### 修改/新增 repository 源：

```bash
git remote set-url origin <http or ssh.git(repository)>
```

就像是「搬家」，把雲端備份的地址改成新的位置。

#### 推送 commit 到 repository 源：

```bash
git push -u origin main
```

### .gitignore 的意義

- 在開發專案時，工作目錄下可能經常會有新的檔案產生 (可能是透過 Visual Studio 工具產生的那些暫存檔案或快取檔案)，可能有許多檔案並不需要列入版本控管，所以必須要排除這些檔案，我們稱為「忽略清單」。
  像是: node_modules .DS_store .temp .idea...

### 如何進行提交(commit)

- 修改或新增檔案

- 使用 git status 檢查變更

  ```
  git status
  ```

- 使用 git add 將修改的檔案 stage

  ```
  git add ...
  ```

- 使用 git commit 提交變更

  ```
  git commit -m "description"
  ```

- 選擇是否推送（git push）到遠端儲存庫

  ```
  git push
  ```

## 檔案還原

### 情境一：取消 git add

**情境：** 你不小心把不想提交的檔案加到了 staging area。

```bash
git restore --staged <檔案名稱>
# 或
git reset HEAD <檔案名稱>
```

### 情境二：撤回上一個 commit

**情境：** 你剛才提交了一個 commit，但發現裡面有錯誤，想要撤回。

```bash
# 保留 stage - 就像「反悔」但東西還在暫存區
git reset --soft HEAD~1

# 移除 stage 但保留修改 - 回到修改後、還沒 add 的狀態
git reset --mixed HEAD~1

# 完全清除修改 - 就像這次修改從未發生過（危險！）
git reset --hard HEAD~1
```

## 如何切換 Branch

**情境：** 你正在開發一個電商網站，主要功能在 `main` 分支，但你想要開發一個新的「購物車」功能，又不想影響到穩定的主要程式碼。

### 創建並切換到新分支：

```bash
# 創建新分支
git branch shopping-cart

# 切換分支（老方法）
git checkout shopping-cart

# 切換分支（新方法，官方建議）
git switch shopping-cart

# 創建並同時切換（新方法）
git switch -c shopping-cart
```

## 何為衝突 (Conflict)

**情境：** 你和同事小明都在修改同一個檔案的同一行程式碼：

**你的修改：**

```javascript
const welcomeMessage = "歡迎來到我們的網站！";
```

**小明的修改：**

```javascript
const welcomeMessage = "Welcome to our website!";
```

當你們想要合併程式碼時，Git 不知道該保留哪一個版本，就會產生「衝突」。

### 衝突的樣子：

```javascript
<<<<<<< HEAD
const welcomeMessage = "歡迎來到我們的網站！";
=======
const welcomeMessage = "Welcome to our website!";
>>>>>>> feature-branch
```

### 解決方法：

1. 打開衝突的檔案
2. 決定要保留哪個版本，或者合併兩個版本
3. 刪除 `<<<<<<<`、`=======`、`>>>>>>>` 這些標記
4. 存檔並提交
````
