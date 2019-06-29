<template>
  <div class="header">
    <div class="title">
      <div class="iconfont header-back" @click="back">&#xe624;</div>
      城市选择
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    back () {
      this.$router.push('/')
    }
  }
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
</style>
