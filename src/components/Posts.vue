<template lang="pug">
  ul
    Post(
      v-for="(post,index) in posts"
      :key="index"
      :post="post"
    )
</template>

<script>
import axios from 'axios'
import Post from '~/components/Post.vue'

export default {
  name: 'Posts',
  components: {
    Post
  },
  data() {
    return {
      posts: []
    }
  },
  mounted :function(){
    axios.get(
      process.env.API_URL,
      {
        headers: { "X-API-KEY": process.env.API_KEY }
      }
    )
    .then( response => {
      this.posts = response.data.contents
    })
    .catch( error => {
      console.log(error)
    })
  }
}
</script>

<style lang="scss" scoped>
ul {
  @include mq('min') {
    display: flex;
    flex-wrap: wrap;
    margin: -40px 0 0 -40px;
  }
}
</style>
