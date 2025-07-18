// 引入使用第三方套件的isToday
// 使用 as 來重命名
import { isToday as today } from 'date-fns';

console.log(today(new Date())); // true