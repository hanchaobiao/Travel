<template>
  <div class="list">
    <div class="item" v-for="(item, key) in cities" :key="key">{{key}}</div>
  </div>
</template>

<script>
export default {
  name: 'Alphabet',
  props: ['cities']
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .list
    display: flex
    flex-direction: column
    justify-content: center  //  垂直居中
    position: absolute
    right: 0
    top: 2.25rem
    bottom: 0
    width: .4rem
    .item
      line-height: .4rem
      text-align: center
      color: $bgColor
</style>
