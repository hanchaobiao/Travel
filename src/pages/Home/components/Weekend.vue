<template>
  <div class="weekend-container">
    <div class="list-title">周末去哪儿</div>
      <div v-for="item of weekendList" :key="item.id">
        <div class="item-img-wrapper" >
          <img class="item-img" :src="item.imgUrl">
        </div>
        <div class="content">
          <p class="title">{{item.title}}</p>
          <p class="desc">{{item.desc}}</p>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Weekend',
  props: ['weekendList']
}
</script>

<style lang="stylus" scoped>
  .weekend-container
    background: #fff
    .list-title
      height: .8rem
      background: #f5f5f5
      line-height: .8rem
      padding-left: .28rem
      font-size: .28rem
  .item-img-wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 2.74rem
    .item-img
      width: 100%
  .content
    padding-left: .3rem
    padding-bottom: .3rem
    .title
      line-height: .7rem
      font-size: .28rem
      color: #212121
    .desc
      color: #616161
  </style>
