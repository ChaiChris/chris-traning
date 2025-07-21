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