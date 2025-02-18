<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/donuts">Donuts</router-link></li>
        <li><router-link to="/cold-drinks">Cold Drinks</router-link></li>
        <li><router-link to="/warm-beverages">Warm Beverages</router-link></li>
        <li><router-link to="/rolls">Rolls</router-link></li>
        <li><router-link to="/cookies">Cookies</router-link></li>
      </ul>
    </nav>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
