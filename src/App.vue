<script setup>
import store from "./store";
import {computed, onMounted, watchEffect} from "vue";
import {getLocation} from "./utils/getLocation";
import {getWeatherInfo} from "./api";
import MainCard from "./components/MainCard.vue";
import TopBar from "./components/TopBar.vue"
import ForecastCard from "./components/ForecastCard.vue";
import Details from "./components/Details.vue";
import ChooseCity from "./components/ChooseCity.vue";

onMounted(() => {
  getLocation();
});
watchEffect(() => {
  getWeatherInfo(store.state.curLocation);
});
const onSearch = computed(() => store.state.onSearch)
</script>

<template>
  <ChooseCity v-if="onSearch"/>
  <TopBar class="topbar"/>
  <div class="wrapper">
    <MainCard/>
    <ForecastCard/>
    <Details/>
  </div>
</template>

<style lang="scss">
body {
  background-color: #F4F2F3;
}

#app {
  font-family: "Helvetica Neue", Helvetica, Arial, "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.topbar {
  background-color: #F4F2F3;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1;
}

.wrapper {
  margin-top: 64px;
}
</style>
