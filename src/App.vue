<script setup>
import {onMounted, shallowRef} from "vue";
import NewsPaper from "@/components/NewsPaper.vue";
import NewsPaperForm from "@/components/NewsPaperForm.vue";

const journalData = shallowRef({
  header: "",
  journalFont: 'Old London',
  art1: {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing el",
    body: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
  },
  art2: {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing el",
    body: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
  },
  art3: {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing el",
    body: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
  },
  art4: {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing el",
    body: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
  },
  journalName: "Titre Du Journal"
});

const updateJournal = (newData) => {
  journalData.value = newData;
};
</script>

<template>
  <main class="w-full flex justify-between relative">
    <NewsPaper class="w-1/2" :journalData="journalData" />
    <NewsPaperForm class="w-1/2" @updateJournal="updateJournal" />
  </main>
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
