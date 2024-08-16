<template>
  <div>
    <header :class="{ scrolled: isScrolled }">
      <div class="container">
        <div class="logo">exrapass</div>
        <nav>
          <ul>
            <li><router-link to="/">ホーム</router-link></li>
            <li><router-link to="/aboutUs">私たちについて</router-link></li>
            <li><router-link to="/course-and-charge">コース・料金</router-link></li>
            <li><router-link to="/contact">お問い合わせ</router-link></li>
          </ul>
        </nav>
        <div class="search-bar">
          <input type="text" placeholder="Search...">
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      isScrolled: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 0;
    }
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style scoped>
header {
  background-color: #2b2b3d;
  color: white;
  padding: 10px 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  transition: background 0.3s;
}

header.scrolled {
  background-color: #1a1a2e;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 20px;
}

nav ul li a {
  color: white;
  text-decoration: none;
  font-size: 16px;
}

.search-bar input {
  padding: 5px;
  font-size: 16px;
}
</style>