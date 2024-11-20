<script setup>
import {onMounted, ref, watch} from "vue";

const emit = defineEmits(["updateJournal"]);

const journalData = ref({
  header: "",       // Assurez-vous que chaque propriété est définie
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
  <div class="flex flex-col justify-center items-center">
    <form class="flex flex-col w-3/4">
      <h3 class="text-6xl font-black text-gothic uppercase mb-4">Créez votre journal</h3>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
          Nom du journal
        </label>
        <input type="text"
               class="input-form"
               v-model="journalData.journalName" placeholder="Journal Name">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
          En-tête
        </label>
        <input type="text"
               class="input-form"
               v-model="journalData.header" placeholder="En-tête">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
          Titre du premier article
        </label>
        <input type="text"
               class="input-form"
               v-model="journalData.art1.title" placeholder="Art1 Title">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
          Premier article
        </label>
        <textarea
               class="input-form"
               v-model="journalData.art1.body"
               placeholder="Art1 Title"></textarea>
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
  @apply appearance-none w-full p-4 bg-slate-700;
  color: white;
}

.input-form:focus {
  @apply border border-slate-700
}
</style>
