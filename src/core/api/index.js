import request from './http'
import params from './params'
import mock from "@/mock/mock"
class Apls {
  // 自己模拟登陆接口mock
  Mocklogin(data) {
    return mock.get('/login', {
      params: data,
    })
  }
  Mockreg(data) {
    return mock.get('/reg', {
      params: data,
    })
  }
  // 首页轮播
  GetBannerList() {
    return request({
      method: 'get',
      url: '/json1811.ashx',
      params: {
        params,
        c: 'Index',
        m: 'GetBannerList',
        Type: 2,
        City: '上海'
      },
    })
  }
  // 首页商品数据
  GetIndexCakeList() {
    return request({
      method: 'get',
      url: 'json1811.ashx',
      params: {
        params,
        c: 'Index',
        m: 'GetIndexCakeList',
      }
    })
  }
  // 焦点图详情接口(宠爱少女)
  GetNSCakeByName(data) {
    return request({
      method: 'get',
      url: 'json1811.ashx',
      params: {
        Name: data.Name,
        c: 'NsCakeCenter',
        m: 'GetNSCakeByName',
        params,
      }
    })
  }
  // 商品详情接口(品质甄选)
  GetCakeByName(data) {
    return request({
      method: 'get',
      url: 'json1811.ashx',
      params: {
        City: '上海',
        ProName: data.ProName,
        c: 'Product',
        m: 'GetCakeByName',
        params,
      }
    })
  }
  // 乳品的接口
  GetRuPCakeByName(data) {
    return request({
      method: 'get',
      url: 'json1811.ashx',
      params: {
        params,
        c: 'NsCakeCenter',
        m: 'GetRuPCakeByName',
        Name: data.Name,
      }
    })
  }
  //伴手礼的接口 
  GetjzCakeInfo(data) {
    return request({
      method: 'get',
      url: 'json1811.ashx',
      params: {
        City: '上海',
        ProName: data.ProName,
        c: 'IndexCenter',
        m: 'GetjzCakeInfo',
        params,
      }
    })
  }
  // 分类页面的数据
  GetJdListNew() {
    return request({
      method: 'get',
      url: 'json1811.ashx',
      params: {
        c: 'NsCakeCenter',
        m: 'GetJdListNew',
        params,
      }
    })
  }
  // 城市筛选
  GetCitys() {
    return request({
      method: 'get',
      url: 'json1811.ashx',
      params: {
        c: 'CityCenter',
        m: 'GetCitys',
        params,
      }
    })
  }
}
export default new Apls()
