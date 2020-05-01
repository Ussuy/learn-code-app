<template>
  <div class="c-list">
      <Course v-for="(course, index) in courses" :key="index" :course="course" />
  </div>
</template>

<script>
import Course from './Course'

export default {

  components: {
    Course
  },

  data() {
    return {
      courses: [
        {
          name: 'PHP for dummies'
        },
        {
          name: 'HTML5'
        },
        {
          name: 'Python Tutorial for Beginners'
        },
      ]
    } 
  }
}
</script>

<style lang="scss">
.c-list {
  display: grid;
  grid-template: auto / 1fr 1fr;
  grid-gap: 15px;
  justify-items: center;
  padding-top: 25px;
}
</style>