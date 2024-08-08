<template>
  <div id="app">
    <Header />
    <Hero />
    <MainContent />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import MainContent from './components/MainContent.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Hero,
    MainContent,
    Footer
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: 'Arial', sans-serif;
  background-color: #f5f5f5;
  color: #333;
}
</style>
