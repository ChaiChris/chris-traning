// 如何建立一個Array
console.log('=== 方法一：直接創建 Array (最常用) ===');
// 情境：你正在開發一個水果店的網站，需要列出所有可售水果
const fruits = ['apple', 'orange', 'banana', 'strawberry'];
console.log('水果店商品清單:', fruits);


console.log('\n=== 方法二：使用 new Array() 建構子 ===');
const monthlyRevenue = new Array(150000, 180000, 200000);
console.log('前三個月營收:', monthlyRevenue);

console.log('\nnew Array() 的誤區 ');
function createScoreArray(score) {
    // 如果 score 是單一數字，會建立空陣列而不是包含該分數的陣列
    return new Array(score);
}
console.log('想要加入分數 85 卻得到:', createScoreArray(85));

console.log('\n=== 方法三：Array.of() 解決單一數字問題 ===');
// 情境：安全地建立包含單一數字的陣列
const productId = Array.of(12345);
console.log('商品 ID:', productId);

console.log('\n=== 方法四：Array.from() 動態建立 ===');
// 情境：建立指定長度的陣列並填入連續數字
const pageNumbers = Array.from({length: 5}, (_, index) => index + 1);
console.log('分頁號碼:', pageNumbers); // [1, 2, 3, 4, 5]


// 會改變原陣列
// 1. push(): 將一或多個值加入至陣列尾端，
console.log('\npush()： 將一或多個值加入至陣列尾端')
// 我的購物清單有：牛奶 蛋
const shoppingList = ['牛奶', '蛋']
// 現在我想再加: 香蕉 布丁
const newLength = shoppingList.push('香蕉', '布丁')
console.log('購物清單現在的內容：', shoppingList)
console.log('現在購物清單的總項目數：', newLength)

const arr1 = [1,2,3]
// 2. pop(): 移除陣列最後一個元素，並回傳移除的元素
// 使用者的瀏覽紀錄
const historyStack = ['首頁', '商品頁', '商品詳情']
// 使用者按下「返回上一頁」
const lastVisitedPage = historyStack.pop()
console.log('返回前的頁面是：', lastVisitedPage) // '商品詳情'
console.log('目前瀏覽紀錄：', historyStack)      // ['首頁', '商品頁']


// 3. shift(): 移除陣列第一個元素，並回傳移除的元素
const arr8 = arr1.shift()
console.log('shift() 回傳移除的元素值', arr8)
console.log('shift() arr1 原陣列', arr1)

// 4. unshift(): 將一或多個值加入至陣列開頭，回傳新長度
const arr9 = arr1.unshift(1)
console.log('unshift() 回傳陣列長度', arr9)
console.log('unshift() arr1 原陣列', arr1)

// 5. splice(): 用於增刪改任意位置的元素，並回傳移除的元素
const arr10 = arr1.splice(3, 2, 0)
console.log('splice() 回傳移除的元素', arr10)
console.log('splice() arr1 原陣列', arr1)

// 6. fill(): 填滿整個陣列或指定區間，填滿不能超過陣列的長度，回傳指定的陣列
console.log('fill() arr1 原陣列', arr1.fill(5, 3, arr1.length))

// 7. copyWithin(): 將指定範圍的元素複製到同一陣列的其他位置，但不能超過陣列的長度，回傳指定的陣列
console.log('copyWithin() arr1 原陣列', arr1.copyWithin(0, 3, arr1.length))

// 8. sort(): 根據預設或自定義函式排序元素，回傳指定的陣列
console.log('sort() arr1 原陣列', arr1.sort((a, b) => a - b))


// ###### 不改變原陣列
// 1. concat(): 合併一個或多個陣列，回傳新陣列
const arr11 = [0, 1]
console.log('concat() 回傳新陣列', arr11.concat(arr1))

// 2. join(): 將陣列元素以指定字串連接為一個字串
console.log('join() 回傳字串', fruits.join())

// 3. slice(): 從原陣列擷取一段區間，回傳新陣列。
console.log('slice() 回傳新陣列', arr1.slice(0, 2))

// 4. map(): 對每個元素執行函數，回傳新陣列（對應轉換）。
console.log('map() 回傳新陣列', fruits.map((fruit, index) => `${index} ${fruit}`))

// 5. filter(): 篩選符合條件的元素，回傳新陣列。
console.log('filter() 回傳新陣列', arr1.filter(num => num > 4))

// 6. flat(): 將多維陣列「攤平」為指定層級。
const arr13 = [0, 1, 2, [3, 4, [5]]]
console.log('flat() 回傳新陣列', arr13.flat(2))

//Array Destructuring
console.log('=== Array Destructuring 陣列資料解構===')

console.log('---位置對應賦值')
const [a, b] = [1, 2];
console.log(b, a)

console.log('---帶預設值')
const [x = 'hello'] = [];
console.log(x)

console.log('---忽略元素(, 為一單位)')
const [first, , , fourth] = fruits;
console.log(first, fourth)

console.log('---剩餘運算符(...)')
const [firstFruit, ...fruit] = fruits;
console.log(firstFruit)

console.log('---變數值交換')
let isA = 'A', isB = 'B';
[isA, isB] = [isB, isA];
console.log('isA', isA)
console.log('isB', isB)

console.log('---Function 回傳解析')
function getInfo(){
    return ['Chris','24']
}
const [name, age] = getInfo();
console.log(name,`age is ${age}`)