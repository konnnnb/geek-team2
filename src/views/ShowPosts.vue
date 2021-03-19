<template>
  <div class="showPosts">
      <div class="showPost" v-for="(post, index) in posts" v-bind:key="index" v-on:click="ToshowPost(post.id)">

           <h3>{{ post.mainTitle }}</h3>
        <div v-for="(value, index) in post.category" v-bind:key="index">
          <h4>カテゴリー：{{ value }}</h4>
        </div>
        <h5>{{ post.mainDescription }}</h5>
        <img v-bind:src="post.mainImage">
        <div id="hazimari">
          <h5>始点：{{ post.startPosition.title }}</h5>
          <GmapMap
            :center="post.startPosition.position"
            :zoom="18"
            style="width: 500px; height: 500px;">
            <GmapMarker
              :position="post.startPosition.position"
            ></GmapMarker>
          </GmapMap>
        </div>
        <div id="owari">
          <h5>終点：{{ post.endPosition.title }}</h5>
          <GmapMap
            :center="post.endPosition.position"
            :zoom="18"
            style="width: 500px; height: 500px;">
            <GmapMarker
              :position="post.endPosition.position"
            ></GmapMarker>
          </GmapMap>
        </div>
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
.showPost {
  background-color: #fcf9f9;
  box-shadow: 2px 2px 12px #e2e1e1;
  margin-left: 250px;
  margin-right: 250px;
}

img {
  width: 100%;
}

</style>