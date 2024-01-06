<script lang="ts" setup>
import {ref} from "vue";
import NavBar from "@/components/Menu/NavBar.vue";
import Footer from "@/components/Footer/Footer.vue";

const current_tab = ref('profile_tab');
const details = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.\n" +
    "\n" +
    "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.\n" +
    "\n" +
    "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.\n" +
    "\n" +
    "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
</script>

<template>
      <NavBar :show="false" />
  <section id="about" class="bg-transparent dark:bg-gray-900 py-6">
    <div class="py-8 px-2 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
	   <div class="flex flex-row mb-6">
		   <router-link :to="{name:'home'}">
		      <svg height="40" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M11.8 13H15q.425 0 .713-.288T16 12q0-.425-.288-.712T15 11h-3.2l.9-.9q.275-.275.275-.7t-.275-.7q-.275-.275-.7-.275t-.7.275l-2.6 2.6q-.3.3-.3.7t.3.7l2.6 2.6q.275.275.7.275t.7-.275q.275-.275.275-.7t-.275-.7zm.2 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22" fill="currentColor" /></svg>
		   </router-link>
		   <h4 class="text-black ml-2 text-3xl font-extrabold tracking-tight">
			    Terms & Conditions
		   </h4>
	   </div>

		<div class="md:flex">
		    <ul id="default-tab" class="flex-column space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0" data-tabs-toggle="#default-tab-content" role="tablist">
		        <li role="presentation">
		            <div id="profile_tab" :class="current_tab === 'profile_tab' ? 'bg-kebu-500 text-white hover:text-white'  : 'bg-gray-50 hover:text-gray-900  hover:bg-gray-100'" aria-controls="profile" aria-current="page" aria-selected="false" class="inline-flex items-center px-4 py-3   rounded-lg active w-full" data-tabs-target="#profile" role="tab" type="button" @click="current_tab = 'profile_tab'">
		                <svg :class="current_tab === 'profile_tab' ? 'text-white' : 'text-gray-500 dark:text-gray-400'" aria-hidden="true" class="w-4 h-4 me-2 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
		                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
		                </svg>
		                General
		            </div>
		        </li>
		        <li role="presentation">
		            <div id="dashboard_tab" :class="current_tab === 'dashboard_tab' ? 'bg-kebu-500 text-white hover:text-white' : 'bg-gray-50 hover:text-gray-900  hover:bg-gray-100'" aria-controls="dashboard" aria-selected="false" class="inline-flex items-center px-4 py-3 rounded-lg  w-full " data-tabs-target="#dashboard" role="tab" type="button" @click="current_tab = 'dashboard_tab'">
		                <svg :class="current_tab === 'dashboard_tab' ? 'text-white' : 'text-gray-500 dark:text-gray-400'" aria-hidden="true" class="w-4 h-4 me-2 " fill="currentColor" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" /></svg>
		                Client
		            </div>
		        </li>
		        <li role="presentation">
		            <div id="settings_tab" :class="current_tab === 'settings_tab' ? 'bg-kebu-500 text-white hover:text-white' : 'bg-gray-50 hover:text-gray-900  hover:bg-gray-100'" aria-controls="settings" aria-selected="false" class="inline-flex items-center px-4 py-3 rounded-lg  w-full " data-tabs-target="#settings" role="tab" type="button" @click="current_tab = 'settings_tab'">
		                <svg :class="current_tab === 'settings_tab' ? 'text-white' : 'text-gray-500 dark:text-gray-400'" aria-hidden="true" class="w-4 h-4 me-2 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
		                    <path d="M18 7.5h-.423l-.452-1.09.3-.3a1.5 1.5 0 0 0 0-2.121L16.01 2.575a1.5 1.5 0 0 0-2.121 0l-.3.3-1.089-.452V2A1.5 1.5 0 0 0 11 .5H9A1.5 1.5 0 0 0 7.5 2v.423l-1.09.452-.3-.3a1.5 1.5 0 0 0-2.121 0L2.576 3.99a1.5 1.5 0 0 0 0 2.121l.3.3L2.423 7.5H2A1.5 1.5 0 0 0 .5 9v2A1.5 1.5 0 0 0 2 12.5h.423l.452 1.09-.3.3a1.5 1.5 0 0 0 0 2.121l1.415 1.413a1.5 1.5 0 0 0 2.121 0l.3-.3 1.09.452V18A1.5 1.5 0 0 0 9 19.5h2a1.5 1.5 0 0 0 1.5-1.5v-.423l1.09-.452.3.3a1.5 1.5 0 0 0 2.121 0l1.415-1.414a1.5 1.5 0 0 0 0-2.121l-.3-.3.452-1.09H18a1.5 1.5 0 0 0 1.5-1.5V9A1.5 1.5 0 0 0 18 7.5Zm-8 6a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z" />
		                </svg>
		                Rider
		            </div>
		        </li>

		    </ul>

		    <div id="default-tab-content" class="px-6  text-medium text-gray-600   rounded-lg w-full">
		        <div v-if="current_tab === 'profile_tab'" id="profile" aria-labelledby="profile-tab" class=" px-4 pb-4 rounded-lg " role="tabpanel">
				        <p class="text-sm  leading-9 text-justify">Genral, {{ details }}</p>
		        </div>
				    <div v-if="current_tab === 'dashboard_tab'" id="dashboard" aria-labelledby="dashboard-tab" class=" px-4 pb-4 rounded-lg " role="tabpanel">
				        <p class="text-sm  leading-9 text-justify">Client, {{ details }}</p>
				    </div>
				    <div v-if="current_tab === 'settings_tab'" id="settings" aria-labelledby="settings-tab" class=" px-4 pb-4 rounded-lg " role="tabpanel">
                <p class="text-sm  leading-9 text-justify">Rider, {{ details }}</p>
				    </div>
		    </div>
		</div>


    </div>
  </section>
  <Footer :show="false" />
</template>

<style scoped>

</style>