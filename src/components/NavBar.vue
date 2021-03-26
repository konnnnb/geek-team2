<template>
  <div class="nav__bar">
      <router-link to="/" class="nav__logo nav__link">Home</router-link>
      <div class="nav__items">
        <router-link to="/mypage" class="nav__item nav__link">My Page</router-link>
        <router-link to="/post" class="nav__item nav__link">投稿</router-link>
        <router-link to="/mypage" class="nav__item nav__link">マイページ</router-link>
      </div>
  </div>
</template>

<style scoped>
.nav__bar {
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  background-color: #ff99cc;
}

.nav__link {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #ffffff;
  text-decoration: none;
}

.nav__link:visited {
  color: #ffffff;
}

.nav__link:hover {
  font-weight: bold;
  color: red;
}

.nav__logo {
  width: 130px;
}

.nav__items {
  display: flex;
}

.nav__item {
  width: 150px;
  border-left: 3px solid #ffffff;
}
</style>