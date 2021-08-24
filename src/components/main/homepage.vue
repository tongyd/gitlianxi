<template>
  <div class="hpage">
    <!-- 轮播图 -->
    <div class="banners">
      <!-- 定位城市 -->
      <div class="city">上海</div>
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item,index) in imgs" :key="index">
          <img v-lazy="'https://res.bestcake.com'+item">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- 导航商品 -->
    <div class="hnavs">
      <ul>
        <li v-for="(item,index) in hanvimgs" :key="index">
          <div>
            <img :src="item" alt>
            <p>{{hnavarr[index]}}</p>
          </div>
        </li>
      </ul>
    </div>
    <!-- 三个图片,宠爱少女部分 -->
    <div class="hguanggao">
      <!-- 函数传参(把这个商品的信息|商品的名字|传到详情页) -->
      <div v-for="(item,index) in icoImgList" :key="index">
        <img v-lazy="item.ImgUrl" @click="toshow(item)">
      </div>
    </div>
    <!-- 魔法猜心部分 -->
    <div class="hmofacaixin">
      <img src="https://res.bestcake.com/m-images-2/mofa.png" alt>
      <div>任选一款,走近你的心</div>
      <div>
        <!-- 动态创建类名  设置选中的结果 :class='{active:activeindex==index}'-->
        <button
          v-for="(item,index) in mofateb"
          :key="index"
          @click="mftabck(index)"
          :class="{active:activeindex==index}"
        >{{item}}</button>
      </div>
      <!-- 送XX下面的三条数据 -->
      <div>
        <div class="mofaso">
          <ul>
            <li v-for="(item,index) in mfsoimgs" :key="index">
              <img :src="item.ImgUrl" @click="toshow(item)" alt>
              <p>{{item.Name}}</p>
              <p>
                <span>￥{{item.CurrentPrice}}</span>
                <i>/{{item.Size}}</i>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 品质甄选 -->
    <div class="hppinzhi">
      <img src="https://res.bestcake.com/m-images-2/pinzhi.png" alt>
      <div>没尝过这些美味的人生，是不完美的</div>
      <div>
        <ul>
          <li v-for="(item,index) in pzlist" :key="index">
            <div>
              <img v-lazy="item.ImgUrl" @click="toshow(item)" alt>
            </div>
            <div>
              <p>{{item.ActiveName}}</p>
              <p>{{item.MoreUrl}}</p>
              <p>
                <span>￥{{item.CurrentPrice}}</span>
                <i>/{{item.Size}}</i>
              </p>
            </div>
            <img
              @click="flys(item.ImgUrl,$event,item)"
              class="img"
              src="https://res.bestcake.com/m-images-2/pinzhi-cart.png"
            >
          </li>
        </ul>
      </div>
    </div>
    <hphuaxian></hphuaxian>
  </div>
