<script setup>
import {onMounted, ref, watch} from "vue";

const emit = defineEmits(["updateJournal"]);

const journalData = ref({
  header: "",       // Assurez-vous que chaque propriété est définie
  art1: {
    title: ""
  },
  art2: {
    title: ""
  },
  journalName: "TITRE DU JOURNAL"
});

onMounted(() => {
  emit('updateJournal', journalData);
})

watch(journalData, (newValue) => {
  emit('updateJournal', newValue);
}, {deep: true});

const images = [
  "algiers.jpg",
  "door.jpg",
  "ny.jpg",
  "oran.jpg",
  "port.jpg",
].map(img => new URL(`../assets/photos/${img}`, import.meta.url).href);

const changeImage = (imageUrl) => {
  journalData.value.image = imageUrl;
};
</script>

<template>
  <form class="flex flex-col">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input type="text"
             class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
             v-model="journalData.header" placeholder="Header">
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input type="text"
             class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
             v-model="journalData.art1.title" placeholder="Art1 Title">
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input type="text"
             class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
             v-model="journalData.art2.title" placeholder="Art2 Title">
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input type="text"
             class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
             v-model="journalData.journalName" placeholder="Journal Name">
    </div>

    <div class="image-list mb-4">
      <div
          v-for="image in images"
          :key="image"
          class="thumbnail"
          :style="{ backgroundImage: `url(${image})` }"
          @click="changeImage(image)"
      ></div>
    </div>
  </form>
</template>

<style scoped>
.image-list {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
}

.thumbnail {
  width: 100px;
  height: 100px;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  border: 2px solid black;
  border-radius: 4px;
  transition: transform 0.2s;
}

.thumbnail:hover {
  transform: scale(1.1);
}
</style>
