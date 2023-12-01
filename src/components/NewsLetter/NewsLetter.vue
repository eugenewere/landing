<template>
  <section class=" bg-gray-50 pb-7">
    <div class=" container py-8  mx-auto  lg:py-16 px-6 lg:px-0">
      <div class="flex items-center flex-wrap">

        <div class="w-auto lg:w-[50%] mb-7 lg:mb-0">
          <img class="w-3/5 mx-auto pt-5 lg:pt-0 lg:w-auto" src="@/assets/image/illustration-4.png" alt="newsletter">
        </div>

        <div class="w-auto lg:w-[50%] md:pl-10">
          <h2 class="mb-4 text-3xl  sm:text-center lg:text-left tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white">
            Get the menu of your favorite restaurants every day
          </h2>
          <p class=" sm:text-center lg:text-left mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">
            Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.
          </p>

          <form action="#">
            <div class="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
              <div class="relative w-full">
                <label for="email" class="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg class="w-5 h-5 text-kebu-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <input class="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-kebu-400 focus:border-kebu-400  placeholder-kebu-400 " placeholder="Enter your email" type="email" id="email" required="">
              </div>
              <div>
                <button type="submit" class="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-kebu-400 border-kebu-400 sm:rounded-none sm:rounded-r-lg hover:bg-kebu-500 focus:ring-4 focus:ring-kebu-300 ">
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
</script>