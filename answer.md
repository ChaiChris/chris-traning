# JavaScript 程式開發
## 環境設定
### 如何在本地安裝 `Node.js` 與 `npm`
- winget 方法 (Windows 10 above only):
  #### 安裝 winget (Powershell)
  ````
   Add-AppxPackage -RegisterByFamilyName -MainPackage Microsoft.DesktopAppInstaller_8wekyb3d8bbwe
  ```` 
  #### 安裝 node.js (Powershell, 通常 npm 會與 node.js 一同安裝)
    ````
   winget install --id=OpenJS.NodeJS  -e
    ````
  #### 測試
    ````
    node -v (node.js 安裝成功並且加入path)
    npm -v (npm 安裝成功並且加入path)
    ````
---
### 使用 `npm` 初始化專案 (package.json)
#### 初始化
    ````
    npm init (依照問題選答)
    ````
---
### 如何確認當前所在的專案環境 (使用 node -v 和 npm -v 確認版本)
  #### 執行
   ````
   node -v (輸出 v24.4.0)
   npm -v (輸出 11.4.2)
   ````
---
### 全域安裝與專案安裝套件
   ````
   npm install -g (全域安裝 在終端機隨時可執行)
   npm install (專案安裝 只安裝到當前專案目錄)
   ````
---
### 如何設定與使用 `.env` 環境變數
- dotenv+.env檔 方法:
  #### 安裝 dotenv
  ````
   npm install dotenv
  ```` 
  #### 創建 .env 檔案並寫入需要的環境變數
    ````
    創建 .env 
    寫入 DB_HOST="123.0.0.1"
    ````
  #### 在代碼透過dotenv引入.env
    ````
    require('dotenv').config()
    ````
  #### 使用環境變數
    ````
    console.log(process.env.DB_HOST)
    (輸出 123.0.0.1)
    ````
## 開發工具
### 快速尋找方法或參數的「源頭」或是「有哪些方法在使用」
   - Ctrl + b 可以快速訂位到源頭
---
### 快速reformat程式碼
   - Ctrl + Alt + l 可以快速 Reformat
---

# JavaScript 基本練習
## Array (陣列)
### 說明什麼是Array (定義、特性、用途等)，如何建立一個Array
#### 定義
有序規則的物件，可以存入多個多型資料，並依照順序有 index (從 0 開始)
#### 特性
1. 有序集合: 有固定順序，可依照索引進行修改
2. 動態大小: 其長度並非固定，可以隨時新增/刪除元素
3. 多型資料: 可以混和存入多種類型元素
4. 多種內建方法: 有許多內建方法對其進行修改
5. typeof 是 object: typeof 輸出陣列為物件，但可使用isArray方法來區分是否為陣列
#### 用途
1. 儲存資料: 
2. 集合+運算處裡: 對陣列值進行多種查找\ 排序\ 篩選\ 運算
3. 迴圈操作: 透過迴圈處裡程式邏輯\ 輸出UI列表，常與 .length 屬性搭配使用
4. 函式式程式設計: 保持資料不可變，避免副作用，並提高代碼可維護性
#### 常見的陣列方法
###### 會改變原陣列
1. push(): 會將一或多個的值，加入至陣列尾端。
2. pop(): 
3. shift(): 
4. unshift(): 
5. splice():
6. fill():
7. copyWithin():
8. sort():
###### 不改變原陣列
1. concat(): 
2. join(): 
3. slice():
4. map(): 
5. filter():
6. flat()