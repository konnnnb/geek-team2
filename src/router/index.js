import Vue from "vue";
import VueRouter from "vue-router";
import Post from "../views/Post.vue";
import ShowPost from "../views/ShowPost.vue";
import ShowPosts from "../views/ShowPosts.vue";
import MyPage from "../views/MyPage.vue";
import store from "../store";
import MyPageEdit from "../views/MyPageEdit.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "ShowPosts",
    component: ShowPosts,
  },
  {
    path: "/showpost/:id",
    name: "ShowPost",
    component: ShowPost,
  },
  {
    path: "/post",
    name: "Post",
    component: Post,
    // meta: { requiresAuth: true },
    beforeEnter(to, from, next) {
      if (store.getters.uid) {
        next();
      } else {
        next("/mypage");
      }
    },
  },
  {
    path: "/mypage",
    name: "MyPage",
    component: MyPage,
    // meta: { requiresAuth: true },
  },
  {
    path: "/mypage-edit/:id",
    name: "MyPageEdit",
    component: MyPageEdit,
    // meta: { requiresAuth: true },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
