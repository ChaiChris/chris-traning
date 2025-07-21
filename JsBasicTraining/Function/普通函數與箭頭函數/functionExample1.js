// 函數宣告 (Function Declaration)
// 特性：會發生提升(Hoisting)，可以在宣告前就呼叫
console.log('===函數宣告 (Function Declaration)===');

// 可在宣告前呼叫
console.log('宣告前呼叫:', numPlus(12, 30)); // 360

function numPlus(a, b) {
    return a * b;
}

console.log('宣告後呼叫:', numPlus(5, 7)); // 35



// 函數表達式 (Function Expression)
// 特性：不會發生提升(Hoisting)，不可在宣告前就呼叫
console.log('===函數表達式 (Function Expression)===');

const division = function DoDivision(a,b) {
    return a/b;
}

// 只能在宣告後呼叫變數名
console.log('除法運算:', division(56, 5)); // 11.2

// 匿名函數表達式範例
console.log('===匿名函數表達式===');

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function(num) {
    return num * 2;
});

console.log('使用匿名函數:', doubled); // [2, 4, 6, 8, 10]

// 箭頭函式 (Arrow Function) - 也是函數表達式的一種
console.log('===箭頭函式 (Arrow Function)===');

const plus = (a, b) => a + b;
console.log('加法運算:', plus(10, 32)); // 42

// 函數作為參數使用的範例
console.log('===函數作為參數使用===');

const calculate = (operation, a, b) => {
    return operation(a, b);
};

console.log('使用函數宣告:', calculate(numPlus, 3, 4)); // 12
console.log('使用函數表達式:', calculate(division, 20, 4)); // 5
console.log('使用箭頭函式:', calculate(plus, 15, 25)); // 40