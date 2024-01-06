<script lang="ts" setup>

import Hero from "@/components/Hero/Hero.vue";
import JoinPartnership from "@/components/Patnership/JoinPartnership.vue";
import ProcessTransition from "@/components/Transition/ProcessTransition.vue";
import Footer from "@/components/Footer/Footer.vue";
import NavBar from "@/components/Menu/NavBar.vue";
import Aboutus from "@/components/AboutUs/AboutUs.vue";
import Hero2 from "@/components/Hero/Hero2.vue";
// import ProspectsCounter from "@/components/Counter/ProspectsCounter.vue";
// import WhatCustomerSay from "@/components/WhatCustomerSay/WhatCustomerSay.vue";
// import NewsBlog from "@/components/Blog/NewsBlog.vue";
// import NewsLetter from "@/components/NewsLetter/NewsLetter.vue";
// import UserReview from "@/components/Review/UserReview.vue";
// import Infograpgics from "@/components/Infographics/Infograpgics.vue";
</script>

<template>
      <NavBar :show="true" />
      <Hero />
      <Aboutus />
      <ProcessTransition />
      <JoinPartnership />
      <Hero2 />
     
	
<!--	    <ProspectsCounter/>-->
<!--	    <WhatCustomerSay />-->
<!--	    <NewsBlog />-->
<!--	    <NewsLetter />-->
<!--	    <UserReview />-->
<!--	    <Infograpgics />-->
<!--	-->
	
	    <Footer />
</template>

<style scoped>

</style>