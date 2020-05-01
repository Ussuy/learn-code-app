<template>
  <div class="c-explore">
    <Menu />
    <Title />
    <Search />
    <List />
    <Footer />
  </div>
</template>

<script>
import Title from './components/Title.vue'
import Menu from './components/Menu.vue'
import Search from './components/Search.vue'
import List from './components/list/List.vue'
import Footer from './components/Footer.vue'
export default {

  components: {
    Title,
    Menu,
    Search,
    List,
    Footer,
  },

}
</script>

<style lang="scss">
.c-explore {
  width: 100%;  
  height: 100%;
}
</style>