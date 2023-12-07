<template>
  <section class="bg-white dark:bg-gray-900 py-10" id="about">
    <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div class="w-100 text-center  mb-8 lg:mb-16">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">How It Works</h2>
        <p class="text-gray-500 sm:text-xl dark:text-gray-400">
          A delivery platform tailored to meet the needs of businesses, whether in formal or informal settings.
        </p>
      </div>
      <div class="space-y-8 md:grid md:grid-cols-1 lg:grid-cols-3 md:gap-12 md:space-y-0 text-center">

        <div v-for="i in data" :key="i.id" class="flex items-center flex-col">
          <div class="about-svg-wrappe mb-3">
            <img v-if="i.id === 1" src="@/assets/image/about/Illustration-1.png" alt="">
            <img v-else-if="i.id === 2" src="@/assets/image/about/Illustration-2.png" alt="">
            <img v-else-if="i.id === 3" src="@/assets/image/about/illustration-3.png" alt="">
          </div>
          <h3 class="about-header">{{i.name}}</h3>
          <p class="about-txt">
            {{i.desc}}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<style>
.about-svg-wrapper {
  @apply flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-kebu-200 lg:h-12 lg:w-12 dark:bg-kebu-900
}

.about-svg {
  @apply w-5 h-5 text-kebu-400 lg:w-6 lg:h-6 dark:text-kebu-300
}

.about-header {
  @apply mb-2 text-xl font-bold dark:text-white
}

.about-txt {
  @apply text-gray-500 dark:text-gray-400
}
</style>
<script setup lang="ts">
import {ref} from "vue";
const data = ref(
    [
      {
        name: 'Place an order',
        id: 1,
        desc: 'Effortlessly place an order by providing your package pickup point and delivery item details.',
        img: "@/assets/image/about/Illustration-1.png"
      },
      {
        name: 'Rider pickup',
        id: 2,
        desc: 'Effortlessly place an order by providing your package pickup point and delivery item details.',
        img: "@/assets/image/about/Illustration-2.png"
      },
      {
        name: 'Delivery completion',
        id: 3,
        desc: 'Kebu rider ensures safe and timely delivery of your package, providing unmatched convenience at an unbelievably affordable rate.',
        img: "@/assets/image/about/Illustration-3.png"
      }
    ]
)
</script>
