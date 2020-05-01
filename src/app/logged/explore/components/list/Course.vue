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

<style lang="scss">
@import '@/assets/css/mixins/text.scss';
.c-course {
  background-color: #E6E6F0;
  border-radius: 15%;
  padding: 6px;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  &_name {
    @include make-course-name();
    color: black;
  }
}
</style>