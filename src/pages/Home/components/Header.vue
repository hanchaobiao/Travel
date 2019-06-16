<template>
  <div class="header">
    <div class="header-left"><div class="iconfont back-icon">&#xe624;</div></div>
    <div class="header-input"><span class="iconfont">&#xe632;</span>&nbsp;输入城市/景点/游玩主题</div>
    <div class="header-right">城市<span class="iconfont arrow-icon">&#xe64a;</span></div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>
<!--使用stylus语法 scoped: css只对当前组件有效，不影响其他组件-->
<!-- 1rem = html = font-size: 50px -->
<style lang="stylus" scoped>
  // 引入全局变量
  // @import "../../../assets/styles/varibles.styl"
  /*@import "~@/assets/styles/varibles.styl"*/
  // 简写路径，在webpack 里配置了 styles 路径别名
  @import '~styles/varibles.styl'
  .header
    display: flex
    line-height: $headerHeight
    background: $bgColor
    color: #fff
    .header-left
      width: .64rem
      float: left
      .back-icon
        font-size: .4rem
        text-align: center
    .header-input
      flex: 1
      background: #fff
      border-radius: .1rem
      margin-top: .12rem
      height: .64rem
      line-height: .64rem
      margin-left .2rem
      color: #ccc
      padding-left: .2rem
    .header-right
      width: 1.24rem
      float: right
      text-align:center
      .arrow-icon
        font-size: .24rem
        padding-left: .05rem
</style>
