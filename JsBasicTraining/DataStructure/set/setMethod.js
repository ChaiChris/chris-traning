async function DoSetMethod() {


    //add() 在一個 Set 物件的尾端加上一個指定 value 的新元素
    console.log('===add()===');
    const users = new Set();
    function onUserMessage(user) {
        users.add(user);
        console.log(`目前有 ${users.size} 人講過話`);
    }
    onUserMessage('Jack')
    onUserMessage('Chris')
    onUserMessage('Jack')
    onUserMessage('Alex')
    onUserMessage('Alex')
    onUserMessage('Vic')




    await delay()
    //delete() 會從一個 Set 物件中移除指定元素。
    console.log('\n===delete()===');
    const favorites = new Set(['article1', 'article2', 'article3']);

    // 取消收藏 article2
    favorites.delete('article2');

    console.log([...favorites]); // ['article1', 'article3']







    await delay()
    //has() 對一個指定值元素在 Set 物件中的存在與否回傳一個布林值
    console.log('\n===has()===');
    // 升級紀錄已讀的文章，透過has()再加入前判斷，可節約效能
    const readedArticle = new Set()
    let runCounter = 0;
    function readArticle(bookArray) {
        for (let i = 0; i < bookArray.length; i++) {
            const bookname = bookArray[i];
            if(readedArticle.has(bookArray[i])) return;
            readedArticle.add(`${bookArray[i]}`);
            runCounter++
        }
        console.log(`\n已讀文章: ${[...readedArticle]}, 執行了 ${runCounter}次`);
    }
    readArticle(['做繪本的人', '做繪本的人'])
    readArticle(['空間之外OUT OFF THE SPACE：沈中怡的空間學'])
    readArticle(['胡督魔法：北美民間魔法指南'])
    readArticle(['我是誰：找回快樂與自由的隨身練習','我是誰：找回快樂與自由的隨身練習'])
    readArticle(['空間之外OUT OFF THE SPACE：沈中怡的空間學'])




    await delay()
    //clear() 從一個 Set 物件中移除其所有元素
    console.log('\n===clear()===');
    // 商品篩選
    const selectedTags = new Set(['防曬', '保濕', '無香料']);
    console.log(selectedTags.size);
    // 點選「重設」
    selectedTags.clear();
    console.log(selectedTags.size);



    await delay()
    //intersection() 從兩個set集合回傳一個新集合，其中包含該集合和指定集合中相同者
    console.log('\n===intersection()===');
    //找兩個學生都有空的時間
    const studentA = new Set(['10:00', '13:00', '16:00', '18:00']);
    const studentB = new Set(['09:00', '13:00', '17:00', '18:00']);

    const availableTime = studentA.intersection(studentB);
    console.log([...availableTime]); // ['13:00', '18:00']





    await delay()
    //union() 從兩個set集合回傳一個新集合，其中包含該集合和指定集合中的元素或兩者
    console.log('\n===union()===');
    // 跨裝置同步搜尋紀錄或瀏覽紀錄
    const mobileHistory = new Set(['apple', 'banana']);
    const desktopHistory = new Set(['banana', 'cherry']);

    const mergedHistory = new Set([...mobileHistory, ...desktopHistory]);
    console.log([...mergedHistory]); // ['apple', 'banana', 'cherry']


}


const delay = () => new Promise(resolve => setTimeout(resolve, 500));

DoSetMethod()