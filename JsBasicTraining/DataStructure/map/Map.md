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
map1.set('Location', 'Taiwan');
map1.set('Map', 'Asia');
console.log(...map1);
// 執行結果: [ 'Location', 'Taiwan' ] [ 'Map', 'Asia' ]
```

### 方法二：由陣列建立 Map
**說明：** 使用二維陣列作為參數，每個子陣列包含 [key, value] 對
```js
const addr = [['Location', 'England'], ['Map', 'Europe']];
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
**說明：** 設置Map的鍵值對，Map可以使用物件作為鍵值
```js
const studentScores = new Map();

const studentA = {name: 'Chris'};
const studentB = {name: 'Jack'};

studentScores.set(studentA, 95);
studentScores.set(studentB, 88);

console.log(...studentScores);
// 結果：[{name: 'Chris'}, 95] [{name: 'Jack'}, 88]
```

### Map.get()
**說明：** 取得指定鍵的值
```js
const htmlAddr = new Map([
    ['Home', 'www.mapexample.com'], 
    ['about', 'www.mapexample.com/about'], 
    ['product', 'www.mapexample.com/product']
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
sessionsExample.set('session1', {userId: 123, expires: Date.now() - 3600 * 1000});
sessionsExample.set('session2', {userId: 456, expires: Date.now() + 3600 * 1000});

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
const userPermission = new Map()
userPermission.set('admin', ['read', 'write', 'changeOwner']);
userPermission.set('editor', ['read', 'write'])

function hasAdmin(permission) {
    return userPermission.has(permission) && userPermission.get(permission).includes('changeOwner');
}

console.log(`目前權限為: ${hasAdmin('editor') ? '管理員' : '編輯者'}`);
// 結果：目前權限為: 編輯者
```

### Map.clear()
**說明：** 清除Map中的所有項目
```js
let cacheMap = new Map();

// 原本的資料
cacheMap.set('products', 'oldProducts');
cacheMap.set('categories', 'oldCategories');
console.log(...cacheMap);

// 模擬重新取得新資料時
cacheMap.clear(); // clear() 清掉

// 設新資料
cacheMap.set('products', 'newProducts');
cacheMap.set('categories', 'newCategories');

console.log(...cacheMap);
// 結果：['products', 'newProducts'] ['categories', 'newCategories']
```

### Map.keys()
**說明：** 取得Map中所有的鍵
```js
const userPermission2 = new Map([
    ['admin', ['read', 'write', 'changeOwner']],
    ['editor', ['read', 'edit']],
    ['viewer', ['read']],
]);

const permissionList = [...userPermission2.keys()]

for (let i = 0; i < permissionList.length; i++) {
    console.log(`<option>${permissionList[i]}</option>`);
}
// 結果：<option>admin</option>
//       <option>editor</option>
//       <option>viewer</option>
```

### Map.values()
**說明：** 取得Map中所有的值
```js
const shop = new Map([
    ['iPhone', 10],
    ['Airpods', 5],
    ['Apple Watch', 3],
]);

// 先透過values() 取每列的值再使用reduce 加總
const total = [...shop.values()].reduce((a, b) => a + b, 0);
console.log(...shop);
console.log('總數量:', total);
// 結果：總數量: 18
```

### Map.entries()
**說明：** 取得Map中所有的鍵值對
```js
const cart = new Map([
    ['apple', 2],
    ['banana', 3],
    ['strawberry', 1],
]);

for (const [product, quantity] of cart.entries()) {
    console.log(`${product} 有 ${quantity} 個`);
}
// 結果：apple 有 2 個
//       banana 有 3 個
//       strawberry 有 1 個
```