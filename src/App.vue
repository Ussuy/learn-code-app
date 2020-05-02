<template>
  <div id="app">
    <!-- <Logged /> -->
    <Index />
  </div>
</template>

<script>
import Index from './app/not-logged/Index.vue'
// import Logged from './app/logged/Logged.vue'

export default {
  name: 'App',
  components: {
    Index,
    // Logged
  }
}
</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  height: 100vh;
  padding: 16px 20px;
}
</style>
