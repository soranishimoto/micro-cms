<template lang="pug">
  div.c-page
    .c-container.-small
      article
        h1.name {{ post.name }}
        div.article-parts(
          v-html="post.content"
        )
        div.article-parts
          h2.heading カテゴリー
          ul.category
           li(v-for="item in post.category") {{item.category}}
        div.article-parts
          h2.heading 食べログURL
          p.url
           a(:href="post.url" target="_blank" rel="noopener noreferrer" class="c-link-under-line") {{ post.url }}
        div.article-parts
          picture.image
            source(:srcset="post.image.url+ '?fm=webp'", type="image/webp")
            img(:src="post.image.url" :alt="'写真：' +post.name" width="1200" height="1200")
        div.c-button-area
          p.c-button
            nuxt-link(to="/" class="c-button-link") トップへ戻る
</template>

<script>
import axios from 'axios'

export default {
	data () {
    return {
      meta: {
        type: 'article'
      },
    }
  },
  head () {
    return {
      title: this.meta.title,
      meta: [
        { hid: 'og:type', property: 'og:type', content: this.meta.type }
      ],
    }
  },
  async asyncData( { params } ) {
    const { data } = await axios.get(
      `${process.env.API_URL}/${params.id}`,
      {
        headers: { 'X-API-KEY': process.env.API_KEY }
      }
    )
    return {
      post: data
    }
  }
};
</script>

<style lang="scss" scoped>
h1 {
  margin-bottom: 30px;
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.5;
  @include mq('max') {
    margin-bottom: 15px;
    font-size: 2rem;
  }
}
h2 {
  margin-bottom: 10px;
  font-size: 1.8rem;
  font-weight: 700;
  @include mq('max') {
    font-size: 1.4rem;
  }
}
.article-parts {
  margin-bottom: 40px;
}
</style>
