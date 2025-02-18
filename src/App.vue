<template>
  <div id="app">
    <nav class="bg-blue-500 p-6">
      <!-- Normale Navigation für größere Bildschirme -->
      <ul class="hidden md:flex space-x-6 justify-center text-white text-xl">
        <li>
          <router-link to="/" class="hover:text-gray-400">Home</router-link>
        </li>
        <li>
          <router-link to="/donuts" class="hover:text-gray-400"
            >Donuts</router-link
          >
        </li>
        <li>
          <router-link to="/rolls" class="hover:text-gray-400"
            >Rolls</router-link
          >
        </li>
        <li>
          <router-link to="/cookies" class="hover:text-gray-400"
            >Cookies</router-link
          >
        </li>
        <li>
          <router-link to="/cold-drinks" class="hover:text-gray-400"
            >Cold Drinks</router-link
          >
        </li>
        <li>
          <router-link to="/warm-beverages" class="hover:text-gray-400"
            >Warm Beverages</router-link
          >
        </li>
      </ul>

      <!-- Hamburger Button für kleine Bildschirme -->
      <button @click="toggleMenu" class="md:hidden text-white">
        <!-- Hamburger -->
        <div v-if="!isOpen" class="w-6 h-1 bg-white mb-1"></div>
        <div v-if="!isOpen" class="w-6 h-1 bg-white mb-1"></div>
        <div v-if="!isOpen" class="w-6 h-1 bg-white mb-1"></div>

        <!-- (X) -->
        <div
          v-if="isOpen"
          class="w-7 h-1 bg-white transform rotate-45 -mb-1"
        ></div>
        <div v-if="isOpen" class="w-7 h-1 bg-white transform -rotate-45"></div>
      </button>

      <!-- Dropdown Menu für kleine Bildschirme -->
      <ul v-if="isOpen" class="md:hidden text-center mt-4">
        <li>
          <router-link
            to="/"
            class="block py-2 px-4 text-white"
            @click="toggleMenu"
            >Home</router-link
          >
        </li>
        <li>
          <router-link
            to="/donuts"
            class="block py-2 px-4 text-white"
            @click="toggleMenu"
            >Donuts</router-link
          >
        </li>
        <li>
          <router-link
            to="/rolls"
            class="block py-2 px-4 text-white"
            @click="toggleMenu"
            >Rolls</router-link
          >
        </li>
        <li>
          <router-link
            to="/cookies"
            class="block py-2 px-4 text-white"
            @click="toggleMenu"
            >Cookies</router-link
          >
        </li>
        <li>
          <router-link
            to="/cold-drinks"
            class="block py-2 px-4 text-white"
            @click="toggleMenu"
            >Cold Drinks</router-link
          >
        </li>
        <li>
          <router-link
            to="/warm-beverages"
            class="block py-2 px-4 text-white"
            @click="toggleMenu"
            >Warm Beverages</router-link
          >
        </li>
      </ul>
    </nav>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isOpen: false, // Zustand des Menüs
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen; // Menü öffnen oder schließen
    },
  },
};
</script>

<style scoped></style>
