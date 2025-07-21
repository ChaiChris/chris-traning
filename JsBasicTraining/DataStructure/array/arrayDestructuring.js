//Array Destructuring
console.log('\n\n_______ Array Destructuring 陣列資料解構 _______')

console.log('\n===位置對應賦值===')
const orderData1 = ['ORD-2024-001', '待付款', 'Jack', 'john@email.com', 1299.99]
const [orderID, status, customer, , total] = orderData1;
console.log(`${customer} 的訂單資訊: 訂單編號 ${orderID} | 狀態 ${status} | 訂單金額 ${total}`)

console.log('\n===帶預設值===')
const serverConfig = ['localhost', 3000] // 缺少 protocol
const [host, port, protocol = 'http'] = serverConfig
console.log(`伺服器地址: ${protocol}://${host}:${port}`)

console.log('\n===忽略元素(, 為一單位)===')
const fruits = ['Apple', 'Orange', 'Lemon', 'Strawberry']
const [first, , , fourth] = fruits;
console.log(first, fourth)

console.log('\n===剩餘運算符(...)===')
const salesData = [850, 720, 950, 680, 1100, 890, 760]
const [todaySales, ...previousSales] = salesData
console.log(`今日銷售: $${todaySales}`)
console.log(`前幾日銷售: [${previousSales}]`)
const sum = previousSales.reduce((a, b) => a + b, 0)
console.log('所有銷售額總和:$', sum)


console.log('\n===變數值交換===')
let currentBestSeller = 'iPhone 15'
let newBestSeller = 'AirPods'
console.log(`交換前 - 當前: ${currentBestSeller}, 新品: ${newBestSeller}`);
[currentBestSeller, newBestSeller] = [newBestSeller, currentBestSeller];
console.log(`交換後 - 當前: ${currentBestSeller}, 新品: ${newBestSeller}\n`)


console.log('\n===Function 回傳解析===')
function fetchUserProfile(userId) {
    // 模擬 API 回傳格式: [用戶名, 積分, 會員類型]
    const userDatabase = {
        'user123': ['Alice', 15800, 'Premium'],
        'user456': ['Bob', 3200, 'Basic']
    }
    return userDatabase[userId] || ['Unknown', 0, 'None']
}

const [username, points, memberType] = fetchUserProfile('user456')
console.log(`用戶資料:  姓名: ${username} | 積分: ${points} | 會員類型: ${memberType}`)