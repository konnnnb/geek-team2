<template>
  <div class="showPost">

    <div v-for="(post, index) in posts" v-bind:key="index" :post="post" >
      <h1 v-on:click="ToshowPost(post.id)">詳細</h1>
      <h3>{{ post.mainTitle }}</h3>
      {{ post.category }}, {{ post.mainDescription }}
      <img v-bind:src="post.mainImage">
     <GmapMap
        :center="post.startPosition.position"
        :zoom="18"
        style="width: 500px; height: 500px;">
        <GmapMarker
          :position="post.startPosition.position"
        ></GmapMarker>
      </GmapMap>
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
</style>