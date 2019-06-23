<template>
  <div class="recommend-container">
    <div class="title">猜你喜欢</div>
    <ul>
      <li class="item border-bottom" v-for="(item, index) of recommendList" :key="item.id" :index="index">
        <img class="item-img" :src="item.imgUrl"/>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
    <div class="more">查看所有产品</div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommendList: Object
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .recommend-container
    background: #fff
    .title
      /*margin-top: .2rem*/
      line-height: .8rem
      background: #eee
      text-indent: .2rem  // 文字缩进
      @ellipsis()
    .item
      overflow: hidden
      display: flex
      height: 1.9rem
      .item-img
        width: 1.7rem
        height: 1.7rem
        padding: .1rem
      .item-info
        flex: 1
        padding: .1rem
        .item-title
          line-height: .54rem
          font-size: .32rem
          @ellipsis()
        .item-desc
          line-height: .4rem
          color: #ccc
          @ellipsis()
        .item-button
          line-height: .44rem
          margin-top: .2rem
          background: #ff9300
          padding: 0 .2rem
          border-radius: .06rem
    .more
      height: 1rem
      line-height: 1rem
      text-align: center
      color: #00afc7
      font-size: .28rem
</style>
