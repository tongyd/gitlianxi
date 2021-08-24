<template>
  <div class="xiangqing">
    <div class="xqfoods">
      <div class="tpian">
        <mt-swipe :auto="4000">
          <mt-swipe-item v-for="(item,index) in foodsimgs" :key="index">
            <img :src="item" alt>
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <p class="p1">{{foodinfo.Name}}</p>
      <h3 class="xin" v-if="bool">新</h3>
      <div class="foodinfos">
        <p>
          <i>甜度</i>
          <span>
            <img :src="simg" style="width:22.4vw">
          </span>
        </p>
        <p>
          <i>口味</i>
          <span>{{foodinfo.CategoryName}}</span>
        </p>
        <p class="bp">
          <i>原材料</i>
          <span>{{foodinfo.Resourse}}{{foodinfo.Resource}}</span>
        </p>
        <p>
          <i>适合人群</i>
          <span>所有人群</span>
        </p>
        <p class="bp">
          <i>保鲜条件</i>
          <span>{{foodinfo.KeepFresh}}</span>
        </p>
      </div>
      <div class="sppingjia">
        <p>
          <img src="https://res.bestcake.com/m-images/ww/detail/evaluate-a.png" alt>
          <span>商品评价</span>
        </p>
        <p>
          <i>(1441条)></i>
        </p>
      </div>
      <!-- 商品尺寸 -->
      <div class="spsize">
        <div class="odx">
          <button
            @click="tab(index)"
            :class="{active:active==index}"
            v-for="(item,index) in foodsize"
            :key="index"
          >{{item}}</button>
        </div>
        <div class="tdx">
          <span>
            <img src="https://res.bestcake.com/m-images/ww/detail/icon-custom-1.png"> 13.5*13.5cm
          </span>
          <span>
            <img src="https://res.bestcake.com/m-images/ww/detail/icon-custom-2.png" alt> 适合4-5人分享
          </span>
          <span>
            <img src="https://res.bestcake.com/m-images/ww/detail/icon-custom-3.png" alt> 含五人份餐具
          </span>
          <span>
            <img src="https://res.bestcake.com/m-images/ww/detail/icon-custom-4.png" alt> 至少需提前一天预约
          </span>
        </div>
      </div>
      <div class="buynum">
        <p>购买数量</p>
        <p>
          <button @click="del">-</button>
          <span>{{count}}</span>
          <button @click="add">+</button>
        </p>
      </div>
    </div>
    <hphuaxian></hphuaxian>
    <!-- 结算部分 -->
    <div class="bdiv">
      <p>
        <span class="span1">{{jiage}}</span>
        <span>
          已优惠:
          <i>0.00</i>
        </span>
      </p>
      <p class="pbuy" @click="bcats(foodinfo,foodsimgs,jiage)">加入购物车</p>
      <mt-button type="primary">立即购买</mt-button>
    </div>
  </div>
