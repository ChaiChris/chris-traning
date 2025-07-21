# Scope 與 Closure

## Scope 作用域
### 這是什麼: 簡單來說 Scope 是變數、函式定義與訪問的可見範圍
```js
const name = 'Chris'; // 全域
console.log(name);
function isName(name) {
    // 變數定義在函式內，只能在該函式內部存取。
    //例外: var 不具區塊作用域，但有函式作用域 (但建議還避免使用 var)
    var newName = name
    console.log(newName); // 函式作用域
}
isName('Jack');
if (true) {
    let name = 'Vic';
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
        count++;           // 閉包中修改 count
        return count;      // 回傳更新後的 count
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