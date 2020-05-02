<template>
  <div class="c-explore">
    <Title />
    <Search />
    <List />
    <Footer />
  </div>
</template>

<script>
import Title from './components/Title.vue'
import Search from './components/Search.vue'
import List from './components/list/List.vue'
import Footer from './components/Footer.vue'
export default {

  components: {
    Title,
    Search,
    List,
    Footer,
  },

}
</script>

<style lang="scss" scoped>
.c-explore {
}
</style>