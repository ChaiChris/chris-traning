// typeof 和 instanceof 運算符

console.log('===typeof===');
console.log('typeof 基本資料類型');
console.log('typeof 123:', typeof 123);                    // 'number'
console.log('typeof 3.14:', typeof 3.14);                  // 'number'
console.log('typeof -0:', typeof -0);                      // 'number'
console.log('typeof Infinity:', typeof Infinity);          // 'number'
console.log('typeof NaN:', typeof NaN);                    // 'number' (特殊的數字值)

console.log(' typeof 字串  ');
console.log('typeof "hello":', typeof "hello");            // 'string'
console.log('typeof \'world\':', typeof 'world');          // 'string'
console.log('typeof `template`:', typeof `template`);      // 'string'
console.log('typeof "":', typeof "");                      // 'string' (空字串)

console.log(' typeof 布林值  ');
console.log('typeof true:', typeof true);                  // 'boolean'
console.log('typeof false:', typeof false);                // 'boolean'

console.log(' typeof 特殊值  ');
console.log('typeof undefined:', typeof undefined);        // 'undefined'
console.log('typeof null:', typeof null);                  // 'object' (JavaScript 的歷史錯誤)

console.log('typeof ES6 新類型');
console.log('typeof Symbol():', typeof Symbol());          // 'symbol'
console.log('typeof Symbol("id"):', typeof Symbol("id"));  // 'symbol'
console.log('typeof 10n:', typeof 10n);                    // 'bigint'
console.log('typeof BigInt(100):', typeof BigInt(100));

console.log('typeof 的限制');
console.log('typeof null:', typeof null);                  // 'object' (錯誤)
console.log('typeof []:', typeof []);                      // 'object' (無法區分陣列)
console.log('typeof new Date():', typeof new Date());      // 'object' (無法區分日期)


console.log('===instanceof===');

function Animal() {}
function Dog() {}
Dog.prototype = Object.create(Animal.prototype);
const dog = new Dog();

console.log('原型鏈繼承');
console.log('dog instanceof Dog:', dog instanceof Dog);     // true
console.log('dog instanceof Animal:', dog instanceof Animal);  // true
console.log('dog instanceof Object:', dog instanceof Object);  // true
console.log('dog instanceof Array:', dog instanceof Array);   // false

console.log('陣列');
const arr = [];
console.log('arr instanceof Array:', arr instanceof Array);   // true
console.log('arr instanceof Object:', arr instanceof Object);  // true (陣列是一種物件)

console.log('基本類型 vs 包裝物件');
const num = 5;
console.log('num instanceof Number:', num instanceof Number);  // false (雖然是數字，但並非 Number 產生的實例)
console.log('new Number(5) instanceof Number:', new Number(5) instanceof Number); // true

const str = 'hello';
console.log('str instanceof String:', str instanceof String);  // false (雖然是字串，但並非 String 產生的實例)
console.log('new String(\'hello\') instanceof String:', new String('hello') instanceof String); // true

console.log('  額外測試  ');
console.log('typeof num:', typeof num);                                             // 'number'
console.log('typeof new Number(5):', typeof new Number(5));                 // 'object'
console.log('typeof str:', typeof str);                                          // 'string'
console.log('typeof new String(\'hello\'):', typeof new String('hello')); // 'object'