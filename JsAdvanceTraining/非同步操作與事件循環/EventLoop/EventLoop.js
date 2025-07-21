console.log('1. 同步開始');

setTimeout(() => {
    console.log('2. setTimeout 宏任務');
}, 0);

Promise.resolve().then(() => {
    console.log('3. Promise 微任務');
});

queueMicrotask(() => {
    console.log('4. queueMicrotask 微任務');
});

console.log('5. 同步結束');
