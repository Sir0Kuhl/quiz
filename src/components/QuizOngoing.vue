<template>
  <div class="quiz-container">
    <h1>{{ quizName }}</h1>
    <h2>{{ questions[currentQuestion].question }}</h2>
    <ul class="quiz-answers">
      <QuizAnswer
        v-for="(answer, i) in questions[currentQuestion].answers"
        :key="i"
        :index="i"
        :answer="answer"
        :selectedAnswer="selectedAnswer"
        :rightAnswer="questions[currentQuestion].rightAnswer"
        :selectAnswer="selectAnswer"
      />
    </ul>
    <button
      id="continue-button"
      v-bind:class="{ active: this.selectedAnswer > -1 }"
      @click="nextAnswer()"
    >
      Nächste Frage
    </button>
  </div>
</template>

<script>
import QuizAnswer from "@/components/QuizAnswer.vue";

export default {
  name: "QuizOngoing",
  components: {
    QuizAnswer,
  },
  props: ["quizName", "questions", "quizFinished"],
  data() {
    return {
      currentQuestion: 0,
      selectedAnswer: -1,
      rightAnswers: 0,
    };
  },
  methods: {
    selectAnswer(index) {
      if (this.selectedAnswer > -1) {
        return;
      }
      this.selectedAnswer = index;
      if (index == this.questions[this.currentQuestion].rightAnswer) {
        this.rightAnswers++;
      }
    },
    nextAnswer() {
      let questionCount = this.questions.length;
      if (this.currentQuestion == questionCount - 1) {
        this.quizFinished(questionCount, this.rightAnswers);
        return;
      }

      this.selectedAnswer = -1;
      this.currentQuestion++;
    },
  },
};
</script>
