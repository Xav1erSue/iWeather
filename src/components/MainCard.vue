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
    <img :src="baseWeatherLogo" alt="当前天气" class="w-200px">
    <div class="mt-10px mb-5px opacity-50">今天 · {{ today }}</div>
    <div class="text-20px my-5px font-light">当前气温 {{
        Math.round(weather.realtime.temperature)
      }}℃
    </div>
    <div id="skycon" class="text-50px my-5px">{{ weather.realtime.skycon }}</div>
    <div class="my-5px opacity-50">{{ weather.forecast_keypoint }}</div>
    <div :style="AQIStyles" class="px-7px py-1px rounded my-5px">空气质量 {{
        weather.realtime.air_quality.aqi.chn
      }} {{ weather.realtime.air_quality.description.chn }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
@font-face {
  font-family: 'FangZhengSuXinShiLiuKaiJianTi';
  src: url('/FangZhengSuXinShiLiuKaiJianTi-1.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

#skycon {
  font-family: 'FangZhengSuXinShiLiuKaiJianTi', 'Kaiti SC';
}
</style>
