<template>
  <div class="cclass">
    <div class="route">
      <span class="ospan" :class="{active:active==1}" @click="zy">自营</span>
      <span class="ospan" :class="{active:active==2}" @click="notab('RP')">贝式严选</span>
    </div>
    <div class="ziying" v-show="active==1">
      <p class="zyop">
        <span
          v-for="(item,index) in tab"
          :key="index"
          :class="{active:tact==index}"
          @click="one(item.mark,index)"
        >{{item.name}}</span>
      </p>
      <div class="uls">
        <ul>
          <li v-for="(item,index) in activelist" :key="index">
            <div>
              <img :src="item.ImgUrl" @click="toshow(item)" alt>
              <p>{{item.Name}}</p>
              <p>{{item.Means}}</p>
              <p>
                <span>￥{{item.CurrentPrice}}</span>
                <i>/{{item.Size}}</i>
              </p>
            </div>
            <img
              @click="add(item)"
              class="bc"
              src="https://res.bestcake.com\m-images-2\list-cart.png?v=1"
              alt
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="yanxuan" v-show="active==2">
      <h3>乳品</h3>
      <ul>
        <li v-for="(item,index) in activelist" :key="index">
          <div>
            <img :src="item.ImgUrl" @click="toshow(item)" alt>
            <p>{{item.Name}}</p>
            <p>{{item.Means}}</p>
            <p>
              <span>￥{{item.CurrentPrice}}</span>
              <i>/{{item.Size}}</i>
            </p>
          </div>
          <img
            @click="add(item)"
            class="bc"
            src="https://res.bestcake.com\m-images-2\list-cart.png?v=1"
            alt
          >
        </li>
      </ul>
    </div>
    <hphuaxian></hphuaxian>
  </div>
