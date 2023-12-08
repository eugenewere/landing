<script setup lang="ts">
import {initDropdowns} from "flowbite";
import {onMounted, type Ref, ref} from "vue";
const nav_item: Ref<number> = ref(0)

onMounted(() => {
  initDropdowns();
});
</script>

<template>
  <nav class="bg-transparent w-full sticky top-0 backdrop-blur-3xl z-[999]">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
<!--        <img src="@/assets/image/favicon/favicon-16.png" class="h-8" alt="Kebu"/>-->
        <span class="self-center text-3xl font-extrabold whitespace-nowrap text-kebu-400">Kebu</span>
      </a>
      <div class="flex md:order-1 space-x-3 md:space-x-0 rtl:space-x-reverse">
<!--        <button type="button" class="text-white app_transition bg-kebu-400 hover:bg-white hover:text-kebu-400 border border-kebu-400 focus:ring-4 focus:outline-none focus:ring-kebu-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-kebu-600 dark:hover:bg-kebu-700 dark:focus:ring-kebu-800">Order Now</button>-->
        <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
      </div>
      <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
        <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <a href="#home" @click="nav_item = 0" class="nav_link" :class="nav_item === 0 ? 'text-kebu-500' : 'text-gray-900'" aria-current="page">Home</a>
          </li>
          <li>
            <a href="#about" @click="nav_item = 1" class="nav_link" :class="nav_item === 1 ? 'text-kebu-500' : 'text-gray-900'">How it Works</a>
          </li>
          <li>
            <a href="#delivery" @click="nav_item = 2" class="nav_link" :class="nav_item === 2 ? 'text-kebu-500' : 'text-gray-900'">Delivery</a>
          </li>
          <li>
            <a href="#reviews" @click="nav_item = 3" class="nav_link" :class="nav_item === 3 ? 'text-kebu-500' : 'text-gray-900'">Reviews</a>
          </li>
          <li>
            <a href="#blog" @click="nav_item = 4" class="nav_link" :class="nav_item === 4 ? 'text-kebu-500' : 'text-gray-900'">Blog</a>
          </li>
          <li>
            <a href="#contact" @click="nav_item = 5 " class="nav_link" :class="nav_item === 5 ? 'text-kebu-500' : 'text-gray-900'">Contact</a>
          </li>
        </ul>

      </div>
    </div>
  </nav>
</template>


<style scoped>
.nav_link{
  @apply block py-2 px-3 md:p-0  rounded hover:text-kebu-500 focus:text-kebu-500 [&.active]:text-kebu-500 hover:bg-kebu-100 md:hover:bg-transparent  md:hover:text-kebu-500 md:dark:hover:text-kebu-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700
}
</style>