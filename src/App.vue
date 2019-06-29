<template>
  <div id="app">
    <keep-alive>
      <!--缓存页面-->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
