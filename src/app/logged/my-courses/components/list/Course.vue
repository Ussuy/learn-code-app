<template>
  <div class="c-course">
    <p class="c-course_name">{{ course.name }}</p>
  </div>
</template>

<script>
export default {
  props: {
    course: {required: true}
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/mixins/make-elements';
@import '@/assets/css/mixins/alignment';
.c-course {
  width: 120px;
  height: 120px;
  background-color: #E6E6F0;
  border-radius: 4px;
  @include align-2d();
  &_name {
    text-align: center;
    @include make-subtitle();
  }
}
</style>