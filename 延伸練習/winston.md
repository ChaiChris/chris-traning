## Winston
winston 是一個功能強大且彈性極高的 Node.js 日誌紀錄（logging）套件，廣泛應用於各種 Node.js 應用中，用來記錄伺服器訊息、錯誤、除錯資訊等。它支援將訊息輸出到 console、檔案、HTTP、資料庫 等多個通道（transports）
### 特性
- 多 transport 支援: 可同時輸出到多個目標（console、file、http...）
- 支援等級: 像是 error、warn、info、debug 等分級輸出
- Express支援: 可結合 express-winston 中介層，記錄 API 請求
- 可擴充、自訂 transport: 可以自訂儲存邏輯（如寫入資料庫）
- 自訂輸出格式: 支援 timestamp、json、colorize、自訂格式
    ```js
    winston.format.combine(
    winston.format.colorize(), // 顏色輸出
    winston.format.timestamp(), // 時間戳
        winston.format.printf(({ level, message, timestamp }) => {
        return `[${timestamp}] ${level}: ${message}`; //自訂紀錄方式
    })
    )
    ```

### 輸出錯誤類型
- error	錯誤（系統無法運作）
- warn	警告（可運作但有風險）
- info	一般訊息（正常狀態）
- http	HTTP 請求紀錄（可自訂）
- verbose	比 info 更詳細的訊息
- debug	除錯訊息
- silly	最細的紀錄資訊