console.log('=== return 範例 ===');

// return 會終止函數執行
function normalFunction() {
    console.log("step 1");
    return "第一個值";
    console.log("step 2"); // 這行不會執行
    return "第二個值";     // 這行不會執行
}

// 測試 return 行為
console.log('函數返回值:', normalFunction());

// 沒有 return 語句時，隱式返回 undefined
function noReturnFunction() {
    console.log("這個函數沒有 return 語句");
}

console.log('沒有 return 的函數返回值:', noReturnFunction());

console.log('\n=== yield 範例 ===');

// yield 用於生成器函式中暫停執行，並回傳值
function* paginate(items, size) {
    for (let i = 0; i < items.length; i += size) {
        // 使用 yield 暫停函式執行，並返回目前這一頁
        // 下一次循環會從 yield 的地方繼續執行
        yield items.slice(i, i + size);
    }
}

// 呼叫 paginate 傳入陣列與每頁數量，成為一個生成器物件
const pages = paginate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16], 3);

for (let page of pages) {
    console.log(page); // 每次迭代會輸出一個分頁陣列
}

// 手動方式範例
// const manualPages = paginate([1, 2, 3, 4, 5, 6, 7], 2);

// console.log('第一次呼叫 .next():', manualPages.next());
// console.log('第二次呼叫 .next():', manualPages.next());
// console.log('第三次呼叫 .next():', manualPages.next());
// console.log('第四次呼叫 .next():', manualPages.next());
// console.log('第五次呼叫 .next():', manualPages.next()); // done: true