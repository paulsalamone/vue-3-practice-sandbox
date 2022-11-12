<template>
  <div class="app-container">
    <!-- HEADER -->
    <header>
      <div class="top-bar">
        <h1>vue 3 practice</h1>
        <button class="nav-toggle" @click.prevent="handleToggle()">
          show nav
        </button>
      </div>
      <!-- NAV / ROUTES -->
      <nav v-if="toggle">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/p5-1">p5-1</router-link>
      </nav>
    </header>
    <!-- MAIN -->
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";

// METHODS
const toggle = ref(true);

const handleToggle = () => {
  // alert("Moin!");
  toggle.value = !toggle.value;
};
</script>

<style scoped src="./styles/app.css"></style>
