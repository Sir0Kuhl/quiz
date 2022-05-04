<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/quiz">Quiz</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view :selectedQuiz="selectedQuiz" :selectQuiz="selectQuiz" />
</template>

<script>
import router from "@/router";

export default {
  data() {
    return {
      selectedQuiz: -1,
    };
  },
  methods: {
    selectQuiz(quizIndex) {
      this.selectedQuiz = quizIndex;
      router.push("/quiz");
    },
  },
};
</script>
