<template>
  <div class="c-footer">
    <button class="c-footer_button">View more</button>
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
  text-align: center;
  padding-top: 10px;
  &_button {
    width: 120px;
    @include reset-button();
    @include make-button();
  }
}
</style>