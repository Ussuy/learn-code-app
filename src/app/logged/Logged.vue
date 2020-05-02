<template>
  <div class="c-logged">
    <Menu />
    <router-view />
  </div>
</template>

<script>
import Menu from './components/Menu.vue'
export default {

  components: {
    Menu
  }

}
</script>

<style>
.c-logged {
  width: 100%;  
  height: 100%;
}
</style>