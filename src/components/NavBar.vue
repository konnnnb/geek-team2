<template>
  <div class="nav__bar">
      <router-link to="/" class="nav__logo nav__link">ホーム</router-link>
      <div class="nav__items">
        <router-link to="/showpost" class="nav__item nav__link">詳細</router-link>
        <router-link to="/post" class="nav__item nav__link">投稿</router-link>
        <router-link to="/mypage" class="nav__item nav__link">マイページ</router-link>
      </div>
    </div>
</template>

<style scoped>
.nav__bar {
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  background-color: black;
}

.nav__link {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #eee;
  text-decoration: none;
}

.nav__link:visited {
  color: #eee;
}

.nav__link:hover {
  font-weight: bold;
  color: #fff;
}

.nav__logo {
  width: 130px;
}

.nav__items {
  display: flex;
}

.nav__item {
  width: 100px;
  border-left: 1px solid #eee;
}
</style>