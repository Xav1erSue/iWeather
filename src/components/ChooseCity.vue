<script setup>
import store from "../store";
import {computed, ref, unref} from "vue";
import {chooseCity} from "../api";
import {clearStorage} from "../utils/storage";

const close = () => {
  store.commit('changeSearchStatus', false)
  city.value = ''
}
const search = (cityIn) => {
  chooseCity(unref(cityIn));
  city.value = ''
}

const city = ref('')
const history = computed(() => store.state.history);
const searchResponse = computed(() => store.state.searchResponse);
</script>

<template>
  <teleport to="body">
    <div class="background" @click.self="close">
      <!--主体部分-->
      <div class="w-4/5 h-1/2 bg-[#fff] rounded-md z-3 mx-auto my-1/2">
        <!--搜索部分-->
        <div class="flex h-40px w-full justify-center items-center py-30px">
          <input v-model="city" class="inputBox"
                 placeholder="请输入查询城市名" type="text">
          <div class="ml-20px text-[#A07954]" @click="search(city)">添加</div>
        </div>
        <!-- 搜索状态 -->
        <div class="text-center">{{ searchResponse }}</div>
        <!--历史记录-->
        <div class="flex flex-wrap w-4/5 mx-auto items-center ">
          <span class="text-[#A07954]">历史搜索:</span>
          <span v-for="(item,index) of history" :key="index"
                class="px-5px mx-3px rounded-lg bg-[#CCE5F6] text-[#fff] my-10px"
                @click="search(item)">
            {{ item }}
          </span>
          <span v-if="history.length !== 0" class="text-[#dc2626] my-10px"
                @click="clearStorage">× 清除记录</span>
        </div>
      </div>
    </div>
  </teleport>
</template>

<style lang="scss" scoped>
.background {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(#000, 0.5);
  z-index: 2;
}

.inputBox {
  @apply "outline-none w-160px px-10px py-3px";
  border-bottom: solid 2px #A07954;
}
</style>
