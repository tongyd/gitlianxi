import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => require(['@/components/home'], resolve),
      redirect: 'ashouye',
      children: [
        {
          path: 'ashouye',
          name: '首页',
          component: resolve => require(['@/components/views/a_denglu/a_shouye'], resolve),
          meta: {
            keepAlive: true,  //true 禁止重复加载, false不禁止,
            title: '首页',
          },
        },
        {
          path: 'adenglu',
          name: '登录',
          component: resolve => require(['@/components/views/a_denglu/a_denglu'], resolve),
          meta: {
            keepAlive: false,  //true 禁止重复加载, false不禁止
            title: '登录',
          },

        },
        {
          path: 'adenglumima',
          name: '找回密码',
          component: resolve => require(['@/components/views/a_denglu/a_denglumima'], resolve),
          meta: {
            keepAlive: false,  //true 禁止重复加载, false不禁止
            title: '找回密码',

          },
        },
        {
          path: 'adenglumimat',
          name: '确认新密码',
          component: resolve => require(['@/components/views/a_denglu/a_denglumimat'], resolve),
          meta: {
            keepAlive: false,  //true 禁止重复加载, false不禁止
            title: '确认新密码',

          },
        },
        {
          path: 'atjiumiaosha',
          name: '9.9秒杀',
          component: resolve => require(['@/components/views/ashangpinclass/at_jiumiaosha'], resolve),
          meta: {
            keepAlive: false,  //true 禁止重复加载, false不禁止
            title: '9.9秒杀',

          },
        },
        {
          path: 'atchangqi',
          name: '长期购',
          component: resolve => require(['@/components/views/ashangpinclass/at_changqi'], resolve),
          meta: {
            keepAlive: false,  //true 禁止重复加载, false不禁止
            title: '长期购',

          },
        },
        {
          path: 'atpinpai',
          name: '品牌团',
          component: resolve => require(['@/components/views/ashangpinclass/at_pinpai'], resolve),
          meta: {
            keepAlive: false,  //true 禁止重复加载, false不禁止
            title: '品牌团',

          },
        },
        {
          path: 'bxiangqing',
          name: '商品详情',

          component: resolve => require(['@/components/views/b_shangpin/b_xiangqing'], resolve),
          meta: {
            keepAlive: false,  //true 禁止重复加载, false不禁止
            title: '商品详情',
          },
        },
        {
          path: 'bzigou',
          name: '自购订单',

          component: resolve => require(['@/components/views/b_shangpin/b_zigou'], resolve),
          meta: {
            keepAlive: false,  //true 禁止重复加载, false不禁止
            title: '自购订单',
          },
        },
        {
          path: 'badress',
          name: '地址识别',
          component: resolve => require(['@/components/views/b_shangpin/b_adress'], resolve),
          meta: {
            keepAlive: false,  //true 禁止重复加载, false不禁止
            title: '地址识别',
          },
        },
        {
          path: 'bzhifu',
          name: '支付',
          component: resolve => require(['@/components/views/b_shangpin/b_zhifu'], resolve),
          meta: {
            keepAlive: false,  //true 禁止重复加载, false不禁止
            title: '支付',
          },
        },
        {
          path: 'userinfo',
          name: 'userinfo',
          component: resolve => require(['@/components/child/userinfo'], resolve),
        },
        {
          path: 'reg',
          name: 'reg',
          component: resolve => require(['@/components/child/reg'], resolve),
        },

      ]
    }
  ]
})
var fp = "";
router.beforeEach((to, from, next) => {
  // console.log(from.path);
  if (to.path == "/user") {
    fp = from.path;
    if (from.path == "/user") {
      next({ path: fp })
    }
  }
  next();

})

console.log(fp);
export default router;