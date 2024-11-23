<script setup>
import {onMounted, ref, watch} from "vue";

const props = defineProps(['journalData'])

const now = ref(new Date().toLocaleDateString())

</script>

<template>
  <div class="border border-black mx-auto p-2 mt-4" id="newspaper">
    <div class="h-full">
      <div class="bg-white w-full flex flex-col text-center" id="journalHeader">
        <span class="journalTitle"
              :style="{ fontFamily: journalData?.journalFont }">

          {{ journalData.journalName }}
        </span>
        <small>{{ now }} ○ Alger </small>
      </div>
      <div class="flex justify-between">
        <div class="bg-white h-full w-[80%]" >
          <div class="grid grid-cols-2 gap-4">
            <img :src="props.journalData?.image1 ?? '../src/assets/photos/placeholder.png'" alt="Image 1" class="w-full h-48 object-cover">
            <img :src="props.journalData?.image2 ?? '../src/assets/photos/placeholder2.png'" alt="Image 2" class="w-full h-48 object-cover">
            <img :src="props.journalData?.image3 ?? '../src/assets/photos/placeholder3.png'" alt="Image 3" class="col-span-2 w-full h-[780px] object-cover">
          </div>
        </div>
        <div class="articles-aside">
          <div class="card">
            <div class="card-header text-gothic">
              {{ journalData.art1?.title }}
            </div>
            <div class="card-body">
              <span class="body">
                {{ journalData.art1?.body }}
              </span>
            </div>
          </div>
          <div class="card">
            <div class="card-header text-gothic">
              {{ journalData.art2?.title }}
            </div>
            <div class="card-body">
              <span class="body">
                {{ journalData.art2?.body }}
              </span>
            </div>
          </div>
          <div class="card">
            <div class="card-header text-gothic">
              {{ journalData.art3?.title }}
            </div>
            <div class="card-body">
              <span class="body">
                {{ journalData.art3?.body }}
              </span>
            </div>
          </div>
        </div>
    </div>
  </div>
</div>

</template>

<style scoped>
#newspaper {
  height: 1128px;
  width: 800px;
  background-color: white;
}

.journalTitle {
  font-size: 70px;
}

#journalHeader {
  height: 128px;
}

#mainPicture {
  background-size: cover;
  background-position: center;
  width: 80%;
  height: 980px;
}

.articles-aside {
  @apply pl-2;
  width: 20%;
}
.card {
  @apply border-b pb-2
}

.card-header {
  @apply font-semibold uppercase text-slate-700
}
</style>