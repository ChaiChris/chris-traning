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