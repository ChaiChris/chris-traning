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