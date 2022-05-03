<template>
  <li
    v-bind:class="{
      rightAnswer: index == selectedAnswer && index == rightAnswer,
      wrongAnswer: index == selectedAnswer && index != rightAnswer,
    }"
    @click="selectAnswer(index)"
  >
    {{ answer }}
  </li>
</template>

<script>
export default {
  props: ["index", "answer", "selectedAnswer", "rightAnswer", "selectAnswer"],
};
</script>
