## Array (陣列)
#### 定義
有序規則的物件，可以存入多個多型資料，並依照順序有 index (從 0 開始)
#### 特性
1. 有序集合: 有固定順序，可依照索引進行修改
2. 動態大小: 其長度並非固定，可以隨時新增/刪除元素
3. 多型資料: 可以混和存入多種類型元素
4. 多種內建方法: 有許多內建方法對其進行修改
5. typeof 是 object: typeof 輸出陣列為物件，但可使用isArray方法來區分是否為陣列
#### 用途
1. 儲存資料:
2. 集合+運算處裡: 對陣列值進行多種查找\ 排序\ 篩選\ 運算
3. 迴圈操作: 透過迴圈處裡程式邏輯\ 輸出UI列表，常與 .length 屬性搭配使用
4. 函式式程式設計: 保持資料不可變，避免副作用，並提高代碼可維護性

## 建立 Array 的方法

### 方法一：直接創建 Array (最常用)
**說明：** 使用方括號 [] 直接建立陣列，最直觀且常用的方式
```js
const fruits = ['apple', 'orange', 'banana', 'strawberry'];
console.log('水果店商品清單:', fruits);
// 執行結果: 水果店商品清單: [ 'apple', 'orange', 'banana', 'strawberry' ]
```

### 方法二：使用 new Array() 建構子
**說明：** 透過 Array 建構子建立陣列，適用於動態建立
```js
const monthlyRevenue = new Array(150000, 180000, 200000);
console.log('前三個月營收:', monthlyRevenue);
// 執行結果: 前三個月營收: [150000, 180000, 200000]
```

### new Array() 的誤區
**說明：** 當只傳入一個數字參數時，會建立指定長度的空陣列而非包含該數字的陣列
```js
function createScoreArray(score) {
    return new Array(score);
}
console.log('想要加入分數 85 卻得到:', createScoreArray(85));
// 執行結果: 想要加入分數 85 卻得到: [ <85 empty items> ]
```

### 方法三：Array.of() 可解決 new Array() 單一數字問題
**說明：** 無論參數是什麼類型或數量，都會建立包含這些參數的陣列
```js
const productId = Array.of(12345);
console.log('商品 ID:', productId);
// 執行結果: 商品 ID: [12345]
```

### 方法四：Array.from() 動態建立
**說明：** 從類陣列物件或可迭代物件建立新陣列，並可搭配映射函式
```js
const pageNumbers = Array.from({length: 5}, (_, index) => index + 1);
console.log('分頁號碼:', pageNumbers);
// 執行結果: 分頁號碼: [1, 2, 3, 4, 5]
```

## 常見的陣列方法

### push()
**說明：** 在陣列末端新增一個或多個元素，並回傳新的陣列長度
```js
const shoppingList = ['牛奶', '蛋']
const newLength = shoppingList.push('香蕉', '布丁')
console.log('購物清單內容：', shoppingList)
console.log('購物清單的總項目數：', newLength)
// 執行結果:
// 購物清單內容： [ '牛奶', '蛋', '香蕉', '布丁' ]
// 購物清單的總項目數： 4
```

### pop()
**說明：** 移除並回傳陣列最後一個元素
```js
const historyStack = ['首頁', '商品頁', '商品詳情']
const lastVisitedPage = historyStack.pop()
console.log('返回前的頁面是：', lastVisitedPage)
console.log('目前瀏覽紀錄：', historyStack)
// 執行結果:
// 返回前的頁面是： 商品詳情
// 目前瀏覽紀錄： [ '首頁', '商品頁' ]
```

