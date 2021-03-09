<template>
  <div class="showPost">
    <h1>This is an about page</h1>
    <div v-for="(post, index) in posts" v-bind:key="index">{{ index+1 }}: {{ post.mainTitle }}, {{ post.category }}, {{ post.mainDescription }} <img v-bind:src="post.mainImage">
     <GmapMap
        :center="post.startPosition.position"
        :zoom="18"
        style="width: 500px; height: 500px;">
        <GmapMarker
          :position="post.startPosition.position"
        ></GmapMarker>
      </GmapMap>
      
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'ShowPost',
  data() {
    return {
      posts: [
         {
        mainTitle: ("東京都府中市"),
        category: ("地元"),
        mainDescription: ("地元にある大國魂神社です。"),
        mainImage: require("../assets/sample1.jpg"),
        startPosition: {position:{lat:(35.66747607542623),lng:(139.47899109739402)},}//image: require(string),title:(string),text:(string)},
        // endPosition: {position:{lat:(int),lng:(int)},image:(string),title:(string),text:(string) },
        // relayPosition: [{position:{lat:(int),lng:(int)},image:(string),title:(string),text:(string)},{position:{lat:(int),lng:(int)},image:(string),title:(string),text:(string)},]
        },
        {
          mainTitle: ("早稲田大学"),
          category: ("大学"),
          mainDescription: ("とても大きな大学です。"),
          mainImage: require("../assets/sample2.jpg"),
          startPosition: {position:{lat:(35.709251635804335),lng:(139.72077192659762)},}//image: require(string),title:(string),text:(string)},
          // endPosition: {position:{lat:(int),lng:(int)},image:(string),title:(string),text:(string) },
          // relayPosition: [{position:{lat:(int),lng:(int)},image:(string),title:(string),text:(string)},{position:{lat:(int),lng:(int)},image:(string),title:(string),text:(string)},]
          },
      ],
    }
  },

  }

</script>

<style scoped>

</style>