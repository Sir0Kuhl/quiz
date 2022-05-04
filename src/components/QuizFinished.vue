<template>
  <div class="quiz-finished">
    <h1>Quiz beendet</h1>
    <p>
      Geschafft!<br />
      {{ rightAnswers }} / {{ questionCount }}
      Antworten hast du richtig beantwortet!
    </p>
    <button class="back-button" @click="route('/')">
      Zurück zur Quizauswahl
    </button>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "QuizFinished",
  props: ["questionCount", "rightAnswers"],
  methods: {
    route(url) {
      router.push(url);
    },
  },
};
</script>
