<template>
   <Layout>
      <div class="page">
        <h1> {{$page.data.title}}</h1>
      <div v-html="$page.data.content"></div>
      </div>
   </Layout>
</template>
<page-query>
query getContentPage($path: String! = "/la-graphotherapie") {
  data:contentPage(path:$path) {
    title
    id
    content
  }
}
</page-query>
<script>
export default {
metaInfo() {
    return {
      title: this.$page.data.title,

    }
}
}
</script>