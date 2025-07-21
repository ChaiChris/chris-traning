## 說明 `setTimeout` 與 `setInterval` 的概念與使用

### setTimeout
- 安排一段程式在指定毫秒(ms)後只執行一次
#### 語法
```js
setTimeout(() => {
    console.log('1 秒後將輸出');
}, 1000);

// 取消語法
const timeoutId = setTimeout(() => console.log('hello'), 3000);
clearTimeout(timeoutId); // clearTimeout
```


### setInterval
- 安排一段程式每隔指定毫秒重複執行
#### 語法
```js
setInterval(() => {
    console.log('每 2 秒輸出一次');
}, 2000);

// 取消語法
const intervalId = setInterval(() => console.log('hello'), 1000);
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
                reject('failed');
            }, delay)
        } else {
            setTimeout(function () {
                resolve('ok');
            }, delay)
        }
    })
}

const delay = 1000

function getDataUseTimeout(delay) {
    console.log('模擬 API 回應');
    //使用鍊式可不加async來補獲 err
    apiSimulator(delay)
        .then(res => {
            console.log('Timeout:', res)
        })
        .catch(err => {
            console.log('Timeout: 失敗', err)
        })
        .finally(() => {
            // 每次執行完隔兩秒才再次執行 (安全實現模擬Interval)
            setTimeout(() => getDataUseTimeout(delay), delay)
        })
}

getDataUseTimeout(delay)

//1. setTimeout 遞迴方式：
//    - 優點：確保每次調用完成後才開始下一次，時間間隔更精確
//    - 優點：不會有重疊執行的問題
//    - 缺點：如果 API 調用時間很長，總間隔時間會變長


let isProcessing = false; // 防止重疊執行的旗標
const getDataUseInterval= setInterval(async ()=>{
    // 如果上一次調用還在處理中，直接返回，避免重疊執行
    if(isProcessing)return;
    // 設置處理中狀態
    isProcessing = true;
    try {
        const result = await apiSimulator(delay);
        console.log('Interval:', result);
    } catch(err) {
        console.log('Interval: 失敗', err)
    } finally {
        // 允許下一次 interval 觸發
        isProcessing = false;
    }
},delay)

//2. setInterval 方式：
//    - 優點：嚴格按照設定的時間間隔觸發
//    - 缺點：需要額外的 isProcessing 旗標來防止重疊
//    - 缺點：如果 API 調用時間超過間隔時間，可能會積累執行請求
```