export default {
  changeCity (ctx, city) {
    ctx.commit('changeCity', city) // 调用mutations
  }
}
