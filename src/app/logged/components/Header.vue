<template>
  <div class="c-header">
      <header class="c-header_header">
        <div class="c-header_openMenu" @click="showMenu()"></div>
        <h1 class="c-header_logo">/learncoding</h1>
        <div class="c-header_userPhoto"></div>
      </header>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {

  methods: {
    ...mapActions({
      showMenu: 'showMenu'
    }),
  },

  mounted() {
    console.log(this)
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/mixins/make-elements';
.c-header {
  width: 100%;
  padding: 15px 0;
  &_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &_logo {
    font-family: 'Kanit', sans-serif;
    font-size: 16px;
  }
  &_openMenu {
    width: 15px;
    height: 10px;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
  }
  &_userPhoto {
    background-image: url('https://avatars3.githubusercontent.com/u/22720953?s=460&u=d6981c42b1ff94318d3f12a99883a29fb568de0b&v=4');
    background-size: cover;
    width: 40px;
    height: 40px;
    border-radius: 4px;
  }
}
</style>