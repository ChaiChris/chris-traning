# 預設參數、剩餘參數 (Rest parameters)、解構參數


# 預設參數
### 這是什麼: 預設參數允許為函數參數設定預設值，當調用函數時沒有提供該參數或傳入undefined時，就會使用預設值。
```js
function user({
                  firstName,
                  lastName,
                  contact: {email, phone} = {}, //給外層物件設預設值為 {}
                  password,
                  preferences: {
                      theme = 'light', //預設值為 'light'
                      language = 'tw', //預設值為 'tw'
                  } = {}, // = {} 若傳入資料未定義 preferences 時，就會使用空物件 {}，以防解構時發生錯誤 ( 給外層物件設預設值為 {} )
                  timestamp = getDate(), // 預設值也可以是函式呼叫 (該函式回傳現在時間)
                  isShortPassword = password.length <= 8, // 也可以用判斷前面值方式創建預設
              }) {
    return { // 解構並回傳資料方便輸出
        firstName,
        lastName,
        contact: {
            email,
            phone,
        },
        password,
        preferences: {
            theme,
            language,
        },
        timestamp,
        isShortPassword
    }
}


// 模擬傳入資料 (不設 contact\ preferences 來呈現 = {} 效果 )
const userdata = {
    firstName: 'Test1',
    lastName: 'Test1',
    password: 'short',
    timestamp: 123456
}

// 模擬傳入資料
const userdata2 = {
    firstName: 'Test2',
    lastName: 'Test2',
    password: 'LongPassword',
    contact: {
        phone: '1234567890',
    },
    preferences: {
        theme: 'Nord',
    }
}

console.log(user(userdata))
/* 
{
  firstName: 'Test1',
  lastName: 'Test1',
  contact: { email: undefined, phone: undefined },
  password: 'short',
  preferences: { theme: 'light', language: 'tw' },
  timestamp: 123456,
  isShortPassword: true
}
*/
console.log(user(userdata2))
/* 
{
  firstName: 'Test2',
  lastName: 'Test2',
  contact: { email: undefined, phone: '1234567890' },
  password: 'LongPassword',
  preferences: { theme: 'Nord', language: 'tw' },
  timestamp: 1752806237027,
  isShortPassword: false
}
*/
````


# 剩餘參數 (Rest parameters)
### 這是什麼: 剩餘參數使用...語法，可以將不定數量的參數收集到一個陣列中
```js
// ! 剩餘參數必須是最後一個參數
function introduce(name, age, ...hobbies) {
    console.log(`I'm ${name}，${age} years old`);
    console.log(`My habit：${hobbies.join(", ")}`);
}

introduce("Jack", 25, "Reading", "Swimming", "Photography");
// I'm Jack，25 years old
// My habit：Reading, Swimming, Photography
```

# 解構參數
### 這是什麼: 解構參數允許你直接從傳入的物件或陣列中提取值作為參數
```js
function location([x, y, z = 0]) { //預設為 0 (若不預設，未定義值為 undefined)
    return `座標：(${x}, ${y}, ${z})`;
}

console.log(location([10, 20])); // "座標：(10, 20, 0)"
console.log(location([5, 15, 25])); // "座標：(5, 15, 25)"
```


