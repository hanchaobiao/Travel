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
    <city-list :hotCities="hotCities" :cities="cities" :letter="letter"></city-list>
    <city-alphabet :cities="cities" @change="hanleLetteChange"></city-alphabet>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      isActive: 1,
      hotCities: [],
      cities: [],
      letter: ''
    }
  },
  mounted () {
    this.getCityInfo()
  },
  methods: {
    cityType (index) {
      this.isActive = index
    },
    getCityInfo () {
      const that = this
      axios.get('/api/city.json').then(function (res) {
        res = res.data
        if (res.ret && res.data) {
          that.hotCities = res.data.hotCities
          that.cities = res.data.cities
        }
      })
    },
    hanleLetteChange (letter) {
      this.letter = letter
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
