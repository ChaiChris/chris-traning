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
   .then(user => getOrders(user.id))
   .then(orders => console.log(orders))
   .catch(err => console.error(err));
  ```
- 可以合併多個 Promise 一起處理
  - Promise.all() – 等所有都完成才回傳
  ```js
  Promise.all([data1, data2]).then(results => console.log(results));
  ```
  - Promise.race() – 回傳最先完成者
  ```js
  Promise.race([slow, fast]).then(result => console.log(result));
  ```
### 使用範例
```js
function getData(url) {
  // 創建並返回一個新的 Promise
  return new Promise((resolve, reject) => {
    // 使用 setTimeout 模擬網路請求的延遲（1秒）
    setTimeout(() => {
      // 檢查 URL 是否為指定的有效網址
      url === 'www.example.com'
              ? resolve("Finished with " + url)
              : reject("Error: " + url);
    }, 1000)
  })
}

// 第一個測試：使用正確的 URL
getData("www.example.com")
        .then((res) => {
          // 當 Promise 成功解決時執行這裡
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })

// 第二個測試：使用錯誤的 URL
getData("ErrorExample")
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          // 當 Promise 被拒絕時執行這裡
          console.log(err)
        })
```


