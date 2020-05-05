<template lang="pug">
  li
    nuxt-link(:to="`/posts/${post.id}/`")
      figure.image
        img(:src="post.image.url" :alt="post.name")
      p.name {{ post.name }}
</template>

<script>
export default {
  name: 'Post',
  props:{
    'post': {
      type: Object,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
li {
  @include mq('min') {
   width: calc(100%/4 - 40px);
   margin: 40px 0 0 40px;
  }
  @include mq('max') {
   &:not(:first-child) {
     margin-top: 20px;
   }
  }
  a {
    @include mq('max') {
     display: flex;
     align-items: center;
    }
  }
}
.name {
  font-weight: 700;
  @include mq('min') {
    margin-top: 10px;
    text-align: center;
  }
  @include mq('max') {
    flex: 1 1 0%;
    padding-left: 20px;
  }
}

.image {
  @include mq('max') {
   width: 120px;
  }
}
</style>
