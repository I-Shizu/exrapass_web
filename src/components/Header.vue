<template>
  <header :class="{ scrolled: isScrolled }">
    <div class="container">
      <div class="logo">exrapass</div>
      <nav>
        <ul>
          <li><a href="#">ホーム</a></li>
          <li><a href="#">私たちについて</a></li>
          <li><a href="#">コース・料金</a></li>
          <li><a href="#">お問い合わせ</a></li>
        </ul>
      </nav>
      <div class="search-bar">
        <input type="text" placeholder="Search...">
      </div>
    </div>
  </header>
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
      this.isScrolled = window.scrollY > 50;
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