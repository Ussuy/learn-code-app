<template>
  <div class="c-logged">
    <Header />
    <Menu v-if="false"/>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'
import Header from './components/Header.vue'
export default {

  components: {
    Header,
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