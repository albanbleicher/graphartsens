<template>
   <Layout>
      <h1> {{$page.post.title}}</h1>
      <p class="date"> {{$page.post.date}}</p>
      <div v-html="$page.post.content"></div>
      <img :src="$page.post.featured" :alt="'Illustration - '+ $page.post.title" width="300">
   </Layout>
</template>
<page-query>

query getPosts($path: String!) {
  post: blog(path: $path) {
    id
    title
    content
    date
  }
}


</page-query>