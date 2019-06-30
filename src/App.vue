<template>
  <div id="app">
    <!-- Detail 组件不会被缓存   -->
    <keep-alive exclude="Detail">
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
