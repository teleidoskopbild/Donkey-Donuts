<template>
  <div class="p-4 mb-30">
    <h1 class="text-2xl font-bold mb-4 text-center">Donuts</h1>
    <div class="flex flex-wrap justify-center gap-4">
      <div
        v-for="donut in donuts"
        :key="donut.id"
        class="w-40 md:w-48 lg:w-56 text-center"
      >
        <img
          :src="donut.image"
          :alt="donut.name"
          :title="donut.description"
          class="donut-img w-full h-auto transition-transform duration-300 hover:scale-110"
        />
        <h2 class="text-lg font-semibold mt-2">{{ donut.name }}</h2>
        <p class="text-sm text-gray-600">{{ donut.category }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import donutsData from "../data/donuts.json";

export default {
  name: "Donuts",
  data() {
    return {
      donuts: donutsData,
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

.donut-img:hover {
  animation: wiggle 1.75s ease-in-out infinite;
}
</style>
