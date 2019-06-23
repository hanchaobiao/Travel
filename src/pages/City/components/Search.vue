<template>
  <div class="search">
    <input type="text" placeholder="请输入城市名获拼音" class="search-input">
  </div>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .search
    height: .62rem
    padding: .1rem
    background: $bgColor
    .search-input
      box-sizing: border-box
      height: .62rem
      line-height: .62rem
      padding: 0 .1rem
      width: 100%
      border-radius: .1rem
      color: #666
      text-align: center
</style>
