<script setup>
import {onMounted, shallowRef} from "vue";
import NewsPaper from "@/components/NewsPaper.vue";
import NewsPaperForm from "@/components/NewsPaperForm.vue";

const journalData = shallowRef({
  header: "",
  art1: {
    title: "Exemple article 1",
    body: "Détails article 1 avev exemple "
  },
  art2: {
    title: "Test",
    body: ""
  },
  journalName: "TITRE DU JOURNAL"
});

const updateJournal = (newData) => {
  journalData.value = newData;
};
</script>

<template>
  <div class="app-container relative">
    <!-- Background video -->
    <video
        autoplay
        muted
        loop
        class="absolute top-0 left-0 w-full h-full object-cover -z-10"
    >
      <source src="@/assets/1722881-uhd_3840_2160_25fps.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <!-- Main content -->
    <main class="w-full flex justify-between relative">
      <NewsPaper class="w-1/2" :journalData="journalData" />
      <NewsPaperForm class="w-1/2" @updateJournal="updateJournal" />
    </main>
  </div>
</template>

<style scoped>
.app-container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

video {
  pointer-events: none;
}
</style>
