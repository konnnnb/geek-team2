<template>

  <div class="showPosts">
      <div class="showPost" v-for="(post, index) in posts" v-bind:key="index" v-on:click="ToshowPost(post.id)">
        <h2>{{ post.mainTitle }}</h2>
        <div v-for="(value, index) in post.category" v-bind:key="index">
          <h4>#{{ value }} </h4>
        </div>
        <h5>{{ post.mainDescription }}</h5>
        <img v-bind:src="post.mainImage">
    </div>
  </div>
</template>

<script>
import firebase from "firebase"
export default {
  name: 'ShowPost',
  methods :{
  ToshowPost: function(id){
  this.$router.push("/showpost/" + id);
    }
    },
  data() {
    return {
      posts: [],
    }
  },

  created() {
  
    firebase
      .firestore()
      .collection("posts")
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
          this.posts.push({
            id: doc.id,
            ...doc.data()
          });
        });
      });
  },
}
</script>

<style scoped>
.showPosts {
  display: grid;
  grid-template-columns: 50% 50%;
}

.showPost {
  background-color: #fcf9f9;
  box-shadow: 2px 2px 12px #e2e1e1;
  padding: 20px;
  margin: 10px;
}

h2 {
  text-align: center;
}

.showPost img {
  width: 90%;
  display: block;
  margin: auto;
}

</style>