
// 驗證是否是今天的函式
// export 匯出 isToday module
export function isToday(date) {
    const d = new Date(date);
    const today = new Date();
    return d.toDateString() === today.toDateString();
}