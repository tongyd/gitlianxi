<template>
  <div>
    <div v-show="!bool" class="buycar">
      <div class="buyfooods">
        <h3 v-if="$store.state.cartlist.list.length==0">购物车是空的哦~</h3>
        <ul
          id="carstyle"
          v-if="$store.state.cartlist.list.length>0"
          style="margin:0 0 4vw 0; background: #fff;padding:0;"
        >
          <li
            v-for="(item,index) in cartlist"
            :key="index"
            style="list-style:none;padding-bottom: 4.26vw;height:47vw;"
          >
            <div style="float: left; margin-left: 4vw; margin-right: 3vw;">
              <span style="width: 5.33vw;">
                <!-- <input v-model="item.check" type="checkbox" style="margin-top: 17vw;" @click="sc"> -->
                <img
                  v-show="item.check==false"
                  style="margin-top: 17vw;width:5.33vw"
                  @click="sc(item,$event)"
                  src="https://res.bestcake.com/m-images/order/mw_firm_duihao_2.jpg"
                >
                <img
                  v-show="item.check==true"
                  style="margin-top: 17vw;width:5.33vw"
                  @click="sc(item,$event)"
                  src="https://res.bestcake.com/m-images/order/mw_firm_duihao_1.jpg"
                >
              </span>
            </div>
            <div style="float: left;border-bottom:1px solid #ccc;margin-bottom:6vw;">
              <div style="float:left;padding-top:4.26vw;">
                <img :src="item.img" style="width:30.4vw" @click="toshow(item.ins)">
              </div>
              <div style="float:left;" class="ddpp">
                <p class="pp">{{item.name}}</p>
                <p class="pp">
                  <span>{{item.size}}</span>
                  <span class="spt">
                    <button @click="del(item,item.num)">-</button>
                    <i>{{item.num}}</i>
                    <button @click="add(item,item.num)">+</button>
                  </span>
                </p>
                <p class="pp">{{item.zj}}</p>
              </div>
            </div>
            <h4 class="youhui">
              优惠活动
              <span>不参与活动</span>
            </h4>
          </li>
        </ul>
      </div>
      <div class="rexiao">
        <div>
          <p>Hot Recommend</p>
          <p class="buyp"></p>
          <p class="buypt">热销新品推荐</p>
        </div>
        <ul>
          <li>
            <img
              src="https://res.bestcake.com\m-images\cart\mw_firm_sq.jpg"
              @click="toshow1('吉致生巧','JZ')"
              alt
            >
            <p>伴手礼系列-吉致生巧</p>
            <p>
              <span>168.00/1盒</span>
            </p>
            <div>
              <img src="https://res.bestcake.com\m-images\order\mw_firm_gwc.jpg" alt>
              <!--  @click="addrx('吉致生巧',987,'168','1盒','https://res.bestcake.com/m-images/jz-detail/吉致生巧/吉致生巧-1.jpg',)" -->
            </div>
          </li>
          <li>
            <img
              src="https://res.bestcake.com\m-images\cart\mw_firm_nzt_v1.jpg"
              @click="toshow1('吉致牛轧糖(巴旦木味)','JZ')"
              alt
            >
            <p>伴手礼系列-吉致生巧</p>
            <p>
              <span>168.00/1盒</span>
            </p>
            <div>
              <img src="https://res.bestcake.com\m-images\order\mw_firm_gwc.jpg" alt>
              <!--  @click="addrx('吉致牛轧糖(巴旦木味)',925,'168','1盒','https://res.bestcake.com/m-images/jz-detail/吉致牛轧糖(巴旦木味)/吉致牛轧糖(巴旦木味)-1.jpg',)" -->
            </div>
          </li>
          <li>
            <img
              src="https://res.bestcake.com\m-images\cart\mw_firm_pf_v1.jpg"
              @click="toshow1('吉致泡芙','JZ')"
              alt
            >
            <p>伴手礼系列-吉致生巧</p>
            <p>
              <span>168.00/1盒</span>
            </p>
            <div>
              <img src="https://res.bestcake.com\m-images\order\mw_firm_gwc.jpg" alt>
              <!--  @click="addrx('吉致泡芙',654,'88','0.8磅','https://res.bestcake.com/m-images/jz-detail/吉致泡芙/吉致泡芙-1.jpg',)" -->
            </div>
          </li>
        </ul>
      </div>
      <div class="jiesuan">
        <ul>
          <li>
            <!-- <input type="checkbox" v-model="sel" @click="qx"> -->
            <img
              v-show="sel==false"
              style="margin-top: 4.34vw;width:5.33vw;margin-left:4vw"
              @click="qx"
              src="https://res.bestcake.com/m-images/order/mw_firm_duihao_2.jpg"
            >
            <img
              v-show="sel==true"
              style="margin-top: 4.34vw;width:5.33vw;margin-left:4vw"
              @click="qx"
              src="https://res.bestcake.com/m-images/order/mw_firm_duihao_1.jpg"
            >
            <span>全选</span>
          </li>
          <li>
            <p @click="cle">清空</p>
          </li>
          <li class="blis">
            <p>
              合计:
              <span>{{allprice}}</span>
            </p>
            <p>
              已优惠:
              <i>0.00</i>
            </p>
          </li>
          <li @click="jiesuan">
            <mt-button type="primary">结算</mt-button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Store from "storejs";
