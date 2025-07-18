# return 與 yield

## return
### 這是什麼: 
```js
function normalFunction() {
console.log("步驟 1");
return "第一個值";
console.log("步驟 2"); // 這行不會執行
return "第二個值";     // 這行不會執行
}
```
- 立即終止函式執行
- JavaScript 中每個函式都會返回一個值，沒有 return 語句時，隱式返回 undefined
- 返回值類型：可回傳任意型別的值 (空則為undefined)
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
        yield items.slice(i, i + size)
    }
}

// 呼叫 paginate 傳入陣列與每頁數量，成為一個生成器物件
const pages = paginate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16], 3)

for (let page of pages) {
    console.log(page) // 每次迭代會輸出一個分頁陣列
}
/*
[ 1, 2, 3 ]
[ 4, 5, 6 ]
[ 7, 8, 9 ]
[ 10, 12, 13 ]
[ 14, 15, 16 ]
*/
```

- 只能用在生成器函式內 (function* )
- yield 是表達式: 可以用在賦值、條件判斷等地方
- yield 會暫停函式的執行並回傳一個值，等外部再呼叫 .next() 時才會從 yield 暫停點繼續執行
- 雙向通信: 外部可以用 .next(value) 把值傳給生成器函式， 生成器函式內的 yield 表達式本身會「回傳」給 .next() 所傳入的值
- 可搭配迭代器使用: 生成器函式物件同時也是一個 iterator（迭代器），配合 yield 產生的值可以用 for...of 迴圈取得