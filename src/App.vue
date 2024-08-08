<template>
  <div id="app">
    <HeaderComponent />
    <HeroComponent />
    <MainContent />
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from './components/Header.vue';
import HeroComponent from './components/Hero.vue';
import MainContent from './components/MainContent.vue';
import FooterComponent from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    HeroComponent,
    MainContent,
    FooterComponent
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
