<template>
  <div class="p-4 m-16">
    <h1 class="text-2xl font-bold mb-4 text-center">Warm Beverages</h1>
    <div class="flex flex-wrap justify-center gap-4">
      <div
        v-for="warmBeverage in warmBeverages"
        :key="warmBeverage.id"
        class="w-40 md:w-48 lg:w-56 text-center"
      >
        <img
          :src="warmBeverage.image"
          :alt="warmBeverage.name"
          :title="warmBeverage.description"
          class="warmBeverage-img w-full h-auto transition-transform duration-300 hover:scale-110"
        />
        <h2 class="text-lg font-semibold mt-2">{{ warmBeverage.name }}</h2>
        <p class="text-sm text-gray-600">{{ warmBeverage.category }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import warmBeveragesData from "../data/warmBeverages.json";

export default {
  name: "warmBeverages",
  data() {
    return {
      warmBeverages: warmBeveragesData,
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

.warmBeverage-img:hover {
  animation: wiggle 1.75s ease-in-out infinite;
}
</style>
