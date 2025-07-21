
// 建立一個延遲函式，回傳一個 500ms 的 Promise（等待）
const delay = () => new Promise(resolve => setTimeout(resolve, 500));

// async/await
async function getData2(url) {
    await delay(); // 等待 0.5 秒（模擬延遲）
    if(url === 'www.example.com') {
        return ("Finished with " + url)
    } else {
        // 拋出錯誤，會進入 catch 區塊
        throw new Error ("Error: " + url)
    }
}

// 呼叫 getData2 （正確網址）
getData2('www.example.com')
.then(console.log)
.catch(console.error);

// 呼叫 getData2 （錯誤網址）
getData2('error')
    .then(console.log)
    .catch(console.error);