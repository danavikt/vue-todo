<template>
  <div id="app">
    <AppHeader :date="headerDate">My Day!</AppHeader>
    <div class="todo-list">
      <ul class="todo-list__list"></ul>
      {{newTodo}}
      <TodoInput v-model="newTodo"/>
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import TodoInput from "@/components/TodoInput";
export default {
  name: "App",
  components: {
    AppHeader,
    TodoInput
  },
  data: () => ({
    newTodo: null,
    headerDate: new Date("2018,10,5")
  })
};
</script>

<style lang="scss">
.todo-list {
  padding: 30px 15px;

  &__list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  &__item {
    width: 100%;
    border: 1px solid rgba(black, 0.51);
    border-radius: 10px;
    padding: 15px;
  }
}
</style>
