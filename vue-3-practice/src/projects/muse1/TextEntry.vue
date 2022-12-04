<template>
  <div>
    <div>text entry</div>
    <form action="" @submit.prevent="handleSubmit()">
      <input type="text" name="" id="" v-model="textInput" /><button
        type="submit"
      >
        submit
      </button>
    </form>
    <p v-for="(result, index) in results1Verbs" :key="index">{{ result }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

// text entry stuff
const textInput = ref("");
const query = ref("");

// api stuff
const results1 = ref(null);
const results1Verbs = ref([]);
const results2 = ref(null);

function handleSubmit() {
  query.value = textInput.value;
  textInput.value = "";
  APIfetch1(query.value, "trg");
  APIfetch1(query.value, "bgb");

  //   now we send the query to the api and then process the results somewhere
}

async function APIfetch1(query, param) {
  await axios
    .get(`https://api.datamuse.com/words?rel_${param}=${query}&md=p`)
    .then((response) => {
      results1.value = response.data;
    })
    .catch((error) => {
      console.log(error);
    });

  processResults1();
}

function processResults1() {
  console.log(results1.value);
  //   const verbs1 = [];
  for (let i = 0; i < results1.value.length; i++) {
    const word = results1.value[i].word;
    const pos = { ...results1.value[i].tags };
    console.log(`${word} has pos of ${Object.values(pos)}!`);

    // add actual RITA VALIDATION OF VERBS HERE!
    if (
      Object.values(pos).indexOf("v") > -1 &&
      !(Object.values(pos).indexOf("prop") > -1) &&
      !(Object.values(pos).indexOf("adv") > -1)
    ) {
      console.log(`${word} is a verb!`);
      results1Verbs.value.push(word);
    }
  }
}
</script>

<style></style>
