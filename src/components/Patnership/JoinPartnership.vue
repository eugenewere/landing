<template>
  <section class="bg-neutral-950 py-12">
    <div class="container mx-auto py-7 px-5 md:px-0">
      <h2 class=" lg:w-100 text-4xl text-center text-white tracking-tight font-extrabold">
        Want to Join Partnership?
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12">
        <div v-for="i in data" :key="i.id">
          <div class="join-img">
            <img alt="img" :src="i.img">
            <div class="Join-courier">
              <h3 class="text-lg md:text-2xl lg:text-3xl tracking-tight">{{ i.title }}</h3>
              <a href="#" class="inline-flex app_transition items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-kebu-400 hover:bg-kebu-500 focus:ring-4 focus:ring-kebu-300 dark:focus:ring-kebu-900">
                Learn More
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<style scoped>
.join-img {
  padding-top: 80px;
  padding-right: 50px;
  position: relative;
}

.join-img img {
  border-radius: 20px;
  width: 100%;
}

.Join-courier {
  position: absolute;
  top: 65%;
  left: 10%;
}

.Join-courier h3 {
  color: white;
  font-weight: bold;
  padding-bottom: 15px;
}

.join-img:before {
  content: "";
  position: absolute;
  height: 87%;
  width: 95%;
  border: 7px solid #f29f05;
  border-radius: 20px;
  left: 6%;
  top: 8%;
}
@media (max-width: 993px) {
  .join-img:before {
    height: 86%;
  }
}

@media (max-width: 1400px) {
  .join-img:before {
    width: 91%;
    height: 91%;
    top: 15%;
  }
}
</style>
<script setup lang="ts">
import {ref} from "vue";

const data = ref([
  {
    id: 1,
    title: 'Join Courier',
    img: "https://quickeat-react.vercel.app/assets/img/photo-6.jpg"
  },
  {
    id: 2,
    title: 'Join Merchant',
    img: "https://quickeat-react.vercel.app/assets/img/photo-7.jpg"
  }
])

</script>