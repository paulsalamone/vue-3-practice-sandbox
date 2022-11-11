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
        <router-link to="/about">About</router-link>
      </nav>
    </header>
    <!-- MAIN -->
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onActivated,
  onDeactivated,
  onErrorCaptured,
} from "vue";

import { ref } from "vue";

export default {
  components: {},
  setup() {
    // HOOKS
    onBeforeMount(() => {
      console.log("Before Mount!");
    });
    onMounted(() => {
      console.log("Mounted!");
    });
    onBeforeUpdate(() => {
      console.log("Before Update!");
    });
    onUpdated(() => {
      console.log("Updated!");
    });
    onBeforeUnmount(() => {
      console.log("Before Unmount!");
    });
    onUnmounted(() => {
      console.log("Unmounted!");
    });
    onActivated(() => {
      console.log("Activated!");
    });
    onDeactivated(() => {
      console.log("Deactivated!");
    });
    onErrorCaptured(() => {
      console.log("Error Captured!");
    });

    // METHODS

    const toggle = ref(true);

    const handleToggle = () => {
      // alert("Moin!");
      toggle.value = !toggle.value;
    };

    return { handleToggle, toggle };
  },
};
</script>

<style scoped src="./styles/app.css"></style>
