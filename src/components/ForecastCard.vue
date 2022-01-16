<script setup>
import {computed} from "vue";
import store from "../store";

const loadingStatus = computed(() => store.state.loadingStatus)
const weatherLogos = computed(() => store.state.weatherLogos);
const forecastInfo = computed(() => store.state.weather.daily.temperature)
const nextDays = computed(() => store.state.nextDays);
const maximums = computed(() => store.state.maximums);
const minimums = computed(() => store.state.minimums);
</script>

<template>
  <div v-if="!loadingStatus" class="overflow-x-scroll my-20px text-[#463931]">
    <div class="flex">
      <div v-for="(day,index) in forecastInfo" :key="index"
           class="flex flex-col p-5px bg-[#FDFDFD] flex-grow-0 flex-shrink-0 basis-70px justify-center items-center py-15px">
        <div v-if="index===0" class="font-light text=[#D0D7DD]">今天</div>
        <div v-else class="font-light">{{ nextDays[index][1] }}</div>
        <div class="font-light text-xs my-3px opacity-70">{{ nextDays[index][0] }}</div>
        <img :src="weatherLogos[index].url" class="w-1/2 my-3px">
        <div class="my-3px">{{ Math.round(day.max) }}°</div>
        <div class="my-3px opacity-70">{{ Math.round(day.min) }}°</div>
      </div>
    </div>
    <svg id="chart" viewBox="0 0 1500 100">
      <g transform="translate(0, 100) scale(1, -1)">
        <path id="max" :d="maximums" fill="none" stroke-linecap="round" stroke-linejoin="round"
              stroke-width="3"/>
        <path id="min" :d="minimums" fill="none" stroke-linecap="round" stroke-linejoin="round"
              stroke-width="3"/>
      </g>
    </svg>
  </div>
</template>

<style lang="scss" scoped>
#chart {
  background-color: #FDFDFD;
  width: 1050px;
}

#max, #min {
  stroke: #A7D6F3
}
</style>
