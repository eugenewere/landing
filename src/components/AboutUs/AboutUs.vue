<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div class="w-100 text-center  mb-8 lg:mb-16">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">How It Works</h2>
        <p class="text-gray-500 sm:text-xl dark:text-gray-400">
          Magna sit amet purus gravida quis blandit turpis cursus. Venenatis.
        </p>
      </div>
      <div class="space-y-8 md:grid md:grid-cols-1 lg:grid-cols-3 md:gap-12 md:space-y-0 text-center">

        <div v-for="i in [0,1,2]" :key="i" class="flex items-center flex-col">
          <div class="about-svg-wrapper ">
            <svg class="about-svg" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <h3 class="about-header">Select Restaurant</h3>
          <p class="about-txt">
            Non enim praesent elementum facilisis leo vel fringilla. Lectus proin nibh nisl condimentum id. Quis varius quam quisque id diam vel.
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

</script>
