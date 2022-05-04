<template>
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
  watch: {
    $route(to, from) {
      if (from.path === "/quiz") {
        this.selectedQuiz = -1;
      }
    },
  },
};
</script>
