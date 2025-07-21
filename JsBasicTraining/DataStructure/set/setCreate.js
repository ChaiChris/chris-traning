// 方法一： 直接創建 Set
const set1 = new Set();

// 方法二： 由陣列建立 Set
const fetchedTags = ['red', 'blue', 'red', 'green'];
const uniqueTags = new Set(fetchedTags);
console.log(...uniqueTags);

// 方法三： 字串轉 Set（去除重複字元）
const letters = new Set('hello');
console.log(...letters); // Set(4) { 'h', 'e', 'l', 'o' }

// 方法四： 從其他 Set 複製
const setA = new Set([1, 2, 3]);
const setB = new Set(setA);
console.log(...setB);
