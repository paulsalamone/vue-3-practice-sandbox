<template>
  <h1>p5 1</h1>
  <div class="p5-container">
    <!-- <h3>{{ circleWidth.value }}</h3> -->
    <!-- <ToolsLeft :circleWidth="circleWidth" /> -->
    <!-- <div class="tools"> -->
    <!-- <form action="">
      <input
        type="range"
        min="1"
        max="500"
        :value="circleWidth.value"
        @change="handleWidth()"
      />
    </form> -->
    <Canvas2 />
  </div>
  <!-- <CanvasComponent1 :circleWidth="circleWidth" /> -->
  <!-- </div> -->
</template>

<script setup>
import CanvasComponent1 from "../projects/P51/CanvasComponent1.vue";
import Canvas2 from "../projects/P51/Canvas2.vue";

import { ref } from "vue";
const circleWidth = ref(300);
function handleWidth() {
  circleWidth.value = event.target.value;
  console.log(circleWidth);
}

// < input
// type="range"
// min="0"
// v-bind:max="max"
// v-bind:value="tmpVal"
// v-on:input=“onChg($event)”>

// onChg() {
// this.tmpVal = evt.target.value
// }
</script>

<style scoped>
.p5-container {
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-gap: 10px;
}
</style>
