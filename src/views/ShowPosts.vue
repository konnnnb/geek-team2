<template>
  <div class="showPosts">
      <div class="showPost" v-for="(post, index) in posts" v-bind:key="index">
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
  name: 'ShowPosts',
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