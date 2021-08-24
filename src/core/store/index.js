import Vue from "vue"
// 全局组件的信息刷新就会消失 但是移动端没有刷新功能 所以 用不用storejs都可以
import Vuex from "vuex";
Vue.use(Vuex);
import Store from 'storejs'
// 定义全局使用的属性,不能改
const state = {
    cartlist: { 'list': [], count: 0 },
}
//定义同步方法
const mutations = {
    Vuexinit(state) {
        state.cartlist.list = Store.get("foods") || []
        state.cartlist.count = Store.get("number")
    },
    addfoods(state, data) {
        //state获取state里面的属性值,默认第一个就是 data 获取视图传入的数
        // 购物车
        //1,在这边state里面放一个空数组,进行判断,看里面是否有数据
        //2,如果没有的话直接把data/ push到这个空数组里面
        //3,如果有 {3.1先判断此时传过来的data.name或id 是否存在,存在的话就直接num++,}
        // {如果不存在,就把数据再次push到数组里面(不可以直接用一个if)}
        if (state.cartlist.list.length > 0) {
            var flag = true;
            var n = 0;
            state.cartlist.list.forEach(ele => {
                if (ele.id == data.id) {
                    // 如果 直接在这个后面else的话 会出现重复的数据
                    flag = false;
                    ele.num = ele.num + data.num;
                    ele.zj = ele.num * ele.price;
                    return;
                }
            });
            if (flag) {
                data.zj = data.num * data.price;
                state.cartlist.list.push(data);
            }
            state.cartlist.list.forEach(ele => {
                n += ele.num;
            })
            state.cartlist.count = n;
        } else {
            data.zj = data.num * data.price;
            state.cartlist.list.push(data);
            state.cartlist.count = 1;
        }
        Store.set("foods", state.cartlist.list)
        Store.set("number", state.cartlist.count)
    },
   
}
//定义 computed(属性计算)
const getters = {
    count(state) {
        // return state.num * state.price;
    }
}
//定义异步方法,可以在这个里面做一些异步操作,比如调用通用数据接口
const actions = {
    // syFn(context,data) {
    //     console.log(context);
    // },
}
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})