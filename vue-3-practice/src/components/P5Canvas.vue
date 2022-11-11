<template>
  <div class="canvas-container">
    <h2>{{ canvasName }}</h2>
    <button @click.prevent="handleAlert()">alert</button>
    <Sketch class="box" :setup="{ setupFunction }" draw="{draw}" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import p5 from "p5";
import { Sketch } from "p5";
import { setup as setupP5, canvas, createCanvas } from "p5";

function setupFunction() {
  createCanvas(400, 400);
}

function draw() {
  p5.background(220);
  p5.ellipse(50, 50, 80, 80);
}

const canvasName = ref("p5 canvas");

const handleAlert = () => {
  alert("Good morning!");
};
</script>

<style>
.canvas-container {
  padding: 5px;
  margin: 5px;
  border: 2px dotted #323232;
}

.box {
  padding: 5px;
  margin: 5px;
  border: 1px dotted #545454;
}
</style>