</template>
<script>
import { MessageBox } from "mint-ui";
// 加载提示小圆圈
import { Indicator } from "mint-ui";
import hphuaxian from "@/components/child/hphuaxian.vue";
// 引入的jq fly.js
import "@/common/js/fly";
export default {
  name: "homepage",
  data() {
    return {
      // 轮播图的
      imgs: [
        // "/m-images/CakeListConfig/749319704926346000.jpg",
        // "/m-images/banner_new/444800403844803460.jpg",
        // "/m-images/banner_new/721590660285692000.jpg",
        // "/m-images/banner_new/535769203549675970.jpg",
        // "/m-images/banner_new/368311689846465800.jpg?v=2"
      ],
      // 导航8个小图片
      hanvimgs: [
        // "https://res.bestcake.com/m-images/banner_new/538207660850250200.jpg",
        // "https://res.bestcake.com/m-images/banner_new/339358287107534000.jpg",
        // "https://res.bestcake.com/m-images/banner_new/12077535670548922.jpg",
        // "https://res.bestcake.com/m-images/banner_new/706848964689883300.jpg",
        // "https://res.bestcake.com/m-images/banner_new/18052208933946324.jpg",
        // "https://res.bestcake.com/m-images/banner_new/988173501678991200.jpg",
        // "https://res.bestcake.com/m-images/banner_new/364607927039034560.jpg",
        // "https://res.bestcake.com/m-images/banner_new/491347133980943900.jpg"
      ],
      hnavarr: [
        // "大礼包兑换",
        // "贝思客优选",
        // "订蛋糕",
        // "代金卡下单",
        // "冰淇淋",
        // "问卷小调查",
        // "618钜献",
        // "0元泡芙"
      ],
      // 三个图片(宠爱少女部分)
      icoImgList: [
        {
          name: "宠爱少女",
          key: "宠爱少女",
          ImgUrl: "https://res.bestcake.com/m-images-2/guanggao1.png?v=0419"
        },
        {
          name: "小猪蛋糕-贝丽",
          key: "贝丽",
          ImgUrl: "https://res.bestcake.com/m-images-2/guangao22.png?v=0419"
        },
        {
          name: "星光游乐园",
          key: "星光游乐园",
          ImgUrl: "https://res.bestcake.com/m-images-2/guanggao3.png"
        }
      ],
      // 魔法猜心(导航)
      mofateb: ["送恋人", "送挚友", "送长者", " 送亲子"],
      activeindex: 0,
      // 点击魔法猜心按钮 筛选魔法彩信下面的
      mfsoimgs: [],
      // 魔法彩信送XX总数据
      mfimgs: [],
      // 品质甄选的总数据
      pzlist: []
    };
  },
  mounted() {
    // 引入的jq
    // console.log($);
    // 轮播部分
    this.GetBannerList(res => {
      res.forEach(ele => {
        this.imgs.push(ele.ImgUrl);
      });
    });
    // 导航部分8个小图片
    // 魔法猜心送XX 商品内容
    // 品质甄选列表商品
    this.GetIndexCakeList(res => {
      Indicator.close();
      // 这个是导航(8个小图片)
      res.data.Tag.iconList.forEach(element => {
        if (element.City.indexOf("上海") == -1) {
          return;
        } else {
          this.hanvimgs.push(element.ImgUrl);
          this.hnavarr.push(element.ActName);
        }
      });
      // 魔法猜心送XX商品列表部分
      res.data.Tag.list.forEach((ele, index) => {
        if (ele.TabType == 4 && ele.City.indexOf("上海") != -1) {
          this.mfimgs.push(ele);
        } else if (ele.TabType == 5 && ele.City.indexOf("上海") != -1) {
          this.pzlist.push(ele);
        }
      });
      // 为了让魔法彩信初始化显示送恋人这一栏的内容
      this.mftabck(0);
    });
    // this.mftabck(0);
    // 写在GetIndexCakeList外面图片不显示;因为获取数据(回调)是异步的;
  },
  methods: {
    // 定义的方法
    // 跳转到详情页面
    toshow(ele) {
      var data = {
        key: ele.Name || ele.key,
        c: ele.SupplyNo || "NS"
      };
      this.$router.push({
        query: data,
        path: "/xiangqing"
      });
    },
    // 魔法猜心的teb栏切换
    mftabck(index) {
      // teb按钮点击的
      this.activeindex = index;
      // 送XX下面的三条数据
      // 设置这三个为空是为了在每次点击按钮之前先清掉数组里面的数据
      this.mfsoimgs = [];
      this.mfimgs.forEach(ele => {
        if (this.mofateb[index] == ele.ActiveName) {
          if (ele.Name == "许愿天使") {
            return;
          }
          this.mfsoimgs.push(ele);
        }
      });
    },
    // 飞入购物车的效果
    flys(imgs, e, info) {
      // console.log(imgs, e);
      var flyimg = $(
        `<img class="flyimg" src=${imgs} style="width:50px;height:50px;border-radius:25px;display:block;">`
      );
      var top = $(window).scrollTop();
      var dh = event.pageY;
      var newh = dh - top;
      //  购物车节点位置,决定图片飘的位置
      var oBtn = $(".buycc").offset();
      var newdh = oBtn.top - top;
      // console.dir(flyimg);
      flyimg.fly({
        start: {
          left: event.pageX, //抛物体起点横坐标
          top: newh //抛物体起点纵坐标
        },
        end: {
          left: oBtn.left, //抛物体终点横坐标
          top: newdh //抛物体终点纵坐标
        },
        width: 50,
        height: 50,
        onEnd: function() {
          this.destory(); //销毁抛物体
        }
      });
      //加入购物车
      this.$store.commit("addfoods", {
        name: info.Name,
        id: info.Pid,
        price: info.CurrentPrice,
        size: info.Size,
        img: info.ImgUrl,
        num: 1,
        ins: info
      });
    },
    // 引用的接口
    // 轮播接口
    GetBannerList(callback) {
      this.$apis.GetBannerList().then(res => {
        callback(res.data.Tag.List);
      });
    },
    // 导航部分 (八个小图片)
    // 魔法猜心送XX 商品内容
    // 品质甄选的商品列表
    GetIndexCakeList(callback) {
      Indicator.open(`加载中...`);
      this.$apis.GetIndexCakeList().then(res => {
        callback(res);
      });
    }
  },
  components: {
    hphuaxian
  }
};
</script>
<style scoped lang="scss">
.hpage {
  $borders: r(10 * 2) solid #fafafa;
  width: 100%;
  height: auto;
  .banners {
    width: 100%;
    height: r(190 * 2);
    overflow: hidden;
    position: relative;
    img {
      width: 100%;
      display: inline-block;
      height: r(190 * 2);
    }
    .city {
      position: absolute;
      left: 0;
      top: r(4 * 3.8 * 2);
      width: r(75 * 2);
      height: r(30 * 2);
      text-align: center;
      z-index: 1;
      background-size: r(30);
      background-image: url(https://res.bestcake.com/m-images-2/location.png);
      background-size: 6.4vw;
      padding-left: 5.2vw;
      line-height: 8vw;
      background-repeat: no-repeat;
      background-position: 0.8vw;
      background-color: rgba(255, 255, 255, 0.5);
    }
  }
  .hnavs {
    border-bottom: $borders;
    height: r(190 * 2);
    width: 100%;
    ul {
      float: left;
      width: 100%;
      margin: 0;
      padding: 0 0 r(11.5 * 2);
      height: r(176 * 2);
      li {
        list-style: none;
        float: left;
        width: 25%;
        height: r(64 * 2);
        margin-top: r(12 * 2);
        text-align: center;
        div {
          text-align: center;
          width: 100%;
          img {
            display: block;
            width: r(54 * 2);
            height: r(54 * 2);
            margin: 0 auto;
          }
          p {
            text-align: center;
            color: #333;
            width: 100%;
          }
        }
      }
    }
  }
  .hguanggao {
    width: 100%;
    height: r(151 * 2);
    border-bottom: r(10 * 2) solid #fafafa;
    text-align: center;
    div:nth-child(1) {
      float: left;
      width: 49%;
      height: r(150 * 2);
      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
    div {
      float: right;
      width: 49%;
      height: r(150);
      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
  }
  .hmofacaixin {
    width: 100%;
    > img {
      width: 100%;
      margin: r(39 * 2) 0 r(15 * 2);
    }
    div:nth-of-type(1) {
      width: 100%;
      text-align: center;
      color: #999;
      font: r(18 * 2) / r(28 * 2) "";
      margin-bottom: r(25 * 2);
    }
    div:nth-of-type(2) {
      width: 98%;
      padding: 0 1%;
      -webkit-justify-content: space-between;
      display: -webkit-flex;
      button {
        width: r(60 * 2);
        height: r(33 * 2);
        font: r(12 * 2) / r(28 * 2) "";
        background: #fff;
        color: #333;
        border: 0;
      }
      .active {
        background-color: #1db0b8;
      }
    }
    // 魔法猜心下面的商品列表
    .mofaso {
      width: 100%;
      height: r(167 * 2);
      ul {
        width: 100%;
        height: r(137 * 2);
        padding: 0 r(20 * 2) r(20 * 2) r(15 * 2);
        display: -webkit-flex;
        -webkit-justify-content: space-between;
        border-bottom: r(10 * 2) solid #fafafa;
        li {
          width: r(90 * 2);
          height: r(137 * 2);
          list-style: none;
          text-align: center;
          img {
            width: r(106 * 2);
            height: r(90 * 2);
            display: block;
          }
          p {
            color: #333;
            font-size: r(14 * 2);
            span {
              color: red;
              font-size: r(16 * 2);
            }
            i {
              font-size: r(12 * 2);
              color: rgb(212, 212, 212);
            }
          }
        }
      }
    }
  }
  // 品质甄选
  .hppinzhi {
    width: 100%;
    > img {
      width: 100%;
      margin: r(39 * 2) 0 r(15 * 2);
    }
    div:nth-of-type(1) {
      width: 100%;
      text-align: center;
      color: #999;
      font: r(18 * 2) / r(28 * 2) "";
      margin-bottom: r(25 * 2);
    }
    div:nth-of-type(2) {
      width: 100%;
      ul {
        width: 100%;
        margin: 0;
        padding: 0;
        li {
          width: 100%;
          height: auto;
          padding: 0 r(15 * 2);
          list-style: none;
          position: relative;
          overflow: hidden;
          .img {
            width: r(42 * 2);
            height: r(42 * 2);
            position: absolute;
            right: 15%;
          }
          div:nth-of-type(1) {
            width: 30%;
            height: 100%;
            float: left;
            img {
              display: block;
              width: 100%;
              height: 100%;
              float: left;
            }
          }
          div:nth-of-type(2) {
            float: left;
            width: 30%;
            height: 100%;
            margin-left: r(15 * 2);

            p:nth-of-type(1) {
              font-size: r(16 * 2);
              color: #333;
              margin-top: r(4 * 2);
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              height: 30%;
            }
            p:nth-of-type(2) {
              font-size: r(12 * 2);
              color: #999;
              margin-bottom: r(4 * 2);
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              height: 25%;
            }
            p {
              margin-top: 5%;
              span {
                color: rgb(255, 51, 0);
                font-size: r(16 * 2);
              }
              i {
                font-size: r(12 * 2);
                color: rgb(212, 212, 212);
              }
            }
          }
        }
      }
    }
  }
}
</style>