</template>
<script>
import hphuaxian from "@/components/child/hphuaxian.vue";
import { Indicator } from "mint-ui";
// 提示框
import { MessageBox } from "mint-ui";
export default {
  name: "cclass",
  data() {
    return {
      active: 1,
      tact: 0,
      tab: [
        { name: "经典", mark: "KSK" },
        { name: "女神", mark: "NS" },
        { name: "伴手礼", mark: "JZ" }
      ],
      goodlist: [],
      activelist: [],
      // 记住位置
      num: 0
    };
  },
  components: {
    hphuaxian
  },
  methods: {
    zy() {
      this.active = 1;
      this.one(this.tab[this.num].mark, this.num);
    },
    // 自营/贝时严选的切换
    notab(mark) {
      this.active = 2;
      var activelist = [];
      this.goodlist.forEach(ele => {
        if (ele.SupplyNo.indexOf(mark) != -1) {
          activelist.push(ele);
        }
      });
      this.activelist = activelist;
      // console.log(this.activelist);
    },
    // 伴手礼,经典 女神的切换
    one(mark, index) {
      this.tact = index;
      var activelist = [];
      this.goodlist.forEach(ele => {
        if (ele.SupplyNo.indexOf(mark) != -1) {
          activelist.push(ele);
        }
      });
      this.activelist = activelist;
      this.num = index;
      // console.log(this.activelist);
    },
    // 传参=>跳转到详情页
    toshow(item) {
      // console.log(item);
      var data = {
        key: item.Name,
        c: item.SupplyNo
      };
      this.$router.push({
        path: "/xiangqing",
        query: data
      });
    },
    // 购买到购物车
    add(info) {
      this.$store.commit("addfoods", {
        name: info.Name,
        id: info.ID,
        price: info.CurrentPrice,
        size: info.Size,
        img: info.ImgUrl,
        num: 1,
        ins: info
      });
      MessageBox.alert(info.Name + "已加入购物车");
    },
    // 接口获得的数据
    GetJdListNew(callback) {
      Indicator.open("不要着急哟~~");
      this.$apis.GetJdListNew().then(res => {
        callback(res);
        Indicator.close();
      });
    },
    pageinit() {
      this.GetJdListNew(res => {
        // 拼接展示的图片
        var goodlist = res.data.Tag.cakelist;
        var url = "https://res.bestcake.com/m-images/ww/";
        goodlist.forEach(element => {
          if (element.SupplyNo.indexOf("KSK") != -1) {
            element.ImgUrl = `${url}jd/${element.Name}.png`;
          } else if (element.SupplyNo.indexOf("NS") != -1) {
            element.ImgUrl = `${url}ns/${element.Name}.jpg`;
          } else if (element.SupplyNo.indexOf("RP") != -1) {
            element.ImgUrl = `${url}rp/${element.Name}.jpg`;
          } else {
            element.ImgUrl = `${url}jz/${element.Name}.png`;
          }
        });
        this.goodlist = goodlist;
        // console.log(this.goodlist);
        this.one("KSK", 0);
      });
    }
  },
  // https://res.bestcake.com/m-images/ww/jd/极地牛乳.png?v=17  经典SupplyNo
  // https://res.bestcake.com/m-images/ww/ns/一见倾心.jpg?v=17  女神
  // https://res.bestcake.com/m-images/ww/jz/草莓先生.png?v=17   伴手礼
  // https://res.bestcake.com/m-images/ww/rp/可莱思迪客英国进口冰淇淋(125mlx4).jpg?v=17 乳品
  mounted() {
    this.pageinit();
  }
};
</script>
<style lang="scss" scoped>
.cclass {
  width: 100%;
  height: auto;
  .route {
    width: 100%;
    height: r(44 * 2);
    margin: 0;
    padding: 0;
  }
  .ospan {
    width: 50%;
    font-size: r(16 * 2);
    display: block;
    float: left;
    text-align: center;
    color: #333;
    border-bottom: r(1 * 2) solid #333;
    height: r(48 * 2);
    line-height: r(48 * 2);
    font-weight: bold;
  }
  .active {
    color: darkcyan;
    border-bottom: r(2 * 2) solid darkcyan;
  }
  .ziying {
    width: 100%;
    height: 70%;
    overflow: auto;
    .zyop {
      width: 100%;
      height: r(48 * 2);

      > span {
        text-align: center;
        display: block;
        font-size: r(14 * 2);
        font-weight: bold;
        float: left;
        width: 12%;
        margin: 5% 9%;
      }
    }
  }
  ul {
    width: 100%;
    margin: 0;
    padding: 0;
    height: r(440 * 2);
    overflow: auto;
    margin-bottom: r(40);

    li {
      float: left;
      width: 47%;
      // height: r(230 * 2);
      height: auto;
      list-style: none;
      margin: r(10 * 2) r(5) r(10 * 2) 0;
      overflow: hidden;
      position: relative;
      img {
        display: block;
        width: r(165 * 2);
        height: r(165 * 2);
      }
      .bc {
        position: absolute;
        bottom: 0;
        right: r(20);
        display: block;
        width: r(20 * 2);
        height: r(40);
      }
      p {
        font-size: r(14 * 2);
        color: #333;
        padding-left: r(7.5 * 2);
        width: 98%;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        margin: 0;
        span {
          font-size: r(16 * 2);
          color: red;
        }
        i {
          font-style: normal;
          font-size: r(16 * 2);
          color: rgb(188, 188, 188);
        }
      }
      p:nth-of-type(2) {
        color: #999;
        font-size: r(12 * 2);
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 98%;
        overflow: hidden;
      }
    }
    li:nth-of-type(2) {
      margin-left: 4%;
    }
  }
  .yanxuan {
    width: 100%;
    height: r(552 * 2);
    overflow: auto;
    h3 {
      width: 30%;
      margin: 0 30%;
      border-bottom: r(2 * 2) solid darkcyan;
      text-align: center;
      height: r(46 * 2);
      line-height: r(46 * 2);
    }
  }
}
</style>
