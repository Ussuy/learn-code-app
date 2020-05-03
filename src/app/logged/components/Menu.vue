<template>
  <transition-group name="slide">
    <nav class="c-menu" v-if="menu" key="nav">
      <span class="c-menu_close" @click="hideMenu()">X</span>
      <ul class="c-menu_list">
        <router-link class="c-menu_item" tag="li" to="/" @click.native="hideMenu()">Index</router-link>
        <router-link class="c-menu_item" tag="li" to="/logged/explore"  @click.native="hideMenu()">Explore</router-link>
        <router-link class="c-menu_item" tag="li" to="/logged/courses"  @click.native="hideMenu()">Courses</router-link>
      </ul>
    </nav>
  </transition-group>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {

  methods: {
    ...mapActions({
      hideMenu: 'hideMenu' 
    }),
  },

  computed: {
    ...mapState({
      menu: state => state.ui.menu
    })
  }

}
</script>

<style lang="scss" scoped>
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

.slide-leave-active,
.slide-enter-active {
  transition: 1s;
}
.slide-enter {
  transform: translate(-100%, 0);
}
.slide-leave-to {
  transform: translate(-100%, 0);
}

</style>