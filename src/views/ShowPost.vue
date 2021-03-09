<template>
  <div class="showPost">
    <h1>This is an about page</h1>
    <div v-for="(post, index) in posts" v-bind:key="index">{{ post.mainTitle }}</div>
  </div>
</template>

<script>
export default {
  name: 'ShowPost',
  created: function() {
    this.posts=[
      {
        mainTitle: ("東京都府中市"),
        // category: (category["地元"]),
        mainDescription: ("地元にある大國魂神社です。"),
        mainImage: ("../assets/sample1.jpg"),
        // startPosition: {longitude:(int),latitude:(int),image:(string),title:(string),text:(string)},
        // endPosition: {longitude:(int),latitude:(int),image:(string),title:(string),text:(string) },
        // relayPosition: [{longitude:(int),latitude:(int),image:(string),title:(string),text:(string)},{longitude:(int),latitude:(int),image:(string),title:(string),text:(string)},]
        },
        {
          mainTitle: ("早稲田大学"),
          // category: (category["大学"]),
          mainDescription: ("とても大きな大学です。"),
          mainImage: ("../assets/sample2.jpg"),
          },
          ]
  },
  data: function() {
    return {
      posts: [
        {
          mainTitle: "",
          mainDescription: "",
          mainImage: "",
        }
      ],
    }
  },

  }

</script>

<style scoped>

</style>