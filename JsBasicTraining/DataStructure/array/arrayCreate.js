// 如何建立一個Array
console.log('=== 方法一：直接創建 Array (最常用) ===');
// 有一個水果清單，列出所有水果
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

console.log('想要加入分數 85 卻得到 85 空欄位的陣列:', createScoreArray(85));

console.log('\n=== 方法三：Array.of() 解決單一數字問題 ===');
const productId = Array.of(12345);
console.log('商品 ID:', productId);

console.log('\n=== 方法四：Array.from() 動態建立 ===');
// 情境：建立指定長度的陣列並填入連續數字
const pageNumbers = Array.from({length: 5}, (_, index) => index + 1);
console.log('分頁號碼:', pageNumbers); // [1, 2, 3, 4, 5]
