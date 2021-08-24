// 这个axios是系统的axios
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter';
// 自己定义的用户
import { UsersData } from './data/userInfo'
let mock = new MockAdapter(axios);
// 引入storejs 根据内存做判断
mock.onGet('/login').reply(config => {
    // console.log(config.params) //里面有传过来的参数
    // 做一个数据效验
    var data = {
        code: 200,
        msg: ''
    };
    var userlist = userinfo;
    userlist.forEach(ele => {
        if (ele.username == config.params.username && ele.password == config.params.password) {
            data.msg = "登陆成功";
            data.code = 1;
            data.userinfo = ele;
        } else if (ele.username == config.params.username || ele.password == config.params.password) {
            data.msg = "登陆失败,用户名或密码错误";
            data.code = -1;
        } else {
            data.msg = "用户名不存在";
            data.code = 0;
        }
    })
    return [200, data];

});
var userinfo = [UsersData[0]];
mock.onGet('/reg').reply(config => {
    var data = { code: 0, msg: "", data: {} };
    var bool = true;
    var info = config.params;
    userinfo.forEach(ele => {
        var bj = ele.username == info.username;
        if (bj) {
            bool = false;
            data.msg = "用户名已经存在";
            data.data.code = 0;
        }
    })
    // bool要写在循环外面 不然不会有效果(类似购物车vuex的逻辑)
    if (bool) {
        if (info.username && info.password && info.name) {
            data.msg = "注册成功";
            data.data.code = 1;
            userinfo.push(info);
        } else {
            data.data.code = -1;
            data.msg = "请把信息填写完整";
        }
    }
    return [200, data];
})

export default axios;	//注意暴露axios