// 使用 var：變數名稱會被提升，但值不會提升，預設為 undefined
console.log(a); // undefined（因為 var 被提升，但沒賦值）
var a = 10;

// 使用 let：變數不會被提升（實際上宣告位置被提升但不可存取），屬於 TDZ 期間
console.log(b); // Error
let b = 20;

// 使用 const：與 let 一樣會進入 TDZ，且必須同時宣告與賦值
console.log(c); // Error
const c = 30;