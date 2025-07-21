## `function` 的提升

### function 宣告	
- 名稱 + 內容都提升
```js
sayHi(); // Hi!

function sayHi() {
  console.log('Hi!');
}
```
### var + 函式表達式	
- 提升變數，值是 undefined
```js
sayHi(); // ERROR

var sayHi = function() {
    console.log('Hi!');
};
```
### let / const 表達式
- 不會提升（TDZ 暫時性死區)
```js
sayHi(); // ERROR

const sayHi = function() {
    console.log('Hi!');
};
```
### 箭頭函式
- 不會提升（TDZ 暫時性死區)
```js
sayHi(); // ERROR

const sayHi = () => {
    console.log('Hi!');
};
```