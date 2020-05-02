<template>
  <div class="c-index">
    <h1 class="c-index_logo">\learncoding:</h1>
    <router-link class="c-index_label" to="/logged/explore">Skip</router-link> 
    <h2 class="c-index_subtitle">Learn to code.<br />Free for students</h2>
    <img class="c-index_image" src="./../../assets/images/index.png" alt="Imagem do index">
    <router-link tag="div" class="c-index_start" to="/logged/explore">Start</router-link> 

  </div>
</template>

<script>

export default {

}
</script>

<style lang="scss" scoped>
@import '@/assets/css/mixins/make-elements';
.c-index {
  width: 100%;  
  height: 100%;
  position: relative;
  background-position: center;
  display: grid;
  grid-template:
  'title label'
  'subtitle subtitle'
  'image image';
  row-gap: 18px;
  &_logo {
    grid-area: title;
    align-self: center;
    @include make-logo();
  }
  &_label {
    @include make-label();
    grid-area: label;
    text-decoration: none;
    place-self: center;
  }
  &_subtitle {
    grid-area: subtitle;
    @include make-subtitle();
  }
  &_image {
    grid-area: image;
    width: 100%;
  }
  &_start {
    position: absolute;
    right: 5%;
    bottom: 5%;
    font-family: 'Montserrat', sans-serif;
    border: 1px solid black;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    color: #FFF;
  }
}
</style>
