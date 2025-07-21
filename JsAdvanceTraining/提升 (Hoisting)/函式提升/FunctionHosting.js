// function 宣告式：名稱與內容都會提升，所以這裡可以正常執行
sayHi(); // Hi!

function sayHi() {
    console.log('Hi!');
}

// var 函式表達式：只提升變數名稱，值為 undefined，所以這裡會出現 TypeError
sayHi1(); // ERROR

var sayHi1 = function() {
    console.log('Hi!');
};

// const 函式表達式：不會提升，受 TDZ（暫時性死區）限制，這裡會出現 ReferenceError
sayHi2(); // ERROR

const sayHi2 = function() {
    console.log('Hi!');
};

// 箭頭函式 + const：同樣不會提升，也會進入 TDZ，這裡會出現 ReferenceError
sayHi3(); // ERROR

const sayHi3 = () => {
    console.log('Hi!');
};
