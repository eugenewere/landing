<template>
  <footer id="contact" class="p-4 sm:p-6 bg-neutral-950">
    <div class="mx-auto max-w-screen-xl pt-6">
      <div class="md:flex ">
        <div class="mb-6 md:mb-0 lg:w-[50%]">
          <router-link :to="{name: 'home'}" class="flex items-center">
            <img alt="Kebu Logo" class="mr-3 h-12 rounded overflow-hidden" src="@/assets/image/kebu/playstore.png" />
	          <!--             <span class="self-center text-3xl font-extrabold whitespace-nowrap text-kebu-400">Kebu</span>-->
          </router-link>
	        <!--          <h6 class="py-7 sm:text-2xl text-xl font-extrabold tracking-tight leading-none md:text-2xl xl:text-3xl text-white">-->
	        <!--            Deliver Value, Deliver Convenience-->
	        <!--          </h6>-->
          <p class="pb-7 w-[60%] text-neutral-400 mt-3">
							Deliver Value, Deliver Convenience
          </p>
          <div class="">
            <h2 class="mb-3 text-base font-semibold uppercase text-neutral-400">Contact</h2>
            <ul class="text-gray-600 dark:text-gray-400 grid grid-cols-1">
              <li class="mb-4">
                <a class=" flex text-slate-100 hover:text-kebu-400 text-sm" href="mailto:info@kebu.io">
	                <strong class="flex items-center mr-1">
		                <svg class="mr-1" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12v1.45q0 1.475-1.012 2.513T18.5 17q-.875 0-1.65-.375t-1.3-1.075q-.725.725-1.638 1.088T12 17q-2.075 0-3.537-1.463T7 12q0-2.075 1.463-3.537T12 7q2.075 0 3.538 1.463T17 12v1.45q0 .65.425 1.1T18.5 15q.65 0 1.075-.45t.425-1.1V12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20h5v2zm0-7q1.25 0 2.125-.875T15 12q0-1.25-.875-2.125T12 9q-1.25 0-2.125.875T9 12q0 1.25.875 2.125T12 15"/></svg>
<!--		                Email:-->
	                </strong>
	                info@kebu.io
                </a>
              </li>
               <li class="mb-4">
                <a class=" flex text-slate-100 hover:text-kebu-400 text-sm" href="tel:+254 111 48 3335">
	                <strong class="flex items-center mr-1">
		                <svg class="mr-1" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863q-2.5-2.5-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"/></svg>
<!--		                Phone:-->
	                </strong>
	                +254 111 48 3335
                </a>
              </li>
              
            </ul>
          </div>
        </div>
        <div class="grid grid-cols-1 gap-4  ">
<!--          <div class="">-->
<!--            <h2 class="mb-6 text-lg font-semibold uppercase text-neutral-400">Menu</h2>-->
<!--            <ul class="text-gray-600 dark:text-gray-400 grid grid-cols-2">-->
<!--              <li class="mb-4">-->
<!--                <a class=" text-slate-100 hover:text-kebu-400 text-base" href="#home">Home</a>-->
<!--              </li>-->
<!--              <li class="mb-4">-->
<!--                <a class=" text-slate-100 hover:text-kebu-400 text-base" href="#about">How it Works</a>-->
<!--              </li>-->
<!--              <li class="mb-4">-->
<!--                <a class=" text-slate-100 hover:text-kebu-400 text-base" href="#delivery">Delivery</a>-->
<!--              </li>-->
<!--              <li class="mb-4">-->
<!--                <a class=" text-slate-100 hover:text-kebu-400 text-base" href="#reviews">Reviews</a>-->
<!--              </li>-->
<!--              <li class="mb-4">-->
<!--                <a class=" text-slate-100 hover:text-kebu-400 text-base" href="#blog">Blog</a>-->
<!--              </li>-->
<!--              <li>-->
<!--                <a class=" text-slate-100 hover:text-kebu-400 text-base" href="#contact">Contact</a>-->
<!--              </li>-->
<!--            </ul>-->
<!--          </div>-->
<!--          <div class="col-span-4">-->
<!--            <h2 class="mb-6 text-lg font-semibold uppercase text-neutral-400">Contacts</h2>-->
<!--            <ul class="text-gray-600 dark:text-gray-400">-->
<!--              <li class="mb-4">-->
<!--                <a href="#" class="text-slate-100 flex items-center ">-->
<!--                  <svg class="w-7 mr-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">-->
<!--                    <path fill="currentColor" d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Z"/>-->
<!--                  </svg>-->
<!--                  1717 Harrison St, San Francisco, CA 94103, United States-->
<!--                </a>-->
<!--              </li>-->

