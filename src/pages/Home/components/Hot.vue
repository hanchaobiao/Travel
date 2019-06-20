<template>
  <div class="hot-container">
    <div class="header">
      <span class="header-left"><img class="fire-icon" src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png">本周热门榜单</span>
      <span class="iconfont header-right">全部榜单&#xe61c;</span>
    </div>
    <div ref="wrapper">
      <ul class="hot">
        <li class="hot-item">
          <img class="top" src="http://img1.qunarzz.com/piao/fusion/1710/ab/159673b63e6ca702.png">
          <div class="cover">
            <img class="cover-img" src="http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_250x250_50c99cf3.jpg">
          </div>
          <div class="title">故宫</div>
          <div class="price"><span class="mpg-price">¥<em>60</em></span>起</div>
        </li>

        <li class="hot-item">
          <img class="top" src="http://img1.qunarzz.com/piao/fusion/1710/ab/159673b63e6ca702.png">
          <div class="cover">
            <img class="cover-img" src="http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_250x250_50c99cf3.jpg">
          </div>
          <div class="title">故宫</div>
          <div class="price"><span class="mpg-price">¥<em>60</em></span>起</div>
        </li>

        <li class="hot-item">
          <img class="top" src="http://img1.qunarzz.com/piao/fusion/1710/ab/159673b63e6ca702.png">
          <div class="cover">
            <img class="cover-img" src="http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_250x250_50c99cf3.jpg">
          </div>
          <div class="title">故宫</div>
          <div class="price"><span class="mpg-price">¥<em>60</em></span>起</div>
        </li>

        <li class="hot-item">
          <img class="top" src="http://img1.qunarzz.com/piao/fusion/1710/ab/159673b63e6ca702.png">
          <div class="cover">
            <img class="cover-img" src="http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_250x250_50c99cf3.jpg">
          </div>
          <div class="title">故宫</div>
          <div class="price"><span class="mpg-price">¥<em>60</em></span>起</div>
        </li>

        <li class="hot-item">
          <img class="top" src="http://img1.qunarzz.com/piao/fusion/1710/ab/159673b63e6ca702.png">
          <div class="cover">
            <img class="cover-img" src="http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_250x250_50c99cf3.jpg">
          </div>
          <div class="title">故宫</div>
          <div class="price"><span class="mpg-price">¥<em>60</em></span>起</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Hot',
  mounted () {
    // this.$nextTick(() => {
    //   this.scroll = new BScroll(this.$refs.wrapper, {})
    // })
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .hot-container
    margin-top: .2rem
    background: #fff
    width: auto
    .header
      line-height: 1rem
      .header-left
        float: left
        padding-left: .3rem
        font-size: .32rem
        .fire-icon
          width: .32rem
          height: .32rem
          padding-right: .06rem
      .header-right
        float: right
        padding-right: .3rem
        font-size: .24rem
        color: #616161
    .header:after
      content: ''
      display: block
      clear: both
    .hot
      overflow-x: scroll
      white-space: nowrap
      padding: 0 0.24rem
      .hot-item
        position: relative
        display: inline-block
        padding: .06rem 0.15rem .06rem 0
        width: 2rem
        .top
          position: absolute
          width: .84rem
          height: .4rem
          top: -.06rem
          left: 0rem
        .cover
          overflow: hidden
          width: 100%
          height: 0
          padding-bottom: 100%
          .cover-img
            width: 100%
        .title
          text-align: center
          padding: .1rem 0
          ellipse()
        .price
          font-weight: 700
          text-align: center
          color: #212121
          .mpg-price
            color: #ff8300
      .hot-item:last-child
        position: relative
        display: inline-block
        padding: .06rem 0.24rem .06rem 0
        width: 2rem
    .hot:after
      content: ''
      display: block
      clear: both
</style>
