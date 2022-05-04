<template>
  <div class="quiz-finished">
    <h1>Quiz beendet</h1>
    <p>
      Geschafft!<br />
      {{ rightAnswers }} / {{ questionCount }}
      Antworten hast du richtig beantwortet!
    </p>
  </div>
</template>

<script>
export default {
  name: "QuizFinished",
  props: ["questionCount", "rightAnswers"],
};
</script>
