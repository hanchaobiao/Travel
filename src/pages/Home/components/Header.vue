<template>
  <div class="header">
    <div class="header-left" @click="back"><div class="iconfont back-icon">&#xe624;</div></div>
    <div class="header-input"><span class="iconfont">&#xe632;</span>&nbsp;输入城市/景点/游玩主题</div>
    <router-link to="/city">
      <div class="header-right">{{this.currentCity}}<span class="iconfont arrow-icon">&#xe64a;</span></div>
    </router-link>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    // 将vuex 里state的city属性映射到计算属性中currentCity
    ...mapState({
      currentCity: 'city'
    }),
    ...mapGetters(['doubleCity'])
  },
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
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
      min-width: 1.04rem
      padding: 0 .1rem
      float: right
      text-align:center
      color: #fff
      .arrow-icon
        font-size: .24rem
        padding-left: .05rem
</style>
