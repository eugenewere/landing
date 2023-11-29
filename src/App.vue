<script setup lang="ts">

import NavBar from "@/components/Menu/NavBar.vue";
import Hero from "@/components/Hero/Hero.vue";
import Aboutus from "@/components/AboutUs/AboutUs.vue";
import Footer from "@/components/Footer/Footer.vue";
</script>

<template>
  <div class="w-fill">
    <NavBar/>
    <Hero/>
    <Aboutus />
    <Footer />
  </div>

</template>

<style >
.app_transition{
  @apply transition duration-700 ease-in-out
}
</style>
