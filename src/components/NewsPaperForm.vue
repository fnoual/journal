<script setup>
import {onMounted, ref, watch} from "vue";

const emit = defineEmits(["updateJournal"]);

const journalData = ref({
  header: "",
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

watch(journalData, (newValue) => {
  emit('updateJournal', newValue);
}, {deep: true});

const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
].map(img => new URL(`../assets/photos/${img}`, import.meta.url).href);

const fonts = [
  {
    "name" :"Old London",
    "label" :"Gothique 1",
  },
  {
    "name" :"Enchanted Land",
    "label" :"Gothique 1",
  },
  {
    "name" :"Cloister Black",
    "label" :"Gothique 2",
  },
  {
    "name" :"Deutsch Gothic",
    "label" :"Gras",
  },
  {
    "name" :"Typewriter",
    "label" :"Machine a écrire",
  },
]

const changeImage = (imageUrl, imageNumber) => {
  switch (imageNumber) {
    case 1:
      journalData.value.image1 = imageUrl;
      break;
    case 2:
      journalData.value.image2 = imageUrl;
      break;
    case 3:
      journalData.value.image3 = imageUrl;
      break;
    default:
      console.error(`Invalid imageNumber: ${imageNumber}`);
  }
};
</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <form class="flex flex-col w-3/4">
      <img src="@/assets/photos/header.png" alt="">
      <h3 class="text-6xl text-white text-gothic uppercase mb-4">Créez votre journal</h3>
      <div class="mb-4">
        <label class="block text-white text-sm font-bold mb-2" for="username">
          Nom du journal
        </label>
        <input type="text"
               class="input-form"
               v-model="journalData.journalName" placeholder="Journal Name">
      </div>
      <div class="mb-4">
        <label class="block text-white text-sm font-bold mb-2" for="username">
          En-tête
        </label>
        <input type="text"
               class="input-form"
               v-model="journalData.header" placeholder="En-tête">
      </div>
      <div class="mb-4">
        <label class="block text-white text-sm font-bold mb-2" for="username">
          Police d'écriture
        </label>
        <select
               class="input-form"
               v-model="journalData.journalFont">
              <option v-for="font in fonts" :key="font" :value="font.name">{{ font.label }}</option>/
        </select>
      </div>
      <div class="mb-4">
        <label class="block text-white text-sm font-bold mb-2" for="username">
          Titre du premier article
        </label>
        <input type="text"
               class="input-form"
               v-model="journalData.art1.title" placeholder="Art1 Title">
      </div>
      <div class="mb-4">
        <label class="block text-white text-sm font-bold mb-2" for="username">
          Premier article
        </label>
        <textarea
            class="input-form"
            v-model="journalData.art1.body"
            placeholder="Art1 Title"></textarea>
      </div>

      <div class="flex flex-col gap-2 mb-4">
        <div class="flex flex-row w-full items-between">
          <div
              v-for="image in images"
              :key="image"
              class="thumbnail"
              :style="{ backgroundImage: `url(${image})` }"
              @click="changeImage(image, 1)"
          ></div>
        </div>
        <div class="flex flex-row w-full items-between">
          <div
              v-for="image in images"
              :key="image"
              class="thumbnail"
              :style="{ backgroundImage: `url(${image})` }"
              @click="changeImage(image, 2)"
          ></div>
        </div>
        <div class="flex flex-row w-full items-between">
          <div
              v-for="image in images"
              :key="image"
              class="thumbnail"
              :style="{ backgroundImage: `url(${image})` }"
              @click="changeImage(image, 3)"
          ></div>
        </div>
      </div>

      <button class="input-form">
        ENREGISTRER
      </button>

      <img src="@/assets/photos/footer.png" class="self-end mt-8" style="width: 30%" alt="">
    </form>
  </div>
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

.input-form {
  @apply appearance-none w-full p-4 bg-violette-700;
  color: white;
}

.input-form:focus {
  @apply border border-slate-700
}
</style>
