import tempFn from "@/components/tempCommon/tempCommon";
import fliter from "@/core/fliter/index"
import global from "@/core/global/global"//返回了以个对象{getParam:fn()}
import apis from "@/core/api/index" //返回了以个对象{joke:fn(),getServerStr:fn()}
import derective from "@/core/directive/index"

import $ from "jquery";
export default (Vue) => {
    tempFn(Vue);
    fliter(Vue);
    derective(Vue);
    // 绑定到Vue原型里面直接可以在当前实例 this.$global上面调用
    //将方法写入Vue实例,实现每一个组件,都可以通过this.$global,this.$apis 来调用方法
    //$global,$apsi 不是固定写法
    Vue.prototype.$global = global;
    Vue.prototype.$apis = apis;
    Vue.prototype.$ = $;
    Vue.prototype.$eventHub = new Vue();

}