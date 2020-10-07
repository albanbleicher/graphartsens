<template>
   <Layout>
      <div class="page">
        <h1> {{$page.data.title}}</h1>
      <div v-html="$page.data.content"></div>
      <img :src="$page.data.featured" :alt="'Illustration - '+ $page.data.title" width="300">
      </div>
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