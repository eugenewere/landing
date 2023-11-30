<script setup lang="ts">

</script>

<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6 flex items-center flex-col  lg:flex-row ">
      <div class=" lg:text-left md:text-center md:w-100 lg:w-[30%] md:mb-0 mb-16">
        <h2 class=" lg:w-100 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Service shows good taste.</h2>
        <p class="max-w-2xl mt-6 mb-6 md:mb-0 font-light  text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
          Lorem ipsum dolor sit amet, consectetur .
        </p>
      </div>
      <div class="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-4 dark:text-white">
        <div class="counter_card">
          <dt class="mb-2 text-3xl md:text-4xl font-extrabold">73M+</dt>
          <dd class="font-light text-gray-500 dark:text-gray-400">Riders</dd>
        </div>
        <div class="counter_card">
          <dt class="mb-2 text-3xl md:text-4xl font-extrabold">1B+</dt>
          <dd class="font-light text-gray-500 dark:text-gray-400">Customers</dd>
        </div>
        <div class="counter_card">
          <dt class="mb-2 text-3xl md:text-4xl font-extrabold">4M+</dt>
          <dd class="font-light text-gray-500 dark:text-gray-400">Deliveries</dd>
        </div>
        <div class="counter_card">
          <dt class="mb-2 text-3xl md:text-4xl font-extrabold">5M+</dt>
          <dd class="font-light text-gray-500 dark:text-gray-400">Deliveries</dd>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.counter_card {
  @apply flex flex-col items-center justify-center border border-neutral-200 rounded-lg p-3 md:p-10 px-10 shadow-sm shadow-neutral-500
}
</style>