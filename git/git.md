## Git (分散式版本控制軟體)
### 什麼是git
Git 是分散式版本控制系統，這表示專案的本機複本是完整的版本控制存放庫。 這些功能完整的本機存放庫可讓您輕鬆地離線或遠端工作。 開發人員在本機認可其工作，然後同步處理其存放庫複本與伺服器上的複本。
## 如何建立 Git Repository

### 情境一：全新的專案
**情境：** 你剛開始一個新的網站專案，想要開始使用 Git 來管理程式碼。

#### 建立好 repository 後 (常見以 GitHub 為主)
首先在 GitHub 上建立一個新的 repository，就像在雲端建立一個新的資料夾。

#### 在當前專案目錄下進行 git init
```bash
git init -b main
```
這就像是在你的專案資料夾裡放入一個「監視器」，開始監控所有檔案的變化。

#### 進行 Add & Commit
```bash
git add .
git commit -m "Initial commit"
```
這就像是拍了一張「快照」，記錄目前專案的狀態。

#### 設定 repository 源：
```bash
git remote add origin <http or ssh.git(repository)>
```
這是告訴本地的 Git：「我的雲端備份位置在這裡」。

#### 推送 commit 到 repository 源：
```bash
git push -u origin main
```
把你的「快照」上傳到雲端備份。

### 情境二：已經有使用 Git 版控的專案
**情境：** 你接手了一個已經在使用 Git 的專案，但需要更換到新的 GitHub repository。

#### 修改/新增 repository 源：
```bash
git remote set-url origin <http or ssh.git(repository)>
```
就像是「搬家」，把雲端備份的地址改成新的位置。

#### 推送 commit 到 repository 源：
```bash
git push -u origin main
```

### .gitignore的意義
- 在開發專案時，工作目錄下可能經常會有新的檔案產生 (可能是透過 Visual Studio 工具產生的那些暫存檔案或快取檔案)，可能有許多檔案並不需要列入版本控管，所以必須要排除這些檔案，我們稱為「忽略清單」。
像是: node_modules .DS_store .temp .idea...

### 如何進行提交(commit)
- 修改或新增檔案
- 使用 git status 檢查變更
    ````
  git status
    ````
- 使用 git add 將修改的檔案 stage
    ````
  git add ...
    ````
- 使用 git commit 提交變更
    ````
  git commit -m "description"
    ````
- 選擇是否推送（git push）到遠端儲存庫
    ````
  git push
    ````
## 檔案還原

### 情境一：取消 git add
**情境：** 你不小心把不想提交的檔案加到了 staging area。

```bash
git restore --staged <檔案名稱>
# 或
git reset HEAD <檔案名稱>
```

### 情境二：撤回上一個 commit
**情境：** 你剛才提交了一個 commit，但發現裡面有錯誤，想要撤回。

```bash
# 保留 stage - 就像「反悔」但東西還在暫存區
git reset --soft HEAD~1

# 移除 stage 但保留修改 - 回到修改後、還沒 add 的狀態
git reset --mixed HEAD~1

# 完全清除修改 - 就像這次修改從未發生過（危險！）
git reset --hard HEAD~1
```

## 如何切換 Branch

**情境：** 你正在開發一個電商網站，主要功能在 `main` 分支，但你想要開發一個新的「購物車」功能，又不想影響到穩定的主要程式碼。

### 創建並切換到新分支：
```bash
# 創建新分支
git branch shopping-cart

# 切換分支（老方法）
git checkout shopping-cart

# 切換分支（新方法，官方建議）
git switch shopping-cart

# 創建並同時切換（新方法）
git switch -c shopping-cart
```

## 何為衝突 (Conflict)

**情境：** 你和同事小明都在修改同一個檔案的同一行程式碼：

**你的修改：**
```javascript
const welcomeMessage = "歡迎來到我們的網站！";
```

**小明的修改：**
```javascript
const welcomeMessage = "Welcome to our website!";
```

當你們想要合併程式碼時，Git 不知道該保留哪一個版本，就會產生「衝突」。

### 衝突的樣子：
```javascript
<<<<<<< HEAD
const welcomeMessage = "歡迎來到我們的網站！";
=======
const welcomeMessage = "Welcome to our website!";
>>>>>>> feature-branch
```

### 解決方法：
1. 打開衝突的檔案
2. 決定要保留哪個版本，或者合併兩個版本
3. 刪除 `<<<<<<<`、`=======`、`>>>>>>>` 這些標記
4. 存檔並提交