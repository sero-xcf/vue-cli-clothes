<template>
  <div id="app">
    <van-tabbar v-model="active">
      <van-tabbar-item icon="wap-home" to="/home" >首页</van-tabbar-item>
      <van-tabbar-item icon="label-o" to="/category" >分类</van-tabbar-item>
      <van-tabbar-item icon="search" to="/newsInfo" >新闻</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart" to="/shopCar" >购物车</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/user" >我的</van-tabbar-item>
    </van-tabbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
   data() {
    return {
      active: 0
    }
  }
};
</script>

<style>
 
</style>
