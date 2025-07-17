async function DoMapMethod() {
    //Map.set() 設置Map (key&Value)
    //普通物件無法用物件作為 key，但 Map 可以
    console.log('===Map.set===');
    const studentScores = new Map();

    const studentA = {name: 'Chris'};
    const studentB = {name: 'Jack'};

    studentScores.set(studentA, 95);
    studentScores.set(studentB, 88);

    console.log(...studentScores);


    await delay()

    //Map.get() 取得指定key的value
    console.log('===Map.get===');
    const htmlAddr = new Map([['Home', 'www.mapexample.com'], ['about', 'www.mapexample.com/about'], ['product', 'www.mapexample.com/product']])
    for (const [key, value] of htmlAddr) {
        console.log(`<a href="${value}">${key}</a>`);
    }


    await delay()

    // Map.delete() 刪除指定key的項目
    console.log('===Map.delete===');
    // sessions 模擬，
    const sessionsExample1 = new Map();
    sessionsExample1.set('session1', {userId: 123, expires: Date.now() - 3600 * 1000}); // expires 設定成當前時間減一個小時
    sessionsExample1.set('session2', {userId: 456, expires: Date.now() + 3600 * 1000}); // expires 設定成當前時間加一個小時

    for (const [key, value] of sessionsExample1) {
        if (value.expires <= Date.now()) {
            sessionsExample1.delete(key);
            console.log(`刪除過期的session: ${key}`);
        }
    }
    console.log(...sessionsExample1);

    await delay()

    // Map.has() 檢查是否存在指定 key
    console.log('===Map.has===');
    const userPermission = new Map()
    userPermission.set('admin', ['read', 'write', 'changeOwner']);
    userPermission.set('editor', ['read', 'write'])

    function hasAdmin(permission) {
        //先透過has()確認 userPermission 內有傳入值，在透過get()取得該相應值是否有'changeOwner' 權限
        return userPermission.has(permission) && userPermission.get(permission).includes('changeOwner');
    }

    console.log(`目前權限為: ${hasAdmin('editor') ? '管理員' : '編輯者'}`);

    await delay()

    // Map.clear() 清除Map
    console.log('===Map.clear===');
    let cacheMap = new Map();

    // 原本的資料
    cacheMap.set('products', 'oldProducts');
    cacheMap.set('categories', 'oldCategories');
    console.log(...cacheMap);

    // 模擬重新取得新資料時
    cacheMap.clear(); // clear() 清掉

    // 設新資料
    cacheMap.set('products', 'newProducts');
    cacheMap.set('categories', 'newCategories');

    console.log(...cacheMap);


    await delay()

    // Map.keys() 取得map所有的key
    console.log('===Map.keys===');
    const userPermission2 = new Map([
        ['admin', ['read', 'write', 'changeOwner']],
        ['editor', ['read', 'edit']],
        ['viewer', ['read']],
    ]);
    //使用展開運算子將map轉換為陣列
    const permissionList = [...userPermission2.keys()]

    for (let i = 0; i < permissionList.length; i++) {
        console.log(`<option>${permissionList[i]}</option>`);
    }

    await delay()

    // Map.values() 取得map所有的value
    console.log('===Map.values===');
    const shop = new Map([
        ['iPhone', 10],
        ['Airpods', 5],
        ['Apple Watch', 3],
    ]);

    // 先透過values() 取每列的值再使用reduce 加總
    const total = [...shop.values()].reduce((a, b) => a + b, 0);
    console.log(...shop);
    console.log('總數量:', total);

    await delay()

    // Map.entries() 取得map所有的key&value
    console.log('===Map.entries===');
    const cart = new Map([
        ['apple', 2],
        ['banana', 3],
        ['strawberry', 1],
    ]);

    for (const [product, quantity] of cart.entries()) { //遍歷整個 Map
        console.log(`${product} 有 ${quantity} 個`);
    }
}


const delay = () => new Promise(resolve => setTimeout(resolve, 500));

DoMapMethod()