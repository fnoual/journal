<script setup>
import { ref} from "vue";

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
    <div class="bg-black h-full" :style="{ backgroundImage: `url(${props.journalData.image})` }" id="mainPicture">

    </div>
  </div>
</div>
</template>

<style scoped>
#newspaper {
  height: 1128px;
  width:  800px;

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
.demo {
  font-weight: 700;
}
</style>