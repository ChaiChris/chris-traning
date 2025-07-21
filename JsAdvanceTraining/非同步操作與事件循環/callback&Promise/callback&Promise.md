## 如何理解 `callback` 和 `Promise` 的區別與優勢

## Callback（回呼函式）
是一個函式，作為參數傳入另一個函式中，在非同步操作完成後執行。
- 寫法: 函式作為參數
- 錯誤處理: 通常是第一個參數處理 error
- 可讀性: 較低
- 多步驟非同步: 難以維護
- async: 無法搭配

## Promise（承諾物件）
非同步操作後，最終的成功值（success value）或失敗訊息（failure reason）的處理函式
- 寫法: 回傳一個 Promise 物件
- 錯誤處理: 使用.catch() 處理
- 可讀性: 較高，可鏈式處理
- 多步驟非同步: 容易組合與串接
- async: 可直接搭配使用


## 比對範例
## Callback
```js
// 檢查使用者是否存在
function checkUser(email, callback) {
    setTimeout(() => {
        console.log('使用者不存在', email);
        callback(null, email);
    },500)
}

// 註冊新使用者
function registerUser(email, name, password, callback) {
    setTimeout(() => {
        console.log('註冊成功', name);
        callback(null, true);
    },500)
}

// 寄出驗證信
function sendEmailValidation(email, callback) {
    setTimeout(() => {
        if (email) {
            console.log('寄出成功', email);
            callback(null, true);
        }else{
            console.log('缺少email資料');
            callback('缺少email資料');
        }
    },2000)
}

// 驗證信箱驗證碼
function emailValidation(emailCode, callback) {
    const code = 123456
    setTimeout(() => {
        if (emailCode === code) {
            console.log('驗證成功', emailCode);
            callback(null, true);
        }else{
            console.log('驗證失敗');
            callback('驗證失敗');
        }
    }, 500)
}

// callback 地獄
checkUser('example@gmail.com', (err, email) => {
    if (err || !email) return console.error("電子郵件驗證失敗", err);
    registerUser(email, 'Chris', '12345678910', (err, state) => {
        if (err || !state) return console.error("註冊失敗", err);
        sendEmailValidation(email, (err, state) => {
            if (err || !state) return console.error("寄出驗證信失敗", err);
            emailValidation(123456, (err, state) => {
                if (err || !state) return console.error("代碼驗證失敗", err);
                console.log("歡迎加入!");
            })
        })
    })
})
```


## Promise
```js
// 檢查使用者是否存在
function checkUser(email) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('使用者不存在', email);
            resolve({state: false, email});
        }, 500)
    })
}

// 註冊新使用者
function registerUser(email, name, password) {
    return new Promise((resolve, reject) => {
        if (!email || !name || !password) {
            return reject('缺少欄位');
        }
        setTimeout(() => {
            console.log('註冊成功', name);
            resolve({state: true, email});
        },1000)
    })
}

// 寄出驗證信
function sendEmailValidation(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email) {
                console.log('寄出成功', email);
                resolve(true);
            }else{
                console.log('缺少email資料');
                reject('缺少email資料');
            }
        },2000)
    })

}

// 驗證信箱驗證碼
function emailValidation(emailCode) {
    const code = 123456
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (emailCode === code) {
                console.log('驗證成功');
                resolve(true);
            }else{
                console.log('驗證失敗');
                reject('驗證失敗');
            }
        },2000)
    })
}

// Promise 鍊式註冊流程
checkUser('example@gmail.com')
    .then((result) => {
        return registerUser(result.email, 'Chris', '123456');
    })
    .then((result) => {
        return sendEmailValidation(result.email);
    })
    .then((result) => {
        return emailValidation(123456);
    })
    .then((result) => {
        if (result) {
            // 驗證成功
            console.log('歡迎加入!')
        }
    })
    .catch((err) => {
        // 任一步驟失敗時，會觸發這裡的錯誤處理
        console.log(err);
    })
```

