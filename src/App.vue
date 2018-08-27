<template>
  <div id="app">
    <div class="container">
      <Header></Header>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm-4">
          <router-view name="orderGuide"></router-view>
        </div>
        <div class="col-sm-4">
          <router-view name="history"></router-view>
        </div>
        <div class="col-sm-4">
          <router-view name="delivery"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Header from './components/Header.vue'
export default {
  name: 'App',
  components:{
    Header
  }
}
</script>

<style>
   
</style>
