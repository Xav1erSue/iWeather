<script setup>
import {computed} from 'vue';
import store from '../store';
import {transWeekDay} from "../utils/formatTool";
import dayjs from "dayjs";

const today = transWeekDay(dayjs().day());
const weather = computed(() => store.state.weather);
const baseWeatherLogo = computed(() => store.state.baseWeatherLogo)
const AQIStyles = computed(() => store.state.AQIStyles)
const loadingStatus = computed(() => store.state.loadingStatus)
</script>

<template>
  <div v-if="!loadingStatus" class="flex justify-center items-center flex-col text-[#351404]">
    <img :src="baseWeatherLogo" alt="当前天气" class="w-200px filter sepia">
    <div class="mt-10px mb-5px opacity-50">今天 · {{ today }}</div>
    <div class="text-30px my-5px font-light">{{
        Math.round(weather.daily.temperature[0].min)
      }} - {{ Math.round(weather.daily.temperature[0].max) }}℃
    </div>
    <div id="skycon" class="text-40px my-5px font-bold">{{ weather.realtime.skycon }}</div>
    <div class="my-5px opacity-50">{{ weather.forecast_keypoint }}</div>
    <div :style="AQIStyles" class="px-7px py-1px rounded my-5px">空气质量 {{
        weather.realtime.air_quality.aqi.chn
      }} {{ weather.realtime.air_quality.description.chn }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
#skycon {
  font-family: 'DFKai-SB';
}
</style>
