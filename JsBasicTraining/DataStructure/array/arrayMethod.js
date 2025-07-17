// 常見的陣列方法
// 會改變原陣列
// 1. push(): 將一或多個值加入至陣列尾端，
console.log('\n===push()===');
// 購物清單有：牛奶 蛋
const shoppingList = ['牛奶', '蛋']
// 再加: 香蕉 布丁
const newLength = shoppingList.push('香蕉', '布丁')
console.log('購物清單內容：', shoppingList)
console.log('購物清單的總項目數：', newLength)

// 2. pop(): 移除陣列最後一個元素，並回傳移除的元素
console.log('\n===pop()===');
// 使用者的瀏覽紀錄
const historyStack = ['首頁', '商品頁', '商品詳情']
// 使用者按下「返回上一頁」
const lastVisitedPage = historyStack.pop()
console.log('返回前的頁面是：', lastVisitedPage)
console.log('目前瀏覽紀錄：', historyStack)


// 3. shift(): 移除陣列第一個元素，並回傳移除的元素
console.log('\n===shift()===');

const paddingUser = [
    {name: 'Jack', email: 'jack@gmail.com'},
    {name: 'Chris', email: 'Chris@gmail.com'},
    {name: 'Vic', email: 'Vic@gmail.com'},
]

function RegisterUser() {
    if (paddingUser.length > 0) {
        const currentUser = paddingUser.shift();
        console.log('現在註冊的會員是', currentUser.name);
        RegisterUser()
    } else {
        console.log('所有會員註冊完成');
    }
}

RegisterUser()

// 4. unshift(): 將一或多個值加入至陣列開頭，回傳新長度
console.log('\n===unshift()===');

const todoList = ['買牛奶', '清貓砂']
const newTodo = '拿包裹'
const todoListLength = todoList.unshift(newTodo)
console.log('unshift() 回傳陣列長度', todoListLength)
console.log('unshift() todoList 新增', newTodo)
console.log('unshift() todoList', todoList)

// 5. splice(): 用於增刪改任意位置的元素，並回傳移除的元素 arr.splice(start, deleteCount, ...itemsToAdd)
console.log('\n===splice()===');
const event = ['空閒', '預定', '預定', '空閒', '預定', '空閒']
console.log('splice() 目前預定表', event)
const newChange = event.splice(0, 2, '空閒')
console.log('splice() 移除預定', newChange)
console.log('splice() 新的預定表', event)

// 6. fill(): 填滿整個陣列或指定區間，填滿不能超過陣列的長度，回傳指定的陣列
console.log('\n===fill()===');
const buttonStates = Array(10).fill('disable'); // 生成並預設 10 個按鈕都是關閉
buttonStates.fill('active', 5); // 從第 6 個開始設為預設值 active
console.log('初始化按鈕狀態:', buttonStates);

// 7. copyWithin(): 將指定範圍的元素複製到同一陣列的其他位置，但不能超過陣列的長度，回傳指定的陣列
console.log('\n===copyWithin()===');
const formTemplate = ['空', '空', '空', '姓名', '電話', '地址'];
formTemplate.copyWithin(0, 3);
console.log('表單欄位快速填充:', formTemplate);
// 結果：['姓名', '電話', '地址', '姓名', '電話', '地址']


// 8. sort(): 根據預設或自定義函式排序元素，回傳指定的陣列
console.log('\n===sort()===');
const users = [
    {name: 'Amy', age: 28},
    {name: 'Bob', age: 18},
    {name: 'Whora', age: 35},
];

console.log('用戶依年齡升冪排序:', users.sort((a, b) => a.age - b.age));


// ###### 不改變原陣列
// 1. concat(): 合併一個或多個陣列，回傳新陣列
console.log('\n===concat()===');
const hotItems = ['熱銷A', '熱銷B']
const newItems = ['新品X', '新品Y']
const allItems = hotItems.concat(newItems)
console.log('所有商品:', allItems)

// 2. join(): 將陣列元素以指定字串連接為一個字串
console.log('\n===join()===');
const row = ['Jack', 'jack@gmail.com', '已啟用']
const csvLine = row.join(',')
console.log('CSV 輸出:', csvLine)

// 3. slice(): 從原陣列\字串擷取一段區間，回傳新陣列，也可用來淺拷貝
console.log('\n===slice()===');
const data1 = [10, 20, 30, 40, 50]
const firstTwo = data1.slice(0, 2)
console.log('取出前兩筆資料', firstTwo)

// 4. map(): 對每個元素執行函數，回傳新陣列（對應轉換）。
console.log('\n===map()===');
const items = ['Home', 'About', 'Contact'];
const listItems = items.map(item => `<li>${item}</li>`);
console.log(listItems.join(''));

// 5. filter(): 篩選符合條件的元素，回傳新陣列。
console.log('\n===filter()===');
//const users = [
//     { name: 'Amy', age: 28 },
//     { name: 'Bob', age: 18 },
//     { name: 'Whora', age: 35 },
// ];
users.forEach(user => {
    if (user.age >= 20) {
        user.active = true;
    } else {
        user.active = false;
    }
})
console.log('過濾 active 為 true 的使用者')
users
    .filter(user => user.active)
    .forEach(user => console.log(user.name));


// 6. flat(): 將多維陣列「攤平」為指定層級。
console.log('\n===flat()===');
const data2 = [0, 1, 2, [3, 4, [5],[6, 7 ,8, [9, 10]]]]
console.log('有一個多層陣列', data2)
console.log('flat(1) 回傳新陣列', data2.flat(1))
console.log('flat(2) 回傳新陣列', data2.flat(2))
console.log('flat(Infinity) 回傳新陣列', data2.flat(Infinity))