<script setup lang="ts">
import NavBar from "@/components/Menu/NavBar.vue";
import Hero from "@/components/Hero/Hero.vue";
import Aboutus from "@/components/AboutUs/AboutUs.vue";
import Footer from "@/components/Footer/Footer.vue";
import Hero2 from "@/components/Hero/Hero2.vue";
import JoinPartnership from "@/components/Patnership/JoinPartnership.vue";
import ProcessTransition from "@/components/Transition/ProcessTransition.vue";
</script>

<template>
  <div class="w-fill">
      <NavBar/>
      <Hero/>
      <Aboutus />
      <ProcessTransition />
      <JoinPartnership />
      <Hero2 />
      <Footer />
<!--    <ProspectsCounter/>-->
<!--    <WhatCustomerSay />-->
<!--    <NewsBlog />-->
<!--    <NewsLetter />-->
<!--    <UserReview />-->
<!--    <Infograpgics />-->

  </div>

</template>

<style >
.app_transition{
  @apply transition duration-700 ease-in-out
}
</style>