<!--            </ul>-->
<!--            <hr class="my-6  sm:mx-auto border-neutral-600 lg:my-8"/>-->
<!--            <ul class="text-gray-600 dark:text-gray-400">-->
<!--              <li class="mb-4">-->
<!--                <a href="#" class="text-slate-100 flex items-center ">-->
<!--                  <svg class="w-5 h-5 mr-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">-->
<!--                    <path fill="currentColor" d="m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"/>-->
<!--                  </svg>-->
<!--                  abc@email.com-->
<!--                </a>-->
<!--              </li>-->
<!--              <li>-->
<!--                <a href="#" class="text-slate-100 flex items-center">-->
<!--                  <svg class="w-5 h-5 mr-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">-->
<!--                    <path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25c1.12.37 2.32.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02l-2.2 2.2Z"/>-->
<!--                  </svg>-->
<!--                  +254 700000 77-->
<!--                </a>-->
<!--              </li>-->
<!--            </ul>-->
<!--          </div>-->
        </div>
      </div>
      <div class="w-full flex justify-end">
        <ul v-if="props.show" class="text-gray-600 dark:text-gray-400 flex ">
              <li class="ml-4">
                <a class=" text-slate-100 hover:text-kebu-400 text-sm" href="#home">Home</a>
              </li>
              <li class="ml-4">
                <a class=" text-slate-100 hover:text-kebu-400 text-sm" href="#about">How it Works</a>
              </li>
              <li class="ml-4">
                <a class=" text-slate-100 hover:text-kebu-400 text-sm" href="#delivery">Delivery</a>
              </li>
              <li class="ml-4">
                <a class=" text-slate-100 hover:text-kebu-400 text-sm" href="#patnership">Join</a>
              </li>
              <li class="ml-4">
                <router-link :to="{name: 'terms'}" class=" text-slate-100 hover:text-kebu-400 text-sm">Terms & Conditions</router-link>
              </li>
            <li class="ml-4">
                <router-link :to="{name: 'disclaimer'}" class=" text-slate-100 hover:text-kebu-400 text-sm">Disclaimer</router-link>
              </li>
          
	        <!--              <li class="ml-4">-->
	        <!--                <a class=" text-slate-100 hover:text-kebu-400 text-sm" href="#contact">Contact</a>-->
	        <!--              </li>-->
            </ul>
      </div>
      <hr class="my-6  sm:mx-auto border-neutral-600 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
        <span class="text-sm text-neutral-500 sm:text-center dark:text-neutral-400">
          © {{ new Date().getFullYear() }}
          <router-link :to="{name: 'home'}" class="hover:underline">Kebu™</router-link>. All Rights Reserved.
        </span>
        <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
<!--          <a class="text-neutral-500 hover:text-kebu-400 dark:hover:text-white" href="#" target="_blank">-->
<!--            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">-->
<!--              <path clip-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fill-rule="evenodd" />-->
<!--            </svg>-->
<!--          </a>-->
<!--          <a class="text-neutral-500 hover:text-kebu-400 dark:hover:text-white" href="#" target="_blank">-->
<!--            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">-->
<!--              <path clip-rule="evenodd"-->
<!--                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"-->
<!--                    fill-rule="evenodd" />-->
<!--            </svg>-->
<!--          </a>-->
<!--          <a class="text-neutral-500 hover:text-kebu-400 dark:hover:text-white" href="#" target="_blank">-->
<!--            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">-->
<!--              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />-->
<!--            </svg>-->
<!--          </a>-->
<!--          <a class="text-neutral-500 hover:text-kebu-400 dark:hover:text-white" href="#" target="_blank">-->
<!--            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">-->
<!--              <path clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fill-rule="evenodd" />-->
<!--            </svg>-->
<!--          </a>-->
<!--          <a class="text-neutral-500 hover:text-kebu-400 dark:hover:text-white" href="#" target="_blank">-->
<!--            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">-->
<!--              <path clip-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" fill-rule="evenodd" />-->
<!--            </svg>-->
<!--          </a>-->
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>

</style>
<script lang="ts" setup>
const props = withDefaults(defineProps<{ show: boolean }>(), {
	show: true
})

</script>