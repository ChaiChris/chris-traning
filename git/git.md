## Git (分散式版本控制軟體)
#### 什麼是git
Git 是分散式版本控制系統，這表示專案的本機複本是完整的版本控制存放庫。 這些功能完整的本機存放庫可讓您輕鬆地離線或遠端工作。 開發人員在本機認可其工作，然後同步處理其存放庫複本與伺服器上的複本。
#### 如何建立 git repository
- 全新的專案
  #### 建立好 repository 後
  #### 在當前專案目錄下進行 git init (-b <可指定 branch-name>, 預設則是 master)
  #### 進行 Add & Commit
  #### 設定 repository源: 
    ````
    git remote add origin http/ssh.git
    ````
  #### 通送 commit 到 repository源:
    ````
    git push -u origin main (main 為本地分支名稱)
    ````
- 
- 
- 已經有使用git版控的專案
#### 用途
1. 儲存資料:
2. 集合+運算處裡: 對陣列值進行多種查找\ 排序\ 篩選\ 運算
3. 迴圈操作: 透過迴圈處裡程式邏輯\ 輸出UI列表，常與 .length 屬性搭配使用
4. 函式式程式設計: 保持資料不可變，避免副作用，並提高代碼可維護性