<script setup>
import store from "./store";
import {onMounted, watchEffect} from "vue";
import {getLocation} from "./utils/getLocation";
import {getWeatherInfo} from "./api";
import MainCard from "./components/MainCard.vue";
import TopBar from "./components/TopBar.vue"
import ForecastCard from "./components/ForecastCard.vue";

onMounted(() => {
  getLocation();
});
watchEffect(() => {
  getWeatherInfo(store.state.curLocation);
});
</script>

<template>
  <TopBar/>
  <MainCard/>
  <ForecastCard/>
</template>

<style lang="scss">
body {
  background-color: #F4F2F3;
}

#app {
  font-family: "Helvetica Neue", Helvetica, Arial, "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
}
</style>
