## ES6 Set (集合)
#### 定義
- Set是一個object，可以儲存任何型別的唯一值，不論是原始型別或是物件
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
**說明：**  使用 new Set() 可建立一個空的集合，之後可透過 .add() 方法逐一加入元素。
```js
const set1 = new Set();
```
### 方法二： 由陣列建立 Set
**說明：**  將陣列作為建構函式的參數，Set 會自動移除重複項目，只保留唯一值。
```js
const fetchedTags = ['red', 'blue', 'red', 'green'];
const uniqueTags = new Set(fetchedTags);
console.log(...uniqueTags);// red blue green
```
### 方法三： 字串轉 Set（去除重複字元）
**說明：**  字串會被當作可迭代物件，Set 自動將重複字元移除。
```js
const letters = new Set('hello');
console.log(...letters);
//  h e l o
```
### 方法四： 從其他 Set 複製
**說明：**  將現有 Set 作為參數傳入 new Set()，可建立一份新的集合副本（淺拷貝）。
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
onUserMessage('Jack')
onUserMessage('Chris')
onUserMessage('Jack')
onUserMessage('Alex')
onUserMessage('Alex')
onUserMessage('Vic')
// 結果：目前有 1 人講過話、目前有 2 人講過話、目前有 2 人講過話、目前有 3 人講過話、目前有 3 人講過話、目前有 4 人講過話
```

### delete()
**說明：** 會從一個 Set 物件中移除指定元素
```js
const favorites = new Set(['article1', 'article2', 'article3']);

// 取消收藏 article2
favorites.delete('article2');

console.log([...favorites]); 
// 結果：['article1', 'article3']
```

### has()
**說明：** 對一個指定值元素在 Set 物件中的存在與否回傳一個布林值
```js
// 升級紀錄已讀的文章，透過has()再加入前判斷，可節約效能
const readedArticle = new Set()
let runCounter = 0;
function readArticle(bookArray) {
    for (let i = 0; i < bookArray.length; i++) {
        const bookname = bookArray[i];
        if(readedArticle.has(bookArray[i])) return;
        readedArticle.add(`${bookArray[i]}`);
        runCounter++
    }
    console.log(`已讀文章: ${[...readedArticle]}, 執行了 ${runCounter}次`);
}
readArticle(['做繪本的人', '做繪本的人'])
readArticle(['空間之外OUT OFF THE SPACE：沈中怡的空間學'])
readArticle(['胡督魔法：北美民間魔法指南'])
readArticle(['我是誰：找回快樂與自由的隨身練習','我是誰：找回快樂與自由的隨身練習'])
readArticle(['空間之外OUT OFF THE SPACE：沈中怡的空間學'])
// 結果：透過重複檢查避免重複加入，提升效能
```

### clear()
**說明：** 從一個 Set 物件中移除其所有元素
```js
// 商品篩選
const selectedTags = new Set(['防曬', '保濕', '無香料']);
console.log(selectedTags.size); // 3
// 點選「重設」
selectedTags.clear();
console.log(selectedTags.size); // 0
```

### intersection()
**說明：** 從兩個set集合回傳一個新集合，其中包含該集合和指定集合中相同者
```js
//找兩個學生都有空的時間
const studentA = new Set(['10:00', '13:00', '16:00', '18:00']);
const studentB = new Set(['09:00', '13:00', '17:00', '18:00']);

const availableTime = studentA.intersection(studentB);
console.log([...availableTime]); 
// 結果：['13:00', '18:00']
```

### union()
**說明：** 從兩個set集合回傳一個新集合，其中包含該集合和指定集合中的元素或兩者
```js
// 跨裝置同步搜尋紀錄或瀏覽紀錄
const mobileHistory = new Set(['apple', 'banana']);
const desktopHistory = new Set(['banana', 'cherry']);

const mergedHistory = new Set([...mobileHistory, ...desktopHistory]);
console.log([...mergedHistory]); 
// 結果：['apple', 'banana', 'cherry']
```