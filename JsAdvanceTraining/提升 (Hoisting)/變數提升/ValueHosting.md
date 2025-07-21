## `var`, `let` 與 `const` 的提升
### var：
#### 只有宣告的變數會提升，賦值不會提升
#### 所以 console.log(a) 印出 undefined，不是錯誤。
```js
console.log(a); // undefined（因為 var 被提升，但沒賦值）
var a = 10;
```

### let / const：
#### 也會被「宣告提升」，但進入「暫時性死區（TDZ, Temporal Dead Zone）」，直到程式執行到賦值那一行。
#### 在 TDZ 內存取會出現 ReferenceError，即使變數其實已經宣告過。
```js
// TDZ
console.log(b); // Error
let b = 20;

// TDZ
console.log(c); // Error
const c = 30;
```