async function DoObjectDestructuring() {
    console.log('=== 標準解構 ===');
    const user = {name: 'Jack', age: 28, email: 'jack@gmail.com'};
    const {name: userName, age: userAge} = user;
    console.log('姓名:', userName); // Jack
    console.log('年齡:', userAge);  // 28
    console.log('原始物件:', user);

    await delay()

    console.log('\n=== 變數命名重命名 ===');
    const {user: userValue} = {user: 5};
    console.log('userValue =', userValue); // userValue = 5
    console.log('變數 user 是否存在:', typeof user); // object (因為上面已經定義了 user)

    console.log('\n多個重新命名範例');
    const apiResponse = {
        user_id: 12345,
        user_name: 'John',
        user_email: 'john@example.com',
        created_at: '2024-01-15'
    };
    const {
        user_id: apiUserId,
        user_name: apiUserName,
        user_email: apiUserEmail,
        created_at: apiCreatedDate
    } = apiResponse;
    console.log('用戶 ID:', apiUserId);
    console.log('用戶姓名:', apiUserName);
    console.log('用戶信箱:', apiUserEmail);
    console.log('建立日期:', apiCreatedDate);

    await delay()

    console.log('\n=== 失敗保護 ===');
    const response = {user2: 'Not found'};
    const {user: responseUser} = response;
    console.log('user 不存在時 responseUser =', responseUser); // undefined

    await delay()

    console.log('\n=== 帶預設值 ===');
    const {name: defaultName = '未知用戶', age: defaultAge = 0} = {name: 'Chris'};
    console.log('姓名:', defaultName); // Chris
    console.log('年齡:', defaultAge);  // 0

    const {status: userStatus = 'inactive'} = {userStatus: 'active'};
    console.log('用戶狀態:', userStatus); // inactive

    await delay()

    console.log('\n=== 簡短語法 ===');
    const {prop: simpleProp, prop2: simpleProp2} = {prop: 5, prop2: 10};
    console.log('simpleProp =', simpleProp);   // 5
    console.log('simpleProp2 =', simpleProp2); // 10

    await delay()

    console.log('\n=== 物件其餘運算符 ===');

    function UserCard({name, email, avatar = '/default-avatar.png', ...otherProps}) {
        console.log('姓名:', name);
        console.log('信箱:', email);
        console.log('頭像:', avatar);
        console.log('其他屬性:', otherProps);
    }

    const userProps = {
        name: 'Diana',
        email: 'diana@example.com',
        age: 30,
        role: 'developer',
        isActive: true
    };
    UserCard(userProps);

    await delay()

    console.log('\n=== 巢狀物件解構 ===');
    const company = {
        location: {
            country: 'Taiwan',
            city: 'Taipei',
            address: {
                street: '忠孝東路',
                number: 123
            }
        },
        employees: 150
    };
    const {
        location: {
            country: companyCountry,
            city: companyCity,
            address: {street: companyStreet, number: companyNumber}
        },
        employees: companyEmployees
    } = company;
    console.log('國家:', companyCountry);
    console.log('城市:', companyCity);
    console.log('街道:', companyStreet);
    console.log('門牌號碼:', companyNumber);
    console.log('員工數量:', companyEmployees);

}
const delay = () => new Promise(resolve => setTimeout(resolve, 500));
DoObjectDestructuring()