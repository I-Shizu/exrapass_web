<template>
  <footer>
    <div class="container">
      <p><a href="#">プライバシーポリシー</a> | <a href="#">Cookie（クッキー）ポリシー</a></p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
}
</script>

<style scoped>
footer {
  background: #2b2b3d;
  color: white;
  text-align: center;
  padding: 10px 0;
}

footer a {
  color: white;
  text-decoration: none;
  margin: 0 5px;
}
</style>