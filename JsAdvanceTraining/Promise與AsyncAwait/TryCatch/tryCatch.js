async function tryCatchTest() {
    try {
        // 因為使用 await，這個錯誤「會」被 catch 捕獲
        await timeoutDoCatch();
        // 陷阱: 雖然使用await， 但是
        await timeoutDoNoCatch();
    } catch (err) {
        console.log('這邊是被捕捉的error :', err);
    }
}

const timeoutDoCatch = () => {
    return new Promise((_, reject) => {
        // 透過 reject 拋出錯誤，這樣可以被 await 和 try-catch 捕獲
        setTimeout(()=>{
            // Promise 中使用 reject 而不是 throw
            reject(new customError('這會被捕獲 timeout error'))
        },1000)
    })
}

// Promise 鏈 = 一系列相互連接的 Promise 操作
// - await 只能捕獲 Promise 的 reject
// - try-catch 只能捕獲同步錯誤和 Promise 鏈中的錯誤

const timeoutDoNoCatch = () => {
    // 直接 throw 錯誤，這個錯誤會變成「未捕獲的異常」
    // 因為它不在 Promise 中，try-catch 無法捕獲它
    setTimeout(()=>{
        throw new customError('這不會被捕獲 timeout error')
    },1000)
}

// 不在 Promise 鏈中的錯誤：
// - setTimeout/setInterval 回調中的直接 throw
// - 事件監聽器中的錯誤
// - 其他異步回調中的錯誤

// 自訂錯誤類別
class customError extends Error {
    constructor(message) {
        super(message); // 呼叫父類別的建構函式
        this.name = 'customError'; // 設定錯誤名稱
    }
}

tryCatchTest()