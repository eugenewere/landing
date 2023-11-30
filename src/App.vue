<script setup lang="ts">

import NavBar from "@/components/Menu/NavBar.vue";
import Hero from "@/components/Hero/Hero.vue";
import Aboutus from "@/components/AboutUs/AboutUs.vue";
import Footer from "@/components/Footer/Footer.vue";
import Counter from "@/components/Counter/Counter.vue";
import Hero2 from "@/components/Hero/Hero2.vue";
import UserReview from "@/components/Review/UserReview.vue";
import NewsLetter from "@/components/NewsLetter/NewsLetter.vue";
import WhatCustomerSay from "@/components/WhatCustomerSay/WhatCustomerSay.vue";
</script>

<template>
  <div class="w-fill">
    <div class="w-full bg-[url('@/assets/image/background-1.png')] bg-no-repeat bg-center bg-cover">
      <NavBar/>
      <Hero/>
    </div>

    <Aboutus />
    <Counter />
    <Hero2 />
    <UserReview />
    <WhatCustomerSay />
    <NewsLetter />
    <Footer />
  </div>

</template>

<style >
.app_transition{
  @apply transition duration-700 ease-in-out
}
</style>
