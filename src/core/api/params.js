import global from '@/core/global/global'
const getParams = global.getParam();
// console.log(getParams);
// console.log(1111);
const params = {
    // 动态生成时间戳
    v: new Date().getTime(),
    // 这个可以给apis->index.js接口传递参数
    // name:getParams.name||"",
    // sex:getParams.sex||"",
}
export default params;