import Mock from 'mockjs';
const UsersData = [
    {
        id: 1,
        username: 'admin',
        password: '123456',
        avatar: 'https://avatars0.githubusercontent.com/u/22588905?v=4&s=120',
        name: '达康书记'
    }
];

const Users = [];
// 随机生成的用户信息
for (let i = 0; i < 86; i++) {
    Users.push(Mock.mock({
        id: Mock.Random.guid(),
        name: Mock.Random.cname(),
        addr: Mock.mock('@county(true)'),
        'age|18-60': 1,
        birth: Mock.Random.date(),
        sex: Mock.Random.integer(0, 1)
    }));
}
//导出多个数据
export { UsersData, Users };