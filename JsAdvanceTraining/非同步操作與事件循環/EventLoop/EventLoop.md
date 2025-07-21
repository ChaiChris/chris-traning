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
console.log('1. 同步開始');

setTimeout(() => {
    console.log('2. setTimeout 宏任務');
}, 0);

Promise.resolve().then(() => {
    console.log('3. Promise 微任務');
});

queueMicrotask(() => {
    console.log('4. queueMicrotask 微任務');
});

console.log('5. 同步結束');

// 結果:
// 1. 同步開始
// 5. 同步結束
// 3. Promise 微任務
// 4. queueMicrotask 微任務
// 2. setTimeout 宏任務

```