### shift()
**說明：** 移除並回傳陣列第一個元素
```js
const paddingUser = [
    {name: 'Jack', email: 'jack@gmail.com'},
    {name: 'Chris', email: 'Chris@gmail.com'},
    {name: 'Vic', email: 'Vic@gmail.com'},
]
function RegisterUser() {
    if (paddingUser.length > 0) {
        const currentUser = paddingUser.shift();
        console.log('現在註冊的會員是', currentUser.name);
        RegisterUser()
    } else {
        console.log('所有會員註冊完成');
    }
}
RegisterUser()
// 執行結果:
// 現在註冊的會員是 Jack
// 現在註冊的會員是 Chris
// 現在註冊的會員是 Vic
// 所有會員註冊完成
```

### unshift()
**說明：** 在陣列開頭新增一個或多個元素，並回傳新的陣列長度
```js
const todoList = ['買牛奶', '清貓砂']
const newTodo = '拿包裹'
const todoListLength = todoList.unshift(newTodo)
console.log('unshift() 回傳陣列長度', todoListLength)
console.log('unshift() todoList 新增', newTodo)
console.log('unshift() todoList', todoList)
// 執行結果:
// unshift() 回傳陣列長度 3
// unshift() todoList 新增 拿包裹
// unshift() todoList [ '拿包裹', '買牛奶', '清貓砂' ]
```

### splice()
**說明：** 在指定位置刪除元素並可同時插入新元素，回傳被刪除的元素陣列
```js
const event = ['空閒', '預定', '預定', '空閒', '預定', '空閒']
const newChange = event.splice(0, 2, '空閒')
console.log('splice() 移除預定', newChange)
console.log('splice() 新的預定表', event)
// 執行結果:
// splice() 移除預定 [ '空閒', '預定' ]
// splice() 新的預定表 [ '空閒', '空閒', '空閒', '預定', '空閒' ]
```

### fill()
**說明：** 用指定值填充陣列中的所有元素或指定範圍的元素
```js
const buttonStates = Array(10).fill('disable')
buttonStates.fill('active', 5)
console.log('初始化按鈕狀態:', buttonStates)
// 執行結果: 初始化按鈕狀態: [ 'disable', 'disable', 'disable', 'disable', 'disable', 'active', 'active', 'active', 'active', 'active' ]
```

### copyWithin()
**說明：** 在陣列內部複製指定範圍的元素到另一個位置，會覆蓋原有元素
```js
const formTemplate = ['空', '空', '空', '姓名', '電話', '地址'];
formTemplate.copyWithin(0, 3);
console.log('表單欄位快速填充:', formTemplate);
// 執行結果: 表單欄位快速填充: ['姓名', '電話', '地址', '姓名', '電話', '地址']
```

### sort()
**說明：** 對陣列元素進行排序，預設按字符串排序，可自定義比較函式
```js
const users = [
    {name: 'Amy', age: 28},
    {name: 'Bob', age: 18},
    {name: 'Whora', age: 35},
];
console.log('用戶依年齡升冪排序:', users.sort((a, b) => a.age - b.age));
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
const hotItems = ['熱銷A', '熱銷B']
const newItems = ['新品X', '新品Y']
const allItems = hotItems.concat(newItems)
console.log('所有商品:', allItems)
// 執行結果: 所有商品: [ '熱銷A', '熱銷B', '新品X', '新品Y' ]
```

### join()
**說明：** 將陣列元素連接成字串，可指定分隔符
```js
const row = ['Jack', 'jack@gmail.com', '已啟用']
const csvLine = row.join(',')
console.log('CSV 輸出:', csvLine)
// 執行結果: CSV 輸出: Jack,jack@gmail.com,已啟用
```

### slice()
**說明：** 從陣列中提取指定範圍的元素，回傳新陣列
```js
console.log('\n===slice()===');
const data1 = [10, 20, 30, 40, 50]
const firstTwo = data1.slice(0, 2)
console.log('取出前兩筆資料', firstTwo)
// 執行結果: 
// ===slice()===
// 取出前兩筆資料 [ 10, 20 ]
```

