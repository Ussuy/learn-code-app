<template>
  <div class="c-logged">
    <Menu />
    <Explore />
  </div>
</template>

<script>
import Menu from './components/Menu.vue'
import Explore from './explore/Explore.vue'
export default {

  components: {
    Menu,
    Explore
  }

}
</script>

<style>
.c-logged {
  width: 100%;  
  height: 100%;
}
</style>