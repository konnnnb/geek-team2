<template>
  <div class="container">
    <p>マイページです</p>
    <button type="button" @click="logout()" v-if="isLoggedIn">ログアウトする</button>
    <button @click="deleted()" v-if="isLoggedIn">アカウント削除</button>
    <div class ="boxes">
    <div class="box"><Signin v-if="!isLoggedIn"></Signin></div>
    <div class="box"><Signup v-if="!isLoggedIn"></Signup></div>
    <div class="box"><Collect v-if="isLoggedIn"></Collect></div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase"
import Signin from "../components/Signin"
import Signup from "../components/Signup"
import Collect from "../components/Collect"
export default {
  data() {
    return {
      tools: false,
    }
  },
  components: {
    Signin,
    Signup,
    Collect,
  },
  methods: {
    logout() {
      this.$store.commit("updateUid", null)
      // this.$router.push("/signin")
      
    },
    deleted(){
    const user = firebase.auth().currentUser;

    user.delete().then(function() {
  // User deleted.
  console.log("削除")
}).catch(function() {
  // An error happened.
  alert("エラー")
});
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.uid !== null
    },
  },
}
</script>
<style>
.boxes{
  display: flex;
	justify-content: space-around;

}
.box{
  background-color: #fcf9f9;
  box-shadow: 2px 2px 12px #e2e1e1;
  /* margin: block 80px; */
}
</style>
