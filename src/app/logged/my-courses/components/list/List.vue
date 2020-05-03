<template>
  <div class="c-list">
    <div class="c-list_wrap">
      <h1 class="c-list_title">My courses</h1>
      <p class="c-list_label">View all</p>
    </div>
    <carousel :autoplay="true">
      <slide v-for="(course, index) in courses" :key="index" >
        <Course :course="course"/>
      </slide>
    </carousel>
  </div>
</template>

<script>
import Course from './Course.vue'
import { Carousel, Slide } from 'vue-carousel';
export default {

  components: {
    Course,
    Carousel,
    Slide
  },

  data() {
    return {
      courses: [
        {
          name: 'CSS+'
        },
        {
          name: 'Axure RP'
        },
        {
          name: 'HTML5'
        },
        {
          name: 'Redux'
        },
        {
          name: 'C#'
        },
        {
          name: 'Design Patterns'
        },
        {
          name: 'Design'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/mixins/reset-elements.scss';
@import '@/assets/css/mixins/make-elements';

.c-list {
  &_wrap {
    display: flex;
    justify-content: space-between;
    padding-bottom: 25px;
  }
  &_title {
    @include make-subtitle();
    grid-area: title;
    align-self: center;
  }
  &_label {
    @include make-label();
    grid-area: label;
    align-self: center; 
    justify-self: end; 
  }
}
</style>