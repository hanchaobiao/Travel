<template>
  <div class="search-container">
    <div class="search">
      <input v-model="keyword" type="text" placeholder="请输入城市名获拼音" class="search-input">
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-item border-bottom" v-for="item in list" :key="item.id">{{item.name}}</li>
        <li class="search-item border-bottom" v-show="this.list.length == 0">未找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'Search',
  props: ['cities'],
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  mounted () {
    // //dom结构加载结束(nextTick这个接口是计算dom相关的,要确保原生dom已经渲染了)
    this.$nextTick(() => {
      // console.log(this.$refs.wrapper)
      // this.scroll = new BScroll(this.$refs.wrapper)
      setTimeout(() => { this.scroll = new BScroll(this.$refs.search, {}) }, 200) // 防止滑动失效
    })
  },
  watch: { // 监听keyword
    keyword () {
      // 节流，防止执行过于频繁，消耗性能
      if (this.timer) {
        clearTimeout(this.timer) // 销毁上次的任务
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            console.log(value)
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  }
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
  .search-content
    overflow: hidden
    position: absolute
    top: 2.25rem
    left: 0
    bottom: 0
    right: 0
    background: #eee
    z-index: 1
    .search-item
      height: .76rem
      padding-left: .2rem
      line-height: .76rem
      background: #fff
</style>
