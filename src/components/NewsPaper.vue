<script setup>
import { ref } from "vue";

const props = defineProps(['journalData'])

const now = ref(new Date().toLocaleDateString())

</script>

<template>
  <div class="border border-black mx-auto p-2 mt-4" id="newspaper">
    <div class="h-full">
      <div class="bg-white w-full flex flex-col text-center" id="journalHeader">
        <span class="journalTitle">
          {{ journalData.journalName }}
        </span>
        <small>{{ now }} ○ Alger</small>
      </div>
      <div class="flex justify-between">
        <div class="bg-black h-full" :style="{ backgroundImage: `url(${props.journalData.image})` }" id="mainPicture">

        </div>
        <div class="articles-aside">
          <div class="card">
            <div class="card-header">
              {{ journalData.art1.title }}
            </div>
            <div class="card-body">
              <span class="body">
                {{ journalData.art1.body }}
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

}

.journalTitle {
  font-size: 70px;
  font-family: "Carrois Gothic SC", sans-serif !important;
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

.demo {
  font-weight: 700;
}

.articles-aside {
  @apply pl-2
}
.card {
  @apply border-b pb-2
}

.card-header {
  @apply font-semibold uppercase text-gray-400 text-gothic
}
</style>