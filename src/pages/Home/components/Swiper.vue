<template>
  <div class="wrapper">
  <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
    <swiper-slide v-for="(item, index) in banners" :key="index">
      <img class="swiper-img"  :src="item"/>
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true, // 形成环路（即：可以从最后一张图跳转到第一张图
        autoplay: 3000 // 每隔3秒自动播放
      },
      banners: [
        'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20195/aef5f8864f5a1167599609307571b2c4.jpg_750x200_db7bedbe.jpg',
        'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/7338e652340b8b9135111e6157fd5650.jpg_750x200_f4973a1e.jpg',
        'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20195/472a476c776c6fd962fcfd6fd75521d5.jpg_750x200_298bac66.jpg',
        'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20195/6ab65be3878a5ea365514cf3a8125fd1.jpg_750x200_7b2fe404.jpg',
        'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/d7bbc21db442366a882e04ddc984669a.jpg_750x200_85e640d9.jpg'
      ]
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log('this is current swiper instance object', this.swiper)
    this.swiper.slideTo(3, 1000, false)
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active  // 穿透，让wrapper 下的所有swiper-pagination-bullet-active 生效该样式
    background: #fff
  .wrapper
    // 设置宽高比为100:31.25 这样写兼容性比较好，轮播未加载出来时，也先占住页面位置，防止抖动
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 26.6%
    background: #eee  // 图片未加载出来时显示背景色
    .swiper-img
      width: 100%
</style>
