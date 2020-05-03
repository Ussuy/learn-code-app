<template>
  <nav class="c-menu">
    <span class="c-menu_close" @click="hideMenu()">X</span>
    <ul class="c-menu_list">
      <router-link class="c-menu_item" tag="li" to="/">Index</router-link>
      <router-link class="c-menu_item" tag="li" to="/logged/explore">Explore</router-link>
      <router-link class="c-menu_item" tag="li" to="/logged/courses">Courses</router-link>
    </ul>
  </nav>
</template>

<script>
export default {

  methods: {
    hideMenu() {
      return
    }
  }

}
</script>

<style lang="scss">
@import '@/assets/css/mixins/make-elements';
@import '@/assets/css/mixins/reset-elements';

.c-menu {
  width: 200px;
  height: 100vh;
  padding: 25px;
  background: white;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
  box-shadow: 0 1px 5px rgba(61,61,61,.5);
  &_list {
    @include reset-list();
    display: flex;
    flex-direction: column;  
    justify-content: flex-start;
    height: 100%;
  }
  &_item {
    @include make-subtitle();
    margin-bottom: 15px;
  }
  &_close {
    @include make-subtitle();
    position: absolute;
    right: 15px;
    top: 15px;
  }
}

</style>