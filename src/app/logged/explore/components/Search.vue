<template>
  <div class="c-search">
    <input class="c-search_input" type="text" placeholder="Search for...">
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '@/assets/css/mixins/reset-elements.scss';
@import '@/assets/css/mixins/make-elements';
.c-search {
  padding: 16px 0;
  
  &_input {
    @include reset-input();
    @include make-input();
    width: 100%;
    padding-left: 5px;
    border-left: 3px solid black;
    color: #E6E6F0;
  }
}
</style>