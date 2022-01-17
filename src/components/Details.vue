<script setup>
import {computed} from "vue";
import store from "../store";

const loadingStatus = computed(() => store.state.loadingStatus);
const weather = computed(() => store.state.weather);
</script>

<template>
  <div v-if="!loadingStatus" class="w-2/3 mx-auto text-[#351404] pb-50px">
    <!--日出日落-->
    <div class="title"><img class="divider" src="/logo/arrow.svg"/>日出日落</div>
    <div class="rows">
      <div class="items">
        <img alt="日出" class="w-24px" src="/weatherIcons/日出.svg"/>
        <div class="key">日出时间</div>
        <div class="value">{{ weather.daily.astro[0].sunrise.time }}</div>
      </div>
      <div class="items">
        <img alt="日落" class="w-24px" src="/weatherIcons/日落.svg"/>
        <div class="key">日落时间</div>
        <div class="value">{{ weather.daily.astro[0].sunset.time }}</div>
      </div>
    </div>
    <!--天气信息-->
    <div class="title"><img class="divider" src="/logo/arrow.svg"/>天气信息</div>
    <div class="rows">
      <div class="items">
        <div class="key">湿度</div>
        <div class="value">{{ weather.realtime.humidity * 100 }}%</div>
        <div class="key">能见度</div>
        <div class="value">{{ weather.realtime.visibility }}</div>
      </div>
      <div class="items">
        <div class="key">风速</div>
        <div class="value">{{ weather.realtime.wind.speed }}</div>
        <div class="key">风向</div>
        <div class="value">{{ weather.realtime.wind.direction }}</div>
      </div>
    </div>
    <!--空气状况-->
    <div class="title"><img class="divider" src="/logo/arrow.svg"/>空气状况</div>
    <div class="rows">
      <div class="items">
        <div class="key">PM2.5</div>
        <div class="value">{{ weather.realtime.air_quality.pm25 }}</div>
        <div class="key">PM10</div>
        <div class="value">{{ weather.realtime.air_quality.pm10 }}</div>
      </div>
      <div class="items">
        <div class="key">O3</div>
        <div class="value">{{ weather.realtime.air_quality.o3 }}</div>
        <div class="key">SO2</div>
        <div class="value">{{ weather.realtime.air_quality.so2 }}</div>
      </div>
    </div>
    <!--体感状况-->
    <div class="title"><img class="divider" src="/logo/arrow.svg"/>体感状况</div>
    <div class="rows">
      <div class="items">
        <div class="key">紫外线强度</div>
        <div class="value">{{ weather.realtime.life_index.ultraviolet.desc }}</div>
        <div class="key">体感温度</div>
        <div class="value">{{ weather.realtime.life_index.comfort.desc }}</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.title {
  @apply "flex text-18px font-bold";
}

.divider {
  @apply "w-24px mr-12px"
}

.rows {
  @apply "ml-11px py-5px";
  border-left: solid 3px #DADADA;
}

.items {
  @apply "flex ml-10px py-5px"
}

.key {
  @apply "ml-5px"
}

.value {
  @apply "ml-5px opacity-50  mr-7px"
}
</style>

