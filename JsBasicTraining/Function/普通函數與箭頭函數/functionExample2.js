// 箭頭函數與 `this` 的關係
// 以下演示

//誤區一 物件方法
const permissionChecker = {
    user: 'Root',

    //普通函式
    checkPermission1: function () {
        console.log(this)
        if (this.user === 'Root') {
            return '管理員帳號'
        } else if (this.user === 'editor') {
            return '編輯者帳號'
        } else {
            return 'ERROR'
        }
    },

    //箭頭函式
    checkPermission2: () => {
        console.log(this)
        // 箭頭函式不綁定自己的 this，會往外層作用域（這裡是全域）去找
        if (this.user === 'Root') {
            return '管理員帳號'
        } else if (this.user === 'editor') {
            return '編輯者帳號'
        } else {
            return 'ERROR'
        }
    }
}

console.log('函數宣告:', permissionChecker.checkPermission1()) // 正常
console.log('箭頭函式:', permissionChecker.checkPermission2())   // this 指向 window（或 undefined），結果通常為 undefined


// 誤區二 setTimeout / setInterval 中使用普通函式
//setTimeout 是在「全域作用域」中呼叫函式，不是 obj 呼叫的，所以普通函式反而會綁定到以下狀況
// 在瀏覽器中 this === window
// 在嚴格模式或模組中 this === undefined


// 普通函式
const obj1 = {
    name: "Chris",
    greet: function () {
        setTimeout(function () {
            console.log(`Hello, ${this.name}`); // 錯誤輸出 undefined
        }, 1000);
    }
};

obj1.greet();


// 箭頭函式
const obj2 = {
    name: "Chris",
    greet: function () {
        setTimeout(() => {
            console.log(`Hello, ${this.name}`); // 正確輸出 Chris
        }, 1000);
    }
};

obj2.greet();


