<template>
  <div>
    <button @click.prevent="toggleStartStop()">
      {{ toggleState ? "stop" : "start" }}
    </button>
    <button @click.prevent="toggleErase()">erase (not working)</button>
    <h2>{{ props.circleWidth }}</h2>
    <div id="vue-canvas"></div>
  </div>
</template>

<script setup>
import p5 from "p5";
import { onMounted, ref } from "vue";

// <button @click.prevent="toggleStartStop()">{{ toggleState }}</button>

const toggleState = ref(true);
function toggleStartStop() {
  toggleState.value = !toggleState.value;
}
const eraseState = ref(false);
function toggleErase() {
  eraseState.value = true;
}

onMounted(() => {
  let d = 1;

  const script = function (p5) {
    p5.setup = () => {
      const canvas = p5.createCanvas(500, 500);
      canvas.parent("vue-canvas");
      p5.background("black");
      p5.frameRate(100);
    };

    p5.draw = () => {
      //   graphic1();

      if (toggleState.value) {
        graphic2();
      }
    };

    function graphic2() {
      p5.stroke("white");
      p5.background(0, 1);
      //   p5.triangle(10, 490, 240, 0, 240, 490);

      //   challenge: make a random sized equilateral triangle with a random placement and three random stroke sides (note: not actually a triangle)

      const r1 = Math.random() * p5.height;
      const r2 = Math.random() * p5.height;
      const r3 = Math.random() * 3;

      const s = Math.random() * 300;
      p5.rotate(p5.PI / r3);

      // random color
      p5.stroke(
        Math.floor(Math.random() * 200) + 10,
        Math.floor(Math.random() * 170) + 10,
        Math.floor(Math.random() * 70) + 10
      );
      p5.strokeWeight(2 / r3 / 10);
      p5.line(r1, r2, r1 + s, r2);
      p5.strokeWeight(5 / r3 / 10);
      p5.line(r1 + s / 2, r2 - s, r1 + s, r2);
      p5.strokeWeight(10 / r3 / 10);
      p5.line(r1 + s / 2, r2 - s, r1, r2);

      if (eraseState.value) {
        p5.background(0);
      }
      if (eraseState.value) {
        p5.background(0);
      }
    }

    function randomTri() {}

    function graphic1() {
      const r1 = Math.random() * p5.height;
      const r2 = Math.random() * p5.height;
      const r3 = Math.random() * 2;
      p5.noFill();
      p5.rotate(p5.PI / (r3 / 10));
      p5.strokeWeight(0.3 * r3);
      p5.stroke("white");

      p5.triangle(10, 490, 240, 0 + r1, 240, 490);

      p5.stroke("red");
      p5.triangle(260, 490, 260, 0 + r2, 490, 490);

      d += 10;
      if (d > 500) {
        d = 0;
      }
    }
  };

  const P5 = p5;
  new P5(script);
});
const props = defineProps({
  circleWidth: Number,
});
</script>

<style scoped>
#vue-canvas {
  /* display: block;
  margin: 0 auto;
  padding: 0; */
  width: 500px;
  height: 500px;
  overflow: hidden;
}
</style>
