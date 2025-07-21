// 方法一： 直接創建 Map（最常用）
const map1 = new Map();
map1.set('Location','Taiwan')
map1.set('Map','Asia')
console.log(...map1);
// [ 'Location', 'Taiwan' ] [ 'Map', 'Asia' ]

// 方法二： 由陣列建立 Map
const addr = [['Location','England'],['Map']]
const map2 = new Map(addr);
//or const map2 = new Map([['Location','England'],['Map']]);
console.log(...map2);
// [ 'Location', 'England' ] [ 'Map', 'Europe' ]

// 方法三： 從其他 Map 複製
const copyMap2 = new Map(map2);
console.log(...copyMap2);

// 方法四： 由物件建立 Map（手動轉換）
const nycAddr = { lon: 40, lat:-73 };
const nycMap = new Map(Object.entries(nycAddr));
console.log(...nycMap);
