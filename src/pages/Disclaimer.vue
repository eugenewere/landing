<script lang="ts" setup>
import NavBar from '@/components/Menu/NavBar.vue'
import Footer from '@/components/Footer/Footer.vue'
import { marked } from 'marked'
import { computed, ref } from 'vue'


const mdFile = ref('')
marked.setOptions({
  breaks: true,
  pedantic: true,
  gfm: true,
});
const fetchFileData = async () => {
  fetch('/docs/disclaimer.md')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch Markdown content')
      }
      return response.text()
    })
    .then(markdownContent => {
      mdFile.value = marked(markdownContent)
    })
    .catch(error => {
      console.error('Error fetching Markdown content:', error)
    })
  
  
}

fetchFileData()


console.log(mdFile)
// const htmCOntent = ''

const getMarkdown = computed((val) => marked(val))
</script>
<style scoped>
.md_file *{
  margin: auto !important;
}
.md_file h3{
  margin: auto !important;
}
.md_file h1, .md_file h2, .md_file h3, .md_file h4, .md_file h5, .md_file h6 {
      margin-top: 20px;
      margin-bottom: 10px;
    }
</style>
<template>
  <NavBar :show="false" />
  <section id="about" class="bg-transparent dark:bg-gray-900 py-6">
    <div class="py-8 px-2 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
       <div class="flex flex-row mb-6">
         <router-link :to="{name:'home'}">
            <svg height="40" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M11.8 13H15q.425 0 .713-.288T16 12q0-.425-.288-.712T15 11h-3.2l.9-.9q.275-.275.275-.7t-.275-.7q-.275-.275-.7-.275t-.7.275l-2.6 2.6q-.3.3-.3.7t.3.7l2.6 2.6q.275.275.7.275t.7-.275q.275-.275.275-.7t-.275-.7zm.2 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22" fill="currentColor" /></svg>
         </router-link>
         <h4 class="text-black ml-2 text-3xl font-extrabold tracking-tight">
            Disclaimer
         </h4>
       </div>
  
      <div class="md:flex">
  
        <div class=" px-4 pb-4  ">
           <div class="text-stone-900 text-justify md_file leading-8 space-y-6" v-html="mdFile"></div>
        </div>
        
      </div>
    </div>
  </section>
  <Footer :show="false" />
</template>

