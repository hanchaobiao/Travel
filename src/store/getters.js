export default {
  // 可以对state属性做一些处理
  doubleCity (state) {
    return state.city + ' ' + state.city
  }
}
