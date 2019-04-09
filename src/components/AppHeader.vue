<template>
  <header class="app-header">
    <div class="app-header__container">
      <h1 class="app-header__headline">
        <slot/>
      </h1>
      <h3 class="app-header__subtitle">{{ date.toLocaleDateString() }}</h3>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  props: {
    date: {
      type: Date,
      default: () => new Date()
    }
  }
};
</script>

<style lang="scss">
.app-header {
  height: 200px;
  background-color: royalblue;
  width: 100%;
  display: flex;
  align-items: flex-end;

  &__container {
    padding: 0 15px;
  }

  &__headline,
  &__subtitle {
    margin: 0;
    padding: 0;
    padding-bottom: 7.5px;
    color: white;
  }
}
</style>
