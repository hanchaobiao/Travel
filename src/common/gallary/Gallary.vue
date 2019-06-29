<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
        <swiper-slide v-for="(item, index) in images" :key="index">
          <img class="gallary-img"  :src="item"/>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    images: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        observeParents: true, // 当监听到父元素结构变化时，重新刷新一次，防止滑动计算宽度错误，导致轮播滑动距离问题
        observer: true // 当监听到自身元素结构变化时
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow: inherit
  .container
    // 实现元素垂直居中
    display: flex
    flex-direction: column
    justify-content: center
    position: fixed // 固定定位
    z-index: 99
    top: 0
    left: 0
    right: 0
    bottom: 0
    background: black
    .wrapper // 撑出一个正方形
      // overflow: hidden 不然将页码下移超出时无法显示
      width: 100%
      height: 0
      padding-bottom: 100%
      .gallary-img
        width: 100%
      .swiper-pagination
        color: #fff
        bottom: -1rem
</style>
