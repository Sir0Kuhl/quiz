<template>
  <div class="home">
    <h1>{{ questions[currentQuestion].question }}</h1>
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
// @ is an alias to /src
import QuizAnswer from "@/components/QuizAnswer.vue";
import quiz1 from "@/assets/quizzes/quiz1.json";

export default {
  name: "HomeView",
  components: {
    QuizAnswer,
  },
  data() {
    return {
      questions: quiz1,
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
      let questionCount = Object.keys(this.questions).length;
      if (this.currentQuestion == questionCount - 1) {
        console.log(
          "Alle Fragen beantwortet. " +
            this.rightAnswers +
            "/" +
            questionCount +
            " right."
        );
        return;
      }

      this.selectedAnswer = -1;
      this.currentQuestion++;
    },
  },
};
</script>
