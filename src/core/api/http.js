import axios from 'axios'
const baseURL = location.host.indexOf('89') !== -1 ? '' : '/apis'
let ajaxConfig = {
  baseURL,
  transformRequest: [function (data) {
  // 对 data 进行任意转换处理
    return data
  }],
  // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
  transformResponse: [function (data) {
  // 对 data 进行任意转换处理

    return data
  }],
  withCredentials: true,
  responseType: 'json'

}
var instance = axios.create(ajaxConfig)
export default instance
