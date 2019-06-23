<template>
  <div class="city-container">
    <city-header></city-header>
    <div class="tab-wrapper">
      <ul class="tabs">
        <li :class="{ active: isActive==1 }" class="tab-item" @click="cityType(1)">境内</li>
        <li :class="{ active: isActive==2 }" class="tab-item" @click="cityType(2)">国际城市</li>
      </ul>
    </div>
    <city-search></city-search>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'

export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch
  },
  data () {
    return {
      isActive: 1
    }
  },
  methods: {
    cityType (index) {
      this.isActive = index
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .tab-wrapper
    width: 100%
    background $bgColor
    height: .6rem
    font-size: .28rem
    .tabs
      padding: 0 1rem
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
