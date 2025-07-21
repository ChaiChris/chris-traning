async function DoObjectMethod() {

    //Object.keys() 返回一個包含該對象所有的鍵的數組
    console.log('===Object.keys===');
    const params = {
        page: 1,
        size: 20,
        keyword: 'notebook'
    };

    const queryString = Object.keys(params) // 取鍵值
        // encodeURIComponent() 是 JavaScript 中常用的URL 編碼工具
        .map(k => `${k}=${encodeURIComponent(params[k])}`)
        // 以 & 整合字串
        .join('&');

    console.log(`www.url.com?${queryString}`);
    // 結果：www.url.com?page=1&size=20&keyword=notebook

    delay()

    //Object.values() 返回一個包含該對象所有的值的數組
    console.log('\n===Object.values()===');
    const cart = {
        'iPhone 15': 38900,
        'AirPods': 7990,
        'Apple Watch': 12900
    };

    // 取出所有商品的價格，計算總和
    const total = Object.values(cart).reduce((sum, price) => sum + price, 0);

    console.log('Total:', total);

    delay()

//Object.entries() 返回一個包含該對象所有 [key, value] 鍵值對的數組
    console.log('\n===Object.entries()===');
    const userProfile = {
        name: 'Chris',
        age: 25,
        email: 'chris@gmail.com',
        role: 'admin'
    };

    // 顯示為 key: value
    Object.entries(userProfile).forEach(([key, value]) => {
        console.log(`${key}: ${value}`);
    });

    delay()

//Object.assign() 用於將一個或多個源對象的屬性覆制到目標對象中
    console.log('\n===Object.assign()===');
    let state = {
        loading: true,
        data: null,
        error: null
    };

// 接收到資料後更新狀態
// 第一個參數 {}：建立一個新的空物件，確保不會直接修改原本的 state
// 第二個參數 state：將原本狀態的所有屬性複製進去（原始資料）
// 第三個參數 { loading: false, data: ... }：將要更新的屬性覆蓋掉原本的
    state = Object.assign({}, state, {
        loading: false,
        data: {name: 'Chris'}
    });

    console.log(state);
    /* 結果
    {
      loading: false,
      data: { name: 'Chris' },
      error: null
    }
    */

    delay()

    //Object.create() 用於創建一個新物件，並指定該物件的原型（prototype）
    console.log('\n===Object.create()===');
    const formTemplate = {
        validate() {
            return this.name !== '' && this.email.includes('@');
        }
    }

    function createFormData(name, email) {
        const form = Object.create(formTemplate);
        form.name = name;
        form.email = email;
        return form;
    }

    const form1 = createFormData('Chris', 'chris#gmail.com')
    console.log(form1.validate());
}


const delay = () => new Promise(resolve => setTimeout(resolve, 500));

DoObjectMethod()