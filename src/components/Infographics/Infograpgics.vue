<script lang="ts" setup>
import { VisSingleContainer, VisDonut } from '@unovis/vue'
import type Datum from '@unovis/ts'
import {ref} from "vue";
// const props = defineProps<{ data: number[] }>()
const value = (d: number) => d
const color = (d: number, i: number) => ['#f27a0e','white'][i]

</script>
<style >
:root{
  --vis-donut-central-label-font-size: 2.5rem;
  --vis-donut-central-label-text-color: black;
  --vis-donut-central-label-font-weight: bold;

  --vis-donut-central-sub-label-font-size: 1rem;
  --vis-donut-central-sub-label-text-color: #5b5f6d;
  --vis-donut-central-sub-label-font-weight: 500;
}
</style>
<template>
    <section id="blog" class="bg-white dark:bg-gray-900 py-12">
      <div class="container mx-auto px-4 pt-12 ">
          <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Heading
            </h2>
          </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div class="">
              <VisSingleContainer :data="[90, 10]" >
                <VisDonut
                    :value="value" :color="color"
                    :cornerRadius="10"
                    :centralLabel="`${90} %`"
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
             <VisSingleContainer :data="[97, 3]" >
                <VisDonut
                    :value="value" :color="color"
                    :cornerRadius="10"
                    :centralLabel="`${97} %`"
                    centralSubLabel=" Convenience & Reliability"
                />
              </VisSingleContainer>
          </div>
        </div>
      </div>
    </section>
</template>

