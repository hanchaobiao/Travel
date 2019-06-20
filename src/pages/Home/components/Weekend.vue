<template>
  <div class="weekend-container">
    <div class="list-title">周末去哪儿</div>
    <div class="item-img-wrapper">
      <img class="item-img" src="http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg">
    </div>
    <div class="content">
      <p class="title">京城周末撒欢</p>
      <p class="desc">在帝都过周末，不仅仅是城中游！</p>
    </div>

    <div class="item-img-wrapper">
      <img class="item-img" src="http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg">
    </div>
    <div class="content">
      <p class="title">京城周末撒欢</p>
      <p class="desc">在帝都过周末，不仅仅是城中游！</p>
    </div>

    <div class="item-img-wrapper">
      <img class="item-img" src="http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg">
    </div>
    <div class="content">
      <p class="title">京城周末撒欢</p>
      <p class="desc">在帝都过周末，不仅仅是城中游！</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Weekend'
}
</script>

<style lang="stylus" scoped>
  .weekend-container
    padding-bottom: .2rem
    .list-title
      height: .8rem
      background: #f5f5f5
      line-height: .8rem
      padding-left: .28rem
      font-size: .28rem
  .item-img-wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 2.74rem
    .item-img
      width: 100%
  .content
    padding-left: .3rem
    padding-bottom: .3rem
    .title
      line-height: .7rem
      font-size: .28rem
      color: #212121
    .desc
      color: #616161
  </style>
