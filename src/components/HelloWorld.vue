<template>
  <h1 :class="classes.blue">{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <button @click="onClick">onClick</button>
  <p class="demo-p">这是p标签</p>
  <img :src="imgUrl" alt="" />
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmit, useContext, computed } from "vue";
import classes from "style/moduleCss/example.module.css";
import imgUrl from "assets/images/img1.jpg";
// const modules = import.meta.glob("../style/**/**.css");
// console.log("modules", modules);
// 属性定义
const props = defineProps({
  msg: {
    type: String,
  },
});
console.log("props", props);
const ctx = useContext();
const count = ref(0);
// 定义事件
const emit = defineEmit(["myclick", "mydbClick"]);
const onClick = () => {
  emit("myclick");
  getUserInfo();
};

const getUserInfo = () => {
  fetch("/api/users")
    .then((response) => response.json())
    .then((json) => console.log(json));
};

ctx.expose({
  someMethod() {
    console.log("someMethodsomeMethod");
  },
});
</script>

<style lang="scss">
@import "style/sass/demo.scss";
</style>
