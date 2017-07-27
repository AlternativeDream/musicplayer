<template>
  <div id="app">
    <router-view></router-view>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import footer from './components/footer/footer.vue';
export default {
  name: 'app',
  components: {
      'v-footer': footer
  }
}
</script>

<style>
  @import '../static/css/main.css';
  .app {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
</style>