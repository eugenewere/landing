<template>
  <section id="reviews" class=" bg-white bg-custom-image">
    <div class="container mx-auto py-12 px-6 lg:px-0  lg:py-16 xl:py-24">
      <div class="flex items-center flex-wrap flex-col-reverse lg:flex-row">


        <div class="w-auto lg:w-[50%] md:pr-10">
          <h2 class="mb-4 text-3xl  sm:text-center lg:text-left tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white">
            What customers say about us
          </h2>
          <div class="reviews_wrp pt-7">
            <carousel :autoplay="2000" :wrap-around="true" :items-to-show="1" ref="currentSlide">
              <slide v-for="slide in 10" :key="slide">
                <blockquote class="review_card">


                  <p class="mx-auto sm:text-center lg:text-left mb-6 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">
                    Non enim praesent elementum facilisis leo vel fringilla. Lectus proin nibh nisl condimentum id. Quis varius quam quisque id diam vel.
                  </p>

                  <div class="flex items-center mt-5">
                    <img class="w-20 h-20 rounded-full" src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" alt="Rounded avatar">
                    <div class="pl-6 text-left">
                      <p class="text-md lg:text-lg font-bold text-neutral-950 mb-0  pb-2">
                        Kennington Lane Cafe
                      </p>
                      <span class="pb-2 text-sm font-medium text-kebu-400 ">
                          &mdash; Michael Scott
                        </span>
                      <div class="flex mt-3 gap-0.5 text-kebu-400">
                        <svg
                            class="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>

                        <svg
                            class="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>

                        <svg
                            class="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>

                        <svg
                            class="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>

                        <svg
                            class="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                      </div>
                    </div>

                  </div>


                </blockquote>
              </slide>

              <!--              <template #addons>-->
              <!--                <navigation/>-->
              <!--              </template>-->
            </carousel>
            <div class="pt-5">

              <button  class="border border-kebu-400 text-kebu-400 p-2 rounded-full"  @click="prev">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M10.05 16.94v-4h8.92l.03-2.01h-8.95V6.94l-5 5Z"/>
                </svg>
              </button>
              <button class=" ml-3 border border-kebu-400 text-kebu-400 p-2 rounded-full" @click="next">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M14 16.94v-4H5.08l-.03-2.01H14V6.94l5 5Z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="w-auto lg:w-[50%] mb-7 lg:mb-0">
          <img class="w-3/5 mx-auto pt-5 lg:pt-0 lg:w-auto" src="@/assets/image/photo-4.png" alt="newsletter">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import {Carousel, Slide} from 'vue3-carousel'
import {ref} from "vue";

const currentSlide = ref(null)

function next() {
  currentSlide.value ? currentSlide.value?.next() : '';
}

function prev() {
  currentSlide.value ? currentSlide.value?.prev() : '';
}
</script>
<style>
.review_card {
  @apply rounded-lg flex h-full flex-col justify-between shadow-sm
}
</style>
