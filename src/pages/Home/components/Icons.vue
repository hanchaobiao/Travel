<template>
  <div class="icons">
    <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
      <swiper-slide v-for="(page, index) in pages" :key="index">
       <div class="icon" v-for="item of page" :key="item.id">
         <div class="icon-img">
          <img class="icon-image-content" :src="item.imgUrl">
         </div>
         <p class="icon-desc">{{item.desc}}</p>
       </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: false, // 是否形成环路（即：可以从最后一张图跳转到第一张图
        autoplay: false
      },
      iconList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '景点门票'
        },
        {
          id: '0002',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/f0f00d6dfe038c044dbc9a437f58b0eb.png',
          desc: '一日游'
        },
        {
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
          desc: '北京必游'
        },
        {
          id: '0004',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
          desc: '水上乐园'
        },
        {
          id: '0005',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/0334cf5430b9b5505fd79e2b8d7e8670.png',
          desc: '爬长城'
        },
        {
          id: '0006',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
          desc: '故宫'
        },
        {
          id: '0007',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
          desc: '动植物园'
        },
        {
          id: '0008',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1805/3a/754b47f658e9c602.png',
          desc: '怀北漂流'
        },
        {
          id: '0009',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1805/3a/754b47f658e9c602.png',
          desc: '怀北漂流'
        }
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons >>> swiper-container
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 50%
  .icon
    overflow: hidden
    height: 0
    position: relative
    float: left
    width: 25%
    padding-bottom: 25%
    .icon-img
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: .44rem
      box-sizing: border-box
      padding: .1rem
      // 预留出文字的高度
      .icon-image-content
        display: block
        height: 100%
        margin: 0 auto
    .icon-desc
      position: absolute
      left: 0
      right: 0
      bottom: 0
      height: .44rem
      line-height: .44rem
      text-align: center
      color: $darkTextColor
      ellipsis()
</style>
