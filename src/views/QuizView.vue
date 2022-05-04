<template>
  <div class="quiz-page">
    <QuizOngoing
      v-if="quizOngoing && questions.length"
      :quizName="quizName"
      :questions="questions"
      :quizFinished="quizFinished"
    />
    <QuizFinished
      v-else-if="questions.length"
      :questionCount="questionCount"
      :rightAnswers="rightAnswers"
    />
    <div v-if="quizOngoing" class="bottom-button-container">
      <button class="back-button bottom" @click="route('/')">
        Zurück zur Quizauswahl
      </button>
    </div>
  </div>
</template>

<script>
import router from "@/router";

import QuizOngoing from "@/components/QuizOngoing.vue";
import QuizFinished from "@/components/QuizFinished.vue";
import quizzes from "@/assets/quizzes/quizzes.json";

export default {
  name: "QuizView",
  components: {
    QuizOngoing,
    QuizFinished,
  },
  props: ["selectedQuiz"],
  data() {
    return {
      quizOngoing: true,
      quizName: "",
      questions: [],
      questionCount: 0,
      rightAnswers: 0,
    };
  },
  methods: {
    quizFinished(questionCount, rightAnswers) {
      this.quizOngoing = false;
      this.questionCount = questionCount;
      this.rightAnswers = rightAnswers;
      console.log(
        "Quiz finished. " +
          rightAnswers +
          "/" +
          questionCount +
          " answers right."
      );
    },
    route(url) {
      router.push(url);
    },
  },
  mounted() {
    if (!Object.hasOwnProperty.call(quizzes, this.selectedQuiz)) {
      router.push("/");
      return;
    }
    this.quizName = quizzes[this.selectedQuiz].name;
    this.questions = quizzes[this.selectedQuiz].questions;
  },
};
</script>