</template>
<script>
import hphuaxian from "@/components/child/hphuaxian.vue";
import { MessageBox } from "mint-ui";
export default {
  name: "xiangqing",
  data() {
    return {
      // 放商品的图片
      foodsimgs: [],
      // 放商品信息
      foodinfo: [],
      // 放商品价格
      jiage: [],
      // '新'字显示的条件;
      bool: false,
      // 商品数量
      count: 1,
      goods: {},
      // 商品的尺寸
      foodsize: [],
      foodshow: [],
      active: 0,
      // 存放商品甜度
      sweet: "",
      simg: ""
    };
  },
  components: {
    hphuaxian
  },

  methods: {
    getinfos() {
      // console.log(this.$route.query);
      if (this.$route.query.c.indexOf("NS") != -1) {
        this.GetNSCakeByName(res => {
          this.goods = res;
          if (res.data.Tag == null) {
            return;
          }
          res.data.Tag.forEach(ele => {
            if (ele.City.indexOf("上海") != -1) {
              this.foodinfo = ele;
              // console.log(this.foodinfo);
              this.jiage = ele.CurrentPrice;
            }
          });
          this.foodinfo.KeepFresh =
            "最适宜0℃~8℃冷藏保存，离开冷藏请勿超过2小时。5月1日~10月31日建议2天内食用 11月1日~翌年4月30日建议3天内食用。";
          this.bool = true;
        });
        this.setimgs("ns-detail");
      } else if (this.$route.query.c.indexOf("KSK") != -1) {
        this.GetCakeByName(res => {
          this.goods = res;
          this.foodinfo = res.data.Tag.infos;
          // console.log(this.foodinfo);
          this.jiage = res.data.Tag.infos.CakeType[0].CurrentPrice;
        });
        this.setimgs("jd-detail");
      } else if (this.$route.query.c.indexOf("RP") != -1) {
        this.GetRuPCakeByName(res => {
          this.goods = res;
          this.foodinfo = res.data.Tag[0];
          // console.log(this.foodinfo);
          this.jiage = res.data.Tag[0].CurrentPrice;
        });
        this.setimgs("rp-detail");
      } else {
        this.GetjzCakeInfo(res => {
          this.goods = res;
          this.foodinfo = res.data.Tag[0];
          // console.log(this.foodinfo);
          this.jiage = res.data.Tag[0].CurrentPrice;
        });
        this.setimgs("jz-detail");
      }
    },
    // 商品图片
    setimgs(path) {
      for (var i = 1; i <= 4; i++) {
        var strurl = `https://res.bestcake.com/m-images/${path}/${
          this.$route.query.key
        }/${this.$route.query.key}-${i}.jpg`;
        this.foodsimgs.push(strurl);
        // console.log(strurl);
      }
    },
    // 点击加入购物车数量的加减
    add() {
      this.count++;
    },
    del() {
      if (this.count == 1) {
        this.count = 1;
        return;
      }
      this.count--;
    },
    // 商品加入购物车addfoods
    bcats(info, imgs, jiage) {
      MessageBox.confirm("是否加入购物车?").then(
        action => {
          this.$store.commit("addfoods", {
            name: info.Name,
            id: this.foodshow.ID || this.foodshow.CakeType[this.active].Id,
            price: jiage,
            size: this.foodsize[this.active],
            img: imgs[0],
            num: this.count,
            ins: info
          });
          // this.$router.push({
          //   path: "buycar"
          // });
        },
        ad => {
          return;
        }
      );
    },
    // 尺寸大小切换
    tab(index) {
      // console.log(this.foodshow);
      this.active = index;
      if (this.foodshow.CakeType != undefined) {
        this.jiage = this.foodshow.CakeType[index].CurrentPrice;
      }
      // console.log(this.$store.state.cartlist.list);
    },
    // 两个接口的数据
    GetNSCakeByName(callback) {
      var data = {
        Name: this.$route.query.key
      };
      this.$apis.GetNSCakeByName(data).then(res => {
        callback(res);
      });
    },
    GetCakeByName(callback) {
      var data = {
        ProName: this.$route.query.key
      };
      this.$apis.GetCakeByName(data).then(res => {
        callback(res);
      });
    },
    // 乳品的接口
    GetRuPCakeByName(callback) {
      var data = {
        Name: this.$route.query.key
      };
      this.$apis.GetRuPCakeByName(data).then(res => {
        callback(res);
      });
    },
    // 伴手礼 jz接口
    GetjzCakeInfo(callback) {
      var data = {
        ProName: this.$route.query.key
      };
      this.$apis.GetjzCakeInfo(data).then(res => {
        callback(res);
      });
    }
  },
  mounted() {
    this.getinfos();
  },
  watch: {
    goods: {
      handler() {
        if (this.goods.data.Tag.length) {
          this.goods.data.Tag.forEach(ele => {
            if (ele.City == "上海") {
              this.foodsize.push(ele.Size);
              this.sweet = ele.Sweet;
              this.simg = `https://res.bestcake.com/m-images/ww/jz/tiandu_${
                this.sweet
              }.png`;
              //  console.log(ele);
            }
            if (ele.City == undefined) {
              this.foodsize.push(ele.KW);
              this.sweet = ele.CurrentPro.Sweet;
              this.simg = `https://res.bestcake.com/m-images/ww/jz/tiandu_${
                this.sweet
              }.png`;
            }
          });
          this.foodshow = this.goods.data.Tag[0];
        } else {
          // console.log("jd");
          this.goods.data.Tag.infos.CakeType.forEach(ele => {
            this.foodsize.push(ele.Size);
            this.sweet = ele.Sweet;
            this.simg = `https://res.bestcake.com/m-images/ww/jz/tiandu_${
              this.sweet
            }.png`;
          });
          this.foodshow = this.goods.data.Tag.infos;
        }
      },
      deep: true
    }
  }
};
</script>
<style lang="scss" scoped>
.xiangqing {
  width: 100%;
  height: r(667 * 2);
  position: relative;
  .xqfoods {
    width: 100%;
    height: 100%;
    overflow: auto;
    .tpian {
      width: 100%;
      height: 50%;
      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
    .p1 {
      width: 100%;
      height: r(61 * 2);
      text-align: center;
      font-size: r(16 * 2);
      font-weight: bold;
      line-height: r(61 * 2);
    }
    .xin {
      width: 10%;
      text-align: center;
      margin: 0 43%;
      background-color: #f2495e;
      height: r(30 * 2);
      color: #fff;
      line-height: r(30 * 2);
    }
    .foodinfos {
      width: 100%;
      height: 36%;
      border-top: r(2 * 10) solid #f7f7f7;
      border-bottom: r(2 * 10) solid #f7f7f7;
      padding: 5% 0 0 0;
      p {
        font-size: r(14 * 2);
        width: 100%;
        height: 15%;
        margin: 0;
        padding: 0;
        i {
          color: #9a9a9a;
          font-style: normal;
          display: block;
          width: 20%;
          height: 100%;
          float: left;
        }
        span {
          color: #252525;
          width: 70%;
          margin-left: 10%;
          display: block;
          height: 100%;
          float: left;
        }
      }
      .bp {
        height: 20%;
      }
    }
    .spsize {
      width: 100%;
      height: r(186 * 2);
      margin-top: r(30);
      .odx {
        width: 90%;
        height: 30%;
        padding: 0 5%;
        display: flex;
        > button {
          display: block;
          width: 22%;
          height: r(26 * 2);
          margin: 0 1% 0 2%;
          background: #fff;
          border-radius: 2px;
          color: #333;
          border: 1px solid #ddd;
          text-align: center;
          line-height: r(26 * 2);
        }
        .active {
          background: #02d3d6;
          color: #fff;
          border: 1px solid #02d3d6;
        }
      }
      .tdx {
        width: 90%;
        height: 60%;
        display: flex;
        flex-wrap: wrap;
        > span {
          margin: 3% 6% 3% 2%;
          > img {
            display: inline-block;
            width: r(40);
            height: r(40);
          }
        }
      }
    }
    .sppingjia {
      width: 100%;
      height: 6%;
      padding: 1% 0;
      border-bottom: r(2 * 10) solid #f7f7f7;
      p {
        margin: 0;
        padding: 0 1%;
        float: left;
        width: 48%;
        height: 100%;
        font-size: r(14 * 2);
        img {
          width: 15%;
          display: inline-block;
          height: 50%;
        }
        span {
          color: #333;
          height: 100%;
          display: inline-block;
          margin-left: 3%;
        }
        i {
          font-style: normal;
          color: #9a9a9a;
          text-align: right;
          display: inline-block;
          width: 100%;
        }
      }
    }
    .buynum {
      width: 100%;
      height: 8%;
      padding: 2% 0 0 0;
      margin: 0;
      border-bottom: r(2 * 10) solid #f7f7f7;
      p {
        height: 8%;
        padding: 3% 0;
        margin: 0;
        float: left;
        width: 50%;
        button {
          background-color: #fff;
          border: 0;
        }
        span {
          display: inline-block;
          width: 5%;
          text-align: center;
        }
      }
      p:nth-of-type(2) {
        text-align: right;
        width: 46%;
        padding-right: 3%;
      }
    }
  }
  .bdiv {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 10%;
    background: #fff;
    z-index: 80;
    p {
      width: 30%;
      float: left;
      margin: 2% 0 3% 5%;
      height: 100%;
      .span1 {
        font-size: r(16 * 2);
        color: #f2495e;
        font-weight: bolder;
        width: 100%;
        height: 50%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        display: block;
      }
      span {
        font-size: r(12 * 2);
        i {
          font-style: normal;
        }
      }
    }
    .pbuy {
      float: left;
      font-size: r(16 * 2);
      height: 50%;
      width: 30%;
      padding: 4% 0;
    }
    .mint-button {
      height: 100%;
      width: 30%;
    }
  }
}
</style>

