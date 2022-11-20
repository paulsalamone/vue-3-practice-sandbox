<template>
  <div>
    <h2>{{ props.circleWidth }}</h2>
    <div id="vue-canvas"></div>
  </div>
</template>

<script setup>
import p5 from "p5";
import { onMounted } from "vue";

onMounted(() => {
  const script = function (p5) {
    p5.setup = () => {
      const canvas = p5.createCanvas(500, 500);
      canvas.parent("vue-canvas");
    };

    // let spacer = 1;

    p5.draw = () => {
      p5.background(5);
      p5.fill(66, 124, 31);
      p5.stroke(270);
      p5.strokeWeight(10);

      p5.ellipse(250, 250, props.circleWidth, props.circleWidth);

      //   spacer++;
      //   if (spacer > 500) {
      //     spacer = 0;
      //   }
    };
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
