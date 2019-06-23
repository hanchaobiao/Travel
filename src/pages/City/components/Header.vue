<template>
  <div class="header">
    <div class="title">
      <div class="iconfont header-back">&#xe624;</div>
      城市选择
    </div>
    <div class="tab-wrapper">
      <ul class="tabs">
        <router-link to="/">
          <li class="tab-item active">境内</li>
        </router-link>
        <router-link to="/">
          <li class="tab-item">国际城市</li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .header
    background $bgColor
    .title
      position: relative
      overflow: hidden
      height: $headerHeight
      line-height: .86rem
      text-align: center
      color: #fff
      .header-back
        position: absolute
        top: 0
        left: 0
        width: .64rem
        text-align: center
        font-size: .4rem
    .tab-wrapper
      height: .8rem
      font-size: .28rem
      .tabs
        padding: .2rem 1rem
        height: .4rem
        line-height: .4rem
        list-style: none
        .tab-item
          box-sizing: border-box
          float: left
          width: 50%
          height: 100%
          border: .02rem solid #fff
          text-align: center
          color: #fff
        .active
          background: #fff
          color: $bgColor
</style>
