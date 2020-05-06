<template lang="pug">
   div.c-page
    .c-container
     .intro
      h2.c-heading-h2 Fukuoka × Gourmet
      p 福岡（天神・大名・博多・今泉…etc）には美味しいグルメがたくさんあります。<br>SORA.LOG（ソラログ）ではこれまで行ったお店の中からおすすめできるスポットについてご紹介したいと思います#[span.emoji 😎📷]
    .c-container
     .c-page-heading
      h2.c-heading-h2 Article
      p すべての記事
     Posts
</template>

<script>
import Posts from '~/components/Posts.vue'

export default {
  components: {
    Posts
  }
}
</script>

<style lang="scss" scoped>
 .intro {
   margin-bottom: 40px;
   padding: 40px;
   text-align: center;
   color: rgba(0,0,0,0.5);
   box-shadow: 1px 4px 6px 0 rgba(0,0,0,0.1);
   border-radius: 5px;
   background: #fff;
   .c-heading-h2 {
    margin-bottom: 10px;
    color: #C2371A;
   }
   p {
    @include mq('max') {
      text-align: left;
    }
   }
   .emoji {
     color: rgba(0,0,0,1);
   }
   @include mq('max') {
    margin-bottom: 20px;
    padding: 20px;
   }
 }
</style>
