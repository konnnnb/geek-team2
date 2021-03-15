<template>
  <div class="showPost">
    <h1>This is an about page</h1>
    <div v-for="(post, index) in posts" v-bind:key="index">
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
  data() {
    return {
      posts: [
        //  {
        // mainTitle: ("東京都府中市"),
        // category: ("地元"),
        // mainDescription: ("地元にある大國魂神社です。"),
        // mainImage: require("../assets/sample1.jpg"),
        // startPosition: {position:{lat:(35.66747607542623),lng:(139.47899109739402)},image: require("../assets/sample1.jpg"),title:("a"),text:("aaa")},
        // endPosition: {position:{lat:(35.66747607542623),lng:(139.47899109739402)},image: require("../assets/sample1.jpg"),title:("b"),text:("bbb") },
        // relayPosition: [{position:{lat:(35.66747607542623),lng:(139.47899109739402)},image: require("../assets/sample1.jpg"),title:("c"),text:("ccc")},{position:{lat:(35.66747607542623),lng:(139.47899109739402)},image: require("../assets/sample1.jpg"),title:("d"),text:("ddd")},]
        // },
        // {
        //   mainTitle: ("早稲田大学"),
        //   category: ("大学"),
        //   mainDescription: ("とても大きな大学です。"),
        //   mainImage: require("../assets/sample2.jpg"),
        //   startPosition: {position:{lat:(35.709251635804335),lng:(139.72077192659762)},image: require("../assets/sample2.jpg"),title:("1"),text:("123")},
        //   endPosition: {position:{lat:(35.709251635804335),lng:(139.72077192659762)},image: require("../assets/sample2.jpg"),title:("2"),text:("234")},
        //   relayPosition: [{position:{lat:(35.709251635804335),lng:(139.72077192659762)},image: require("../assets/sample2.jpg"),title:("2"),text:("234")},]
        //   },
      ],
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