<template>
  <div>
    <div class="item" v-for="(item, index) of list" :key="index">
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <div class="item-children" v-if="item.children">
        <!--  递归组件 -->
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList', // 递归组件可以使用
  props: {
    list: {
      type: Array
    }
  }
}
</script>

<style lang="stylus" scoped>
  .item-title
    line-height: .8rem
    padding: 0 .2rem
    font-size: .32rem
    .item-title-icon
      position: relative
      top: .06rem
      left: .06rem
      display: inline-block
      width: .36rem
      height: .36rem
      background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
      margin-right: .1rem
      background-size: .4rem 3rem
  .item-children
    padding: 0 .2rem
</style>
