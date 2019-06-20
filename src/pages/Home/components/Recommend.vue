<template>
  <div>
    <div class="title">猜你喜欢</div>
    <ul >
      <li class="item border-bottom" v-for="(item, index) of recommendList" :key="item.id" :index="index">
        <img class="item-img" :src="item.imgUrl"/>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      'recommendList': [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg',
          title: '故宫',
          desc: '世界五大宫之首，穿越与您近在咫尺'
        },
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg',
          title: '故宫',
          desc: '世界五大宫之首，穿越与您近在咫尺'
        },
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg',
          title: '故宫',
          desc: '世界五大宫之首，穿越与您近在咫尺'
        },
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg',
          title: '故宫',
          desc: '世界五大宫之首，穿越与您近在咫尺'
        },
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg',
          title: '故宫',
          desc: '世界五大宫之首，穿越与您近在咫尺'
        },
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg',
          title: '故宫',
          desc: '世界五大宫之首，穿越与您近在咫尺'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
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
</style>
