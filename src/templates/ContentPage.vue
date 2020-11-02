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
    header_photo
  }
}
</page-query>
<script>
export default {
metaInfo() {
    return {
      title: this.$page.data.title,
    }
},
mounted() {
  this.addListeners()
  console.log(this)
  document.querySelector('.layout').style.backgroundImage='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url('+this.$page.data.header_photo+')';
document.querySelector('.layout').style.backgroundPosition='top'

},
updated() {
  this.addListeners()
  document.querySelector('.layout').style.backgroundImage='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url('+this.$page.data.header_photo+')';
document.querySelector('.layout').style.backgroundPosition='top'
},
methods: {
   addListeners() {
      let blocks = document.querySelectorAll('ol>li');
      if(blocks.length>0) {
        blocks.forEach(item => {
          item.addEventListener('click', () => {
             if(item.querySelector('ul').style.display === 'none' || item.querySelector('ul').style.display === '') {
               item.querySelector('ul').style.display = 'block'
             }
             else {
               item.querySelector('ul').style.display = 'none'
             }
          })
        })
      }
    }
}

}
</script>