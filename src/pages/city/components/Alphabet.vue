<template>
  <ul class="list">
    <li
      v-for="item of letters"
      :key="item"
      :ref="item"
      :class="{active: isActive == item}"
      class="item"
      @touchstart.prevent="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @click="handleLetterClick(item)"
    >
      {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Alphabet',
  props: ['cities'],
  data () {
    return {
      touchStatus: false,
      isActive: 'A',
      startY: 0,
      timer: null
    }
  },
  computed: {
    letters () {
      let letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  updated () {
    // 数据重新渲染完成之后
    this.startY = this.$refs['A'][0].offsetTop // 字母A距离顶部的距离(list 组件)
  },
  methods: {
    handleLetterClick (letter) {
      this.$emit('change', letter)
      this.isActive = letter
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        // 性能优化，节流，隔20毫秒操作一次，降低执行频率
        this.timer = setTimeout(() => {
          const clickY = e.touches[0].clientY - 114 // 当前手指移动位置 - header高度
          const index = Math.floor((clickY - this.startY) / 20) // 手指滑动位置对应下标
          if (index >= 0 && index <= this.letters.length) {
            this.$emit('change', this.letters[index])
            this.isActive = this.letters[index]
          }
        }, 20)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
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
    .active
      color: red
</style>
