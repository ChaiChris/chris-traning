# typeof 和 instanceof 運算符

## typeof
### 這是什麼: 用來檢查一個值的基本型別或某些特殊物件的類型

### typeof 運算符結果
| 類型 | 範例 | typeof 回傳結果 |
|------|------|----------------|
| 數字 | `typeof 123` | `'number'` |
| 字串 | `typeof 'hello'` | `'string'` |
| 布林 | `typeof true` | `'boolean'` |
| 未定義 | `typeof undefined` | `'undefined'` |
| 空值（錯誤） | `typeof null` | `'object'` |
| 符號 | `typeof Symbol()` | `'symbol'` |
| BigInt | `typeof 10n` | `'bigint'` |
| 函式 | `typeof function() {}` | `'function'` |
| 陣列或物件 | `typeof [1, 2, 3]` | `'object'` |
| 自訂物件 | `typeof { a: 1 }` | `'object'` |
- `typeof null` 返回 `'object'` 是 JavaScript 的一個歷史錯誤
- 陣列、物件、null 都會返回 `'object'`，需要其他方法來區分
- 函式是唯一會返回 `'function'` 的類型


## instanceof
### 這是什麼: 檢查物件是否為某個「建構函式的實例」，也就是在原型鍊（prototype chain）上是否存在指定的建構函式。

### instanceof 運算符結果
```js
function Animal() {}
function Dog() {}
Dog.prototype = Object.create(Animal.prototype);
const dog = new Dog();

console.log(dog instanceof Dog);     // true
console.log(dog instanceof Animal);  // true
console.log(dog instanceof Object);  // true
console.log(dog instanceof Array);   // false

const arr = [];
console.log(arr instanceof Array);   // true
console.log(arr instanceof Object);  // true 陣列是一種物件

const num = 5;
console.log(num instanceof Number);  // false (雖然是數字，但並非 Number 產生的實例)
console.log(new Number(5) instanceof Number); // true

const str = 'hello';
console.log(str instanceof String);  // false (雖然是字串，但並非 String 產生的實例)
console.log(new String('hello') instanceof String); // true

```