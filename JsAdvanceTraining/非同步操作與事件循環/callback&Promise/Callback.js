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