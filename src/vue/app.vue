<template>
  <div id="app">
    <app-header />
    <p>{{ greeting }} World!</p>
    <app-footer />
  </div>
</template>

<script>
  import Header from './components/header';
  import Footer from './components/footer';

  export default {
    components: {
      'app-header': Header,
      'app-footer': Footer,
    },
    data() {
      return {
        greeting: 'Hello'
      }
    },
    beforeCreate() {
      console.log('beforeCreate');
    },
    created() {
      console.log('created');
    },
    beforeMount() {
      console.log('beforeMount');
    },
    mounted() {
      console.log('mounted');
    },
    beforeUpdate() {
      console.log('beforeUpdate');
    },
    updated() {
      console.log('updated');
    },
    beforeDestroy() {
      console.log('beforeDestroy');
    },
    destroyed() {
      console.log('destroyed');
    }
  }
</script>

<style scoped>
  p {
    font-size: 2em;
    text-align: center;
  }
</style>
