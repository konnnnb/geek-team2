<template>
  <transition name='point' appear>
       <div class="transitions">
          <div key="start"> {{post.title }}</div>
          <div key="text">{{post.text}}</div>
          <!-- <img v-bind:src="post.image" alt="aa" width="20%"> -->
       </div>
    </transition>
</template>

<script>
export default {
  props: {
     post: {
        type: Object, // String型に限定
        required: true, // 必須項目
    },
  }
}
</script>

<style scoped>
.transitions {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.point-enter-active, .point-leave-active {
  transition: opacity 1s;
}
.point-enter,.point-leave-to {
  opacity: 0;
}

@keyframes identifier {
  to{}
  from{}
}
</style>