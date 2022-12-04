<template>
  <div class="app-container">
    <!-- HEADER -->
    <header>
      <div class="top-bar">
        <h1>Vue3 practice</h1>
        <button class="nav-toggle" @click.prevent="handleNavToggle()">
          {{ navCommand }} nav
        </button>
      </div>
      <!-- NAV / ROUTES -->
      <nav v-if="navToggle">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/p5-1">p5-1</router-link>
        <router-link to="/muse1">Muse 1</router-link>
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

    const navToggle = ref(true);
    const navCommand = ref("hide");
    const handleNavToggle = () => {
      navToggle.value = !navToggle.value;
      navToggle.value
        ? (navCommand.value = "hide")
        : (navCommand.value = "show");
    };

    return { handleNavToggle, navToggle, navCommand };
  },
};
</script>

<style scoped src="./styles/app.css"></style>
