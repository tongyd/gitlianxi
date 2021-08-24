<template>
  <div class="hphuaxian">
    <ul>
      <li>
        <span>划线价格</span>
        <i>商品的专柜价、吊牌价、正品零售价、厂商指导价或该商品的曾经展示过的销售价等，并非原价，仅供参考。 </i>
      </li>
      <li>
        <span>未划线价格</span>
        <i>商品的实时标价，不因表述的差异改变性质。具体成交价格根据商品参加活动，或会员使用优惠券、积分等发生变化，最终以订单结算页价格为准。</i>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "hphuaxian"
};
</script>
<style lang="scss" scoped>
  .hphuaxian{
    width: 100%;
    height: r(200*2);
    ul {
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
      li{
      width: 98%;
      height: 49%;
      padding: 0 1% 1% 1%;
      list-style: none;
      span{
        display: block;
        width: 30%;
        height: 100%;
        color:#181818;
        font-size: r(14*2);
        float: left;
      }
      i{
        display: block;
        width: 60%;
        height: 100%;
        font-style: normal;
        font-size: r(14*2);
        color:#a2a2a2;
        float: left;
      }
    }
    li:nth-of-type(2){
      margin-bottom: 20%;
    }
    }
  }
</style>
