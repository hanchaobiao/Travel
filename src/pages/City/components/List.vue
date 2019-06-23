<template>
  <div class="list-container" ref="wrapper">
    <div class="content">
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hotCities" :key="item.id">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for="innerItem of item" :key="innerItem.id">{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'List',
  props: ['hotCities', 'cities'],
  data () {
    return {}
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .list-container
    position: absolute
    top: 2.25rem
    left: 0
    right: 0
    bottom: 0
    overflow: hidden
    .title
      padding: .24rem
      background: #f5f5f5
      color: #666
      padding-left: .3rem
    .button-list
      padding: .1rem .6rem .1rem .1rem
      .button-wrapper
        float: left
        width: 33.33%
        .button
          margin: .1rem
          border: .02rem solid #25a4bb
          text-align: center
          padding: .15rem 0
          border-radius: .06rem
    .item-list
      .item
        height: .76rem
        padding-left: .2rem
        line-height: .76rem
    .button-list:after
      content: ''
      display: block
      clear: both
</style>
