<template>
  <header class="c-title">
    <h3 class="c-title_user">Hey {{ name }}</h3>
    <h1 class="c-title_explore">Explore Courses</h1>
  </header>
</template>

<script>
export default {
  data() {
    return {
      name: 'Ussuy'
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/css/mixins/text.scss';
.c-title {
  &_explore {
    @include make-subtitle();
  }
  &_user {
    @include make-label();
    margin-bottom: 20px;
  }
}
</style>