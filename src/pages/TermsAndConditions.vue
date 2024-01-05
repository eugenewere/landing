
<template>
  <section id="about" class="bg-transparent dark:bg-gray-900 py-10">
    <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
	   <div class="flex flex-row mb-4">
		   <router-link :to="{name:'home'}">
		      <svg height="40" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M11.8 13H15q.425 0 .713-.288T16 12q0-.425-.288-.712T15 11h-3.2l.9-.9q.275-.275.275-.7t-.275-.7q-.275-.275-.7-.275t-.7.275l-2.6 2.6q-.3.3-.3.7t.3.7l2.6 2.6q.275.275.7.275t.7-.275q.275-.275.275-.7t-.275-.7zm.2 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22" fill="currentColor" /></svg>
		   </router-link>
		   <h4 class="text-black ml-2 text-3xl font-extrabold tracking-tight">
			    Terms & Conditions
		   </h4>
	   </div>

	<div class="mb-4 border-b border-gray-200 dark:border-gray-700">
    <ul id="tabs-example" class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400" role="tablist">
        <li class="me-2" role="presentation">
            <button
		            id="profile-tab-example"
		            aria-controls="profile-example"
		            aria-selected="false"
		            class="inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
		            role="tab"
		            type="button"
            >
                Profile
            </button>
        </li>
        <li class="me-2" role="presentation">
            <button
		            id="dashboard-tab-example"
		            aria-controls="dashboard-example"
		            aria-selected="false"
		            class="inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
		            role="tab"
		            type="button"
            >
                Dashboard
            </button>
        </li>
        <li class="me-2" role="presentation">
            <button
		            id="settings-tab-example"
		            aria-controls="settings-example"
		            aria-selected="false"
		            class="inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
		            role="tab"
		            type="button"
            >
                Settings
            </button>
        </li>
        <li role="presentation">
            <button
		            id="contacts-tab-example"
		            aria-controls="contacts-example"
		            aria-selected="false"
		            class="inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
		            role="tab"
		            type="button"
            >
                Contacts
            </button>
        </li>
    </ul>
</div>
<div id="tabContentExample">
    <div
		    id="profile-example"
		    aria-labelledby="profile-tab-example"
		    class="hidden rounded-lg bg-gray-50 p-4 dark:bg-gray-800"
		    role="tabpanel"
    >
        <p class="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the
            <strong class="font-medium text-gray-800 dark:text-white"
            >Profile tab's associated content</strong
            >. Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
        </p>
    </div>
    <div
		    id="dashboard-example"
		    aria-labelledby="dashboard-tab-example"
		    class="hidden rounded-lg bg-gray-50 p-4 dark:bg-gray-800"
		    role="tabpanel"
    >
        <p class="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the
            <strong class="font-medium text-gray-800 dark:text-white"
            >Dashboard tab's associated content</strong
            >. Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
        </p>
    </div>
    <div
		    id="settings-example"
		    aria-labelledby="settings-tab-example"
		    class="hidden rounded-lg bg-gray-50 p-4 dark:bg-gray-800"
		    role="tabpanel"
    >
        <p class="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the
            <strong class="font-medium text-gray-800 dark:text-white"
            >Settings tab's associated content</strong
            >. Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
        </p>
    </div>
    <div
		    id="contacts-example"
		    aria-labelledby="contacts-tab-example"
		    class="hidden rounded-lg bg-gray-50 p-4 dark:bg-gray-800"
		    role="tabpanel"
    >
        <p class="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the
            <strong class="font-medium text-gray-800 dark:text-white"
            >Contacts tab's associated content</strong
            >. Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
        </p>
    </div>
</div>


    </div>
  </section>
</template>

<script lang="ts" setup>
import { Tabs } from 'flowbite';
import type { TabsOptions, TabsInterface, TabItem } from 'flowbite';
import type { InstanceOptions } from 'flowbite';

const tabsElement = document.getElementById('tabs-example');

// create an array of objects with the id, trigger element (eg. button), and the content element
const tabElements: TabItem[] = [
    {
        id: 'profile',
        triggerEl: document.querySelector('#profile-tab-example'),
        targetEl: document.querySelector('#profile-example'),
    },
    {
        id: 'dashboard',
        triggerEl: document.querySelector('#dashboard-tab-example'),
        targetEl: document.querySelector('#dashboard-example'),
    },
    {
        id: 'settings',
        triggerEl: document.querySelector('#settings-tab-example'),
        targetEl: document.querySelector('#settings-example'),
    },
    {
        id: 'contacts',
        triggerEl: document.querySelector('#contacts-tab-example'),
        targetEl: document.querySelector('#contacts-example'),
    },
];

// options with default values
const options: TabsOptions = {
    defaultTabId: 'settings',
    activeClasses:
        'text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-400 border-blue-600 dark:border-blue-500',
    inactiveClasses:
        'text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300',
    onShow: () => {
        console.log('tab is shown');
    },
};

// instance options with default values
const instanceOptions: InstanceOptions = {
  id: 'tabs-example',
  override: true
};

/*
* tabElements: array of tab objects
* options: optional
*/
const tabs: TabsInterface = new Tabs(tabsElement, tabElements, options, instanceOptions);

// open tab item based on id
tabs.show('contacts');
</script>
