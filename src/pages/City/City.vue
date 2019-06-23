<template>
  <div>
  <city-header></city-header>
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
  </div>
</template>

<script>
import CityHeader from './components/Header'
export default {
  name: 'City',
  components: {
    CityHeader
  }
}
</script>

<style scoped>

</style>
