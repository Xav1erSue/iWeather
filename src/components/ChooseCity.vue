<script setup>
import store from "../store";
import {computed, ref, unref} from "vue";
import {chooseCity} from "../api";

const close = () => {
  store.commit('changeSearchStatus', false)
}
const search = () => {
  chooseCity(unref(city));
}
const city = ref('')
const history = localStorage.getItem('history') || '';
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
          <div class="ml-20px text-[#A07954]" @click="search">添加</div>
        </div>
        <!-- 搜索状态 -->
        <div class="text-center">{{ searchResponse }}</div>
        <!--历史记录-->
        <div v-for="item of history"></div>
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
