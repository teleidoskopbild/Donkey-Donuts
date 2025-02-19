<template>
  <div id="app">
    <!-- Preloader -->
    <div
      v-if="loading"
      class="fixed inset-0 bg-blue-500 flex justify-center items-center text-white text-2xl z-50"
    >
      Loading...
    </div>

    <div v-else>
      <nav class="bg-blue-500 p-6">
        <!-- Normale Navigation für größere Bildschirme -->
        <div class="flex items-center">
          <span class="hidden md:block text-2xl text-white font-bold">
            Donkey Donuts
          </span>
          <ul
            class="hidden md:flex space-x-6 justify-center text-white text-xl absolute left-1/2 transform -translate-x-1/2"
          >
            <!-- <li>
              <router-link to="/" class="hover:font-bold">Home</router-link>
            </li> -->
            <li>
              <router-link to="/donuts" class="hover:font-bold"
                >Donuts</router-link
              >
            </li>
            <li>
              <router-link to="/rolls" class="hover:font-bold"
                >Rolls</router-link
              >
            </li>
            <li>
              <router-link to="/cookies" class="hover:font-bold"
                >Cookies</router-link
              >
            </li>
            <li>
              <router-link to="/cold-drinks" class="hover:font-bold"
                >Cold Drinks</router-link
              >
            </li>
            <li>
              <router-link to="/warm-beverages" class="hover:font-bold"
                >Warm Beverages</router-link
              >
            </li>
          </ul>
        </div>

        <!-- Hamburger Button für kleine Bildschirme -->
        <div class="flex items-center justify-between">
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
            <div
              v-if="isOpen"
              class="w-7 h-1 bg-white transform -rotate-45"
            ></div>
          </button>
          <span
            class="md:hidden text-2xl text-white font-bold absolute left-1/2 transform -translate-x-1/2"
          >
            Donkey Donuts
          </span>
        </div>

        <!-- Dropdown Menu für kleine Bildschirme -->
        <ul v-if="isOpen" class="md:hidden text-center mt-4">
          <!-- <li>
            <router-link
              to="/"
              class="block py-2 px-4 text-white hover:font-bold"
              @click="toggleMenu"
              >Home</router-link
            >
          </li> -->
          <li>
            <router-link
              to="/donuts"
              class="block py-2 px-4 text-white hover:font-bold"
              @click="toggleMenu"
              >Donuts</router-link
            >
          </li>
          <li>
            <router-link
              to="/rolls"
              class="block py-2 px-4 text-white hover:font-bold"
              @click="toggleMenu"
              >Rolls</router-link
            >
          </li>
          <li>
            <router-link
              to="/cookies"
              class="block py-2 px-4 text-white hover:font-bold"
              @click="toggleMenu"
              >Cookies</router-link
            >
          </li>
          <li>
            <router-link
              to="/cold-drinks"
              class="block py-2 px-4 text-white hover:font-bold"
              @click="toggleMenu"
              >Cold Drinks</router-link
            >
          </li>
          <li>
            <router-link
              to="/warm-beverages"
              class="block py-2 px-4 text-white hover:font-bold"
              @click="toggleMenu"
              >Warm Beverages</router-link
            >
          </li>
        </ul>
      </nav>

      <router-view />
    </div>
    <footer class="bg-blue-500 p-10 fixed bottom-0 w-full text-white">
      <div class="flex justify-between" @click="toggleLocations">
        <div>
          <h3 class="text-xl font-bold">Donkey Donuts</h3>
          <p>The best donuts in town!</p>
        </div>

        <div
          class="flex items-center cursor-pointer absolute left-1/2 transform -translate-x-1/2"
        >
          <ul>
            <li class="text-center">
              {{ locationsVisible ? "" : "Our Locations: Click here!" }}
            </li>
            <li class="">
              {{
                locationsVisible
                  ? ""
                  : "2025 Donkey Donuts | All Rights Reserved"
              }}
            </li>
          </ul>
        </div>
        <div v-if="locationsVisible" class="-mt-6">
          <ul class="text-center fixed left-1/2 transform -translate-x-1/2">
            <li>Main Street 15, Berlin</li>
            <li>Donut Way 12, Hamburg</li>
            <li>Donut Street 45, Munich</li>
            <li class="mt-2">2025 Donkey Donuts | All Rights Reserved</li>
          </ul>
        </div>
        <div>
          <ul class="flex space-x-4">
            <li><a href="#" class="text-white font-bold">Follow Us:</a></li>
            <li><a href="#" class="text-white">Facebook</a></li>
            <li><a href="#" class="text-white">Instagram</a></li>
            <li><a href="#" class="text-white">Twitter</a></li>
          </ul>
        </div>
      </div>

      <!-- Toggle locations visibility -->
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isOpen: false,
      loading: true,
      locationsVisible: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    toggleLocations() {
      this.locationsVisible = !this.locationsVisible;
    },
  },
  mounted() {
    const images = [
      "/images/cold/cold1.jpg",
      "/images/cold/cold2.jpg",
      "/images/cold/cold3.jpg",
      "/images/cold/cold4.jpg",
      "/images/warm/warm1.jpg",
      "/images/warm/warm2.jpg",
      "/images/cookies/cookie1.jpg",
      "/images/cookies/cookie2.jpg",
      "/images/cookies/cookie3.jpg",
      "/images/cookies/cookie4.jpg",
      "/images/cookies/cookie5.jpg",
      "/images/cookies/cookie6.jpg",
      "/images/cookies/cookie7.jpg",
      "/images/cookies/cookie8.jpg",
      "/images/cookies/cookie9.jpg",
      "/images/cookies/cookie10.jpg",
      "/images/cookies/cookie11.jpg",
      "/images/donuts/d1.jpg",
      "/images/donuts/d2.jpg",
      "/images/donuts/d3.jpg",
      "/images/donuts/d4.jpg",
      "/images/donuts/d5.jpg",
      "/images/donuts/d6.jpg",
      "/images/donuts/d7.jpg",
      "/images/donuts/d8.jpg",
      "/images/donuts/d9.jpg",
      "/images/donuts/d10.jpg",
      "/images/donuts/d11.jpg",
      "/images/donuts/d12.jpg",
      "/images/donuts/d13.jpg",
      "/images/donuts/d14.jpg",
      "/images/donuts/d15.jpg",
      "/images/donuts/d16.jpg",
      "/images/donuts/d17.jpg",
      "/images/donuts/d18.jpg",
      "/images/donuts/d19.jpg",
      "/images/donuts/d20.jpg",
      "/images/rolls/r1.jpg",
      "/images/rolls/r2.jpg",
      "/images/rolls/r3.jpg",
      "/images/rolls/r4.jpg",
      "/images/rolls/r5.jpg",
      "/images/rolls/r6.jpg",
      "/images/rolls/r7.jpg",
    ];

    let loadedImages = 0;

    images.forEach((imgSrc) => {
      const img = new Image();
      img.src = imgSrc;
      img.onload = () => {
        loadedImages++;
        console.log(`Loading: ${imgSrc}`);
        if (loadedImages === images.length) {
          console.log("All images loaded.");
          this.loading = false;
        }
      };
    });
  },
};
</script>

<style scoped></style>
