## Try...Catch 是甚麼
用於在代碼執行期間捕獲和處理錯誤
### 語法特性：
- Try (必要)： 初始狀態
- Catch (必要)： 如果 try 語句發生錯誤執行的代碼塊。如果 try 語句沒發生錯誤該代碼不會執行。
- err： 執行失敗狀態
- Finally： 無論 try / catch 的結果如何都會執行。
- throw: 自訂錯誤用的，當某些不是javascript的錯誤就可以使用throw來輸出自訂錯誤訊息
### 主要的錯誤類型:
- EvalError: `eval()`函數的使用或定義不符合規範。
- RangeError: 數組操作時發生越界。
- ReferenceError: 引用了非法或無法識別的數值。
- SyntaxError: 發生語法解析錯誤。
- TypeError: 操作的類型不正確。
- URIError: URL處理函數使用不當。
### 也可以自動錯誤類型:
  ```js
  class customErrorType extends Error {
      constructor(message) {
          super(message) //呼叫 Error 父類別的 constructor
          this.name='可自訂錯誤名稱'    
      }
  }
  // 使用  throw new customErrorType
  ```
### 特性
-  只捕捉 Runtime Error
  ```js
  //語法錯誤會在javascript 解析階段就被捕會中止，catch 不會被執行
  try{
    //像是語法錯誤
    console.log('少了括號'
    // 引用未定義的變數
    console.log(undefinedVariable);
    // ...等
  }catch(err){
      console.log('不會被執行')
  }
  ```
- 只捕捉同步錯誤（不自動捕捉非同步錯誤）
  ```js
  try {
    setTimeout(() => {
    throw new Error("這不會被 catch");
    }, 100);
  } catch (err) {
    console.log("這不會執行");
  }
  ```
- 一旦進入 catch，後續 try 區塊的程式碼不會再執行
  ```js
  try {
    throw new Error("Boom");
    console.log("這行不會執行");
  } catch (err) {
    console.log("error:", err.message);
  }
  ```
- 支援巢狀
  ```js
  try {
    try {
        throw new Error("內層錯誤");
    } catch (err) {
        console.log("內層:", err.message);
        throw err; // 往外拋
    }
  } catch (err) {
    console.log("拋到這裡:", err.message);
  }

  ```
  - 可配合 instanceof 區分錯誤型別
  ```js
  try {
    throw new TypeError("Type 不對");
    } catch (err) {
        if (err instanceof TypeError) {
            console.log("is TypeError");
        } else {
            console.log("other error");
        }
  }
  ```
### 使用範例
```js
async function tryCatchTest() {
  try {
    // 因為使用 await，這個錯誤「會」被 catch 捕獲
    await timeoutDoCatch();
    // 陷阱: 雖然使用await， 但是
    await timeoutDoNoCatch();
  } catch (err) {
    console.log('這邊是被捕捉的error :', err);
  }
}

const timeoutDoCatch = () => {
  return new Promise((_, reject) => {
    // 透過 reject 拋出錯誤，這樣可以被 await 和 try-catch 捕獲
    setTimeout(()=>{
      // Promise 中使用 reject 而不是 throw
      reject(new customError('這會被捕獲 timeout error'))
    },1000)
  })
}

// try-catch 可以捕捉：
// - 同步執行的 runtime error
// - await Promise 中的錯誤
// - 手動 throw 的錯誤

const timeoutDoNoCatch = () => {
  // 直接 throw 錯誤，這個錯誤會變成「未捕獲的異常」
  // 因為它不在 Promise 中，try-catch 無法捕獲它
  setTimeout(()=>{
    throw new customError('這不會被捕獲 timeout error')
  },1000)
}

// try-catch 無法捕捉：
// - 語法錯誤 (Syntax Error)
// - setTimeout/setInterval 回調中的錯誤
// - 事件監聽器中的錯誤
// - 未包裝在 Promise 中的異步錯誤

// 自訂錯誤類別
class customError extends Error {
  constructor(message) {
    super(message); // 呼叫父類別的建構函式
    this.name = 'customError'; // 設定錯誤名稱
  }
}

tryCatchTest()
```


