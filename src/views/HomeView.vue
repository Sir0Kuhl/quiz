<template>
  <div class="home">
    <h1>Wähle ein Quiz</h1>
    <ul class="choose-quiz">
      <li v-for="(quiz, i) in quizList" :key="i" @click="selectQuiz(i)">
        {{ quiz }}
      </li>
    </ul>
  </div>
</template>

<script>
import quizzes from "@/assets/quizzes/quizzes.json";

export default {
  name: "HomeView",
  props: ["selectQuiz"],
  data() {
    return {
      quizList: [],
    };
  },
  mounted() {
    console.log(Object.values(quizzes));
    for (let i in quizzes) {
      this.quizList.push(quizzes[i].name);
    }
  },
};
</script>
