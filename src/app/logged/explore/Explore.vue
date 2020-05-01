<template>
  <div class="c-explore">
    <Menu />
    <Title />
  </div>
</template>

<script>
import Title from './components/Title.vue'
import Menu from './components/Menu.vue'
export default {

  components: {
    Title,
    Menu
  },

}
</script>

<style lang="scss">
.c-explore {
  width: 100%;  
  height: 100%;
}
</style>