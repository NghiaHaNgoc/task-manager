<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HeaderView from "./components/HeaderView.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <HeaderView/>

  <RouterView />
  <Footer/>
</template>

<style>
html {
    font-size: 14px;
}
</style>
