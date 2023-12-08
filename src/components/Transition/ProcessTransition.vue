<template>
  <section id="delivery" class="bg-white dark:bg-gray-900 py-10">
    <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div class="w-100 text-center  mb-8 lg:mb-16">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Make deliver more, save more bigger</h2>
        <p class="text-gray-500 sm:text-xl dark:text-gray-400">
          Maximize savings as you increase deliveries, optimizing both efficiency and cost-effectiveness.
        </p>
      </div>
      <div class="space-y-8 md:grid md:grid-cols-1 lg:grid-cols-3 md:gap-12 md:space-y-0 text-center">

        <div class="flex items-center flex-col">
          <h3 class="about-header capitalize">traditional way</h3>
          <ul class="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
              <li class="flex items-center">
                  <svg aria-hidden="true" class="w-3.5 h-3.5 me-2 text-gray-500 dark:text-gray-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                 </svg>
                  Slow Delivery
              </li>
              <li class="flex items-center">
                  <svg aria-hidden="true" class="w-3.5 h-3.5 me-2 text-gray-500 dark:text-gray-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                 </svg>
                 Spend More
              </li>

          </ul>
        </div>

        <div class="inline-flex items-center justify-center w-full">
            <hr class="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
            <span class="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">to</span>
        </div>
         <div class="flex items-center flex-col">
          <h3 class="about-header capitalize"> Kebu platform</h3>
          <ul class="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
              <li class="flex items-center">
                <svg class="flex-shrink-0 w-3.5 h-3.5 text-kebu-500 dark:text-kebu-400 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
         </svg>
                  Fast Delivery
              </li>
              <li class="flex items-center">
                <svg class="flex-shrink-0 w-3.5 h-3.5 text-kebu-500 dark:text-kebu-400 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
         </svg>
                  Spend Less
              </li>

          </ul>
        </div>
      </div>
     <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-8">
          <div class="">
              <VisSingleContainer :data="[99, 10]" >
                <VisDonut
                    :value="value" :color="color"
                    :cornerRadius="10"
                    :centralLabel="`${99} %`"
                    centralSubLabel="Time"
                />
              </VisSingleContainer>
          </div>
          <div class="">
              <VisSingleContainer :data="[99, 1]" >
                <VisDonut
                    :value="value" :color="color"
                    :cornerRadius="10"
                    :centralLabel="`${99} %`"
                    centralSubLabel="Cost"
                />
              </VisSingleContainer>
          </div>
          <div class="">
             <VisSingleContainer :data="[99, 3]" >
                <VisDonut
                    :value="value" :color="color"
                    :cornerRadius="10"
                    :centralLabel="`${99} %`"
                    centralSubLabel=" Convenience & Reliability"
                />
              </VisSingleContainer>
          </div>
        </div>
    </div>
  </section>
</template>
<style >
:root{
  --vis-donut-central-label-font-size: 2.5rem !important;
  --vis-donut-central-label-text-color: black !important;
  --vis-donut-central-label-font-weight: bold !important;
  --vis-donut-central-sub-label-font-size: 1rem !important;
  --vis-donut-central-sub-label-text-color: #5b5f6d !important;
  --vis-donut-central-sub-label-font-weight: bold !important;
}
</style>
<script lang="ts" setup>
import {VisDonut, VisSingleContainer} from "@unovis/vue";
const value = (d: number) => d
const color = (d: number, i: number) => ['#f8991d','white'][i]


</script>