import { MessageBox } from "mint-ui";
export default {
  name: "buycar",
  data() {
    return {
      bool: false,
      // 选择全选按钮
      sel: false,
      zjprice: 0,
      // 单个多选框
      chec: false,
      cartlist: [],
      // 结算的
      apric: [],
      img: "https://res.bestcake.com/m-images/order/mw_firm_duihao_2.jpg"
    };
  },
  mounted() {
    this.pageinit();
  },
  methods: {
    pageinit() {
      var cartlist = Store.get("foods") || [];
      // console.log(cartlist);
      if (cartlist.length) {
        cartlist.forEach(ele => {
          ele.check = false;
        });
      }
      this.cartlist = cartlist;
      // console.log(this.cartlist);
      // console.log(cartlist);
    },
    add(info, num) {
      num++;
      this.cartlist.forEach(ele => {
        if (ele.id == info.id) {
          ele.num++;
          ele.zj = ele.num * ele.price;
        }
      });
      this.$store.state.cartlist.count++;
      Store.set("foods", this.cartlist);
      Store.set("number", this.$store.state.cartlist.count);
      // window.location.reload();
    },
    del(info, num) {
      if (num == 1) {
        num = 1;
        return;
      }
      num--;
      this.cartlist.forEach(ele => {
        if (ele.id == info.id) {
          ele.num--;
          ele.zj = ele.num * ele.price;
        }
      });
      this.$store.state.cartlist.count--;
      Store.set("foods", this.cartlist);
      Store.set("number", this.$store.state.cartlist.count);
      // window.location.reload();
    },
    toshow(info, c) {
      // console.log(info);
      var data = {
        key: info.Name,
        c: info.SupplyNo || info.CakeType[0].SupplyNo
      };

      this.$router.push({
        query: data,
        path: "/xiangqing"
      });
    },
    toshow1(info, c) {
      var data = {
        key: info, //  ||info是热销的详情
        c: c
      };
      this.$router.push({
        query: data,
        path: "/xiangqing"
      });
    },
    // 清空购物车
    cle() {
      if (this.sel) {
        MessageBox.confirm("是否要清空购物车?").then(
          action => {
            Store.remove("foods");
            Store.remove("number");
            window.location.reload();
          },
          () => {
            return;
          }
        );
      }
    },
    qx() {
      this.sel = !this.sel;
      setTimeout(() => {
        if (this.sel == true) {
          var num = 0;
          this.cartlist.forEach(ele => {
            ele.check = true;
            this.apric = this.cartlist;
          });
        } else {
          this.cartlist.forEach(ele => {
            ele.check = false;
            this.apric = [];
          });
        }
      }, 80);
    },
    // 结算位置 如果没有登陆跳转到登陆页面
    jiesuan() {
      if (!Store.has("users")) {
        // this.bool = true;
        this.$router.push({
          path: "/user",
          query: {
            bool: true
          }
        });
      }
    },
    //总价
    aprice() {
      var aprice = [];
      setTimeout(() => {
        this.cartlist.forEach(ele => {
          if (ele.check) {
            aprice.push(ele);
          }
        });
        this.apric = aprice;
        if (this.apric.length == this.cartlist.length) {
          this.sel = true;
          this.cartlist.forEach(ele => {
            ele.check = true;
          });
        } else {
          this.sel = false;
        }
      }, 80);
    },
    sc(item, e) {
      this.aprice();
      item.check = !item.check;
    }
  },
  computed: {
    allprice() {
      var pri = 0;
      this.apric.forEach(ele => {
        pri += ele.num * ele.price;
      });
      return pri;
    }
  }
};
</script>
<style lang="scss" scoped>
h3 {
  text-align: center;
}
.buycar {
  width: 100%;
  height: 70%;
  overflow: auto;
  position: relative;
  padding-bottom: 20%;
  .buyfoods {
    width: 100%;
  }
  .rexiao {
    width: 100%;
    height: 70%;
    overflow: auto;
    > div {
      width: 96%;
      padding-left: 4%;
      padding-top: 18%;
      margin-bottom: r(60 * 2);
      p {
        line-height: r(28 * 2);
        margin: 0;
        padding: 0;
        color: #333;
        font-weight: bold;
        font-size: r(24 * 2);
        width: 100%;
        text-align: center;
      }
      .buyp {
        width: 50%;
        height: r(2 * 2);
        background-color: #333;
        margin: 1% 25%;
      }
      .buypt {
        width: 100%;
        font-size: r(15 * 2);
        color: #333;
        font-weight: bold;
      }
    }
    ul {
      width: 98%;
      padding: 0 0 0 2%;
      margin: 0;
      height: r(600 * 2);
      li {
        list-style: none;
        width: 48%;
        height: auto;
        float: left;
        padding-right: 2%;
        position: relative;
        margin-bottom: r(30 * 2);
        > img {
          width: 100%;
          height: auto;
          display: block;
        }
        p {
          line-height: r(19 * 2);
          font-size: r(14 * 2);
          color: #333;
          margin-bottom: r(9 * 2);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-top: r(4.5 * 2);
          font-weight: bold;
          span {
            font-size: r(12 * 2);
            color: #333;
            line-height: r(17 * 2);
            font-weight: bold;
          }
        }
        div {
          position: absolute;
          right: 0;
          bottom: 0;
          width: 16%;
          img {
            display: block;
            width: 100%;
            height: auto;
          }
        }
      }
    }
  }
  // 购物车样式
  .ddpp {
    margin-left: 4vw;
    width: 49vw;
    .pp {
      width: 49vw;
      font-size: 4.26vw;
      color: #000;
      line-height: 5.06vw;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      span {
        font-size: 2.93vw;
        color: #ccc;
        line-height: 3.46vw;
        margin-top: 1.69vw;
      }
      .spt {
        margin-left: 20vw;
      }
      i {
        font-style: normal;
        color: #000;
      }
      button {
        border: 0;
        background: #fff;
      }
    }
  }
  .youhui {
    margin-left: 12.3vw;
    color: #f2495e;
    line-height: 5.33vw;
    height: 5.33vw;
    margin-top: 3.86vw;
    margin-bottom: 3.86vw;
    font-size: 3.73vw;
    span {
      color: #000;
    }
  }
  .jiesuan {
    position: fixed;
    bottom: 10%;
    left: 0;
    width: 100%;
    height: 10%;
    background: #fff;
    ul {
      height: 100%;
      margin: 0;
      padding: 0;
      width: 100%;
      li {
        float: left;
        height: 100%;
        width: 25%;
        list-style: none;
        > span {
          font-size: r(15 * 2);
          line-height: r(66 * 2);
        }
        p {
          text-align: center;
          font-size: r(12 * 2);
          margin: 0;
          padding: 0;
        }
        .mint-button {
          height: 100%;
          width: 100%;
        }
      }
      li:nth-of-type(2) {
        p {
          font-size: r(15 * 2);
          line-height: r(66 * 2);
        }
      }
      .blis {
        p {
          height: 50%;
          line-height: r(33 * 2);
          span {
            font-size: r(18 * 2);
            color: #f2495e;
            font-weight: bold;
          }
          i {
            font-style: normal;
          }
        }
      }
    }
  }
}
</style>


