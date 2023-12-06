<template>
  <section class="bg-custom-image  h-[90vh] flex items-center justify-center" id="home">
    <div class="flex flex-col-reverse lg:grid max-w-screen-xl px-4 py-8 mx-auto my-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div class="mr-auto mt-8  md:mt-0 place-self-center lg:col-span-7">
        <h1 class="max-w-2xl mb-4 text-3xl  md:text-4xl lg:text-5xl xl:text-6xl font-extrabold sm:text-center md:text-left tracking-tighter leading-none  dark:text-white">
          Elevate your delivery experience with Kebu.
        </h1>
        <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-md lg:text-lg dark:text-gray-400">
          We redefine standards through swift, seamless, and reliable service. Our dedicated riders and advanced technology ensure efficient package delivery, offering unparalleled convenience anytime and anywhere. Join us in shaping the future of delivery excellence at your doorstep.
        </p>
        <div class="flex justify-center lg:justify-start">
          <a href="#patnership" class="inline-flex app_transition items-center justify-center px-5 py-3 lg:px-5 lg:py-3 mr-3 text-sm lg:text-base font-medium text-center text-white rounded-lg bg-kebu-400 hover:bg-kebu-500 focus:ring-4 focus:ring-kebu-300 dark:focus:ring-kebu-900">
            Get started
            <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
          </a>
<!--          <a href="#" class="inline-flex items-center justify-center  px-5 py-3 lg:px-5 lg:py-3 text-sm lg:text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-kebu-100 hover:text-kebu-600 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">-->
<!--            Speak to Sales-->
<!--          </a>-->
        </div>
      </div>
      <div class="lg:mt-0 lg:col-span-5 lg:flex relative">
        <img class="w-3/5 mx-auto pt-5 lg:pt-0 lg:w-auto" src="@/assets/image/photo-1.png" alt="mockup">

        <div class="rotate-[15deg] transform-gpu rounded-xl bg-white flex items-center p-3 h-fit w-fit absolute right-10 md:right-5 lg:right-0 top-1/4">
          <div class="bg-kebu-400 rounded-full w-[40px] h-[40px] p-2 flex justify-center items-center">
            <svg class="text-white" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
              <path fill="currentColor" d="M9 11.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5M9 2C5.13 2 2 5.13 2 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m9 15l5-5l-5-5v10Z"/>
            </svg>
          </div>
          <div class="pl-3">
            <h4 class="text-xs md:text-sm lg:text-md text-black font-extrabold">Delivery</h4>
            <small class="text-xs md:text-md mt-[5px] text-gray-400">to your house</small>
          </div>
        </div>
        <div class="-rotate-[15deg] transform-gpu rounded-xl bg-white flex items-center p-3 h-fit w-fit absolute left-10 md:left-5 lg:left-0 top-2/4">
          <div class="bg-kebu-400 rounded-full w-[40px] h-[40px] p-2 flex justify-center items-center">
            <svg class="text-white text-xs" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
              <path fill="currentColor" d="M19 7h3l-4-4l-4 4h3v14h2M5 13c-1.11 0-2 .89-2 2v4c0 1.11.89 2 2 2h4c1.11 0 2-.89 2-2v-4c0-1.11-.89-2-2-2m.2 1.5l1.06 1.05l-3.99 3.95l-2.53-2.55l1.07-1.05l1.47 1.49M5 3c-1.11 0-2 .89-2 2v4c0 1.11.89 2 2 2h4c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2M5 5h4v4H5Z"/>
            </svg>
          </div>
          <div class="pl-3">
            <h4 class="text-xs md:text-sm lg:text-md text-black font-extrabold ">Your Product</h4>
            <small class="text-xs md:text-md mt-[5px] text-gray-400">need to be delivered</small>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>
