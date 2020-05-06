<template lang="pug">
  li.c-list-card-item
    nuxt-link(:to="`/posts/${post.id}/`" class="c-list-card-link")
      figure.c-list-card-image
        img(:src="post.image.url" :alt="post.name")
      p.c-list-card-name {{ post.name }}
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
.c-list-card-item {
  @include mq('min') {
   width: calc(100%/4 - 40px);
   margin: 40px 0 0 40px;
  }
  @include mq('max') {
    width: calc(100%/2 - 10px);
    margin: 10px 0 0 10px;
  }
}
.c-list-card-link {
  position: relative;
  display: block;
  width: 100%;
  padding: 143.5% 0 0;
}

.c-list-card-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: hidden;
  border-radius: 8px;
  background-color: #e9e9ec;
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: auto;
    max-width: none;
    height: 100%;
  }
}
.c-list-card-name {
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 2;
  width: 100%;
  padding: 13px;
  font-weight: 700;
  line-height: 1.5;
  color: #fff;
  text-shadow: 0 1px 4px rgba(0,0,0,.5);
  @include mq('max') {
    padding: 10px;
  }
}
</style>
