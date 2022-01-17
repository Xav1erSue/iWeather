<script setup>
import store from "../store";
import {computed} from "vue";
import {getWeatherInfo} from "../api";

const city = computed(() => store.state.curCity)
const loadingStatus = computed(() => store.state.loadingStatus)
const updateTime = computed(() => store.state.updateTime)
const update = () => {
  getWeatherInfo()
}
const search = () => {
  store.commit('changeSearchStatus', true)
}
</script>

<template>
  <div class="flex justify-between items-center py-10px text-lg text-[#A07954]">
    <a class="mx-20px no-underline" href="https://xav1er.com">更多</a>
    <div class="mx-20px" @click="update">
      <div class="flex justify-center"><img class="w-16px" src="/logo/location.svg">{{ city }}</div>
      <div v-if="!loadingStatus" class="text-xs text-center">上次更新 {{ updateTime }}</div>
      <div v-else class="text-xs text-center">正在更新...</div>
    </div>
    <div class="mx-20px" @click="search"><img class="w-30px" src="/logo/plus.svg"></div>
  </div>
</template>

<style lang="scss" scoped>

</style>
