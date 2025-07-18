## Module（模組）
- 模組是單一的 JavaScript 檔案或一組檔案，用來封裝程式碼邏輯，使其可以被匯入（import）與重用。

    ### 特點：
    - 每個檔案就是一個模組。
    - 可以匯出變數、函式、類別等。
    - 可以用 import / export（ESM）或 require / module.exports（CommonJS）使用

    ### 為什麼要使用 Module?
    - 封裝: 將功能拆分成獨立模組，讓每個模組只專注一個任務
      ```js
      export function login() { /* ... */ }
      import { login } from './auth.js';
      ````
    - 重用: 模組設計讓你可以在多個專案或檔案中使用相同的程式碼，不需要重寫
    - 維護及測試容易: 每個模組功能單一，方便維護及撰寫測試


### 如何使用 `import` 與 `export` 來引入與匯出模組
#### 合法的輸出語法

```js 
    export var x = 42;                      // export a named variable
    export function foo() {};               // export a named function
    export default 42;                      // export the default export
    export default function foo() {};       // export the default export as a function
    export { encrypt };                     // export an existing variable
    export { decrypt as dec };              // export a variable as a new name
    export { encrypt as en } from 'crypto'; // export an export from another module
    export * from 'crypto';                 // export all exports from another module
```
#### 合法的輸入語法
```js
    import 'jquery';                        // import a module without any import bindings
    import $ from 'jquery';                 // import the default export of a module
    import { $ } from 'jquery';             // import a named export of a module
    import { $ as jQuery } from 'jquery';   // import a named export to a different name
    import * as crypto from 'crypto';    // import an entire module instance object
  ```
 ### 程式範例
```js
    //module-export.js
    // 驗證是否是今天的函式
    // export 匯出 isToday module
    export function isToday(date) {
    const d = new Date(date);
    const today = new Date();
    return d.toDateString() === today.toDateString();
    }
  
  //module-import.js
  import { isToday } from "./module-export.js";
  
  //使用 isToday module
  console.log(isToday(new Date())); //true
 ```

## Package（套件）
- 套件是一個包含 package.json 檔案的資料夾，可以包含多個模組，通常是為了封裝一個完整功能，並能被安裝與發布到 npm

    ### 特點：
    - 是一個專案單位（可以被 npm 安裝的單位）
    - 包含一個 package.json，定義名稱、版本、依賴等
    - 通常包含一個主模組檔（例如 index.js）

  ### 為什麼要使用 Package?
    - 第三方功能整合: 可以輕鬆引入社群撰寫好的功能
    - 依賴管理: 自動記錄你用的套件與版本，方便安裝與部署
    - 模組化部署: 你可以把自己寫好的工具包變成套件，在其他專案或給他人使用
    - 團隊協作更容易: 大型專案可以拆成多個 packages ，每個模組分工清楚

    ```js
      // npm install date-fns 安裝第三方 package
      // 引入使用第三方套件的 isToday
      // 使用 as 來重命名
      import { isToday as today } from 'date-fns';
      
      console.log(today(new Date())); // true
    ```