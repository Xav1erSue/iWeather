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
</script>

<template>
  <div class="flex justify-between items-center py-10px text-lg text-[#A07954]">
    <div class="mx-20px ">更多</div>
    <div class="mx-20px" @click="update">
      <div class="flex"><img class="w-16px" src="/logo/location.svg">{{ city }}</div>
      <div v-if="!loadingStatus" class="text-xs text-center">上次更新 {{ updateTime }}</div>
      <div v-else class="text-xs text-center">正在更新...</div>
    </div>
    <div class="mx-20px"><img class="w-30px" src="/logo/plus.svg"></div>
  </div>
</template>

<style lang="scss" scoped>

</style>
