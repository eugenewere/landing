<script setup lang="ts">

import NavBar from "@/components/Menu/NavBar.vue";
import Hero from "@/components/Hero/Hero.vue";
import Aboutus from "@/components/AboutUs/AboutUs.vue";
import Footer from "@/components/Footer/Footer.vue";
import Hero2 from "@/components/Hero/Hero2.vue";
import UserReview from "@/components/Review/UserReview.vue";
import NewsLetter from "@/components/NewsLetter/NewsLetter.vue";
import JoinPartnership from "@/components/Patnership/JoinPartnership.vue";
import NewsBlog from "@/components/Blog/NewsBlog.vue";
import ProspectsCounter from "@/components/Counter/ProspectsCounter.vue";
import WhatCustomerSay from "@/components/WhatCustomerSay/WhatCustomerSay.vue";
</script>

<template>
  <div class="w-fill">
      <NavBar/>
      <Hero/>

    <Aboutus />
    <UserReview />
    <Hero2 />
    <ProspectsCounter/>
    <WhatCustomerSay />
    <JoinPartnership />
    <NewsBlog />
    <NewsLetter />
    <Footer />
  </div>

</template>

<style >
.app_transition{
  @apply transition duration-700 ease-in-out
}
</style>
