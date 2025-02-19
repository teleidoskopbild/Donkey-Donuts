<template>
  <div class="p-4 mb-30">
    <h1 class="text-2xl font-bold mb-4 text-center">Cookies</h1>
    <div class="flex flex-wrap justify-center gap-4">
      <div
        v-for="cookie in cookies"
        :key="cookie.id"
        class="w-40 md:w-48 lg:w-56 text-center"
      >
        <img
          :src="cookie.image"
          :alt="cookie.name"
          :title="cookie.description"
          class="cookie-img w-full h-auto transition-transform duration-300 hover:scale-110"
        />
        <h2 class="text-lg font-semibold mt-2">{{ cookie.name }}</h2>
        <p class="text-sm text-gray-600">{{ cookie.category }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import cookiesData from "../data/cookies.json";

export default {
  name: "Cookies",
  data() {
    return {
      cookies: cookiesData,
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

.cookie-img:hover {
  animation: wiggle 1.75s ease-in-out infinite;
}
</style>
