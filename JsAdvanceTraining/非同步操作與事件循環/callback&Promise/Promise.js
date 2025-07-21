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