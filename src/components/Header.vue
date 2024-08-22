<template>
  <div>
    <header :class="{ scrolled: isScrolled }">
      <div class="container">
        <div class="logo">Logo</div>
        <div class="nav-icon" @click="toggleMenu">☰</div>
      </div>
      <div :class="['nav-menu', { open: isMenuOpen }]" ref="navMenu">
          <ul>
            <li><router-link to="/">エクラパスとは？</router-link></li>
            <li><router-link to="/aboutUs">指導内容</router-link></li>
            <li><router-link to="/course-and-charge">コースと料金</router-link></li>
            <li><router-link to="/contact">お問い合わせ</router-link></li>
          </ul>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      isMenuOpen: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      if (this.isMenuOpen) {
        document.addEventListener('click', this.handleOutsideClick);
      } else {
        document.removeEventListener('click', this.handleOutsideClick);
      }
    },
    handleOutsideClick(event) {
      const navMenu = this.$refs.navMenu;
      if (!navMenu.contains(event.target) && !event.target.classList.contains('nav-icon')) {
        this.isMenuOpen = false;
        document.removeEventListener('click', this.handleOutsideClick);
      }
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 0;
    },
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleOutsideClick);
  }
}
</script>

<style scoped>
header {
  color: white;
  padding: 10px 0;
  position: fixed;
  width: 100%;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px; 
  padding: 0 20px;
}

.nav-icon {
  cursor: pointer;
  color: blue;
  font-size: 24px;
  margin-left: auto;
}

.nav-menu {
  position: fixed;
  top: 0;
  right: -250px; /* 初期状態で画面外に配置 */
  width: 250px;
  height: 100%;
  background-color: #2b2b3d;
  border-radius: 5px 0 0 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: right 0.3s ease; /* スライドインのアニメーション */
}

.nav-menu.open {
  right: 0; /* 表示状態 */
}

.nav-menu ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-menu li {
  margin: 0;
  padding: 10px 20px;
}

.nav-menu a {
  color: white;
  text-decoration: none;
}

.nav-menu a:hover {
  text-decoration: underline;
}
</style>