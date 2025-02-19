<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4 text-center">Rolls</h1>
    <div class="flex flex-wrap justify-center gap-4">
      <div
        v-for="roll in rolls"
        :key="roll.id"
        class="w-40 md:w-48 lg:w-56 text-center"
      >
        <img
          :src="roll.image"
          :alt="roll.name"
          :title="roll.description"
          class="roll-img w-full h-auto transition-transform duration-300 hover:scale-110"
        />
        <h2 class="text-lg font-semibold mt-2">{{ roll.name }}</h2>
        <p class="text-sm text-gray-600">{{ roll.category }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import rollsData from "../data/rolls.json";

export default {
  name: "Rolls",
  data() {
    return {
      rolls: rollsData,
    };
  },
};
</script>

<style scoped>
@keyframes wiggle {
  0%,
  100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(3deg);
  }
  50% {
    transform: rotate(-3deg);
  }
  75% {
    transform: rotate(3deg);
  }
}

.roll-img:hover {
  animation: wiggle 1.75s ease-in-out infinite;
}
</style>
