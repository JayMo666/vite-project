<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld
    msg="Hello Vue 3 + TypeScript + Vite"
    @myclick="onMyClick"
    ref="hw"
  />
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
// 直接导入
import HelloWorld from "@/components/HelloWorld.vue";
const hw = ref(null);

const onMyClick = () => {
  console.log("onMyClick", hw);
  (hw as any).value.someMethod();
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
