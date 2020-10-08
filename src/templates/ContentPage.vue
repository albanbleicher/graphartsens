<template>
   <Layout>
      <div class="page">
        <h1> {{$page.data.title}}</h1>
      <div v-html="$page.data.content"></div>
      </div>
   </Layout>
</template>
<static-query>
query getContentPage($path: String! = "/la-graphotherapie") {
  data:contentPage(path:$path) {
    title
    id
    content
  }
}
}
</static-query>
<script>
export default {
  mounted() {
    console.log(this)
  }
}
</script>