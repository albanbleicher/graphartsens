<template>
   <Layout>
      <h1> {{$page.data.title}}</h1>
      <p class="date"> {{$page.data.date}}</p>
      <div v-html="$page.data.content"></div>
      <img :src="$page.data.featured" :alt="'Illustration - '+ $page.data.title" width="300">
   </Layout>
</template>
<page-query>

query getPage($path: String!) {
  data: contentPage(path: $path) {
    id
    title
    content
    date
  }
}


</page-query>