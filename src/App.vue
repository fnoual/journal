<script setup>
import {shallowRef} from "vue";
import NewsPaper from "@/components/NewsPaper.vue";
import NewsPaperForm from "@/components/NewsPaperForm.vue";

const journalData = shallowRef({})

const updateJournal = (newData) => {
  journalData.value = newData;
}

</script>

<template>
  <main class="w-full flex justify-between">
    <NewsPaper class="w-1/2" :journalData="journalData" />

    <NewsPaperForm class="w-1/2" @updateJournal="updateJournal" />
  </main>
</template>

<style scoped>

</style>
