<template>
  <div class="c-footer">
    <router-link class="c-footer_button c-footer_button--more" to="/logged/courses" tag="button">View more</router-link>
    <router-link class="c-footer_button c-footer_button--mycourses" to="/logged/courses" tag="button">My courses</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '@/assets/css/mixins/reset-elements.scss';
@import '@/assets/css/mixins/make-elements';
.c-footer {
  width: 100%;
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  &_button {
    width: 120px;
    @include reset-button();
    @include make-button();
  }
}
</style>