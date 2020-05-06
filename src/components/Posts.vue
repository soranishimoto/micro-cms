<template lang="pug">
  ul.c-list-card-items
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
.c-list-card-items {
  display: flex;
  flex-wrap: wrap;
  margin: -20px 0 0 -20px;
  @include mq('max') {
    margin: -10px 0 0 -10px;
  }
}
</style>