### map()
**說明：** 對陣列每個元素執行函式，並回傳新的陣列
```js
const items = ['Home', 'About', 'Contact'];
const listItems = items.map(item => `<li>${item}</li>`);
console.log(listItems.join(''));
// 執行結果: <li>Home</li><li>About</li><li>Contact</li>
```

### filter()
**說明：** 根據指定條件篩選陣列元素，回傳符合條件的新陣列
```js
console.log('\n===filter()===');
const users = [
     { name: 'Amy', age: 28 },
     { name: 'Bob', age: 18 },
     { name: 'Whora', age: 35 },
];
users.forEach(user => {
    if (user.age >= 20) {
        user.active = true;
    } else {
        user.active = false;
    }
})
console.log('過濾 active 為 true 的使用者')
users
    .filter(user => user.active)
    .forEach(user => console.log(user.name));
// 執行結果:
// ===filter()===
// 過濾 active 為 true 的使用者
// Amy
// Whora
```

### flat()
**說明：** 將多維陣列展平成一維陣列，可指定展平的深度
```js
const data2 = [0, 1, 2, [3, 4, [5],[6, 7 ,8, [9, 10]]]]
console.log('有一個多層陣列', data2)
console.log('flat(1) 回傳新陣列', data2.flat(1))
console.log('flat(2) 回傳新陣列', data2.flat(2))
console.log('flat(Infinity) 回傳新陣列', data2.flat(Infinity))
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
const orderData1 = ['ORD-2024-001', '待付款', 'Jack', 'john@email.com', 1299.99]
const [orderID, status, customer, , total] = orderData1;
console.log(`${customer} 的訂單資訊: 訂單編號 ${orderID} | 狀態 ${status} | 訂單金額 ${total}`)
// 執行結果: Jack 的訂單資訊: 訂單編號 ORD-2024-001 | 狀態 待付款 | 訂單金額 1299.99
```

### 帶預設值
**說明：** 當陣列元素不存在時，可以設定預設值
```js
const serverConfig = ['localhost', 3000] // 缺少 protocol
const [host, port, protocol = 'http'] = serverConfig
console.log(`伺服器地址: ${protocol}://${host}:${port}`)
// 執行結果: 伺服器地址: http://localhost:3000
```

### 忽略元素 (, 為一單位)
**說明：** 使用空位（逗號）來跳過不需要的陣列元素
```js
const [first, , , fourth] = fruits;
console.log(first, fourth)
// 執行結果: apple strawberry
```

### 剩餘運算符 (...)
**說明：** 使用 ... 語法將剩餘的元素收集到新陣列中
```js
const salesData = [850, 720, 950, 680, 1100, 890, 760]
const [todaySales, ...previousSales] = salesData
console.log(`今日銷售: $${todaySales}`)
console.log(`前幾日銷售: [${previousSales}]`)
const sum = previousSales.reduce((a, b) => a + b, 0)
console.log('所有銷售額總和:$', sum)
// 執行結果:
// 今日銷售: $850
// 前幾日銷售: [720,950,680,1100,890,760]
// 所有銷售額總和:$ 5100
```

### 變數值交換
**說明：** 使用解構賦值快速交換兩個變數的值
```js
let currentBestSeller = 'iPhone 15'
let newBestSeller = 'AirPods'
console.log(`交換前 - 當前: ${currentBestSeller}, 新品: ${newBestSeller}`);
[currentBestSeller, newBestSeller] = [newBestSeller, currentBestSeller];
console.log(`交換後 - 當前: ${currentBestSeller}, 新品: ${newBestSeller}\n`)
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
        'user123': ['Alice', 15800, 'Premium'],
        'user456': ['Bob', 3200, 'Basic']
    }
    return userDatabase[userId] || ['Unknown', 0, 'None']
}

const [username, points, memberType] = fetchUserProfile('user456')
console.log(`用戶資料:  姓名: ${username} | 積分: ${points} | 會員類型: ${memberType}`)
// 執行結果: 用戶資料:  姓名: Bob | 積分: 3200 | 會員類型: Basic
```